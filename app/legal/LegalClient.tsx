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

export default function LegalClient() {
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
            
            <div className="mb-12">
                <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-6 transition-colors text-sm font-bold uppercase tracking-widest">
                    <ArrowLeft size={16} /> Volver al inicio
                </Link>
                <h1 className="text-4xl lg:text-5xl font-black mb-4 tracking-tight flex items-center gap-4">
                    <Lock size={40} className="text-slate-300" /> Centro de Confianza
                </h1>
                <p className="text-lg text-slate-600">Transparencia, cumplimiento y seguridad en cada proceso.</p>
            </div>

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

                <div className="p-8 md:p-12 prose prose-slate max-w-none prose-headings:font-black prose-a:text-cyan-600">
                    
                    {activeTab === 'privacy' && (
                        <div className="animate-fadeIn">
                            <h2>Aviso de Privacidad Integral</h2>
                            <p className="text-sm text-slate-400 font-mono">Última actualización: Enero 2025</p>
                            <p><strong>Humanis S.A. de C.V.</strong> (en adelante "Humanis"), agencia de colocación de personal con domicilio en C. Montes Urales 424, Lomas - Virreyes, Miguel Hidalgo, 11000 CDMX, es responsable del tratamiento de sus datos personales.</p>
                            
                            <h3>1. Datos que recabamos</h3>
                            <p>Para cumplir con nuestras finalidades de colocación de personal, podemos recabar:</p>
                            <ul>
                                <li><strong>Identificación:</strong> Nombre completo, CURP, RFC, fecha de nacimiento.</li>
                                <li><strong>Contacto:</strong> Email, teléfono, domicilio.</li>
                                <li><strong>Laborales:</strong> Historial laboral, referencias, expectativa salarial.</li>
                                <li><strong>Académicos:</strong> Títulos, certificaciones, idiomas.</li>
                            </ul>

                            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 my-6 rounded-r-lg not-prose">
                                <p className="text-cyan-900 font-bold m-0 text-sm">Importante: No solicitamos datos sensibles como religión, afiliación política o salud salvo requerimiento legal específico del puesto.</p>
                            </div>

                            <h3>2. Finalidades del Tratamiento</h3>
                            <h4>Finalidades Primarias (necesarias):</h4>
                            <ul>
                                <li>Gestión de procesos de colocación y selección de personal.</li>
                                <li>Intermediación entre candidatos y empresas.</li>
                                <li>Verificación de referencias laborales.</li>
                                <li>Coordinación de entrevistas con empresas.</li>
                            </ul>

                            <h4>Finalidades Secundarias (opcionales):</h4>
                            <ul>
                                <li>Envío de vacantes similares a su perfil.</li>
                                <li>Encuestas de satisfacción.</li>
                                <li>Estadísticas anónimas de mercado laboral.</li>
                            </ul>

                            <h3>3. Transferencia de Datos</h3>
                            <p>Sus datos personales podrán ser compartidos con empresas que tienen vacantes activas, siempre con su consentimiento previo y únicamente para fines de colocación.</p>
                            <p><strong>No vendemos ni compartimos sus datos con terceros para fines de marketing.</strong></p>

                            <h3>4. Derechos ARCO</h3>
                            <p>Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, envíe un correo a: <a href="mailto:privacidad@humanis.mx">privacidad@humanis.mx</a></p>

                            <h3>5. Servicio Gratuito para Candidatos</h3>
                            <div className="bg-green-50 p-4 rounded-lg border border-green-100 mb-4">
                                <p className="text-slate-700">
                                    <strong>Humanis no cobra a los candidatos.</strong> Nuestro servicio de colocación de personal es 100% gratuito para las personas que buscan empleo. Las empresas pagan los honorarios por nuestros servicios de intermediación.
                                </p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'terms' && (
                        <div className="animate-fadeIn">
                            <h2>Términos y Condiciones de Servicio</h2>
                            <p>Bienvenido al sitio de Humanis. Al usar nuestros servicios, acepta las siguientes condiciones.</p>
                            
                            <h3>1. Naturaleza del Servicio</h3>
                            <p>Humanis es una <strong>agencia de colocación de personal</strong> autorizada que intermedia entre empresas y candidatos. No somos outsourcing ni subcontratación de personal.</p>
                            
                            <h3>2. Para Candidatos</h3>
                            <h4>2.1 Servicio Gratuito</h4>
                            <div className="bg-green-50 p-4 rounded-lg border border-green-100 mb-4">
                                <p className="text-slate-700">
                                    <strong>Humanis nunca cobra a los candidatos.</strong> Nuestros servicios son 100% gratuitos para personas que buscan empleo. No solicitamos pagos por registro, exámenes, entrevistas ni gestiones administrativas.
                                </p>
                            </div>

                            <h4>2.2 Veracidad de la Información</h4>
                            <p>Los candidatos son responsables de proporcionar información veraz y actualizada. La falsedad de datos puede resultar en la cancelación del proceso.</p>

                            <h4>2.3 Uso de Datos</h4>
                            <p>Al registrarse, los candidatos autorizan a Humanis a compartir su información con empresas que tienen vacantes relevantes, conforme al Aviso de Privacidad.</p>

                            <h3>3. Para Empresas</h3>
                            <h4>3.1 Modelo de Servicio</h4>
                            <p>La relación comercial se regirá por el Contrato de Prestación de Servicios firmado entre las partes. Humanis actúa como intermediario en el proceso de colocación.</p>

                            <h4>3.2 Garantía de Reemplazo</h4>
                            <p>Puede ofrecerse garantía de reemplazo (típicamente 30-90 días) según lo establecido en el contrato específico. Las condiciones exactas se pactan por escrito.</p>

                            <h4>3.3 Responsabilidad del Empleador</h4>
                            <p>Las empresas que contraten candidatos a través de Humanis asumen la responsabilidad patronal directa, incluyendo obligaciones de IMSS, INFONAVIT, nómina y prestaciones de ley.</p>

                            <h3>4. Limitación de Responsabilidad</h3>
                            <p>Humanis actúa como intermediario en el proceso de colocación. Las decisiones de contratación son responsabilidad exclusiva de las empresas. No garantizamos la contratación de candidatos registrados.</p>

                            <h3>5. Modificaciones</h3>
                            <p>Nos reservamos el derecho de modificar estos términos. Los cambios serán publicados en nuestro sitio web.</p>

                            <h3>6. Jurisdicción</h3>
                            <p>Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier controversia será resuelta ante los tribunales competentes de la Ciudad de México.</p>
                        </div>
                    )}

                    {activeTab === 'cookies' && (
                        <div className="animate-fadeIn">
                            <h2>Política de Cookies</h2>
                            <p>Utilizamos cookies para mejorar tu experiencia de navegación.</p>
                            
                            <h3>¿Qué cookies usamos?</h3>
                            <ul>
                                <li><strong>Esenciales:</strong> Necesarias para que el sitio funcione (ej. seguridad, sesión).</li>
                                <li><strong>Analíticas:</strong> Google Analytics para entender el tráfico (datos anónimos).</li>
                                <li><strong>Funcionales:</strong> Recordar preferencias de usuario.</li>
                            </ul>

                            <h3>Control de Cookies</h3>
                            <p>Puedes desactivar las cookies desde la configuración de tu navegador. Sin embargo, esto podría afectar el funcionamiento de ciertas secciones del sitio.</p>

                            <h4>Instrucciones por navegador:</h4>
                            <ul>
                                <li><strong>Chrome:</strong> Configuración → Privacidad → Cookies</li>
                                <li><strong>Firefox:</strong> Opciones → Privacidad → Historial</li>
                                <li><strong>Safari:</strong> Preferencias → Privacidad</li>
                                <li><strong>Edge:</strong> Configuración → Cookies y permisos</li>
                            </ul>

                            <h3>Consentimiento</h3>
                            <p>Al continuar navegando en nuestro sitio, aceptas el uso de cookies esenciales. Para cookies analíticas, solicitamos tu consentimiento explícito mediante el banner correspondiente.</p>
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
