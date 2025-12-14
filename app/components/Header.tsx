'use client';
import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  showHeader: boolean;
  currentPage: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  navigateTo: (page: string) => void;
  setShowContact: (value: boolean) => void;
}

export default function Header({ 
  showHeader, 
  currentPage, 
  isMenuOpen, 
  setIsMenuOpen, 
  navigateTo, 
  setShowContact 
}: HeaderProps) {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`} style={{ background: 'transparent' }}>
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigateTo('inicio')}>
          <div className="w-8 h-8 bg-[#0f172a] rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white text-lg font-bold">H</span>
          </div>
          <span className="text-slate-900 font-bold tracking-tight text-lg group-hover:text-indigo-600 transition-colors">HUMANIS</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-4">
          <div className="glass-nav flex items-center gap-2">
            {['inicio', 'servicios', 'empresas', 'candidatos'].map(id => (
              <button 
                key={id} 
                onClick={() => navigateTo(id)} 
                className={`text-sm font-medium px-4 py-2 rounded-full transition-all ${currentPage === id ? 'text-black bg-white/20' : 'text-slate-700 hover:text-black hover:bg-white/10'}`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="glass-nav">
            <button 
              onClick={() => setShowContact(true)} 
              className="text-sm font-medium px-4 py-2 text-slate-700 hover:text-black transition-colors"
            >
              Contacto
            </button>
          </div>
        </div>
        
        <button className="lg:hidden text-slate-900 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}