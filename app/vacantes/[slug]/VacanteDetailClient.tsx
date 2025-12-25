'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, MapPin, DollarSign, Clock, Building2, 
  Briefcase, CheckCircle2, Share2, Bookmark, ArrowRight,
  AlertCircle // Importamos icono de alerta
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GlobalStyles from '../../components/GlobalStyles';
import ContactIntro from '../../components/ContactIntro';
import { Vacancy } from '../../vacanciesData';

interface VacanteDetailClientProps {
  vacancy: Vacancy;
  isExpired: boolean; // Recibimos la bandera desde el servidor
}

export default function VacanteDetailClient({ vacancy, isExpired }: VacanteDetailClientProps) {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <GlobalStyles />
      <div className="min-h-screen flex flex-col bg-white font-sans text-slate-900 selection:bg-cyan-100 selection:text-cyan-900">
        <Header showHeader={true} setShowContact={setShowContact} />
        <ContactIntro isOpen={showContact} onClose={() => setShowContact(false)} />
        
        <main className="flex-grow pt-32 pb-20">
          <div className="container mx-auto px-6 max-w-7xl">
            
            {/* Navegación Breadcrumb */}
            <nav className="mb-8">
              <Link 
                href="/vacantes"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-cyan-600 transition-colors"
              >
                <ArrowLeft size={16} />
                Volver a Vacantes
              </Link>
            </nav>

            {/* --- LÓGICA VISUAL DE EXPIRACIÓN (ALERTA) --- */}
            {isExpired && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10 p-5 bg-amber-50 border border-amber-100 rounded-2xl flex items-start gap-4 shadow-sm"
              >
                <div className="p-2 bg-amber-100 rounded-full text-amber-600 shrink-0">
                    <AlertCircle size={24} />
                </div>
                <div>
                  <h3 className="text-amber-900 font-black text-lg mb-1">Vacante Cerrada</h3>
                  <p className="text-amber-800/80 text-sm font-medium leading-relaxed">
                    Esta posición ya no está aceptando nuevas postulaciones porque ha expirado o ha sido cubierta. 
                    Te invitamos a <Link href="/vacantes" className="underline hover:text-amber-950">ver otras oportunidades activas</Link>.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Header de la Vacante (Con efecto visual si está expirada) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-12 ${isExpired ? 'opacity-60 grayscale' : ''}`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`px-4 py-1.5 text-white text-xs font-bold rounded-full uppercase tracking-wider ${isExpired ? 'bg-slate-500' : 'bg-slate-900'}`}>
                      {vacancy.area}
                    </span>
                    <span className="text-xs font-bold text-slate-400 flex items-center gap-1 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                      <Clock size={12} /> Publicada {vacancy.posted}
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 leading-[0.95] tracking-tight">
                    {vacancy.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-slate-500 font-bold flex items-center gap-2">
                    <Building2 size={24} className="text-slate-300" />
                    {vacancy.company}
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <button 
                    className="p-3 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-cyan-600 hover:border-cyan-200 hover:shadow-lg transition-all"
                    aria-label="Compartir vacante"
                    onClick={() => {
                        if (navigator.share) {
                            navigator.share({
                                title: vacancy.title,
                                text: `Mira esta vacante en Humanis: ${vacancy.title}`,
                                url: window.location.href,
                            }).catch(console.error);
                        } else {
                            // Fallback simple: copiar al portapapeles
                            navigator.clipboard.writeText(window.location.href);
                            alert("Enlace copiado al portapapeles");
                        }
                    }}
                  >
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              {/* Información Rápida (Grid) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Salario</div>
                  <div className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <DollarSign size={18} className="text-emerald-500" />
                    {vacancy.salary}
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Ubicación</div>
                  <div className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <MapPin size={18} className="text-cyan-500" />
                    {vacancy.location}
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Modalidad</div>
                  <div className="text-lg font-black text-slate-900">
                    {vacancy.type}
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Jornada</div>
                  <div className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <Briefcase size={18} className="text-indigo-500" />
                    {vacancy.schedule}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contenido Principal + Sidebar */}
            <div className="grid lg:grid-cols-12 gap-12">
              
              {/* Columna Izquierda (Descripción) */}
              <div className="lg:col-span-8 space-y-12">
                <motion.section 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-cyan-500 rounded-full" />
                    Descripción del Puesto
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-lg font-medium">
                    {vacancy.description}
                  </p>
                </motion.section>

                <motion.section 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-indigo-500 rounded-full" />
                    Requisitos
                  </h2>
                  <ul className="grid gap-4">
                    {vacancy.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100/50">
                        <div className="mt-1 bg-white p-1.5 rounded-full border border-slate-100 shadow-sm text-cyan-600">
                            <CheckCircle2 size={16} strokeWidth={3} />
                        </div>
                        <span className="text-slate-700 text-lg font-medium">
                          {req}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              </div>

              {/* Columna Derecha (CTA Sticky) */}
              <div className="lg:col-span-4">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className={`sticky top-32 rounded-[2rem] p-8 text-white shadow-2xl ${
                    isExpired 
                      ? 'bg-slate-100 border border-slate-200' // Estilo Expirado
                      : 'bg-slate-900' // Estilo Activo
                  }`}
                >
                  {isExpired ? (
                    // --- CTA: VACANTE CERRADA ---
                    <div className="text-center">
                        <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                            <Briefcase size={28} />
                        </div>
                        <h3 className="text-2xl font-black mb-3 text-slate-800">
                            Postulaciones Cerradas
                        </h3>
                        <p className="text-slate-500 mb-8 font-medium text-sm leading-relaxed">
                            Lo sentimos, esta vacante ha llegado a su fecha límite o la posición ha sido cubierta.
                        </p>
                        
                        <Link 
                            href="/vacantes"
                            className="block w-full py-4 px-6 bg-slate-800 text-white rounded-xl font-bold text-sm tracking-wide text-center hover:bg-slate-700 transition-all hover:shadow-lg hover:-translate-y-1 group"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Ver otras Vacantes
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    </div>
                  ) : (
                    // --- CTA: VACANTE ACTIVA ---
                    <div>
                        <h3 className="text-2xl font-black mb-4">
                            ¿Te interesa el reto?
                        </h3>
                        <p className="text-slate-400 mb-8 font-medium text-sm leading-relaxed">
                            Aplica ahora. Nuestro proceso es rápido, transparente y 100% gratuito para ti.
                        </p>
                        
                        <Link 
                            href="/talento" // O abre un modal de registro
                            className="block w-full py-4 px-6 bg-white text-slate-900 rounded-xl font-black text-sm tracking-wide text-center hover:bg-cyan-50 transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.3)] mb-6 group"
                        >
                            <span className="flex items-center justify-center gap-2">
                                POSTULARME AHORA
                                <ArrowRight size={18} className="text-cyan-600 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <div className="space-y-4 pt-6 border-t border-slate-800">
                            <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
                                <CheckCircle2 size={14} className="text-emerald-500" />
                                <span>Respuesta en &lt; 24 horas</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
                                <CheckCircle2 size={14} className="text-emerald-500" />
                                <span>Sin costos ocultos</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
                                <CheckCircle2 size={14} className="text-emerald-500" />
                                <span>Feedback garantizado</span>
                            </div>
                        </div>
                    </div>
                  )}
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