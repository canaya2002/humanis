'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // <--- ESTO FALTABA
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, Search, HelpCircle, FileText, Shield, 
  Users, Clock, DollarSign, CheckCircle, XCircle, Sparkles, ArrowRight
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactIntro from '../components/ContactIntro';

// --- 1. FONDO DE RED NEURONAL ---
const OrganicNetworkBackground = () => {
  const [nodes, setNodes] = useState<Array<{
    id: number;
    x: number; y: number;
    xMove: number; yMove: number;
    duration: number;
    size: number;
  }>>([]);
  
  useEffect(() => { 
      const newNodes = Array.from({ length: 25 }, (_, i) => ({ 
          id: i, 
          x: Math.random() * 100, 
          y: Math.random() * 100,
          xMove: (Math.random() - 0.5) * 20, 
          yMove: (Math.random() - 0.5) * 20, 
          duration: 18 + Math.random() * 15, 
          size: 1.5 + Math.random() * 3
      })); 
      setNodes(newNodes); 
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-white z-0" />
      <svg className="absolute inset-0 w-full h-full z-0 overflow-visible opacity-30">
        <defs>
            <linearGradient id="netGradientFaq" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#94a3b8" stopOpacity="0"/> 
                <stop offset="50%" stopColor="#0f172a" stopOpacity="0.3"/> 
                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0"/>
            </linearGradient>
        </defs>
        {nodes.map((node, i) => {
            const target = nodes[(i + 1) % nodes.length]; 
            if (i % 2 !== 0) return null; 
            return (
            <g key={`net-group-faq-${node.id}`}> 
                <motion.line 
                    x1={`${node.x}%`} y1={`${node.y}%`} 
                    x2={`${target.x}%`} y2={`${target.y}%`} 
                    stroke="url(#netGradientFaq)" 
                    strokeWidth="0.8" 
                    strokeLinecap="round"
                    animate={{ 
                        x1: [`${node.x}%`, `${node.x + node.xMove}%`, `${node.x}%`],
                        y1: [`${node.y}%`, `${node.y + node.yMove}%`, `${node.y}%`],
                        x2: [`${target.x}%`, `${target.x + target.xMove}%`, `${target.x}%`],
                        y2: [`${target.y}%`, `${target.y + target.yMove}%`, `${target.y}%`],
                    }} 
                    transition={{ duration: Math.max(node.duration, target.duration), repeat: Infinity, ease: "easeInOut" }} 
                /> 
            </g> 
            )
        })}
        {nodes.map((node) => (
            <motion.circle 
                key={`node-faq-${node.id}`}
                cx={`${node.x}%`} cy={`${node.y}%`} 
                r={node.size} 
                fill="#1e293b" 
                opacity={0.1} 
                animate={{ 
                    cx: [`${node.x}%`, `${node.x + node.xMove}%`, `${node.x}%`],
                    cy: [`${node.y}%`, `${node.y + node.yMove}%`, `${node.y}%`],
                    opacity: [0.1, 0.2, 0.1] 
                }} 
                transition={{ duration: node.duration, repeat: Infinity, ease: "easeInOut" }} 
            /> 
        ))}
      </svg>
    </div>
  );
};

// --- COMPONENTES UI ---
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

// --- TEXTO ROTATIVO ---
const RotatingText = () => {
  const words = ['TRANSPARENTE', 'CONFIABLE', 'LEGAL', 'PROFESIONAL', 'CLARO'];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((prev) => (prev + 1) % words.length), 3000);
    return () => clearInterval(interval);
  }, [words.length]);
  return (
    <span className="relative inline-block min-w-[280px] md:min-w-[680px] text-left h-[1.2em] align-top overflow-visible -mb-2"> 
      {words.map((word, idx) => (
        <motion.span
          key={idx} initial={false} animate={{ opacity: idx === currentIndex ? 1 : 0, y: idx === currentIndex ? 0 : idx === (currentIndex - 1 + words.length) % words.length ? -50 : 50, filter: idx === currentIndex ? 'blur(0px)' : 'blur(4px)' }} transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }} className="absolute left-0 top-0 w-full bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-cyan-600 to-slate-900 block px-1"
        > {word} </motion.span>
      ))}
    </span>
  );
};

// --- ANIMACIÓN DE N DESPLAZÁNDOSE (OPCIONAL) ---
const SlidingNBackground = ({ inverted = false }: { inverted?: boolean }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02] mix-blend-multiply">
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 left-0 h-full whitespace-nowrap flex items-center"
        style={{ fontSize: '45vh', fontWeight: 900, fontStyle: 'italic' }}
      >
        <span className={`text-slate-900 ${inverted ? 'scale-y-[-1]' : ''}`}>
          NNNNNNNNNNNNNNNNNNNNNNNN
        </span>
      </motion.div>
    </div>
  );
};

// --- ACORDEÓN PREMIUM ---
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 relative group ${
        isOpen 
          ? 'shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border-2 border-transparent bg-clip-padding' 
          : 'border-2 border-slate-100 hover:border-slate-200 hover:shadow-md'
      }`}
      style={isOpen ? {
        backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #0891b2, #2563eb)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'content-box, border-box'
      } : {}}
    >
      <button
        onClick={onClick}
        className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 text-left"
      >
        <span className={`text-lg sm:text-xl font-black leading-tight transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-slate-100 text-cyan-700' : 'bg-slate-50 text-slate-400 group-hover:text-slate-600'}`}
        >
          <ChevronDown size={20} strokeWidth={3} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-8 pb-8 pt-2">
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mb-6" />
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium whitespace-pre-line">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- DATOS FAQ ---
const faqCategories = [
  {
    id: 1,
    title: "Sobre Humanis y el Servicio",
    icon: <HelpCircle size={28} />,
    questions: [
      {
        q: "¿Qué es Humanis?",
        a: "Humanis es una empresa que opera con dos líneas de servicio:\n\n• Agencia de colocación (reclutamiento y selección): te conectamos con talento para que tu empresa contrate directamente.\n\n• Proyectos por entregables (especialistas independientes): te conectamos con especialistas para trabajos por proyecto, con entregables definidos."
      },
      {
        q: "¿Humanis es \"outsourcing\" o subcontratación de personal?",
        a: "No. Humanis no \"pone personal a disposición\" del cliente como patrón sustituto.\n\nEn agencia de colocación, Humanis participa en reclutamiento/selección, pero la relación laboral es entre el cliente y la persona contratada."
      },
      {
        q: "¿Quién es el patrón (empleador) del personal colocado?",
        a: "En el servicio de agencia de colocación, el patrón es la empresa cliente, porque es quien se beneficia del servicio y quien realiza la contratación."
      },
      {
        q: "¿Quién paga IMSS, prestaciones y cumple obligaciones laborales?",
        a: "En colocación, las obligaciones laborales (IMSS, INFONAVIT, nómina, prestaciones, PTU, etc.) corresponden al empleador (cliente) conforme al tipo de contratación que realice."
      },
      {
        q: "¿Humanis puede \"mandar personal temporal\" para cubrir turnos?",
        a: "Humanis no comercializa esquemas de \"personal a disposición\" para operar la actividad principal del cliente.\n\nSi necesitas cobertura urgente, Humanis puede:\n• Reclutar y presentarte finalistas para contratación directa; o\n• Para casos de proyecto especializado, vincularte con especialistas por entregables."
      }
    ]
  },
  {
    id: 2,
    title: "Proceso de Reclutamiento",
    icon: <Users size={28} />,
    questions: [
      {
        q: "¿Qué perfiles cubren?",
        a: "Operativos y administrativos (por ejemplo, restaurantes: meseros, cocina, caja, supervisión, etc.) y también especialistas para proyectos (marketing, diseño, foto/video, sistemas, capacitación, etc.), dependiendo del paquete contratado."
      },
      {
        q: "¿Cuánto tarda el proceso?",
        a: "Depende del perfil y la urgencia. En esquemas \"express\" se puede trabajar con metas tipo:\n\n• Primeros candidatos en 24–72 horas\n• Finalistas en 5-10 días\n\n(Los tiempos exactos se pactan por escrito en tu propuesta/orden de servicio.)"
      },
      {
        q: "¿Qué validaciones hacen?",
        a: "Según el servicio contratado, Humanis puede realizar:\n\n• Entrevista inicial y por competencias\n• Validación de experiencia (CV y referencias)\n• Pruebas técnicas (según puesto)\n• Coordinación de entrevistas con tu equipo\n\n(Cualquier validación adicional se realiza con conocimiento del candidato y conforme al aviso de privacidad.)"
      },
      {
        q: "¿Qué necesita Humanis de mi empresa para iniciar?",
        a: "Para iniciar rápido, normalmente pedimos:\n\n• Perfil del puesto y funciones\n• Sueldo ofrecido (rango) y esquema de contratación\n• Ubicación / horario / fecha de ingreso\n• \"No negociables\" (3 filtros críticos)\n• Nombre y contacto de quien entrevistará/decidirá"
      },
      {
        q: "¿Quién toma la decisión final de contratación?",
        a: "Siempre la empresa cliente. Humanis presenta candidatos pre-validados, pero la decisión final de contratación es 100% tuya."
      }
    ]
  },
  {
    id: 3,
    title: "Comisión, Pagos y Facturación",
    icon: <DollarSign size={28} />,
    questions: [
      {
        q: "¿Cómo funciona la comisión del 15%?",
        a: "Humanis cobra una tarifa por el servicio de reclutamiento/colocación o por la gestión de un proyecto, según el paquete.\n\nEjemplos de esquemas:\n• Colocación (pago único): 15% de un mes del salario mensual bruto del puesto\n• Reclutamiento continuo: 15% mensual (o retainer) por un servicio con entregables definidos\n• Proyectos: 15% sobre el presupuesto del proyecto o sobre el monto pactado del servicio"
      },
      {
        q: "¿La comisión se descuenta del sueldo de la persona contratada?",
        a: "No. La tarifa de Humanis se factura al empleador/cliente. En el servicio de colocación, para el trabajador el servicio debe ser gratuito y no puede cobrarse a solicitantes de empleo."
      },
      {
        q: "¿Cómo facturan?",
        a: "Humanis emite el CFDI correspondiente por servicios de reclutamiento/colocación o intermediación/gestión, conforme al paquete contratado."
      },
      {
        q: "¿Cuándo se paga?",
        a: "Ejemplos comunes (se define en contrato):\n\n• Anticipo (por arranque) + saldo al contratar; o\n• Pago total al contratar; o\n• Pago mensual (en reclutamiento continuo)\n\nLo que aplique debe venir en tu propuesta/contrato."
      }
    ]
  },
  {
    id: 4,
    title: "Garantías y Cancelaciones",
    icon: <Shield size={28} />,
    questions: [
      {
        q: "¿Ofrecen garantía de reemplazo?",
        a: "Puede ofrecerse (por ejemplo, 30 o 90 días) y debe establecer:\n\n• Qué se considera \"baja\" válida para reemplazo\n• Número de reemplazos incluidos\n• Plazos para solicitarlo\n• Exclusiones (p.ej., cambios de condiciones, faltas imputables al empleador, etc.)"
      },
      {
        q: "¿Qué pasa si cambio el perfil o condiciones a mitad del proceso?",
        a: "Se documenta el cambio y puede ajustar tiempos/alcances/costo, dependiendo del impacto (por escrito)."
      },
      {
        q: "¿Qué pasa si pauso o cancelo la vacante?",
        a: "Se aplican las condiciones de cancelación pactadas (por ejemplo, pago por trabajo ya realizado y cierre administrativo del proceso)."
      }
    ]
  },
  {
    id: 5,
    title: "Confidencialidad y Cumplimiento",
    icon: <FileText size={28} />,
    questions: [
      {
        q: "¿Cómo manejan los datos personales (CVs, referencias, etc.)?",
        a: "Humanis trata datos personales conforme a su Aviso de Privacidad y aplica medidas de seguridad administrativas, técnicas y físicas conforme a la normativa vigente."
      },
      {
        q: "¿Humanis puede enviar CVs a mi empresa?",
        a: "Sí, como parte del proceso de reclutamiento, pero únicamente para finalidades de selección y contratación, bajo el aviso de privacidad y consentimiento aplicable."
      },
      {
        q: "¿Humanis discrimina o filtra por criterios prohibidos?",
        a: "No. Humanis se compromete a no discriminar por origen étnico, sexo, edad, discapacidad, condición social, salud, embarazo, religión, opiniones, preferencias sexuales, estado civil u otra condición protegida; solo se consideran capacidades/competencias relacionadas con el puesto."
      },
      {
        q: "¿Dónde puedo pedir su registro/constancia como agencia?",
        a: "En tu propuesta/contrato se puede incluir el número de autorización/registro STPS de Humanis (si aplica) y la información de contacto oficial."
      }
    ]
  }
];

export default function FAQEmpresasPage() {
  const [showHeader, setShowHeader] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState('');
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

  const toggleItem = (categoryId: number, questionIndex: number) => {
    const key = `${categoryId}-${questionIndex}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
           q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900">
      <Header showHeader={showHeader} setShowContact={setShowContact} />
      <ContactIntro isOpen={showContact} onClose={() => setShowContact(false)} />

      <main className="relative">
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-40 pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-white">
          <OrganicNetworkBackground />
          
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              
              {/* IMAGEN IZQUIERDA (LOCAL) */}
              <motion.div 
                initial={{ opacity: 0, x: -50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-1/2 order-2 lg:order-1 relative"
              >
                <div className="relative z-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-r from-cyan-400/30 to-blue-400/30 blur-[120px] rounded-full opacity-70 -z-10 mix-blend-multiply" />
                  <Image 
                    src="/faq/faq-empresas.png" // RUTA LOCAL
                    alt="FAQ Empresas Humanis"
                    width={800}
                    height={800}
                    className="w-full h-auto relative z-10 drop-shadow-2xl object-contain hover:scale-[1.02] transition-transform duration-500"
                    priority
                  />
                </div>
              </motion.div>

              {/* TEXTO DERECHA */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="w-full lg:w-1/2 order-1 lg:order-2 text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 mb-6 lg:mb-8 shadow-sm hover:shadow-md transition-shadow">
                  <Sparkles size={16} className="text-cyan-600" />
                  <span className="text-xs font-black uppercase tracking-widest text-slate-800">
                    Centro de Ayuda Corporativo
                  </span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 lg:mb-10 leading-[0.95] tracking-tighter text-slate-900">
                  Respuestas <RotatingText />
                  <br className="hidden sm:block"/>
                  <span className="block mt-2">para tu Negocio</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-slate-600 mb-6 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                  Claridad total sobre nuestros servicios de reclutamiento y marco legal.
                </p>
                <p className="text-lg text-slate-500 mb-10 lg:mb-14 font-light max-w-xl mx-auto lg:mx-0">
                  Navega por nuestras preguntas frecuentes o utiliza el buscador inteligente para encontrar lo que necesitas.
                </p>
                
                <div className="relative max-w-lg mx-auto lg:mx-0 group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                  <div className="relative bg-white rounded-2xl shadow-lg flex items-center p-2 border border-slate-100">
                    <Search size={24} className="ml-4 text-slate-400 group-focus-within:text-cyan-600 transition-colors" />
                    <input 
                        type="text"
                        placeholder="Buscar pregunta (ej. comisión, garantía...)"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-4 pr-4 py-4 bg-transparent border-none focus:ring-0 text-slate-900 text-lg font-medium placeholder:text-slate-400 outline-none"
                    />
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* --- CATEGORÍAS (FONDO ALTERNO) --- */}
        {(searchQuery ? filteredCategories : faqCategories).map((category, categoryIndex) => {
          const sectionBg = categoryIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50/50';
          const showSlidingN = categoryIndex % 2 !== 0;
          
          return (
            <section key={category.id} className={`relative py-24 sm:py-32 ${sectionBg} overflow-hidden border-t border-slate-100`}>
              {showSlidingN && <SlidingNBackground inverted={categoryIndex % 4 === 3} />}
              
              <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 mb-12 sm:mb-16"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-slate-900 flex items-center justify-center text-white shadow-xl shadow-slate-900/20 flex-shrink-0 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-widest text-cyan-600 mb-2">
                      Sección {category.id}
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter">
                      {category.title}
                    </h2>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-6">
                  {category.questions.map((question, questionIndex) => (
                    <FAQItem
                      key={questionIndex}
                      question={question.q}
                      answer={question.a}
                      isOpen={openItems[`${category.id}-${questionIndex}`] || false}
                      onClick={() => toggleItem(category.id, questionIndex)}
                    />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* --- NO RESULTS --- */}
        {searchQuery && filteredCategories.length === 0 && (
          <section className="py-40 bg-white">
            <div className="container mx-auto px-6 max-w-2xl text-center">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <XCircle size={40} className="text-slate-400" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Sin resultados</h3>
              <p className="text-xl text-slate-600 mb-12">
                No encontramos coincidencias para "{searchQuery}". Intenta con otra palabra clave.
              </p>
              <button 
                onClick={() => setSearchQuery('')}
                className="inline-flex items-center gap-3 bg-slate-900 text-white font-bold py-4 px-8 rounded-full hover:bg-slate-800 hover:shadow-lg transition-all"
              >
                Mostrar todas las preguntas
              </button>
            </div>
          </section>
        )}

        {/* --- CTA FINAL --- */}
        <div className="py-40 bg-white text-center relative overflow-hidden z-10 border-t border-slate-100">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
            <div className="relative z-10 container mx-auto px-6">
                <h2 className="text-6xl md:text-7xl font-black mb-10 text-slate-900 tracking-tighter leading-none">
                    ¿Dudas no resueltas?
                </h2>
                <p className="text-2xl text-slate-600 mb-12 max-w-2xl mx-auto font-light">
                    Nuestro equipo legal y operativo está listo para aclarar cualquier punto específico.
                </p>
                <ModernButton onClick={() => setShowContact(true)}>
                    Agendar Sesión de Aclaración
                </ModernButton>
            </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}