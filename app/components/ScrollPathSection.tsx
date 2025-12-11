'use client';
import React, { useEffect, useRef } from 'react';
import { TrendingUp, Search, Users, ShieldCheck, Zap, FileText, Award } from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP';

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
      console.error('GSAP plugins not loaded');
      return;
    }

    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

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
          scrub: 1,
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
        
        // Activar tarjeta
        tl.to(card, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
          onStart: () => {
            card.classList.add('active');
          }
        }, progressStart);
        
        // Desactivar tarjeta anterior
        if (i > 0) {
          tl.to(cards[i-1], {
            opacity: 0.3,
            scale: 0.9,
            duration: 0.5,
            ease: "power2.in",
            onStart: () => {
              cards[i-1].classList.remove('active');
            }
          }, progressStart + 0.2);
        }
      });

    }, triggerRef);

    return () => {
      ctx.revert();
    };
  }, [gsapLoaded]);

  if (!gsapLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-400 text-lg">Cargando animaciones...</p>
      </div>
    );
  }

  const cardsData = [
    { title: "Diagnóstico", desc: "Análisis profundo de necesidades y evaluación inicial del talento requerido.", img: "/images/diagnostico.jpg", position: "left" },
    { title: "Talent Mapping", desc: "Búsqueda inteligente con IA para identificar los mejores candidatos.", img: "/images/talent-mapping.jpg", position: "right" },
    { title: "Blindaje Legal", desc: "Auditoría REPSE completa y cumplimiento normativo garantizado.", img: "/images/blindaje-legal.jpg", position: "left" },
    { title: "Onboarding", desc: "Integración ágil y efectiva de nuevos colaboradores al equipo.", img: "/images/onboarding.jpg", position: "right" },
    { title: "Nómina", desc: "Cálculo exacto y gestión eficiente de compensaciones.", img: "/images/nomina.jpg", position: "left" },
    { title: "Evolución", desc: "Crecimiento continuo con medición de ROI y optimización.", img: "/images/evolucion.jpg", position: "right" }
  ];

  return (
    <div ref={triggerRef} className="gsap-main-wrapper">
      <svg className="orbit-gradient-svg">
        <defs>
          <linearGradient id="orbit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#4f46e5', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="gsap-pinned-container">
        {/* SVG con path invisible para el movimiento zigzag */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path 
            id="zigzagPath" 
            d="M 15,15 L 85,25 L 15,40 L 85,55 L 15,70 L 85,85" 
            fill="none" 
            stroke="none" 
          />
        </svg>

        {/* Icono que se mueve */}
        <div ref={boxRef} className="absolute z-30 w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center text-white border-2 border-white">
          <TrendingUp size={28} />
        </div>

        {/* Tarjetas */}
        {cardsData.map((card, i) => (
          <div 
            key={i} 
            className={`gsap-card card-${i+1} ${card.position === 'left' ? 'card-left' : 'card-right'}`}
          >
            <div className="gsap-marker-icon">
              {i === 0 ? <Search size={28} /> : i === 1 ? <Users size={28} /> : i === 2 ? <ShieldCheck size={28} /> : i === 3 ? <Zap size={28} /> : i === 4 ? <FileText size={28} /> : <Award size={28} />}
            </div>
            <div className="gsap-card-content">
              <h4 className="text-3xl font-bold text-slate-900 mb-3">{card.title}</h4>
              <p className="text-slate-600 text-base leading-relaxed">{card.desc}</p>
            </div>
            <img src={card.img} alt={card.title} className="gsap-card-img" />
          </div>
        ))}
      </div>
    </div>
  );
}