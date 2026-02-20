import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SITE } from "@/lib/data";
import LegalTabs from "./LegalTabs";

export const metadata: Metadata = {
  title: "Aviso Legal y Términos de Servicio",
  description: "Aviso de privacidad, términos y condiciones, y política de cookies de Humanis.",
  alternates: { canonical: "/legal" },
  robots: { index: true, follow: true },
};

export default function LegalPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-28 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-500 hover:text-stone-900 mb-8">
            <ArrowLeft size={16} /> Volver al inicio
          </Link>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-3">
            Centro de Confianza
          </h1>
          <p className="text-stone-500 mb-10">Transparencia, cumplimiento y protección de datos.</p>

          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
            <LegalTabs />

            {/* Static content for SSR / SEO crawlers */}
            <div className="p-8 lg:p-12 prose max-w-none text-stone-700">
              <h2>Aviso de Privacidad Integral</h2>
              <p><strong>{SITE.legalName}</strong>, con domicilio en {SITE.address.full}, es responsable del tratamiento de sus datos personales.</p>

              <h3>Datos que recabamos</h3>
              <p>Datos de identificación, contacto, laborales y académicos, según el servicio solicitado.</p>

              <h3>Finalidades del Tratamiento</h3>
              <p>Gestión de procesos de colocación, intermediación entre candidatos y empresas, verificación de referencias y coordinación de entrevistas.</p>

              <h3>Derechos ARCO</h3>
              <p>Usted puede ejercer sus derechos de Acceso, Rectificación, Cancelación u Oposición escribiendo a: <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a></p>

              <h3>Servicio Gratuito para Candidatos</h3>
              <p>Humanis no cobra a los candidatos por sus servicios de colocación. La tarifa aplica únicamente al empleador.</p>

              <hr />

              <h2>Términos y Condiciones</h2>
              <p>Humanis es una agencia de colocación de personal. No somos outsourcing ni subcontratación. La relación laboral es directamente entre la empresa cliente y la persona contratada.</p>

              <h3>Para Empresas</h3>
              <p>La relación comercial se rige por el contrato firmado. Las condiciones de garantía, reemplazo y cancelación se pactan por escrito caso por caso.</p>

              <h3>Para Candidatos</h3>
              <p>El servicio es gratuito. Los candidatos son responsables de proporcionar información veraz.</p>

              <h3>Jurisdicción</h3>
              <p>Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Jurisdicción: tribunales de la Ciudad de México.</p>

              <hr />

              <h2>Política de Cookies</h2>
              <p>Utilizamos cookies esenciales y analíticas. Las cookies analíticas se activan solo con su consentimiento. Puede configurar su navegador para rechazar cookies.</p>

              <h3>Contacto</h3>
              <p>Dudas sobre privacidad o cookies: <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
