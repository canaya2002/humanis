'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Send, 
  MessageSquare, ArrowRight, Building2, Clock
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';
import LocationMap from '../components/LocationMap';

const ContactBackground = () => {
    const [nodes, setNodes] = useState<Array<{ id: number; x: number; y: number; size: number; }>>([]);
    useEffect(() => { 
        setNodes(Array.from({ length: 15 }, (_, i) => ({ id: i, x: Math.random() * 100, y: Math.random() * 100, size: 2 + Math.random() * 3 }))); 
    }, []);
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-slate-50">
        <svg className="absolute inset-0 w-full h-full opacity-30">
          {nodes.map((node, i) => (
             <motion.circle key={i} cx={`${node.x}%`} cy={`${node.y}%`} r={node.size} fill="#0ea5e9" 
                animate={{ cx: [`${node.x}%`, `${node.x + 5}%`, `${node.x}%`], cy: [`${node.y}%`, `${node.y - 5}%`, `${node.y}%`] }} 
                transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, ease: "easeInOut" }} 
             />
          ))}
        </svg>
      </div>
    );
};

export default function ContactoClient() {
  const [showHeader, setShowHeader] = useState(true);

  return (
    <>
      <GlobalStyles />

      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900">
        <Header showHeader={showHeader} />
        
        <main className="pt-0">
            
            <section className="relative pt-32 pb-20 overflow-hidden">
                <ContactBackground />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest mb-6 shadow-lg">
                            Estamos listos
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-slate-900">
                            Hablemos de <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Tu Futuro</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed font-light">
                            Ya sea que busques talento excepcional o tu próxima gran oportunidad, el primer paso es conversar.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* TARJETA 1: OFICINA - NAP VISIBLE */}
                        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                                <Building2 size={100} />
                            </div>
                            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6">
                                <MapPin size={28} />
                            </div>
                            <h3 className="text-xl font-black mb-2">Corporativo</h3>
                            <p className="text-slate-600 mb-4 leading-relaxed text-sm font-medium">
                                C. Montes Urales 424,<br/>
                                Lomas - Virreyes, Miguel Hidalgo,<br/>
                                11000 Ciudad de México, CDMX
                            </p>
                            <a 
                                href="https://maps.app.goo.gl/tUCRqJ1..." 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-cyan-600 font-bold text-sm hover:underline flex items-center gap-1"
                            >
                                Ver en Google Maps <ArrowRight size={14} />
                            </a>
                            <div className="mt-6 pt-6 border-t border-slate-100">
                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                    <Clock size={14} />
                                    <span className="font-medium">Lun - Vie: 9:00 - 18:00</span>
                                </div>
                            </div>
                        </div>

                        {/* TARJETA 2: CONTACTO DIRECTO */}
                        <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-2xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                                <MessageSquare size={100} />
                            </div>
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-sm">
                                <Phone size={28} />
                            </div>
                            <h3 className="text-xl font-black mb-2">Contacto Directo</h3>
                            <div className="space-y-3">
                                <p className="text-slate-300 flex items-center gap-3">
                                    <Phone size={16} /> +52 55 44 16 7974
                                </p>
                                <p className="text-slate-300 flex items-center gap-3">
                                    <Mail size={16} /> contacto@humanis.mx
                                </p>
                            </div>
                            <div className="mt-8">
                                <a 
                                    href="https://wa.me/525544167974" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full block text-center bg-white text-slate-900 font-bold py-3 rounded-xl hover:bg-cyan-50 transition-colors"
                                >
                                    Enviar WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* TARJETA 3: EMAIL */}
                        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                                <Send size={100} />
                            </div>
                            <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 mb-6">
                                <Mail size={28} />
                            </div>
                            <h3 className="text-xl font-black mb-2">Escríbenos</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                                ¿Prefieres el correo? Respondemos en menos de 2 horas en horario laboral.
                            </p>
                            <a href="mailto:contacto@humanis.mx" className="text-cyan-600 font-bold text-sm hover:underline flex items-center gap-1">
                                contacto@humanis.mx <ArrowRight size={14} />
                            </a>
                            <div className="mt-6 pt-6 border-t border-slate-100">
                                <p className="text-xs text-slate-500 font-medium">
                                    Para consultas empresariales, licitaciones o alianzas estratégicas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN DEL MAPA */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Nuestra Ubicación</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Visítanos en nuestras oficinas centrales en Lomas - Virreyes, CDMX.
                        </p>
                    </div>
                    
                    <div className="h-[600px] w-full relative z-0 rounded-[2.5rem] shadow-2xl overflow-hidden border-4 border-white">
                        <LocationMap />
                    </div>
                    
                    {/* INFO ADICIONAL DEBAJO DEL MAPA */}
                    <div className="mt-8 grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center">
                            <MapPin size={24} className="mx-auto mb-3 text-cyan-600" />
                            <h4 className="font-bold text-slate-900 mb-1">Dirección</h4>
                            <p className="text-sm text-slate-600">C. Montes Urales 424, Lomas - Virreyes</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center">
                            <Phone size={24} className="mx-auto mb-3 text-cyan-600" />
                            <h4 className="font-bold text-slate-900 mb-1">Teléfono</h4>
                            <p className="text-sm text-slate-600">+52 55 44 16 7974</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center">
                            <Clock size={24} className="mx-auto mb-3 text-cyan-600" />
                            <h4 className="font-bold text-slate-900 mb-1">Horario</h4>
                            <p className="text-sm text-slate-600">Lun - Vie: 9:00 - 18:00</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
        <Footer />
      </div>
      <style jsx>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
      `}</style>
    </>
  );
}
