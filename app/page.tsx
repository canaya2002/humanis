import { Metadata } from 'next';
import HomeClient from './HomeClient';

// --- DATOS DE INFRAESTRUCTURA (SERVER SIDE PARA SCHEMA) ---
const SOLUTIONS_DATA = [
  { 
    id: 1, title: "Headhunting Estratégico", subtitle: "Ejecutivos & Tecnología", 
    statLabel: "Eficacia", statValue: "98%", statDesc: "Garantía por contrato", 
    features: ["C-Level Directo", "Talento Nicho", "Psicometría IA"], 
    desc: "Accede al 1% del talento que realmente marca la diferencia. Metodología de inteligencia de mercado.", 
    img: "/talentos/Talento_1.png", color: "slate" 
  }, 
  { 
    id: 2, title: "Staffing Flexible", subtitle: "Personal REPSE", 
    statLabel: "Cumplimiento", statValue: "100%", statDesc: "Auditoría IMSS/SAT", 
    features: ["REPSE Total", "Gestión Beneficios", "Sustitución < 48hrs"], 
    desc: "Escala tu fuerza laboral sin riesgos. Equipos listos para integrarse, gestionando toda la carga.", 
    img: "/talentos/Talento_2.png", color: "slate" 
  }, 
  { 
    id: 3, title: "Gestión de Nómina 4.0", subtitle: "Precisión Financiera", 
    statLabel: "Dispersión", statValue: "99.9%", statDesc: "Automatización bancaria", 
    features: ["Cálculo Exacto", "Timbrado Masivo", "Reportes Live"], 
    desc: "Transforma tu nómina en un proceso impecable. Garantizamos deducibilidad fiscal total.", 
    img: "/talentos/Talento_3.png", color: "slate" 
  }, 
  { 
    id: 4, title: "Compliance & Legal", subtitle: "Blindaje Corporativo", 
    statLabel: "Riesgo", statValue: "0%", statDesc: "Defensa jurídica", 
    features: ["Auditorías STPS", "Defensa Patronal", "Gestión Contratos"], 
    desc: "Escudo jurídico proactivo que neutraliza riesgos laborales y asegura la continuidad.", 
    img: "/talentos/Talento_4.png", color: "slate" 
  }
];

export const metadata: Metadata = {
  title: 'Humanis | Agencia de Contratación y Colocación de Personal en México',
  description: 'Agencia de colocación de personal en CDMX con cobertura nacional. Reclutamiento, filtros y validación de candidatos para cualquier posición. Servicio gratuito para talento, tarifa al empleador.',
  keywords: [
    'agencia de colocación',
    'headhunting méxico',
    'staffing repse',
    'reclutamiento especializado'
  ],
  alternates: {
    canonical: 'https://www.humanis.com.mx'
  }
};

export default function HomePage() {
  // Schema para la Homepage (ItemList de servicios)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": SOLUTIONS_DATA.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.desc,
        "provider": {
          "@type": "Organization",
          "name": "Humanis",
          "url": "https://www.humanis.com.mx"
        },
        "serviceType": service.subtitle,
        "areaServed": "MX",
        "offers": {
          "@type": "Offer",
          "description": service.features.join(", ")
        }
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <HomeClient solutionsData={SOLUTIONS_DATA} />
    </>
  );
}