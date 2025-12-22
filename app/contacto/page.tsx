'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, Send, 
  MessageSquare, ArrowRight, Building2 
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';

// --- FONDO DE RED (Variante Contacto) ---
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

export default function ContactoPage() {
  const [showHeader, setShowHeader] = useState(true);
  
  // SEO MASTERCLASS: LOCAL BUSINESS SCHEMA
  // Esto es ORO para el SEO Local. Ajusta los datos con tu dirección real.
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService", // O "EmploymentAgency"
    "name": "Humanis",
    "image": "https://www.humanis.com.mx/humanislogo.png",
    "@id": "https://www.humanis.com.mx",
    "url": "https://www.humanis.com.mx",
    "telephone": "+525512345678", // TU TELÉFONO REAL
    "email": "contacto@humanis.mx",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Paseo de la Reforma 222", // TU DIRECCIÓN REAL
      "addressLocality": "Ciudad de México",
      "postalCode": "06600",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.4294, // TUS COORDENADAS REALES
      "longitude": -99.1631
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$"
  };

  return (
    <>
      <GlobalStyles />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900">
        <Header showHeader={true} />
        
        <main className="pt-0">
            
            {/* HERO CONTACTO */}
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
                        {/* TARJETA 1: OFICINA */}
                        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                                <Building2 size={100} />
                            </div>
                            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6">
                                <MapPin size={28} />
                            </div>
                            <h3 className="text-xl font-black mb-2">Corporativo</h3>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                Av. Paseo de la Reforma 222,<br/>
                                Juárez, Cuauhtémoc,<br/>
                                06600 Ciudad de México, CDMX
                            </p>
                            <a href="https://maps.google.com" target="_blank" className="text-cyan-600 font-bold text-sm hover:underline flex items-center gap-1">
                                Ver en Google Maps <ArrowRight size={14} />
                            </a>
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
                                    <Phone size={16} /> +52 (55) 1234 5678
                                </p>
                                <p className="text-slate-300 flex items-center gap-3">
                                    <Mail size={16} /> contacto@humanis.mx
                                </p>
                                <p className="text-slate-300 flex items-center gap-3">
                                    <Clock size={16} /> Lun-Vie: 9am - 6pm
                                </p>
                            </div>
                            <div className="mt-8">
                                <a href="https://wa.me/525512345678" className="w-full block text-center bg-white text-slate-900 font-bold py-3 rounded-xl hover:bg-cyan-50 transition-colors">
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
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                ¿Prefieres el correo? Respondemos en menos de 2 horas en horario laboral.
                            </p>
                            <a href="mailto:hola@humanis.mx" className="text-cyan-600 font-bold text-sm hover:underline flex items-center gap-1">
                                hola@humanis.mx <ArrowRight size={14} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAPA DECORATIVO (O REAL SI TIENES API KEY) */}
            <section className="h-96 w-full bg-slate-200 relative grayscale opacity-80">
                {/* Aquí iría un iframe de Google Maps real. Por ahora, un placeholder estético. */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-slate-500 font-bold uppercase tracking-widest">Ubicación Estratégica CDMX</p>
                </div>
                {/* Overlay gradiente para suavizar la transición */}
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-transparent" />
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