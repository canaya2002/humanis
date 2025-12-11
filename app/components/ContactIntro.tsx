'use client';
import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP';

const splitTextToChars = (text: string) => {
  return text.split('').map((char, index) => (
    <span key={index} className="inline-block relative overflow-hidden">
      <span className="inline-block translate-y-full animate-char">{char === ' ' ? '\u00A0' : char}</span>
    </span>
  ));
};

interface ContactIntroProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactIntro({ isOpen, onClose }: ContactIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gsapLoaded = useGSAP();

  useEffect(() => {
    if (!isOpen || !gsapLoaded || !containerRef.current) return;
    
    const gsap = (window as any).gsap;
    const CustomEase = (window as any).CustomEase;

    if (gsap && CustomEase) {
      gsap.registerPlugin(CustomEase);
      
      const tl = gsap.timeline();
      tl.to(".preloader-mask", { scaleY: 1, duration: 0.8, ease: "power4.inOut" })
      .to(".contact-content", { opacity: 1, duration: 0.5 })
      .from(".contact-title .animate-char", { y: "100%", opacity: 0, duration: 0.8, stagger: 0.05, ease: "back.out(1.7)" })
      .from(".contact-form-wrapper", { y: 50, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");
    }
  }, [isOpen, gsapLoaded]);

  if (!isOpen) return null;

  return (
    <div ref={containerRef} className={`contact-overlay ${isOpen ? 'contact-active' : ''}`}>
      <div className="preloader-mask"></div>
      <button onClick={onClose} className="close-contact hover:text-indigo-400 transition-colors">
        <X size={32} />
      </button>
      <div className="contact-content">
        <h2 className="contact-title">{splitTextToChars("ÚNETE AL FUTURO")}</h2>
        <div className="contact-form-wrapper">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Nombre</label>
                <input type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:border-indigo-500 focus:outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Empresa</label>
                <input type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:border-indigo-500 focus:outline-none" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Correo Corporativo</label>
              <input type="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:border-indigo-500 focus:outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Mensaje</label>
              <textarea rows={4} className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:border-indigo-500 focus:outline-none"></textarea>
            </div>
            <button type="button" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-500/30">
              ENVIAR SOLICITUD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}