'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { X, Send, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

// Separación de caracteres para animación del título
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
  const formRef = useRef<HTMLFormElement>(null);
  
  // Estados
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string>("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  // Bloquear scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStep(1); 
      setPrivacyAccepted(false); // Resetear checkbox al abrir
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Animaciones GSAP (Entrada)
  useGSAP(() => {
    if (!isOpen || !containerRef.current || !contentRef.current) return;
    
    const tl = gsap.timeline();
    
    // 1. Overlay
    tl.set(containerRef.current, { autoAlpha: 1 })
      .to(containerRef.current, { backgroundColor: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(5px)", duration: 0.4 })
      
    // 2. Modal (Pop Up con rebote sutil)
      .fromTo(contentRef.current, 
        { scale: 0.9, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.2)" }
      )
      
    // 3. Título (Letra por letra)
      .to(".animate-char", { 
        y: "0%", duration: 0.5, stagger: 0.02, ease: "power3.out" 
      }, "-=0.3")
      
    // 4. Elementos del formulario
      .fromTo(".fade-in-element", 
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }, "-=0.2"
      );

  }, { scope: containerRef, dependencies: [isOpen] });

  // Animación al cambiar de paso (Slide lateral)
  useEffect(() => {
    if(!formRef.current) return;
    gsap.fromTo(formRef.current, 
        { opacity: 0, x: step === 1 ? -20 : 20 }, 
        { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" }
    );
  }, [step]);

  if (!isOpen) return null;

  return (
    <div 
        ref={containerRef} 
        className="fixed inset-0 z-[9999] w-full h-full flex items-center justify-center invisible overflow-y-auto overflow-x-hidden p-4 sm:p-6"
    >
      {/* Botón Cerrar */}
      <button 
        onClick={onClose} 
        className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-900 transition-all duration-300"
      >
        <X size={24} strokeWidth={2.5} />
      </button>

      {/* --- TARJETA --- */}
      <div 
        ref={contentRef}
        className="relative w-full max-w-2xl bg-white border border-slate-100 rounded-[2rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden"
      >
        {/* Decoración Fondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-50 to-transparent rounded-bl-full opacity-50 pointer-events-none" />

        <div className="relative z-10 px-8 py-12 md:px-16 md:py-14 flex flex-col items-center">
            
            {/* Título Principal */}
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-3 tracking-tight text-center overflow-hidden pb-1 font-black leading-none uppercase">
                {splitTextToChars("TRABAJEMOS JUNTOS")}
            </h2>
            <p className="fade-in-element text-slate-500 text-center mb-8 max-w-sm text-sm font-medium leading-relaxed">
               Llena el formulario para comenzar a diseñar tu estrategia de talento.
            </p>
            
            {/* Indicador de Pasos Minimalista */}
            <div className="flex items-center gap-3 mb-10 fade-in-element">
                <div className={`h-1 rounded-full transition-all duration-500 ${step >= 1 ? 'w-12 bg-slate-900' : 'w-12 bg-slate-200'}`} />
                <div className={`h-1 rounded-full transition-all duration-500 ${step >= 2 ? 'w-12 bg-slate-900' : 'w-12 bg-slate-200'}`} />
            </div>

            {/* FORMULARIO */}
            <form ref={formRef} className="w-full space-y-5 fade-in-element">
                
                {/* --- PASO 1: DATOS DE CONTACTO --- */}
                {step === 1 && (
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Nombre</label>
                                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 font-semibold outline-none focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10 transition-all placeholder:text-slate-300 placeholder:font-normal" placeholder="Tu nombre" autoFocus />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Empresa</label>
                                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 font-semibold outline-none focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10 transition-all placeholder:text-slate-300 placeholder:font-normal" placeholder="Organización" />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Correo Corporativo</label>
                            <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 font-semibold outline-none focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10 transition-all placeholder:text-slate-300 placeholder:font-normal" placeholder="nombre@empresa.com" />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Teléfono / WhatsApp</label>
                            <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 font-semibold outline-none focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10 transition-all placeholder:text-slate-300 placeholder:font-normal" placeholder="+52 55..." />
                        </div>

                        <div className="pt-4">
                            <button 
                                type="button" 
                                onClick={() => setStep(2)}
                                className="w-full bg-slate-900 text-white font-bold tracking-wider text-sm py-4 rounded-xl shadow-xl shadow-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group active:scale-[0.98]"
                            >
                                CONTINUAR
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                )}

                {/* --- PASO 2: NECESIDADES Y VALIDACIÓN --- */}
                {step === 2 && (
                    <div className="space-y-5">
                        <div className="space-y-1.5">
                             <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Posición a cubrir <span className="text-slate-300 normal-case tracking-normal font-medium">(Opcional)</span></label>
                             <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 font-semibold outline-none focus:border-cyan-500 focus:bg-white transition-all placeholder:text-slate-300" placeholder="Ej. Desarrollador Fullstack" autoFocus />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">¿Qué servicio necesitas?</label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                                {["Headhunting", "Staffing IT", "Nómina", "Legal REPSE", "Consultoría"].map((opt) => (
                                    <button
                                        key={opt}
                                        type="button"
                                        onClick={() => setSelectedService(opt)}
                                        className={`px-2 py-3 rounded-xl text-xs font-bold border transition-all duration-200 ${
                                            selectedService === opt 
                                            ? 'bg-slate-900 border-slate-900 text-white shadow-md transform scale-[1.02]' 
                                            : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50'
                                        }`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-1.5">
                             <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Mensaje <span className="text-slate-300 normal-case tracking-normal font-medium">(Opcional)</span></label>
                             <textarea rows={2} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium outline-none focus:border-cyan-500 focus:bg-white transition-all placeholder:text-slate-300 resize-none" placeholder="Detalles extra..."></textarea>
                        </div>

                        {/* CHECKBOX DE PRIVACIDAD PERSONALIZADO */}
                        <div 
                            className="flex items-start gap-3 pt-2 cursor-pointer group"
                            onClick={() => setPrivacyAccepted(!privacyAccepted)}
                        >
                            <div className={`mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                                privacyAccepted 
                                ? 'bg-cyan-600 border-cyan-600' 
                                : 'bg-white border-slate-300 group-hover:border-slate-400'
                            }`}>
                                <Check size={14} className={`text-white transition-transform duration-200 ${privacyAccepted ? 'scale-100' : 'scale-0'}`} strokeWidth={3} />
                            </div>
                            <p className="text-xs text-slate-500 leading-tight select-none">
                                He leído y acepto el <Link href="/privacidad" onClick={(e) => e.stopPropagation()} className="text-slate-800 font-bold hover:text-cyan-600 underline decoration-slate-300 underline-offset-2">Aviso de Privacidad</Link> de Humanis.
                            </p>
                        </div>

                        <div className="pt-2 flex gap-3">
                            <button 
                                type="button" 
                                onClick={() => setStep(1)}
                                className="w-14 flex-shrink-0 flex items-center justify-center bg-white border-2 border-slate-100 text-slate-400 rounded-xl hover:bg-slate-50 hover:text-slate-600 hover:border-slate-200 transition-all"
                            >
                                <ArrowLeft size={20} strokeWidth={2.5} />
                            </button>
                            
                            <button 
                                type="button" 
                                disabled={!privacyAccepted}
                                className={`flex-1 font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 group transition-all duration-300 ${
                                    privacyAccepted
                                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:shadow-cyan-500/40 hover:-translate-y-0.5 cursor-pointer'
                                    : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                                }`}
                            >
                                ENVIAR SOLICITUD
                                <Send size={18} className={`transition-transform ${privacyAccepted ? 'group-hover:-translate-y-0.5 group-hover:translate-x-0.5' : ''}`} />
                            </button>
                        </div>
                    </div>
                )}

            </form>
        </div>
      </div>
    </div>
  );
}