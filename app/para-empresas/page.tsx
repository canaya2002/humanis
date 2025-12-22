'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Zap, Clock, Users, Shield,
  Target, TrendingUp, FileText, Briefcase, Phone, Calendar,
  Building2, BarChart3, Award, AlertTriangle
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';
import ContactIntro from '../components/ContactIntro';

// --- FONDO DE RED NEURONAL (Consistencia) ---
const OrganicNetworkBackground = () => {
    const [nodes, setNodes] = useState<Array<{ id: number; x: number; y: number; size: number; }>>([]);
    useEffect(() => { 
        setNodes(Array.from({ length: 15 }, (_, i) => ({ id: i, x: Math.random() * 100, y: Math.random() * 100, size: 2 + Math.random() * 3 }))); 
    }, []);
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {nodes.map((node, i) => (
             <motion.circle key={i} cx={`${node.x}%`} cy={`${node.y}%`} r={node.size} fill="#94a3b8" 
                animate={{ cx: [`${node.x}%`, `${node.x + 10}%`, `${node.x}%`], cy: [`${node.y}%`, `${node.y - 10}%`, `${node.y}%`] }} 
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} 
             />
          ))}
        </svg>
      </div>
    );
};

// --- DATA ---
const problems = [
  { icon: <AlertTriangle size={28} />, title: "Vacantes Urgentes", desc: "Posiciones críticas que afectan tu operación diaria y rentabilidad." },
  { icon: <TrendingUp size={28} />, title: "Picos de Operación", desc: "Necesidades estacionales que requieren escalabilidad inmediata." },
  { icon: <Users size={28} />, title: "Alta Rotación", desc: "Ciclos de reclutamiento interminables que desgastan a tu equipo interno." },
  { icon: <Target size={28} />, title: "Pipeline Vacío", desc: "Falta de candidatos calificados y validados listos para entrar." },
];

const process = [
  { num: "01", title: "Diagnóstico", desc: "Perfilamiento profundo de la vacante y cultura." },
  { num: "02", title: "Headhunting", desc: "Búsqueda activa y filtros de competencia." },
  { num: "03", title: "Shortlist", desc: "Terna final de candidatos viables en < 5 días." },
  { num: "04", title: "Onboarding", desc: "Acompañamiento y garantía de reemplazo." },
];

const profiles = [ "Administrativo", "Ventas Retail", "Operaciones", "Soporte TI", "Desarrolladores", "Marketing Digital", "Finanzas", "Gerencia Media" ];

const cases = [
  { company: "Retail Nacional", metric: "72h", label: "Tiempo de cobertura", desc: "5 posiciones críticas cubiertas en fin de semana." },
  { company: "Fintech", metric: "95%", label: "Retención a 6 meses", desc: "Equipo de desarrollo escalado de 5 a 20 devs." },
  { company: "Logística", metric: "45%", label: "Reducción de Rotación", desc: "Optimización del perfil de contratación operativa." },
];

export default function ParaEmpresasPage() {
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

  // --- SEO MASTERCLASS: SERVICE SCHEMA (B2B) ---
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Recruitment & Staffing",
    "provider": { "@type": "Organization", "name": "Humanis" },
    "areaServed": { "@type": "Country", "name": "MX" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Empresariales",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Reclutamiento Puro" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Staffing de Personal" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Headhunting Ejecutivo" } }
      ]
    }
  };

  return (
    <>
      <GlobalStyles />
      
      {/* INYECCIÓN DE SCHEMA: SERVICES */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
        <Header showHeader={showHeader} setShowContact={setShowContact} />
        <ContactIntro isOpen={showContact} onClose={() => setShowContact(false)} />

        <main className="pt-0">
          
          {/* HERO SECTION */}
          <section className="relative pt-32 pb-32 overflow-hidden bg-slate-50">
            <OrganicNetworkBackground />
            <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50/50 z-0"></div>
            
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="animate-fadeInUp">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest mb-6 shadow-md">Soluciones B2B</span>
                  <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-[0.95] tracking-tighter text-slate-900">
                    Talento listo para <br/>
                    <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">integrarse hoy</span>
                  </h1>
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl font-medium">
                    Cubrimos tus vacantes con velocidad y precisión. Cobertura nacional con respuesta garantizada en 48 horas.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button onClick={() => setShowContact(true)} className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold text-sm uppercase tracking-widest py-4 px-8 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                      <Calendar size={18} />
                      Agendar Diagnóstico
                    </button>
                    <Link href="/proceso" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold text-sm uppercase tracking-widest py-4 px-8 rounded-full shadow-md border border-slate-200 hover:border-slate-400 transition-all duration-300">
                      Ver Proceso
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
                
                {/* IMAGEN OPTIMIZADA */}
                <div className="relative animate-fadeInRight hidden lg:block">
                  <div className="p-4 bg-white rounded-[2.5rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
                    <div className="relative rounded-[2rem] overflow-hidden h-[500px]">
                        <Image 
                          src="/nosotros/culture-5.png" // Reutilizamos imagen local de alta calidad
                          alt="Profesionales trabajando"
                          fill
                          className="object-cover"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                        
                        {/* FLOTANTE: TIEMPO */}
                        <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700">
                                <Clock size={24} />
                                </div>
                                <div>
                                <p className="text-3xl font-black text-slate-900 leading-none">48h</p>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Tiempo Promedio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PROBLEMAS */}
          <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">Retos Comunes</h2>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
                   Sabemos lo costoso que es tener una silla vacía.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {problems.map((item, idx) => (
                  <div key={idx} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                    <div className="w-14 h-14 mb-6 rounded-2xl bg-white flex items-center justify-center text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 font-medium text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PROCESO */}
          <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
             <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-2 block">Metodología Ágil</span>
                        <h2 className="text-4xl lg:text-5xl font-black mb-8">Sin burocracia.<br/>Solo resultados.</h2>
                        <p className="text-xl text-slate-400 mb-10 max-w-md">Eliminamos la fricción del proceso tradicional de reclutamiento.</p>
                        <button onClick={() => setShowContact(true)} className="bg-indigo-600 text-white font-bold py-4 px-8 rounded-full hover:bg-indigo-500 transition-colors">
                            Iniciar Búsqueda
                        </button>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-8">
                        {process.map((step, idx) => (
                            <div key={idx} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="text-4xl font-black text-indigo-500/30 absolute top-4 right-4">{step.num}</div>
                                <h3 className="text-lg font-bold mb-2 relative z-10">{step.title}</h3>
                                <p className="text-slate-400 text-sm relative z-10">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
             </div>
          </section>

          {/* PERFILES */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center mb-12">
                  <h2 className="text-4xl font-black text-slate-900 mb-4">Perfiles Dominados</h2>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                  {profiles.map((profile, idx) => (
                    <div key={idx} className="px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-bold flex items-center gap-2 hover:border-indigo-500 hover:text-indigo-600 transition-colors cursor-default">
                        <CheckCircle size={16} /> {profile}
                    </div>
                  ))}
              </div>
            </div>
          </section>

          {/* CASOS DE ÉXITO */}
          <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">Impacto Real</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {cases.map((item, idx) => (
                  <div key={idx} className="p-8 bg-white rounded-[2rem] shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-slate-100">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-indigo-500" />
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{item.company}</p>
                    </div>
                    <p className="text-6xl font-black text-slate-900 mb-2">{item.metric}</p>
                    <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-6">{item.label}</p>
                    <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA FINAL */}
          <div className="py-32 bg-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-5xl md:text-6xl font-black mb-8 text-slate-900 tracking-tighter">¿Listo para contratar?</h2>
                    <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">Deja de perder dinero por vacantes abiertas.</p>
                    <div className="flex justify-center gap-4">
                        <button onClick={() => setShowContact(true)} className="inline-flex items-center gap-3 bg-slate-900 text-white font-bold py-4 px-10 rounded-full hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl">
                            <Zap size={20} />
                            Activar Búsqueda
                        </button>
                    </div>
                </div>
          </div>
        </main>
        <Footer />
      </div>

      <style jsx>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        @keyframes fadeInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
        .animate-fadeInRight { animation: fadeInRight 0.8s ease-out forwards; }
      `}</style>
    </>
  );
}