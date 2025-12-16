'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Search, Briefcase, MapPin, TrendingUp, Shield, 
  CheckCircle, ArrowRight, Star, Users, Clock,
  Building2, DollarSign, Heart, Sparkles
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';

const benefits = [
  { 
    icon: <Shield size={28} />, 
    title: "100% Gratuito", 
    desc: "Nunca cobramos a candidatos. Nuestros servicios son pagados por las empresas." 
  },
  { 
    icon: <Briefcase size={28} />, 
    title: "Oportunidades Reales", 
    desc: "Vacantes verificadas con empresas serias. Nada de ofertas fantasma." 
  },
  { 
    icon: <Users size={28} />, 
    title: "Acompañamiento", 
    desc: "Te guiamos en el proceso, desde la postulación hasta la negociación." 
  },
  { 
    icon: <TrendingUp size={28} />, 
    title: "Desarrollo", 
    desc: "Acceso a oportunidades que impulsan tu carrera profesional." 
  },
];

const howItWorks = [
  { num: "01", title: "Regístrate", desc: "Crea tu perfil y sube tu CV. Toma solo 5 minutos." },
  { num: "02", title: "Te Contactamos", desc: "Si hay una vacante que hace match, te llamamos." },
  { num: "03", title: "Entrevistas", desc: "Te preparamos y acompañamos en el proceso." },
  { num: "04", title: "¡Nuevo Empleo!", desc: "Celebramos contigo tu nuevo inicio." },
];

const featuredVacancies = [
  { 
    title: "Ejecutivo de Ventas", 
    company: "Empresa Retail", 
    location: "CDMX", 
    salary: "$18,000 - $25,000",
    type: "Presencial",
    tags: ["Ventas", "Tiempo completo"]
  },
  { 
    title: "Desarrollador Full Stack", 
    company: "Startup Tech", 
    location: "Remoto", 
    salary: "$45,000 - $60,000",
    type: "Remoto",
    tags: ["TI", "React", "Node.js"]
  },
  { 
    title: "Coordinador de Logística", 
    company: "Empresa Logística", 
    location: "Guadalajara", 
    salary: "$22,000 - $28,000",
    type: "Presencial",
    tags: ["Logística", "Almacén"]
  },
];

const testimonials = [
  {
    quote: "Gracias a Humanis encontré el trabajo que buscaba en menos de 2 semanas. El proceso fue muy profesional.",
    author: "María García",
    role: "Ejecutiva de Ventas",
    company: "Ahora en Empresa Retail"
  },
  {
    quote: "Me acompañaron en todo el proceso, desde preparar mi CV hasta negociar mi salario. 100% recomendado.",
    author: "Carlos Hernández",
    role: "Desarrollador Senior",
    company: "Ahora en Startup Tech"
  },
];

export default function TalentoPage() {
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
          <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50">
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="opacity-0 animate-fadeInUp">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-200">Para Candidatos</span>
                  <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                    Encuentra tu <br/>
                    <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Próximo Empleo</span>
                  </h1>
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    Oportunidades reales con empresas verificadas en todo México. 
                    <strong className="text-slate-900"> Siempre gratuito</strong> para ti.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/vacantes" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                      <Search size={20} />
                      Ver Vacantes
                    </Link>
                    <Link href="/registro-talento" className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold py-3 px-8 rounded-xl shadow-lg border-2 border-slate-200 hover:border-indigo-600 hover:text-indigo-600 transition-all">
                      <Sparkles size={20} />
                      Registrarme
                    </Link>
                  </div>

                  <div className="flex items-center gap-6 mt-10 pt-10 border-t border-slate-200">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-indigo-600">2,500+</p>
                      <p className="text-sm text-slate-500">Colocados</p>
                    </div>
                    <div className="w-px h-12 bg-slate-200" />
                    <div className="text-center">
                      <p className="text-3xl font-bold text-indigo-600">150+</p>
                      <p className="text-sm text-slate-500">Empresas</p>
                    </div>
                    <div className="w-px h-12 bg-slate-200" />
                    <div className="text-center">
                      <p className="text-3xl font-bold text-indigo-600">32</p>
                      <p className="text-sm text-slate-500">Estados</p>
                    </div>
                  </div>
                </div>

                <div className="relative opacity-0 animate-fadeInRight">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Profesional exitoso"
                    className="rounded-3xl w-full h-[500px] object-cover shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Heart size={24} className="text-green-600" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">100% Gratuito</p>
                        <p className="text-sm text-slate-500">Siempre para ti</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-200">Beneficios</span>
                <h2 className="text-4xl font-bold mb-4">¿Por qué Humanis?</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Te conectamos con las mejores oportunidades sin costo alguno.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, idx) => (
                  <div 
                    key={idx} 
                    className="p-6 text-center bg-white/60 backdrop-blur-xl rounded-2xl border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 opacity-0 animate-fadeInUp"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center text-indigo-600">{benefit.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-slate-600 text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-200">Proceso Simple</span>
                <h2 className="text-4xl font-bold mb-4">Cómo Funciona</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {howItWorks.map((step, idx) => (
                  <div 
                    key={idx} 
                    className="relative opacity-0 animate-fadeInUp"
                    style={{ animationDelay: `${idx * 0.15}s` }}
                  >
                    <div className="text-7xl font-black text-slate-100 absolute -top-4 -left-2">{step.num}</div>
                    <div className="relative z-10 pt-8">
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-slate-600">{step.desc}</p>
                    </div>
                    {idx < howItWorks.length - 1 && (
                      <div className="hidden lg:block absolute top-12 right-0 translate-x-1/2">
                        <ArrowRight className="text-slate-300" size={24} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link href="/registro-talento" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <Sparkles size={20} />
                  Comenzar Ahora
                </Link>
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-200">Oportunidades</span>
                  <h2 className="text-4xl font-bold">Vacantes Destacadas</h2>
                </div>
                <Link href="/vacantes" className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold py-3 px-6 rounded-xl border-2 border-slate-200 hover:border-indigo-600 hover:text-indigo-600 transition-all">
                  Ver Todas
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {featuredVacancies.map((vacancy, idx) => (
                  <Link 
                    key={idx}
                    href="/vacantes"
                    className="p-6 bg-white border-2 border-slate-100 rounded-2xl hover:border-indigo-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fadeInUp"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-lg mb-1">{vacancy.title}</h3>
                        <p className="text-slate-600 text-sm flex items-center gap-1">
                          <Building2 size={14} />
                          {vacancy.company}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${vacancy.type === 'Remoto' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                        {vacancy.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {vacancy.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign size={14} />
                        {vacancy.salary}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {vacancy.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-4 border border-white/20">Historias de Éxito</span>
                <h2 className="text-4xl font-bold">Lo que Dicen Nuestros Candidatos</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {testimonials.map((testimonial, idx) => (
                  <div 
                    key={idx}
                    className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm opacity-0 animate-fadeInUp"
                    style={{ animationDelay: `${idx * 0.15}s` }}
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-200 mb-6 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-slate-400">{testimonial.role}</p>
                      <p className="text-xs text-indigo-400">{testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl text-center">
              <h2 className="text-4xl font-bold mb-6">
                Tu próximo empleo te está esperando
              </h2>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                Regístrate gratis y empieza a recibir oportunidades que hacen match con tu perfil.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/registro-talento" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <Sparkles size={20} />
                  Registrarme Gratis
                </Link>
                <Link href="/vacantes" className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold py-3 px-8 rounded-xl border-2 border-slate-200 hover:border-indigo-600 hover:text-indigo-600 transition-all">
                  <Search size={20} />
                  Ver Vacantes
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <style jsx>{`
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
      `}</style>
    </>
  );
}