'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Shield, FileText, Cookie, ArrowLeft, Lock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';

const tabs = [
  { id: 'privacy', label: 'Aviso de Privacidad', icon: <Shield size={18} /> },
  { id: 'terms', label: 'Términos y Condiciones', icon: <FileText size={18} /> },
  { id: 'cookies', label: 'Política de Cookies', icon: <Cookie size={18} /> },
];

export default function LegalPage() {
  const [showHeader, setShowHeader] = useState(true);
  const [activeTab, setActiveTab] = useState('privacy');
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
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-slate-200">
        <Header showHeader={showHeader} />

        <main className="pt-28 pb-20">
          <div className="container mx-auto px-6 max-w-5xl">
            
            {/* HEADER LEGAL */}
            <div className="mb-12">
                <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-6 transition-colors text-sm font-bold uppercase tracking-widest">
                    <ArrowLeft size={16} /> Volver al inicio
                </Link>
                <h1 className="text-4xl lg:text-5xl font-black mb-4 tracking-tight flex items-center gap-4">
                    <Lock size={40} className="text-slate-300" /> Centro de Confianza
                </h1>
                <p className="text-lg text-slate-600">Transparencia, cumplimiento y seguridad en cada proceso.</p>
            </div>

            {/* TABS NAVEGACIÓN */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden min-h-[600px]">
                <div className="flex border-b border-slate-100 bg-slate-50/50 p-2 overflow-x-auto">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                                activeTab === tab.id 
                                ? 'bg-white text-slate-900 shadow-md ring-1 ring-slate-200' 
                                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
                            }`}
                        >
                            {tab.icon} {tab.label}
                        </button>
                    ))}
                </div>

                {/* CONTENIDO */}
                <div className="p-8 md:p-12 prose prose-slate max-w-none prose-headings:font-black prose-a:text-cyan-600">
                    
                    {activeTab === 'privacy' && (
                        <div className="animate-fadeIn">
                            <h2>Aviso de Privacidad Integral</h2>
                            <p className="text-sm text-slate-400 font-mono">Última actualización: Enero 2025</p>
                            <p><strong>Humanis S.A.S. de C.V.</strong> (en adelante "Humanis"), con domicilio en CDMX, es responsable del tratamiento de sus datos personales.</p>
                            
                            <h3>1. Datos que recabamos</h3>
                            <p>Para cumplir con nuestras finalidades de reclutamiento y selección, podemos recabar:</p>
                            <ul>
                                <li><strong>Identificación:</strong> Nombre, CURP, RFC, fecha de nacimiento.</li>
                                <li><strong>Contacto:</strong> Email, teléfono, domicilio.</li>
                                <li><strong>Laborales:</strong> Historial, referencias, sueldo actual.</li>
                            </ul>

                            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 my-6 rounded-r-lg not-prose">
                                <p className="text-cyan-900 font-bold m-0 text-sm">Importante: No solicitamos datos sensibles como religión, afiliación política o salud salvo requerimiento legal específico.</p>
                            </div>

                            <h3>2. Finalidades</h3>
                            <p>Sus datos serán utilizados exclusivamente para:</p>
                            <ul>
                                <li>Gestión de procesos de selección y contratación.</li>
                                <li>Verificación de referencias laborales.</li>
                                <li>Integración de expedientes de empleados (en caso de contratación).</li>
                            </ul>

                            <h3>3. Derechos ARCO</h3>
                            <p>Usted puede Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos enviando un correo a <a href="mailto:privacidad@humanis.mx">privacidad@humanis.mx</a>.</p>
                        </div>
                    )}

                    {activeTab === 'terms' && (
                        <div className="animate-fadeIn">
                            <h2>Términos y Condiciones de Uso</h2>
                            <p>Bienvenido a la plataforma de Humanis. Al usar nuestros servicios, aceptas las siguientes condiciones.</p>
                            
                            <h3>1. Uso de la Plataforma</h3>
                            <p>Nuestra plataforma conecta empresas con talento. El usuario se compromete a proporcionar información veraz y lícita.</p>

                            <h3>2. Para Candidatos (Gratuidad)</h3>
                            <p>Reiteramos que el servicio de intermediación laboral es <strong>100% gratuito para los candidatos</strong>. Humanis nunca solicitará pagos por exámenes, entrevistas o gastos administrativos.</p>

                            <h3>3. Para Empresas</h3>
                            <p>La relación comercial se regirá por el Contrato de Prestación de Servicios firmado entre las partes. La garantía de reemplazo está sujeta a los términos de dicho contrato (generalmente 90 días).</p>

                            <h3>4. Propiedad Intelectual</h3>
                            <p>Todo el contenido (logos, textos, software) es propiedad exclusiva de Humanis S.A.S. de C.V.</p>
                        </div>
                    )}

                    {activeTab === 'cookies' && (
                        <div className="animate-fadeIn">
                            <h2>Política de Cookies</h2>
                            <p>Utilizamos cookies para mejorar tu experiencia de navegación.</p>
                            
                            <h3>¿Qué cookies usamos?</h3>
                            <ul>
                                <li><strong>Esenciales:</strong> Necesarias para que el sitio funcione (ej. seguridad).</li>
                                <li><strong>Analíticas:</strong> Google Analytics para entender el tráfico (anónimas).</li>
                            </ul>

                            <h3>Control de Cookies</h3>
                            <p>Puedes desactivar las cookies desde la configuración de tu navegador, aunque esto podría afectar el funcionamiento de ciertas secciones.</p>
                        </div>
                    )}

                </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
      <style jsx>{`
        .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  );
}