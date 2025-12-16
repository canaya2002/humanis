'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  CheckCircle, Quote, Star, Calendar
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';

const globalStats = [
  { num: "2,500+", label: "Candidatos Colocados" },
  { num: "150+", label: "Empresas Atendidas" },
  { num: "95%", label: "Retención a 6 Meses" },
  { num: "72h", label: "Tiempo Promedio Primera Terna" },
];

const caseStudies = [
  {
    id: 1,
    company: "Retail Nacional",
    industry: "Retail",
    challenge: "Cubrir 50 posiciones de piso en 3 semanas para apertura de nuevas tiendas en 5 ciudades.",
    process: "Activamos nuestra red en las ciudades objetivo, realizamos filtros masivos y coordinamos entrevistas grupales.",
    result: "48 posiciones cubiertas en tiempo. 92% de retención a 90 días.",
    metrics: [
      { label: "Posiciones cubiertas", value: "48/50" },
      { label: "Tiempo de cobertura", value: "18 días" },
      { label: "Retención 90 días", value: "92%" }
    ],
    testimonial: {
      quote: "Humanis fue clave para nuestra apertura. Sin ellos, no hubiéramos llegado a tiempo.",
      author: "Director de Operaciones",
      role: "Cadena de Retail"
    },
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    company: "Startup Fintech",
    industry: "Tecnología",
    challenge: "Armar equipo de desarrollo de 8 personas (4 senior) en un mercado altamente competitivo.",
    process: "Headhunting especializado, evaluación técnica propia y enfoque en cultural fit.",
    result: "Equipo completo en 6 semanas. 100% de permanencia al año.",
    metrics: [
      { label: "Posiciones cubiertas", value: "8/8" },
      { label: "Tiempo promedio", value: "42 días" },
      { label: "Retención 12 meses", value: "100%" }
    ],
    testimonial: {
      quote: "El equipo que nos armaron ha sido fundamental para nuestro crecimiento.",
      author: "CTO",
      role: "Fintech Startup"
    },
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    company: "Empresa de Logística",
    industry: "Logística",
    challenge: "Reducir rotación del 45% mensual en operadores de almacén y choferes.",
    process: "Rediseño del perfil, nuevo proceso de filtro y seguimiento post-colocación.",
    result: "Rotación reducida al 18% en 4 meses.",
    metrics: [
      { label: "Rotación antes", value: "45%" },
      { label: "Rotación después", value: "18%" },
      { label: "Ahorro estimado", value: "$2M MXN" }
    ],
    testimonial: {
      quote: "Por fin encontramos un partner que entiende las particularidades de nuestra operación.",
      author: "Gerente de RH",
      role: "Empresa de Logística"
    },
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
];

const testimonials = [
  {
    quote: "Trabajar con Humanis ha sido un game changer para nuestro proceso de reclutamiento.",
    author: "María González",
    role: "HR Director",
    company: "Empresa Manufactura"
  },
  {
    quote: "La garantía de reemplazo nos da mucha tranquilidad. Están comprometidos con el resultado.",
    author: "Carlos Mendoza",
    role: "Gerente de Operaciones",
    company: "Empresa de Servicios"
  },
  {
    quote: "Por fin un proveedor que cumple lo que promete. Los tiempos de respuesta son reales.",
    author: "Ana Ramírez",
    role: "Talent Acquisition Lead",
    company: "Startup Tech"
  }
];

export default function CasosDeExitoPage() {
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
      <div className="min-h-screen bg-white">
        <Header showHeader={showHeader} />

        {/* Hero */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider rounded-full">
              Resultados Comprobados
            </span>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900">
              Casos de <span className="gradient-text">Éxito</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Resultados medibles para empresas como la tuya
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-violet-600">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 text-center text-white">
              {globalStats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-5xl font-bold mb-2">{stat.num}</p>
                  <p className="text-indigo-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto space-y-24">
            {caseStudies.map((caseStudy, idx) => (
              <div key={caseStudy.id} className={`grid lg:grid-cols-2 gap-12 items-center`}>
                <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                    {caseStudy.industry}
                  </span>
                  <h3 className="text-3xl font-bold mb-6">{caseStudy.company}</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-slate-500 text-sm uppercase mb-2">El Reto</h4>
                      <p className="text-slate-700">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-500 text-sm uppercase mb-2">El Proceso</h4>
                      <p className="text-slate-700">{caseStudy.process}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-500 text-sm uppercase mb-2">El Resultado</h4>
                      <p className="text-slate-700 font-medium">{caseStudy.result}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {caseStudy.metrics.map((metric, i) => (
                      <div key={i} className="p-4 bg-slate-50 rounded-xl text-center border border-slate-100">
                        <p className="text-2xl font-bold text-indigo-600">{metric.value}</p>
                        <p className="text-xs text-slate-500 mt-1">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl border border-indigo-100">
                    <Quote size={24} className="text-indigo-300 mb-3" />
                    <p className="text-slate-700 italic mb-4">"{caseStudy.testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-slate-900">{caseStudy.testimonial.author}</p>
                      <p className="text-sm text-slate-500">{caseStudy.testimonial.role}</p>
                    </div>
                  </div>
                </div>

                <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                  <div className="relative">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.company}
                      className="rounded-2xl w-full h-[400px] object-cover shadow-xl"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle size={24} className="text-green-600" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">Caso Exitoso</p>
                          <p className="text-sm text-slate-500">{caseStudy.industry}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* More Testimonials */}
        <section className="py-24 bg-slate-50 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                Testimonios
              </span>
              <h2 className="text-4xl font-bold">Lo que Dicen Nuestros Clientes</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="p-8 bg-white rounded-2xl border border-slate-100 shadow-lg">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                      <p className="text-xs text-slate-400">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">¿Quieres resultados así?</h2>
            <p className="text-xl mb-8 text-indigo-100">Agenda una llamada y cuéntanos tu reto</p>
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-indigo-600 font-semibold px-8 py-3 rounded-xl hover:bg-slate-50">
              <Calendar size={20} />
              Quiero Resultados
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}