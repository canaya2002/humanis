'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  CheckCircle, X, ArrowRight, HelpCircle, Calendar,
  Zap, Users, Briefcase, Shield, Clock, TrendingUp
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';

const pricingPlans = [
  {
    name: "Reclutamiento Puntual",
    description: "Ideal para vacantes específicas sin compromiso de volumen.",
    model: "Comisión por éxito",
    price: "1-2 meses",
    priceNote: "del salario mensual bruto",
    features: [
      { text: "Diagnóstico de perfil", included: true },
      { text: "Búsqueda activa y pasiva", included: true },
      { text: "Filtro y evaluación", included: true },
      { text: "Shortlist de 3-5 candidatos", included: true },
      { text: "Garantía de reemplazo 90 días", included: true },
      { text: "Equipo dedicado", included: false },
      { text: "Dashboard de seguimiento", included: false },
      { text: "Reportes mensuales", included: false },
    ],
    cta: "Cotizar Vacante",
    popular: false
  },
  {
    name: "Programa de Volumen",
    description: "Para empresas con múltiples vacantes o contratación recurrente.",
    model: "Comisión escalonada",
    price: "Negociable",
    priceNote: "según volumen y perfiles",
    features: [
      { text: "Todo lo de Reclutamiento Puntual", included: true },
      { text: "Descuentos por volumen", included: true },
      { text: "Prioridad en búsquedas", included: true },
      { text: "Ejecutivo de cuenta asignado", included: true },
      { text: "Reportes de avance semanales", included: true },
      { text: "Equipo dedicado", included: false },
      { text: "Dashboard en tiempo real", included: false },
      { text: "SLA garantizado", included: false },
    ],
    cta: "Solicitar Propuesta",
    popular: true
  },
  {
    name: "RPO Ligero",
    description: "Gestión continua de tus vacantes con equipo dedicado.",
    model: "Fee mensual fijo",
    price: "A medida",
    priceNote: "según alcance y dedicación",
    features: [
      { text: "Todo lo de Programa de Volumen", included: true },
      { text: "Equipo dedicado a tu cuenta", included: true },
      { text: "Dashboard de seguimiento en tiempo real", included: true },
      { text: "Reportes mensuales de KPIs", included: true },
      { text: "SLA garantizado por contrato", included: true },
      { text: "Proceso de mejora continua", included: true },
      { text: "Integración con tu ATS", included: true },
      { text: "Reuniones de seguimiento semanales", included: true },
    ],
    cta: "Agendar Llamada",
    popular: false
  }
];

const variables = [
  { icon: <Users size={24} />, title: "Nivel del puesto", desc: "Posiciones operativas vs ejecutivas tienen diferentes complejidades." },
  { icon: <Zap size={24} />, title: "Urgencia", desc: "Búsquedas express pueden tener un diferencial." },
  { icon: <TrendingUp size={24} />, title: "Volumen", desc: "Mayor número de vacantes = mejores condiciones." },
  { icon: <Briefcase size={24} />, title: "Especialización", desc: "Perfiles técnicos o escasos requieren mayor esfuerzo." },
];

const faqs = [
  { 
    q: "¿Qué incluye la comisión?", 
    a: "La comisión incluye todo el proceso: diagnóstico, búsqueda, filtro, evaluaciones, presentación de candidatos, coordinación de entrevistas y garantía de reemplazo. No hay costos ocultos." 
  },
  { 
    q: "¿Cuándo se paga la comisión?", 
    a: "La comisión se cobra una vez que el candidato acepta la oferta y/o inicia labores, según lo acordado en el contrato." 
  },
  { 
    q: "¿Qué pasa si el candidato no funciona?", 
    a: "Activamos la garantía de reemplazo sin costo adicional. Buscamos un nuevo candidato con los mismos criterios." 
  },
  { 
    q: "¿Se cobra a los candidatos?", 
    a: "No. Humanis nunca cobra a los candidatos. Nuestros servicios son pagados exclusivamente por las empresas." 
  },
  { 
    q: "¿Cómo se factura?", 
    a: "Emitimos factura con CFDI al momento de la contratación. Aceptamos transferencia y depósito bancario." 
  },
  { 
    q: "¿Hay costo inicial o anticipo?", 
    a: "Para reclutamiento por comisión, no hay costo inicial. Solo pagas por resultados. Para RPO, se define un esquema de pagos mensuales." 
  },
];

export default function PreciosPage() {
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
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-200 opacity-0 animate-fadeInDown">Transparencia Total</span>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight opacity-0 animate-fadeInUp">
                  Modelo de <br/>
                  <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Comisión</span>
                </h1>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  Sin costos ocultos, sin sorpresas. Pagas solo cuando encuentras al candidato ideal.
                </p>
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid lg:grid-cols-3 gap-8">
                {pricingPlans.map((plan, idx) => (
                  <div 
                    key={idx} 
                    className={`relative p-8 rounded-2xl border-2 transition-all duration-500 opacity-0 animate-fadeInUp ${plan.popular ? 'border-indigo-500 shadow-2xl scale-105 bg-white' : 'border-slate-100 bg-white/60 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:-translate-y-2'}`}
                    style={{ animationDelay: `${idx * 0.15}s` }}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                        Más Popular
                      </div>
                    )}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-slate-600">{plan.description}</p>
                    </div>

                    <div className="mb-8 pb-8 border-b border-slate-200">
                      <p className="text-sm text-slate-500 uppercase tracking-wider mb-2">{plan.model}</p>
                      <p className="text-4xl font-bold text-indigo-600">{plan.price}</p>
                      <p className="text-sm text-slate-500">{plan.priceNote}</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          {feature.included ? (
                            <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X size={20} className="text-slate-300 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={feature.included ? 'text-slate-700' : 'text-slate-400'}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link 
                      href="/contacto" 
                      className={`inline-flex items-center justify-center gap-2 w-full font-semibold py-3 px-6 rounded-xl transition-all ${plan.popular ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg hover:shadow-xl' : 'bg-white text-slate-900 border-2 border-slate-200 hover:border-indigo-600 hover:text-indigo-600'}`}
                    >
                      {plan.cta}
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-200">Factores</span>
                <h2 className="text-4xl font-bold mb-4">¿Qué Afecta el Precio?</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  La comisión puede variar según estos factores. Siempre te damos un presupuesto claro antes de iniciar.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {variables.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-6 text-center bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fadeInUp"
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

          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-200">Sin Sorpresas</span>
                  <h2 className="text-4xl font-bold mb-6">Qué Incluye la Comisión</h2>
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    Un solo pago que cubre todo el proceso de principio a fin.
                  </p>
                  
                  <ul className="space-y-4">
                    {[
                      "Diagnóstico y validación del perfil",
                      "Búsqueda activa en bases de datos y redes",
                      "Filtro curricular y telefónico",
                      "Evaluaciones de competencias",
                      "Entrevistas estructuradas",
                      "Verificación de referencias",
                      "Presentación de expediente completo",
                      "Coordinación de entrevistas",
                      "Negociación y cierre",
                      "Garantía de reemplazo"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 bg-white/60 backdrop-blur-xl rounded-3xl border border-slate-100 shadow-2xl">
                  <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl">
                    <Shield size={48} className="mx-auto text-indigo-600 mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Garantía de Reemplazo</h3>
                    <p className="text-slate-600 mb-6">
                      Si el candidato no funciona en los primeros 90 días, lo reemplazamos sin costo adicional.
                    </p>
                    <div className="flex justify-center gap-8">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-indigo-600">90</p>
                        <p className="text-sm text-slate-500">Días de garantía</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-indigo-600">$0</p>
                        <p className="text-sm text-slate-500">Costo adicional</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-3xl">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-200">Dudas Frecuentes</span>
                <h2 className="text-4xl font-bold mb-4">Preguntas sobre Precios</h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-slate-300 transition-colors">
                    <button 
                      className="w-full px-6 py-5 flex justify-between items-center text-left font-semibold text-slate-900 hover:text-indigo-600 transition-colors"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    >
                      {faq.q}
                      <HelpCircle 
                        size={20} 
                        className={`flex-shrink-0 transition-colors ${openFaq === idx ? 'text-indigo-600' : 'text-slate-400'}`} 
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
            </div>
          </section>

          <section className="py-24 bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
            <div className="container mx-auto px-6 max-w-4xl text-center">
              <h2 className="text-4xl font-bold mb-6">
                ¿Listo para cotizar tu vacante?
              </h2>
              <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
                Envíanos los detalles y te damos un presupuesto en menos de 24 horas.
              </p>
              <Link href="/contacto" className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-2xl hover:bg-slate-800 transition-all">
                <Calendar size={20} />
                Cotizar Ahora
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