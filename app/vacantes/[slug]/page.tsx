import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import VacanteDetailClient from './VacanteDetailClient';
import { getVacancyBySlug, getAllVacancySlugs } from '../../vacanciesData';

// Generar rutas estáticas en build time para mejor rendimiento
export async function generateStaticParams() {
  const slugs = getAllVacancySlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Metadata dinámica para SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const vacancy = getVacancyBySlug(slug);

  if (!vacancy) {
    return {
      title: 'Vacante no encontrada',
    };
  }

  const isExpired = new Date(vacancy.validThrough) < new Date();
  const titlePrefix = isExpired ? '[Cerrada] ' : '';

  return {
    title: `${titlePrefix}${vacancy.title} - ${vacancy.company} | Humanis`,
    description: `${vacancy.description} Ubicación: ${vacancy.location}. Salario: ${vacancy.salary}. Aplica ahora con Humanis.`,
    alternates: {
      canonical: `https://www.humanis.com.mx/vacantes/${slug}`,
    },
    openGraph: {
      title: `${titlePrefix}${vacancy.title} - ${vacancy.company}`,
      description: vacancy.description,
      url: `https://www.humanis.com.mx/vacantes/${slug}`,
      type: 'website',
      locale: 'es_MX',
    },
  };
}

export default async function VacantePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const vacancy = getVacancyBySlug(slug);

  if (!vacancy) {
    notFound();
  }

  const isExpired = new Date(vacancy.validThrough) < new Date();

  // --- LÓGICA ROBUSTA DE PARSEO DE SALARIO ---
  // Elimina todo lo que no sea número o guión
  const rawSalary = vacancy.salary.replace(/[^0-9-]/g, ''); 
  const parts = rawSalary.split('-');
  
  // Intenta parsear; si falla o está vacío, será 0 o NaN
  const minSalary = parts[0] ? parseInt(parts[0], 10) : 0;
  // Si no hay rango (ej. "$20,000"), el max es igual al min
  const maxSalary = parts[1] ? parseInt(parts[1], 10) : minSalary;

  // Validación crítica: Solo incluimos salario en el schema si detectamos un valor positivo
  const hasSalary = !isNaN(minSalary) && minSalary > 0;

  // Construcción del Schema.org JobPosting - OPTIMIZADO Y ROBUSTO
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
      "logo": "https://www.humanis.com.mx/humanislogo.png",
      "@id": "https://www.humanis.com.mx/#organization" // Vinculación semántica
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
    // Inserción condicional del objeto baseSalary
    ...(hasSalary && {
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "MXN",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": minSalary,
          "maxValue": maxSalary,
          "unitText": "MONTH"
        }
      }
    }),
    "jobLocationType": vacancy.type === 'Remoto' ? 'TELECOMMUTE' : undefined,
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "MX"
    },
    "url": `https://www.humanis.com.mx/vacantes/${slug}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingSchema)
        }}
      />
      
      <VacanteDetailClient vacancy={vacancy} isExpired={isExpired} />
    </>
  );
}