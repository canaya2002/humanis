'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ShieldCheck, Heart, Target, Users, Zap, 
  Briefcase, Scale, ArrowRight // <--- AQUÍ FALTABA ESTA IMPORTACIÓN
} from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactIntro from '../components/ContactIntro';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// --- 1. FONDO DE RED NEURONAL (Consistencia de Marca) ---
const OrganicNetworkBackground = () => {
  const [nodes, setNodes] = useState<Array<{
    id: number;
    x: number; y: number;
    xMove: number; yMove: number;
    duration: number;
    size: number;
  }>>([]);
  
  useEffect(() => { 
      const newNodes = Array.from({ length: 20 }, (_, i) => ({ 
          id: i, 
          x: Math.random() * 100, 
          y: Math.random() * 100,
          xMove: (Math.random() - 0.5) * 15, 
          yMove: (Math.random() - 0.5) * 15, 
          duration: 15 + Math.random() * 15, 
          size: 2 + Math.random() * 3
      })); 
      setNodes(newNodes); 
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-white">
      <div className="absolute inset-0 bg-white z-0" />
      <svg className="absolute inset-0 w-full h-full z-0 overflow-visible opacity-30">
        <defs>
            <linearGradient id="netGradientUs" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#94a3b8" stopOpacity="0"/> 
                <stop offset="50%" stopColor="#0f172a" stopOpacity="0.2"/> 
                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0"/>
            </linearGradient>
        </defs>
        {nodes.map((node, i) => {
            const target = nodes[(i + 1) % nodes.length]; 
            if (i % 2 !== 0) return null; 
            return (
            <g key={`net-group-us-${node.id}`}> 
                <motion.line 
                    x1={`${node.x}%`} y1={`${node.y}%`} 
                    x2={`${target.x}%`} y2={`${target.y}%`} 
                    stroke="url(#netGradientUs)" 
                    strokeWidth="1" 
                    strokeLinecap="round"
                    animate={{ 
                        x1: [`${node.x}%`, `${node.x + node.xMove}%`, `${node.x}%`],
                        y1: [`${node.y}%`, `${node.y + node.yMove}%`, `${node.y}%`],
                        x2: [`${target.x}%`, `${target.x + target.xMove}%`, `${target.x}%`],
                        y2: [`${target.y}%`, `${target.y + target.yMove}%`, `${target.y}%`],
                    }} 
                    transition={{ duration: Math.max(node.duration, target.duration), repeat: Infinity, ease: "easeInOut" }} 
                /> 
            </g> 
            )
        })}
        {nodes.map((node) => (
            <motion.circle 
                key={`node-us-${node.id}`}
                cx={`${node.x}%`} cy={`${node.y}%`} 
                r={node.size} 
                fill="#1e293b" 
                opacity={0.08} 
                animate={{ 
                    cx: [`${node.x}%`, `${node.x + node.xMove}%`, `${node.x}%`],
                    cy: [`${node.y}%`, `${node.y + node.yMove}%`, `${node.y}%`],
                    opacity: [0.08, 0.15, 0.08] 
                }} 
                transition={{ duration: node.duration, repeat: Infinity, ease: "easeInOut" }} 
            /> 
        ))}
      </svg>
    </div>
  );
};

// --- COMPONENTES UI ---
interface ModernButtonProps { children: React.ReactNode; onClick?: () => void; secondary?: boolean; href?: string; className?: string }
const ModernButton = ({ children, onClick, secondary = false, href, className = "" }: ModernButtonProps) => {
  const content = (
    <>
        <div className="absolute inset-0 z-0 backdrop-blur-[3px] overflow-hidden rounded-full" style={{ filter: 'blur(0.5px)', isolation: 'isolate' }} />
        <div className={`absolute inset-0 z-[1] rounded-full ${secondary ? 'bg-white/40' : 'bg-gradient-to-br from-slate-800/60 via-slate-900/70 to-slate-950/60'}`}></div>
        <div className="absolute inset-0 z-[2] overflow-hidden rounded-full" style={{ boxShadow: 'inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)' }}></div>
        <span className={`relative z-[3] flex items-center gap-3 ${secondary ? 'text-slate-900' : 'text-white'}`}>
        {children}
        {!secondary && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform stroke-[3]" />}
        </span>
    </>
  );

  const classes = `relative group overflow-hidden font-bold text-sm tracking-widest uppercase transition-all duration-400 ${secondary ? 'px-8 py-3 rounded-full' : 'px-8 py-3 rounded-full'} inline-flex items-center justify-center ${className}`;
  const styles = { boxShadow: '0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)' };

  if (href) return <button onClick={() => window.location.href=href || '#'} className={classes} style={styles}>{content}</button>;
  return <button onClick={onClick} className={classes} style={styles}>{content}</button>;
};

// --- TEXTO ROTATIVO ---
const RotatingText = () => {
  const words = ['INTEGRIDAD', 'TRANSPARENCIA', 'VELOCIDAD', 'EXCELENCIA', 'COMPROMISO'];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((prev) => (prev + 1) % words.length), 3000);
    return () => clearInterval(interval);
  }, [words.length]);
  return (
    <span className="relative inline-block min-w-[280px] md:min-w-[500px] text-left h-[1.2em] align-top overflow-visible -mb-2"> 
      {words.map((word, idx) => (
        <motion.span
          key={idx} initial={false} animate={{ opacity: idx === currentIndex ? 1 : 0, y: idx === currentIndex ? 0 : idx === (currentIndex - 1 + words.length) % words.length ? -50 : 50, filter: idx === currentIndex ? 'blur(0px)' : 'blur(4px)' }} transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }} className="absolute left-0 top-0 w-full bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-cyan-600 to-slate-900 block px-1"
        > {word} </motion.span>
      ))}
    </span>
  );
};

// --- DATA ---
const values = [
  { icon: <ShieldCheck size={28} />, title: "Integridad Total", desc: "Transparencia absoluta. Nunca cobramos a candidatos y operamos bajo estricto cumplimiento legal." },
  { icon: <Heart size={28} />, title: "Compromiso Real", desc: "No somos proveedores, somos partners. Nos involucramos en tu cultura como si fuera nuestra." },
  { icon: <Target size={28} />, title: "Resultados", desc: "No vendemos promesas, vendemos contrataciones exitosas. Garantía de reemplazo de 90 días." },
  { icon: <Users size={28} />, title: "Colaboración", desc: "Trabajamos como extensión de tu equipo de RH, alineados a tus objetivos de negocio." },
];

const stats = [
  { num: "2,500+", label: "Candidatos Colocados" },
  { num: "150+", label: "Empresas Aliadas" },
  { num: "96%", label: "Tasa de Éxito" },
  { num: "32", label: "Estados Cubiertos" },
];

const businessLines = [
    {
        title: "Agencia de Colocación",
        subtitle: "Talento Operativo & Staffing",
        desc: "Especializados en la cobertura masiva y rápida para sectores de alta rotación como Restaurantes, Retail y Servicios. Nos encargamos del reclutamiento, tú contratas directo.",
        features: ["Reclutamiento Express (72h)", "Garantía de Reemplazo", "Validación de Referencias"],
        icon: <Zap className="text-white" size={32} />,
        gradient: "from-slate-900 to-slate-800"
    },
    {
        title: "Proyectos Especializados",
        subtitle: "Consultoría & Freelance",
        desc: "Acceso a expertos por proyecto sin aumentar tu carga patronal fija. Ideal para Marketing, TI, Diseño y Consultoría Estratégica bajo esquema de entregables.",
        features: ["Contratos por Proyecto", "Sin Carga Social", "Talento Senior Verificado"],
        icon: <Briefcase className="text-white" size={32} />,
        gradient: "from-cyan-600 to-blue-600"
    }
];

export default function NosotrosPage() {
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

  // --- SEO MASTERCLASS: ABOUT PAGE SCHEMA ---
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Humanis",
      "legalName": "Humanis Capital Humano S.A.S. de C.V.", // Ejemplo
      "description": "Somos ingenieros de capital humano. Transformamos la incertidumbre de la contratación en una ciencia precisa, legal y humana.",
      "url": "https://www.humanis.com.mx",
      "areaServed": "MX",
      "knowsAbout": ["Headhunting", "Staffing", "Recursos Humanos", "Maquila de Nómina", "REPSE"]
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900">
      
      {/* INYECCIÓN DE SCHEMA: ABOUT PAGE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <Header showHeader={showHeader} setShowContact={setShowContact} />
      <ContactIntro isOpen={showContact} onClose={() => setShowContact(false)} />

      <main className="relative pt-0">
        
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
          <OrganicNetworkBackground />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-32 pb-20">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-800 text-[11px] font-bold uppercase tracking-widest mb-8 shadow-sm">
                    Sobre Humanis
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.95] tracking-tighter text-slate-900">
                  Impulsados por <br/> <RotatingText />
                </h1>
                
                <p className="text-lg md:text-2xl text-slate-600 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
                  Somos ingenieros de capital humano. Transformamos la incertidumbre de la contratación en una ciencia precisa, legal y humana.
                </p>
            </div>

            {/* --- IMAGEN HERO --- */}
            <div className="mt-12 relative w-full h-[40vh] md:h-[60vh] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                    src="/nosotros/hero-team.png" // RUTA LOCAL
                    alt="Equipo Humanis colaborando en oficinas"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-1000"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
                    <h3 className="text-2xl font-bold mb-2">Pasión por el Talento</h3>
                    <p className="text-slate-200">Más que reclutadores, somos estrategas de crecimiento.</p>
                </div>
            </div>
          </div>
        </section>

        {/* --- BLINDAJE INSTITUCIONAL --- */}
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
                            {[
                                "Registro STPS Vigente (Agencia de Colocación)",
                                "Constitución Legal SAS y Cumplimiento Societario",
                                "Estructura Fiscal Transparente (SAT)",
                                "Apego Total a la LFT y Normativa de Subcontratación"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                        <Scale size={16} className="text-green-600" />
                                    </div>
                                    <span className="font-bold text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* IMAGEN LOCAL */}
                    <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
                         <Image 
                            src="/nosotros/compliance.png" // RUTA LOCAL
                            alt="Certificación de cumplimiento legal Humanis"
                            fill
                            className="object-cover"
                         />
                         <div className="absolute inset-0 bg-slate-900/20" />
                    </div>
                </div>
            </div>
        </section>

        {/* --- NUESTRAS LÍNEAS DE NEGOCIO --- */}
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">Modelo Dual</h2>
                    <p className="text-slate-500 text-xl font-light max-w-2xl mx-auto">Soluciones diseñadas para cada necesidad operativa.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                    {businessLines.map((line, idx) => (
                        <div key={idx} className="group relative bg-white rounded-[3rem] border border-slate-200 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <div className={`h-32 bg-gradient-to-r ${line.gradient} relative flex items-center justify-center`}>
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-white/20">
                                    {line.icon}
                                </div>
                            </div>
                            <div className="p-10">
                                <h3 className="text-3xl font-black text-slate-900 mb-2">{line.title}</h3>
                                <p className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-6">{line.subtitle}</p>
                                <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">{line.desc}</p>
                                <ul className="space-y-3">
                                    {line.features.map((feat, f) => (
                                        <li key={f} className="flex items-center gap-3 font-bold text-slate-700">
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${line.gradient}`} />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* --- GALERÍA BENTO --- */}
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">Nuestro ADN</h2>
                    <p className="text-slate-500 text-xl font-light">La gente detrás de la tecnología.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                    <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group">
                        <Image src="/nosotros/culture-1.png" alt="Cultura Humanis - Trabajo en equipo" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors" />
                    </div>
                    <div className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden group">
                        <Image src="/nosotros/culture-2.png" alt="Oficinas Humanis" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="col-span-1 row-span-2 relative rounded-3xl overflow-hidden group">
                        <Image src="/nosotros/culture-3.png" alt="Reunión Estratégica" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden group">
                        <Image src="/nosotros/culture-4.png" alt="Detalle Arquitectónico" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="col-span-2 row-span-1 relative rounded-3xl overflow-hidden group">
                        <Image src="/nosotros/culture-5.png" alt="Espacios de Trabajo" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                </div>
            </div>
        </section>

        {/* --- VALORES --- */}
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6 max-w-7xl">
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

        {/* --- ESTADÍSTICAS --- */}
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

        {/* --- CTA FINAL --- */}
        <div className="py-40 bg-white text-center relative overflow-hidden z-10">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
            <div className="relative z-10">
                <h2 className="text-6xl md:text-7xl font-black mb-12 text-slate-900 tracking-tighter">¿Listo para escalar?</h2>
                <ModernButton onClick={() => setShowContact(true)}>Iniciar Transformación</ModernButton>
            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}