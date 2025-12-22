'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Search, Briefcase, MapPin, TrendingUp, Shield, 
  CheckCircle, ArrowRight, Star, Users, Clock,
  Building2, DollarSign, Heart, Sparkles, CheckCircle2, Minus, Zap
} from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';
import ContactIntro from '../components/ContactIntro';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// --- 1. FONDO DE RED NEURONAL (Mismo que en Servicios) ---
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
            <linearGradient id="netGradientTalent" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#94a3b8" stopOpacity="0"/> 
                <stop offset="50%" stopColor="#0f172a" stopOpacity="0.2"/> 
                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0"/>
            </linearGradient>
        </defs>
        {nodes.map((node, i) => {
            const target = nodes[(i + 1) % nodes.length]; 
            if (i % 2 !== 0) return null; 
            return (
            <g key={`net-group-talent-${node.id}`}> 
                <motion.line 
                    x1={`${node.x}%`} y1={`${node.y}%`} 
                    x2={`${target.x}%`} y2={`${target.y}%`} 
                    stroke="url(#netGradientTalent)" 
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
                key={`node-talent-${node.id}`}
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
interface ModernButtonProps { children: React.ReactNode; onClick?: () => void; secondary?: boolean; href?: string; }
const ModernButton = ({ children, onClick, secondary = false, href }: ModernButtonProps) => {
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

  const classes = `relative group overflow-hidden font-bold text-sm tracking-widest uppercase transition-all duration-400 ${secondary ? 'px-10 py-4 rounded-full' : 'px-10 py-4 rounded-full'} inline-flex items-center justify-center`;
  const styles = { boxShadow: '0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)' };

  if (href) {
      return <Link href={href} className={classes} style={styles}>{content}</Link>;
  }
  return <button onClick={onClick} className={classes} style={styles}>{content}</button>;
};

const RotatingText = () => {
  const words = ['PROFESIONAL', 'SIN LÍMITES', 'MEJOR', 'GLOBAL', 'REAL'];
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

// --- DATOS ---
const benefits = [
  { 
    title: "100% Gratuito", 
    desc: "Nunca cobramos a candidatos. Nuestros servicios son pagados por las empresas. Tu talento no tiene costo de entrada." 
  },
  { 
    title: "Oportunidades Reales", 
    desc: "Solo trabajamos con vacantes verificadas de empresas serias. Sin ofertas fantasma ni pérdidas de tiempo." 
  },
  { 
    title: "Acompañamiento", 
    desc: "No estás solo. Te guiamos desde la optimización de tu CV hasta la negociación de tu oferta salarial." 
  },
  { 
    title: "Desarrollo Profesional", 
    desc: "Acceso exclusivo a posiciones que impulsan tu carrera y te conectan con líderes de la industria." 
  },
];

const howItWorks = [
  { num: "01", title: "Regístrate", desc: "Crea tu perfil y sube tu CV. Un proceso optimizado que toma menos de 5 minutos." },
  { num: "02", title: "Match", desc: "Nuestra tecnología y recruiters analizan tu perfil. Si hay compatibilidad, te contactamos." },
  { num: "03", title: "Entrevistas", desc: "Coordinamos tus entrevistas y te preparamos para destacar frente a la empresa." },
  { num: "04", title: "Contratación", desc: "Te apoyamos en el cierre y celebramos contigo tu nuevo inicio profesional." },
];

const featuredVacancies = [
  { 
    title: "Ejecutivo de Ventas", 
    company: "Empresa Retail", 
    location: "CDMX", 
    salary: "$18k - $25k",
    type: "Presencial",
    tags: ["Ventas", "Comisiones"]
  },
  { 
    title: "Dev Full Stack", 
    company: "Startup Tech", 
    location: "Remoto", 
    salary: "$45k - $60k",
    type: "Remoto",
    tags: ["React", "Node.js"]
  },
  { 
    title: "Coord. Logística", 
    company: "Logística Global", 
    location: "Guadalajara", 
    salary: "$22k - $28k",
    type: "Híbrido",
    tags: ["Supply Chain", "SAP"]
  },
];

const testimonials = [
  {
    quote: "Gracias a Humanis encontré el trabajo que buscaba en menos de 2 semanas. El proceso fue muy profesional y transparente.",
    author: "María García",
    role: "Ejecutiva de Ventas",
    company: "Retail Leader"
  },
  {
    quote: "Me acompañaron en todo el proceso, desde preparar mi CV hasta negociar mi salario. 100% recomendado.",
    author: "Carlos Hernández",
    role: "Desarrollador Senior",
    company: "Tech Unicorn"
  },
];

export default function TalentoPage() {
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
    <>
      <GlobalStyles />
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900">
        <Header showHeader={showHeader} setShowContact={setShowContact} />
        
        <main className="pt-0">
          
          {/* --- HERO SECTION --- */}
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
                      src="/talentos/Talento_1.png" // Usamos una de las imágenes de talento que ya tienes
                      alt="Talento Humanis" 
                      width={700} 
                      height={700} 
                      priority 
                      className="w-full h-auto object-contain z-20 relative drop-shadow-[0_0_35px_rgba(34,211,238,0.4)]" 
                   />
                </motion.div>

                {/* TEXTO HERO + GRID DATOS */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full lg:w-1/2 order-1 lg:order-2 text-center lg:text-left"
                >
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-800 text-[11px] font-bold uppercase tracking-widest mb-8 shadow-sm">
                      Para Candidatos
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[0.95] tracking-tighter text-slate-900">
                    Tu Futuro <br/> <RotatingText />
                  </h1>
                  
                  <p className="text-lg md:text-xl text-slate-600 mb-6 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
                    Conectamos tu potencial con las empresas que están definiendo el futuro. Sin costo, sin letras chiquitas.
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-left mb-8">
                      <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex items-start gap-3 hover:bg-slate-100 transition-colors">
                          <Users className="text-cyan-600 shrink-0" size={24} />
                          <div>
                              <h4 className="font-bold text-slate-900 text-sm">2,500+</h4>
                              <p className="text-xs text-slate-500 mt-1">Profesionales Colocados</p>
                          </div>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex items-start gap-3 hover:bg-slate-100 transition-colors">
                          <Shield className="text-cyan-600 shrink-0" size={24} />
                          <div>
                              <h4 className="font-bold text-slate-900 text-sm">100% Gratis</h4>
                              <p className="text-xs text-slate-500 mt-1">Para candidatos, siempre.</p>
                          </div>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex items-start gap-3 hover:bg-slate-100 transition-colors">
                          <Building2 className="text-cyan-600 shrink-0" size={24} />
                          <div>
                              <h4 className="font-bold text-slate-900 text-sm">150+</h4>
                              <p className="text-xs text-slate-500 mt-1">Empresas Aliadas</p>
                          </div>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex items-start gap-3 hover:bg-slate-100 transition-colors">
                          <MapPin className="text-cyan-600 shrink-0" size={24} />
                          <div>
                              <h4 className="font-bold text-slate-900 text-sm">Nacional</h4>
                              <p className="text-xs text-slate-500 mt-1">Cobertura en 32 estados.</p>
                          </div>
                      </div>
                  </div>

                  <ModernButton href="/registro-talento">
                      Registrarme Ahora
                  </ModernButton>

                </motion.div>

              </div>
            </div>
          </section>

          {/* --- BENEFICIOS (GRID LIMPIO) --- */}
          <section className="relative py-32 bg-white">
              <div className="container mx-auto px-6 max-w-7xl relative z-10">
                  <div className="text-center mb-20">
                      <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">Por qué Humanis</h2>
                      <p className="text-slate-500 text-xl font-light max-w-2xl mx-auto">Más que una bolsa de trabajo, somos tu agente de carrera.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {benefits.map((item, idx) => (
                          <div key={idx} className="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                              <div className="w-12 h-1 bg-slate-900 mb-6 rounded-full" />
                              <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
                              <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.desc}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </section>

          {/* --- CÓMO FUNCIONA (NUMEROS GIGANTES) --- */}
          <section className="relative py-32 bg-slate-50 overflow-hidden">
             <div className="absolute inset-0 opacity-[0.4] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
             
             <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">Proceso Simple</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {howItWorks.map((step, idx) => (
                        <div key={idx} className="relative">
                            <span className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-transparent opacity-60 leading-none absolute -top-10 -left-4 select-none">
                                {step.num}
                            </span>
                            <div className="relative z-10 pt-8 pl-4">
                                <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
                                <p className="text-slate-600 text-sm font-medium leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
          </section>

          {/* --- VACANTES DESTACADAS (GRID SLATE) --- */}
          <section className="relative py-32 bg-white">
              <div className="container mx-auto px-6 max-w-7xl relative z-10">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                      <div>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">Vacantes</h2>
                        <p className="text-slate-500 text-xl font-light">Oportunidades activas seleccionadas.</p>
                      </div>
                      <Link href="/vacantes" className="group flex items-center gap-2 text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-cyan-600 hover:border-cyan-600 transition-colors">
                          Ver todas <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                      </Link>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                      {featuredVacancies.map((vacancy, idx) => (
                          <div key={idx} className="bg-white border border-slate-200 rounded-[2rem] p-8 hover:shadow-2xl hover:border-cyan-200 transition-all duration-300 group cursor-default">
                              <div className="flex justify-between items-start mb-6">
                                  <div>
                                      <h3 className="text-xl font-black text-slate-900 mb-1 group-hover:text-cyan-700 transition-colors">{vacancy.title}</h3>
                                      <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider">
                                          <Building2 size={12} /> {vacancy.company}
                                      </div>
                                  </div>
                                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${vacancy.type === 'Remoto' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'}`}>
                                      {vacancy.type}
                                  </span>
                              </div>

                              <div className="space-y-3 mb-8">
                                  <div className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                                      <MapPin size={16} className="text-slate-400" /> {vacancy.location}
                                  </div>
                                  <div className="flex items-center gap-3 text-slate-600 text-sm font-bold">
                                      <DollarSign size={16} className="text-slate-400" /> {vacancy.salary}
                                  </div>
                              </div>

                              <div className="flex flex-wrap gap-2">
                                  {vacancy.tags.map((tag, i) => (
                                      <span key={i} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-lg text-xs font-bold border border-slate-100">
                                          {tag}
                                      </span>
                                  ))}
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </section>

          {/* --- TESTIMONIOS (DARK SECTION) --- */}
          <section className="relative py-32 bg-slate-900 text-white overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
              <div className="container mx-auto px-6 max-w-7xl relative z-10">
                  <div className="text-center mb-20">
                      <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Historias de Éxito</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                      {testimonials.map((t, idx) => (
                          <div key={idx} className="bg-slate-800/50 border border-slate-700 p-10 rounded-[2rem] relative">
                              <div className="flex gap-1 mb-6 text-cyan-400">
                                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                              </div>
                              <p className="text-lg md:text-xl font-medium leading-relaxed mb-8 text-slate-200">"{t.quote}"</p>
                              <div className="flex items-center gap-4">
                                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-400">
                                      {t.author.charAt(0)}
                                  </div>
                                  <div>
                                      <p className="font-bold text-white">{t.author}</p>
                                      <p className="text-sm text-slate-400">{t.role} @ {t.company}</p>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </section>

          {/* --- CTA FINAL --- */}
          <div className="py-40 bg-white text-center relative overflow-hidden z-10">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
              <div className="relative z-10">
                  <h2 className="text-6xl md:text-7xl font-black mb-12 text-slate-900 tracking-tighter">¿Listo para el siguiente paso?</h2>
                  <ModernButton href="/registro-talento">Registrarme Gratis</ModernButton>
              </div>
          </div>

        </main>
        
        <Footer />
      </div>
    </>
  );
}