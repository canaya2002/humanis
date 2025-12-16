'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, Search, Clock, Shield, Users, 
  FileText, DollarSign, MapPin, Calendar, MessageCircle
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';

const faqCategories = [
  {
    id: "proceso",
    icon: Clock,
    title: "Proceso y Tiempos",
    questions: [
      { 
        q: "¿Cuánto tiempo toma cubrir una vacante?", 
        a: "Típicamente 2-3 semanas para perfiles estándar. Posiciones especializadas pueden tomar 4-6 semanas." 
      },
      { 
        q: "¿Cuántos candidatos me presentan?", 
        a: "Presentamos una terna de 3-5 candidatos validados. Si ninguno convence, presentamos más opciones sin costo adicional." 
      },
      { 
        q: "¿Qué información recibo de cada candidato?", 
        a: "Expediente completo: CV, evaluaciones, entrevista, expectativa salarial, disponibilidad y referencias." 
      },
      { 
        q: "¿Cómo se coordinan las entrevistas?", 
        a: "Nosotros coordinamos todo: agenda, confirmaciones, recordatorios y recopilación de feedback." 
      },
    ]
  },
  {
    id: "garantias",
    icon: Shield,
    title: "Garantías y Reemplazos",
    questions: [
      { 
        q: "¿Qué incluye la garantía de reemplazo?", 
        a: "Si el candidato renuncia o es despedido en 90 días, lo reemplazamos sin costo adicional." 
      },
      { 
        q: "¿Cómo activo la garantía?", 
        a: "Notifícanos por correo o WhatsApp. Iniciamos búsqueda en menos de 48 horas." 
      },
    ]
  },
  {
    id: "costos",
    icon: DollarSign,
    title: "Costos y Facturación",
    questions: [
      { 
        q: "¿Cuánto cobran por vacante?", 
        a: "1-2 meses del salario mensual bruto. Te damos cotización específica antes de iniciar." 
      },
      { 
        q: "¿Cuándo se paga la comisión?", 
        a: "Cuando el candidato acepta la oferta y/o inicia labores. Sin anticipos." 
      },
      { 
        q: "¿Cobran a los candidatos?", 
        a: "NO. Humanis nunca cobra a candidatos. Esto es fundamental en nuestra operación." 
      },
    ]
  },
];

export default function FAQEmpresasPage() {
  const [showHeader, setShowHeader] = useState(true);
  const [activeCategory, setActiveCategory] = useState("proceso");
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
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

  const activeQuestions = faqCategories.find(cat => cat.id === activeCategory)?.questions || [];

  return (
    <>
      <GlobalStyles />
      <div className="min-h-screen bg-white">
        <Header showHeader={showHeader} />

        {/* Hero */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider rounded-full">
              Centro de Ayuda
            </span>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900">
              FAQ para <span className="gradient-text">Empresas</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Respuestas a las preguntas más frecuentes
            </p>

            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text"
                placeholder="Buscar pregunta..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-2 lg:sticky lg:top-32">
                  {faqCategories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => { setActiveCategory(cat.id); setOpenQuestion(null); }}
                        className={`w-full flex items-center gap-3 p-4 rounded-xl transition-all ${
                          activeCategory === cat.id 
                            ? 'bg-indigo-50 border-2 border-indigo-200 text-indigo-700' 
                            : 'border-2 border-transparent hover:bg-slate-50 text-slate-600'
                        }`}
                      >
                        <Icon size={20} />
                        <span className="font-medium text-sm">{cat.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Questions */}
              <div className="lg:col-span-3 space-y-4">
                {activeQuestions.map((faq, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                    <button 
                      onClick={() => setOpenQuestion(openQuestion === idx ? null : idx)}
                      className="w-full p-6 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                      <ChevronDown 
                        className={`text-slate-400 transition-transform flex-shrink-0 ${openQuestion === idx ? 'rotate-180' : ''}`} 
                        size={20}
                      />
                    </button>
                    {openQuestion === idx && (
                      <div className="px-6 pb-6 text-slate-600 border-t border-slate-100 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">¿No encontraste lo que buscabas?</h2>
            <p className="text-xl mb-8 text-indigo-100">Contáctanos directamente</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-indigo-600 font-semibold px-8 py-3 rounded-xl hover:bg-slate-50">
                <Calendar size={20} />
                Agendar Llamada
              </Link>
              <a href="https://wa.me/525512345678" className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-8 py-3 rounded-xl hover:bg-green-600">
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}