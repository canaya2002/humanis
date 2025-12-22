'use client';
import React, { useState, useEffect, useRef } from 'react'; // <--- CORREGIDO AQUÍ
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, Quote, Star, ArrowRight, Building2, 
  Briefcase, TrendingUp 
} from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactIntro from '../components/ContactIntro';

// --- FONDO DE RED (Variante Success - Slate) ---
const SuccessNetworkBackground = () => {
  const [nodes, setNodes] = useState<Array<{ id: number; x: number; y: number; size: number; }>>([]);
  useEffect(() => { 
      setNodes(Array.from({ length: 25 }, (_, i) => ({ id: i, x: Math.random() * 100, y: Math.random() * 100, size: 2 + Math.random() * 3 }))); 
  }, []);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-white">
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {nodes.map((node, i) => (
           <motion.circle key={i} cx={`${node.x}%`} cy={`${node.y}%`} r={node.size} fill="#334155" 
              animate={{ cx: [`${node.x}%`, `${node.x + 8}%`, `${node.x}%`], cy: [`${node.y}%`, `${node.y - 8}%`, `${node.y}%`], opacity: [0.2, 0.5, 0.2] }} 
              transition={{ duration: 15 + Math.random() * 15, repeat: Infinity, ease: "easeInOut" }} 
           />
        ))}
      </svg>
    </div>
  );
};

// --- COMPONENTES UI ---
const ModernButton = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
  <button onClick={onClick} className="relative group overflow-hidden font-bold text-sm tracking-widest uppercase px-8 py-3 rounded-full bg-slate-900 text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
    <span className="relative z-10 flex items-center gap-3">{children} <ArrowRight size={16} /></span>
  </button>
);

// --- DATOS ---
const globalStats = [
  { num: "98%", label: "Tasa de Retención", icon: <CheckCircle2 size={20} /> },
  { num: "72h", label: "Tiempo Promedio", icon: <TrendingUp size={20} /> },
  { num: "2.5K+", label: "Talentos Colocados", icon: <Briefcase size={20} /> },
  { num: "150+", label: "Empresas Felices", icon: <Building2 size={20} /> },
];

const caseStudies = [
  {
    id: 1,
    company: "Retail Nacional",
    industry: "Retail",
    challenge: "Apertura crítica de 50 tiendas. Necesidad de cubrir 50 posiciones de piso en 3 semanas en 5 ciudades.",
    result: "48 posiciones cubiertas en 18 días con tasa de retención del 92% a los 90 días.",
    metrics: [ { label: "Posiciones", value: "48/50" }, { label: "Tiempo", value: "18 días" }, { label: "Retención", value: "92%" } ],
    testimonial: { quote: "Humanis fue la pieza clave para cumplir nuestro plan de expansión. Su velocidad superó la expectativa.", author: "Director de Operaciones", role: "Cadena Retail Líder" },
    image: "/exitos/case-retail.png" 
  },
  {
    id: 2,
    company: "Fintech Startup",
    industry: "Tecnología",
    challenge: "Formar equipo core: 8 ingenieros (4 Senior, 4 Mid) en mercado altamente competitivo.",
    result: "Equipo completo en 6 semanas. 100% de permanencia después del primer año.",
    metrics: [ { label: "Ingenieros", value: "8/8" }, { label: "Tiempo", value: "42 días" }, { label: "Retención", value: "100%" } ],
    testimonial: { quote: "Entendieron la complejidad técnica y cultural. El equipo que armaron es el motor de nuestro producto.", author: "CTO & Co-Founder", role: "Fintech Serie A" },
    image: "/exitos/case-fintech.png" 
  },
  {
    id: 3,
    company: "Grupo Logístico",
    industry: "Logística",
    challenge: "Rotación insostenible del 45% mensual en operadores de almacén.",
    result: "Reducción de la rotación al 18% en 4 meses mediante nuevo perfilamiento.",
    metrics: [ { label: "Rotación Antes", value: "45%" }, { label: "Rotación Ahora", value: "18%" }, { label: "Ahorro", value: "$2M+" } ],
    testimonial: { quote: "No solo reclutaron, nos consultaron para mejorar la retención desde la raíz.", author: "Gerente de RH", role: "Operador Logístico" },
    image: "/exitos/case-logistics.png"
  },
];

export default function CasosDeExitoPage() {
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

  // --- SEO MASTERCLASS: REVIEW SCHEMA ---
  // Esto permite que aparezcan estrellas en los resultados de búsqueda de tus casos de éxito
  const reviewsSchema = caseStudies.map(study => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": "Humanis",
      "image": "https://www.humanis.com.mx/humanislogo.png"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": study.testimonial.author,
      "jobTitle": study.testimonial.role
    },
    "reviewBody": study.testimonial.quote
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }} />
      
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900">
        <Header showHeader={showHeader} setShowContact={setShowContact} />
        <ContactIntro isOpen={showContact} onClose={() => setShowContact(false)} />

        <main className="relative pt-0">
          
          {/* HERO */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            <SuccessNetworkBackground />
            <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-bold uppercase tracking-widest mb-8">
                    <Star size={12} className="text-yellow-500 fill-yellow-500" /> Resultados Comprobados
                </div>
                <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-slate-900">
                  Casos de <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500">Éxito Real</span>
                </h1>
                <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                  No solo cubrimos vacantes. Resolvemos problemas de negocio críticos a través del talento humano.
                </p>
            </div>
          </section>

          {/* STATS DARK */}
          <section className="py-16 bg-slate-900 text-white">
              <div className="container mx-auto px-6 max-w-7xl">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                      {globalStats.map((stat, idx) => (
                          <div key={idx} className="text-center p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                              <div className="flex justify-center mb-4 text-cyan-400">{stat.icon}</div>
                              <div className="text-4xl font-black tracking-tight mb-1">{stat.num}</div>
                              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
                          </div>
                      ))}
                  </div>
              </div>
          </section>

          {/* CASOS DETALLADOS */}
          <section className="py-32 bg-slate-50">
              <div className="container mx-auto px-6 max-w-7xl space-y-32">
                  {caseStudies.map((study, idx) => (
                      <div key={study.id} className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                          
                          {/* INFO */}
                          <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                              <div className="flex items-center gap-3 mb-6">
                                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider shadow-sm">
                                      {study.industry === 'Retail' ? <Building2 size={12} className="inline mr-2"/> : <Briefcase size={12} className="inline mr-2"/>}
                                      {study.industry}
                                  </span>
                              </div>
                              <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">{study.company}</h2>
                              
                              <div className="space-y-8 mb-10">
                                  <div className="pl-6 border-l-4 border-red-200">
                                      <h4 className="text-xs font-black uppercase tracking-widest text-red-400 mb-2">El Reto</h4>
                                      <p className="text-slate-700 font-medium">{study.challenge}</p>
                                  </div>
                                  <div className="pl-6 border-l-4 border-emerald-200">
                                      <h4 className="text-xs font-black uppercase tracking-widest text-emerald-500 mb-2">Resultado Humanis</h4>
                                      <p className="text-slate-700 font-medium">{study.result}</p>
                                  </div>
                              </div>

                              <div className="grid grid-cols-3 gap-4 mb-10">
                                  {study.metrics.map((metric, i) => (
                                      <div key={i} className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 text-center">
                                          <p className="text-2xl font-black text-slate-900">{metric.value}</p>
                                          <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">{metric.label}</p>
                                      </div>
                                  ))}
                              </div>

                              <div className="p-8 bg-slate-900 rounded-[2rem] text-white relative overflow-hidden">
                                  <Quote size={40} className="text-white/10 absolute top-4 left-4" />
                                  <p className="text-lg font-medium italic relative z-10 mb-6">"{study.testimonial.quote}"</p>
                                  <div className="flex items-center gap-3 relative z-10">
                                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center font-bold text-white">
                                          {study.testimonial.author.charAt(0)}
                                      </div>
                                      <div>
                                          <p className="font-bold text-sm">{study.testimonial.author}</p>
                                          <p className="text-xs text-slate-400">{study.testimonial.role}</p>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          {/* IMAGEN (Placeholder Local) */}
                          <div className={`relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl group ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                              <Image 
                                  src={study.image} 
                                  alt={`Caso de éxito ${study.company}`}
                                  fill
                                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
                          </div>

                      </div>
                  ))}
              </div>
          </section>

          {/* CTA FINAL */}
          <div className="py-32 bg-white text-center">
              <div className="container mx-auto px-6">
                  <h2 className="text-5xl md:text-6xl font-black mb-10 text-slate-900 tracking-tighter">¿Tu empresa es la siguiente?</h2>
                  <ModernButton onClick={() => setShowContact(true)}>Escribir Historia de Éxito</ModernButton>
              </div>
          </div>

        </main>
        <Footer />
      </div>
    </>
  );
}