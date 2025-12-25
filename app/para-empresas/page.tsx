import { Metadata } from 'next';
import ParaEmpresasClient from './ParaEmpresasClient';

export const metadata: Metadata = {
  title: 'Contratación de Personal Operativo y Administrativo | Humanis CDMX',
  description: 'Agencia de colocación de personal en México. Cubrimos vacantes operativas, administrativas y mandos medios con proceso trazable. Tarifa al empleador, gratuito para talento. Cobertura nacional.',
  keywords: [
    'contratación de personal operativo',
    'reclutamiento operativo México',
    'agencia de colocación empresas',
    'colocación de personal CDMX',
    'contratación masiva de personal',
    'reclutamiento y selección para empresas',
    'staffing empresas México'
  ],
  alternates: {
    canonical: 'https://www.humanis.com.mx/para-empresas'
  },
  openGraph: {
    title: 'Soluciones de Contratación de Personal para Empresas | Humanis',
    description: 'Aceleramos la cobertura de vacantes operativas y administrativas. Proceso con filtros, validación y presentación de candidatos. Servicio en CDMX y toda la República Mexicana.',
    url: 'https://www.humanis.com.mx/para-empresas',
    siteName: 'Humanis México',
    locale: 'es_MX',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contratación de Personal para Empresas | Humanis',
    description: 'Colocación de personal operativo y administrativo con proceso trazable. Cobertura nacional.'
  }
};

export default function ParaEmpresasPage() {
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
        "name": "Para Empresas",
        "item": "https://www.humanis.com.mx/para-empresas"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ParaEmpresasClient />
    </>
  );
}
