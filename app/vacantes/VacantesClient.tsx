'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, MapPin, DollarSign, Clock, Building2, 
  Filter, X, Briefcase, CheckCircle2, ArrowRight 
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';

// --- 1. FONDO DE RED NEURONAL (CONSISTENCIA VISUAL) ---
const OrganicNetworkBackground = () => {
  const [nodes, setNodes] = useState<Array<{
    id: number;
    x: number; y: number;
    xMove: number; yMove: number;
    duration: number;
    size: number;
  }>>([]);
  
  useEffect(() => { 
      const newNodes = Array.from({ length: 20 }, (_, i) => ({ 
          id: i, 
          x: Math.random() * 100, 
          y: Math.random() * 100,
          xMove: (Math.random() - 0.5) * 15, 
          yMove: (Math.random() - 0.5) * 15, 
          duration: 15 + Math.random() * 15, 
          size: 2 + Math.random() * 3
      })); 
      setNodes(newNodes); 
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-white">
      <div className="absolute inset-0 bg-white z-0" />
      <svg className="absolute inset-0 w-full h-full z-0 overflow-visible opacity-40">
        <defs>
            <linearGradient id="netGradientVac" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#94a3b8" stopOpacity="0"/> 
                <stop offset="50%" stopColor="#0f172a" stopOpacity="0.2"/> 
                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0"/>
            </linearGradient>
        </defs>
        {nodes.map((node, i) => {
            const target = nodes[(i + 1) % nodes.length]; 
            if (i % 2 !== 0) return null; 
            return (
            <g key={`net-group-vac-${node.id}`}> 
                <motion.line 
                    x1={`${node.x}%`} y1={`${node.y}%`} 
                    x2={`${target.x}%`} y2={`${target.y}%`} 
                    stroke="url(#netGradientVac)" 
                    strokeWidth="1" 
                    strokeLinecap="round"
                    animate={{ 
                        x1: [`${node.x}%`, `${node.x + node.xMove}%`, `${node.x}%`],
                        y1: [`${node.y}%`, `${node.y + node.yMove}%`, `${node.y}%`],
                        x2: [`${target.x}%`, `${target.x + target.xMove}%`, `${target.x}%`],
                        y2: [`${target.y}%`, `${target.y + target.yMove}%`, `${target.y}%`],
                    }} 
                    transition={{ duration: Math.max(node.duration, target.duration), repeat: Infinity, ease: "easeInOut" }} 
                /> 
            </g> 
            )
        })}
        {nodes.map((node) => (
            <motion.circle 
                key={`node-vac-${node.id}`}
                cx={`${node.x}%`} cy={`${node.y}%`} 
                r={node.size} 
                fill="#1e293b" 
                opacity={0.08} 
                animate={{ 
                    cx: [`${node.x}%`, `${node.x + node.xMove}%`, `${node.x}%`],
                    cy: [`${node.y}%`, `${node.y + node.yMove}%`, `${node.y}%`],
                    opacity: [0.08, 0.15, 0.08] 
                }} 
                transition={{ duration: node.duration, repeat: Infinity, ease: "easeInOut" }} 
            /> 
        ))}
      </svg>
    </div>
  );
};

// --- COMPONENTES UI ---
interface ModernButtonProps { children: React.ReactNode; onClick?: () => void; secondary?: boolean; href?: string; className?: string }
const ModernButton = ({ children, onClick, secondary = false, href, className = "" }: ModernButtonProps) => {
  const content = (
    <>
        <div className="absolute inset-0 z-0 backdrop-blur-[3px] overflow-hidden rounded-full" style={{ filter: 'blur(0.5px)', isolation: 'isolate' }} />
        <div className={`absolute inset-0 z-[1] rounded-full ${secondary ? 'bg-white/40' : 'bg-gradient-to-br from-slate-800/60 via-slate-900/70 to-slate-950/60'}`}></div>
        <div className="absolute inset-0 z-[2] overflow-hidden rounded-full" style={{ boxShadow: 'inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)' }}></div>
        <span className={`relative z-[3] flex items-center gap-3 ${secondary ? 'text-slate-900' : 'text-white'}`}>
        {children}
        {!secondary && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform stroke-[3]" />}
        </span>
    </>
  );

  const classes = `relative group overflow-hidden font-bold text-sm tracking-widest uppercase transition-all duration-400 ${secondary ? 'px-8 py-3 rounded-full' : 'px-8 py-3 rounded-full'} inline-flex items-center justify-center ${className}`;
  const styles = { boxShadow: '0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)' };

  if (href) return <Link href={href} className={classes} style={styles}>{content}</Link>;
  return <button onClick={onClick} className={classes} style={styles}>{content}</button>;
};

// --- DATOS VACANTES ---
const vacancies = [
  { 
    id: 1,
    title: "Ejecutivo de Ventas", 
    company: "Empresa Retail Nacional", 
    location: "CDMX - Polanco", 
    salary: "$18,000 - $25,000 + comisiones",
    type: "Presencial",
    schedule: "Tiempo completo",
    area: "Ventas",
    posted: "Hace 2 días",
    description: "Buscamos ejecutivo de ventas con experiencia en retail para tienda de lujo. Excelentes comisiones y ambiente de alto desempeño.",
    requirements: ["2+ años en ventas", "Inglés intermedio", "Disponibilidad de horario"]
  },
  { 
    id: 2,
    title: "Desarrollador Full Stack", 
    company: "Startup Fintech", 
    location: "Remoto (México)", 
    salary: "$45,000 - $60,000",
    type: "Remoto",
    schedule: "Tiempo completo",
    area: "TI",
    posted: "Hace 1 día",
    description: "Únete a nuestro equipo de desarrollo. Buscamos expertos en arquitectura escalable y microservicios.",
    requirements: ["3+ años de experiencia", "React y Node.js", "Inglés avanzado"]
  },
  { 
    id: 3,
    title: "Coordinador de Logística", 
    company: "Empresa de Logística", 
    location: "Guadalajara, Jalisco", 
    salary: "$22,000 - $28,000",
    type: "Presencial",
    schedule: "Tiempo completo",
    area: "Logística",
    posted: "Hace 3 días",
    description: "Coordinar operaciones de almacén y distribución en zona metropolitana.",
    requirements: ["Experiencia en logística", "Manejo de personal", "Licencia de manejo"]
  },
  { 
    id: 4,
    title: "Analista de Marketing Digital", 
    company: "Agencia de Marketing", 
    location: "Híbrido - CDMX", 
    salary: "$20,000 - $28,000",
    type: "Híbrido",
    schedule: "Tiempo completo",
    area: "Marketing",
    posted: "Hace 1 día",
    description: "Gestión de campañas digitales, análisis de métricas y reportes.",
    requirements: ["Google Ads certificado", "Meta Ads", "Excel avanzado"]
  },
  { 
    id: 5,
    title: "Contador General", 
    company: "Empresa de Manufactura", 
    location: "Monterrey, NL", 
    salary: "$25,000 - $32,000",
    type: "Presencial",
    schedule: "Tiempo completo",
    area: "Finanzas",
    posted: "Hace 5 días",
    description: "Responsable de la contabilidad general y cumplimiento fiscal.",
    requirements: ["Título en Contaduría", "SAT y nóminas", "5+ años experiencia"]
  },
  { 
    id: 6,
    title: "Customer Success Manager", 
    company: "SaaS B2B", 
    location: "Remoto (México)", 
    salary: "$35,000 - $45,000",
    type: "Remoto",
    schedule: "Tiempo completo",
    area: "Servicio al Cliente",
    posted: "Hace 2 días",
    description: "Gestionar cartera de clientes enterprise y asegurar su éxito.",
    requirements: ["Inglés avanzado", "Experiencia en CS", "Habilidades analíticas"]
  }
];

const locations = ["Todas", "CDMX", "Guadalajara", "Monterrey", "Querétaro", "Remoto"];
const areas = ["Todas", "Ventas", "TI", "Logística", "Marketing", "Finanzas", "Operaciones"];
const types = ["Todos", "Presencial", "Remoto", "Híbrido"];

export default function VacantesClient() {
  const [showHeader, setShowHeader] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Todas");
  const [selectedArea, setSelectedArea] = useState("Todas");
  const [selectedType, setSelectedType] = useState("Todos");
  // showFilters se mantiene por si se usa en el futuro
  const [showFilters, setShowFilters] = useState(false);
  // Iniciar con la primera vacante seleccionada en desktop para que no se vea vacío
  const [selectedVacancy, setSelectedVacancy] = useState<typeof vacancies[0] | null>(vacancies[0]);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 80) { setShowHeader(false); } else { setShowHeader(true); }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredVacancies = vacancies.filter(v => {
    const matchesSearch = v.title.toLowerCase().includes(searchQuery.toLowerCase()) || v.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = selectedLocation === "Todas" || v.location.includes(selectedLocation);
    const matchesArea = selectedArea === "Todas" || v.area === selectedArea;
    const matchesType = selectedType === "Todos" || v.type === selectedType;
    return matchesSearch && matchesLocation && matchesArea && matchesType;
  });

  return (
    <>
      <GlobalStyles />
      
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900">
        <Header showHeader={showHeader} />

        <main className="pt-24 lg:pt-32 relative min-h-screen">
          <OrganicNetworkBackground />
          
          <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 pb-20">
            
            {/* --- HEADER: TÍTULO Y BUSCADOR --- */}
            <div className="mb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-4">
                            <Briefcase size={12} /> Bolsa de Trabajo
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
                            Oportunidades <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">Activas</span>
                        </h1>
                    </div>
                    <div className="text-right hidden md:block">
                        <p className="text-4xl font-black text-slate-900">{filteredVacancies.length}</p>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Vacantes</p>
                    </div>
                </div>

                {/* BARRA DE BÚSQUEDA FLOTANTE */}
                <div className="bg-white border border-slate-200 shadow-xl rounded-2xl p-2 flex flex-col md:flex-row gap-2 max-w-4xl">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input 
                            type="text" 
                            placeholder="Buscar puesto, empresa o palabra clave..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-slate-200 outline-none text-slate-900 placeholder-slate-400 font-medium"
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                        {/* SELECTS PERSONALIZADOS (Estilo Botón) */}
                        <div className="relative group">
                            <select 
                                value={selectedLocation}
                                onChange={(e) => setSelectedLocation(e.target.value)}
                                className="appearance-none bg-white border border-slate-200 text-slate-700 py-3 pl-4 pr-10 rounded-xl font-bold text-sm cursor-pointer hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
                            >
                                {locations.map(l => <option key={l} value={l}>{l}</option>)}
                            </select>
                            <MapPin size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        </div>
                        <div className="relative group">
                            <select 
                                value={selectedArea}
                                onChange={(e) => setSelectedArea(e.target.value)}
                                className="appearance-none bg-white border border-slate-200 text-slate-700 py-3 pl-4 pr-10 rounded-xl font-bold text-sm cursor-pointer hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
                            >
                                {areas.map(a => <option key={a} value={a}>{a}</option>)}
                            </select>
                            <Filter size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>

            {/* --- GRID PRINCIPAL (MASTER - DETAIL) --- */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
                
                {/* LISTA DE VACANTES (IZQUIERDA) */}
                <div className="lg:col-span-5 space-y-4">
                    {filteredVacancies.length === 0 ? (
                        <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-100">
                            <Briefcase size={40} className="mx-auto text-slate-300 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900">Sin resultados</h3>
                            <p className="text-slate-500">Intenta ajustar tus filtros.</p>
                        </div>
                    ) : (
                        filteredVacancies.map((vacancy) => (
                            <motion.div 
                                key={vacancy.id}
                                layoutId={`card-${vacancy.id}`}
                                onClick={() => setSelectedVacancy(vacancy)}
                                className={`group p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 relative overflow-hidden ${selectedVacancy?.id === vacancy.id ? 'bg-slate-900 border-slate-900 shadow-2xl scale-[1.02]' : 'bg-white border-slate-100 hover:border-slate-300 hover:shadow-lg'}`}
                            >
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className={`text-lg font-bold leading-tight ${selectedVacancy?.id === vacancy.id ? 'text-white' : 'text-slate-900'}`}>
                                            {vacancy.title}
                                        </h3>
                                        {/* Tag de Modalidad */}
                                        <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md ${selectedVacancy?.id === vacancy.id ? 'bg-white text-slate-900' : 'bg-slate-100 text-slate-600'}`}>
                                            {vacancy.type}
                                        </span>
                                    </div>
                                    
                                    <p className={`text-sm font-medium mb-4 flex items-center gap-2 ${selectedVacancy?.id === vacancy.id ? 'text-slate-400' : 'text-slate-500'}`}>
                                        <Building2 size={14} /> {vacancy.company}
                                    </p>

                                    <div className={`flex items-center gap-4 text-xs font-bold ${selectedVacancy?.id === vacancy.id ? 'text-slate-300' : 'text-slate-400'}`}>
                                        <span className="flex items-center gap-1"><MapPin size={12}/> {vacancy.location}</span>
                                        <span className="flex items-center gap-1"><DollarSign size={12}/> {vacancy.salary}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>

                {/* DETALLE DE VACANTE (DERECHA - STICKY) */}
                <div className="hidden lg:block lg:col-span-7 sticky top-32">
                    <AnimatePresence mode='wait'>
                        {selectedVacancy ? (
                            <motion.div 
                                key={selectedVacancy.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white border border-slate-200 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-10 relative overflow-hidden"
                            >
                                {/* Header del Detalle */}
                                <div className="flex justify-between items-start mb-8 border-b border-slate-100 pb-8">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="px-4 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                                {selectedVacancy.area}
                                            </span>
                                            <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                                                <Clock size={12} /> Publicada {selectedVacancy.posted}
                                            </span>
                                        </div>
                                        <h2 className="text-4xl font-black text-slate-900 mb-2 leading-tight">{selectedVacancy.title}</h2>
                                        <p className="text-xl text-slate-500 font-medium">{selectedVacancy.company}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-black text-slate-900">{selectedVacancy.salary}</div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Salario Mensual</div>
                                    </div>
                                </div>

                                {/* Cuerpo del Detalle */}
                                <div className="grid grid-cols-2 gap-8 mb-10">
                                    <div>
                                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Descripción</h4>
                                        <p className="text-slate-700 leading-relaxed font-medium">
                                            {selectedVacancy.description}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Requisitos</h4>
                                        <ul className="space-y-3">
                                            {selectedVacancy.requirements.map((req, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-bold">
                                                    <CheckCircle2 size={16} className="text-slate-900 shrink-0 mt-0.5" />
                                                    {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Footer con Acción */}
                                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                                    <div className="flex gap-4 text-sm font-bold text-slate-500">
                                        <span className="flex items-center gap-2"><MapPin size={16}/> {selectedVacancy.location}</span>
                                        <span className="flex items-center gap-2"><Briefcase size={16}/> {selectedVacancy.schedule}</span>
                                    </div>
                                    <ModernButton href="/registro-talento">
                                        Postularme Ahora
                                    </ModernButton>
                                </div>

                            </motion.div>
                        ) : (
                            <div className="h-full flex items-center justify-center text-slate-300 border-2 border-dashed border-slate-200 rounded-[2.5rem] min-h-[500px]">
                                <p className="font-bold text-lg">Selecciona una vacante</p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
          </div>

          {/* MODAL MÓVIL (SOLO APARECE EN PANTALLAS PEQUEÑAS) */}
          <AnimatePresence>
            {selectedVacancy && (
                <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="lg:hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm p-4 flex items-end sm:items-center justify-center"
                    onClick={() => setSelectedVacancy(null)}
                >
                    <motion.div 
                        initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="bg-white w-full max-w-lg rounded-[2rem] p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={() => setSelectedVacancy(null)} className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full text-slate-500">
                            <X size={20} />
                        </button>

                        <div className="mb-6">
                            <span className="px-3 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-full uppercase tracking-wider mb-3 inline-block">
                                {selectedVacancy.area}
                            </span>
                            <h2 className="text-2xl font-black text-slate-900 leading-tight mb-1">{selectedVacancy.title}</h2>
                            <p className="text-slate-500 font-bold">{selectedVacancy.company}</p>
                        </div>

                        <div className="flex gap-4 mb-6 text-sm font-bold text-slate-600 bg-slate-50 p-4 rounded-xl">
                            <div className="flex items-center gap-2"><DollarSign size={16}/> {selectedVacancy.salary}</div>
                        </div>

                        <div className="space-y-6 mb-8">
                            <div>
                                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Descripción</h4>
                                <p className="text-slate-700 text-sm leading-relaxed font-medium">{selectedVacancy.description}</p>
                            </div>
                            <div>
                                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Requisitos</h4>
                                <ul className="space-y-2">
                                    {selectedVacancy.requirements.map((req, i) => (
                                        <li key={i} className="flex items-center gap-2 text-slate-700 text-sm font-bold">
                                            <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <ModernButton href="/registro-talento" className="w-full">
                            Postularme
                        </ModernButton>
                    </motion.div>
                </motion.div>
            )}
          </AnimatePresence>

        </main>
        <Footer />
      </div>
    </>
  );
}