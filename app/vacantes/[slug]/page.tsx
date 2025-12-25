import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import VacanteDetailClient from './VacanteDetailClient';
import { getVacancyBySlug, getAllVacancySlugs, Vacancy } from '../../vacanciesData';

// Generar rutas estáticas en build time
export async function generateStaticParams() {
  const slugs = getAllVacancySlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Metadata dinámica para SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const vacancy = getVacancyBySlug(params.slug);

  if (!vacancy) {
    return {
      title: 'Vacante no encontrada',
    };
  }

  return {
    title: `${vacancy.title} - ${vacancy.company} | Humanis`,
    description: `${vacancy.description} Ubicación: ${vacancy.location}. Salario: ${vacancy.salary}. Aplica ahora con Humanis.`,
    alternates: {
      canonical: `https://www.humanis.com.mx/vacantes/${params.slug}`,
    },
    openGraph: {
      title: `${vacancy.title} - ${vacancy.company}`,
      description: vacancy.description,
      url: `https://www.humanis.com.mx/vacantes/${params.slug}`,
      type: 'website',
      locale: 'es_MX',
    },
  };
}

export default function VacantePage({ params }: { params: { slug: string } }) {
  const vacancy = getVacancyBySlug(params.slug);

  if (!vacancy) {
    notFound();
  }

  // Schema.org JobPosting - ESTO ES LO CRÍTICO PARA GOOGLE JOBS
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": vacancy.title,
    "description": vacancy.description,
    "identifier": {
      "@type": "PropertyValue",
      "name": "Humanis",
      "value": `humanis-${vacancy.id}`
    },
    "datePosted": vacancy.datePosted,
    "validThrough": vacancy.validThrough,
    "employmentType": vacancy.employmentType || "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Humanis",
      "sameAs": "https://www.humanis.com.mx",
      "logo": "https://www.humanis.com.mx/humanislogo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": vacancy.location.includes('CDMX') ? 'Ciudad de México' : vacancy.location,
        "addressRegion": vacancy.location.includes('CDMX') ? 'CDMX' : 'México',
        "addressCountry": "MX"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "MXN",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": parseFloat(vacancy.salary.match(/\d{1,3}(?:,\d{3})*/)?.[0]?.replace(',', '') || '0'),
        "maxValue": parseFloat(vacancy.salary.match(/\d{1,3}(?:,\d{3})*/g)?.[1]?.replace(',', '') || '0'),
        "unitText": "MONTH"
      }
    },
    "jobLocationType": vacancy.type === 'Remoto' ? 'TELECOMMUTE' : undefined,
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "MX"
    },
    "url": `https://www.humanis.com.mx/vacantes/${params.slug}`
  };

  return (
    <>
      {/* Inyectar Schema JobPosting en el HEAD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingSchema)
        }}
      />
      
      {/* Componente cliente para la UI */}
      <VacanteDetailClient vacancy={vacancy} />
    </>
  );
}