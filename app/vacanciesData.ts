// vacanciesData.ts - Datos centralizados de vacantes

export interface Vacancy {
  id: number;
  slug: string; // URL amigable para SEO
  title: string;
  company: string;
  location: string;
  salary: string;
  type: 'Remoto' | 'Presencial' | 'Híbrido';
  schedule: string;
  area: string;
  posted: string;
  datePosted: string; // Formato ISO para Schema.org
  validThrough: string; // Formato ISO para Schema.org
  description: string;
  requirements: string[];
  employmentType?: 'FULL_TIME' | 'PART_TIME' | 'CONTRACTOR' | 'TEMPORARY';
}

export const vacancies: Vacancy[] = [
  { 
    id: 1,
    slug: 'ejecutivo-ventas-retail-polanco',
    title: "Ejecutivo de Ventas", 
    company: "Empresa Retail Nacional", 
    location: "CDMX - Polanco", 
    salary: "$18,000 - $25,000 + comisiones",
    type: "Presencial",
    schedule: "Tiempo completo",
    area: "Ventas",
    posted: "Hace 2 días",
    datePosted: "2024-12-22",
    validThrough: "2025-01-22",
    description: "Buscamos ejecutivo de ventas con experiencia en retail para tienda de lujo. Excelentes comisiones y ambiente de alto desempeño.",
    requirements: ["2+ años en ventas", "Inglés intermedio", "Disponibilidad de horario"],
    employmentType: "FULL_TIME"
  },
  { 
    id: 2,
    slug: 'desarrollador-full-stack-fintech',
    title: "Desarrollador Full Stack", 
    company: "Startup Fintech", 
    location: "Remoto (México)", 
    salary: "$45,000 - $60,000",
    type: "Remoto",
    schedule: "Tiempo completo",
    area: "TI",
    posted: "Hace 1 día",
    datePosted: "2024-12-23",
    validThrough: "2025-01-23",
    description: "Únete a nuestro equipo de desarrollo. Buscamos expertos en arquitectura escalable y microservicios.",
    requirements: ["3+ años de experiencia", "React y Node.js", "Inglés avanzado"],
    employmentType: "FULL_TIME"
  },
  { 
    id: 3,
    slug: 'coordinador-logistica-guadalajara',
    title: "Coordinador de Logística", 
    company: "Empresa de Logística", 
    location: "Guadalajara, Jalisco", 
    salary: "$22,000 - $28,000",
    type: "Presencial",
    schedule: "Tiempo completo",
    area: "Logística",
    posted: "Hace 3 días",
    datePosted: "2024-12-21",
    validThrough: "2025-01-21",
    description: "Coordinador de operaciones logísticas para empresa líder. Gestión de almacén y rutas de distribución.",
    requirements: ["Experiencia en logística", "Manejo de equipos", "Disponibilidad inmediata"],
    employmentType: "FULL_TIME"
  },
  { 
    id: 4,
    slug: 'asistente-administrativo-contaduria',
    title: "Asistente Administrativo", 
    company: "Despacho Contable", 
    location: "CDMX - Reforma", 
    salary: "$12,000 - $15,000",
    type: "Presencial",
    schedule: "Tiempo completo",
    area: "Administrativo",
    posted: "Hace 1 semana",
    datePosted: "2024-12-17",
    validThrough: "2025-01-17",
    description: "Asistente para despacho contable. Soporte en facturación, archivo y atención a clientes.",
    requirements: ["Conocimientos de Office", "Organización", "Buena comunicación"],
    employmentType: "FULL_TIME"
  },
  { 
    id: 5,
    slug: 'ingeniero-civil-construccion',
    title: "Ingeniero Civil", 
    company: "Constructora Nacional", 
    location: "Monterrey, N.L.", 
    salary: "$35,000 - $45,000",
    type: "Presencial",
    schedule: "Tiempo completo",
    area: "Ingeniería",
    posted: "Hace 4 días",
    datePosted: "2024-12-20",
    validThrough: "2025-01-20",
    description: "Ingeniero civil para supervisión de obra. Proyectos de infraestructura urbana y edificación.",
    requirements: ["Título de Ingeniero Civil", "5+ años de experiencia", "AutoCAD avanzado"],
    employmentType: "FULL_TIME"
  },
  { 
    id: 6,
    slug: 'diseñador-grafico-agencia-publicidad',
    title: "Diseñador Gráfico", 
    company: "Agencia de Publicidad", 
    location: "CDMX - Condesa", 
    salary: "$16,000 - $22,000",
    type: "Híbrido",
    schedule: "Tiempo completo",
    area: "Creatividad",
    posted: "Hace 2 días",
    datePosted: "2024-12-22",
    validThrough: "2025-01-22",
    description: "Diseñador creativo para campañas digitales y BTL. Ambiente colaborativo y proyectos variados.",
    requirements: ["Portfolio digital", "Adobe Suite", "Experiencia en redes sociales"],
    employmentType: "FULL_TIME"
  },
  { 
    id: 7,
    slug: 'analista-datos-business-intelligence',
    title: "Analista de Datos", 
    company: "Empresa de Tecnología", 
    location: "Remoto (México)", 
    salary: "$30,000 - $40,000",
    type: "Remoto",
    schedule: "Tiempo completo",
    area: "Data & BI",
    posted: "Hace 5 días",
    datePosted: "2024-12-19",
    validThrough: "2025-01-19",
    description: "Analista BI para transformación de datos en insights. Dashboards y reportes ejecutivos.",
    requirements: ["SQL y Python", "Power BI o Tableau", "Inglés técnico"],
    employmentType: "FULL_TIME"
  },
  { 
    id: 8,
    slug: 'supervisor-produccion-manufactura',
    title: "Supervisor de Producción", 
    company: "Planta de Manufactura", 
    location: "Querétaro, Qro.", 
    salary: "$25,000 - $32,000",
    type: "Presencial",
    schedule: "Tiempo completo",
    area: "Operaciones",
    posted: "Hace 1 semana",
    datePosted: "2024-12-17",
    validThrough: "2025-01-17",
    description: "Supervisor de línea de producción. Gestión de equipos de 20-30 operadores.",
    requirements: ["Experiencia en manufactura", "Lean Manufacturing", "Liderazgo de equipos"],
    employmentType: "FULL_TIME"
  },
];

// Función helper para obtener una vacante por slug
export function getVacancyBySlug(slug: string): Vacancy | undefined {
  return vacancies.find(v => v.slug === slug);
}

// Función helper para generar todos los slugs (útil para generateStaticParams)
export function getAllVacancySlugs(): string[] {
  return vacancies.map(v => v.slug);
}