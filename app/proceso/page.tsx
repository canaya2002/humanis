'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Search, Users, FileText, ShieldCheck, Briefcase, 
  CheckCircle, ArrowRight, Target, Zap, Clock,
  UserCheck, BarChart3, MessageSquare, Calendar, Send,
  ArrowDown
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';

const timeline = [
  {
    step: "01",
    title: "Diagnóstico Inicial",
    duration: "Día 1-2",
    icon: <MessageSquare size={28} />,
    desc: "Entendemos a fondo tu necesidad: perfil, cultura, urgencia y contexto del puesto.",
    deliverables: ["Perfil validado", "Expectativas alineadas", "Timeline acordado"],
    color: "indigo"
  },
  {
    step: "02",
    title: "Búsqueda y Filtro",
    duration: "Día 3-8",
    icon: <Search size={28} />,
    desc: "Activamos nuestra red y base de datos. Aplicamos filtros rigurosos y evaluaciones.",
    deliverables: ["Candidatos identificados", "Primeros filtros aplicados", "Evaluaciones completadas"],
    color: "violet"
  },
  {
    step: "03",
    title: "Presentación de Shortlist",
    duration: "Día 9-12",
    icon: <Users size={28} />,
    desc: "Te presentamos una terna de 3-5 candidatos validados con expediente completo.",
    deliverables: ["CV actualizado", "Evaluaciones", "Notas de entrevista", "Expectativa salarial"],
    color: "purple"
  },
  {
    step: "04",
    title: "Entrevistas y Decisión",
    duration: "Día 13-18",
    icon: <UserCheck size={28} />,
    desc: "Coordinamos entrevistas, facilitamos feedback y apoyamos en la negociación.",
    deliverables: ["Agenda coordinada", "Feedback estructurado", "Negociación asistida"],
    color: "fuchsia"
  },
  {
    step: "05",
    title: "Cierre y Onboarding",
    duration: "Día 19-21",
    icon: <Target size={28} />,
    desc: "Confirmamos aceptación, acompañamos el ingreso y activamos la garantía.",
    deliverables: ["Oferta aceptada", "Fecha de ingreso", "Garantía activa"],
    color: "cyan"
  }
];

const requirements = [
  { title: "Descripción del puesto", desc: "Responsabilidades, objetivos y contexto del rol." },
  { title: "Perfil deseado", desc: "Experiencia, habilidades técnicas y soft skills." },
  { title: "Rango salarial", desc: "Compensación ofrecida y prestaciones." },
  { title: "Contacto principal", desc: "Quién tomará las decisiones de contratación." },
];

const deliverables = [
  { icon: <FileText size={20} />, title: "Expediente por Candidato", desc: "CV, evaluaciones, referencias y notas." },
  { icon: <BarChart3 size={20} />, title: "Reporte de Avance", desc: "Estatus semanal del proceso de búsqueda." },
  { icon: <MessageSquare size={20} />, title: "Feedback Estructurado", desc: "Retroalimentación clara post-entrevistas." },
  { icon: <ShieldCheck size={20} />, title: "Garantía Documentada", desc: "Términos y condiciones del reemplazo." },
];

const faqs = [
  { q: "¿Cuánto tiempo toma cubrir una vacante?", a: "Típicamente 2-3 semanas para perfiles estándar. Posiciones especializadas pueden tomar 4-6 semanas." },
  { q: "¿Qué pasa si ningún candidato funciona?", a: "Ajustamos la búsqueda según tu feedback. Si ya contrataste y no funciona, activamos la garantía de reemplazo sin costo." },
  { q: "¿Puedo entrevistar a más candidatos?", a: "Sí, si ninguno de la terna inicial convence, presentamos más opciones sin costo adicional." },
  { q: "¿Cómo se factura el servicio?", a: "La comisión se cobra una vez que el candidato firma y/o inicia labores, según lo acordado." },
];

export default function ProcesoPage() {
  const [showHeader, setShowHeader] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-200 opacity-0 animate-fadeInDown">Metodología</span>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight opacity-0 animate-fadeInUp">
                  Proceso Claro, <br/>
                  <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Resultados Medibles</span>
                </h1>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  De la vacante al candidato ideal en 2-3 semanas. 
                  Transparencia total en cada paso del camino.
                </p>
                <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                  <Link href="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                    <Send size={20} />
                    Iniciar Proceso
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-200">Paso a Paso</span>
                <h2 className="text-4xl font-bold mb-4">Así Trabajamos</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Proceso estructurado con tiempos realistas y entregables claros.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-violet-500 to-cyan-500 transform lg:-translate-x-1/2" />

                {timeline.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`relative flex items-start gap-8 mb-16 last:mb-0 opacity-0 animate-fadeInUp ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                    style={{ animationDelay: `${idx * 0.15}s` }}
                  >
                    <div className="absolute left-8 lg:left-1/2 w-16 h-16 bg-white rounded-full border-4 border-indigo-500 flex items-center justify-center transform -translate-x-1/2 z-10 shadow-lg">
                      <span className="text-xl font-bold text-indigo-600">{item.step}</span>
                    </div>

                    <div className={`ml-24 lg:ml-0 lg:w-[45%] ${idx % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                      <div className="p-8 bg-white/60 backdrop-blur-xl rounded-2xl border border-slate-100 shadow-xl">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center text-indigo-600">{item.icon}</div>
                          <div>
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <span className="text-sm text-indigo-600 font-medium">{item.duration}</span>
                          </div>
                        </div>
                        <p className="text-slate-600 mb-6">{item.desc}</p>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Entregables:</p>
                          {item.deliverables.map((del, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                              <CheckCircle size={16} className="text-green-500" />
                              {del}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-200">Para Arrancar</span>
                  <h2 className="text-4xl font-bold mb-6">Qué Necesitamos de Ti</h2>
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    Con esta información podemos arrancar la búsqueda de inmediato. 
                    Te enviamos un formato simple para completar.
                  </p>
                  <Link href="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    Enviar mi Vacante
                    <ArrowRight size={20} />
                  </Link>
                </div>
                
                <div className="space-y-4">
                  {requirements.map((req, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fadeInRight"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-indigo-600 font-bold">{idx + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{req.title}</h4>
                        <p className="text-sm text-slate-600">{req.desc}</p>
                      </div>
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
                <h2 className="text-4xl font-bold mb-4">Qué Te Entregamos</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Documentación completa y seguimiento constante en todo el proceso.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {deliverables.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-6 text-center bg-white/60 backdrop-blur-xl rounded-2xl border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 opacity-0 animate-fadeInUp"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center text-indigo-600">{item.icon}</div>
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">Compromiso</span>
                  <h2 className="text-4xl font-bold mb-6">SLA Realista</h2>
                  <p className="text-indigo-100 text-lg leading-relaxed">
                    Tiempos que podemos cumplir. Sin promesas vacías, con resultados consistentes.
                  </p>
                </div>
                
                <div className="lg:col-span-2 grid md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
                    <p className="text-4xl font-bold mb-2">5-10</p>
                    <p className="text-sm text-indigo-100 uppercase tracking-wider">Días para primera terna</p>
                    <p className="text-xs text-indigo-200 mt-2">Perfiles estándar</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
                    <p className="text-4xl font-bold mb-2">2-3</p>
                    <p className="text-sm text-indigo-100 uppercase tracking-wider">Semanas promedio</p>
                    <p className="text-xs text-indigo-200 mt-2">Hasta contratación</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
                    <p className="text-4xl font-bold mb-2">90</p>
                    <p className="text-sm text-indigo-100 uppercase tracking-wider">Días de garantía</p>
                    <p className="text-xs text-indigo-200 mt-2">Reemplazo sin costo</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-200">Dudas Frecuentes</span>
                <h2 className="text-4xl font-bold mb-4">FAQ del Proceso</h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-slate-300 transition-colors">
                    <button 
                      className="w-full px-6 py-5 flex justify-between items-center text-left font-semibold text-slate-900 hover:text-indigo-600 transition-colors"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    >
                      {faq.q}
                      <ArrowDown 
                        size={20} 
                        className={`text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180 text-indigo-600' : ''}`} 
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-6 pb-5 text-slate-600 leading-relaxed opacity-0 animate-fadeIn">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-slate-600 mb-4">¿Tienes más preguntas?</p>
                <Link href="/faq-empresas" className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold py-3 px-6 rounded-xl border-2 border-slate-200 hover:border-indigo-600 hover:text-indigo-600 transition-all">
                  Ver FAQ Completo
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </section>

          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-4xl text-center">
              <h2 className="text-4xl font-bold mb-6">
                ¿Listo para comenzar?
              </h2>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                Envíanos tu vacante y te contactamos en menos de 24 horas.
              </p>
              <Link href="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Calendar size={20} />
                Agendar Llamada
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
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </>
  );
}