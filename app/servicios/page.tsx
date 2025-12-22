'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, CheckCircle2, Minus, 
  Globe2, Zap, ShieldCheck, BarChart3 
} from 'lucide-react'; 

import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactIntro from '../components/ContactIntro';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// --- 1. FONDO DE RED NEURONAL ---
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
            <linearGradient id="netGradientServ" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#94a3b8" stopOpacity="0"/> 
                <stop offset="50%" stopColor="#0f172a" stopOpacity="0.2"/> 
                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0"/>
            </linearGradient>
        </defs>
        {nodes.map((node, i) => {
            const target = nodes[(i + 1) % nodes.length]; 
            if (i % 2 !== 0) return null; 
            return (
            <g key={`net-group-serv-${node.id}`}> 
                <motion.line 
                    x1={`${node.x}%`} y1={`${node.y}%`} 
                    x2={`${target.x}%`} y2={`${target.y}%`} 
                    stroke="url(#netGradientServ)" 
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
                key={`node-serv-${node.id}`}
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
interface ModernButtonProps { children: React.ReactNode; onClick?: () => void; secondary?: boolean; }
const ModernButton = ({ children, onClick, secondary = false }: ModernButtonProps) => (
  <button onClick={onClick} className={`relative group overflow-hidden font-bold text-sm tracking-widest uppercase transition-all duration-400 ${secondary ? 'px-10 py-4 rounded-full' : 'px-10 py-4 rounded-full'}`} style={{ boxShadow: '0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)' }}>
    <div className="absolute inset-0 z-0 backdrop-blur-[3px] overflow-hidden rounded-full" style={{ filter: 'blur(0.5px)', isolation: 'isolate' }} />
    <div className={`absolute inset-0 z-[1] rounded-full ${secondary ? 'bg-white/40' : 'bg-gradient-to-br from-slate-800/60 via-slate-900/70 to-slate-950/60'}`}></div>
    <div className="absolute inset-0 z-[2] overflow-hidden rounded-full" style={{ boxShadow: 'inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)' }}></div>
    <span className={`relative z-[3] flex items-center gap-3 ${secondary ? 'text-slate-900' : 'text-white'}`}>
      {children}
      {!secondary && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform stroke-[3]" />}
    </span>
  </button>
);

// --- NUEVO TEXTO ROTATIVO (ESPECÍFICO PARA SERVICIOS) ---
const RotatingText = () => {
  const words = ['PERSONALIZADO', 'ESCALABLE', 'CERTIFICADO', 'ESTRATÉGICO', 'GLOBAL'];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((prev) => (prev + 1) % words.length), 3000);
    return () => clearInterval(interval);
  }, [words.length]);
  return (
    <span className="relative inline-block min-w-[280px] md:min-w-[680px] text-left h-[1.2em] align-top overflow-visible -mb-2"> 
      {words.map((word, idx) => (
        <motion.span
          key={idx} initial={false} animate={{ opacity: idx === currentIndex ? 1 : 0, y: idx === currentIndex ? 0 : idx === (currentIndex - 1 + words.length) % words.length ? -50 : 50, filter: idx === currentIndex ? 'blur(0px)' : 'blur(4px)' }} transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }} className="absolute left-0 top-0 w-full bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-cyan-600 to-slate-900 block px-1"
        > {word} </motion.span>
      ))}
    </span>
  );
};

// --- DATOS COMPLETOS DE SERVICIOS ---
const mainServices = [
  {
    id: 1,
    step: "01",
    title: "Reclutamiento por Comisión",
    subtitle: "Pago por Éxito",
    longDesc: "Eliminamos el riesgo de inversión inicial. Solo pagas cuando encuentras al candidato ideal que se integra exitosamente. Realizamos una búsqueda exhaustiva combinando headhunting activo y mapeo de talento pasivo validado.",
    features: [
        "Headhunting directo",
        "Filtros técnicos avanzados",
        "Evaluación cultural",
        "Shortlist en 5 días",
        "Garantía de 90 días",
        "Referencias validadas"
    ],
    image: "/servicios/reclutamiento-comision.png",
    kpi: "Tasa de Éxito",
    kpiValue: "96%",
  },
  {
    id: 2,
    step: "02",
    title: "Programa Talento Joven",
    subtitle: "Pipeline de Futuro",
    longDesc: "Conectamos a tu empresa con el talento emergente de las mejores universidades. Un programa estratégico que no solo cubre posiciones junior, sino que construye un semillero de futuros líderes formados en tu cultura.",
    features: [
        "Alianzas universitarias",
        "Promedio min. 8.5",
        "Onboarding asistido",
        "Evaluación mensual",
        "Plan de carrera",
        "Gestión de becas"
    ],
    image: "/servicios/talento-joven.png",
    kpi: "Retención",
    kpiValue: "92%",
  },
  {
    id: 3,
    step: "03",
    title: "RPO Ligero",
    subtitle: "Gestión Continua",
    longDesc: "Tu propio departamento de reclutamiento externo. Un equipo dedicado y tecnología propietaria para gestionar volúmenes constantes de contratación con costos fijos predecibles y reportes en tiempo real.",
    features: [
        "Recruiter dedicado",
        "Tecnología ATS incluida",
        "Dashboard en vivo",
        "Reportes de KPIs",
        "Employer Branding",
        "Costos fijos"
    ],
    image: "/servicios/rpo-ligero.png",
    kpi: "Eficiencia",
    kpiValue: "94%",
  }
];

const complementaryServices = [
  { 
    title: "Entrevistas Estructuradas", 
    desc: "Evaluaciones por competencias (STAR) para validar hard y soft skills. Entregamos reportes detallados con semáforo de viabilidad." 
  },
  { 
    title: "Pruebas Psicométricas", 
    desc: "Baterías validadas de personalidad, inteligencia emocional y coeficiente intelectual para predecir el comportamiento laboral." 
  },
  { 
    title: "Verificación de Referencias", 
    desc: "Validación 360° de historial laboral, logros, motivos de salida y recontratabilidad directamente con ex-jefes." 
  },
  { 
    title: "Estudios Socioeconómicos", 
    desc: "Investigación de campo sobre antecedentes laborales, legales y entorno social con total confidencialidad y apego a la ley." 
  },
];

const guarantees = [
  { 
    title: "Garantía de Reemplazo", 
    desc: "Si el candidato no cumple las expectativas en los primeros 90 días, lo reponemos sin costo adicional. Tu inversión está 100% blindada." 
  },
  { 
    title: "Tiempo de Respuesta", 
    desc: "Compromiso de presentar la primera terna calificada en 5-10 días hábiles para perfiles administrativos y operativos." 
  },
  { 
    title: "Calidad de Filtro", 
    desc: "Solo presentamos candidatos que cumplen mínimo el 80% del perfil ideal. No te hacemos perder tiempo con perfiles de relleno." 
  },
];

export default function ServiciosPage() {
  const [showHeader, setShowHeader] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 80) { setShowHeader(false); } else { setShowHeader(true); }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900">
      <Header showHeader={showHeader} setShowContact={setShowContact} />
      <ContactIntro isOpen={showContact} onClose={() => setShowContact(false)} />

      <main className="relative pt-0">
        
        {/* --- HERO SECTION RECARGADO (SIN BOTÓN, MÁS INFO) --- */}
        <section className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden">
          <OrganicNetworkBackground />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-32 pb-20">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              
              {/* IMAGEN HERO */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/2 order-2 lg:order-1 relative"
              >
                 <Image 
                    src="/servicios/serviciocon.png" 
                    alt="Servicios Humanis" 
                    width={700} 
                    height={700} 
                    priority 
                    className="w-full h-auto object-contain z-20 relative drop-shadow-[0_0_35px_rgba(34,211,238,0.4)]" 
                 />
              </motion.div>

              {/* TEXTO HERO + GRID DE INFORMACIÓN (REEMPLAZO DEL BOTÓN) */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/2 order-1 lg:order-2 text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-800 text-[11px] font-bold uppercase tracking-widest mb-8 shadow-sm">
                    Servicios Humanis
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[0.95] tracking-tighter text-slate-900">
                  Infraestructura <br/> <RotatingText />
                </h1>
                
                <p className="text-lg md:text-xl text-slate-600 mb-6 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
                  Desplegamos una arquitectura de talento diseñada para empresas que exigen precisión. No somos solo headhunters; somos ingenieros de capital humano.
                </p>

                <p className="text-base text-slate-500 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium border-l-4 border-cyan-500 pl-4">
                  Combinamos inteligencia de mercado en tiempo real, cumplimiento normativo estricto (REPSE/ISO) y tecnología de evaluación predictiva para reducir tu rotación hasta en un 40% desde el primer año.
                </p>
                
                {/* GRID DE INFORMACIÓN (EN LUGAR DEL BOTÓN) */}
                <div className="grid grid-cols-2 gap-4 text-left">
                    <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex items-start gap-3 hover:bg-slate-100 transition-colors">
                        <Globe2 className="text-cyan-600 shrink-0" size={24} />
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">Cobertura Global</h4>
                            <p className="text-xs text-slate-500 mt-1">Reclutamiento en todo LATAM y Norteamérica.</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex items-start gap-3 hover:bg-slate-100 transition-colors">
                        <Zap className="text-cyan-600 shrink-0" size={24} />
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">Velocidad Táctica</h4>
                            <p className="text-xs text-slate-500 mt-1">SLAs de presentación de 5 a 10 días hábiles.</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex items-start gap-3 hover:bg-slate-100 transition-colors">
                        <ShieldCheck className="text-cyan-600 shrink-0" size={24} />
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">Blindaje Total</h4>
                            <p className="text-xs text-slate-500 mt-1">Cumplimiento legal y fiscal garantizado 100%.</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex items-start gap-3 hover:bg-slate-100 transition-colors">
                        <BarChart3 className="text-cyan-600 shrink-0" size={24} />
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">Data Driven</h4>
                            <p className="text-xs text-slate-500 mt-1">Reportes de mercado y salarios en tiempo real.</p>
                        </div>
                    </div>
                </div>

              </motion.div>

            </div>
          </div>
        </section>

        {/* --- SERVICIOS PRINCIPALES --- */}
        <section className="relative bg-white pb-20">
            {mainServices.map((service, index) => {
                const isEven = index % 2 === 0;
                return (
                    <div key={service.id} className="py-24 relative">
                        <div className="container mx-auto px-6 max-w-7xl relative z-10">
                            <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
                                
                                {/* IMAGEN DEL SERVICIO */}
                                <div className="w-full lg:w-1/2 flex justify-center">
                                    <div className="relative w-full max-w-[500px]">
                                        <div className="absolute inset-0 bg-slate-100/50 rounded-full blur-[60px] scale-90" />
                                        <Image 
                                            src={service.image} 
                                            alt={service.title} 
                                            width={600} 
                                            height={600}
                                            className="relative z-10 object-contain w-full h-auto max-h-[300px] md:max-h-[450px] drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>

                                {/* INFO DEL SERVICIO */}
                                <div className="w-full lg:w-1/2">
                                    <div className="flex flex-col items-start">
                                        <span className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-white opacity-80 leading-none -mb-6 ml-[-0.2em] select-none">
                                            {service.step}
                                        </span>
                                        
                                        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-2 pl-1">{service.subtitle}</h3>
                                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter leading-none">{service.title}</h2>
                                        
                                        <div className="w-20 h-1.5 bg-gradient-to-r from-slate-800 to-slate-600 rounded-full mb-8" />
                                        
                                        <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
                                            {service.longDesc}
                                        </p>

                                        {/* GRID DE FEATURES */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 w-full mb-10">
                                            {service.features.map((feat, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <CheckCircle2 size={18} className="text-slate-900 shrink-0" strokeWidth={2.5} />
                                                    <span className="text-sm font-bold text-slate-700">{feat}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col gap-2 w-full sm:w-auto min-w-[200px]">
                                            <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">{service.kpi}</span>
                                            <span className="text-5xl font-black text-slate-900 tracking-tighter">{service.kpiValue}</span>
                                            <div className="w-full h-1 bg-slate-200 rounded-full mt-1">
                                                <div className="h-full bg-slate-900 w-[95%] rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                );
            })}
        </section>

        {/* --- SERVICIOS COMPLEMENTARIOS --- */}
        <section className="relative py-32 bg-slate-50">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">Complementos</h2>
                    <p className="text-slate-500 text-xl font-light max-w-2xl mx-auto">Herramientas de precisión para decisiones informadas.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {complementaryServices.map((service, idx) => (
                        <div key={idx} className="bg-white border border-slate-200 p-10 rounded-[2rem] hover:shadow-xl transition-shadow duration-300 group flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <Minus className="text-slate-300" />
                                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-cyan-700 transition-colors">{service.title}</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed font-medium text-lg">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* --- GARANTÍAS --- */}
        <section className="relative py-32 bg-white">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">Garantías</h2>
                    <p className="text-slate-500 text-xl font-light max-w-2xl mx-auto">Tu inversión está protegida por contrato.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {guarantees.map((item, idx) => (
                        <div key={idx} className="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] text-center hover:bg-white hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-1 bg-slate-900 mx-auto mb-6 rounded-full" />
                            <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* --- CTA FINAL --- */}
        <div className="py-40 bg-white text-center relative overflow-hidden z-10">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
            <div className="relative z-10">
                <h2 className="text-6xl md:text-7xl font-black mb-12 text-slate-900 tracking-tighter">¿Hablamos de negocios?</h2>
                <ModernButton onClick={() => setShowContact(true)}>Agendar Reunión</ModernButton>
            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}