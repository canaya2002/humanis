'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, Search, Shield, Clock, Users, 
  FileText, DollarSign, Sparkles, MessageCircle
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';

const faqCategories = [
  {
    id: "general",
    icon: Shield,
    title: "Preguntas Generales",
    questions: [
      { q: "¿Humanis cobra a los candidatos?", a: "No, nunca. Nuestros servicios son 100% gratuitos para candidatos. Las empresas pagan por nuestros servicios." },
      { q: "¿Es seguro registrarme?", a: "Sí. Protegemos tus datos conforme a la ley. Solo compartimos tu información con empresas verificadas cuando hay una vacante relevante." },
      { q: "¿Qué tipo de vacantes manejan?", a: "Cubrimos vacantes en ventas, administración, TI, logística, marketing, finanzas, operaciones y más." },
      { q: "¿Tienen vacantes en mi ciudad?", a: "Tenemos cobertura nacional. Operaciones principales en CDMX, Guadalajara y Monterrey, más vacantes remotas." },
    ]
  },
  {
    id: "proceso",
    icon: Clock,
    title: "Proceso de Aplicación",
    questions: [
      { q: "¿Cómo funciona el proceso?", a: "1) Te registras y subes tu CV, 2) Revisamos tu perfil, 3) Si hay match, te contactamos, 4) Te preparamos para entrevistas, 5) Te acompañamos hasta la contratación." },
      { q: "¿Cuánto tiempo toma encontrar empleo?", a: "Depende de tu perfil y vacantes disponibles. Algunos candidatos en días, otros en semanas. Mantén tu perfil actualizado." },
      { q: "¿Me contactarán aunque no aplique?", a: "Sí. Si identificamos una oportunidad que hace match, te contactamos proactivamente." },
      { q: "¿Puedo aplicar a múltiples vacantes?", a: "Sí, puedes aplicar a todas las que te interesen." },
    ]
  },
  {
    id: "datos",
    icon: FileText,
    title: "Mi Información",
    questions: [
      { q: "¿Cómo actualizo mi CV?", a: "Contáctanos por WhatsApp o email. Pronto tendremos portal de gestión." },
      { q: "¿Puedo eliminar mi perfil?", a: "Sí. Solicítalo y lo procesamos en máximo 48 horas." },
      { q: "¿Con quién comparten mi información?", a: "Solo con empresas verificadas cuando hay vacante relevante. Nunca vendemos datos." },
    ]
  },
  {
    id: "entrevistas",
    icon: Users,
    title: "Entrevistas y Ofertas",
    questions: [
      { q: "¿Me preparan para entrevistas?", a: "Sí. Te damos información sobre la empresa, el puesto y consejos específicos." },
      { q: "¿Puedo rechazar una oferta?", a: "Por supuesto. La decisión final es tuya." },
      { q: "¿Qué pasa si la oferta es menor a mi expectativa?", a: "Te acompañamos en la negociación. Antes de presentarte, validamos que la oferta esté en tu rango." },
    ]
  },
  {
    id: "pagos",
    icon: DollarSign,
    title: "Costos y Pagos",
    questions: [
      { q: "¿Debo pagar algo en algún momento?", a: "NO. Humanis nunca cobra a candidatos, ni antes, durante o después del proceso." },
      { q: "¿Cómo ganan dinero entonces?", a: "Las empresas nos pagan una comisión cuando contratamos exitosamente. El candidato nunca paga nada." },
      { q: "¿Me descuentan algo de mi primer sueldo?", a: "No. Tu sueldo es íntegro. La empresa paga nuestra comisión por separado." },
    ]
  },
];

export default function FAQTalentoPage() {
  const [showHeader, setShowHeader] = useState(true);
  const [activeCategory, setActiveCategory] = useState("general");
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

  const filteredQuestions = searchQuery 
    ? faqCategories.flatMap(cat => 
        cat.questions.filter(q => 
          q.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
          q.a.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(q => ({ ...q, category: cat.title }))
      )
    : null;

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
              FAQ para <span className="gradient-text">Candidatos</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Resolvemos tus dudas sobre nuestro servicio gratuito de empleo
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
            {filteredQuestions ? (
              // Search Results
              <div className="max-w-3xl mx-auto space-y-4">
                <p className="text-sm text-slate-500 mb-6">{filteredQuestions.length} resultados</p>
                {filteredQuestions.map((faq, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                    <button 
                      onClick={() => setOpenQuestion(openQuestion === idx ? null : idx)}
                      className="w-full p-6 flex justify-between items-start text-left hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex-1 pr-4">
                        <span className="text-xs text-indigo-600 font-semibold mb-1 block">{faq.category}</span>
                        <span className="font-semibold text-slate-900">{faq.q}</span>
                      </div>
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
                <button onClick={() => setSearchQuery("")} className="text-indigo-600 font-semibold hover:underline">
                  Ver todas las categorías
                </button>
              </div>
            ) : (
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
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">¿Listo para encontrar tu próximo empleo?</h2>
            <p className="text-xl mb-8 text-indigo-100">Regístrate gratis y empieza a recibir oportunidades</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/registro-talento" className="inline-flex items-center gap-2 bg-white text-indigo-600 font-semibold px-8 py-3 rounded-xl hover:bg-slate-50">
                <Sparkles size={20} />
                Registrarme
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