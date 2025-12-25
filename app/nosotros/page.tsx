import { Metadata } from 'next';
import NosotrosClient from './NosotrosClient';

export const metadata: Metadata = {
  title: 'Sobre Humanis | Agencia de Colocación Certificada en CDMX',
  description: 'Agencia de colocación de personal con registro STPS vigente. Más de 2,500 profesionales colocados en empresas líderes de México. Transparencia y cumplimiento normativo garantizado.',
  keywords: [
    'agencia de colocación certificada',
    'registro STPS México',
    'agencia empleo CDMX',
    'humanis quienes somos',
    'agencia legal colocación',
    'cumplimiento normativo empleo'
  ],
  alternates: {
    canonical: 'https://www.humanis.com.mx/nosotros'
  },
  openGraph: {
    title: 'Nosotros | Agencia de Colocación Certificada | Humanis',
    description: 'Registro STPS vigente. Operamos con total transparencia y cumplimiento legal en la colocación de personal.',
    url: 'https://www.humanis.com.mx/nosotros',
    siteName: 'Humanis México',
    locale: 'es_MX',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Humanis | Agencia Certificada',
    description: 'Transparencia y cumplimiento en la colocación de talento.'
  }
};

export default function NosotrosPage() {
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
        "name": "Nosotros",
        "item": "https://www.humanis.com.mx/nosotros"
      }
    ]
  };

  // AboutPage Schema (E-E-A-T) - CORREGIDO
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "@id": "https://www.humanis.com.mx/#organization", // <--- VINCULACIÓN MAESTRA AGREGADA
      "name": "Humanis",
      "legalName": "Humanis S.A. de C.V.",
      "description": "Agencia de colocación de personal con registro STPS vigente. Intermediamos entre empresas y talento con total transparencia y cumplimiento normativo.",
      "url": "https://www.humanis.com.mx",
      "foundingDate": "2020",
      "areaServed": "MX",
      "knowsAbout": [
        "Colocación de personal operativo",
        "Reclutamiento administrativo",
        "Validación de candidatos",
        "Cumplimiento normativo laboral"
      ],
      "award": "Más de 2,500 profesionales colocados exitosamente",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "C. Montes Urales 424",
        "addressLocality": "Ciudad de México",
        "addressRegion": "CDMX",
        "postalCode": "11000",
        "addressCountry": "MX"
      }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <NosotrosClient />
    </>
  );
}