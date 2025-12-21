'use client';
import React, { useRef } from 'react';
import Image from 'next/image'; 
import { Search, Users, ShieldCheck, Zap, FileText, Award, CheckCircle2 } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger); }

const GLASS_CARD = "bg-white/60 backdrop-blur-2xl border border-white/60 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.9)] rounded-[2.5rem]";

const slidesData = [
  { id: 1, step: "01", title: "Diagnóstico Profundo", subtitle: "Inmersión & Análisis", desc: "No solo recibimos una vacante; entendemos tu cultura. Realizamos una radiografía completa de tus necesidades técnicas y soft-skills.", features: ["Evaluación de Cultura", "Definición de Perfil Ideal", "Benchmark Salarial"], img: "/scrolls/Scroll_1.png", icon: <Search className="w-6 h-6 text-white" />, color: "cyan" },
  { id: 2, step: "02", title: "Talent Mapping AI", subtitle: "Búsqueda Inteligente", desc: "Nuestra tecnología rastrea candidatos pasivos y activos en tiempo real, filtrando el top 1% que encaja con tu stack tecnológico.", features: ["Filtrado por IA", "Headhunting Directo", "Validación Técnica"], img: "/scrolls/Scroll_2.png", icon: <Users className="w-6 h-6 text-white" />, color: "blue" },
  { id: 3, step: "03", title: "Blindaje Legal", subtitle: "Compliance REPSE", desc: "Cero riesgos. Estructuramos la contratación cumpliendo rigurosamente con la normativa laboral y fiscal vigente en México.", features: ["Auditoría Preventiva", "Contratos Blindados", "Deducibilidad 100%"], img: "/scrolls/Scroll_3.png", icon: <ShieldCheck className="w-6 h-6 text-white" />, color: "indigo" },
  { id: 4, step: "04", title: "Onboarding Ágil", subtitle: "Integración Efectiva", desc: "Aceleramos la curva de aprendizaje. Facilitamos la integración del talento a tus flujos de trabajo desde el día uno.", features: ["Kit de Bienvenida", "Setup de Accesos", "Seguimiento Semanal"], img: "/scrolls/Scroll_4.png", icon: <Zap className="w-6 h-6 text-white" />, color: "violet" },
  { id: 5, step: "05", title: "Gestión de Nómina", subtitle: "Precisión Financiera", desc: "Nos encargamos de la carga administrativa. Dispersión, cálculo de impuestos y prestaciones sin errores y a tiempo.", features: ["Timbrado CFDI", "Cálculo IMSS/INFONAVIT", "Reportes en Tiempo Real"], img: "/scrolls/Scroll_5.png", icon: <FileText className="w-6 h-6 text-white" />, color: "fuchsia" },
  { id: 6, step: "06", title: "Evolución Continua", subtitle: "Optimización & ROI", desc: "No termina en la contratación. Monitoreamos el desempeño y la satisfacción para garantizar relaciones a largo plazo.", features: ["Evaluación de Desempeño", "Feedback 360°", "Plan de Carrera"], img: "/scrolls/Scroll_6.png", icon: <Award className="w-6 h-6 text-white" />, color: "rose" }
];

export default function ScrollPathSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const slides = gsap.utils.toArray<HTMLElement>('.slide-panel', containerRef.current);
    const tl = gsap.timeline({
      scrollTrigger: { trigger: triggerRef.current, start: "top top", end: `+=${slides.length * 100}%`, scrub: 1, pin: true, anticipatePin: 1, refreshPriority: 0, invalidateOnRefresh: true }
    });

    slides.forEach((slide, i) => {
      const content = slide.querySelector('.slide-content');
      const imageWrapper = slide.querySelector('.slide-image-wrapper');
      if (i === 0) return;
      tl.fromTo(slide, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" });
      if(content && imageWrapper) { tl.from([content, imageWrapper], { y: 50, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "<0.3"); }
      if (i > 0) { tl.to(slides[i-1], { scale: 0.9, opacity: 0, filter: "blur(15px)", yPercent: -10, duration: 1 }, "<"); }
    });
  }, { scope: triggerRef });

  return (
    <div ref={triggerRef} className="relative w-full h-screen bg-white overflow-hidden z-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
      
      {/* Indicadores */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6">
        {slidesData.map((slide, i) => (
          <div key={i} className="group flex items-center gap-4 cursor-default">
             <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold uppercase tracking-widest text-slate-400 text-right w-24">{slide.title}</span>
             <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 bg-slate-300 group-hover:bg-slate-900 group-hover:scale-150`} />
          </div>
        ))}
      </div>

      <div ref={containerRef} className="relative w-full h-full">
        {slidesData.map((slide, index) => (
          <div key={slide.id} className="slide-panel absolute inset-0 w-full h-full flex items-center justify-center p-6 lg:p-12" style={{ zIndex: index + 1 }}>
            <div className="w-full max-w-7xl mx-auto h-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
              
              <div className="slide-content w-full lg:w-5/12 relative z-20 order-2 lg:order-1">
                <div className={`${GLASS_CARD} p-8 md:p-12 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500`}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <div className="flex items-center justify-between mb-8">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-${slide.color}-500 to-${slide.color}-600 flex items-center justify-center text-white shadow-lg shadow-${slide.color}-500/30`}>{slide.icon}</div>
                        <span className="text-6xl font-black text-slate-200/50 select-none font-sans">{slide.step}</span>
                    </div>
                    <div className="relative z-10">
                        <h4 className={`text-${slide.color}-600 font-bold uppercase text-xs tracking-[0.2em] mb-3`}>{slide.subtitle}</h4>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">{slide.title}</h2>
                        <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light mb-8">{slide.desc}</p>
                        <ul className="space-y-3 pt-6 border-t border-slate-200/50">
                            {slide.features.map((feat, i) => ( <li key={i} className="flex items-center gap-3 text-slate-700 text-sm font-semibold"><CheckCircle2 size={16} className={`text-${slide.color}-500`} />{feat}</li> ))}
                        </ul>
                    </div>
                </div>
              </div>

              <div className="slide-image-wrapper w-full lg:w-7/12 h-[40vh] lg:h-[70vh] relative flex items-center justify-center order-1 lg:order-2">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-${slide.color}-500/20 blur-[100px] rounded-full opacity-60 animate-pulse`} />
                <div className="relative w-full h-full z-10 transition-transform duration-[3s] hover:scale-105">
                     <Image 
                        src={slide.img} 
                        alt={slide.title}
                        fill
                        className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
                        sizes="(max-width: 768px) 100vw, 60vw"
                        quality={100} // CALIDAD MÁXIMA
                        unoptimized // EVITAR COMPRESIÓN AGRESIVA SI ES PNG/TRANSPARENTE
                        priority={index === 0}
                     />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}