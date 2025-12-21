'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  Briefcase, ShieldCheck, 
  FileText, CheckCircle, UserCheck, 
  TrendingUp, Search,
  Users, Zap, 
  Code, Terminal, Database, Server, Cpu, Cloud, Globe, ArrowRight, Activity 
} from 'lucide-react';

// Importa tus componentes externos
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';
import ContactIntro from './components/ContactIntro';
import ScrollPathSection from './components/ScrollPathSection';

// Registro de plugins GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// --- DESIGN TOKENS ---
const MATTE_GLASS = "bg-white/70 backdrop-blur-[60px] border border-white/50 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.8)] rounded-[2.5rem]";
const LIQUID_GLASS = "bg-white/80 backdrop-blur-[60px] border-2 border-white/90 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)] rounded-[2.5rem]";
// Botón 3D mejorado
const LIQUID_3D_BUTTON = "bg-gradient-to-br from-slate-50 to-slate-100 backdrop-blur-xl border-[3px] border-white shadow-[0_15px_35px_rgba(0,0,0,0.15),inset_2px_2px_5px_rgba(255,255,255,1),inset_-2px_-2px_5px_rgba(0,0,0,0.05)] rounded-3xl";

// --- DATOS ---
const SOLUTIONS_DATA = [
  { id: 1, title: "Headhunting Estratégico", subtitle: "Ejecutivos & Tecnología", statLabel: "Eficacia", statValue: "98%", statDesc: "Garantía extendida por contrato", features: ["Búsqueda Directa C-Level", "Mapeo de Talento Nicho", "Evaluación Psicométrica IA"], desc: "Accede al 1% del talento que realmente marca la diferencia. Metodología de inteligencia de mercado.", img: "/talentos/Talento_1.png", color: "cyan" }, 
  { id: 2, title: "Staffing Flexible", subtitle: "Personal Calificado REPSE", statLabel: "Cumplimiento", statValue: "100%", statDesc: "Auditoría mensual IMSS/SAT", features: ["Cumplimiento REPSE Total", "Gestión de Beneficios", "Sustitución en < 48hrs"], desc: "Escala tu fuerza laboral sin riesgos. Equipos especializados listos para integrarse, gestionando toda la carga laboral.", img: "/talentos/Talento_2.png", color: "blue" }, 
  { id: 3, title: "Gestión de Nómina 4.0", subtitle: "Precisión Financiera", statLabel: "Dispersión", statValue: "99.9%", statDesc: "Automatización bancaria", features: ["Cálculo de Impuestos Exacto", "Timbrado Masivo CFDI", "Reporteo en Tiempo Real"], desc: "Transforma tu nómina en un proceso impecable. Garantizamos deducibilidad fiscal total, siempre a tiempo.", img: "/talentos/Talento_3.png", color: "indigo" }, 
  { id: 4, title: "Compliance & Legal", subtitle: "Blindaje Corporativo", statLabel: "Riesgo", statValue: "0%", statDesc: "Defensa jurídica integral", features: ["Auditorías Preventivas STPS", "Defensa Legal Patronal", "Gestión Contractual"], desc: "Escudo jurídico proactivo que neutraliza riesgos laborales y asegura la continuidad de tu operación.", img: "/talentos/Talento_4.png", color: "violet" }
];

// --- COMPONENTES UI AUXILIARES ---
interface ModernButtonProps { children: React.ReactNode; onClick?: () => void; secondary?: boolean; }
const ModernButton = ({ children, onClick, secondary = false }: ModernButtonProps) => (
  <button onClick={onClick} className={`relative group overflow-hidden font-bold text-sm tracking-widest uppercase transition-all duration-400 ${secondary ? 'px-10 py-4 rounded-full' : 'px-10 py-4 rounded-full'}`} style={{ boxShadow: '0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)' }}>
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
  }, [words.length]);
  return (
    <span className="relative inline-block min-w-[360px] md:min-w-[680px] text-left h-[1.2em] align-top overflow-visible -mb-2"> 
      {words.map((word, idx) => (
        <motion.span
          key={idx} initial={false} animate={{ opacity: idx === currentIndex ? 1 : 0, y: idx === currentIndex ? 0 : idx === (currentIndex - 1 + words.length) % words.length ? -50 : 50, filter: idx === currentIndex ? 'blur(0px)' : 'blur(4px)' }} transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }} className="absolute left-0 top-0 w-full bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-cyan-600 to-slate-900 block px-1"
        > {word} </motion.span>
      ))}
    </span>
  );
};

const OrganicFloatingIcons = () => {
    const [iconsData, setIconsData] = useState<Array<{top: string, left: string, duration: number, delay: number, Icon: any}>>([]);
    useEffect(() => {
        const positions = [{ top: '10%', left: '5%' }, { top: '15%', left: '90%' }, { top: '40%', left: '8%' }, { top: '35%', left: '92%' }, { top: '65%', left: '10%' }, { top: '60%', left: '85%' }, { top: '85%', left: '20%' }, { top: '90%', left: '70%' }, { top: '25%', left: '15%' }, { top: '75%', left: '80%' }];
        const iconsList = [Code, Terminal, Database, Server, Cpu, Cloud, ShieldCheck, Users, Briefcase, Zap, Globe, Search];
        const data = positions.map((pos, i) => ({ ...pos, duration: 6 + Math.random() * 4, delay: i * 0.5, Icon: iconsList[i % iconsList.length] }));
        setIconsData(data);
    }, []);
    if (iconsData.length === 0) return null;
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {iconsData.map((data, i) => { const { Icon } = data; return ( <motion.div key={i} className="absolute flex items-center justify-center w-20 h-20 rounded-3xl text-slate-500 bg-white border-b-[6px] border-r-[6px] border-slate-200 shadow-xl" style={{ top: data.top, left: data.left }} animate={{ y: [0, -30, 0], rotate: [0, 10, -10, 0] }} transition={{ duration: data.duration, repeat: Infinity, ease: "easeInOut", delay: data.delay }} > <Icon size={30} className="relative z-10" /> </motion.div> ); })}
      </div>
    );
};

const WhiteAtmosphericBackground = () => {
  const [nodes, setNodes] = useState<Array<{id: number, startX: number, startY: number, endX: number, endY: number, delay: number, duration: number, size: number}>>([]);
  useEffect(() => { const newNodes = Array.from({ length: 8 }, (_, i) => ({ id: i, startX: Math.random() * 100, startY: Math.random() * 100, endX: Math.random() * 100, endY: Math.random() * 100, delay: Math.random() * 5, duration: 50 + Math.random() * 20, size: 2 + Math.random() * 2 })); setNodes(newNodes); }, []);
  if (nodes.length === 0) return <div className="absolute inset-0 bg-white z-0" />;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white z-0" />
      <svg className="absolute inset-0 w-full h-full z-0 opacity-[0.3]" style={{ mixBlendMode: 'multiply' }}>
        <defs><linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#64748b" stopOpacity="0.05"/> <stop offset="50%" stopColor="#0891b2" stopOpacity="0.3"/> <stop offset="100%" stopColor="#64748b" stopOpacity="0.05"/></linearGradient><filter id="glow"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
        {nodes.map((node, i) => ( <g key={`node-group-${node.id}`}> {nodes.slice(i + 1, i + 3).map((targetNode, j) => ( <motion.line key={`line-${i}-${j}`} x1={`${node.startX}%`} y1={`${node.startY}%`} x2={`${targetNode.startX}%`} y2={`${targetNode.startY}%`} stroke="url(#lineGradient)" strokeWidth="0.8" strokeLinecap="round" animate={{ x1: [`${node.startX}%`, `${node.endX}%`, `${node.startX}%`], y1: [`${node.startY}%`, `${node.endY}%`, `${node.startY}%`], x2: [`${targetNode.startX}%`, `${targetNode.endX}%`, `${targetNode.startX}%`], y2: [`${targetNode.startY}%`, `${targetNode.endY}%`, `${targetNode.startY}%`], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: Math.max(node.duration, targetNode.duration), delay: node.delay, repeat: Infinity, ease: "easeInOut" }} /> ))} <motion.circle cx={`${node.startX}%`} cy={`${node.startY}%`} r={node.size} fill="#06b6d4" filter="url(#glow)" animate={{ cx: [`${node.startX}%`, `${node.endX}%`, `${node.startX}%`], cy: [`${node.startY}%`, `${node.endY}%`, `${node.startY}%`], opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }} transition={{ duration: node.duration, delay: node.delay, repeat: Infinity, ease: "easeInOut" }} /> </g> ))}
      </svg>
      <div className="absolute inset-0 opacity-[0.2] mix-blend-overlay z-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }} />
    </div>
  );
};

const InfiniteCarousel = () => {
  const logos = Array.from({ length: 8 }, (_, i) => `/socios/Partners_${i + 1}.png`);
  return (
    <div className="relative pt-48 pb-32 bg-transparent overflow-hidden z-30 flex flex-col items-center gap-24">
      <div className="relative z-30 px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 uppercase relative inline-block">
            EMPRESAS IMPULSADAS POR NUESTRO TALENTO
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></span>
        </h3>
      </div>
      <div className="w-full relative overflow-hidden mb-12">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="flex w-full overflow-hidden group">
            <div className="flex animate-infinite-scroll group-hover:[animation-play-state:paused] items-center [animation-duration:120s]">
                {[...logos, ...logos, ...logos].map((logo, idx) => (
                <div key={idx} className="flex-shrink-0 w-72 mx-8 flex items-center justify-center transition-all duration-500 hover:scale-105">
                     <Image src={logo} alt={`Partner logo ${idx}`} width={220} height={112} className="max-w-[220px] max-h-28 object-contain opacity-100 drop-shadow-md" unoptimized />
                </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

// --- SECCIÓN METODOLOGÍA 360 MEJORADA ---
const ForCompaniesSection = ({ navigateTo }: { navigateTo: (page: string) => void }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) { controls.start("visible"); }
  }, [isInView, controls]);

  const iconsList = [
    { Icon: Search, color: 'cyan' }, { Icon: UserCheck, color: 'blue' }, { Icon: FileText, color: 'indigo' },
    { Icon: ShieldCheck, color: 'violet' }, { Icon: Briefcase, color: 'fuchsia' }, { Icon: TrendingUp, color: 'rose' }
  ];
  const radius = 220; 

  return (
    <section className="py-32 bg-white relative overflow-hidden z-30" id="empresas" ref={containerRef}>
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/5 to-transparent pointer-events-none z-10" />
      {/* Fondo Sliding */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 overflow-hidden">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 30 }} className="whitespace-nowrap font-black text-[20vw] leading-none text-slate-200/30 select-none" style={{ willChange: "transform" }}>N/\N N/\N N/\N N/\N</motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          <div className="h-fit lg:sticky lg:top-32 order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100/80 backdrop-blur-sm text-slate-900 text-[11px] font-bold uppercase tracking-widest mb-8 border border-slate-200 shadow-sm">Soluciones Corporativas</div>
            <h2 className="text-6xl md:text-7xl font-black mb-8 leading-[0.95] text-slate-900 tracking-tighter">Certeza <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">JURÍDICA</span></h2>
            <p className="text-slate-600 text-xl mb-12 font-light leading-relaxed">Eliminamos el riesgo de responsabilidad solidaria mediante una ejecución impecable de la normativa REPSE.</p>
            <ul className="space-y-6 mb-12">
              {["Cero riesgo de Responsabilidad Solidaria", "Deducibilidad Fiscal 100% Garantizada", "Entregables mensuales (SAT/IMSS)", "Atención a Requerimientos"].map((item, i) =>(
                <li key={i} className="flex items-center gap-4 text-lg text-slate-700 font-medium">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 shadow-sm border border-green-200"><CheckCircle size={16} strokeWidth={3} /></div>{item}
                </li>
              ))}
            </ul>
            <ModernButton onClick={() => navigateTo('contacto')}>Solicitar Auditoría</ModernButton>
          </div>

          <div className="flex flex-col gap-10 order-1 lg:order-2">
            
            {/* Título FUERA de la caja, sobre el fondo blanco */}
            <div className="relative z-10 pl-4">
                <h3 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter drop-shadow-sm mb-2">Metodología 360°</h3>
                <div className="h-2 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-4"/>
                <p className="text-slate-500 text-xl font-light">Ciclo continuo de calidad y cumplimiento normativo.</p>
            </div>

            {/* Contenedor de Animación */}
            <div className={`p-8 rounded-[3rem] bg-white/40 border border-white/60 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden backdrop-blur-sm`}>
               <div className="p-4 flex items-center justify-center min-h-[500px] relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50 pointer-events-none" />
                  
                  <div className="relative w-full h-full flex items-center justify-center z-10">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[420px] h-[420px] rounded-full border border-slate-200/60 dashed-border animate-spin-slow opacity-70" />
                        <div className="absolute w-[320px] h-[320px] rounded-full border border-cyan-200/40 opacity-50" />
                      </div>

                      {/* CONTENEDOR GIRATORIO */}
                      <motion.div
                        animate={controls}
                        initial="hidden"
                        variants={{
                            hidden: { rotate: 0 },
                            visible: { rotate: 360, transition: { rotate: { repeat: Infinity, duration: 40, ease: "linear" } } }
                        }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        {iconsList.map(({ Icon, color }, idx) => {
                            const angle = (idx / iconsList.length) * 2 * Math.PI; 
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;

                            return (
                                <motion.div 
                                    key={idx}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0 },
                                        visible: { opacity: 1, scale: 1, transition: { delay: idx * 0.2, duration: 0.8, ease: "backOut" } }
                                    }}
                                    // POSICIONAMIENTO DEL WRAPPER (Rota con el padre)
                                    style={{ x, y }}
                                    className="absolute flex items-center justify-center z-20"
                                >
                                    {/* CONTRA-ROTACIÓN: Gira -360 para que el icono siempre mire arriba */}
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                                        className={`w-20 h-20 ${LIQUID_3D_BUTTON} flex items-center justify-center text-slate-600 hover:text-${color}-600 transition-colors duration-300 group/icon cursor-pointer`}
                                    >
                                        <div className={`absolute inset-2 rounded-2xl bg-${color}-400/20 blur-md opacity-0 group-hover/icon:opacity-100 transition-opacity`}/>
                                        <Icon size={28} strokeWidth={2} className="relative z-10"/>
                                    </motion.div>
                                </motion.div>
                            )
                        })}
                      </motion.div>
                      
                      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center p-8 w-44 h-44 flex flex-col justify-center items-center ${LIQUID_3D_BUTTON} shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-30 bg-gradient-to-br from-cyan-50 to-blue-50/50`}>
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 to-transparent rounded-3xl animate-pulse"/>
                        <div className="text-xs font-bold uppercase tracking-widest text-cyan-700 mb-1 relative">Eficacia</div>
                        <div className="text-3xl font-black text-slate-900 tracking-tight relative">TOTAL</div>
                      </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- SERVICIOS CON HEADER GIGANTE ---
const ServicesScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray<HTMLElement>('.service-panel', containerRef.current);
    const tl = gsap.timeline({
      scrollTrigger: { trigger: triggerRef.current, start: "top top", end: () => "+=" + (panels.length * 100) + "%", scrub: 1, pin: true, anticipatePin: 1, refreshPriority: 1, invalidateOnRefresh: true }
    });

    panels.forEach((panel, i) => {
      if (i === 0) return;
      tl.fromTo(panel, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, ease: "none" });
      const content = panel.querySelector('.panel-content');
      const img = panel.querySelector('.panel-img');
      if(content && img) { tl.from([content, img], { y: 50, opacity: 0, duration: 0.5, ease: "power2.out" }, "<0.2"); }
      if (i > 0) { tl.to(panels[i-1], { scale: 0.95, opacity: 0, filter: "blur(10px)", duration: 1 }, "<"); }
    });
  }, { scope: containerRef });

  return (
    // CAMBIO: BG-WHITE
    <section ref={triggerRef} className="relative bg-white z-20" id="servicios">
      
      <div className="absolute inset-0 pointer-events-none z-0">
        <OrganicFloatingIcons />
      </div>

      <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
        
        {/* HEADER GIGANTE Y STICKY */}
        <div className="absolute top-0 left-0 w-full z-50 pointer-events-none flex flex-col items-center pt-8 bg-gradient-to-b from-white via-white/80 to-transparent pb-12">
           <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center px-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">
                    <Activity size={12} /> Servicios
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none shadow-white drop-shadow-lg">
                    NUESTRA INFRAESTRUCTURA
                </h2>
           </motion.div>
        </div>

        {SOLUTIONS_DATA.map((item, index) => (
          <div 
            key={item.id}
            className="service-panel absolute inset-0 w-full h-full flex items-center justify-center p-4 md:p-8 pt-32" // Added padding top for header
            style={{ zIndex: index + 1 }}
          >
            <div className="w-full max-w-7xl h-[75vh] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 relative">
              <div className="panel-img w-full lg:w-1/2 relative flex justify-center items-center order-1 lg:order-1 h-[35vh] lg:h-auto">
                 <div className={`panel-aura absolute inset-0 bg-${item.color}-400/30 blur-[90px] rounded-full scale-75 lg:scale-90 animate-pulse z-0`} />
                 <Image src={item.img} alt={item.title} width={500} height={500} className="relative z-10 w-full h-full object-contain max-h-[400px] lg:max-h-[500px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.35)]" />
              </div>
              <div className={`panel-content w-full lg:w-1/2 ${MATTE_GLASS} p-6 md:p-12 relative z-20 flex flex-col justify-center order-2 lg:order-2 shadow-2xl h-fit lg:h-auto`}>
                  <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2 lg:mb-4">
                        <span className={`w-8 lg:w-12 h-[3px] bg-${item.color}-600 rounded-full`}></span>
                        <p className={`text-${item.color}-800 font-bold uppercase text-[10px] lg:text-xs tracking-[0.3em]`}>{item.subtitle}</p>
                    </div>
                    <h3 className="text-2xl md:text-5xl font-black text-slate-800 mb-4 lg:mb-6 tracking-tighter leading-none">{item.title}</h3>
                    <div className="mb-4 lg:mb-8 p-3 lg:p-4 rounded-3xl bg-white/50 border border-white shadow-inner flex items-center gap-4 backdrop-blur-sm">
                        <div>
                            <div className="text-2xl lg:text-3xl font-black text-slate-900">{item.statValue}</div>
                            <div className="text-[9px] lg:text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-1">{item.statLabel}</div>
                        </div>
                        <div className="h-8 w-[1px] bg-slate-300"></div>
                        <div className="text-[10px] lg:text-xs font-medium text-slate-600 leading-tight flex-1">{item.statDesc}</div>
                    </div>
                    <p className="text-slate-600 text-sm md:text-lg leading-relaxed font-light mb-4 lg:mb-6 hidden md:block">{item.desc}</p>
                    <ul className="space-y-2 border-t border-slate-200/60 pt-4">
                        {item.features.map((feat, fIdx) => ( <li key={fIdx} className="flex items-center gap-3 text-slate-800 text-xs lg:text-sm font-bold tracking-tight"><div className={`w-1.5 h-1.5 rounded-full bg-${item.color}-600 shadow-[0_0_10px_rgba(8,145,178,0.5)]`}></div>{feat}</li> ))}
                    </ul>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- MAIN ---
export default function HumanisApp() {
  const router = useRouter();
  const [showContact, setShowContact] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => { const timer = setTimeout(() => setIsLoaded(true), 10); return () => clearTimeout(timer); }, []);
  const navigateTo = (page: string) => { if (page === 'contacto') setShowContact(true); else if (page === 'empresas') router.push('/para-empresas'); else if (page === 'candidatos') router.push('/talento'); else router.push(`/${page}`); };

  return (
    <>
      <GlobalStyles />
      <ContactIntro isOpen={showContact} onClose={() => setShowContact(false)} />
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900 overflow-x-hidden">
        <Header showHeader={true} setShowContact={setShowContact} />
        <main className="pt-0">
            <section className="relative min-h-[100vh] lg:h-screen flex flex-col justify-center overflow-hidden z-10">
                <WhiteAtmosphericBackground />
                <div className="container mx-auto px-6 lg:px-12 relative z-10 flex-grow flex flex-col justify-center pt-28 lg:pt-20">
                     <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                          <div className={`w-full relative flex justify-center lg:justify-start transition-all duration-1000 delay-200 order-1 lg:order-1 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <div className="relative w-full max-w-[400px] lg:max-w-[700px]">
                                <Image src="/humanishero.png" alt="Humanis Hero" width={700} height={700} priority className="w-full h-auto object-contain drop-shadow-[0_0_35px_rgba(34,211,238,0.5)] z-20 relative"/>
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8, type: "spring" }} className="absolute bottom-0 right-0 lg:-right-8 lg:bottom-16 z-30 hidden md:flex">
                                    <div className="relative flex items-center gap-5 p-5 pr-8 bg-white/70 backdrop-blur-2xl border border-white/80 rounded-3xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12),0_10px_20px_-5px_rgba(0,0,0,0.05)] hover:scale-105 transition-transform duration-300">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30"><Users size={24} strokeWidth={2.5} /></div>
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2 mb-1"><span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span></span><span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Status: Activo</span></div>
                                            <div className="flex items-baseline gap-1.5"><span className="text-4xl font-black text-slate-900 tracking-tight leading-none">128</span><span className="text-sm font-bold text-slate-600">Agentes Activos</span></div>
                                            <div className="text-xs text-slate-400 font-medium mt-0.5">Colocados actualmente</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        <div className={`w-full text-center lg:text-left transition-all duration-1000 order-2 lg:order-2 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-md border border-slate-200 text-slate-800 text-[11px] font-bold uppercase tracking-widest mb-8 mx-auto lg:mx-0 shadow-sm ring-1 ring-white/50"><Activity size={14} className="text-cyan-600" />Capital Humano de Nueva Generación</div>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-4 leading-[0.95] tracking-tighter">Talento <br/><RotatingText /></h1>
                            <p className="text-slate-600 text-lg md:text-xl lg:text-2xl max-w-xl mx-auto lg:mx-0 mb-12 font-light leading-relaxed">Ingeniería de personal y blindaje jurídico. <br className="hidden lg:block"/><strong className="text-slate-900 font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">Redefiniendo la excelencia operativa.</strong></p>
                            <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
                                <ModernButton onClick={() => navigateTo('empresas')}>Soy Empresa</ModernButton>
                                <ModernButton secondary onClick={() => navigateTo('candidatos')}>Soy Candidato</ModernButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <InfiniteCarousel />
            <ServicesScrollSection />
            <div className="h-32 bg-white relative z-10" />
            <section className="bg-white relative overflow-hidden z-10">
                <div className="text-center pt-32 pb-16 relative z-10">
                    <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">Ruta de Evolución</h2>
                    <p className="text-slate-500 text-xl max-w-2xl mx-auto font-light">Nuestro proceso integral paso a paso, diseñado para la perfección.</p>
                </div>
                <ScrollPathSection />
            </section>
            <ForCompaniesSection navigateTo={navigateTo} />
            <div className="py-40 bg-white text-center relative overflow-hidden z-10">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
                <div className="relative z-10">
                    <h2 className="text-6xl md:text-7xl font-black mb-12 text-slate-900 tracking-tighter">¿Listo para el siguiente nivel?</h2>
                    <ModernButton onClick={() => setShowContact(true)}>Iniciar Transformación</ModernButton>
                </div>
            </div>
        </main>
        <Footer />
      </div>
      <style jsx global>{`
        .dashed-border { background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100%' ry='100%' stroke='%23cbd5e1' stroke-width='2' stroke-dasharray='10%2c 10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e"); border: none; }
      `}</style>
    </>
  );
}