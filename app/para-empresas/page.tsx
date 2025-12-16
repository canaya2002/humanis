'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  CheckCircle, ArrowRight, Zap, Clock, Users, Shield,
  Target, TrendingUp, FileText, Briefcase, Phone, Calendar,
  Building2, BarChart3, Award, AlertTriangle
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';

const problems = [
  { icon: <AlertTriangle size={28} />, title: "Vacantes Urgentes", desc: "Posiciones críticas que afectan tu operación diaria." },
  { icon: <TrendingUp size={28} />, title: "Picos de Operación", desc: "Necesidades estacionales o proyectos específicos." },
  { icon: <Users size={28} />, title: "Alta Rotación", desc: "Ciclos de reclutamiento interminables y costosos." },
  { icon: <Target size={28} />, title: "Pipeline de Talento", desc: "Falta de candidatos calificados y listos." },
];

const process = [
  { num: "01", title: "Diagnóstico", desc: "Análisis profundo de tu perfil y necesidades específicas." },
  { num: "02", title: "Reclutamiento", desc: "Búsqueda activa con filtros rigurosos y evaluaciones." },
  { num: "03", title: "Shortlist", desc: "Presentación de candidatos validados y preseleccionados." },
  { num: "04", title: "Seguimiento", desc: "Acompañamiento en onboarding y garantía de reemplazo." },
];

const profiles = [
  "Administrativo", "Ventas", "Operaciones", "Soporte", 
  "TI / Desarrollo", "Marketing", "Finanzas", "Becarios / Practicantes"
];

const cases = [
  { company: "Empresa Retail", metric: "72h", label: "Tiempo de cobertura", desc: "5 posiciones de piso cubiertas en tiempo récord." },
  { company: "Startup Tech", metric: "95%", label: "Retención a 6 meses", desc: "Equipo de desarrollo completo con alta permanencia." },
  { company: "Logística Nacional", metric: "45%", label: "Reducción en rotación", desc: "Mejora significativa en calidad de contrataciones." },
];

export default function ParaEmpresasPage() {
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

  return (
    <>
      <GlobalStyles />
      <div className="min-h-screen bg-white text-slate-900">
        <Header showHeader={showHeader} />

        <main className="pt-28">
          <section className="relative pt-20 pb-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white"></div>
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="opacity-0 animate-fadeInUp">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-200">Soluciones Corporativas</span>
                  <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                    Talento listo para <br/>
                    <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">integrarse</span>, sin fricción
                  </h1>
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                    Cubrimos tus vacantes con velocidad, filtro riguroso y cumplimiento total. 
                    Cobertura nacional con respuesta en 24-48 horas.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                      <Calendar size={20} />
                      Agendar Llamada
                    </Link>
                    <Link href="/proceso" className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold py-3 px-8 rounded-xl shadow-lg border-2 border-slate-200 hover:border-indigo-600 hover:text-indigo-600 transition-all">
                      Ver Cómo Funciona
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
                
                <div className="relative opacity-0 animate-fadeInRight">
                  <div className="p-8 bg-white/60 backdrop-blur-xl rounded-3xl border border-slate-100 shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                      alt="Equipo de trabajo" 
                      className="rounded-2xl w-full h-80 object-cover"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center text-indigo-600">
                          <Clock size={24} />
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-slate-900">24-48h</p>
                          <p className="text-sm text-slate-500">Tiempo de respuesta</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-200">Entendemos Tus Retos</span>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">Problemas que Solucionamos</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Sabemos lo que significa operar con vacantes abiertas.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {problems.map((item, idx) => (
                  <div key={idx} className="p-8 bg-white/60 backdrop-blur-xl rounded-2xl border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 opacity-0 animate-fadeInUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center text-indigo-600">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-200">Metodología</span>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">Cómo Trabajamos</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Proceso ágil y transparente de principio a fin.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {process.map((step, idx) => (
                  <div key={idx} className="relative opacity-0 animate-fadeInUp" style={{ animationDelay: `${idx * 0.15}s` }}>
                    <div className="text-7xl font-black text-slate-100 absolute -top-4 -left-2">{step.num}</div>
                    <div className="relative z-10 pt-8">
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-slate-600">{step.desc}</p>
                    </div>
                    {idx < process.length - 1 && (
                      <div className="hidden lg:block absolute top-12 right-0 translate-x-1/2">
                        <ArrowRight className="text-slate-300" size={24} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Link href="/proceso" className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold py-3 px-6 rounded-xl border-2 border-slate-200 hover:border-indigo-600 hover:text-indigo-600 transition-all">
                  Ver Proceso Detallado
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </section>

          <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">Especialización</span>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6">Perfiles que Cubrimos</h2>
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                    Desde posiciones operativas hasta roles ejecutivos. 
                    Conocemos el mercado y sabemos dónde encontrar el talento.
                  </p>
                  <Link href="/industrias" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    Ver por Industria
                    <ArrowRight size={20} />
                  </Link>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {profiles.map((profile, idx) => (
                    <div 
                      key={idx} 
                      className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-indigo-400 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">{profile}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="p-12 lg:p-16 bg-white/60 backdrop-blur-xl rounded-3xl border border-slate-100 shadow-2xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center text-indigo-600">
                      <Shield size={32} />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Confianza y Cumplimiento</h2>
                    <ul className="space-y-4">
                      {[
                        "No cobramos a candidatos - nunca",
                        "Contratos claros y proceso documentado",
                        "Confidencialidad y protección de datos",
                        "Operamos conforme al marco normativo vigente"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-lg text-slate-700">
                          <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-white/60 backdrop-blur-xl rounded-2xl border border-slate-100 shadow-xl">
                      <p className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-2">98%</p>
                      <p className="text-sm text-slate-600 uppercase tracking-wider">Satisfacción</p>
                    </div>
                    <div className="text-center p-6 bg-white/60 backdrop-blur-xl rounded-2xl border border-slate-100 shadow-xl">
                      <p className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-2">150+</p>
                      <p className="text-sm text-slate-600 uppercase tracking-wider">Empresas</p>
                    </div>
                    <div className="text-center p-6 bg-white/60 backdrop-blur-xl rounded-2xl border border-slate-100 shadow-xl">
                      <p className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-2">2.5K+</p>
                      <p className="text-sm text-slate-600 uppercase tracking-wider">Colocados</p>
                    </div>
                    <div className="text-center p-6 bg-white/60 backdrop-blur-xl rounded-2xl border border-slate-100 shadow-xl">
                      <p className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-2">24h</p>
                      <p className="text-sm text-slate-600 uppercase tracking-wider">Respuesta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-200">Resultados</span>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">Casos de Éxito</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Resultados medibles para empresas como la tuya.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {cases.map((item, idx) => (
                  <div key={idx} className="p-8 bg-white rounded-2xl border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fadeInUp" style={{ animationDelay: `${idx * 0.15}s` }}>
                    <p className="text-sm font-semibold text-indigo-600 mb-2">{item.company}</p>
                    <p className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-1">{item.metric}</p>
                    <p className="text-sm text-slate-500 uppercase tracking-wider mb-4">{item.label}</p>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Link href="/casos-de-exito" className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold py-3 px-6 rounded-xl border-2 border-slate-200 hover:border-indigo-600 hover:text-indigo-600 transition-all">
                  Ver Todos los Casos
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </section>

          <section className="py-24 bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
            <div className="container mx-auto px-6 max-w-4xl text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                ¿Listo para cubrir tus vacantes?
              </h2>
              <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
                Agenda una llamada de 15 minutos y te mostramos cómo podemos ayudarte.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contacto" className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-2xl hover:bg-slate-800 transition-all">
                  <Calendar size={20} />
                  Agendar Llamada
                </Link>
                <a href="https://wa.me/525512345678" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-2xl hover:bg-green-600 transition-all">
                  <Phone size={20} />
                  WhatsApp Directo
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
}