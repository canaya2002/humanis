'use client';
import React, { useEffect, useRef } from 'react';
import { Sparkles, Search, Users, ShieldCheck, Zap, FileText, Award } from 'lucide-react';
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
          end: "+=5000",
          scrub: 1.5,
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
        const progressStart = i * 1.6;
        
        // Activar tarjeta
        tl.to(card, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          onStart: () => {
            card.classList.add('active');
          }
        }, progressStart);
        
        // Desactivar tarjeta anterior
        if (i > 0) {
          tl.to(cards[i-1], {
            opacity: 0.25,
            scale: 0.88,
            duration: 0.6,
            ease: "power2.in",
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
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-400 text-lg">Cargando animaciones...</p>
      </div>
    );
  }

  const cardsData = [
    { title: "Diagnóstico", desc: "Análisis profundo de necesidades organizacionales y evaluación inicial del talento estratégico requerido.", img: "/images/diagnostico.jpg", position: "left" },
    { title: "Talent Mapping", desc: "Búsqueda inteligente potenciada con IA para identificar y atraer los mejores candidatos del mercado.", img: "/images/talent-mapping.jpg", position: "right" },
    { title: "Blindaje Legal", desc: "Auditoría REPSE exhaustiva y cumplimiento normativo garantizado para cero riesgo de responsabilidad solidaria.", img: "/images/blindaje-legal.jpg", position: "left" },
    { title: "Onboarding", desc: "Integración ágil y efectiva de nuevos colaboradores con metodología estructurada de inmersión cultural.", img: "/images/onboarding.jpg", position: "right" },
    { title: "Nómina", desc: "Cálculo preciso y gestión eficiente de compensaciones con cumplimiento fiscal al 100%.", img: "/images/nomina.jpg", position: "left" },
    { title: "Evolución", desc: "Crecimiento continuo del talento con medición de ROI, KPIs y optimización basada en datos.", img: "/images/evolucion.jpg", position: "right" }
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
            d="M 12,12 L 88,20 L 12,35 L 88,50 L 12,65 L 88,80" 
            fill="none" 
            stroke="rgba(79, 70, 229, 0.15)" 
            strokeWidth="0.3"
            strokeDasharray="2,2"
          />
        </svg>

        {/* Icono flotante glassmorphic que se mueve */}
        <div ref={boxRef} className="floating-icon-glass">
          <div className="icon-glow"></div>
          <Sparkles size={32} strokeWidth={2.5} />
        </div>

        {/* Tarjetas */}
        {cardsData.map((card, i) => (
          <div 
            key={i} 
            className={`gsap-card card-${i+1} ${card.position === 'left' ? 'card-left' : 'card-right'}`}
          >
            <div className="gsap-marker-icon">
              {i === 0 ? <Search size={28} strokeWidth={2} /> : i === 1 ? <Users size={28} strokeWidth={2} /> : i === 2 ? <ShieldCheck size={28} strokeWidth={2} /> : i === 3 ? <Zap size={28} strokeWidth={2} /> : i === 4 ? <FileText size={28} strokeWidth={2} /> : <Award size={28} strokeWidth={2} />}
            </div>
            <div className="gsap-card-content">
              <h4 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">{card.title}</h4>
              <p className="text-slate-600 text-base leading-relaxed">{card.desc}</p>
            </div>
            <img src={card.img} alt={card.title} className="gsap-card-img" />
          </div>
        ))}
      </div>
    </div>
  );
}