'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, MessageCircle, Phone } from 'lucide-react';

interface HeaderProps {
  showHeader: boolean;
}

const navItems = [
  {
    label: 'Para Empresas',
    href: '/para-empresas',
    submenu: [
      { label: 'Servicios', href: '/servicios' },
      { label: 'Proceso', href: '/proceso' },
      { label: 'Industrias', href: '/industrias' },
      { label: 'Precios', href: '/precios' },
      { label: 'FAQ Empresas', href: '/faq-empresas' },
    ]
  },
  { label: 'Casos de Éxito', href: '/casos-de-exito' },
  {
    label: 'Talento',
    href: '/talento',
    submenu: [
      { label: 'Vacantes', href: '/vacantes' },
      { label: 'Registro', href: '/registro-talento' },
      { label: 'FAQ Talento', href: '/faq-talento' },
    ]
  },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Header({ showHeader }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <>
      {/* Top Bar */}
      <div className={`fixed top-0 w-full z-[60] transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="bg-slate-900 text-white py-2">
          <div className="container mx-auto px-6 flex justify-between items-center text-xs">
            <div className="flex items-center gap-6">
              <span className="text-slate-400">Atención Nacional | Respuesta en 24–48h</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="tel:+525512345678" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <Phone size={14} />
                <span>+52 55 1234 5678</span>
              </a>
              <a href="https://wa.me/525512345678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`fixed top-8 w-full z-50 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`} style={{ background: 'transparent' }}>
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <span className="text-white text-xl font-bold">H</span>
            </div>
            <span className="text-slate-900 font-bold tracking-tight text-xl group-hover:text-indigo-600 transition-colors">HUMANIS</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="glass-nav flex items-center gap-1">
              {navItems.map((item) => (
                <div 
                  key={item.href} 
                  className="relative"
                  onMouseEnter={() => item.submenu && setOpenSubmenu(item.label)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <Link 
                    href={item.href}
                    className="text-sm font-medium px-4 py-2.5 rounded-full transition-all text-slate-700 hover:text-slate-900 hover:bg-white/20 flex items-center gap-1"
                  >
                    {item.label}
                    {item.submenu && <ChevronDown size={14} className={`transition-transform ${openSubmenu === item.label ? 'rotate-180' : ''}`} />}
                  </Link>
                  
                  {/* Submenu */}
                  {item.submenu && openSubmenu === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl shadow-2xl shadow-slate-200/50 py-2 animate-fadeIn">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Link href="/vacantes" className="glass-nav text-sm font-medium px-4 py-2.5 text-slate-700 hover:text-indigo-600 transition-colors">
                Ver Vacantes
              </Link>
              <Link href="/contacto" className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 transition-all">
                Agendar Llamada
              </Link>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="lg:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-xl transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-t border-slate-100 shadow-2xl animate-slideDown">
            <div className="container mx-auto px-6 py-6">
              {navItems.map((item) => (
                <div key={item.href} className="border-b border-slate-100 last:border-0">
                  <Link 
                    href={item.href}
                    className="block py-4 text-lg font-medium text-slate-900 hover:text-indigo-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 pb-4 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block py-2 text-slate-600 hover:text-indigo-600 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="mt-6 space-y-3">
                <Link href="/vacantes" className="block w-full text-center py-3 border-2 border-slate-200 rounded-xl text-slate-700 font-medium hover:border-indigo-600 hover:text-indigo-600 transition-all" onClick={() => setIsMenuOpen(false)}>
                  Ver Vacantes
                </Link>
                <Link href="/contacto" className="block w-full text-center py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-semibold shadow-lg" onClick={() => setIsMenuOpen(false)}>
                  Agendar Llamada
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}