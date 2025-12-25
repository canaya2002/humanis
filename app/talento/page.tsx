import { Metadata } from 'next';
import TalentoClient from './TalentoClient';

export const metadata: Metadata = {
  title: 'Vacantes de Empleo Gratuitas para Talento | Humanis México',
  description: 'Servicio 100% gratuito para candidatos. Accede a vacantes operativas, administrativas y ejecutivas en CDMX y toda la República Mexicana. No cobramos al talento.',
  keywords: [
    'vacantes empleo México',
    'bolsa de trabajo gratuita',
    'empleos CDMX',
    'vacantes operativas',
    'empleos administrativos',
    'agencia empleo sin costo',
    'colocación de talento México'
  ],
  alternates: {
    canonical: 'https://www.humanis.com.mx/talento'
  },
  openGraph: {
    title: 'Vacantes de Empleo | Servicio Gratuito para Talento | Humanis',
    description: 'Regístrate sin costo. Accede a vacantes validadas en empresas líderes. Acompañamiento en todo el proceso de colocación.',
    url: 'https://www.humanis.com.mx/talento',
    siteName: 'Humanis México',
    locale: 'es_MX',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Encuentra tu Próximo Empleo | Humanis',
    description: 'Servicio gratuito para talento. Vacantes operativas y administrativas en todo México.'
  }
};

export default function TalentoPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://www.humanis.com.mx"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Para Talento",
        "item": "https://www.humanis.com.mx/talento"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Colocación de Talento y Búsqueda de Empleo",
    "provider": { "@type": "Organization", "name": "Humanis" },
    "description": "Servicio gratuito de vinculación laboral para candidatos en México. Acceso a vacantes operativas, administrativas y ejecutivas.",
    "audience": { "@type": "Audience", "audienceType": "Job Seekers" },
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "MXN" },
    "areaServed": "MX"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <TalentoClient />
    </>
  );
}
