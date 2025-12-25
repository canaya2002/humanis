import { Metadata } from 'next';
import FAQEmpresasClient from './FAQEmpresasClient';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes para Empresas | Humanis',
  description: 'Respuestas claras sobre reclutamiento, comisiones, garantías y marco legal. Resolvemos tus dudas sobre contratación de personal.',
  keywords: [
    'faq empresas reclutamiento',
    'garantía reemplazo personal',
    'comisiones agencia empleo',
    'responsabilidad solidaria repse'
  ],
  alternates: {
    canonical: 'https://www.humanis.com.mx/faq-empresas'
  },
  openGraph: {
    title: 'Preguntas Frecuentes para Empresas | Humanis',
    description: 'Todo sobre nuestros servicios de reclutamiento y marco legal.',
    url: 'https://www.humanis.com.mx/faq-empresas',
    siteName: 'Humanis México',
    locale: 'es_MX',
    type: 'website'
  }
};

export default function FAQEmpresasPage() {
  // DATOS SIMPLIFICADOS EXCLUSIVAMENTE PARA SCHEMA (SERVER-SIDE)
  // Duplicamos el texto aquí para asegurar que Google lo lea en el HTML inicial
  // sin depender de la hidratación del cliente.
  const faqDataForSchema = [
    {
      q: "¿Qué es Humanis?",
      a: "Humanis es una empresa que opera con dos líneas de servicio: agencia de colocación (reclutamiento y selección) y proyectos por entregables."
    },
    {
      q: "¿Humanis es \"outsourcing\" o subcontratación de personal?",
      a: "No. Humanis no pone personal a disposición del cliente como patrón sustituto. La relación laboral es entre el cliente y la persona contratada."
    },
    {
      q: "¿Quién es el patrón (empleador) del personal colocado?",
      a: "En el servicio de agencia de colocación, el patrón es la empresa cliente."
    },
    {
      q: "¿Cómo funciona la comisión del 15%?",
      a: "Humanis cobra una tarifa por el servicio de reclutamiento (ej. 15% de un mes de salario) o gestión de proyecto, según el paquete."
    },
    {
      q: "¿Ofrecen garantía de reemplazo?",
      a: "Sí, puede ofrecerse garantía (ej. 30 o 90 días) para reponer la vacante si el candidato se va, bajo condiciones pactadas."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqDataForSchema.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQEmpresasClient />
    </>
  );
}