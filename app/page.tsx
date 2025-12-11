'use client';
import React, { useState, useEffect, useRef } from 'react';
import { 
  Briefcase, ShieldCheck, 
  FileText, CheckCircle, UserCheck, 
  TrendingUp, Search,
  Zap, Award, BarChart3, Users,
  Code, Terminal, Database, Server, Cpu, Cloud, Globe
} from 'lucide-react';

import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import GlobalStyles from '../app/components/GlobalStyles';
import ContactIntro from '../app/components/ContactIntro';
import ScrollPathSection from '../app/components/ScrollPathSection';
import ParticleMorphCanvas from '../app/components/ParticleMorphCanvas';

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

    // --- AJUSTES VISUALES ---
    const PARTICLE_COUNT = 1000; // Reducido para limpieza visual
    const HOLE_RADIUS = 220;     // Agujero mucho más grande y evidente
    const MAX_RADIUS = 1600;     // Se extiende más allá de la pantalla
    const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5)); 
    
    const particles: any[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const t = i / PARTICLE_COUNT;
        const angle = i * GOLDEN_ANGLE;
        
        // Distribución exponencial suave para que no se vea amontonado en el borde del agujero
        const dist = HOLE_RADIUS + (MAX_RADIUS - HOLE_RADIUS) * Math.pow(t, 0.65);
        
        particles.push({
            angle: angle,
            dist: dist,
            // Tamaño ligeramente más grande para compensar que hay menos puntos
            size: 1.5 + Math.random() * 1.5, 
            // Velocidad muy sutil
            speed: 0.00005 + (1 - t) * 0.0002, 
            // Alpha calculado para un degradado perfecto desde el centro
            alpha: Math.max(0, 0.6 * (1 - Math.pow(t, 0.4))),
            // Variación sutil de color (0 = Slate, 1 = Indigo muy oscuro)
            variant: Math.random() > 0.8 
        });
    }

    let animationId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const screenCenterX = width / 2;
      const screenCenterY = height / 2;

      // Movimiento limitado y lento
      const offsetX = mouseRef.current.x - screenCenterX;
      const offsetY = mouseRef.current.y - screenCenterY;
      const targetX = screenCenterX + offsetX * 0.12; // Se mueve aún menos (12%)
      const targetY = screenCenterY + offsetY * 0.12;

      // Inercia extrema (0.002)
      const ease = 0.002; 
      centerRef.current.x += (targetX - centerRef.current.x) * ease;
      centerRef.current.y += (targetY - centerRef.current.y) * ease;

      const cx = centerRef.current.x;
      const cy = centerRef.current.y;

      particles.forEach(p => {
        p.angle += p.speed;

        const x = cx + Math.cos(p.angle) * p.dist;
        const y = cy + Math.sin(p.angle) * p.dist;

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        
        // Color base slate-900 (15, 23, 42) con toques sutiles de índigo profundo
        if (p.variant) {
            ctx.fillStyle = `rgba(30, 27, 75, ${p.alpha})`; // Indigo-950 sutil
        } else {
            ctx.fillStyle = `rgba(15, 23, 42, ${p.alpha})`; // Slate-900
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
      className="particle-ring absolute inset-0 pointer-events-none z-0" 
    />
  );
};

// --- COMPONENTES AUXILIARES ---

const AntigravityButton = ({ children, onClick, className = "", secondary = false }: any) => (
  <button onClick={onClick} className={`antigravity-btn ${secondary ? 'secondary' : ''} ${className}`}>
    {children}
  </button>
);

// --- COMPONENTE CARRUSEL INFINITO ---
const InfiniteCarousel = () => (
    <div className="py-12 bg-white border-b border-slate-100">
        <div className="slider">
            <div className="slide-track">
                {[...Array(2)].map((_, i) => (
                    <React.Fragment key={i}>
                        <div className="slide"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" /></div>
                        <div className="slide"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" /></div>
                        <div className="slide"><img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" /></div>
                        <div className="slide"><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" /></div>
                        <div className="slide"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" /></div>
                        <div className="slide"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" alt="Tesla" /></div>
                        <div className="slide"><img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/ASANA_LOGO.png" alt="Asana" /></div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    </div>
);

// --- ICONOS SALTANDO ---
const JumpingIcons = () => (
    <div className="jumping-icons-container">
        {[Code, Terminal, Database, Server, Cpu, Cloud, ShieldCheck, Users, Briefcase, Zap, Globe, Search, BarChart3, Award, FileText, CheckCircle].map((Icon, i) => (
            <div key={i} className="j-icon-wrapper">
                <Icon size={32} />
            </div>
        ))}
    </div>
);

// --- SERVICES SECTION ---
const ServicesSection = () => (
    <section className="py-32 relative bg-white overflow-hidden" id="servicios">
        <ParticleMorphCanvas />
        <div className="container mx-auto px-6 relative z-10">
            <div className="mb-10 text-center">
                <h2 className="text-5xl font-black mb-4 text-slate-900 tracking-tight">Soluciones de Capital Humano</h2>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg">Infraestructura legal y operativa de clase mundial.</p>
            </div>
            <JumpingIcons />
            <div className="grid md:grid-cols-4 gap-6 mt-12">
                {[
                    { icon: <Search size={28} />, title: "Headhunting", desc: "Ejecutivos y TI." }, 
                    { icon: <Briefcase size={28} />, title: "Staffing", desc: "Personal REPSE." }, 
                    { icon: <FileText size={28} />, title: "Nómina", desc: "Cálculo preciso." }, 
                    { icon: <ShieldCheck size={28} />, title: "Compliance", desc: "Blindaje legal." }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-100 shadow-lg hover:-translate-y-2 transition-all cursor-default">
                        <div className="text-indigo-600 mb-4 transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// --- FOR COMPANIES SECTION ---
const ForCompaniesSection = ({ navigateTo }: any) => (
  <section className="py-32 bg-white relative overflow-hidden" id="empresas">
    <div className="absolute right-0 top-20 w-[600px] h-[600px] bg-indigo-50/30 rounded-full blur-[100px] pointer-events-none"></div>

    <div className="container mx-auto px-6 max-w-7xl relative z-10">
      <div className="grid lg:grid-cols-2 gap-20">
        
        <div className="h-fit lg:sticky lg:top-32">
          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold uppercase tracking-widest mb-8">
            Soluciones Corporativas
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-8 leading-tight text-slate-900 tracking-tighter">
            Certeza <br/>
            <span className="typewriter-effect">JURÍDICA</span>
          </h2>
          <p className="text-slate-600 text-lg mb-10 font-medium leading-relaxed">
            Eliminamos el riesgo de responsabilidad solidaria mediante una ejecución impecable de la normativa REPSE.
          </p>
          
          <ul className="space-y-5 mb-12">
            {["Cero riesgo de Responsabilidad Solidaria", "Deducibilidad Fiscal 100% Garantizada", "Entregables mensuales (SAT/IMSS)", "Atención a Requerimientos"].map((item, i) =>(
              <li key={i} className="flex items-center gap-4 text-base text-slate-700 font-medium">
                <CheckCircle size={20} className="text-indigo-600 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>

          <AntigravityButton onClick={() => navigateTo('contacto')}>Solicitar Auditoría</AntigravityButton>
        </div>

        <div className="flex flex-col gap-10">
          <div className="p-0 overflow-hidden bg-gradient-to-br from-white to-indigo-50/30 shadow-2xl border border-indigo-100 rounded-3xl transform transition-transform hover:scale-[1.01] duration-500">
             <div className="p-10 border-b border-indigo-100 bg-gradient-to-r from-indigo-50/50 to-transparent">
               <h3 className="text-3xl font-bold text-slate-900">Metodología 360°</h3>
               <p className="text-slate-600 text-base mt-3">Ciclo continuo de calidad y cumplimiento normativo.</p>
             </div>
             <div className="p-12 flex items-center justify-center bg-gradient-to-br from-transparent to-indigo-50/20 min-h-[500px] relative">
                <div className="orbit-container">
                    <svg className="orbit-svg" viewBox="0 0 600 400" style={{ overflow: 'visible' }}>
                        <ellipse cx="300" cy="200" rx="250" ry="120" className="orbit-path" />
                        <ellipse cx="300" cy="200" rx="250" ry="120" className="orbit-dash" />
                    </svg>
                    <div className="orbit-node" style={{ '--circle-x': '15%', '--circle-y': '30%' } as React.CSSProperties}><Search size={24} /></div>
                    <div className="orbit-node" style={{ '--circle-x': '50%', '--circle-y': '20%' } as React.CSSProperties}><UserCheck size={24} /></div>
                    <div className="orbit-node" style={{ '--circle-x': '85%', '--circle-y': '30%' } as React.CSSProperties}><FileText size={24} /></div>
                    <div className="orbit-node" style={{ '--circle-x': '85%', '--circle-y': '70%' } as React.CSSProperties}><ShieldCheck size={24} /></div>
                    <div className="orbit-node" style={{ '--circle-x': '50%', '--circle-y': '80%' } as React.CSSProperties}><Briefcase size={24} /></div>
                    <div className="orbit-node" style={{ '--circle-x': '15%', '--circle-y': '70%' } as React.CSSProperties}><TrendingUp size={24} /></div>
                    
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-gradient-to-br from-white to-indigo-50 p-8 rounded-full shadow-2xl border-2 border-indigo-200 z-20 w-40 h-40 flex flex-col justify-center backdrop-blur-sm">
                      <div className="text-xs font-bold uppercase tracking-widest text-indigo-400">Eficacia</div>
                      <div className="text-2xl font-black text-slate-900 mt-1">TOTAL</div>
                    </div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

// --- APP PRINCIPAL ---
export default function HumanisApp() {
  const [currentPage, setCurrentPage] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false); // Para animación de entrada
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Activar animación de entrada al montar
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
      
      <div className="min-h-screen bg-white text-slate-900">
        
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
            <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
                <ParticleRing />
                
                {/* Contenedor principal con efecto de entrada suave */}
                <div 
                    className={`container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ease-out transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <div className="relative order-2 lg:order-1">
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform transition-transform hover:scale-[1.02] duration-700">
                            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" alt="Corporate" className="w-full h-auto object-cover" />
                        </div>
                    </div>
                    <div className="relative z-10 order-1 lg:order-2">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-bold uppercase tracking-widest mb-6 border border-indigo-100">
                            Líderes en Capital Humano
                        </div>
                        <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tighter">
                            Talento <br/>
                            <span className="text-rotator typewriter-effect">
                                <span className="text-rotator__word">ESTRATÉGICO</span>
                                <span className="text-rotator__word">EXCEPCIONAL</span>
                                <span className="text-rotator__word">DE ÉLITE</span>
                                <span className="text-rotator__word">TRANSFORMADOR</span>
                            </span>
                        </h1>
                        <p className="text-slate-500 text-xl max-w-lg mb-10 font-medium leading-relaxed">
                            Ingeniería de personal y blindaje jurídico de clase mundial para empresas que exigen excelencia.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button onClick={() => navigateTo('empresas')} className="antigravity-btn group">
                                Soy Empresa 
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                            <button onClick={() => navigateTo('candidatos')} className="antigravity-btn secondary group">
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
            <section className="bg-white relative overflow-hidden">
                <div className="text-center pt-20 pb-12">
                    <h2 className="text-5xl font-bold text-slate-900 tracking-tight mb-4">Ruta de Evolución</h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">Nuestro proceso integral paso a paso</p>
                </div>
                <ScrollPathSection />
            </section>
            )}

            <ForCompaniesSection navigateTo={navigateTo} />

            <div className="py-24 bg-white text-center">
                <h2 className="text-5xl font-bold mb-8">¿Listo para comenzar?</h2>
                <button onClick={() => setShowContact(true)} className="antigravity-btn shadow-xl text-lg px-8 py-4">Contactar Ahora</button>
            </div>

        </main>

        <Footer />

      </div>
    </>
  );
}