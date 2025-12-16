'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Search, Users, FileText, ShieldCheck, Briefcase, 
  CheckCircle, ArrowRight, Target, Zap, Clock,
  UserCheck, BarChart3, Award, RefreshCw, Calendar
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';

const mainServices = [
  {
    icon: <Search size={32} />,
    title: "Reclutamiento por Comisión",
    desc: "Cobertura de vacantes con pago por éxito. Sin costos fijos, pagas solo cuando encuentras al candidato ideal.",
    features: [
      "Búsqueda activa y pasiva de candidatos",
      "Filtros rigurosos y evaluaciones",
      "Shortlist de 3-5 candidatos validados",
      "Garantía de reemplazo incluida"
    ],
    highlight: "Más Popular"
  },
  {
    icon: <Users size={32} />,
    title: "Programa Talento Joven",
    desc: "Becarios y practicantes de las mejores universidades. Pipeline de talento fresco para tu organización.",
    features: [
      "Alianzas con universidades top",
      "Perfiles ya evaluados y disponibles",
      "Acompañamiento en programa formativo",
      "Opción de contratación directa"
    ],
    highlight: null
  },
  {
    icon: <Briefcase size={32} />,
    title: "RPO Ligero",
    desc: "Gestión continua de tus vacantes. Ideal para empresas con volumen constante de contratación.",
    features: [
      "Equipo dedicado a tu cuenta",
      "Dashboard de seguimiento en tiempo real",
      "Reportes mensuales de KPIs",
      "Costo fijo predecible"
    ],
    highlight: null
  }
];

const complementaryServices = [
  { icon: <UserCheck size={24} />, title: "Entrevistas Estructuradas", desc: "Evaluaciones por competencias con metodología probada." },
  { icon: <BarChart3 size={24} />, title: "Pruebas Psicométricas", desc: "Baterías de evaluación adaptadas al perfil." },
  { icon: <ShieldCheck size={24} />, title: "Verificación de Referencias", desc: "Validación de historial laboral y referencias." },
  { icon: <FileText size={24} />, title: "Estudios Socioeconómicos", desc: "Investigación de antecedentes cuando se requiera." },
];

const guarantees = [
  { icon: <RefreshCw size={24} />, title: "Garantía de Reemplazo", desc: "Si el candidato no funciona en los primeros 90 días, lo reemplazamos sin costo adicional." },
  { icon: <Clock size={24} />, title: "Tiempo de Respuesta", desc: "Primera terna de candidatos en 5-10 días hábiles para perfiles estándar." },
  { icon: <Target size={24} />, title: "Filtro Riguroso", desc: "Solo presentamos candidatos que cumplen al menos 80% del perfil solicitado." },
];

export default function ServiciosPage() {
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
          <section className="relative pt-20 pb-24 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-200 opacity-0 animate-fadeInDown">Servicios Humanis</span>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight opacity-0 animate-fadeInUp">
                  Soluciones de Talento <br/>
                  <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">a tu Medida</span>
                </h1>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  Desde reclutamiento puntual hasta gestión continua de vacantes. 
                  Elige el modelo que mejor se adapte a tus necesidades.
                </p>
                <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                  <Link href="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                    <Calendar size={20} />
                    Solicitar Propuesta
                  </Link>
                  <Link href="/precios" className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold py-3 px-8 rounded-xl border-2 border-slate-200 hover:border-indigo-600 hover:text-indigo-600 transition-all">
                    Ver Precios
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-200">Servicios Principales</span>
                <h2 className="text-4xl font-bold mb-4">Elige tu Modelo</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Tres formas de trabajar juntos según el volumen y urgencia de tus vacantes.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {mainServices.map((service, idx) => (
                  <div 
                    key={idx} 
                    className={`relative p-8 bg-white/60 backdrop-blur-xl rounded-2xl border-2 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 opacity-0 animate-fadeInUp ${idx === 0 ? 'lg:scale-105 border-indigo-200' : 'border-slate-100'}`}
                    style={{ animationDelay: `${idx * 0.15}s` }}
                  >
                    {service.highlight && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                        {service.highlight}
                      </div>
                    )}
                    <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center text-indigo-600">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-slate-600 mb-6">{service.desc}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                          <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contacto" className={`inline-flex items-center justify-center gap-2 w-full font-semibold py-3 px-6 rounded-xl transition-all ${idx === 0 ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg hover:shadow-xl' : 'bg-white text-slate-900 border-2 border-slate-200 hover:border-indigo-600 hover:text-indigo-600'}`}>
                      Solicitar Info
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-200">Valor Agregado</span>
                  <h2 className="text-4xl font-bold mb-6">Servicios Complementarios</h2>
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    Potencia tu proceso de selección con evaluaciones adicionales. 
                    Disponibles como complemento a cualquiera de nuestros servicios principales.
                  </p>
                  <Link href="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    Personalizar Paquete
                  </Link>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {complementaryServices.map((service, idx) => (
                    <div 
                      key={idx} 
                      className="p-6 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fadeInUp"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center text-indigo-600">{service.icon}</div>
                      <h4 className="font-bold mb-2">{service.title}</h4>
                      <p className="text-sm text-slate-600">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-200">Transparencia</span>
                <h2 className="text-4xl font-bold mb-4">Qué Incluye Cada Servicio</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px] bg-white rounded-2xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="border-b-2 border-slate-200 bg-slate-50">
                      <th className="text-left py-4 px-6 font-semibold text-slate-900">Característica</th>
                      <th className="text-center py-4 px-6 font-semibold bg-indigo-50 text-indigo-900">Reclutamiento</th>
                      <th className="text-center py-4 px-6 font-semibold text-slate-900">Talento Joven</th>
                      <th className="text-center py-4 px-6 font-semibold text-slate-900">RPO Ligero</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Diagnóstico de perfil", rec: true, tj: true, rpo: true },
                      { feature: "Búsqueda activa", rec: true, tj: true, rpo: true },
                      { feature: "Filtro y evaluación", rec: true, tj: true, rpo: true },
                      { feature: "Shortlist de candidatos", rec: "3-5", tj: "3-5", rpo: "Ilimitado" },
                      { feature: "Garantía de reemplazo", rec: "90 días", tj: "60 días", rpo: "90 días" },
                      { feature: "Equipo dedicado", rec: false, tj: false, rpo: true },
                      { feature: "Dashboard de seguimiento", rec: false, tj: false, rpo: true },
                      { feature: "Reportes mensuales", rec: false, tj: false, rpo: true },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-6 text-slate-700 font-medium">{row.feature}</td>
                        <td className="py-4 px-6 text-center bg-indigo-50/50">
                          {typeof row.rec === 'boolean' ? (
                            row.rec ? <CheckCircle size={20} className="text-green-500 mx-auto" /> : <span className="text-slate-300">—</span>
                          ) : (
                            <span className="font-medium text-indigo-600">{row.rec}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {typeof row.tj === 'boolean' ? (
                            row.tj ? <CheckCircle size={20} className="text-green-500 mx-auto" /> : <span className="text-slate-300">—</span>
                          ) : (
                            <span className="font-medium text-indigo-600">{row.tj}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {typeof row.rpo === 'boolean' ? (
                            row.rpo ? <CheckCircle size={20} className="text-green-500 mx-auto" /> : <span className="text-slate-300">—</span>
                          ) : (
                            <span className="font-medium text-indigo-600">{row.rpo}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-4 border border-white/20">Compromiso</span>
                <h2 className="text-4xl font-bold mb-4">Nuestras Garantías</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {guarantees.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 opacity-0 animate-fadeInUp"
                    style={{ animationDelay: `${idx * 0.15}s` }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-slate-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl text-center">
              <h2 className="text-4xl font-bold mb-6">
                ¿No sabes cuál elegir?
              </h2>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                Agenda una llamada y te ayudamos a identificar el modelo ideal para tu empresa.
              </p>
              <Link href="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Calendar size={20} />
                Agendar Consulta Gratuita
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
}