'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Phone, Mail, MapPin, MessageCircle, Clock, 
  Send, Calendar, Building2, Users, CheckCircle
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';

const contactMethods = [
  { 
    icon: Phone, 
    title: "Teléfono", 
    value: "+52 55 1234 5678",
    href: "tel:+525512345678",
    desc: "Lun-Vie 9:00-18:00"
  },
  { 
    icon: MessageCircle, 
    title: "WhatsApp", 
    value: "+52 55 1234 5678",
    href: "https://wa.me/525512345678",
    desc: "Respuesta rápida"
  },
  { 
    icon: Mail, 
    title: "Email", 
    value: "contacto@humanis.mx",
    href: "mailto:contacto@humanis.mx",
    desc: "Respuesta en 24h"
  },
  { 
    icon: MapPin, 
    title: "Oficina", 
    value: "CDMX, México",
    href: "#",
    desc: "Cita previa"
  },
];

const vacancyTypes = [
  "Administrativo",
  "Ventas / Comercial",
  "Operaciones / Logística",
  "TI / Desarrollo",
  "Marketing / Comunicación",
  "Finanzas / Contabilidad",
  "Recursos Humanos",
  "Ejecutivo / Dirección",
  "Otro"
];

const urgencyLevels = [
  "Inmediata (menos de 1 semana)",
  "Urgente (1-2 semanas)",
  "Normal (2-4 semanas)",
  "Planificada (más de 1 mes)"
];

export default function ContactoPage() {
  const [showHeader, setShowHeader] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    vacancyType: '',
    vacancyCount: '1',
    urgency: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <>
        <GlobalStyles />
        <div className="min-h-screen bg-white">
          <Header showHeader={showHeader} />
          <main className="pt-32 pb-24 px-6">
            <div className="max-w-xl mx-auto text-center space-y-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={40} className="text-green-600" />
              </div>
              <h1 className="text-4xl font-bold">¡Mensaje Enviado!</h1>
              <p className="text-xl text-slate-600">
                Gracias por contactarnos. Te responderemos en menos de 24 horas.
              </p>
              <Link href="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold px-8 py-3 rounded-xl hover:shadow-lg">
                Volver al Inicio
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <GlobalStyles />
      <div className="min-h-screen bg-white">
        <Header showHeader={showHeader} />

        {/* Hero */}
        <section className="pt-32 pb-16 px-6 bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-full">
              Hablemos
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold">
              Agenda tu <span className="block mt-2">Llamada</span>
            </h1>
            <p className="text-xl text-indigo-100">
              Cuéntanos sobre tu vacante y te contactamos en menos de 24 horas
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {contactMethods.map((method, idx) => {
                const IconComponent = method.icon;
                return (
                  <a 
                    key={idx}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-6 text-center border border-slate-200 rounded-xl hover:border-indigo-200 hover:shadow-lg transition-all bg-white"
                  >
                    <IconComponent size={32} className="mx-auto mb-4 text-indigo-600" />
                    <h3 className="font-bold mb-1">{method.title}</h3>
                    <p className="text-indigo-600 font-medium text-sm mb-1">{method.value}</p>
                    <p className="text-xs text-slate-500">{method.desc}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Form Section */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-slate-200 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-2">Solicitar Propuesta</h2>
                  <p className="text-slate-600 mb-8">Completa el formulario y te contactamos</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Nombre completo *</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Empresa *</label>
                        <input 
                          type="text" 
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500"
                          placeholder="Nombre de la empresa"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email corporativo *</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500"
                          placeholder="tu@empresa.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Teléfono *</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500"
                          placeholder="+52 55 1234 5678"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Tipo de vacante *</label>
                        <select 
                          name="vacancyType"
                          value={formData.vacancyType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500"
                        >
                          <option value="">Selecciona...</option>
                          {vacancyTypes.map((type, idx) => (
                            <option key={idx} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Número de vacantes</label>
                        <input 
                          type="number" 
                          name="vacancyCount"
                          value={formData.vacancyCount}
                          onChange={handleChange}
                          min="1"
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Urgencia</label>
                      <select 
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500"
                      >
                        <option value="">Selecciona...</option>
                        {urgencyLevels.map((level, idx) => (
                          <option key={idx} value={level}>{level}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Mensaje (opcional)</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 resize-vertical"
                        placeholder="Cuéntanos más sobre la vacante, requisitos específicos, etc."
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-4 rounded-xl hover:shadow-lg transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin">⏳</span>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Enviar Solicitud
                        </>
                      )}
                    </button>

                    <p className="text-xs text-slate-500 text-center">
                      Al enviar, aceptas nuestro <Link href="/legal" className="text-indigo-600 hover:underline">Aviso de Privacidad</Link>
                    </p>
                  </form>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-8">
                
                {/* Quick Contact */}
                <div className="bg-white border border-slate-200 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Clock size={20} className="text-indigo-600" />
                    Respuesta Rápida
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Para urgencias o si prefieres hablar directamente:
                  </p>
                  <a 
                    href="https://wa.me/525512345678" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-3 rounded-xl hover:bg-green-600 transition-colors mb-4"
                  >
                    <MessageCircle size={20} />
                    WhatsApp Directo
                  </a>
                  <a 
                    href="tel:+525512345678" 
                    className="w-full inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-900 font-semibold py-3 rounded-xl hover:border-slate-300 transition-colors"
                  >
                    <Phone size={20} />
                    Llamar Ahora
                  </a>
                </div>

                {/* Why Contact Us */}
                <div className="bg-white border border-slate-200 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4">¿Por qué Humanis?</h3>
                  <ul className="space-y-4">
                    {[
                      { icon: Clock, text: "Respuesta en menos de 24h" },
                      { icon: Users, text: "Primera terna en 5-10 días" },
                      { icon: Building2, text: "Cobertura nacional" },
                      { icon: CheckCircle, text: "Garantía de reemplazo 90 días" },
                    ].map((item, idx) => {
                      const IconComponent = item.icon;
                      return (
                        <li key={idx} className="flex items-center gap-3 text-slate-700">
                          <IconComponent size={18} className="text-indigo-600" />
                          {item.text}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* For Candidates */}
                <div className="p-8 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl border border-indigo-100">
                  <h3 className="text-xl font-bold mb-2">¿Eres Candidato?</h3>
                  <p className="text-slate-600 mb-4">
                    Si buscas oportunidades laborales, visita nuestra sección de talento.
                  </p>
                  <Link href="/talento" className="inline-flex items-center gap-2 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all">
                    Ir a Talento
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}