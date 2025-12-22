'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Search, Users, ShieldCheck, Zap, FileText, Award, CheckCircle2, TrendingUp } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger); }

// --- 1. FONDO DE RED NEURONAL (Sutil y Tecnológico) ---
const OrganicNetworkBackground = () => {
  const [nodes, setNodes] = useState<Array<{
    id: number;
    x: number; y: number;
    xMove: number; yMove: number;
    duration: number;
    size: number;
  }>>([]);
  
  useEffect(() => { 
      const newNodes = Array.from({ length: 15 }, (_, i) => ({ 
          id: i, 
          x: Math.random() * 100, 
          y: Math.random() * 100,
          xMove: (Math.random() - 0.5) * 15, 
          yMove: (Math.random() - 0.5) * 15, 
          duration: 15 + Math.random() * 15, 
          size: 3 + Math.random() * 3
      })); 
      setNodes(newNodes); 
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-white">
      <div className="absolute inset-0 bg-white z-0" />
      <svg className="absolute inset-0 w-full h-full z-0 overflow-visible">
        <defs>
            <linearGradient id="netGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#94a3b8" stopOpacity="0"/> 
                <stop offset="50%" stopColor="#0f172a" stopOpacity="0.2"/> 
                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0"/>
            </linearGradient>
        </defs>
        {nodes.map((node, i) => {
            const target = nodes[(i + 1) % nodes.length]; 
            if (i % 2 !== 0) return null; 
            return (
            <g key={`net-group-${node.id}`}> 
                <motion.line 
                    x1={`${node.x}%`} y1={`${node.y}%`} 
                    x2={`${target.x}%`} y2={`${target.y}%`} 
                    stroke="url(#netGradient)" 
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
                key={`node-${node.id}`}
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

// --- DATOS UNIFICADOS (Todos en Slate/Negro) ---
const slidesData = [
  { id: 1, step: "01", title: "Diagnóstico", subtitle: "Inmersión & Cultura", desc: "No solo llenamos una vacante. Realizamos una inmersión profunda para entender el ADN exacto de tu equipo.", features: ["Cultura Fit", "Perfil Ideal", "Benchmark"], kpi: "Precisión", kpiValue: "99%", img: "/scrolls/Scroll_1.png", icon: <Search className="w-8 h-8" />, color: "slate" },
  { id: 2, step: "02", title: "Talent AI", subtitle: "Búsqueda Activa", desc: "Algoritmos propios que rastrean y encuentran al 1% del talento pasivo que no busca trabajo.", features: ["IA Hunter", "Filtro Tech", "Validación"], kpi: "Candidatos", kpiValue: "Top 3", img: "/scrolls/Scroll_2.png", icon: <Users className="w-8 h-8" />, color: "slate" },
  { id: 3, step: "03", title: "Blindaje", subtitle: "Legal & Compliance", desc: "Cero riesgos. Estructuramos cada contratación cumpliendo rigurosamente la normativa REPSE.", features: ["Contratos", "Auditoría", "Fiscal"], kpi: "Riesgo", kpiValue: "0%", img: "/scrolls/Scroll_3.png", icon: <ShieldCheck className="w-8 h-8" />, color: "slate" },
  { id: 4, step: "04", title: "Onboarding", subtitle: "Integración Ágil", desc: "Gestionamos accesos y equipo desde el día uno para acelerar drásticamente la curva de productividad.", features: ["Bienvenida", "Accesos", "Equipo"], kpi: "Rapidez", kpiValue: "24h", img: "/scrolls/Scroll_4.png", icon: <Zap className="w-8 h-8" />, color: "slate" },
  { id: 5, step: "05", title: "Nómina", subtitle: "Gestión Total", desc: "Precisión financiera absoluta. Cálculo de impuestos, dispersión y prestaciones sin un solo error.", features: ["Timbrado", "IMSS", "Pagos"], kpi: "Errores", kpiValue: "0%", img: "/scrolls/Scroll_5.png", icon: <FileText className="w-8 h-8" />, color: "slate" },
  { id: 6, step: "06", title: "Evolución", subtitle: "Customer Success", desc: "Monitoreamos el desempeño y satisfacción mensualmente para garantizar relaciones a largo plazo.", features: ["Feedback", "Retención", "Growth"], kpi: "Retención", kpiValue: "+95%", img: "/scrolls/Scroll_6.png", icon: <Award className="w-8 h-8" />, color: "slate" }
];

export default function ScrollPathSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const slides = gsap.utils.toArray<HTMLElement>('.slide-panel', containerRef.current);
    
    const tl = gsap.timeline({
      scrollTrigger: { 
        trigger: triggerRef.current, 
        start: "top top", 
        // CAMBIO: 200% (antes 250%) para que sea un poco más rápido el cambio
        end: `+=${slides.length * 200}%`, 
        // CAMBIO: scrub 0.6 (antes 1) para que la animación siga más rápido al mouse
        scrub: 0.6, 
        pin: true, 
        anticipatePin: 1,
        invalidateOnRefresh: true 
      }
    });

    slides.forEach((slide, i) => {
      if (i === 0) return;
      
      const card = slide.querySelector('.slide-card');
      const elements = slide.querySelectorAll('.animate-item');
      const img = slide.querySelector('.slide-img-container');

      // Animaciones internas ligeramente aceleradas (duration 0.8 en lugar de 1)
      tl.fromTo(slide, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8 }); 
      
      if(card && img) {
         tl.from(card, { x: -50, opacity: 0, duration: 1, ease: "power3.out" }, "<");
         tl.from(img, { x: 50, opacity: 0, scale: 0.9, duration: 1, ease: "power3.out" }, "<0.1");
      }

      if(elements.length > 0) {
        tl.from(elements, { y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)" }, "<0.2");
      }

      if (i > 0) { 
        tl.to(slides[i-1], { autoAlpha: 0, scale: 0.95, duration: 0.6 }, "<"); 
      }
    });
  }, { scope: triggerRef });

  return (
    <div ref={triggerRef} className="relative w-full h-screen bg-white overflow-hidden z-20 font-sans">
      
      <OrganicNetworkBackground />

      <div ref={containerRef} className="relative w-full h-full">
        {slidesData.map((slide, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div key={slide.id} className="slide-panel absolute inset-0 w-full h-full flex items-center justify-center invisible">
              <div className="w-full h-full pt-24 pb-8 px-4 md:px-8 lg:px-12 flex flex-col justify-center relative z-10">
                 
                 <div className={`w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 h-full lg:h-auto ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    
                    {/* --- TARJETA DE TEXTO --- */}
                    <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-none">
                        <div className={`slide-card bg-white border border-slate-200 rounded-[2.5rem] p-6 md:p-10 lg:p-12 w-full relative overflow-hidden group shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] hover:shadow-[0_50px_110px_-15px_rgba(0,0,0,0.25)] transition-shadow duration-500`}>
                            
                            {/* Header */}
                            <div className="flex items-start justify-between mb-6 lg:mb-8 animate-item">
                                <div>
                                    <span className={`inline-block px-3 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-black uppercase tracking-widest border border-slate-200 mb-3`}>
                                        Paso {slide.step}
                                    </span>
                                    <h4 className="text-slate-400 font-bold text-sm tracking-widest uppercase">{slide.subtitle}</h4>
                                </div>
                                <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 shadow-lg flex items-center justify-center text-slate-900`}>
                                   {slide.icon}
                                </div>
                            </div>

                            {/* Título y Texto */}
                            <h2 className={`animate-item text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 mb-5 tracking-tighter leading-none`}>
                                {slide.title}
                            </h2>

                            <p className="animate-item text-slate-600 text-lg lg:text-xl leading-relaxed mb-8 font-medium">
                                {slide.desc}
                            </p>

                            {/* Features + KPI */}
                            <div className="animate-item grid grid-cols-1 md:grid-cols-5 gap-4 pt-6 border-t border-slate-100">
                                <div className="md:col-span-3 space-y-3">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Incluye:</span>
                                    {slide.features.map((feat, f) => (
                                        <div key={f} className="flex items-center gap-2.5 text-sm lg:text-base font-bold text-slate-700">
                                            <CheckCircle2 size={18} className={`text-slate-900 flex-shrink-0`} />
                                            {feat}
                                        </div>
                                    ))}
                                </div>
                                
                                <div className={`md:col-span-2 bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col justify-center`}>
                                    <span className={`text-[10px] font-black uppercase text-slate-500 mb-1 flex items-center gap-1`}>
                                        <TrendingUp size={12} /> {slide.kpi}
                                    </span>
                                    <span className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">{slide.kpiValue}</span>
                                    <div className="w-full h-1.5 bg-slate-200 rounded-full mt-2 overflow-hidden">
                                        <div className={`h-full bg-slate-800 w-[95%] rounded-full`} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* --- IMAGEN --- */}
                    <div className="slide-img-container w-full lg:w-1/2 flex items-center justify-center relative order-1 lg:order-none h-[30vh] lg:h-auto">
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[550px] lg:h-[550px] bg-slate-200/50 blur-[90px] rounded-full animate-pulse`} />
                        <div className="relative z-10 w-full flex justify-center perspective-1000">
                           <Image 
                              src={slide.img} 
                              alt={slide.title}
                              width={600} 
                              height={600}
                              className="object-contain w-auto h-auto max-h-[260px] md:max-h-[350px] lg:max-h-[550px] drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                              priority={index === 0}
                           />
                        </div>
                    </div>

                 </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}