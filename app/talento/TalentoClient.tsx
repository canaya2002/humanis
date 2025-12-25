'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Rocket, Search, Upload, UserCheck, Gift, 
  Briefcase, CheckCircle2, DollarSign, Clock, 
  ArrowRight, Star
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';
import ContactIntro from '../components/ContactIntro';

const TalentNetworkBackground = () => {
    const [nodes, setNodes] = useState<Array<{ id: number; x: number; y: number; size: number; }>>([]);
    useEffect(() => { 
        setNodes(Array.from({ length: 18 }, (_, i) => ({ id: i, x: Math.random() * 100, y: Math.random() * 100, size: 2 + Math.random() * 4 }))); 
    }, []);
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg className="absolute inset-0 w-full h-full opacity-25">
          {nodes.map((node, i) => (
             <motion.circle key={i} cx={`${node.x}%`} cy={`${node.y}%`} r={node.size} fill="#0ea5e9"
                animate={{ cx: [`${node.x}%`, `${node.x + 15}%`, `${node.x}%`], cy: [`${node.y}%`, `${node.y - 15}%`, `${node.y}%`], opacity: [0.3, 0.7, 0.3] }} 
                transition={{ duration: 18 + Math.random() * 10, repeat: Infinity, ease: "easeInOut" }} 
             />
          ))}
        </svg>
      </div>
    );
};

const benefits = [
  { icon: <DollarSign size={24} />, title: "100% Gratuito", desc: "Nunca te cobraremos por conseguirte empleo. Nuestro servicio lo pagan las empresas." },
  { icon: <Briefcase size={24} />, title: "Vacantes Premium", desc: "Acceso a posiciones exclusivas que no se publican en portales masivos." },
  { icon: <UserCheck size={24} />, title: "Asesoría Personal", desc: "Te acompañamos en la negociación de tu sueldo y preparación de entrevista." },
  { icon: <Clock size={24} />, title: "Proceso Rápido", desc: "Feedback constante. No te dejamos en 'visto'. Te decimos sí o no, rápido." },
];

const steps = [
  { num: "01", title: "Aplica", desc: "Envía tu CV a una vacante o regístrate en nuestra base general.", icon: <Upload size={20} /> },
  { num: "02", title: "Filtro", desc: "Entrevista inicial para conocer tus expectativas reales ($).", icon: <Search size={20} /> },
  { num: "03", title: "Cliente", desc: "Te presentamos con la empresa y coordinamos tus entrevistas.", icon: <UserCheck size={20} /> },
  { num: "04", title: "Oferta", desc: "Negociamos por ti para lograr la mejor compensación.", icon: <Gift size={20} /> },
];

const roles = ["Ventas & Retail", "Administrativo", "Tecnología (TI)", "Logística", "Atención a Clientes", "Finanzas"];

export default function TalentoClient() {
  const [showHeader, setShowHeader] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 80) { setShowHeader(false); } else { setShowHeader(true); }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <GlobalStyles />

      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900">
        <Header showHeader={showHeader} setShowContact={setShowContact} />
        <ContactIntro isOpen={showContact} onClose={() => setShowContact(false)} />

        <main className="pt-0">
          
          <section className="relative pt-32 pb-24 overflow-hidden bg-slate-50">
            <TalentNetworkBackground />
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
               <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1 animate-fadeInUp">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-[10px] font-bold uppercase tracking-widest mb-6 border border-cyan-200">
                         <Rocket size={12} /> Para Candidatos
                      </div>
                      <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tighter text-slate-900">
                        Tu siguiente gran <br/>
                        <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">salto profesional</span>
                      </h1>
                      <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg font-medium">
                        Conectamos el mejor talento con empresas que sí valoran a su gente. Sin costo para ti, siempre.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/vacantes" className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-300">
                           <Search size={18} /> Ver Vacantes
                        </Link>
                        <button onClick={() => setShowContact(true)} className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold py-4 px-8 rounded-full shadow-md border border-slate-200 hover:border-cyan-500 hover:text-cyan-600 transition-all">
                           Subir mi CV
                        </button>
                      </div>
                      
                      <div className="mt-10 flex items-center gap-4 text-sm font-bold text-slate-500">
                         <div className="flex -space-x-3">
                            {[1,2,3,4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative">
                                    <Image src={`/nosotros/culture-${i}.png`} alt="Candidato colocado exitosamente" fill className="object-cover" />
                                </div>
                            ))}
                         </div>
                         <p>+2,500 profesionales colocados</p>
                      </div>
                  </div>
                  
                  <div className="order-1 lg:order-2 relative h-[500px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white animate-fadeInRight">
                      <Image 
                        src="/nosotros/culture-3.png"
                        alt="Entrevista de trabajo exitosa en agencia de empleo"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-1000"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                      
                      <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce-slow">
                          <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                  <CheckCircle2 size={20} />
                              </div>
                              <div>
                                  <p className="text-sm font-bold text-slate-900">¡Contratado!</p>
                                  <p className="text-xs text-slate-500">Hace 2 minutos</p>
                              </div>
                          </div>
                      </div>
                  </div>
               </div>
            </div>
          </section>

          <section className="py-24 bg-white relative">
             <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                   <h2 className="text-4xl font-black text-slate-900 mb-4">¿Por qué Humanis?</h2>
                   <p className="text-xl text-slate-500">No somos otra bolsa de trabajo. Somos tus agentes.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                   {benefits.map((b, idx) => (
                      <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                         <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-600 mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                            {b.icon}
                         </div>
                         <h3 className="text-xl font-black text-slate-900 mb-3">{b.title}</h3>
                         <p className="text-slate-600 font-medium text-sm leading-relaxed">{b.desc}</p>
                      </div>
                   ))}
                </div>
             </div>
          </section>

          <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
             <div className="container mx-auto px-6 max-w-7xl relative z-10">
                 <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-black mb-8">Tu ruta hacia el éxito</h2>
                        <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                           Olvídate de enviar CVs al vacío. Nuestro proceso está diseñado para darte visibilidad y feedback real.
                        </p>
                        <Link href="/vacantes" className="inline-flex items-center gap-2 bg-cyan-500 text-slate-900 font-bold py-4 px-8 rounded-full hover:bg-cyan-400 transition-colors">
                            Ver Vacantes Activas <ArrowRight size={18} />
                        </Link>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {steps.map((step, idx) => (
                           <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                               <div className="flex justify-between items-start mb-4">
                                   <div className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg">{step.icon}</div>
                                   <span className="text-3xl font-black text-white/10">{step.num}</span>
                               </div>
                               <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                               <p className="text-slate-400 text-sm">{step.desc}</p>
                           </div>
                        ))}
                    </div>
                 </div>
             </div>
          </section>

          <section className="py-24 bg-slate-50">
             <div className="container mx-auto px-6 max-w-4xl text-center">
                <h2 className="text-3xl font-black text-slate-900 mb-10">Tenemos vacantes en</h2>
                <div className="flex flex-wrap justify-center gap-4">
                   {roles.map((role, idx) => (
                      <div key={idx} className="px-6 py-3 bg-white rounded-full shadow-sm border border-slate-200 font-bold text-slate-700 flex items-center gap-2">
                         <Star size={14} className="text-cyan-500" /> {role}
                      </div>
                   ))}
                </div>
                <p className="mt-8 text-slate-500 text-sm font-medium">Y muchas más áreas especializadas...</p>
             </div>
          </section>

          <div className="py-32 bg-white text-center">
             <div className="container mx-auto px-6">
                <h2 className="text-5xl md:text-6xl font-black mb-8 text-slate-900 tracking-tighter">¿Listo para mejorar tu vida?</h2>
                <div className="flex justify-center gap-4">
                    <Link href="/vacantes" className="inline-flex items-center gap-3 bg-slate-900 text-white font-bold py-4 px-10 rounded-full hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl">
                        <Briefcase size={20} />
                        Explorar Empleos
                    </Link>
                </div>
             </div>
          </div>

        </main>
        <Footer />
      </div>
      <style jsx>{`
         @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
         .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
         @keyframes fadeInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
         .animate-fadeInRight { animation: fadeInRight 0.8s ease-out forwards; }
         .animate-bounce-slow { animation: bounce 3s infinite; }
         @keyframes bounce { 0%, 100% { transform: translateY(-5%); } 50% { transform: translateY(0); } }
      `}</style>
    </>
  );
}
