import { Metadata } from 'next';
import FAQTalentoClient from './FAQTalentoClient';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes para Candidatos | Humanis',
  description: 'Resuelve tus dudas sobre nuestro servicio gratuito de colocación. Proceso de postulación, requisitos, tiempos de respuesta y más. Todo sobre empleo en México.',
  keywords: [
    'preguntas frecuentes empleo',
    'cómo postularse vacante',
    'servicio gratuito candidatos',
    'agencia de empleo sin costo',
    'bolsa de trabajo FAQ',
    'dudas postulación empleo'
  ],
  alternates: {
    canonical: 'https://www.humanis.com.mx/faq-talento'
  },
  openGraph: {
    title: 'Preguntas Frecuentes para Talento | Humanis',
    description: 'Todo lo que necesitas saber sobre nuestro servicio de colocación gratuito.',
    url: 'https://www.humanis.com.mx/faq-talento',
    siteName: 'Humanis México',
    locale: 'es_MX',
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: 'FAQ Candidatos | Humanis',
    description: 'Preguntas frecuentes sobre empleo y postulación.'
  }
};

export default function FAQTalentoPage() {
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
        "name": "FAQ Talento",
        "item": "https://www.humanis.com.mx/faq-talento"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Humanis cobra a los candidatos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, nunca. Nuestros servicios son 100% gratuitos para candidatos. Las empresas pagan por nuestros servicios de colocación."
        }
      },
      {
        "@type": "Question",
        "name": "¿Es seguro registrarme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutamente. Protegemos tus datos conforme a la ley y solo compartimos tu información con empresas verificadas cuando existe una vacante relevante para tu perfil."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué tipo de vacantes manejan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cubrimos un amplio espectro: ventas, administración, TI, logística, marketing, finanzas, operaciones e ingeniería, tanto presenciales como remotas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Tienen vacantes en mi ciudad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, tenemos cobertura nacional. Nuestras operaciones principales están en CDMX, pero gestionamos posiciones en todo México y también remotas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo funciona el proceso?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Es simple: 1) Te registras y subes tu CV, 2) Nuestro sistema y equipo revisan tu perfil, 3) Si hay match, te contactamos para una entrevista, 4) Te preparamos y presentamos a la empresa, 5) Te acompañamos hasta la contratación."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo toma encontrar empleo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende de tu perfil y de las vacantes activas. Algunos candidatos se colocan en días, otros en semanas. Mantener tu perfil actualizado aumenta tus posibilidades."
        }
      },
      {
        "@type": "Question",
        "name": "¿Me contactarán aunque no aplique?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Nuestra base de talento es consultada proactivamente por nuestros reclutadores. Si identificamos una oportunidad para ti, te llamaremos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo aplicar a múltiples vacantes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Por supuesto. Puedes aplicar a todas las vacantes que se alineen con tu experiencia e intereses."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo actualizo mi CV?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Puedes enviarnos tu CV actualizado por correo o WhatsApp. Estamos trabajando en un portal de autogestión que estará disponible pronto."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo eliminar mi perfil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, en cualquier momento. Solo solicítalo a nuestro equipo de soporte y procesaremos la baja de tus datos en un máximo de 48 horas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Con quién comparten mi información?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Únicamente con empresas clientes que han contratado nuestros servicios y tienen una vacante activa que coincide con tu perfil. Nunca vendemos datos a terceros."
        }
      },
      {
        "@type": "Question",
        "name": "¿Me preparan para las entrevistas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Antes de presentarte con el cliente, te damos un briefing completo sobre la empresa, el puesto y consejos específicos para destacar en tu entrevista."
        }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQTalentoClient />
    </>
  );
}
