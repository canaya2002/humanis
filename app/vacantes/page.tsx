import { Metadata } from 'next';
import VacantesClient from './VacantesClient';

export const metadata: Metadata = {
  title: 'Bolsa de Trabajo - Vacantes de Empleo en México | Humanis',
  description: 'Explora oportunidades de empleo en todo México. Vacantes operativas, administrativas y ejecutivas. Servicio gratuito para candidatos. Postúlate hoy mismo.',
  keywords: [
    'vacantes empleo México',
    'bolsa de trabajo CDMX',
    'empleos operativos',
    'vacantes administrativas',
    'ofertas de trabajo México',
    'empleos sin costo',
    'vacantes activas'
  ],
  alternates: {
    // CORRECCIÓN B: Uso de ruta relativa. 
    // Next.js resolverá esto usando metadataBase definido en app/layout.tsx
    canonical: '/vacantes'
  },
  openGraph: {
    title: 'Vacantes de Empleo en México | Humanis',
    description: 'Encuentra tu próximo empleo. Vacantes verificadas en empresas líderes. Proceso de postulación sin costo.',
    url: '/vacantes',
    siteName: 'Humanis México',
    locale: 'es_MX',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bolsa de Trabajo | Humanis México',
    description: 'Vacantes de empleo operativas y administrativas en todo México.'
  }
};

export default function VacantesPage() {
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
        "name": "Vacantes",
        "item": "https://www.humanis.com.mx/vacantes"
      }
    ]
  };

  // CollectionPage schema
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Vacantes de Empleo en México",
    "description": "Listado de oportunidades de empleo operativas, administrativas y ejecutivas en México.",
    "url": "https://www.humanis.com.mx/vacantes",
    "publisher": {
      "@type": "Organization",
      "name": "Humanis"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <VacantesClient />
    </>
  );
}