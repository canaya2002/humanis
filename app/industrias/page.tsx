'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  ShoppingBag, Truck, Building2, Code, Factory, 
  Stethoscope, GraduationCap, Utensils, CheckCircle, 
  ArrowRight, Users, Clock, TrendingUp, Calendar
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';

const industries = [
  {
    id: "retail",
    icon: <ShoppingBag size={32} />,
    title: "Retail y Consumo",
    desc: "Tiendas, franquicias, e-commerce y marcas de consumo.",
    roles: ["Gerente de tienda", "Vendedor", "Visual merchandiser", "Cajero", "Almacenista", "Supervisor de piso"],
    challenges: ["Alta rotación en temporadas", "Volumen de contratación", "Horarios rotativos"],
    solution: "Pipeline constante de candidatos pre-filtrados para respuesta inmediata en temporadas altas."
  },
  {
    id: "logistics",
    icon: <Truck size={32} />,
    title: "Logística y Transporte",
    desc: "Almacenes, distribución, mensajería y última milla.",
    roles: ["Jefe de almacén", "Operador de montacargas", "Chofer", "Auxiliar de embarque", "Coordinador logístico"],
    challenges: ["Perfiles con licencias específicas", "Turnos nocturnos", "Zonas industriales"],
    solution: "Red de candidatos en zonas industriales con documentación validada."
  },
  {
    id: "services",
    icon: <Building2 size={32} />,
    title: "Servicios Profesionales",
    desc: "Consultoría, outsourcing, call centers y BPOs.",
    roles: ["Ejecutivo de cuenta", "Analista", "Consultor", "Agente de call center", "Supervisor de operaciones"],
    challenges: ["Perfiles bilingües", "Rotación en call centers", "Habilidades específicas"],
    solution: "Evaluación de competencias y soft skills con enfoque en servicio al cliente."
  },
  {
    id: "tech",
    icon: <Code size={32} />,
    title: "Tecnología y Software",
    desc: "Startups, software houses, IT services y fintechs.",
    roles: ["Desarrollador Full Stack", "QA Engineer", "DevOps", "Product Manager", "Scrum Master", "UX Designer"],
    challenges: ["Guerra por talento", "Expectativas salariales", "Trabajo remoto"],
    solution: "Headhunting especializado con evaluación técnica y cultural fit."
  },
  {
    id: "manufacturing",
    icon: <Factory size={32} />,
    title: "Manufactura e Industrial",
    desc: "Plantas de producción, automotriz y maquiladoras.",
    roles: ["Ingeniero de planta", "Supervisor de línea", "Técnico de mantenimiento", "Operador CNC", "Control de calidad"],
    challenges: ["Certificaciones técnicas", "Ubicaciones remotas", "Turnos rotativos"],
    solution: "Candidatos con experiencia comprobable en ambientes de producción."
  },
  {
    id: "healthcare",
    icon: <Stethoscope size={32} />,
    title: "Salud y Farmacéutica",
    desc: "Hospitales, clínicas, laboratorios y farmacias.",
    roles: ["Visitador médico", "Representante farmacéutico", "Recepcionista médica", "Coordinador administrativo"],
    challenges: ["Perfiles con conocimiento médico", "Disponibilidad de viaje", "Certificaciones"],
    solution: "Red de profesionales del sector con experiencia comprobada."
  },
  {
    id: "education",
    icon: <GraduationCap size={32} />,
    title: "Educación y Capacitación",
    desc: "Universidades, escuelas, EdTech y centros de capacitación.",
    roles: ["Docente", "Coordinador académico", "Diseñador instruccional", "Asesor educativo", "Tutor online"],
    challenges: ["Perfiles con vocación", "Habilidades digitales", "Certificaciones docentes"],
    solution: "Validación de experiencia pedagógica y competencias digitales."
  },
  {
    id: "hospitality",
    icon: <Utensils size={32} />,
    title: "Hospitalidad y Restaurantes",
    desc: "Hoteles, restaurantes, catering y entretenimiento.",
    roles: ["Gerente de restaurante", "Chef", "Mesero", "Bartender", "Recepcionista de hotel", "Housekeeping"],
    challenges: ["Horarios extendidos", "Temporadas turísticas", "Alta rotación"],
    solution: "Candidatos con actitud de servicio y disponibilidad de horarios."
  }
];

export default function IndustriasPage() {
  const [showHeader, setShowHeader] = useState(true);
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
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
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-200 opacity-0 animate-fadeInDown">Especialización</span>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight opacity-0 animate-fadeInUp">
                  Conocemos <br/>
                  <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Tu Industria</span>
                </h1>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  Experiencia específica en los sectores más demandantes. 
                  Entendemos tus retos y sabemos dónde encontrar el talento.
                </p>
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {industries.map((industry, idx) => (
                  <div
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`p-6 cursor-pointer rounded-2xl border-2 transition-all duration-300 opacity-0 animate-fadeInUp hover:shadow-xl hover:-translate-y-1 ${selectedIndustry.id === industry.id ? 'border-indigo-500 bg-indigo-50/50 shadow-lg' : 'border-slate-100 bg-white'}`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 mb-4 rounded-xl flex items-center justify-center transition-colors ${selectedIndustry.id === industry.id ? 'bg-indigo-600 text-white' : 'bg-gradient-to-br from-indigo-100 to-violet-100 text-indigo-600'}`}>
                      {industry.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{industry.title}</h3>
                    <p className="text-sm text-slate-600">{industry.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="p-12 bg-white/60 backdrop-blur-xl rounded-3xl border border-slate-100 shadow-2xl opacity-0 animate-fadeIn">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center text-indigo-600">
                        {selectedIndustry.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold">{selectedIndustry.title}</h2>
                        <p className="text-slate-600">{selectedIndustry.desc}</p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Users size={20} className="text-indigo-600" />
                        Roles que Cubrimos
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedIndustry.roles.map((role, idx) => (
                          <span key={idx} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link href="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                      <Calendar size={20} />
                      Hablar de mis Vacantes
                    </Link>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-lg">
                      <h4 className="font-bold mb-4 flex items-center gap-2 text-orange-600">
                        <TrendingUp size={20} />
                        Retos Típicos
                      </h4>
                      <ul className="space-y-3">
                        {selectedIndustry.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-700">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl border border-indigo-100">
                      <h4 className="font-bold mb-4 flex items-center gap-2 text-indigo-600">
                        <CheckCircle size={20} />
                        Nuestra Solución
                      </h4>
                      <p className="text-slate-700">{selectedIndustry.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-4 border border-white/20">Experiencia</span>
                <h2 className="text-4xl font-bold mb-4">Cobertura Multi-Industria</h2>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { num: "8+", label: "Industrias", desc: "Sectores atendidos" },
                  { num: "150+", label: "Empresas", desc: "Clientes activos" },
                  { num: "50+", label: "Roles", desc: "Perfiles diferentes" },
                  { num: "32", label: "Estados", desc: "Cobertura nacional" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-5xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">{stat.num}</p>
                    <p className="font-semibold mb-1">{stat.label}</p>
                    <p className="text-sm text-slate-400">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-200">Por Industria</span>
                <h2 className="text-4xl font-bold mb-4">¿Por qué Elegirnos?</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Users size={28} />,
                    title: "Red Especializada",
                    desc: "Base de datos segmentada por industria con candidatos pre-filtrados y disponibles."
                  },
                  {
                    icon: <Clock size={28} />,
                    title: "Tiempo de Respuesta",
                    desc: "Conocemos los perfiles y sabemos dónde buscarlos. Menos tiempo, mejores resultados."
                  },
                  {
                    icon: <TrendingUp size={28} />,
                    title: "Entendemos tus KPIs",
                    desc: "Hablamos el lenguaje de tu industria. Sabemos qué métricas importan."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-8 text-center bg-white/60 backdrop-blur-xl rounded-2xl border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 opacity-0 animate-fadeInUp" style={{ animationDelay: `${idx * 0.15}s` }}>
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center text-indigo-600">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-4xl text-center">
              <h2 className="text-4xl font-bold mb-6">
                ¿Tu industria no está listada?
              </h2>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                Contáctanos. Nuestra metodología se adapta a cualquier sector.
              </p>
              <Link href="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Calendar size={20} />
                Hablemos de tu Vacante
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
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
}