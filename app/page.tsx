'use client';
import React, { useState, useEffect, useRef } from 'react';
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

// --- ESTILOS REUTILIZABLES (Design Tokens) ---

// Efecto "Liquid Glass": Translúcido, Blur fuerte, Borde sutil, Sombra interna (highlight 3D) y Sombra externa suave.
const LIQUID_GLASS = "bg-white/60 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.05)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)] rounded-[2rem]";

// Efecto Hover para Glass: Elevar, intensificar borde y sombra.
const LIQUID_GLASS_HOVER = "transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:bg-white/70 hover:border-white/80";

// Efecto Glow para Imágenes: Luz trasera difusa.
const IMAGE_GLOW = "relative z-10 before:absolute before:-inset-4 before:bg-gradient-to-r before:from-cyan-400/20 before:to-indigo-400/20 before:rounded-[3rem] before:blur-2xl before:-z-10";

// PARTICLE RING CANVAS (Mantenido igual por funcionalidad, optimizado render)
const ParticleRing = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const centerRef = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
        mouseRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        centerRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    const PARTICLE_COUNT = 2500; // Optimizado ligeramente
    const HOLE_RADIUS = 280;
    const MAX_RADIUS = 1800;
    const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5)); 
    
    const particles: any[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const t = i / PARTICLE_COUNT;
        const angle = i * GOLDEN_ANGLE;
        const dist = HOLE_RADIUS + (MAX_RADIUS - HOLE_RADIUS) * Math.pow(t, 0.55);
        
        particles.push({
            angle: angle,
            dist: dist,
            size: 0.8 + Math.random() * 1.5, 
            speed: 0.00002 + (1 - t) * 0.00008, 
            alpha: Math.max(0, 0.6 * (1 - Math.pow(t, 0.4))),
            variant: Math.random() > 0.9 
        });
    }

    let animationId: number;
    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.005;

      const screenCenterX = width / 2;
      const screenCenterY = height / 2;
      const offsetX = mouseRef.current.x - screenCenterX;
      const offsetY = mouseRef.current.y - screenCenterY;
      const targetX = screenCenterX + offsetX * 0.1; 
      const targetY = screenCenterY + offsetY * 0.1;
      const ease = 0.02; // Más suave
      centerRef.current.x += (targetX - centerRef.current.x) * ease;
      centerRef.current.y += (targetY - centerRef.current.y) * ease;
      const cx = centerRef.current.x;
      const cy = centerRef.current.y;

      particles.forEach(p => {
        p.angle += p.speed;
        const breathing = Math.sin(time + p.dist * 0.005) * 3;
        const x = cx + Math.cos(p.angle) * (p.dist + breathing);
        const y = cy + Math.sin(p.angle) * (p.dist + breathing);

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        if (p.variant) {
            ctx.fillStyle = `rgba(6, 182, 212, ${p.alpha})`;
        } else {
            ctx.fillStyle = `rgba(15, 23, 42, ${p.alpha})`;
        }
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-0 opacity-90" 
    />
  );
};

// MODERN BUTTON
const ModernButton = ({ children, onClick, secondary = false }: any) => (
  <button 
    onClick={onClick} 
    className={`
      relative group px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-500 overflow-hidden
      ${secondary 
        ? 'bg-white/50 backdrop-blur-md border border-slate-300 text-slate-800 hover:bg-white hover:border-slate-900 shadow-lg' // Glass style button
        : 'bg-slate-900 text-white shadow-2xl shadow-slate-900/20 hover:shadow-cyan-500/30 hover:-translate-y-1'
      }
    `}
  >
    <span className="relative z-10 flex items-center gap-2">
      {children}
      {!secondary && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
    </span>
    {!secondary && (
      <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-cyan-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    )}
  </button>
);

// ROTATING TEXT COMPONENT (Optimizado - Task 3)
const RotatingText = () => {
  const words = ['FUTURISTA', 'INNOVADOR', 'ESTRATÉGICO', 'DISRUPTIVO', 'EXCEPCIONAL'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000); // 3 Segundos exactos
    return () => clearInterval(interval);
  }, []);

  return (
    // min-w-[550px] para evitar CLS (Cumulative Layout Shift) cuando cambia la palabra
    <span className="relative inline-block min-w-[300px] sm:min-w-[550px] text-left h-[1.1em] align-top overflow-hidden"> 
      {words.map((word, idx) => (
        <span
          key={idx}
          className={`absolute left-0 top-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900 block
            ${idx === currentIndex
              ? 'opacity-100 translate-y-0 blur-0'
              : idx === (currentIndex - 1 + words.length) % words.length
              ? 'opacity-0 -translate-y-12 blur-sm' // Salida hacia arriba
              : 'opacity-0 translate-y-12 blur-sm' // Entrada desde abajo
            }`}
        >
          {word}
        </span>
      ))}
    </span>
  );
};

// INFINITE CAROUSEL (Refactorizado - Task 4)
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

  // Duplicamos los logos suficientes veces para que el scroll sea infinito y suave
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos]; 

  return (
    <div className="py-20 bg-white/50 border-b border-slate-100 relative overflow-hidden backdrop-blur-sm z-20">
      {/* Máscaras de gradiente lateral para suavizar entrada/salida */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
      
      {/* Contenedor del scroll */}
      <div className="flex w-full overflow-hidden group">
        <div className="flex animate-infinite-scroll group-hover:[animation-play-state:paused] items-center">
            {repeatedLogos.map((logo, idx) => (
              <div 
                key={idx}
                className="flex-shrink-0 w-48 mx-8 flex items-center justify-center grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-110"
              >
                <img src={logo} alt={`Client logo ${idx}`} className="max-w-[120px] max-h-12 object-contain" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

// JUMPING ICONS (Optimizado visualmente)
const JumpingIcons = () => {
  const icons = [Code, Terminal, Database, Server, Cpu, Cloud, ShieldCheck, Users, Briefcase, Zap, Globe, Search, BarChart3, Award, FileText, CheckCircle];
  
  return (
    <div className="flex flex-wrap gap-8 justify-center py-16 px-8 max-w-6xl mx-auto">
      {icons.map((Icon, i) => (
        <div 
          key={i} 
          // Aplicando Liquid Glass mini
          className={`group w-20 h-20 bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-2xl flex items-center justify-center text-slate-400 hover:text-cyan-600 transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer hover:bg-white/80 hover:shadow-[0_12px_40px_rgba(6,182,212,0.2)]`}
          style={{ animationDelay: `${i * 0.05}s` }}
        >
          <Icon size={32} className="transition-transform group-hover:rotate-12" />
        </div>
      ))}
    </div>
  );
};

// SERVICES SECTION (Actualizada a Liquid Glass - Task 1)
const ServicesSection = () => (
  <section className="py-32 relative bg-white overflow-hidden" id="servicios">
    <ParticleMorphCanvas />
    <div className="container mx-auto px-6 relative z-10">
      <div className="mb-16 text-center">
        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-slate-900 tracking-tight">Soluciones de Capital Humano</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-xl font-light">Infraestructura legal y operativa de clase mundial.</p>
      </div>
      
      <JumpingIcons />
      
      <div className="grid md:grid-cols-4 gap-8 mt-20">
        {[
          { icon: <Search size={32} />, title: "Headhunting", desc: "Ejecutivos y TI." }, 
          { icon: <Briefcase size={32} />, title: "Staffing", desc: "Personal REPSE." }, 
          { icon: <FileText size={32} />, title: "Nómina", desc: "Cálculo preciso." }, 
          { icon: <ShieldCheck size={32} />, title: "Compliance", desc: "Blindaje legal." }
        ].map((item, idx) => (
          <div 
            key={idx} 
            className={`${LIQUID_GLASS} ${LIQUID_GLASS_HOVER} p-10 group cursor-default`} // Aplicando la clase constante
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="text-slate-900 mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:text-cyan-600 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner">
                {item.icon}
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-900">{item.title}</h3>
            <p className="text-slate-500 leading-relaxed font-light">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// FOR COMPANIES SECTION (Actualizada con Glass y Glow)
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

        {/* Bloque Metodología 360 con Liquid Glass */}
        <div className="flex flex-col gap-10 order-1 lg:order-2">
          <div className={`${LIQUID_GLASS} overflow-hidden transform transition-all duration-700 hover:scale-[1.01] hover:shadow-[0_40px_80px_rgba(79,70,229,0.15)]`}>
             <div className="p-12 border-b border-slate-100/50 bg-white/30 backdrop-blur-md">
               <h3 className="text-4xl font-black text-slate-900 tracking-tight">Metodología 360°</h3>
               <p className="text-slate-500 text-lg mt-4 font-light">Ciclo continuo de calidad y cumplimiento normativo.</p>
             </div>
             
             <div className="p-16 flex items-center justify-center bg-white/20 min-h-[500px] relative">
                {/* SVG Decorativo de fondo */}
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
                    
                    {/* Nodos flotantes 3D */}
                    {[
                      { Icon: Search, position: 'left-[10%] top-[25%]' },
                      { Icon: UserCheck, position: 'left-1/2 top-[10%] -translate-x-1/2' },
                      { Icon: FileText, position: 'right-[10%] top-[25%]' },
                      { Icon: ShieldCheck, position: 'right-[10%] bottom-[25%]' },
                      { Icon: Briefcase, position: 'left-1/2 bottom-[10%] -translate-x-1/2' },
                      { Icon: TrendingUp, position: 'left-[10%] bottom-[25%]' },
                    ].map(({ Icon, position }, idx) => (
                      <div 
                        key={idx}
                        className={`absolute ${position} w-16 h-16 ${LIQUID_GLASS} flex items-center justify-center text-slate-700 hover:text-cyan-600 hover:scale-110 transition-all duration-500 cursor-pointer shadow-lg`}
                      >
                        <Icon size={24} />
                      </div>
                    ))}
                    
                    {/* Centro Glass */}
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

// MAIN APP
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
      
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900">
        
        <Header 
          showHeader={showHeader}
          currentPage={currentPage}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          navigateTo={navigateTo}
          setShowContact={setShowContact}
        />

        <main className="pt-20">
            
            {(currentPage === 'inicio' || currentPage === 'home') && (
            <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-white">
                <ParticleRing />
                
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-50/50 via-white/80 to-white pointer-events-none z-0" />

                <div 
                    className={`container mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10 transition-all duration-1000 ease-out transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    {/* Columna de Imagen con borde de luz y Liquid Glass */}
                    <div className="relative order-2 lg:order-1 group perspective-1000">
                        
                        {/* Task 2: Borde de luz sutil (Glow) detrás de la imagen */}
                        <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-400/30 to-purple-400/30 rounded-[2.6rem] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-1000" />
                        
                        <div className={`relative z-10 rounded-[2.5rem] overflow-hidden bg-white transform transition-transform duration-700 group-hover:rotate-1 group-hover:scale-[1.01] shadow-2xl border border-white/60`}
                        >
                            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" alt="Corporate" className="w-full h-auto object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700" />
                        </div>

                        {/* Badge flotante con Liquid Glass Mejorado (Task 1) */}
                        <div className={`absolute -bottom-10 -right-10 ${LIQUID_GLASS} p-8 z-30 animate-float flex items-center gap-5 max-w-xs`}>
                            <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-white shadow-lg shadow-slate-900/30">
                                <TrendingUp size={28} />
                            </div>
                            <div>
                                <div className="text-4xl font-black text-slate-900">98%</div>
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Retención</div>
                            </div>
                        </div>
                    </div>

                    {/* Columna de Texto con palabras rotativas */}
                    <div className="relative z-10 order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-slate-200 text-slate-900 text-[11px] font-bold uppercase tracking-widest mb-10 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                            Capital Humano de Nueva Generación
                        </div>
                        
                        {/* Task 3: Talento + 5 palabras rotando */}
                        <h1 className="text-7xl lg:text-8xl font-black text-slate-900 mb-10 leading-[0.9] tracking-tighter">
                            Talento <br/>
                            <RotatingText />
                        </h1>
                        
                        <p className="text-slate-600 text-2xl max-w-lg mb-12 font-light leading-relaxed">
                            Ingeniería de personal y blindaje jurídico. <strong className="text-slate-900 font-bold">Redefiniendo la excelencia operativa.</strong>
                        </p>
                        
                        <div className="flex flex-wrap gap-6">
                            <ModernButton onClick={() => navigateTo('empresas')}>
                                Soy Empresa
                            </ModernButton>
                            {/* CTA tipo "Glass" visualmente distinto */}
                            <button 
                                onClick={() => navigateTo('candidatos')}
                                className="px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-500 border border-slate-200 bg-white/40 backdrop-blur-md text-slate-700 hover:bg-white hover:text-slate-900 hover:shadow-lg hover:-translate-y-1"
                            >
                                Soy Candidato
                            </button>
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
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </>
  );
}