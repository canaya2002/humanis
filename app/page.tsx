'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, ShieldCheck, 
  FileText, CheckCircle, UserCheck, 
  TrendingUp, Search,
  Zap, Award, BarChart3, Users,
  Code, Terminal, Database, Server, Cpu, Cloud, Globe, ArrowRight
} from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';
import ContactIntro from './components/ContactIntro';
import ScrollPathSection from './components/ScrollPathSection';
import ParticleMorphCanvas from './components/ParticleMorphCanvas';

// --- DESIGN TOKENS (ULTRA PREMIUM GLASS) ---
// Glass más intenso y "helado"
const LIQUID_GLASS = "bg-white/70 backdrop-blur-[50px] border border-white/80 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.2)] rounded-[2.5rem]";
const LIQUID_GLASS_HOVER = "transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.15)] hover:bg-white/80";

// --- ATMOSPHERIC BACKGROUND (WHITE VERSION CON NETWORK EFFECT) ---
const WhiteAtmosphericBackground = () => {
  // Generar puntos de red con posiciones y movimientos aleatorios
  const networkNodes = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
    endX: Math.random() * 100,
    endY: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 15 + Math.random() * 10,
    size: 2 + Math.random() * 2
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-white">
      {/* 1. Fondo Base Blanco PURO */}
      <div className="absolute inset-0 bg-white z-0" />

      {/* 2. NETWORK GRID - Efecto de Red con Movimiento Orgánico */}
      <svg 
        className="absolute inset-0 w-full h-full z-0 opacity-[0.15]"
        style={{ mixBlendMode: 'multiply' }}
      >
        <defs>
          {/* Gradiente para las líneas */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0891b2" stopOpacity="0.1"/>
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1"/>
          </linearGradient>
          
          {/* Filtro de glow para los nodos */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Renderizar nodos y sus conexiones dinámicas */}
        {networkNodes.map((node, i) => {
          // Calcular posición animada del nodo
          const nodeMotion = {
            x: [node.startX, node.endX, node.startX],
            y: [node.startY, node.endY, node.startY]
          };

          return (
            <g key={`node-group-${node.id}`}>
              {/* Líneas de conexión dinámicas a nodos cercanos */}
              {networkNodes.slice(i + 1, i + 6).map((targetNode, j) => (
                <motion.line
                  key={`line-${i}-${j}`}
                  x1={`${node.startX}%`}
                  y1={`${node.startY}%`}
                  x2={`${targetNode.startX}%`}
                  y2={`${targetNode.startY}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  animate={{
                    x1: [`${node.startX}%`, `${node.endX}%`, `${node.startX}%`],
                    y1: [`${node.startY}%`, `${node.endY}%`, `${node.startY}%`],
                    x2: [`${targetNode.startX}%`, `${targetNode.endX}%`, `${targetNode.startX}%`],
                    y2: [`${targetNode.startY}%`, `${targetNode.endY}%`, `${targetNode.startY}%`],
                    opacity: [0.2, 0.6, 0.2]
                  }}
                  transition={{
                    duration: Math.max(node.duration, targetNode.duration),
                    delay: node.delay,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
              
              {/* Círculo de pulso alrededor del nodo */}
              <motion.circle
                cx={`${node.startX}%`}
                cy={`${node.startY}%`}
                r="0"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="1"
                animate={{
                  cx: [`${node.startX}%`, `${node.endX}%`, `${node.startX}%`],
                  cy: [`${node.startY}%`, `${node.endY}%`, `${node.startY}%`],
                  r: [0, 20, 30],
                  opacity: [0.5, 0.2, 0]
                }}
                transition={{
                  duration: node.duration,
                  delay: node.delay,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
              
              {/* Nodo principal moviéndose */}
              <motion.circle
                cx={`${node.startX}%`}
                cy={`${node.startY}%`}
                r={node.size}
                fill="#0891b2"
                filter="url(#glow)"
                animate={{
                  cx: [`${node.startX}%`, `${node.endX}%`, `${node.startX}%`],
                  cy: [`${node.startY}%`, `${node.endY}%`, `${node.startY}%`],
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: node.duration,
                  delay: node.delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* 3. RUIDO (Noise Overlay) */}
      <div 
        className="absolute inset-0 opacity-[0.2] mix-blend-overlay z-10" 
        style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` 
        }} 
      />
    </div>
  );
};

// --- COMPONENTES UI ---

const ModernButton = ({ children, onClick, secondary = false }: any) => (
  <button 
    onClick={onClick} 
    className={`
      relative group overflow-hidden font-bold text-sm tracking-widest uppercase transition-all duration-400
      ${secondary 
        ? 'px-10 py-4 rounded-full' 
        : 'px-10 py-4 rounded-full'
      }
    `}
    style={{
      boxShadow: '0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)'
    }}
  >
    {/* Liquid Glass Effect Layer */}
    <div className="absolute inset-0 z-0 backdrop-blur-[3px] overflow-hidden rounded-full" 
         style={{ 
           filter: 'blur(0.5px)',
           isolation: 'isolate'
         }}>
    </div>
    
    {/* Tint Layer */}
    <div className={`absolute inset-0 z-[1] rounded-full ${
      secondary 
        ? 'bg-white/40' 
        : 'bg-gradient-to-br from-slate-800/60 via-slate-900/70 to-slate-950/60'
    }`}></div>
    
    {/* Shine Layer */}
    <div className="absolute inset-0 z-[2] overflow-hidden rounded-full"
         style={{
           boxShadow: 'inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)'
         }}>
    </div>
    
    {/* Content */}
    <span className={`relative z-[3] flex items-center gap-3 ${
      secondary ? 'text-slate-900' : 'text-white'
    }`}>
      {children}
      {!secondary && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform stroke-[3]" />}
    </span>
  </button>
);

const RotatingText = () => {
  const words = ['FUTURISTA', 'INNOVADOR', 'ESTRATÉGICO', 'DISRUPTIVO', 'EXCEPCIONAL'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block min-w-[360px] md:min-w-[680px] text-left h-[1.2em] align-top overflow-visible -mb-2"> 
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          initial={false}
          animate={{
            opacity: idx === currentIndex ? 1 : 0,
            y: idx === currentIndex ? 0 : idx === (currentIndex - 1 + words.length) % words.length ? -50 : 50,
            filter: idx === currentIndex ? 'blur(0px)' : 'blur(4px)'
          }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="absolute left-0 top-0 w-full bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-cyan-600 to-slate-900 block px-1"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

const InfiniteCarousel = () => {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/0/0c/ASANA_LOGO.png",
  ];
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos]; 

  return (
    <div className="py-24 bg-white/40 border-b border-slate-100 relative overflow-hidden backdrop-blur-md z-20">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="flex w-full overflow-hidden group">
        <div className="flex animate-infinite-scroll group-hover:[animation-play-state:paused] items-center">
            {repeatedLogos.map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 w-48 mx-12 flex items-center justify-center grayscale opacity-60 hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-110">
                <img src={logo} alt={`Client logo ${idx}`} className="max-w-[130px] max-h-12 object-contain" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const JumpingIcons = () => {
    const icons = [Code, Terminal, Database, Server, Cpu, Cloud, ShieldCheck, Users, Briefcase, Zap, Globe, Search, BarChart3, Award, FileText, CheckCircle];
    return (
      <div className="flex flex-wrap gap-8 justify-center py-16 px-8 max-w-6xl mx-auto">
        {icons.map((Icon, i) => (
          <div key={i} className={`group w-24 h-24 bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-[1.5rem] flex items-center justify-center text-slate-400 hover:text-cyan-600 transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer hover:bg-white/80 hover:shadow-[0_12px_40px_rgba(6,182,212,0.2)]`} style={{ animationDelay: `${i * 0.05}s` }}>
            <Icon size={36} className="transition-transform group-hover:rotate-12" />
          </div>
        ))}
      </div>
    );
};

const ServicesSection = () => (
    <section className="py-32 relative bg-white overflow-hidden" id="servicios">
      <ParticleMorphCanvas />
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-5xl lg:text-7xl font-black mb-6 text-slate-900 tracking-tight">Soluciones de Capital Humano</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-xl font-light">Infraestructura legal y operativa de clase mundial.</p>
        </div>
        <JumpingIcons />
        <div className="grid md:grid-cols-4 gap-8 mt-24">
          {[
            { icon: <Search size={32} />, title: "Headhunting", desc: "Ejecutivos y TI." }, 
            { icon: <Briefcase size={32} />, title: "Staffing", desc: "Personal REPSE." }, 
            { icon: <FileText size={32} />, title: "Nómina", desc: "Cálculo preciso." }, 
            { icon: <ShieldCheck size={32} />, title: "Compliance", desc: "Blindaje legal." }
          ].map((item, idx) => (
            <div key={idx} className={`${LIQUID_GLASS} ${LIQUID_GLASS_HOVER} p-12 group cursor-default h-full flex flex-col`} style={{ transformStyle: 'preserve-3d' }}>
              <div className="text-slate-900 mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:text-cyan-600 bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg border border-slate-100">
                  {item.icon}
              </div>
              <h3 className="font-bold text-2xl mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed font-light text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
);

const ForCompaniesSection = ({ navigateTo }: any) => (
    <section className="py-32 bg-white relative overflow-hidden" id="empresas">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="h-fit lg:sticky lg:top-32 order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100/80 backdrop-blur-sm text-slate-900 text-[11px] font-bold uppercase tracking-widest mb-8 border border-slate-200 shadow-sm">
              Soluciones Corporativas
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-8 leading-[0.95] text-slate-900 tracking-tighter">
              Certeza <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">JURÍDICA</span>
            </h2>
            <p className="text-slate-600 text-xl mb-12 font-light leading-relaxed">
              Eliminamos el riesgo de responsabilidad solidaria mediante una ejecución impecable de la normativa REPSE.
            </p>
            <ul className="space-y-6 mb-12">
              {["Cero riesgo de Responsabilidad Solidaria", "Deducibilidad Fiscal 100% Garantizada", "Entregables mensuales (SAT/IMSS)", "Atención a Requerimientos"].map((item, i) =>(
                <li key={i} className="flex items-center gap-4 text-lg text-slate-700 font-medium">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 shadow-sm border border-green-200">
                      <CheckCircle size={16} strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <ModernButton onClick={() => navigateTo('contacto')}>Solicitar Auditoría</ModernButton>
          </div>
          <div className="flex flex-col gap-10 order-1 lg:order-2">
            <div className={`${LIQUID_GLASS} overflow-hidden transform transition-all duration-700 hover:scale-[1.01] hover:shadow-[0_40px_80px_rgba(79,70,229,0.15)]`}>
               <div className="p-12 border-b border-slate-100/50 bg-white/30 backdrop-blur-md">
                 <h3 className="text-4xl font-black text-slate-900 tracking-tight">Metodología 360°</h3>
                 <p className="text-slate-500 text-lg mt-4 font-light">Ciclo continuo de calidad y cumplimiento normativo.</p>
               </div>
               <div className="p-16 flex items-center justify-center bg-white/20 min-h-[500px] relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50 pointer-events-none" />
                  <div className="relative w-full h-full flex items-center justify-center z-10">
                      <svg className="w-full h-full max-w-[600px] absolute" viewBox="0 0 600 400" style={{ overflow: 'visible' }}>
                          <ellipse cx="300" cy="200" rx="250" ry="120" fill="none" stroke="rgba(15, 23, 42, 0.05)" strokeWidth="1" />
                          <ellipse cx="300" cy="200" rx="250" ry="120" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="10 10" className="animate-spin-slow" style={{ transformOrigin: '300px 200px' }} />
                          <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#0891b2" stopOpacity="0.2"/>
                                  <stop offset="50%" stopColor="#0891b2" stopOpacity="1"/>
                                  <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2"/>
                              </linearGradient>
                          </defs>
                      </svg>
                      {[
                        { Icon: Search, position: 'left-[10%] top-[25%]' },
                        { Icon: UserCheck, position: 'left-1/2 top-[10%] -translate-x-1/2' },
                        { Icon: FileText, position: 'right-[10%] top-[25%]' },
                        { Icon: ShieldCheck, position: 'right-[10%] bottom-[25%]' },
                        { Icon: Briefcase, position: 'left-1/2 bottom-[10%] -translate-x-1/2' },
                        { Icon: TrendingUp, position: 'left-[10%] bottom-[25%]' },
                      ].map(({ Icon, position }, idx) => (
                        <div key={idx} className={`absolute ${position} w-16 h-16 ${LIQUID_GLASS} flex items-center justify-center text-slate-700 hover:text-cyan-600 hover:scale-110 transition-all duration-500 cursor-pointer shadow-lg`}>
                          <Icon size={24} />
                        </div>
                      ))}
                      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center p-10 w-48 h-48 flex flex-col justify-center items-center ${LIQUID_GLASS} shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20`}>
                        <div className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-2">Eficacia</div>
                        <div className="text-3xl font-black text-slate-900 tracking-tight">TOTAL</div>
                      </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
);

// --- MAIN APP ---
export default function HumanisApp() {
  const [currentPage, setCurrentPage] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
        if (window.scrollY > lastScrollY.current && window.scrollY > 80) {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }
        lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: string) => {
    if (page === 'contacto') {
        setShowContact(true);
    } else {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <GlobalStyles />
      <ContactIntro isOpen={showContact} onClose={() => setShowContact(false)} />
      
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900 overflow-x-hidden">
        
        <Header 
          showHeader={showHeader}
          setShowContact={setShowContact}
        />

        <main className="pt-0">
            
            {(currentPage === 'inicio' || currentPage === 'home') && (
            <section className="relative min-h-[100vh] lg:h-screen flex flex-col justify-center overflow-hidden">
                
                {/* 1. Fondo Atmosférico (White + Movement) */}
                <WhiteAtmosphericBackground />
                
                <div className="container mx-auto px-6 lg:px-12 relative z-10 flex-grow flex flex-col justify-center pt-28 lg:pt-20">
                    
                    {/* LAYOUT GRID: IMAGEN IZQUIERDA - TEXTO DERECHA (Desktop) */}
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        
                         {/* COLUMNA 1: IMAGEN HERO (Izquierda Desktop / Arriba Mobile) */}
                         <div className={`w-full relative flex justify-center lg:justify-start transition-all duration-1000 delay-200 order-1 lg:order-1 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            
                            <div className="relative w-full max-w-[400px] lg:max-w-[700px]">
                                {/* Imagen Estática con Borde de Luz Cyan */}
                                <img 
                                    src="/humanishero.png" 
                                    alt="Humanis Hero" 
                                    className="w-full h-auto object-contain drop-shadow-[0_0_35px_rgba(34,211,238,0.5)] z-20 relative"
                                />
                                
                                {/* Badge Flotante "Agentes Activos" - Liquid Glass Effect DESTACADO */}
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.2, duration: 0.6 }}
                                    className="absolute bottom-0 right-0 lg:-right-4 lg:bottom-16 z-30 hidden md:flex"
                                >
                                    <div className="relative overflow-hidden rounded-2xl shadow-[0_12px_48px_rgba(16,185,129,0.6),0_0_80px_rgba(16,185,129,0.3)] transition-all duration-400 hover:shadow-[0_16px_64px_rgba(16,185,129,0.7),0_0_100px_rgba(16,185,129,0.4)] hover:scale-105"
                                         style={{
                                           boxShadow: '0 8px 12px rgba(16, 185, 129, 0.4), 0 0 40px rgba(16, 185, 129, 0.3)'
                                         }}>
                                        {/* Liquid Glass Effect */}
                                        <div className="absolute inset-0 z-0 backdrop-blur-[3px] overflow-hidden" 
                                             style={{ 
                                               filter: 'blur(0.5px)',
                                               isolation: 'isolate'
                                             }}>
                                        </div>
                                        
                                        {/* Tint Layer - VERDE MÁS FUERTE */}
                                        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-emerald-500/80 via-emerald-600/85 to-green-600/80"></div>
                                        
                                        {/* Shine Layer */}
                                        <div className="absolute inset-0 z-[2] overflow-hidden"
                                             style={{
                                               boxShadow: 'inset 3px 3px 2px 0 rgba(255, 255, 255, 0.6), inset -2px -2px 2px 2px rgba(255, 255, 255, 0.5)'
                                             }}>
                                        </div>
                                        
                                        {/* Glow animado detrás */}
                                        <motion.div 
                                            className="absolute inset-0 bg-emerald-400 blur-xl opacity-50"
                                            animate={{
                                                opacity: [0.4, 0.7, 0.4]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />
                                        
                                        {/* Content */}
                                        <div className="relative z-[3] px-6 py-4 flex items-center gap-4">
                                            {/* Punto pulsante verde MÁS GRANDE */}
                                            <span className="relative flex h-4 w-4 flex-shrink-0">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-4 w-4 bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]"></span>
                                            </span>
                                            
                                            {/* Texto con número SUPER DESTACADO */}
                                            <div className="flex flex-col items-start">
                                                <span className="text-white font-black text-4xl leading-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] tracking-tight">128</span>
                                                <span className="text-white text-sm font-bold uppercase tracking-[0.15em] leading-tight mt-1 drop-shadow-md">Agentes Activos</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* COLUMNA 2: TEXTO (Derecha Desktop / Abajo Mobile) */}
                        <div className={`w-full text-center lg:text-left transition-all duration-1000 order-2 lg:order-2 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-md border border-slate-200 text-slate-800 text-[11px] font-bold uppercase tracking-widest mb-8 mx-auto lg:mx-0 shadow-sm ring-1 ring-white/50">
                                <span className="relative flex h-2.5 w-2.5">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                                </span>
                                Capital Humano de Nueva Generación
                            </div>
                            
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-4 leading-[0.95] tracking-tighter">
                                Talento <br/>
                                <RotatingText />
                            </h1>
                            
                            <p className="text-slate-600 text-lg md:text-xl lg:text-2xl max-w-xl mx-auto lg:mx-0 mb-12 font-light leading-relaxed">
                                Ingeniería de personal y blindaje jurídico. <br className="hidden lg:block"/>
                                <strong className="text-slate-900 font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">Redefiniendo la excelencia operativa.</strong>
                            </p>
                            
                            <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
                                <ModernButton onClick={() => navigateTo('empresas')}>
                                    Soy Empresa
                                </ModernButton>
                                <ModernButton secondary onClick={() => navigateTo('candidatos')}>
                                    Soy Candidato
                                </ModernButton>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            )}

            <InfiniteCarousel />
            <ServicesSection />
            
            {(currentPage === 'inicio' || currentPage === 'home') && (
            <section className="bg-slate-50/50 relative overflow-hidden">
                <div className="text-center pt-32 pb-16 relative z-10">
                    <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">Ruta de Evolución</h2>
                    <p className="text-slate-500 text-xl max-w-2xl mx-auto font-light">Nuestro proceso integral paso a paso, diseñado para la perfección.</p>
                </div>
                <ScrollPathSection />
            </section>
            )}

            <ForCompaniesSection navigateTo={navigateTo} />

            <div className="py-40 bg-slate-50 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
                <div className="relative z-10">
                    <h2 className="text-6xl md:text-7xl font-black mb-12 text-slate-900 tracking-tighter">¿Listo para el siguiente nivel?</h2>
                    <ModernButton onClick={() => setShowContact(true)}>
                        Iniciar Transformación
                    </ModernButton>
                </div>
            </div>

        </main>
        <Footer />
      </div>

      <style jsx>{`
        /* Estilos globales si es necesario */
      `}</style>
    </>
  );
} 