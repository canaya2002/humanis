'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  showHeader: boolean;
  setShowContact?: (show: boolean) => void;
}

const navItems = [
  {
    label: 'Para Empresas',
    href: '/para-empresas',
    submenu: [
      { label: 'Servicios', href: '/servicios' },
      { label: 'Proceso', href: '/proceso' },
      { label: 'FAQ Empresas', href: '/faq-empresas' },
    ]
  },
  { label: 'Casos de Éxito', href: '/casos-de-exito' },
  {
    label: 'Talento',
    href: '/talento',
    submenu: [
      { label: 'Vacantes', href: '/vacantes' },
      { label: 'FAQ Talento', href: '/faq-talento' },
    ]
  },
  { label: 'Nosotros', href: '/nosotros' },
];

export default function Header({ showHeader, setShowContact }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ALIGNMENT_CLASSES = scrolled ? 'mt-4' : 'mt-8';
  const ELEMENT_PADDING = 'py-3';

  return (
    <>
      <header 
        className={`
          fixed top-0 left-0 right-0 z-50 
          transition-all duration-500 ease-in-out
          translate-y-0 opacity-100
          bg-transparent 
        `}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-start justify-between relative">
            
            {/* 1. LOGO - OPTIMIZADO PARA CLS */}
            {/* Se usa transform: scale en lugar de cambiar height para evitar Layout Shifts */}
            <Link href="/" className="relative z-50 flex-shrink-0 group block mt-0 pt-0">
               <div 
                 className="relative origin-top-left transition-transform duration-500 ease-in-out"
                 style={{
                   // Escala suavemente del 100% al 60%
                   transform: scrolled ? 'scale(0.6)' : 'scale(1)',
                   // Compensa el margen superior al escalar para que se mantenga alineado visualmente
                   marginTop: scrolled ? '0px' : '-8px'
                 }}
               >
                 <Image 
                   src="/humanislogo.png" 
                   alt="Humanis - Agencia de Colocación de Personal" 
                   width={160}
                   height={160}
                   // Altura fija base (h-32 / h-40), el tamaño visual se controla con scale()
                   className="h-24 md:h-32 lg:h-40 w-auto object-contain object-left-top drop-shadow-2xl"
                   priority
                 />
               </div>
            </Link>

            {/* 2. MENÚ CENTRAL */}
            <nav 
              className={`
                hidden lg:flex items-center gap-2 px-4 rounded-full transition-all duration-500 absolute left-1/2 -translate-x-1/2
                ${ALIGNMENT_CLASSES} ${ELEMENT_PADDING}
              `}
              style={{
                background: scrolled ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.2)', 
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                boxShadow: `
                  0 20px 40px -10px rgba(0, 0, 0, 0.05),
                  0 0 0 1px rgba(255, 255, 255, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.5)
                `,
              }}
            >
              {navItems.map((item) => (
                <div 
                  key={item.href} 
                  className="relative group/menuitem"
                  onMouseEnter={() => item.submenu && setOpenSubmenu(item.label)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <Link 
                    href={item.href}
                    className="flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-bold text-slate-800 transition-all duration-300 hover:bg-white/80 hover:shadow-lg active:scale-95"
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-300 stroke-[3] opacity-60 ${openSubmenu === item.label ? 'rotate-180' : ''}`} 
                      />
                    )}
                  </Link>
                  
                  {/* Submenú */}
                  {item.submenu && openSubmenu === item.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-64 animate-in fade-in zoom-in-95 duration-200">
                      <div 
                          className="overflow-hidden rounded-2xl p-2 flex flex-col gap-1"
                          style={{
                              background: 'rgba(255, 255, 255, 0.95)',
                              backdropFilter: 'blur(40px)',
                              boxShadow: '0 40px 80px -20px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.8)',
                              border: '1px solid rgba(255,255,255,0.2)'
                          }}
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-5 py-3 text-sm font-bold text-slate-600 rounded-xl hover:text-slate-900 hover:bg-white hover:shadow-md transition-all flex items-center justify-between group/sub"
                          >
                            {subItem.label}
                            <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-cyan-600 stroke-[3]" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            {/* 3. BOTÓN CTA */}
            <div className={`flex items-center gap-4 transition-all duration-500 ${ALIGNMENT_CLASSES}`}>
              <button 
                  onClick={() => setShowContact && setShowContact(true)}
                  aria-label="Agendar llamada con Humanis"
                  className={`
                    hidden lg:flex items-center gap-3 px-8 rounded-full text-white text-sm font-black transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95 group
                    ${ELEMENT_PADDING}
                  `}
                  style={{
                      background: 'linear-gradient(180deg, #1e293b 0%, #020617 100%)',
                      boxShadow: '0 10px 30px -5px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                  }}
              >
                <span className="drop-shadow-md">Agendar Llamada</span>
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 stroke-[3]" />
              </button>

              {/* Menú Móvil */}
              <button 
                  className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full text-slate-900 transition-all active:scale-90 shadow-lg bg-white/80 backdrop-blur-md border border-white"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {isMenuOpen ? <X size={26} className="stroke-[3]" /> : <Menu size={26} className="stroke-[3]" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* OVERLAY MÓVIL */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity" onClick={() => setIsMenuOpen(false)} />
            <div className="absolute top-0 right-0 w-full max-w-sm h-full bg-white/95 backdrop-blur-[50px] shadow-2xl p-8 pt-32 overflow-y-auto animate-in slide-in-from-right duration-300 border-l border-white/50">
                <div className="flex flex-col gap-6">
                    {navItems.map((item) => (
                        <div key={item.href} className="border-b border-slate-200/60 pb-4 mb-2 last:border-0">
                            {item.submenu ? (
                                <div className="space-y-3">
                                    <div className="text-xl font-black text-slate-900 px-2">{item.label}</div>
                                    <div className="pl-6 space-y-3 border-l-2 border-slate-200 ml-1">
                                        {item.submenu.map((subItem) => (
                                            <Link 
                                                key={subItem.href}
                                                href={subItem.href}
                                                className="block py-1 text-lg font-bold text-slate-600 hover:text-cyan-700"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link 
                                    href={item.href}
                                    className="block p-2 text-2xl font-black text-slate-900 rounded-xl hover:bg-slate-50 transition-all"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
                <div className="mt-10">
                    <button 
                        onClick={() => {
                            if(setShowContact) setShowContact(true);
                            setIsMenuOpen(false);
                        }}
                        aria-label="Agendar llamada con Humanis"
                        className="w-full py-5 rounded-2xl bg-slate-900 text-white font-black text-xl shadow-xl active:scale-95 transition-all flex justify-center gap-2"
                    >
                        Agendar Llamada
                        <ArrowUpRight />
                    </button>
                </div>
            </div>
        </div>
      )}
    </>
  );
}