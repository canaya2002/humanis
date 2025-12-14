'use client';
import React, { useState, useEffect, useRef } from 'react';
import { 
  Briefcase, ShieldCheck, 
  FileText, CheckCircle, UserCheck, 
  TrendingUp, Search,
  Zap, Award, BarChart3, Users,
  Code, Terminal, Database, Server, Cpu, Cloud, Globe, Sparkles
} from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';
import ContactIntro from './components/ContactIntro';
import ScrollPathSection from './components/ScrollPathSection';
import ParticleMorphCanvas from './components/ParticleMorphCanvas';
import ParticleTornadoCanvas from './components/ParticleTornadoCanvas';

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
                    <div key={idx} className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-100 shadow-lg hover:-translate-y-2 transition-all">
                        <div className="text-indigo-600 mb-4">{item.icon}</div>
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
          <div className="p-0 overflow-hidden bg-gradient-to-br from-white to-indigo-50/30 shadow-2xl border border-indigo-100 rounded-3xl">
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
                    
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-gradient-to-br from-white to-indigo-50 p-8 rounded-full shadow-2xl border-2 border-indigo-200 z-20 w-40 h-40 flex flex-col justify-center">
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
  const lastScrollY = useRef(0);

  useEffect(() => {
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
            
            {/* === HERO SECTION PREMIUM === */}
            {(currentPage === 'inicio' || currentPage === 'home') && (
            <section className="relative min-h-screen w-full flex flex-col justify-center bg-white overflow-hidden pt-32 pb-20">
              
              {/* Fondo blanco limpio */}
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-white" />

              {/* Partículas centradas */}
              <ParticleTornadoCanvas />

              <div className="container mx-auto px-6 lg:px-12 relative z-10 flex-grow flex flex-col justify-center">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  
                  {/* IMAGEN - Izquierda */}
                  <div className="lg:col-span-5 w-full relative h-[500px] lg:h-[700px] flex items-center justify-center order-2 lg:order-1">
                    
                    {/* Imagen principal SIN aro de luz */}
                    <div className="hero-image-wrapper-clean">
                      <img
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                        alt="Equipo Humanis"
                        className="w-full h-full object-contain drop-shadow-2xl filter brightness-105 contrast-105"
                      />
                    </div>

                    {/* Badge flotante glassmorphic mejorado */}
                    <div className="hero-badge-glass-white">
                      <div className="group">
                        <div className="flex items-baseline">
                          <span className="text-6xl font-extralight tracking-tighter text-slate-900">2,500</span>
                          <span className="text-4xl font-thin text-indigo-600 ml-2 group-hover:rotate-12 transition-transform">+</span>
                        </div>
                        <p className="text-xs text-slate-600 uppercase tracking-[0.2em] mt-2 font-medium">
                          Colaboradores Colocados
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* TEXTO - Derecha */}
                  <div className="lg:col-span-7 w-full space-y-10 pl-0 lg:pl-16 relative z-20 order-1 lg:order-2">
                    
                    {/* Título principal - NEGRO */}
                    <div className="relative">
                      <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] font-thin tracking-tight">
                        
                        <span className="block overflow-hidden pb-3 perspective-[400px]">
                          <span className="hero-text-reveal-1-black">
                            Capital Humano
                          </span>
                        </span>

                        <span className="block overflow-hidden pb-2 perspective-[400px]">
                          <span className="hero-text-reveal-2-black">
                            <span className="text-indigo-600 drop-shadow-2xl relative font-medium">
                              ESTRATÉGICO
                              <span className="hero-text-shimmer-black">
                                ESTRATÉGICO
                              </span>
                            </span>
                          </span>
                        </span>

                        <span className="block overflow-hidden perspective-[400px]">
                          <span className="hero-text-reveal-3-black">
                            para tu empresa
                          </span>
                        </span>
                      </h1>
                    </div>

                    {/* Descripción - NEGRO */}
                    <p className="hero-description-black">
                      <span className="text-slate-900 font-medium">Humanis:</span> Transformamos organizaciones con soluciones integrales de capital humano, compliance REPSE y tecnología de punta.
                    </p>

                    {/* Botones glassmorphic mejorados */}
                    <div className="hero-buttons-wrapper">
                      <button className="glass-button-white group" onClick={() => navigateTo('empresas')}>
                        <div className="glass-button-inner-white">
                          <span className="relative z-10 font-medium text-slate-900 flex items-center gap-2">
                            Soy Empresa
                            <TrendingUp size={20} className="group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </button>

                      <button className="glass-button-white-secondary group" onClick={() => navigateTo('candidatos')}>
                        <div className="glass-button-inner-white-secondary">
                          <span className="relative z-10 font-medium text-slate-900 flex items-center gap-2">
                            Soy Candidato
                            <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                          </span>
                        </div>
                      </button>
                    </div>

                    {/* Stats - NEGRO */}
                    <div className="hero-stats-wrapper-black">
                      <div className="group">
                        <div className="flex items-baseline">
                          <span className="text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900">98</span>
                          <span className="text-4xl font-thin text-indigo-600 ml-1 group-hover:scale-125 transition-transform">%</span>
                        </div>
                        <p className="text-sm text-slate-600 uppercase tracking-[0.3em] mt-2 font-medium">
                          Compliance REPSE
                        </p>
                      </div>

                      <div className="group">
                        <div className="flex items-baseline">
                          <span className="text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900">150</span>
                          <span className="text-4xl font-thin text-indigo-600 ml-1 group-hover:rotate-12 transition-transform">+</span>
                        </div>
                        <p className="text-sm text-slate-600 uppercase tracking-[0.3em] mt-2 font-medium">
                          Empresas Activas
                        </p>
                      </div>
                    </div>
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
                <button onClick={() => setShowContact(true)} className="antigravity-btn shadow-xl">Contactar Ahora</button>
            </div>

        </main>

        <Footer />

      </div>
    </>
  );
}