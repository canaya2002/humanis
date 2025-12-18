'use client';
import React, { useEffect, useRef } from 'react';
import { X, Send } from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP';

// Separación de caracteres para animación
const splitTextToChars = (text: string) => {
  return text.split('').map((char, index) => (
    <span key={index} className="inline-block relative overflow-hidden">
      <span className="inline-block translate-y-full animate-char font-black">
        {char === ' ' ? '\u00A0' : char}
      </span>
    </span>
  ));
};

interface ContactIntroProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactIntro({ isOpen, onClose }: ContactIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const gsapLoaded = useGSAP();

  // Bloquear scroll del body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Animaciones GSAP
  useEffect(() => {
    if (!isOpen || !gsapLoaded || !containerRef.current) return;
    
    const gsap = (window as any).gsap;
    const CustomEase = (window as any).CustomEase;

    if (gsap && contentRef.current) {
      if (CustomEase) gsap.registerPlugin(CustomEase);
      
      const tl = gsap.timeline();
      
      // 1. Aparecer Overlay
      tl.set(containerRef.current, { autoAlpha: 1 })
        .to(containerRef.current, { backgroundColor: "rgba(248, 250, 252, 0.8)", backdropFilter: "blur(12px)", duration: 0.5 })
        
      // 2. Expandir el Modal 3D
        .fromTo(contentRef.current, 
          { scale: 0.95, opacity: 0, y: 40, rotationX: 5 },
          { scale: 1, opacity: 1, y: 0, rotationX: 0, duration: 0.8, ease: "power3.out" }
        )
        
      // 3. Texto Título
        .to(".animate-char", { 
          y: "0%", 
          duration: 0.6, 
          stagger: 0.03, 
          ease: "back.out(1.5)" 
        }, "-=0.5")
        
      // 4. Campos del formulario
        .fromTo(".form-element", 
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power2.out" }, "-=0.3"
        );
    }
  }, [isOpen, gsapLoaded]);

  if (!isOpen) return null;

  return (
    <div 
        ref={containerRef} 
        className="fixed inset-0 z-[9999] w-full h-full flex items-center justify-center invisible overflow-y-auto overflow-x-hidden p-4 sm:p-6"
    >
      {/* Botón Cerrar Flotante */}
      <button 
        onClick={onClose} 
        className="absolute top-6 right-6 z-50 p-2 rounded-full bg-white text-slate-400 border border-slate-200 hover:bg-slate-50 hover:text-slate-900 transition-all duration-300 hover:rotate-90 shadow-sm"
      >
        <X size={24} />
      </button>

      {/* --- 3D WHITE CARD CONTAINER --- */}
      <div 
        ref={contentRef}
        // Cambio a bg-white y border-slate-100 para el look "full blanco"
        className="relative w-full max-w-2xl bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden"
        style={{
            // Sombra compleja para efecto 3D físico y bordes definidos
            boxShadow: `
                /* Sombra de profundidad profunda y neutra (levanta el objeto) */
                0 60px 120px -20px rgba(51, 65, 85, 0.25),
                /* Highlight superior intenso (borde afilado) */
                inset 0 2px 0 rgba(255, 255, 255, 1),
                /* Sombra interna suave inferior para volumen */
                inset 0 -3px 20px rgba(0, 0, 0, 0.03)
            `
        }}
      >
        {/* Ruido sutil para textura física */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] pointer-events-none z-0"></div>

        {/* CONTENIDO */}
        <div className="relative z-10 px-8 py-12 md:p-14 flex flex-col items-center">
            
            {/* Contenedor del Logo (Reemplaza la estrella) */}
            <div className="p-4 rounded-2xl bg-white shadow-[inset_0_1px_4px_rgba(0,0,0,0.05),0_5px_15px_-5px_rgba(0,0,0,0.1)] flex items-center justify-center mb-8 border border-slate-100">
                <img src="/humanislogo.png" alt="Humanis" className="w-12 h-auto object-contain" />
            </div>

            {/* Título Animado */}
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-2 tracking-tighter text-center contact-title overflow-hidden pb-2 font-black">
                {splitTextToChars("ÚNETE AL FUTURO")}
            </h2>
            <p className="text-slate-500 text-center mb-10 max-w-md mx-auto text-sm md:text-base font-medium form-element leading-relaxed">
                Déjanos tus datos y diseñaremos una estrategia de capital humano a la medida de tu visión.
            </p>

            {/* FORMULARIO */}
            <form className="w-full space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Inputs con efecto "hundido" más pronunciado */}
                    <div className="space-y-1.5 form-element">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Nombre</label>
                        <input 
                            type="text" 
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 font-medium outline-none focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] placeholder:text-slate-400"
                            placeholder="Tu nombre"
                        />
                    </div>
                    <div className="space-y-1.5 form-element">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Empresa</label>
                        <input 
                            type="text" 
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 font-medium outline-none focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] placeholder:text-slate-400"
                            placeholder="Organización"
                        />
                    </div>
                </div>

                <div className="space-y-1.5 form-element">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Correo Corporativo</label>
                    <input 
                        type="email" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 font-medium outline-none focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] placeholder:text-slate-400"
                        placeholder="tucorreo@empresa.com"
                    />
                </div>

                <div className="space-y-1.5 form-element">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Mensaje</label>
                    <textarea 
                        rows={3} 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 font-medium outline-none focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] placeholder:text-slate-400 resize-none"
                        placeholder="Cuéntanos sobre tus necesidades de talento..."
                    ></textarea>
                </div>

                <div className="pt-4 form-element">
                    <button 
                        type="button" 
                        className="group w-full relative overflow-hidden bg-slate-900 text-white font-black tracking-widest text-sm py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 active:scale-[0.98]"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            INICIAR TRANSFORMACIÓN
                            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                    </button>
                </div>
            </form>

            <div className="mt-8 text-center form-element">
                <p className="text-[10px] text-slate-400 font-medium">
                    Al enviar este formulario aceptas nuestro <span className="underline decoration-slate-300 cursor-pointer hover:text-cyan-700 transition-colors">Aviso de Privacidad</span>.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}