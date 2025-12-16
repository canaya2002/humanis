'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Shield, FileText, Cookie, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';

const tabs = [
  { id: 'privacy', label: 'Aviso de Privacidad', icon: <Shield size={20} /> },
  { id: 'terms', label: 'Términos y Condiciones', icon: <FileText size={20} /> },
  { id: 'cookies', label: 'Política de Cookies', icon: <Cookie size={20} /> },
];

export default function LegalPage() {
  const [showHeader, setShowHeader] = useState(true);
  const [activeTab, setActiveTab] = useState('privacy');
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
          <section className="relative pt-20 pb-12 bg-gradient-to-br from-slate-50 to-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <Link href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-indigo-600 mb-6 transition-colors">
                <ArrowLeft size={20} /> Volver al inicio
              </Link>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Información Legal</h1>
              <p className="text-xl text-slate-600">Transparencia y cumplimiento normativo.</p>
            </div>
          </section>

          <section className="py-12 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="flex flex-wrap gap-2 mb-12 border-b border-slate-200 pb-4">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      activeTab === tab.id 
                        ? 'bg-indigo-600 text-white' 
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>

              {activeTab === 'privacy' && (
                <div className="prose prose-slate max-w-none opacity-0 animate-fadeIn">
                  <h2 className="text-3xl font-bold mt-8 mb-4 text-slate-900">Aviso de Privacidad</h2>
                  <p className="text-sm text-slate-500 mb-6">Última actualización: Enero 2025</p>
                  
                  <h3 className="text-xl font-bold mt-6 mb-3 text-slate-800">1. Identidad del Responsable</h3>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    <strong>Humanis S.A. de C.V.</strong> (en adelante "Humanis"), con domicilio en Ciudad de México, México, 
                    es responsable del tratamiento de sus datos personales.
                  </p>

                  <h3 className="text-xl font-bold mt-6 mb-3 text-slate-800">2. Datos Personales que Recabamos</h3>
                  <p className="mb-4 text-slate-600 leading-relaxed">Para las finalidades señaladas, podemos recabar los siguientes datos personales:</p>
                  <ul className="mb-4 pl-6 list-disc">
                    <li className="mb-2 text-slate-600">Datos de identificación: nombre, apellidos, fecha de nacimiento, RFC, CURP</li>
                    <li className="mb-2 text-slate-600">Datos de contacto: dirección, teléfono, correo electrónico</li>
                    <li className="mb-2 text-slate-600">Datos laborales: historial laboral, CV, referencias laborales, expectativa salarial</li>
                    <li className="mb-2 text-slate-600">Datos académicos: grado de estudios, certificaciones, idiomas</li>
                    <li className="mb-2 text-slate-600">Datos financieros: expectativa salarial (solo para fines de colocación)</li>
                  </ul>

                  <h3 className="text-xl font-bold mt-6 mb-3 text-slate-800">3. Finalidades del Tratamiento</h3>
                  <h4 className="text-lg font-semibold mt-4 mb-2 text-slate-700">Finalidades Primarias (necesarias):</h4>
                  <ul className="mb-4 pl-6 list-disc">
                    <li className="mb-2 text-slate-600">Evaluar su perfil para oportunidades laborales</li>
                    <li className="mb-2 text-slate-600">Contactarlo sobre vacantes relevantes</li>
                    <li className="mb-2 text-slate-600">Verificar referencias laborales</li>
                    <li className="mb-2 text-slate-600">Coordinar entrevistas con empresas</li>
                    <li className="mb-2 text-slate-600">Gestionar el proceso de contratación</li>
                  </ul>

                  <h4 className="text-lg font-semibold mt-4 mb-2 text-slate-700">Finalidades Secundarias (opcionales):</h4>
                  <ul className="mb-4 pl-6 list-disc">
                    <li className="mb-2 text-slate-600">Enviar información sobre vacantes similares</li>
                    <li className="mb-2 text-slate-600">Realizar encuestas de satisfacción</li>
                    <li className="mb-2 text-slate-600">Elaborar estadísticas anónimas</li>
                  </ul>

                  <h3 className="text-xl font-bold mt-6 mb-3 text-slate-800">4. Transferencia de Datos</h3>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Sus datos personales podrán ser compartidos con empresas que tienen vacantes activas, 
                    siempre con su consentimiento previo y únicamente para fines de reclutamiento.
                  </p>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    <strong>No vendemos ni compartimos sus datos con terceros para fines de marketing.</strong>
                  </p>

                  <h3 className="text-xl font-bold mt-6 mb-3 text-slate-800">5. Derechos ARCO</h3>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos 
                    personales (Derechos ARCO). Para ejercer estos derechos, envíe un correo a: 
                    <a href="mailto:privacidad@humanis.mx" className="text-indigo-600 hover:underline"> privacidad@humanis.mx</a>
                  </p>

                  <h3 className="text-xl font-bold mt-6 mb-3 text-slate-800">6. Cambios al Aviso de Privacidad</h3>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Nos reservamos el derecho de modificar este aviso. Las actualizaciones serán publicadas 
                    en nuestro sitio web.
                  </p>

                  <h3 className="text-xl font-bold mt-6 mb-3 text-slate-800">7. Importante: No Cobramos a Candidatos</h3>
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                    <p className="text-slate-700">
                      <strong>Humanis nunca cobra a los candidatos</strong> por nuestros servicios de reclutamiento. 
                      Si alguien le solicita dinero usando nuestro nombre, por favor repórtelo inmediatamente a 
                      <a href="mailto:contacto@humanis.mx" className="text-indigo-600 hover:underline"> contacto@humanis.mx</a>
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'terms' && (
                <div className="prose prose-slate max-w-none opacity-0 animate-fadeIn">
                  <h2 className="text-3xl font-bold mt-8 mb-4 text-slate-900">Términos y Condiciones</h2>
                  <p className="text-sm text-slate-500 mb-6">Última actualización: Enero 2025</p>

                  <h3 className="text-xl font-bold mt-6 mb-3 text-slate-800">1. Aceptación de los Términos</h3>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Al utilizar los servicios de Humanis, ya sea como empresa o candidato, usted acepta 
                    estos términos y condiciones en su totalidad.
                  </p>

                  <h3 className="text-xl font-bold mt-6 mb-3 text-slate-800">2. Descripción del Servicio</h3>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Humanis es una firma de reclutamiento y selección de personal que conecta empresas 
                    con candidatos calificados. Nuestros servicios incluyen:
                  </p>
                  <ul className="mb-4 pl-6 list-disc">
                    <li className="mb-2 text-slate-600">Reclutamiento y selección por comisión</li>
                    <li className="mb-2 text-slate-600">Headhunting ejecutivo</li>
                    <li className="mb-2 text-slate-600">Programas de talento joven</li>
                    <li className="mb-2 text-slate-600">RPO (Recruitment Process Outsourcing)</li>
                  </ul>

                  <h3 className="text-xl font-bold mt-6 mb-3 text-slate-800">3. Para Empresas</h3>
                  <h4 className="text-lg font-semibold mt-4 mb-2 text-slate-700">3.1 Modelo de Comisión</h4>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    La comisión por colocación exitosa se acuerda previamente en el contrato de servicios 
                    y se factura una vez que el candidato acepta la oferta y/o inicia labores.
                  </p>

                  <h4 className="text-lg font-semibold mt-4 mb-2 text-slate-700">3.2 Garantía de Reemplazo</h4>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Ofrecemos garantía de reemplazo de 90 días. Si el candidato renuncia o es despedido 
                    por causas imputables al candidato dentro de este periodo, realizamos la búsqueda 
                    de reemplazo sin costo adicional.
                  </p>

                  <h4 className="text-lg font-semibold mt-4 mb-2 text-slate-700">3.3 Confidencialidad</h4>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    La información proporcionada por las empresas se maneja con total confidencialidad 
                    y no se comparte con terceros sin autorización.
                  </p>

                  <h3 className="text-xl font-bold mt-6 mb-3 text-slate-800">4. Para Candidatos</h3>
                  <h4 className="text-lg font-semibold mt-4 mb-2 text-slate-700">4.1 Servicio Gratuito</h4>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100 mb-4">
                    <p className="text-slate-700">
                      <strong>Humanis no cobra a los candidatos.</strong> Nuestros servicios son 100% gratuitos 
                      para las personas que buscan empleo.
                    </p>
                  </div>

                  <h4 className="text-lg font-semibold mt-4 mb-2 text-slate-700">4.2 Veracidad de la Información</h4>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Los candidatos son responsables de proporcionar información veraz y actualizada. 
                    La falsedad de datos puede resultar en la cancelación del proceso.
                  </p>

                  <h4 className="text-lg font-semibold mt-4 mb-2 text-slate-700">4.3 Uso de Datos</h4>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Al registrarse, los candidatos autorizan a Humanis a compartir su información con 
                    empresas que tienen vacantes relevantes.
                  </p>

                  <h3 className="text-xl font-bold mt-6 mb-3 text-slate-800">5. Limitación de Responsabilidad</h3>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Humanis actúa como intermediario en el proceso de reclutamiento. Las decisiones de 
                    contratación son responsabilidad exclusiva de las empresas.
                  </p>

                  <h3 className="text-xl font-bold mt-6 mb-3 text-slate-800">6. Modificaciones</h3>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Nos reservamos el derecho de modificar estos términos. Los cambios serán publicados 
                    en nuestro sitio web.
                  </p>

                  <h3 className="text-xl font-bold mt-6 mb-3 text-slate-800">7. Jurisdicción</h3>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier 
                    controversia será resuelta ante los tribunales competentes de la Ciudad de México.
                  </p>
                </div>
              )}

              {activeTab === 'cookies' && (
                <div className="prose prose-slate max-w-none opacity-0 animate-fadeIn">
                  <h2 className="text-3xl font-bold mt-8 mb-4 text-slate-900">Política de Cookies</h2>
                  <p className="text-sm text-slate-500 mb-6">Última actualización: Enero 2025</p>

                  <h3 className="text-xl font-bold mt-6 mb-3 text-slate-800">1. ¿Qué son las Cookies?</h3>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando 
                    visita nuestro sitio web. Nos ayudan a mejorar su experiencia de navegación.
                  </p>

                  <h3 className="text-xl font-bold mt-6 mb-3 text-slate-800">2. Tipos de Cookies que Utilizamos</h3>
                  
                  <h4 className="text-lg font-semibold mt-4 mb-2 text-slate-700">Cookies Esenciales</h4>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Necesarias para el funcionamiento básico del sitio. No pueden ser deshabilitadas.
                  </p>
                  <ul className="mb-4 pl-6 list-disc">
                    <li className="mb-2 text-slate-600">Sesión de usuario</li>
                    <li className="mb-2 text-slate-600">Preferencias de idioma</li>
                    <li className="mb-2 text-slate-600">Seguridad</li>
                  </ul>

                  <h4 className="text-lg font-semibold mt-4 mb-2 text-slate-700">Cookies Analíticas</h4>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio.
                  </p>
                  <ul className="mb-4 pl-6 list-disc">
                    <li className="mb-2 text-slate-600">Google Analytics</li>
                    <li className="mb-2 text-slate-600">Estadísticas de uso</li>
                  </ul>

                  <h4 className="text-lg font-semibold mt-4 mb-2 text-slate-700">Cookies de Marketing</h4>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Utilizadas para mostrar anuncios relevantes (solo si usted lo autoriza).
                  </p>

                  <h3 className="text-xl font-bold mt-6 mb-3 text-slate-800">3. Cómo Gestionar las Cookies</h3>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Puede configurar su navegador para rechazar cookies o alertarle cuando se envíen. 
                    Sin embargo, algunas funciones del sitio pueden no funcionar correctamente sin cookies.
                  </p>

                  <h4 className="text-lg font-semibold mt-4 mb-2 text-slate-700">Instrucciones por navegador:</h4>
                  <ul className="mb-4 pl-6 list-disc">
                    <li className="mb-2 text-slate-600"><strong>Chrome:</strong> Configuración → Privacidad → Cookies</li>
                    <li className="mb-2 text-slate-600"><strong>Firefox:</strong> Opciones → Privacidad → Historial</li>
                    <li className="mb-2 text-slate-600"><strong>Safari:</strong> Preferencias → Privacidad</li>
                    <li className="mb-2 text-slate-600"><strong>Edge:</strong> Configuración → Cookies y permisos</li>
                  </ul>

                  <h3 className="text-xl font-bold mt-6 mb-3 text-slate-800">4. Consentimiento</h3>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Al continuar navegando en nuestro sitio, usted acepta el uso de cookies esenciales. 
                    Para cookies analíticas y de marketing, solicitamos su consentimiento explícito.
                  </p>

                  <h3 className="text-xl font-bold mt-6 mb-3 text-slate-800">5. Contacto</h3>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Si tiene preguntas sobre nuestra política de cookies, contáctenos en:
                    <a href="mailto:privacidad@humanis.mx" className="text-indigo-600 hover:underline"> privacidad@humanis.mx</a>
                  </p>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <style jsx>{`
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