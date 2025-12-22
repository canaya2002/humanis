'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  CheckCircle2, Quote, Star, ArrowRight, Building2, 
  GraduationCap, Briefcase, BarChart3
} from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactIntro from '../components/ContactIntro';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// --- 1. FONDO DE RED NEURONAL (Slate/Black) ---
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
            <linearGradient id="netGradientCase" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#94a3b8" stopOpacity="0"/> 
                <stop offset="50%" stopColor="#0f172a" stopOpacity="0.2"/> 
                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0"/>
            </linearGradient>
        </defs>
        {nodes.map((node, i) => {
            const target = nodes[(i + 1) % nodes.length]; 
            if (i % 2 !== 0) return null; 
            return (
            <g key={`net-group-case-${node.id}`}> 
                <motion.line 
                    x1={`${node.x}%`} y1={`${node.y}%`} 
                    x2={`${target.x}%`} y2={`${target.y}%`} 
                    stroke="url(#netGradientCase)" 
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
                key={`node-case-${node.id}`}
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

  if (href) return <a href={href} className={classes} style={styles}>{content}</a>;
  return <button onClick={onClick} className={classes} style={styles}>{content}</button>;
};

// --- DATOS (USANDO IMÁGENES LOCALES) ---
const globalStats = [
  { num: "2,500+", label: "Candidatos Colocados" },
  { num: "150+", label: "Empresas Atendidas" },
  { num: "96%", label: "Retención a 6 Meses" },
  { num: "5-10", label: "Días Primera Terna" },
];

const caseStudies = [
  {
    id: 1,
    company: "Retail Nacional",
    industry: "Retail",
    challenge: "Apertura de 50 tiendas. Necesidad de cubrir 50 posiciones de piso en 3 semanas en 5 ciudades.",
    process: "Despliegue de equipo regional, headhunting masivo, filtros grupales y coordinación logística.",
    result: "48 posiciones cubiertas en 18 días. Tasa de retención del 92% a los 90 días.",
    metrics: [
      { label: "Posiciones", value: "48/50" },
      { label: "Tiempo", value: "18 días" },
      { label: "Retención", value: "92%" }
    ],
    testimonial: {
      quote: "Humanis fue la pieza clave para cumplir nuestro plan de expansión. Su velocidad y calidad superaron nuestra expectativa.",
      author: "Director de Operaciones",
      role: "Cadena de Retail Líder"
    },
    image: "/exitos/case-retail.png" // RUTA LOCAL
  },
  {
    id: 2,
    company: "Fintech Startup",
    industry: "Tecnología",
    challenge: "Formar equipo de desarrollo core: 8 ingenieros (4 Senior, 4 Mid) en mercado altamente competitivo.",
    process: "Headhunting técnico especializado, evaluación de código propietaria y validación cultural profunda.",
    result: "Equipo completo en 6 semanas. 100% de permanencia después del primer año de operación.",
    metrics: [
      { label: "Ingenieros", value: "8/8" },
      { label: "Tiempo", value: "42 días" },
      { label: "Retención (1 año)", value: "100%" }
    ],
    testimonial: {
      quote: "Entendieron la complejidad técnica y cultural que buscábamos. El equipo que armaron es el motor de nuestro producto.",
      author: "CTO & Co-Founder",
      role: "Fintech Serie A"
    },
    image: "/exitos/case-fintech.png" // RUTA LOCAL
  },
  {
    id: 3,
    company: "Grupo Logístico",
    industry: "Logística",
    challenge: "Rotación insostenible del 45% mensual en operadores de almacén y choferes.",
    process: "Rediseño del perfil de puesto, ajuste de compensación y nuevo proceso de filtro enfocado en estabilidad.",
    result: "Reducción de la rotación al 18% en 4 meses. Ahorro estimado de $2M MXN en costos de reclutamiento.",
    metrics: [
      { label: "Rotación Antes", value: "45%" },
      { label: "Rotación Ahora", value: "18%" },
      { label: "Ahorro", value: "$2M+" }
    ],
    testimonial: {
      quote: "Nos ayudaron a identificar la raíz del problema. No solo reclutaron, nos consultaron para mejorar la retención.",
      author: "Gerente de RH",
      role: "Operador Logístico Nacional"
    },
    image: "/exitos/case-logistics.png" // RUTA LOCAL
  },
];

const testimonials = [
  { quote: "Trabajar con Humanis ha sido un game changer para nuestro proceso de reclutamiento.", author: "María González", role: "HR Director", company: "Empresa Manufactura" },
  { quote: "La garantía de reemplazo nos da mucha tranquilidad. Están comprometidos con el resultado.", author: "Carlos Mendoza", role: "Gerente de Operaciones", company: "Empresa de Servicios" },
  { quote: "Por fin un proveedor que cumple lo que promete. Los tiempos de respuesta son reales.", author: "Ana Ramírez", role: "Talent Acquisition Lead", company: "Startup Tech" }
];

// --- NUEVA GALERÍA BENTO (MUCHAS IMÁGENES LOCALES - ESCUELAS Y EMPRESAS) ---
const galleryImages = [
    // Asume que tienes estas imágenes en /public/exitos/
    { src: "/exitos/gallery-school-1.png", alt: "Institución Educativa", span: "col-span-2 row-span-2" },
    { src: "/exitos/gallery-company-1.png", alt: "Corporativo", span: "col-span-1 row-span-1" },
    { src: "/exitos/gallery-industry-1.png", alt: "Planta Industrial", span: "col-span-1 row-span-2" },
    { src: "/exitos/gallery-school-2.png", alt: "Universidad", span: "col-span-1 row-span-1" },
    { src: "/exitos/gallery-company-2.png", alt: "Oficinas Modernas", span: "col-span-2 row-span-1" },
    { src: "/exitos/gallery-startup-1.png", alt: "Startup Team", span: "col-span-1 row-span-1" },
    { src: "/exitos/gallery-school-3.png", alt: "Colegio", span: "col-span-1 row-span-1" },
    { src: "/exitos/gallery-company-3.png", alt: "Retail", span: "col-span-1 row-span-2" },
    { src: "/exitos/gallery-corporate-1.png", alt: "Sala de Juntas", span: "col-span-2 row-span-1" },
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

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900">
      <Header showHeader={showHeader} setShowContact={setShowContact} />
      <ContactIntro isOpen={showContact} onClose={() => setShowContact(false)} />

      <main className="relative pt-0">
        
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
          <OrganicNetworkBackground />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-32 pb-20 text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-800 text-[11px] font-bold uppercase tracking-widest mb-8 shadow-sm">
                Resultados Comprobados
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-slate-900">
              Casos de <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">Éxito Real</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-600 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
              No solo cubrimos vacantes. Resolvemos problemas de negocio a través del talento.
            </p>

            <ModernButton onClick={() => setShowContact(true)}>
                Quiero Resultados
            </ModernButton>
          </div>
        </section>

        {/* --- ESTADÍSTICAS (DARK SECTION) --- */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.1]" />
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {globalStats.map((stat, idx) => (
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

        {/* --- CASOS DE ÉXITO DETALLADOS --- */}
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6 max-w-7xl space-y-32">
                {caseStudies.map((study, idx) => (
                    <div key={study.id} className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                        
                        {/* Texto del Caso */}
                        <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">
                                    {study.industry === 'Educación' ? <GraduationCap size={14} /> : <Building2 size={14} />}
                                    {study.industry}
                                </span>
                            </div>
                            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">{study.company}</h2>
                            
                            <div className="space-y-8 mb-10">
                                <div>
                                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2"><BarChart3 size={14}/> El Reto</h4>
                                    <p className="text-slate-700 font-medium leading-relaxed">{study.challenge}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2"><Briefcase size={14}/> La Solución Humanis</h4>
                                    <p className="text-slate-700 font-medium leading-relaxed">{study.process}</p>
                                </div>
                            </div>

                            {/* Métricas Clave */}
                            <div className="grid grid-cols-3 gap-4 mb-10">
                                {study.metrics.map((metric, i) => (
                                    <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                        <p className="text-2xl font-black text-slate-900">{metric.value}</p>
                                        <p className="text-xs font-bold text-slate-500 uppercase mt-1">{metric.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Testimonio */}
                            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-200 relative">
                                <Quote size={32} className="text-slate-300 absolute top-6 left-6 opacity-50" />
                                <div className="relative z-10 pl-8">
                                    <p className="text-slate-700 italic font-medium mb-6 text-lg leading-relaxed">"{study.testimonial.quote}"</p>
                                    <div>
                                        <p className="font-black text-slate-900">{study.testimonial.author}</p>
                                        <p className="text-sm font-bold text-slate-500">{study.testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Imagen del Caso (LOCAL) */}
                        <div className={`relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                            <Image 
                                src={study.image} // RUTA LOCAL DEFINIDA EN EL ARRAY
                                alt={study.company}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-slate-900/10" />
                            
                            {/* Badge de Verificado */}
                            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle2 size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <p className="font-black text-slate-900 text-sm">Caso Verificado</p>
                                    <p className="text-xs font-bold text-slate-500">Resultados Reales</p>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>

        {/* --- NUEVA SECCIÓN: GALERÍA DE CLIENTES (MUCHAS IMÁGENES LOCALES) --- */}
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">Impacto en Diversos Sectores</h2>
                    <p className="text-slate-500 text-xl font-light max-w-2xl mx-auto">Desde instituciones educativas hasta grandes corporativos.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
                    {galleryImages.map((img, idx) => (
                        <div key={idx} className={`relative rounded-3xl overflow-hidden group ${img.span}`}>
                            <Image 
                                src={img.src} // RUTA LOCAL
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors duration-300" />
                            <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white font-bold text-lg">{img.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* --- TESTIMONIOS RÁPIDOS --- */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Lo que dicen de nosotros</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-8 font-medium leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-black text-slate-900">{testimonial.author}</p>
                      <p className="text-sm font-bold text-slate-500">{testimonial.role}</p>
                      <p className="text-xs font-bold text-cyan-600">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA FINAL --- */}
        <div className="py-40 bg-white text-center relative overflow-hidden z-10">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
            <div className="relative z-10">
                <h2 className="text-6xl md:text-7xl font-black mb-12 text-slate-900 tracking-tighter">¿Tu empresa es la siguiente?</h2>
                <ModernButton onClick={() => setShowContact(true)}>
                    Escribir Historia de Éxito
                </ModernButton>
            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}