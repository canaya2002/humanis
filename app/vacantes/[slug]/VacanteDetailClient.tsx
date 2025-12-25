'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, MapPin, DollarSign, Clock, Building2, 
  Briefcase, CheckCircle2, Share2, Bookmark, ArrowRight 
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GlobalStyles from '../../components/GlobalStyles';
import { Vacancy } from '../../vacanciesData';

interface VacanteDetailClientProps {
  vacancy: Vacancy;
}

export default function VacanteDetailClient({ vacancy }: VacanteDetailClientProps) {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <GlobalStyles />
      <div className="min-h-screen flex flex-col bg-white font-sans">
        <Header showHeader={true} setShowContact={setShowContact} />
        
        <main className="flex-grow pt-40 pb-20">
          <div className="container mx-auto px-6">
            
            {/* Breadcrumb */}
            <nav className="mb-8">
              <Link 
                href="/vacantes"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-cyan-600 transition-colors"
              >
                <ArrowLeft size={16} />
                Volver a Vacantes
              </Link>
            </nav>

            {/* Header de la Vacante */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                      {vacancy.area}
                    </span>
                    <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                      <Clock size={12} /> Publicada {vacancy.posted}
                    </span>
                  </div>
                  <h1 className="text-5xl font-black text-slate-900 mb-3 leading-tight">
                    {vacancy.title}
                  </h1>
                  <p className="text-2xl text-slate-600 font-bold flex items-center gap-2">
                    <Building2 size={24} className="text-slate-400" />
                    {vacancy.company}
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <button 
                    className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                    aria-label="Compartir vacante"
                  >
                    <Share2 size={20} />
                  </button>
                  <button 
                    className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                    aria-label="Guardar vacante"
                  >
                    <Bookmark size={20} />
                  </button>
                </div>
              </div>

              {/* Información Rápida */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-slate-50 rounded-2xl p-6">
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                    Salario
                  </div>
                  <div className="text-xl font-black text-slate-900 flex items-center gap-2">
                    <DollarSign size={20} className="text-green-600" />
                    {vacancy.salary}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                    Ubicación
                  </div>
                  <div className="text-xl font-black text-slate-900 flex items-center gap-2">
                    <MapPin size={20} className="text-cyan-600" />
                    {vacancy.location}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                    Modalidad
                  </div>
                  <div className="text-xl font-black text-slate-900">
                    {vacancy.type}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                    Jornada
                  </div>
                  <div className="text-xl font-black text-slate-900 flex items-center gap-2">
                    <Briefcase size={20} className="text-slate-400" />
                    {vacancy.schedule}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contenido Principal */}
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Columna Principal */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Descripción */}
                <motion.section 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white border border-slate-200 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-black text-slate-900 mb-4">
                    Descripción del Puesto
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    {vacancy.description}
                  </p>
                </motion.section>

                {/* Requisitos */}
                <motion.section 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white border border-slate-200 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-black text-slate-900 mb-6">
                    Requisitos
                  </h2>
                  <ul className="space-y-4">
                    {vacancy.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={24} className="text-cyan-600 shrink-0 mt-1" />
                        <span className="text-slate-700 text-lg font-medium">
                          {req}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.section>

              </div>

              {/* Sidebar - CTA Sticky */}
              <div className="lg:col-span-1">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="sticky top-32 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white"
                >
                  <h3 className="text-2xl font-black mb-4">
                    ¿Interesado?
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Aplica ahora y nuestro equipo se pondrá en contacto contigo en menos de 24 horas.
                  </p>
                  
                  <Link 
                    href="/talento"
                    className="block w-full py-4 px-6 bg-white text-slate-900 rounded-full font-black text-center hover:bg-slate-100 transition-all hover:scale-105 mb-4 flex items-center justify-center gap-2"
                  >
                    Postularme Ahora
                    <ArrowRight size={20} />
                  </Link>

                  <div className="space-y-3 pt-6 border-t border-slate-700">
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle2 size={16} className="text-cyan-400" />
                      <span className="text-slate-300">Proceso 100% gratuito</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle2 size={16} className="text-cyan-400" />
                      <span className="text-slate-300">Respuesta en 24 horas</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle2 size={16} className="text-cyan-400" />
                      <span className="text-slate-300">Seguimiento personalizado</span>
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}