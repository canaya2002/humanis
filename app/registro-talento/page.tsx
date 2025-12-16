'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Upload, CheckCircle, ArrowRight, ArrowLeft, User, 
  Briefcase, MapPin, Star, Shield
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';

const experienceYears = [
  "Sin experiencia",
  "Menos de 1 año",
  "1-2 años",
  "3-5 años",
  "5-10 años",
  "Más de 10 años"
];

const areas = [
  "Ventas / Comercial",
  "Administración",
  "Operaciones / Logística",
  "TI / Desarrollo",
  "Marketing / Comunicación",
  "Finanzas / Contabilidad",
  "Recursos Humanos",
  "Atención al Cliente",
  "Otro"
];

const locations = [
  "CDMX",
  "Guadalajara",
  "Monterrey",
  "Querétaro",
  "Puebla",
  "Tijuana",
  "León",
  "Otra ciudad"
];

const workTypes = [
  { id: "presencial", label: "Presencial" },
  { id: "remoto", label: "Remoto" },
  { id: "hibrido", label: "Híbrido" },
];

const salaryRanges = [
  "Menos de $10,000",
  "$10,000 - $15,000",
  "$15,000 - $20,000",
  "$20,000 - $30,000",
  "$30,000 - $45,000",
  "$45,000 - $60,000",
  "Más de $60,000"
];

export default function RegistroTalentoPage() {
  const [showHeader, setShowHeader] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    area: '',
    experience: '',
    currentPosition: '',
    location: '',
    workTypes: [] as string[],
    salaryExpectation: '',
    availability: '',
    cv: null as File | null,
    linkedin: '',
    acceptPrivacy: false
  });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleWorkTypeChange = (typeId: string) => {
    const current = formData.workTypes;
    if (current.includes(typeId)) {
      setFormData({ ...formData, workTypes: current.filter(t => t !== typeId) });
    } else {
      setFormData({ ...formData, workTypes: [...current, typeId] });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, cv: e.target.files[0] });
    }
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const steps = [
    { num: 1, title: "Datos Personales", icon: User },
    { num: 2, title: "Experiencia", icon: Briefcase },
    { num: 3, title: "Preferencias", icon: MapPin },
    { num: 4, title: "CV y Envío", icon: Upload },
  ];

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
              <h1 className="text-4xl font-bold">¡Registro Exitoso!</h1>
              <p className="text-xl text-slate-600">
                Gracias por registrarte, <strong>{formData.firstName}</strong>.
              </p>
              <p className="text-slate-500">
                Revisaremos tu perfil y te contactaremos cuando tengamos una oportunidad que haga match.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <Link href="/vacantes" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold px-8 py-3 rounded-xl hover:shadow-lg">
                  Ver Vacantes
                </Link>
                <Link href="/" className="inline-flex items-center gap-2 border-2 border-slate-200 text-slate-900 font-semibold px-8 py-3 rounded-xl hover:border-slate-300">
                  Volver al Inicio
                </Link>
              </div>
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
        <section className="pt-32 pb-12 px-6 bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">Registro de Talento</h1>
            <p className="text-xl text-indigo-100">
              Completa tu perfil en menos de 5 minutos. <strong>100% gratuito.</strong>
            </p>
          </div>
        </section>

        {/* Progress */}
        <section className="bg-white border-b border-slate-200 py-6 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
              {steps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.num} className="flex items-center flex-1">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                        currentStep >= step.num 
                          ? 'bg-indigo-600 text-white' 
                          : 'bg-slate-100 text-slate-400'
                      }`}>
                        {currentStep > step.num ? <CheckCircle size={20} /> : step.num}
                      </div>
                      <span className={`hidden md:block text-sm font-medium ${
                        currentStep >= step.num ? 'text-slate-900' : 'text-slate-400'
                      }`}>
                        {step.title}
                      </span>
                    </div>
                    {idx < steps.length - 1 && (
                      <div className={`flex-1 h-0.5 mx-4 ${
                        currentStep > step.num ? 'bg-indigo-600' : 'bg-slate-200'
                      }`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-12 px-6">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit}>
              {currentStep === 1 && (
                <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-6">
                  <h2 className="text-2xl font-bold flex items-center gap-3">
                    <User size={24} className="text-indigo-600" />
                    Datos Personales
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Nombre *</label>
                      <input 
                        type="text" 
                        name="firstName" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Apellido *</label>
                      <input 
                        type="text" 
                        name="lastName" 
                        value={formData.lastName} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500"
                        placeholder="Tu apellido"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500"
                      placeholder="tu@email.com"
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
                  <div className="flex justify-end pt-4">
                    <button type="button" onClick={nextStep} className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold px-8 py-3 rounded-xl hover:shadow-lg">
                      Siguiente <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-6">
                  <h2 className="text-2xl font-bold flex items-center gap-3">
                    <Briefcase size={24} className="text-indigo-600" />
                    Experiencia
                  </h2>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Área de experiencia *</label>
                    <select 
                      name="area" 
                      value={formData.area} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500"
                    >
                      <option value="">Selecciona...</option>
                      {areas.map(area => <option key={area} value={area}>{area}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Años de experiencia *</label>
                    <select 
                      name="experience" 
                      value={formData.experience} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500"
                    >
                      <option value="">Selecciona...</option>
                      {experienceYears.map(exp => <option key={exp} value={exp}>{exp}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Puesto actual o más reciente</label>
                    <input 
                      type="text" 
                      name="currentPosition" 
                      value={formData.currentPosition} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500"
                      placeholder="Ej: Ejecutivo de Ventas"
                    />
                  </div>
                  <div className="flex justify-between pt-4">
                    <button type="button" onClick={prevStep} className="inline-flex items-center gap-2 border-2 border-slate-200 text-slate-900 font-semibold px-8 py-3 rounded-xl hover:border-slate-300">
                      <ArrowLeft size={18} /> Anterior
                    </button>
                    <button type="button" onClick={nextStep} className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold px-8 py-3 rounded-xl hover:shadow-lg">
                      Siguiente <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-6">
                  <h2 className="text-2xl font-bold flex items-center gap-3">
                    <MapPin size={24} className="text-indigo-600" />
                    Preferencias
                  </h2>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Ubicación preferida *</label>
                    <select 
                      name="location" 
                      value={formData.location} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500"
                    >
                      <option value="">Selecciona...</option>
                      {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">Modalidad de trabajo *</label>
                    <div className="flex flex-wrap gap-3">
                      {workTypes.map(type => (
                        <label 
                          key={type.id} 
                          className={`flex items-center gap-2 px-4 py-3 border-2 rounded-xl cursor-pointer transition-all ${
                            formData.workTypes.includes(type.id) 
                              ? 'border-indigo-500 bg-indigo-50 text-indigo-700' 
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <input 
                            type="checkbox" 
                            checked={formData.workTypes.includes(type.id)} 
                            onChange={() => handleWorkTypeChange(type.id)} 
                            className="hidden" 
                          />
                          {type.label}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Expectativa salarial *</label>
                    <select 
                      name="salaryExpectation" 
                      value={formData.salaryExpectation} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500"
                    >
                      <option value="">Selecciona...</option>
                      {salaryRanges.map(range => <option key={range} value={range}>{range}</option>)}
                    </select>
                  </div>
                  <div className="flex justify-between pt-4">
                    <button type="button" onClick={prevStep} className="inline-flex items-center gap-2 border-2 border-slate-200 text-slate-900 font-semibold px-8 py-3 rounded-xl hover:border-slate-300">
                      <ArrowLeft size={18} /> Anterior
                    </button>
                    <button type="button" onClick={nextStep} className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold px-8 py-3 rounded-xl hover:shadow-lg">
                      Siguiente <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-6">
                  <h2 className="text-2xl font-bold flex items-center gap-3">
                    <Upload size={24} className="text-indigo-600" />
                    CV y Envío
                  </h2>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Sube tu CV *</label>
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-indigo-400 transition-colors">
                      <input 
                        type="file" 
                        accept=".pdf,.doc,.docx" 
                        onChange={handleFileChange} 
                        className="hidden" 
                        id="cv-upload" 
                      />
                      <label htmlFor="cv-upload" className="cursor-pointer">
                        {formData.cv ? (
                          <div className="flex items-center justify-center gap-2 text-green-600">
                            <CheckCircle size={24} />
                            <span className="font-medium">{formData.cv.name}</span>
                          </div>
                        ) : (
                          <>
                            <Upload size={32} className="mx-auto text-slate-400 mb-2" />
                            <p className="text-slate-600 mb-1">Arrastra tu CV o haz clic para seleccionar</p>
                            <p className="text-sm text-slate-400">PDF, DOC o DOCX (máx. 5MB)</p>
                          </>
                        )}
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">LinkedIn (opcional)</label>
                    <input 
                      type="url" 
                      name="linkedin" 
                      value={formData.linkedin} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500"
                      placeholder="https://linkedin.com/in/tu-perfil"
                    />
                  </div>
                  <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        name="acceptPrivacy" 
                        checked={formData.acceptPrivacy} 
                        onChange={handleChange} 
                        required 
                        className="mt-1" 
                      />
                      <span className="text-sm text-slate-600">
                        Acepto el <Link href="/legal" className="text-indigo-600 hover:underline">Aviso de Privacidad</Link> y autorizo a Humanis a contactarme. <strong>Humanis nunca cobra a candidatos.</strong>
                      </span>
                    </label>
                  </div>
                  <div className="flex justify-between pt-4">
                    <button type="button" onClick={prevStep} className="inline-flex items-center gap-2 border-2 border-slate-200 text-slate-900 font-semibold px-8 py-3 rounded-xl hover:border-slate-300">
                      <ArrowLeft size={18} /> Anterior
                    </button>
                    <button 
                      type="submit" 
                      disabled={isSubmitting || !formData.cv || !formData.acceptPrivacy} 
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold px-8 py-3 rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin">⏳</span> Enviando...
                        </>
                      ) : (
                        <>
                          <Star size={18} /> Completar Registro
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>

            {/* Security Info */}
            <div className="mt-8 p-6 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl border border-indigo-100">
              <div className="flex items-center gap-3 mb-4">
                <Shield size={24} className="text-indigo-600" />
                <h3 className="font-bold">100% Gratuito y Seguro</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" /> Nunca cobramos a candidatos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" /> Tus datos están protegidos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" /> Solo compartimos tu info con empresas verificadas
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" /> Puedes eliminar tu perfil cuando quieras
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}