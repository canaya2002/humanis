import { Metadata } from 'next';
import ContactoClient from './ContactoClient';

export const metadata: Metadata = {
  title: 'Contacto | Agencia de Colocación Humanis CDMX',
  description: 'Contáctanos en C. Montes Urales 424, Lomas - Virreyes, CDMX. Teléfono: +52 55 44 16 7974. Agencia de colocación de personal con cobertura nacional.',
  keywords: [
    'contacto agencia colocación CDMX',
    'humanis teléfono',
    'agencia empleo montes urales',
    'contacto reclutamiento México'
  ],
  alternates: {
    canonical: 'https://www.humanis.com.mx/contacto'
  },
  openGraph: {
    title: 'Contacto | Humanis CDMX',
    description: 'Oficinas en Lomas - Virreyes, CDMX. Cobertura nacional en colocación de personal.',
    url: 'https://www.humanis.com.mx/contacto',
    siteName: 'Humanis México',
    locale: 'es_MX',
    type: 'website'
  }
};

export default function ContactoPage() {
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
        "name": "Contacto",
        "item": "https://www.humanis.com.mx/contacto"
      }
    ]
  };

  // LocalBusiness Schema con NAP completo
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Humanis",
    "image": "https://www.humanis.com.mx/humanislogo.png",
    "@id": "https://www.humanis.com.mx",
    "url": "https://www.humanis.com.mx",
    "telephone": "+525544167974",
    "email": "contacto@humanis.mx",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "C. Montes Urales 424",
      "addressLocality": "Lomas - Virreyes, Miguel Hidalgo",
      "addressRegion": "CDMX",
      "postalCode": "11000",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.428992271140743,
      "longitude": -99.20710712949982
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "areaServed": {
      "@type": "Country",
      "name": "México"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <ContactoClient />
    </>
  );
}
