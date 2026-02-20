// ─── Site-wide constants ───
export const SITE = {
  name: "Humanis",
  legalName: "Humanis S.A. de C.V.",
  url: "https://www.humanis.com.mx",
  phone: "+52 55 4416 7974",
  phoneTel: "+525544167974",
  email: "contacto@humanis.com.mx",
  privacyEmail: "privacidad@humanis.com.mx",
  whatsapp: "https://wa.me/525544167974",
  address: {
    street: "C. Montes Urales 424",
    colony: "Lomas - Virreyes",
    city: "Miguel Hidalgo",
    state: "CDMX",
    zip: "11000",
    country: "MX",
    full: "C. Montes Urales 424, Lomas - Virreyes, Miguel Hidalgo, 11000 CDMX",
  },
  geo: { lat: 19.428992, lng: -99.207107 },
  social: {
    facebook: "https://www.facebook.com/people/Humanis/61576232000413/",
    instagram: "https://www.instagram.com/humanis.oficial/",
    linkedin: "https://www.linkedin.com/company/humanismx/",
    tiktok: "https://www.tiktok.com/@humanis_mx",
  },
  // [POR VALIDAR] — Estos datos necesitan confirmación del cliente
  stpsRegistro: "[POR VALIDAR — Número de registro STPS]",
  foundingDate: "[POR VALIDAR]",
} as const;

// ─── Services (sin promesas absolutas, sin proceso detallado) ───
export const SERVICES = [
  {
    id: "reclutamiento-seleccion",
    title: "Reclutamiento y Selección",
    shortDesc:
      "Identificamos y validamos candidatos alineados a tu perfil de puesto y cultura organizacional.",
    features: [
      "Búsqueda activa de talento",
      "Filtros por competencias",
      "Validación de referencias",
      "Presentación de terna finalista",
    ],
    compliance: "Operamos como agencia de colocación con apego a la LFT y normativa STPS.",
  },
  {
    id: "servicios-especializados",
    title: "Servicios Especializados",
    shortDesc:
      "Gestión de personal para proyectos con entregables definidos, cuando aplique bajo esquema REPSE.",
    features: [
      "Registro REPSE vigente (cuando aplique)",
      "Documentación y alcance validados",
      "Cumplimiento IMSS, SAT, INFONAVIT",
      "Entregables mensuales según alcance",
    ],
    compliance:
      "Sujeto a diagnóstico previo. Registro REPSE validado con documentación y alcance según contrato.",
  },
  {
    id: "gestion-nomina",
    title: "Gestión de Nómina",
    shortDesc:
      "Administración de nómina con enfoque en precisión, timbrado fiscal y cumplimiento normativo.",
    features: [
      "Cálculo y dispersión",
      "Timbrado CFDI",
      "Reportes IMSS / INFONAVIT",
      "Atención a requerimientos SAT",
    ],
    compliance: "Con controles orientados a cumplimiento fiscal ante SAT, IMSS e INFONAVIT.",
  },
  {
    id: "consultoria-laboral",
    title: "Consultoría Laboral",
    shortDesc:
      "Asesoría enfocada a mitigar riesgos laborales y mantener el cumplimiento normativo vigente.",
    features: [
      "Diagnóstico de cumplimiento",
      "Revisión de contratos laborales",
      "Acompañamiento ante STPS",
      "Estrategia de retención",
    ],
    compliance: "Con apego a LFT, STPS y normativa laboral vigente en México.",
  },
] as const;

// ─── Industries ───
export const INDUSTRIES = [
  { id: "retail", name: "Retail y Consumo" },
  { id: "tecnologia", name: "Tecnología y Fintech" },
  { id: "logistica", name: "Logística y Supply Chain" },
  { id: "manufactura", name: "Manufactura" },
  { id: "servicios", name: "Servicios Profesionales" },
  { id: "salud", name: "Salud y Farmacéutica" },
] as const;

// ─── Vacancies ───
export interface Vacancy {
  id: number;
  slug: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: "Remoto" | "Presencial" | "Híbrido";
  schedule: string;
  area: string;
  posted: string;
  datePosted: string;
  validThrough: string;
  description: string;
  requirements: string[];
  employmentType: "FULL_TIME" | "PART_TIME" | "CONTRACTOR" | "TEMPORARY";
}

export const VACANCIES: Vacancy[] = [
  {
    id: 1,
    slug: "ejecutivo-ventas-retail-polanco",
    title: "Ejecutivo de Ventas",
    company: "Empresa Retail Nacional",
    location: "CDMX - Polanco",
    salary: "$18,000 - $25,000 + comisiones",
    type: "Presencial",
    schedule: "Tiempo completo",
    area: "Ventas",
    posted: "Hace 2 días",
    datePosted: "2025-05-20",
    validThrough: "2025-06-20",
    description:
      "Buscamos ejecutivo de ventas con experiencia en retail para posición en punto de venta. Esquema de comisiones competitivo.",
    requirements: ["2+ años en ventas", "Inglés intermedio", "Disponibilidad de horario"],
    employmentType: "FULL_TIME",
  },
  {
    id: 2,
    slug: "desarrollador-full-stack-fintech",
    title: "Desarrollador Full Stack",
    company: "Startup Fintech",
    location: "Remoto (México)",
    salary: "$45,000 - $60,000",
    type: "Remoto",
    schedule: "Tiempo completo",
    area: "TI",
    posted: "Hace 1 día",
    datePosted: "2025-05-21",
    validThrough: "2025-06-21",
    description:
      "Posición para desarrollador con experiencia en arquitectura escalable y microservicios.",
    requirements: ["3+ años de experiencia", "React y Node.js", "Inglés avanzado"],
    employmentType: "FULL_TIME",
  },
  {
    id: 3,
    slug: "coordinador-logistica-guadalajara",
    title: "Coordinador de Logística",
    company: "Empresa de Logística",
    location: "Guadalajara, Jalisco",
    salary: "$22,000 - $28,000",
    type: "Presencial",
    schedule: "Tiempo completo",
    area: "Logística",
    posted: "Hace 3 días",
    datePosted: "2025-05-19",
    validThrough: "2025-06-19",
    description:
      "Coordinador de operaciones logísticas. Gestión de almacén y rutas de distribución.",
    requirements: [
      "Experiencia en logística",
      "Manejo de equipos",
      "Disponibilidad inmediata",
    ],
    employmentType: "FULL_TIME",
  },
  {
    id: 4,
    slug: "asistente-administrativo-reforma",
    title: "Asistente Administrativo",
    company: "Despacho Contable",
    location: "CDMX - Reforma",
    salary: "$12,000 - $15,000",
    type: "Presencial",
    schedule: "Tiempo completo",
    area: "Administrativo",
    posted: "Hace 1 semana",
    datePosted: "2025-05-14",
    validThrough: "2025-06-14",
    description:
      "Asistente para despacho contable. Soporte en facturación, archivo y atención a clientes.",
    requirements: ["Conocimientos de Office", "Organización", "Buena comunicación"],
    employmentType: "FULL_TIME",
  },
  {
    id: 5,
    slug: "analista-datos-business-intelligence",
    title: "Analista de Datos",
    company: "Empresa de Tecnología",
    location: "Remoto (México)",
    salary: "$30,000 - $40,000",
    type: "Remoto",
    schedule: "Tiempo completo",
    area: "Data & BI",
    posted: "Hace 5 días",
    datePosted: "2025-05-17",
    validThrough: "2025-06-17",
    description:
      "Analista BI para transformación de datos en insights. Dashboards y reportes ejecutivos.",
    requirements: ["SQL y Python", "Power BI o Tableau", "Inglés técnico"],
    employmentType: "FULL_TIME",
  },
  {
    id: 6,
    slug: "supervisor-produccion-queretaro",
    title: "Supervisor de Producción",
    company: "Planta de Manufactura",
    location: "Querétaro, Qro.",
    salary: "$25,000 - $32,000",
    type: "Presencial",
    schedule: "Tiempo completo",
    area: "Operaciones",
    posted: "Hace 1 semana",
    datePosted: "2025-05-14",
    validThrough: "2025-06-14",
    description:
      "Supervisor de línea de producción. Gestión de equipos de operadores en planta.",
    requirements: [
      "Experiencia en manufactura",
      "Lean Manufacturing",
      "Liderazgo de equipos",
    ],
    employmentType: "FULL_TIME",
  },
];

export function getVacancyBySlug(slug: string): Vacancy | undefined {
  return VACANCIES.find((v) => v.slug === slug);
}

export function getAllVacancySlugs(): string[] {
  return VACANCIES.map((v) => v.slug);
}

// ─── FAQ Data ───
export const FAQ_EMPRESAS = [
  {
    q: "¿Qué es Humanis?",
    a: "Humanis es una agencia de colocación que opera dos líneas: reclutamiento y selección (la empresa contrata directamente) y gestión de proyectos por entregables con especialistas independientes.",
  },
  {
    q: "¿Humanis es outsourcing o subcontratación?",
    a: "No. Humanis no pone personal a disposición del cliente como patrón sustituto. En agencia de colocación, la relación laboral es directamente entre la empresa cliente y la persona contratada.",
  },
  {
    q: "¿Quién es el patrón del personal colocado?",
    a: "En el servicio de agencia de colocación, el patrón es la empresa cliente, quien se beneficia del servicio y realiza la contratación directa.",
  },
  {
    q: "¿Quién cubre IMSS, prestaciones y obligaciones laborales?",
    a: "En colocación, las obligaciones laborales (IMSS, INFONAVIT, nómina, prestaciones, PTU, etc.) corresponden al empleador (cliente) conforme al tipo de contratación que realice.",
  },
  {
    q: "¿Cómo funciona la tarifa de servicio?",
    a: "Humanis cobra una tarifa al empleador por el servicio de reclutamiento/colocación. El esquema específico se define en la propuesta comercial y puede variar según el alcance. Para el candidato, el servicio es gratuito.",
  },
  {
    q: "¿Ofrecen garantía de reemplazo?",
    a: "Puede pactarse una garantía de reemplazo (sujeta a las condiciones establecidas por escrito en el contrato). Los términos, plazos y exclusiones se definen caso por caso.",
  },
  {
    q: "¿Cómo manejan los datos personales?",
    a: "Humanis trata datos personales conforme a su Aviso de Privacidad y aplica medidas de seguridad administrativas, técnicas y físicas conforme a la normativa vigente en México.",
  },
  {
    q: "¿Humanis discrimina en sus procesos?",
    a: "No. Nos comprometemos a no discriminar por origen étnico, sexo, edad, discapacidad, condición social, salud, embarazo, religión, opiniones, preferencias sexuales, estado civil u otra condición protegida. Solo consideramos competencias relacionadas con el puesto.",
  },
] as const;

export const FAQ_TALENTO = [
  {
    q: "¿Humanis cobra a los candidatos?",
    a: "No, nunca. Nuestro servicio de colocación es gratuito para candidatos. Las empresas pagan por nuestros servicios.",
  },
  {
    q: "¿Es seguro registrarme?",
    a: "Protegemos tus datos conforme a la ley y solo compartimos tu información con empresas verificadas cuando existe una vacante relevante para tu perfil.",
  },
  {
    q: "¿Qué tipo de vacantes manejan?",
    a: "Cubrimos un amplio espectro: ventas, administración, TI, logística, marketing, finanzas, operaciones e ingeniería, tanto presenciales como remotas.",
  },
  {
    q: "¿Tienen vacantes en mi ciudad?",
    a: "Tenemos cobertura nacional. Nuestras operaciones principales están en CDMX, pero gestionamos posiciones en toda la República Mexicana y también remotas.",
  },
  {
    q: "¿Cuánto tiempo toma encontrar empleo?",
    a: "Varía según el perfil y las vacantes activas. Los tiempos son estimados y dependen de cada caso. Mantener tu perfil actualizado aumenta tus posibilidades.",
  },
  {
    q: "¿Puedo eliminar mi perfil?",
    a: "Sí, en cualquier momento. Solo solicítalo a nuestro equipo y procesaremos la baja de tus datos.",
  },
] as const;
