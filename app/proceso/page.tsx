'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Search, Users, FileText, ShieldCheck, 
  ArrowRight, Target, Zap, 
  UserCheck, BarChart3, MessageSquare, Calendar
} from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactIntro from '../components/ContactIntro';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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
            <linearGradient id="netGradientProc" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#94a3b8" stopOpacity="0"/> 
                <stop offset="50%" stopColor="#0f172a" stopOpacity="0.2"/> 
                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0"/>
            </linearGradient>
        </defs>
        {nodes.map((node, i) => {
            const target = nodes[(i + 1) % nodes.length]; 
            if (i % 2 !== 0) return null; 
            return (
            <g key={`net-group-proc-${node.id}`}> 
                <motion.line 
                    x1={`${node.x}%`} y1={`${node.y}%`} 
                    x2={`${target.x}%`} y2={`${target.y}%`} 
                    stroke="url(#netGradientProc)" 
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
                key={`node-proc-${node.id}`}
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

// --- DATA TIMELINE ---
const timeline = [
  {
    step: "01",
    title: "Diagnóstico Inicial",
    duration: "Día 1-2",
    icon: <MessageSquare size={32} />,
    desc: "Entendemos a fondo tu necesidad: perfil, cultura, urgencia y contexto del puesto. Definimos el avatar del candidato ideal.",
    deliverables: ["Perfil validado", "Timeline acordado"],
  },
  {
    step: "02",
    title: "Búsqueda y Filtro",
    duration: "Día 3-8",
    icon: <Search size={32} />,
    desc: "Activamos nuestra red y base de datos. Aplicamos filtros rigurosos, entrevistas por competencias y evaluaciones técnicas.",
    deliverables: ["Longlist", "Evaluaciones completadas"],
  },
  {
    step: "03",
    title: "Presentación de Terna",
    duration: "Día 9-12",
    icon: <Users size={32} />,
    desc: "Te presentamos una terna de 3-5 candidatos validados con expediente completo y notas ejecutivas de entrevista.",
    deliverables: ["CVs + Expedientes", "Comparativa salarial"],
  },
  {
    step: "04",
    title: "Entrevistas y Cierre",
    duration: "Día 13-18",
    icon: <UserCheck size={32} />,
    desc: "Coordinamos tu agenda de entrevistas, facilitamos el feedback inmediato y te apoyamos en la negociación de la oferta.",
    deliverables: ["Feedback 360", "Oferta firmada"],
  },
  {
    step: "05",
    title: "Onboarding y Garantía",
    duration: "Día 19+",
    icon: <Target size={32} />,
    desc: "Acompañamos el ingreso del candidato y activamos la garantía de reemplazo para asegurar el éxito a largo plazo.",
    deliverables: ["Garantía Activa", "Seguimiento"],
  }
];

const deliverables = [
  { icon: <FileText size={24} />, title: "Expediente Completo", desc: "CV, evaluaciones psicométricas, referencias laborales y notas de entrevista." },
  { icon: <BarChart3 size={24} />, title: "Reporte de Mercado", desc: "Análisis de salarios y disponibilidad de talento en tu sector." },
  { icon: <ShieldCheck size={24} />, title: "Garantía por Escrito", desc: "Póliza de reemplazo de 90 días sin costo adicional." },
];

export default function ProcesoPage() {
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
        
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
          <OrganicNetworkBackground />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-32 pb-20 text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-800 text-[11px] font-bold uppercase tracking-widest mb-8 shadow-sm">
                Metodología Humanis
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-slate-900">
              Precisión <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">Ejecutiva</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-600 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
              Un proceso diseñado para eliminar la incertidumbre. <br className="hidden md:block"/>
              Desde la definición del perfil hasta la firma del contrato.
            </p>

            <ModernButton onClick={() => setShowContact(true)}>
                Iniciar Búsqueda
            </ModernButton>
          </div>
        </section>

        {/* --- TIMELINE VERTICAL (DISEÑO SLATE PREMIUM) --- */}
        <section className="relative py-24 bg-white">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                {/* Línea Central */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2" />

                {timeline.map((item, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={index} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-20 last:mb-0 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                            
                            {/* CÍRCULO CENTRAL (NÚMERO) */}
                            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 md:top-8 w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-lg z-20">
                                {item.step}
                            </div>

                            {/* CONTENIDO (TARJETA) */}
                            <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-slate-50 border border-slate-200 p-8 rounded-[2rem] hover:shadow-xl transition-shadow duration-300 group"
                                >
                                    <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                        <div className="p-3 bg-white rounded-xl shadow-sm text-slate-900">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black text-slate-900 leading-tight">{item.title}</h3>
                                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.duration}</span>
                                        </div>
                                    </div>
                                    
                                    <p className="text-slate-600 font-medium leading-relaxed mb-6">
                                        {item.desc}
                                    </p>

                                    {/* Entregables dentro de la tarjeta */}
                                    <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                                        {item.deliverables.map((del, i) => (
                                            <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 shadow-sm">
                                                {del}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* ESPACIO VACÍO PARA BALANCEAR EL GRID EN DESKTOP */}
                            <div className="hidden md:block w-1/2" />
                        </div>
                    );
                })}
            </div>
        </section>

        {/* --- ENTREGABLES (GRID) --- */}
        <section className="py-32 bg-slate-50">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">Transparencia Total</h2>
                    <p className="text-slate-500 text-xl font-light max-w-2xl mx-auto">Documentación clara en cada etapa.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {deliverables.map((item, idx) => (
                        <div key={idx} className="bg-white border border-slate-200 p-10 rounded-[2rem] hover:shadow-xl transition-shadow duration-300 text-center">
                            <div className="w-16 h-16 mx-auto bg-slate-900 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-slate-900/20">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* --- CTA FINAL --- */}
        <div className="py-40 bg-white text-center relative overflow-hidden z-10">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
            <div className="relative z-10">
                <h2 className="text-6xl md:text-7xl font-black mb-12 text-slate-900 tracking-tighter">¿Comenzamos?</h2>
                <ModernButton onClick={() => setShowContact(true)}>Enviar Vacante</ModernButton>
            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}