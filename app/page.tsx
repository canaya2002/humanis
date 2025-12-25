'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  Briefcase, ShieldCheck, 
  FileText, CheckCircle, UserCheck, 
  TrendingUp, Search,
  Users, Activity,
  Calculator, Scale, Stethoscope, HardHat, PenTool, Smartphone, Cpu,
  Server, Cloud, Terminal, Globe, Zap, ArrowRight, Code, Database 
} from 'lucide-react';

// Importa tus componentes externos
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';
import ContactIntro from './components/ContactIntro';
import ScrollPathSection from './components/ScrollPathSection';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// --- DATOS DE INFRAESTRUCTURA ---
const SOLUTIONS_DATA = [
  { 
    id: 1, title: "Headhunting Estratégico", subtitle: "Ejecutivos & Tecnología", 
    statLabel: "Eficacia", statValue: "98%", statDesc: "Garantía por contrato", 
    features: ["C-Level Directo", "Talento Nicho", "Psicometría IA"], 
    desc: "Accede al 1% del talento que realmente marca la diferencia. Metodología de inteligencia de mercado.", 
    img: "/talentos/Talento_1.png", color: "slate" 
  }, 
  { 
    id: 2, title: "Staffing Flexible", subtitle: "Personal REPSE", 
    statLabel: "Cumplimiento", statValue: "100%", statDesc: "Auditoría IMSS/SAT", 
    features: ["REPSE Total", "Gestión Beneficios", "Sustitución < 48hrs"], 
    desc: "Escala tu fuerza laboral sin riesgos. Equipos listos para integrarse, gestionando toda la carga.", 
    img: "/talentos/Talento_2.png", color: "slate" 
  }, 
  { 
    id: 3, title: "Gestión de Nómina 4.0", subtitle: "Precisión Financiera", 
    statLabel: "Dispersión", statValue: "99.9%", statDesc: "Automatización bancaria", 
    features: ["Cálculo Exacto", "Timbrado Masivo", "Reportes Live"], 
    desc: "Transforma tu nómina en un proceso impecable. Garantizamos deducibilidad fiscal total.", 
    img: "/talentos/Talento_3.png", color: "slate" 
  }, 
  { 
    id: 4, title: "Compliance & Legal", subtitle: "Blindaje Corporativo", 
    statLabel: "Riesgo", statValue: "0%", statDesc: "Defensa jurídica", 
    features: ["Auditorías STPS", "Defensa Patronal", "Gestión Contratos"], 
    desc: "Escudo jurídico proactivo que neutraliza riesgos laborales y asegura la continuidad.", 
    img: "/talentos/Talento_4.png", color: "slate" 
  }
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
    <span className="relative inline-block min-w-[300px] md:min-w-[680px] text-left h-[1.2em] align-top overflow-visible -mb-2"> 
      {words.map((word, idx) => (
        <motion.span
          key={idx} initial={false} animate={{ opacity: idx === currentIndex ? 1 : 0, y: idx === currentIndex ? 0 : idx === (currentIndex - 1 + words.length) % words.length ? -50 : 50, filter: idx === currentIndex ? 'blur(0px)' : 'blur(4px)' }} transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }} className="absolute left-0 top-0 w-full bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-cyan-600 to-slate-900 block px-1"
        > {word} </motion.span>
      ))}
    </span>
  );
};

const InfiniteCarousel = () => {
  const logos = Array.from({ length: 8 }, (_, i) => `/socios/Partners_${i + 1}.png`);
  
  // SEO: Nombres Reales de las Empresas para el ALT
  const partnerNames = [
    "Unilever", 
    "P&G", 
    "Pepsico", 
    "FEMSA", 
    "Nestle", 
    "Walmart", 
    "Randstad", 
    "Oxxo"  
  ];

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
                {[...logos, ...logos, ...logos].map((logo, idx) => {
                    const realIdx = idx % logos.length;
                    return (
                        <div key={idx} className="flex-shrink-0 w-72 mx-8 flex items-center justify-center transition-all duration-500 hover:scale-105">
                            <Image 
                                src={logo} 
                                alt={`Logo de ${partnerNames[realIdx] || 'Socio Estratégico'} - Cliente de Humanis`}
                                width={220} 
                                height={112} 
                                className="max-w-[220px] max-h-28 object-contain opacity-100 drop-shadow-md" 
                                unoptimized 
                            />
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </div>
  );
};

// --- METODOLOGÍA 360 ---
const ForCompaniesSection = ({ navigateTo }: { navigateTo: (page: string) => void }) => {
  const containerRef = useRef(null);
  
  const LIQUID_3D_BUTTON = "bg-gradient-to-br from-slate-50 to-slate-100 backdrop-blur-xl border-[3px] border-white shadow-[0_15px_35px_rgba(0,0,0,0.15),inset_2px_2px_5px_rgba(255,255,255,1),inset_-2px_-2px_5px_rgba(0,0,0,0.05)] rounded-3xl";

  const iconsList = [
    { Icon: Search, hex: 'text-slate-900' }, 
    { Icon: UserCheck, hex: 'text-slate-900' }, 
    { Icon: FileText, hex: 'text-slate-900' },
    { Icon: ShieldCheck, hex: 'text-slate-900' }, 
    { Icon: Briefcase, hex: 'text-slate-900' }, 
    { Icon: TrendingUp, hex: 'text-slate-900' }
  ];
  const radius = 240;

  return (
    <section className="py-32 bg-white relative overflow-hidden z-30" id="empresas" ref={containerRef}>
      
      <div className="absolute inset-0 z-0 bg-white pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          <div className="h-fit lg:sticky lg:top-32 order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100/80 backdrop-blur-sm text-slate-900 text-[11px] font-bold uppercase tracking-widest mb-8 border border-slate-200 shadow-sm">Soluciones Corporativas</div>
            <h2 className="text-6xl md:text-7xl font-black mb-8 leading-[0.95] text-slate-900 tracking-tighter">
                Certeza <br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-cyan-600 to-slate-900">JURÍDICA</span>
            </h2>
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
            
            <div className="relative h-[450px] md:h-[600px] w-full flex items-center justify-center">
               
               <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-slate-100" />
               <div className="absolute w-[220px] h-[220px] md:w-[350px] md:h-[350px] rounded-full border border-dashed border-slate-200" />
               
               <div className={`absolute z-40 p-6 w-36 h-36 md:w-48 md:h-48 flex flex-col justify-center items-center ${LIQUID_3D_BUTTON} hover:scale-105 transition-transform duration-300`}>
                   <Activity className="text-slate-900 mb-2" size={32} />
                   <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 mb-1 relative">Eficacia</div>
                   <div className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight relative">TOTAL</div>
               </div>

               <motion.div
                 animate={{ rotate: 360 }}
                 transition={{ repeat: Infinity, duration: 40, ease: "linear" }} 
                 className="absolute inset-0 flex items-center justify-center pointer-events-none scale-75 md:scale-100"
               >
                 {iconsList.map(({ Icon, hex }, idx) => {
                     const angle = (idx / iconsList.length) * 2 * Math.PI; 
                     const x = Math.cos(angle) * radius;
                     const y = Math.sin(angle) * radius;
                     return (
                         <div 
                             key={idx} 
                             style={{ transform: `translate(${x}px, ${y}px)` }} 
                             className="absolute flex items-center justify-center z-30 pointer-events-auto"
                         >
                             <motion.div 
                                 animate={{ rotate: -360 }} 
                                 transition={{ repeat: Infinity, duration: 40, ease: "linear" }} 
                                 className={`w-16 h-16 md:w-20 md:h-20 ${LIQUID_3D_BUTTON} flex items-center justify-center ${hex} hover:scale-110 transition-all duration-300 cursor-pointer`}
                             >
                                 <Icon size={28} strokeWidth={2} />
                             </motion.div>
                         </div>
                     )
                 })}
               </motion.div>
               
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- FONDO DE COLUMNAS DE CARRERAS ---
const CareerIconsBackground = () => {
    // Aquí es donde ocurría el error: Code y Database ya están importados
    const leftIcons = [Code, Cpu, Database, Server, Cloud, Terminal, HardHat, Zap, Globe, Smartphone];
    const rightIcons = [Briefcase, UserCheck, FileText, Calculator, Scale, ShieldCheck, Stethoscope, Users, Search, PenTool];

    const Column = ({ icons, align }: { icons: any[], align: 'left' | 'right' }) => (
        <div className={`absolute top-0 bottom-0 ${align === 'left' ? 'left-4 md:left-10' : 'right-4 md:right-10'} w-16 md:w-24 overflow-hidden z-0 opacity-70`}>
            <div className="relative w-full h-full">
                <motion.div 
                    className="flex flex-col gap-12 items-center" 
                    animate={{ y: align === 'left' ? [0, -1000] : [-1000, 0] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                    {[...icons, ...icons, ...icons, ...icons].map((Icon, i) => (
                        <div key={i} className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white border border-slate-300 flex items-center justify-center text-slate-400 shadow-sm">
                            <Icon size={24} />
                        </div>
                    ))}
                </motion.div>
            </div>
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent z-10" />
        </div>
    );

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <Column icons={leftIcons} align="left" />
            <Column icons={rightIcons} align="right" />
        </div>
    );
};

// --- SERVICIOS ---
const ServicesScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray<HTMLElement>('.service-panel', containerRef.current);
    const tl = gsap.timeline({
      scrollTrigger: { 
          trigger: triggerRef.current, 
          start: "top top", 
          end: () => "+=" + (panels.length * 150) + "%", 
          scrub: 1, 
          pin: true, 
          anticipatePin: 1, 
          invalidateOnRefresh: true 
      }
    });

    panels.forEach((panel, i) => {
      if (i === 0) return;
      const card = panel.querySelector('.service-card');
      const img = panel.querySelector('.service-img');
      tl.fromTo(panel, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 });
      if(card && img) { 
          tl.from(card, { y: 60, opacity: 0, duration: 1.2, ease: "power3.out" }, "<");
          tl.from(img, { scale: 0.9, opacity: 0, duration: 1.2, ease: "power3.out" }, "<0.1");
      }
      if (i > 0) { 
          tl.to(panels[i-1], { autoAlpha: 0, scale: 0.95, duration: 0.8 }, "<"); 
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={triggerRef} className="relative bg-white z-20" id="servicios">
      <CareerIconsBackground />
      <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full z-50 pointer-events-none flex flex-col items-center pt-32 bg-gradient-to-b from-white via-white/95 to-transparent pb-24">
           <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center px-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-4">
                    <Activity size={12} /> Infraestructura
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none drop-shadow-sm">
                    SOLUCIONES INTEGRALES
                </h2>
           </motion.div>
        </div>

        {SOLUTIONS_DATA.map((item, index) => (
          <div key={item.id} className="service-panel absolute inset-0 w-full h-full flex items-center justify-center invisible" style={{ zIndex: index + 1 }}>
            <div className="w-full h-full pt-48 pb-8 px-4 md:px-12 lg:px-24 flex flex-col justify-center relative z-10">
                <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-20 h-full lg:h-auto">
                    <div className="service-img w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-1 h-[30vh] md:h-[40vh] lg:h-auto relative">
                        <div className="absolute inset-0 bg-slate-200/50 blur-[80px] rounded-full scale-75 animate-pulse z-0" />
                        <Image 
                            src={item.img} 
                            // SEO: Alt descriptivo
                            alt={`Servicio Humanis: ${item.title} - ${item.desc}`}
                            width={600} 
                            height={600} 
                            className="relative z-10 object-contain w-auto h-full max-h-[250px] md:max-h-[350px] lg:max-h-[500px] drop-shadow-2xl hover:scale-105 transition-transform duration-700" 
                        />
                    </div>
                    <div className="service-card w-full lg:w-1/2 order-2 lg:order-2 flex justify-center">
                        <div className="bg-white border border-slate-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-[2rem] p-6 md:p-10 lg:p-12 w-full relative">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-[2px] bg-slate-900 rounded-full"></span>
                                <h3 className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.3em]">{item.subtitle}</h3>
                            </div>
                            <div className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter leading-none">{item.title}</div>
                            <div className="mb-6 p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-4">
                                <div className="text-center px-2">
                                    <div className="text-2xl font-black text-slate-900">{item.statValue}</div>
                                    <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">{item.statLabel}</div>
                                </div>
                                <div className="h-8 w-[1px] bg-slate-200"></div>
                                <div className="text-[11px] font-medium text-slate-600 leading-tight flex-1">{item.statDesc}</div>
                            </div>
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium mb-6 text-balance">{item.desc}</p>
                            <ul className="space-y-2 border-t border-slate-100 pt-4">
                                {item.features.map((feat, fIdx) => ( <li key={fIdx} className="flex items-center gap-3 text-slate-800 text-xs md:text-sm font-bold tracking-tight"><div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>{feat}</li> ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function HumanisApp() {
  const router = useRouter();
  const [showContact, setShowContact] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => { const timer = setTimeout(() => setIsLoaded(true), 10); return () => clearTimeout(timer); }, []);
  const navigateTo = (page: string) => { if (page === 'contacto') setShowContact(true); else if (page === 'empresas') router.push('/para-empresas'); else if (page === 'candidatos') router.push('/talento'); else router.push(`/${page}`); };

  // SEO: Schema para la Homepage (ItemList de servicios)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": SOLUTIONS_DATA.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.desc,
        "provider": {
          "@type": "Organization",
          "name": "Humanis",
          "url": "https://www.humanis.com.mx"
        },
        "serviceType": service.subtitle,
        "areaServed": "MX",
        "offers": {
          "@type": "Offer",
          "description": service.features.join(", ")
        }
      }
    }))
  };

  return (
    <>
      <GlobalStyles />
      
      {/* INYECCIÓN DE SCHEMA: SERVICIOS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <ContactIntro isOpen={showContact} onClose={() => setShowContact(false)} />
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900 overflow-x-hidden">
        <Header showHeader={true} setShowContact={setShowContact} />
        <main className="pt-0">
            {/* HERO SECTION */}
            <section className="relative min-h-[100vh] lg:h-screen flex flex-col justify-center overflow-hidden z-10">
                <div className="absolute inset-0 bg-white z-0" />
                <div className="container mx-auto px-6 lg:px-12 relative z-10 flex-grow flex flex-col justify-center pt-28 lg:pt-20">
                      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                           <div className={`w-full relative flex justify-center lg:justify-start transition-all duration-1000 delay-200 order-1 lg:order-1 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                             <div className="relative w-full max-w-[400px] lg:max-w-[700px]">
                                 
                                 {/* Aura Glow */}
                                 <Image 
                                    src="/humanishero.png" 
                                    alt="Humanis - Plataforma de Gestión de Talento y Headhunting en México" 
                                    width={700} 
                                    height={700} 
                                    priority 
                                    className="w-full h-auto object-contain z-20 relative drop-shadow-[0_0_25px_rgba(34,211,238,0.6)]" 
                                 />
                                 
                                 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8, type: "spring" }} className="absolute bottom-0 right-0 lg:-right-8 lg:bottom-16 z-30 hidden md:flex">
                                     <div className="relative flex items-center gap-5 p-5 pr-8 bg-white/80 backdrop-blur-2xl border border-slate-200 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300">
                                             <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-lg"><Users size={24} strokeWidth={2.5} /></div>
                                             <div className="flex flex-col">
                                                 <div className="flex items-center gap-2 mb-1"><span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span></span><span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Status: Activo</span></div>
                                                 <div className="flex items-baseline gap-1.5"><span className="text-4xl font-black text-slate-900 tracking-tight leading-none">128</span><span className="text-sm font-bold text-slate-600">Agentes</span></div>
                                             </div>
                                     </div>
                                 </motion.div>
                             </div>
                           </div>
                           <div className={`w-full text-center lg:text-left transition-all duration-1000 order-2 lg:order-2 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-800 text-[11px] font-bold uppercase tracking-widest mb-8 mx-auto lg:mx-0 shadow-sm"><Activity size={14} />Capital Humano 4.0</div>
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-4 leading-[0.95] tracking-tighter">Talento <br/><RotatingText /></h1>
                                <p className="text-slate-600 text-lg md:text-xl lg:text-2xl max-w-xl mx-auto lg:mx-0 mb-12 font-light leading-relaxed">Ingeniería de personal y blindaje jurídico. <strong className="text-slate-900 font-bold">Excelencia operativa.</strong></p>
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
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }} 
                        whileInView={{ opacity: 1, scale: 1 }} 
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "backOut" }}
                    >
                        <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">Ruta de Evolución</h2>
                        <p className="text-slate-500 text-xl max-w-2xl mx-auto font-light">Nuestro proceso integral paso a paso.</p>
                    </motion.div>
                </div>
                <ScrollPathSection />
            </section>
            
            <ForCompaniesSection navigateTo={navigateTo} />
            
            {/* CTA FINAL CON FONDO BLANCO */}
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
      <style jsx global>{`
        .dashed-border { background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100%' ry='100%' stroke='%23cbd5e1' stroke-width='2' stroke-dasharray='10%2c 10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e"); border: none; }
      `}</style>
    </>
  );
}