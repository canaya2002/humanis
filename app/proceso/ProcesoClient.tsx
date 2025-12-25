'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileSearch, UserCheck, Briefcase, Trophy, 
  Clock, Shield, Target, CheckCircle2, ArrowRight
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';
import ContactIntro from '../components/ContactIntro';

const steps = [
  { 
    id: 1, 
    title: "Diagnóstico y Perfilamiento", 
    desc: "No solo pedimos la 'Job Description'. Analizamos tu cultura, el reto del puesto y los 'no negociables'.",
    icon: <FileSearch size={32} />,
    duration: "Día 1",
    color: "bg-blue-500"
  },
  { 
    id: 2, 
    title: "Reclutamiento Activo", 
    desc: "Activamos nuestra red. No esperamos a que lleguen CVs; salimos a buscar a los candidatos con experiencia relevante.",
    icon: <Target size={32} />,
    duration: "Día 2-4",
    color: "bg-indigo-500"
  },
  { 
    id: 3, 
    title: "Validación Profunda", 
    desc: "Filtramos por competencias y fit cultural. Solo te llegan candidatos viables que ya pasaron nuestro filtro.",
    icon: <UserCheck size={32} />,
    duration: "Día 5-7",
    color: "bg-violet-500"
  },
  { 
    id: 4, 
    title: "Presentación de Terna", 
    desc: "Te entregamos una terna de finalistas (Shortlist) con expediente completo y referencias validadas.",
    icon: <Briefcase size={32} />,
    duration: "Día 8-10",
    color: "bg-purple-500"
  },
  { 
    id: 5, 
    title: "Seguimiento", 
    desc: "Te apoyamos en la oferta económica y seguimiento al ingreso. Inicia tu periodo de garantía.",
    icon: <Trophy size={32} />,
    duration: "Día 15+",
    color: "bg-fuchsia-500"
  }
];

export default function ProcesoClient() {
  const [showHeader, setShowHeader] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 80) { setShowHeader(false); } else { setShowHeader(true); }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <GlobalStyles />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
        <Header showHeader={showHeader} setShowContact={setShowContact} />
        <ContactIntro isOpen={showContact} onClose={() => setShowContact(false)} />

        <main className="pt-0">
            
            <section className="pt-32 pb-20 bg-white border-b border-slate-200">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-6 border border-slate-200">
                        Metodología Probada
                    </span>
                    <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                        La Ciencia del <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Reclutamiento</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-light">
                        Hemos perfeccionado un proceso de 5 etapas que elimina la incertidumbre y garantiza resultados. Sin atajos.
                    </p>
                </div>
            </section>

            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 rounded-full" />

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <motion.div 
                                    key={step.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-16 text-center md:text-left' : 'md:pr-16 text-center md:text-right'}`}>
                                        <div className={`inline-block px-3 py-1 rounded-lg text-xs font-bold text-white mb-3 shadow-md ${step.color}`}>
                                            {step.duration}
                                        </div>
                                        <h3 className="text-3xl font-black text-slate-900 mb-4">{step.title}</h3>
                                        <p className="text-lg text-slate-600 font-medium leading-relaxed">{step.desc}</p>
                                    </div>

                                    <div className="relative z-10 shrink-0">
                                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300 ${step.color}`}>
                                            {step.icon}
                                        </div>
                                    </div>

                                    <div className="w-full md:w-1/2 hidden md:block" />
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </section>

            <section className="py-24 bg-white border-y border-slate-200">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-slate-900 rounded-[2.5rem] p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
                            <Shield size={200} />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-4xl font-black mb-6">Garantía de Reemplazo</h2>
                            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                                Si el candidato abandona el puesto en los primeros 90 días, realizamos el proceso nuevamente <strong>sin costo adicional</strong>.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border border-white/20">
                                    <CheckCircle2 className="text-green-400" /> 90 Días de Cobertura
                                </div>
                                <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border border-white/20">
                                    <CheckCircle2 className="text-green-400" /> Sin Letras Chiquitas
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-32 bg-slate-50 text-center">
                 <div className="container mx-auto px-6">
                    <h2 className="text-5xl font-black mb-8 text-slate-900">¿Tienes una vacante difícil?</h2>
                    <p className="text-xl text-slate-500 mb-10">Ponnos a prueba. Resultados en 48 horas.</p>
                    <button onClick={() => setShowContact(true)} className="inline-flex items-center gap-3 bg-indigo-600 text-white font-bold py-4 px-10 rounded-full hover:bg-indigo-500 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                        <Clock size={20} />
                        Iniciar Reto 48h
                    </button>
                 </div>
            </div>

        </main>
        <Footer />
      </div>
    </>
  );
}
