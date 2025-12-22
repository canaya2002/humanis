'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, Search, Shield, Clock, Users, 
  FileText, DollarSign, MessageCircle, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';

// --- COMPONENTES UI (BOTÓN MODERNO) ---
interface ModernButtonProps { children: React.ReactNode; onClick?: () => void; secondary?: boolean; href?: string; className?: string }
const ModernButton = ({ children, onClick, secondary = false, href, className = "" }: ModernButtonProps) => {
  const content = (
    <>
        <div className="absolute inset-0 z-0 backdrop-blur-[3px] overflow-hidden rounded-full" style={{ filter: 'blur(0.5px)', isolation: 'isolate' }} />
        <div className={`absolute inset-0 z-[1] rounded-full ${secondary ? 'bg-white/40' : 'bg-gradient-to-br from-slate-800/60 via-slate-900/70 to-slate-950/60'}`}></div>
        <div className="absolute inset-0 z-[2] overflow-hidden rounded-full" style={{ boxShadow: 'inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)' }}></div>
        <span className={`relative z-[3] flex items-center gap-3 ${secondary ? 'text-slate-900' : 'text-white'}`}>
        {children}
        {!secondary && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform stroke-[3]" />}
        </span>
    </>
  );

  const classes = `relative group overflow-hidden font-bold text-sm tracking-widest uppercase transition-all duration-400 ${secondary ? 'px-8 py-3 rounded-full' : 'px-8 py-3 rounded-full'} inline-flex items-center justify-center ${className}`;
  const styles = { boxShadow: '0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)' };

  if (href) return <Link href={href} className={classes} style={styles}>{content}</Link>;
  return <button onClick={onClick} className={classes} style={styles}>{content}</button>;
};

const faqCategories = [
  {
    id: "general",
    icon: Shield,
    title: "Preguntas Generales",
    questions: [
      { q: "¿Humanis cobra a los candidatos?", a: "No, nunca. Nuestros servicios son 100% gratuitos para candidatos. Las empresas pagan por nuestros servicios de reclutamiento." },
      { q: "¿Es seguro registrarme?", a: "Absolutamente. Protegemos tus datos conforme a la ley y solo compartimos tu información con empresas verificadas cuando existe una vacante relevante para tu perfil." },
      { q: "¿Qué tipo de vacantes manejan?", a: "Cubrimos un amplio espectro: ventas, administración, TI, logística, marketing, finanzas, operaciones e ingeniería, tanto presenciales como remotas." },
      { q: "¿Tienen vacantes en mi ciudad?", a: "Sí, tenemos cobertura nacional. Nuestras operaciones principales están en CDMX, Guadalajara y Monterrey, pero gestionamos muchas posiciones remotas." },
    ]
  },
  {
    id: "proceso",
    icon: Clock,
    title: "Proceso de Aplicación",
    questions: [
      { q: "¿Cómo funciona el proceso?", a: "Es simple: 1) Te registras y subes tu CV, 2) Nuestro sistema y equipo revisan tu perfil, 3) Si hay match, te contactamos para una entrevista, 4) Te preparamos y presentamos a la empresa, 5) Te acompañamos hasta la contratación." },
      { q: "¿Cuánto tiempo toma encontrar empleo?", a: "Depende de tu perfil y de las vacantes activas. Algunos candidatos se colocan en días, otros en semanas. Mantener tu perfil actualizado aumenta tus posibilidades." },
      { q: "¿Me contactarán aunque no aplique?", a: "Sí. Nuestra base de talento es consultada proactivamente por nuestros reclutadores. Si identificamos una oportunidad para ti, te llamaremos." },
      { q: "¿Puedo aplicar a múltiples vacantes?", a: "Por supuesto. Puedes aplicar a todas las vacantes que se alineen con tu experiencia e intereses." },
    ]
  },
  {
    id: "datos",
    icon: FileText,
    title: "Mi Información",
    questions: [
      { q: "¿Cómo actualizo mi CV?", a: "Puedes enviarnos tu CV actualizado por correo o WhatsApp. Estamos trabajando en un portal de autogestión que estará disponible pronto." },
      { q: "¿Puedo eliminar mi perfil?", a: "Sí, en cualquier momento. Solo solicítalo a nuestro equipo de soporte y procesaremos la baja de tus datos en un máximo de 48 horas." },
      { q: "¿Con quién comparten mi información?", a: "Únicamente con empresas clientes que han contratado nuestros servicios y tienen una vacante activa que coincide con tu perfil. Nunca vendemos datos a terceros." },
    ]
  },
  {
    id: "entrevistas",
    icon: Users,
    title: "Entrevistas y Ofertas",
    questions: [
      { q: "¿Me preparan para las entrevistas?", a: "Sí. Antes de presentarte con el cliente, te damos un briefing completo sobre la empresa, el puesto y consejos específicos para destacar en tu entrevista." },
      { q: "¿Puedo rechazar una oferta?", a: "Claro que sí. La decisión final siempre es tuya. Nosotros te asesoramos, pero tú decides qué es lo mejor para tu carrera." },
      { q: "¿Qué pasa si la oferta es menor a mi expectativa?", a: "Te acompañamos en la negociación salarial. Nuestro objetivo es que obtengas una oferta justa y competitiva acorde al mercado." },
    ]
  },
  {
    id: "pagos",
    icon: DollarSign,
    title: "Costos y Pagos",
    questions: [
      { q: "¿Debo pagar algo en algún momento?", a: "NO. Reiteramos: Humanis nunca cobra a los candidatos, ni por registro, ni por entrevistas, ni por contratación." },
      { q: "¿Cómo ganan dinero entonces?", a: "Nuestro modelo de negocio es B2B. Las empresas nos pagan una comisión por encontrarles el talento adecuado (tú)." },
      { q: "¿Me descuentan algo de mi primer sueldo?", a: "No. Tu sueldo es íntegro según lo negociado. La empresa paga nuestra comisión por separado, no sale de tu salario." },
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
      if (window.scrollY > lastScrollY.current && window.scrollY > 80) { setShowHeader(false); } else { setShowHeader(true); }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeQuestions = faqCategories.find(cat => cat.id === activeCategory)?.questions || [];

  // Filtrado optimizado
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
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900">
        <Header showHeader={showHeader} />

        <main className="pt-24 lg:pt-32 relative">
            
            {/* HERO SECTION */}
            <section className="px-6 pb-20 relative">
                {/* Fondo sutil */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-50 via-white to-white z-0 pointer-events-none" />
                
                <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-widest">
                        Centro de Ayuda
                    </div>
                    
                    <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-none">
                        Preguntas <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">Frecuentes</span>
                    </h1>
                    
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                        Todo lo que necesitas saber sobre nuestro proceso gratuito para candidatos.
                    </p>

                    {/* BUSCADOR */}
                    <div className="max-w-xl mx-auto relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-200" />
                        <div className="relative bg-white border border-slate-200 shadow-xl rounded-2xl p-2 flex items-center">
                            <Search className="ml-3 text-slate-400" size={20} />
                            <input 
                                type="text"
                                placeholder="Buscar pregunta..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-4 pr-4 py-3 bg-transparent border-none focus:ring-0 text-slate-900 placeholder-slate-400 font-medium outline-none"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENIDO PRINCIPAL */}
            <section className="py-12 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    {filteredQuestions ? (
                        // RESULTADOS DE BÚSQUEDA
                        <div className="max-w-3xl mx-auto space-y-6">
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{filteredQuestions.length} resultados encontrados</p>
                                <button onClick={() => setSearchQuery("")} className="text-sm font-bold text-slate-900 hover:text-cyan-600 transition-colors">
                                    Borrar búsqueda
                                </button>
                            </div>
                            
                            {filteredQuestions.map((faq, idx) => (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={idx} 
                                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                                >
                                    <button 
                                        onClick={() => setOpenQuestion(openQuestion === idx ? null : idx)}
                                        className="w-full p-6 flex justify-between items-start text-left"
                                    >
                                        <div className="flex-1 pr-6">
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">{faq.category}</span>
                                            <span className="text-lg font-bold text-slate-900">{faq.q}</span>
                                        </div>
                                        <div className={`p-2 rounded-full bg-slate-50 transition-transform duration-300 ${openQuestion === idx ? 'rotate-180 bg-slate-100' : ''}`}>
                                            <ChevronDown size={20} className="text-slate-500" />
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {openQuestion === idx && (
                                            <motion.div 
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-8 pt-0 text-slate-600 leading-relaxed font-medium">
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        // VISTA POR CATEGORÍAS
                        <div className="grid lg:grid-cols-12 gap-12">
                            
                            {/* SIDEBAR DE CATEGORÍAS */}
                            <div className="lg:col-span-4">
                                <div className="lg:sticky lg:top-32 space-y-3">
                                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 px-4">Categorías</h3>
                                    {faqCategories.map((cat) => {
                                        const Icon = cat.icon;
                                        const isActive = activeCategory === cat.id;
                                        return (
                                            <button
                                                key={cat.id}
                                                onClick={() => { setActiveCategory(cat.id); setOpenQuestion(null); }}
                                                className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left group ${
                                                    isActive 
                                                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20' 
                                                    : 'bg-white text-slate-600 hover:bg-slate-50'
                                                }`}
                                            >
                                                <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-white group-hover:shadow-sm'}`}>
                                                    <Icon size={20} />
                                                </div>
                                                <span className="font-bold text-sm">{cat.title}</span>
                                                {isActive && <ArrowRight size={16} className="ml-auto opacity-50" />}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* LISTA DE PREGUNTAS */}
                            <div className="lg:col-span-8 space-y-4">
                                <div className="mb-8 pl-2">
                                    <h2 className="text-2xl font-black text-slate-900">
                                        {faqCategories.find(c => c.id === activeCategory)?.title}
                                    </h2>
                                </div>
                                
                                {activeQuestions.map((faq, idx) => (
                                    <motion.div 
                                        key={idx} 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-colors duration-300"
                                    >
                                        <button 
                                            onClick={() => setOpenQuestion(openQuestion === idx ? null : idx)}
                                            className="w-full p-6 flex justify-between items-center text-left group"
                                        >
                                            <span className="font-bold text-slate-900 text-lg pr-8 group-hover:text-cyan-700 transition-colors">{faq.q}</span>
                                            <div className={`flex-shrink-0 p-2 rounded-full border transition-all duration-300 ${openQuestion === idx ? 'bg-slate-900 border-slate-900 text-white rotate-180' : 'bg-white border-slate-200 text-slate-400 group-hover:border-slate-400'}`}>
                                                <ChevronDown size={20} />
                                            </div>
                                        </button>
                                        
                                        <AnimatePresence>
                                            {openQuestion === idx && (
                                                <motion.div 
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-6 pb-8 pt-0">
                                                        <div className="h-px w-full bg-slate-100 mb-6" />
                                                        <p className="text-slate-600 leading-relaxed font-medium text-base">
                                                            {faq.a}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>

                        </div>
                    )}
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center relative overflow-hidden rounded-[3rem] bg-slate-50 border border-slate-100 p-12 lg:p-20">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <MessageCircle size={300} />
                    </div>
                    
                    <div className="relative z-10">
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">¿Tienes más preguntas?</h2>
                        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto font-medium">
                            Si no encontraste lo que buscabas, nuestro equipo de soporte está listo para ayudarte personalmente.
                        </p>
                        
                        <div className="flex flex-wrap justify-center gap-4">
                            <ModernButton href="/contacto">
                                Contactar Soporte
                            </ModernButton>
                            <a 
                                href="https://wa.me/525512345678" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase bg-white text-slate-900 border-2 border-slate-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-sm"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </main>
        
        <Footer />
      </div>
    </>
  );
}