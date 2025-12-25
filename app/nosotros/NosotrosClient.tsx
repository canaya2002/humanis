'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Heart, Target, Users, Award, 
  Scale, FileCheck, CheckCircle2, TrendingUp
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';
import ContactIntro from '../components/ContactIntro';

const values = [
  { icon: <ShieldCheck size={28} />, title: "Cumplimiento Legal", desc: "Registro STPS vigente. Operamos bajo estricto apego a la normativa laboral mexicana." },
  { icon: <Heart size={28} />, title: "Transparencia Total", desc: "Servicio gratuito para talento. Tarifa clara al empleador. Sin costos ocultos." },
  { icon: <Target size={28} />, title: "Resultados Medibles", desc: "Más de 2,500 profesionales colocados exitosamente en empresas líderes." },
  { icon: <Users size={28} />, title: "Enfoque Humano", desc: "No somos solo intermediarios, somos facilitadores de oportunidades de crecimiento." },
];

const stats = [
  { num: "2,500+", label: "Profesionales Colocados" },
  { num: "150+", label: "Empresas Aliadas" },
  { num: "96%", label: "Tasa de Éxito" },
  { num: "32", label: "Estados Cubiertos" },
];

const legalCompliance = [
  { title: "Registro STPS Vigente", desc: "Agencia de colocación de personal autorizada por la Secretaría del Trabajo." },
  { title: "Constitución Legal", desc: "Sociedad Anónima debidamente constituida con cumplimiento fiscal completo." },
  { title: "Transparencia Normativa", desc: "Total apego a la Ley Federal del Trabajo y normativa de subcontratación." },
  { title: "Protección de Datos", desc: "Manejo de información personal conforme a la Ley Federal de Protección de Datos." }
];

export default function NosotrosClient() {
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

      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900">
        <Header showHeader={showHeader} setShowContact={setShowContact} />
        <ContactIntro isOpen={showContact} onClose={() => setShowContact(false)} />

        <main className="relative pt-0">
          
          <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-800 text-[11px] font-bold uppercase tracking-widest mb-8 shadow-sm">
                      Sobre Humanis
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.95] tracking-tighter text-slate-900">
                    Agencia de Colocación <br/> 
                    <span className="bg-gradient-to-r from-slate-900 via-cyan-600 to-slate-900 bg-clip-text text-transparent">Certificada</span>
                  </h1>
                  
                  <p className="text-lg md:text-2xl text-slate-600 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
                    Intermediamos entre empresas y talento con total transparencia, cumplimiento legal y proceso trazable.
                  </p>
              </div>

              <div className="mt-12 relative w-full h-[40vh] md:h-[60vh] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                  <Image 
                      src="/nosotros/hero-team.png"
                      alt="Equipo Humanis - Agencia de colocación certificada CDMX"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-1000"
                      priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
                      <h3 className="text-2xl font-bold mb-2">Compromiso con la Legalidad</h3>
                      <p className="text-slate-200">Más que reclutadores, somos aliados estratégicos certificados.</p>
                  </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-white relative">
              <div className="container mx-auto px-6 max-w-7xl">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                      <div>
                          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Blindaje Institucional</h2>
                          <div className="w-24 h-1.5 bg-gradient-to-r from-slate-900 to-slate-600 rounded-full mb-8" />
                          <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                              En un mercado lleno de informalidad, Humanis se destaca por su riguroso cumplimiento normativo. Operamos con total transparencia para proteger a nuestros clientes y candidatos.
                          </p>
                          
                          <div className="space-y-4">
                              {legalCompliance.map((item, idx) => (
                                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 transition-colors">
                                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
                                          <Scale size={16} className="text-green-600" />
                                      </div>
                                      <div>
                                          <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                          <p className="text-sm text-slate-600">{item.desc}</p>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                      <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
                           <Image 
                              src="/nosotros/compliance.png"
                              alt="Certificación STPS agencia de colocación Humanis"
                              fill
                              className="object-cover"
                           />
                           <div className="absolute inset-0 bg-slate-900/20" />
                      </div>
                  </div>
              </div>
          </section>

          <section className="py-24 bg-white border-t border-slate-100">
              <div className="container mx-auto px-6 max-w-7xl">
                  <div className="text-center mb-16">
                      <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Nuestros Valores</h2>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {values.map((val, idx) => (
                          <div key={idx} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-6 shadow-sm">
                                  {val.icon}
                              </div>
                              <h3 className="text-xl font-black text-slate-900 mb-3">{val.title}</h3>
                              <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </section>

          <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.1]" />
              <div className="container mx-auto px-6 max-w-7xl relative z-10">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                      {stats.map((stat, idx) => (
                          <div key={idx} className="space-y-2">
                              <p className="text-5xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">
                                  {stat.num}
                              </p>
                              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </section>

          <section className="py-32 bg-white">
              <div className="container mx-auto px-6 max-w-7xl">
                  <div className="text-center mb-16">
                      <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">Nuestra Esencia</h2>
                      <p className="text-slate-500 text-xl font-light">La gente detrás de la metodología.</p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                      <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group">
                          <Image src="/nosotros/culture-1.png" alt="Cultura Humanis - Trabajo en equipo" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors" />
                      </div>
                      <div className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden group">
                          <Image src="/nosotros/culture-2.png" alt="Oficinas Humanis CDMX" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                      </div>
                      <div className="col-span-1 row-span-2 relative rounded-3xl overflow-hidden group">
                          <Image src="/nosotros/culture-3.png" alt="Reunión estratégica equipo Humanis" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                      </div>
                      <div className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden group">
                          <Image src="/nosotros/culture-4.png" alt="Espacio de trabajo Humanis" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                      </div>
                      <div className="col-span-2 row-span-1 relative rounded-3xl overflow-hidden group">
                          <Image src="/nosotros/culture-5.png" alt="Equipo Humanis colaborando" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                      </div>
                  </div>
              </div>
          </section>

          <div className="py-40 bg-white text-center relative overflow-hidden z-10">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
              <div className="relative z-10 container mx-auto px-6">
                  <h2 className="text-6xl md:text-7xl font-black mb-12 text-slate-900 tracking-tighter">
                      ¿Listo para trabajar con una agencia certificada?
                  </h2>
                  <button onClick={() => setShowContact(true)} className="inline-flex items-center gap-3 bg-slate-900 text-white font-bold py-4 px-10 rounded-full hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl">
                      Iniciar Colaboración
                  </button>
              </div>
          </div>

        </main>
        <Footer />
      </div>
    </>
  );
}
