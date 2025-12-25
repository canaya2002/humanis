import { Metadata } from 'next';
import ProcesoClient from './ProcesoClient';

export const metadata: Metadata = {
  title: 'Proceso de Colocación de Personal | Metodología Humanis',
  description: 'Conoce nuestro proceso trazable de colocación: diagnóstico, reclutamiento, validación y presentación de candidatos. Metodología ágil con garantía de reemplazo.',
  keywords: [
    'proceso de reclutamiento',
    'metodología colocación personal',
    'cómo funciona agencia empleo',
    'proceso de selección México',
    'validación de candidatos'
  ],
  alternates: {
    canonical: 'https://www.humanis.com.mx/proceso'
  },
  openGraph: {
    title: 'Proceso de Colocación Trazable | Humanis',
    description: 'Metodología probada en 4 etapas: diagnóstico, reclutamiento, validación y presentación.',
    url: 'https://www.humanis.com.mx/proceso',
    siteName: 'Humanis México',
    locale: 'es_MX',
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: 'Nuestro Proceso | Humanis',
    description: 'Metodología de colocación con proceso trazable.'
  }
};

export default function ProcesoPage() {
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
        "name": "Proceso",
        "item": "https://www.humanis.com.mx/proceso"
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Proceso de Colocación de Personal Humanis",
    "description": "Metodología de 4 pasos para colocar talento con proceso trazable y garantía de reemplazo.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Diagnóstico y Perfilamiento",
        "text": "Análisis profundo de la vacante, cultura organizacional y requisitos no negociables.",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Reclutamiento Activo",
        "text": "Búsqueda dirigida de candidatos con experiencia relevante y filtros de competencia.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Validación",
        "text": "Entrevistas por competencias, validación de referencias y presentación de terna final.",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "Presentación y Seguimiento",
        "text": "Coordinación de entrevistas, acompañamiento en negociación y garantía de reemplazo.",
        "position": 4
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <ProcesoClient />
    </>
  );
}
