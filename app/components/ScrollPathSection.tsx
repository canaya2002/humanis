'use client';
import React, { useEffect, useRef } from 'react';
import { TrendingUp, Search, Users, ShieldCheck, Zap, FileText, Award } from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP';

// Tokens de Estilo Glass (Mismos que en page.tsx para consistencia)
const CARD_GLASS = "bg-white/70 backdrop-blur-2xl border border-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.06)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.7)] rounded-[2rem]";

export default function ScrollPathSection() {
  const gsapLoaded = useGSAP();
  const triggerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gsapLoaded || !triggerRef.current || !boxRef.current) return;
    
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    const MotionPathPlugin = (window as any).MotionPathPlugin;

    if (!gsap || !ScrollTrigger || !MotionPathPlugin) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    // Limpieza de triggers anteriores
    ScrollTrigger.getAll().forEach((trigger: any) => {
      if (trigger.vars.trigger === triggerRef.current) {
        trigger.kill();
      }
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=4000",
          scrub: 1.2, // Scrub más suave
          pin: true,
          anticipatePin: 1
        }
      });

      // Animar el icono en zigzag
      tl.to(boxRef.current, {
        motionPath: {
          path: "#zigzagPath",
          align: "#zigzagPath",
          alignOrigin: [0.5, 0.5],
          autoRotate: false
        },
        duration: 10,
        ease: "none"
      });

      const cards = gsap.utils.toArray(".gsap-card");
      
      cards.forEach((card: any, i: number) => {
        const progressStart = i * 1.5;
        
        // Activar tarjeta con efecto pop 3D suave
        tl.to(card, {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "back.out(1.7)", // Efecto de rebote sutil
          onStart: () => {
            card.classList.add('active');
          }
        }, progressStart);
        
        // Desactivar tarjeta anterior
        if (i > 0) {
          tl.to(cards[i-1], {
            opacity: 0.4,
            scale: 0.95,
            filter: "blur(2px)",
            duration: 0.8,
            ease: "power2.inOut",
            onStart: () => {
              cards[i-1].classList.remove('active');
            }
          }, progressStart + 0.3);
        }
      });

    }, triggerRef);

    return () => {
      ctx.revert();
    };
  }, [gsapLoaded]);

  if (!gsapLoaded) {
    return <div className="min-h-screen" />;
  }

  const cardsData = [
    { title: "Diagnóstico", desc: "Análisis profundo de necesidades y evaluación inicial del talento.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800", position: "left" },
    { title: "Talent Mapping", desc: "Búsqueda inteligente con IA para identificar los mejores candidatos.", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800", position: "right" },
    { title: "Blindaje Legal", desc: "Auditoría REPSE completa y cumplimiento normativo garantizado.", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800", position: "left" },
    { title: "Onboarding", desc: "Integración ágil y efectiva de nuevos colaboradores al equipo.", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", position: "right" },
    { title: "Nómina", desc: "Cálculo exacto y gestión eficiente de compensaciones.", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800", position: "left" },
    { title: "Evolución", desc: "Crecimiento continuo con medición de ROI y optimización.", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800", position: "right" }
  ];

  return (
    <div ref={triggerRef} className="gsap-main-wrapper relative overflow-hidden bg-slate-50/50">
      
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_70%)] pointer-events-none" />

      <svg className="orbit-gradient-svg">
        <defs>
          <linearGradient id="orbit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#4f46e5', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="gsap-pinned-container relative z-10">
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path 
            id="zigzagPath" 
            d="M 15,15 L 85,25 L 15,40 L 85,55 L 15,70 L 85,85" 
            fill="none" 
            stroke="none" 
          />
        </svg>

        {/* Icono guía */}
        <div ref={boxRef} className="absolute z-30 w-16 h-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-full shadow-[0_0_20px_rgba(79,70,229,0.5)] flex items-center justify-center text-white border-4 border-white">
          <TrendingUp size={24} />
        </div>

        {/* Tarjetas con estilo Liquid Glass */}
        {cardsData.map((card, i) => (
          <div 
            key={i} 
            className={`gsap-card card-${i+1} ${card.position === 'left' ? 'card-left' : 'card-right'} ${CARD_GLASS}`}
          >
            <div className="gsap-marker-icon bg-white shadow-md text-slate-900 border border-slate-100 p-3 rounded-xl">
              {i === 0 ? <Search size={24} /> : i === 1 ? <Users size={24} /> : i === 2 ? <ShieldCheck size={24} /> : i === 3 ? <Zap size={24} /> : i === 4 ? <FileText size={24} /> : <Award size={24} />}
            </div>
            
            <div className="gsap-card-content flex flex-col justify-center">
              <h4 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">{card.title}</h4>
              <p className="text-slate-600 text-lg leading-relaxed font-light">{card.desc}</p>
            </div>
            
            <div className="gsap-card-img-container overflow-hidden rounded-2xl shadow-inner border border-white/50 relative group">
                <img src={card.img} alt={card.title} className="gsap-card-img object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}