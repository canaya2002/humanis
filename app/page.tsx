'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Briefcase, ShieldCheck, 
  FileText, CheckCircle, UserCheck, 
  TrendingUp, Search,
  Zap, Award, BarChart3, Users,
  Code, Terminal, Database, Server, Cpu, Cloud, Globe, ArrowRight, Activity, Star, Layers, Zap as ZapIcon, BarChart
} from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';
import ContactIntro from './components/ContactIntro';
import ScrollPathSection from './components/ScrollPathSection';

// --- DESIGN TOKENS ---
const MATTE_GLASS = "bg-white/70 backdrop-blur-[60px] border border-white/50 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.8)] rounded-[2.5rem]";
const LIQUID_GLASS = "bg-white/80 backdrop-blur-[60px] border-2 border-white/90 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)] rounded-[2.5rem]";
const LIQUID_GLASS_HOVER = "transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] hover:bg-white/95";

// --- ATMOSPHERIC BACKGROUND (Hero Cleaner) ---
const WhiteAtmosphericBackground = () => {
  // Solo 8 líneas para máxima limpieza
  const networkNodes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
    endX: Math.random() * 100,
    endY: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 50 + Math.random() * 20, 
    size: 2 + Math.random() * 2
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white z-0" />
      <svg 
        className="absolute inset-0 w-full h-full z-0 opacity-[0.3]" 
        style={{ mixBlendMode: 'multiply' }}
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64748b" stopOpacity="0.05"/> 
            <stop offset="50%" stopColor="#0891b2" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.05"/>
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {networkNodes.map((node, i) => (
          <g key={`node-group-${node.id}`}>
            {networkNodes.slice(i + 1, i + 3).map((targetNode, j) => (
              <motion.line
                key={`line-${i}-${j}`}
                x1={`${node.startX}%`} y1={`${node.startY}%`}
                x2={`${targetNode.startX}%`} y2={`${targetNode.startY}%`}
                stroke="url(#lineGradient)"
                strokeWidth="0.8"
                strokeLinecap="round"
                animate={{
                  x1: [`${node.startX}%`, `${node.endX}%`, `${node.startX}%`],
                  y1: [`${node.startY}%`, `${node.endY}%`, `${node.startY}%`],
                  x2: [`${targetNode.startX}%`, `${targetNode.endX}%`, `${targetNode.startX}%`],
                  y2: [`${targetNode.startY}%`, `${targetNode.endY}%`, `${targetNode.startY}%`],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: Math.max(node.duration, targetNode.duration),
                  delay: node.delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
            <motion.circle
              cx={`${node.startX}%`} cy={`${node.startY}%`}
              r={node.size}
              fill="#06b6d4" 
              filter="url(#glow)"
              animate={{
                cx: [`${node.startX}%`, `${node.endX}%`, `${node.startX}%`],
                cy: [`${node.startY}%`, `${node.endY}%`, `${node.startY}%`],
                opacity: [0.2, 0.5, 0.2],
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
        ))}
      </svg>
      <div 
        className="absolute inset-0 opacity-[0.2] mix-blend-overlay z-10 pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }} 
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
      ${secondary ? 'px-10 py-4 rounded-full' : 'px-10 py-4 rounded-full'}
    `}
    style={{ boxShadow: '0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)' }}
  >
    <div className="absolute inset-0 z-0 backdrop-blur-[3px] overflow-hidden rounded-full" style={{ filter: 'blur(0.5px)', isolation: 'isolate' }} />
    <div className={`absolute inset-0 z-[1] rounded-full ${secondary ? 'bg-white/40' : 'bg-gradient-to-br from-slate-800/60 via-slate-900/70 to-slate-950/60'}`}></div>
    <div className="absolute inset-0 z-[2] overflow-hidden rounded-full" style={{ boxShadow: 'inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)' }}></div>
    <span className={`relative z-[3] flex items-center gap-3 ${secondary ? 'text-slate-900' : 'text-white'}`}>
      {children}
      {!secondary && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform stroke-[3]" />}
    </span>
  </button>
);

const RotatingText = () => {
  const words = ['FUTURISTA', 'INNOVADOR', 'ESTRATÉGICO', 'DISRUPTIVO', 'EXCEPCIONAL'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((prev) => (prev + 1) % words.length), 3000);
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
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute left-0 top-0 w-full bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-cyan-600 to-slate-900 block px-1"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

// --- SECCIONES PRINCIPALES ---

const InfiniteCarousel = () => {
  // RUTA CORREGIDA
  const logos = Array.from({ length: 8 }, (_, i) => `/socios/Partners_${i + 1}.png`);
  const repeatedLogos = [...logos, ...logos, ...logos]; 

  return (
    <div className="relative pt-48 pb-32 bg-transparent overflow-hidden z-30 flex flex-col items-center gap-24">
      
      <div className="relative z-30 px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 uppercase relative inline-block">
            EMPRESAS IMPULSADAS POR NUESTRO TALENTO
            {/* Subrayado más grueso */}
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></span>
        </h3>
      </div>
      
      <div className="w-full relative overflow-hidden mb-12">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="flex w-full overflow-hidden group">
            {/* Velocidad reducida */}
            <div className="flex animate-infinite-scroll group-hover:[animation-play-state:paused] items-center [animation-duration:120s]">
                {repeatedLogos.map((logo, idx) => (
                <div key={idx} className="flex-shrink-0 w-72 mx-8 flex items-center justify-center transition-all duration-500 hover:scale-105">
                    <img 
                        src={logo} 
                        alt={`Partner logo ${idx}`} 
                        className="max-w-[220px] max-h-28 object-contain opacity-100 drop-shadow-md" 
                    />
                </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

const OrganicFloatingIcons = () => {
    // Iconos apartados del centro para no tapar el título
    const positions = [
        { top: '10%', left: '5%' }, { top: '15%', left: '90%' }, 
        { top: '40%', left: '8%' }, { top: '35%', left: '92%' }, 
        { top: '65%', left: '10%' }, { top: '60%', left: '85%' }, 
        { top: '85%', left: '20%' }, { top: '90%', left: '70%' },
        { top: '25%', left: '15%' }, { top: '75%', left: '80%' } 
    ];
    
    const icons = [Code, Terminal, Database, Server, Cpu, Cloud, ShieldCheck, Users, Briefcase, Zap, Globe, Search];

    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {positions.map((pos, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div 
              key={i} 
              // Efecto 3D
              className="absolute flex items-center justify-center w-20 h-20 rounded-3xl text-slate-500 bg-white border-b-[6px] border-r-[6px] border-slate-200 shadow-xl"
              style={{ 
                  top: pos.top,
                  left: pos.left,
              }}
              animate={{
                  y: [0, -30, 0], 
                  rotate: [0, 10, -10, 0]
              }}
              transition={{
                  duration: 6 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
              }}
            >
               <Icon size={30} className="relative z-10" />
            </motion.div>
          );
        })}
      </div>
    );
};

const ServicesSection = () => (
    // SECCIÓN HUNDIDA: Sombras inset fuertes arriba y abajo
    <section className="py-40 relative bg-slate-100 overflow-visible shadow-[inset_0_60px_60px_-20px_rgba(0,0,0,0.08),inset_0_-60px_60px_-20px_rgba(0,0,0,0.08)]" id="servicios">
      
      <OrganicFloatingIcons />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-48 text-center max-w-4xl mx-auto relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/80 border border-slate-300 text-slate-800 text-[11px] font-bold uppercase tracking-widest mb-6 shadow-inner"
          >
            <Activity size={12} strokeWidth={3} />
            Infraestructura Operativa
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black mb-6 text-slate-900 tracking-tighter leading-[0.95]"
          >
            Soluciones de <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600">Capital Humano</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-xl md:text-2xl font-light leading-relaxed"
          >
            Tecnología, legalidad y talento fusionados para escalar tu operación.
          </motion.p>
        </div>
        
        {/* LAYOUT ZIG-ZAG (1 COLUMNA) */}
        <div className="flex flex-col gap-64 max-w-7xl mx-auto">
          {[
            { 
                title: "Headhunting Estratégico", 
                subtitle: "Ejecutivos & Tecnología",
                statLabel: "Eficacia",
                statValue: "98%",
                statDesc: "Garantía extendida por contrato",
                features: ["Búsqueda Directa C-Level", "Mapeo de Talento Nicho", "Evaluación Psicométrica IA"],
                desc: "Accede al 1% del talento que realmente marca la diferencia. Nuestra metodología combina inteligencia de mercado con una red exclusiva de contactos para localizar líderes.",
            }, 
            { 
                title: "Staffing Flexible", 
                subtitle: "Personal Calificado REPSE",
                statLabel: "Cumplimiento",
                statValue: "100%",
                statDesc: "Auditoría mensual IMSS/SAT",
                features: ["Cumplimiento REPSE Total", "Gestión de Beneficios", "Sustitución en < 48hrs"],
                desc: "Escala tu fuerza laboral sin riesgos. Proveemos equipos especializados listos para integrarse a tus proyectos, gestionando toda la carga laboral y administrativa.",
            }, 
            { 
                title: "Gestión de Nómina 4.0", 
                subtitle: "Precisión Financiera",
                statLabel: "Dispersión",
                statValue: "99.9%",
                statDesc: "Automatización bancaria",
                features: ["Cálculo de Impuestos Exacto", "Timbrado Masivo CFDI", "Reporteo en Tiempo Real"],
                desc: "Transforma tu nómina en un proceso impecable. Eliminamos errores humanos y garantizamos la deducibilidad fiscal total de tu plantilla, siempre a tiempo.",
            }, 
            { 
                title: "Compliance & Legal", 
                subtitle: "Blindaje Corporativo",
                statLabel: "Riesgo",
                statValue: "0%",
                statDesc: "Defensa jurídica integral",
                features: ["Auditorías Preventivas STPS", "Defensa Legal Patronal", "Gestión Contractual"],
                desc: "Protegemos tu patrimonio. Implementamos un escudo jurídico proactivo que neutraliza riesgos laborales y asegura la continuidad de tu operación ante contingencias.",
            }
          ].map((item, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-32 relative group`}>
              
              {/* IMAGEN DE TALENTO (ENFRENTE Y GRANDE) - Z-INDEX 30 */}
              <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.8 }}
                 className="w-full lg:w-1/2 relative z-30 flex justify-center"
              >
                 {/* AURA / RESPLANDOR */}
                 <div className="absolute inset-0 bg-cyan-400/30 blur-[90px] rounded-full scale-90 animate-pulse z-0" />
                 
                 <motion.img 
                    src={`/talentos/Talento_${idx + 1}.png`} 
                    alt="Talento Humanis" 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: idx }}
                    className="w-full max-w-[550px] h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.35)] relative z-10"
                 />
              </motion.div>

              {/* CUADRO DE INFORMACIÓN (MATTE GLASS) - Z-INDEX 20 */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`${MATTE_GLASS} w-full lg:w-1/2 p-10 md:p-14 relative z-20 flex flex-col justify-center overflow-hidden`}
              >
                {/* Textura de fondo técnica */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-12 h-[3px] bg-cyan-700 rounded-full"></span>
                        <p className="text-cyan-800 font-bold uppercase text-xs tracking-[0.3em]">{item.subtitle}</p>
                    </div>
                    
                    <h3 className="text-4xl md:text-6xl font-black text-slate-800 mb-8 tracking-tighter leading-none">{item.title}</h3>
                    
                    {/* BLOQUE DE DATOS / MÉTRICAS */}
                    <div className="mb-10 p-6 rounded-3xl bg-white/50 border border-white shadow-inner flex items-center gap-6 backdrop-blur-sm">
                        <div className="flex-1">
                            <div className="text-4xl font-black text-slate-900">{item.statValue}</div>
                            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-1">{item.statLabel}</div>
                        </div>
                        <div className="h-10 w-[1px] bg-slate-300"></div>
                        <div className="flex-1 text-xs font-medium text-slate-600 leading-tight">
                            {item.statDesc}
                        </div>
                    </div>

                    <p className="text-slate-600 text-lg leading-relaxed font-light mb-8">
                        {item.desc}
                    </p>

                    <ul className="space-y-3 pt-6 border-t border-slate-200/60">
                        {item.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-4 text-slate-800 text-sm font-bold tracking-tight">
                                <div className="w-2 h-2 rounded-full bg-cyan-600 shadow-[0_0_10px_rgba(8,145,178,0.5)]"></div>
                                {feat}
                            </li>
                        ))}
                    </ul>
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
);

const ForCompaniesSection = ({ navigateTo }: any) => (
    <section className="py-32 bg-white relative overflow-hidden z-30" id="empresas">
      {/* Sombra superior para completar el efecto de hundimiento de la sección anterior */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/5 to-transparent pointer-events-none z-10" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-20">
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

export default function HumanisApp() {
  const router = useRouter();
  const [showContact, setShowContact] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const navigateTo = (page: string) => {
    if (page === 'contacto') {
        setShowContact(true);
    } else if (page === 'empresas') {
        router.push('/para-empresas');
    } else if (page === 'candidatos') {
        router.push('/talento');
    } else {
        router.push(`/${page}`);
    }
  };

  return (
    <>
      <GlobalStyles />
      <ContactIntro isOpen={showContact} onClose={() => setShowContact(false)} />
      
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900 overflow-x-hidden">
        
        <Header 
          showHeader={true} 
          setShowContact={setShowContact}
        />

        <main className="pt-0">
            
            <section className="relative min-h-[100vh] lg:h-screen flex flex-col justify-center overflow-hidden">
                <WhiteAtmosphericBackground />
                
                <div className="container mx-auto px-6 lg:px-12 relative z-10 flex-grow flex flex-col justify-center pt-28 lg:pt-20">
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        
                          <div className={`w-full relative flex justify-center lg:justify-start transition-all duration-1000 delay-200 order-1 lg:order-1 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            
                            <div className="relative w-full max-w-[400px] lg:max-w-[700px]">
                                <img 
                                    src="/humanishero.png" 
                                    alt="Humanis Hero" 
                                    className="w-full h-auto object-contain drop-shadow-[0_0_35px_rgba(34,211,238,0.5)] z-20 relative"
                                />
                                
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
                                    className="absolute bottom-0 right-0 lg:-right-8 lg:bottom-16 z-30 hidden md:flex"
                                >
                                    <div className="relative flex items-center gap-5 p-5 pr-8 bg-white/70 backdrop-blur-2xl border border-white/80 rounded-3xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12),0_10px_20px_-5px_rgba(0,0,0,0.05)] hover:scale-105 transition-transform duration-300">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30">
                                           <Users size={24} strokeWidth={2.5} />
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="relative flex h-2.5 w-2.5">
                                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                                </span>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Status: Activo</span>
                                            </div>
                                            <div className="flex items-baseline gap-1.5">
                                                <span className="text-4xl font-black text-slate-900 tracking-tight leading-none">128</span>
                                                <span className="text-sm font-bold text-slate-600">Agentes Activos</span>
                                            </div>
                                            <div className="text-xs text-slate-400 font-medium mt-0.5">Colocados actualmente</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        <div className={`w-full text-center lg:text-left transition-all duration-1000 order-2 lg:order-2 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-md border border-slate-200 text-slate-800 text-[11px] font-bold uppercase tracking-widest mb-8 mx-auto lg:mx-0 shadow-sm ring-1 ring-white/50">
                                <Activity size={14} className="text-cyan-600" />
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

            <InfiniteCarousel />
            <ServicesSection />
            
            <section className="bg-slate-50/50 relative overflow-hidden">
                <div className="text-center pt-32 pb-16 relative z-10">
                    <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">Ruta de Evolución</h2>
                    <p className="text-slate-500 text-xl max-w-2xl mx-auto font-light">Nuestro proceso integral paso a paso, diseñado para la perfección.</p>
                </div>
                <ScrollPathSection />
            </section>

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
      `}</style>
    </>
  );
}