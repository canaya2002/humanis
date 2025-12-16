'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Target, Heart, Shield, Users, Award, TrendingUp,
  CheckCircle, ArrowRight, Calendar, MapPin, Building2
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';

const values = [
  { icon: <Shield size={28} />, title: "Integridad", desc: "Operamos con transparencia y honestidad. Nunca cobramos a candidatos y siempre cumplimos lo que prometemos." },
  { icon: <Heart size={28} />, title: "Compromiso", desc: "Nos involucramos profundamente en cada proceso. Tu éxito es nuestro éxito." },
  { icon: <Target size={28} />, title: "Excelencia", desc: "Buscamos la mejora continua en cada servicio. No nos conformamos con lo bueno, buscamos lo mejor." },
  { icon: <Users size={28} />, title: "Colaboración", desc: "Trabajamos como extensión de tu equipo. Somos partners, no proveedores." },
];

const differentiators = [
  { title: "Proceso Transparente", desc: "Sabes exactamente qué esperar en cada etapa. Sin sorpresas, sin costos ocultos." },
  { title: "Cobertura Nacional", desc: "Operamos en los 32 estados de México con presencia fuerte en las principales ciudades." },
  { title: "Garantía Real", desc: "90 días de garantía de reemplazo. Si no funciona, lo resolvemos sin costo." },
  { title: "Velocidad + Calidad", desc: "Primera terna en 5-10 días sin sacrificar el rigor de nuestro filtro." },
];

const stats = [
  { num: "2,500+", label: "Candidatos colocados" },
  { num: "150+", label: "Empresas atendidas" },
  { num: "95%", label: "Retención a 6 meses" },
  { num: "32", label: "Estados con cobertura" },
];

const team = [
  { name: "Director General", role: "Fundador", desc: "15+ años en RH y reclutamiento ejecutivo." },
  { name: "Directora de Operaciones", role: "Co-fundadora", desc: "Especialista en procesos y cumplimiento." },
  { name: "Líder de Reclutamiento", role: "Head of Talent", desc: "10+ años en headhunting de TI." },
];

export default function NosotrosPage() {
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
          <section className="relative pt-20 pb-24 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="opacity-0 animate-fadeInUp">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-200">Sobre Humanis</span>
                  <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                    Conectamos <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Talento</span> con <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Oportunidad</span>
                  </h1>
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    Somos una firma de reclutamiento mexicana enfocada en resolver el problema de cobertura de vacantes con velocidad, calidad y cumplimiento total.
                  </p>
                  <Link href="/contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    <Calendar size={20} />
                    Conócenos
                  </Link>
                </div>
                <div className="relative opacity-0 animate-fadeInRight">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Equipo Humanis"
                    className="rounded-3xl w-full h-[450px] object-cover shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Nuestra Misión</h2>
                <p className="text-2xl text-slate-300 leading-relaxed mb-12">
                  Transformar la forma en que las empresas mexicanas encuentran talento, eliminando la fricción y los riesgos del proceso de reclutamiento.
                </p>
                <div className="grid md:grid-cols-4 gap-8">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="text-center opacity-0 animate-fadeInUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                      <p className="text-4xl font-bold text-white mb-2">{stat.num}</p>
                      <p className="text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-200">Principios</span>
                <h2 className="text-4xl font-bold mb-4">Nuestros Valores</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Lo que guía cada decisión y acción en Humanis.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, idx) => (
                  <div key={idx} className="p-6 text-center bg-white/60 backdrop-blur-xl rounded-2xl border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 opacity-0 animate-fadeInUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center text-indigo-600">{value.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                    <p className="text-slate-600 text-sm">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-200">El Problema</span>
                  <h2 className="text-4xl font-bold mb-6">¿Por qué Existimos?</h2>
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    Las empresas mexicanas enfrentan un problema común: vacantes abiertas que afectan la operación, procesos de reclutamiento lentos y costosos, y riesgo constante de malas contrataciones.
                  </p>
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    Humanis nació para resolver esto. Combinamos metodología rigurosa con velocidad de ejecución para entregar resultados medibles y garantizados.
                  </p>
                </div>

                <div className="space-y-4">
                  {differentiators.map((diff, idx) => (
                    <div key={idx} className="p-6 flex items-start gap-4 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fadeInRight" style={{ animationDelay: `${idx * 0.1}s` }}>
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={20} className="text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{diff.title}</h4>
                        <p className="text-sm text-slate-600">{diff.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-200">El Equipo</span>
                <h2 className="text-4xl font-bold mb-4">Quiénes Somos</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Un equipo de profesionales apasionados por conectar talento con oportunidad.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {team.map((member, idx) => (
                  <div key={idx} className="text-center opacity-0 animate-fadeInUp" style={{ animationDelay: `${idx * 0.15}s` }}>
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center">
                      <Users size={48} className="text-indigo-600" />
                    </div>
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-indigo-600 font-medium text-sm mb-2">{member.role}</p>
                    <p className="text-slate-600 text-sm">{member.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-200">Presencia</span>
                <h2 className="text-4xl font-bold mb-4">Cobertura Nacional</h2>
              </div>

              <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { city: "CDMX", desc: "Oficina central" },
                  { city: "Guadalajara", desc: "Occidente" },
                  { city: "Monterrey", desc: "Norte" },
                  { city: "+ 29 estados", desc: "Cobertura remota" },
                ].map((loc, idx) => (
                  <div key={idx} className="text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fadeInUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <MapPin size={32} className="mx-auto text-indigo-600 mb-3" />
                    <h4 className="font-bold">{loc.city}</h4>
                    <p className="text-sm text-slate-500">{loc.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
            <div className="container mx-auto px-6 max-w-4xl text-center">
              <h2 className="text-4xl font-bold mb-6">¿Listo para trabajar juntos?</h2>
              <p className="text-xl text-indigo-100 mb-10">
                Agenda una llamada y conoce cómo podemos ayudarte.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contacto" className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-2xl hover:bg-slate-800 transition-all">
                  <Calendar size={20} />
                  Agendar Llamada
                </Link>
                <Link href="/para-empresas" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white border border-white/30 font-semibold py-3 px-8 rounded-xl transition-all">
                  Para Empresas
                  <ArrowRight size={18} />
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