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
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
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
      // Canonical relativo para usar metadataBase del layout
      canonical: `/vacantes/${slug}`,
    },
    openGraph: {
      title: `${titlePrefix}${vacancy.title} - ${vacancy.company}`,
      description: vacancy.description,
      // URL para OG (aquí sí se prefiere absoluta o relativa resuelta por Next.js)
      url: `/vacantes/${slug}`,
      type: 'website',
      locale: 'es_MX',
    },
  };
}

export default async function VacantePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vacancy = getVacancyBySlug(slug);

  if (!vacancy) {
    notFound();
  }

  const isExpired = new Date(vacancy.validThrough) < new Date();

  // --- LÓGICA DE PARSEO DE SALARIO ROBUSTA ---
  // 1. Normalizar separadores y convertir a minúsculas
  let cleanSalary = vacancy.salary.toLowerCase().replace(' a ', '-').replace(' to ', '-');
  // 2. Eliminar todo excepto números y guiones
  cleanSalary = cleanSalary.replace(/[^0-9-]/g, ''); 
  
  const parts = cleanSalary.split('-');
  
  // Parsear valores
  const minSalary = parts[0] ? parseInt(parts[0], 10) : 0;
  const maxSalary = parts[1] ? parseInt(parts[1], 10) : minSalary;

  // Validación: Solo incluir salario en schema si hay valores lógicos
  const hasSalary = !isNaN(minSalary) && minSalary > 0;

  // Construcción del Schema.org JobPosting
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
    
    // CORRECCIÓN A: Referencia por ID para evitar duplicidad y fortalecer entidad
    "hiringOrganization": {
      "@type": "Organization",
      "@id": "https://www.humanis.com.mx/#organization" 
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
    
    // Inserción condicional de salario
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
    
    // CORRECCIÓN B: Indicar aplicación directa
    "directApply": true,
    
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