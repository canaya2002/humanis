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

  // Verificar si expiró para ajustar el título (opcional pero recomendado para UX en buscadores)
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

  // Solo devolvemos 404 si la vacante NO existe en la base de datos.
  // Si existe pero expiró, NO hacemos notFound() para mantener el SEO, simplemente mostramos el aviso.
  if (!vacancy) {
    notFound();
  }

  // 1. Lógica de Expiración (Server Side)
  // Comparamos la fecha de validez con la fecha actual
  const isExpired = new Date(vacancy.validThrough) < new Date();

  // 2. Lógica robusta para parsing de salario (evita errores con formatos como "$18k" o "A convenir")
  const rawSalary = vacancy.salary.replace(/[^0-9-]/g, ''); 
  const parts = rawSalary.split('-');
  const minSalary = parts[0] ? parseInt(parts[0], 10) : 0;
  // Si no hay rango (ej: solo "20000"), el máximo es igual al mínimo
  const maxSalary = parts[1] ? parseInt(parts[1], 10) : minSalary;

  // 3. Construcción del Schema.org JobPosting
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
    "validThrough": vacancy.validThrough, // Google leerá esto; si expiró, la quita de Google Jobs automáticamente
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
        "minValue": minSalary,
        "maxValue": maxSalary,
        "unitText": "MONTH"
      }
    },
    "jobLocationType": vacancy.type === 'Remoto' ? 'TELECOMMUTE' : undefined,
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "MX"
    },
    "url": `https://www.humanis.com.mx/vacantes/${slug}`
  };

  return (
    <>
      {/* Inyectar Schema JobPosting en el HEAD (Invisible al usuario, visible para Google) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingSchema)
        }}
      />
      
      {/* Renderizamos el Cliente y le pasamos el dato de si expiró */}
      <VacanteDetailClient vacancy={vacancy} isExpired={isExpired} />
    </>
  );
}