import { Metadata } from 'next';
import CasosDeExitoClient from './CasosDeExitoClient';

export const metadata: Metadata = {
  title: "Casos de Éxito | Resultados Comprobados | Humanis",
  description: "Testimonios reales de empresas que encontraron talento con Humanis. Métricas verificables: 98% retención, colocaciones en 72h, reducción de rotación hasta 45%.",
  keywords: [
    "casos éxito reclutamiento",
    "testimonios colocación personal",
    "resultados agencia empleo",
    "métricas reclutamiento México"
  ],
  openGraph: {
    title: "Casos de Éxito Humanis | Resultados Reales",
    description: "Empresas retail, fintech y logística que transformaron su talento con Humanis.",
    url: "https://www.humanis.com.mx/casos-de-exito",
    type: "website",
    images: [{ url: "/exitos/case-retail.png", width: 1200, height: 630, alt: "Casos Éxito Humanis" }]
  },
  alternates: {
    canonical: "https://www.humanis.com.mx/casos-de-exito"
  }
};

export default function CasosDeExitoPage() {
  // Schema de Reviews (importante para reputación SEO)
  const reviewsSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "Organization",
        "name": "Humanis",
        "image": "https://www.humanis.com.mx/humanislogo.png"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Director de Operaciones",
        "jobTitle": "Director de Operaciones"
      },
      "reviewBody": "Humanis fue la pieza clave para cumplir nuestro plan de expansión. Su velocidad superó la expectativa. Cubrieron 48 posiciones en 18 días con 92% de retención.",
      "publisher": {
        "@type": "Organization",
        "name": "Cadena Retail Líder"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "Organization",
        "name": "Humanis"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "CTO & Co-Founder",
        "jobTitle": "CTO"
      },
      "reviewBody": "Entendieron la complejidad técnica y cultural. El equipo que armaron es el motor de nuestro producto. 100% de permanencia después del primer año.",
      "publisher": {
        "@type": "Organization",
        "name": "Fintech Serie A"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "Organization",
        "name": "Humanis"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Gerente de RH",
        "jobTitle": "Gerente de Recursos Humanos"
      },
      "reviewBody": "No solo reclutaron, nos consultaron para mejorar la retención desde la raíz. Redujeron nuestra rotación del 45% al 18% en 4 meses.",
      "publisher": {
        "@type": "Organization",
        "name": "Operador Logístico"
      }
    }
  ];

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
        "name": "Casos de Éxito",
        "item": "https://www.humanis.com.mx/casos-de-exito"
      }
    ]
  };

  return (
    <>
      {reviewsSchema.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CasosDeExitoClient />
    </>
  );
}
