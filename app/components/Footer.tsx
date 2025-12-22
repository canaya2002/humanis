'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Facebook, Twitter, Instagram, Linkedin, 
  ArrowUp, MapPin, Mail, Phone 
} from 'lucide-react';

// Enlaces principales (Navegación limpia y horizontal)
const mainLinks = [
  { name: 'Soluciones', href: '/para-empresas' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Talento', href: '/talento' },
  { name: 'Vacantes', href: '/vacantes' },
  { name: 'Casos de Éxito', href: '/casos-de-exito' },
  { name: 'Nosotros', href: '/nosotros' },
];

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // Fondo bg-white puro, sin decoraciones extrañas
    <footer className="relative bg-white border-t border-slate-100 overflow-hidden font-sans pt-24 pb-12">
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* 1. LOGO MASIVO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 group relative"
        >
            {/* Glow sutil SOLO al hacer hover en el logo */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-cyan-100/50 to-blue-100/50 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <Link href="/">
              <img 
                src="/humanislogo.png" 
                alt="Humanis Logo" 
                // TAMAÑO AUMENTADO
                className="h-32 md:h-40 w-auto object-contain relative z-10 drop-shadow-sm transition-transform duration-500 hover:scale-[1.02]" 
              />
            </Link>
        </motion.div>

        {/* 2. REDES SOCIALES (FLOTANTES) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex gap-6 mb-16"
        >
            {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                    <motion.a
                        key={social.name}
                        href={social.href}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-400 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-600 hover:shadow-[0_10px_25px_-5px_rgba(6,182,212,0.3)] transition-all duration-300"
                    >
                        <Icon size={20} />
                    </motion.a>
                )
            })}
        </motion.div>

        {/* 3. NAVEGACIÓN PRINCIPAL (Barra limpia) */}
        <motion.nav 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-5xl border-y border-slate-100 py-8 mb-10"
        >
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-12">
                {mainLinks.map((link) => (
                    <li key={link.name}>
                        <Link 
                            href={link.href}
                            className="relative group text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-cyan-800 transition-colors duration-300"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full rounded-full" />
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.nav>

        {/* 4. INFORMACIÓN DE CONTACTO RÁPIDA */}
        <div className="flex flex-wrap justify-center gap-8 mb-10 text-slate-400 text-sm font-light">
            <a href="tel:+525512345678" className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
                <Phone size={14} />
                <span>+52 55 1234 5678</span>
            </a>
            <span className="hidden sm:block text-slate-200">|</span>
            <a href="mailto:contacto@humanis.mx" className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
                <Mail size={14} />
                <span>contacto@humanis.mx</span>
            </a>
            <span className="hidden sm:block text-slate-200">|</span>
            <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span>CDMX - Cobertura Nacional</span>
            </div>
        </div>

        {/* 5. LEGAL Y COPYRIGHT (Integrado y Compacto) */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-4 text-xs text-slate-400 font-medium"
        >
            {/* Enlaces Legales */}
            <div className="flex gap-6">
                <Link href="/legal" className="hover:text-slate-800 hover:underline decoration-cyan-400 underline-offset-4 transition-all">
                    Aviso de Privacidad
                </Link>
                <Link href="/legal" className="hover:text-slate-800 hover:underline decoration-cyan-400 underline-offset-4 transition-all">
                    Términos y Condiciones
                </Link>
            </div>

            {/* Copyright */}
            <p className="text-slate-300 font-light">
                © {currentYear} Humanis S.A. de C.V. Todos los derechos reservados.
            </p>
        </motion.div>

      </div>

      {/* BOTÓN "BACK TO TOP" */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-white border border-slate-100 text-slate-300 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-xl transition-all duration-300 z-50 hidden lg:flex"
      >
        <ArrowUp size={20} strokeWidth={2} />
      </motion.button>

    </footer>
  );
}