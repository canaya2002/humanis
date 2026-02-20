import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQAccordion from "../components/FAQAccordion";
import { Section, SectionHeader, CTABanner, JsonLd } from "../components/ui";
import { SITE, FAQ_EMPRESAS } from "@/lib/data";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes para Empresas",
  description: "Respuestas claras sobre reclutamiento, comisiones, garantías y marco legal. Resolvemos tus dudas sobre contratación de personal.",
  alternates: { canonical: "/faq-empresas" },
};

export default function FAQEmpresasPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Inicio", url: SITE.url },
        { name: "FAQ Empresas", url: `${SITE.url}/faq-empresas` },
      ])} />
      <JsonLd data={faqPageSchema([...FAQ_EMPRESAS])} />

      <Header />
      <main id="main-content">
        <section className="pt-32 pb-16 bg-gradient-to-b from-stone-50 to-white">
          <div className="mx-auto max-w-3xl px-6 text-center animate-fade-in">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest text-stone-600 bg-stone-100 rounded-full">
              Centro de Ayuda
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.1] mb-6">
              Preguntas frecuentes <span className="text-cyan-700">para empresas</span>
            </h1>
            <p className="text-lg text-stone-500">
              Claridad sobre nuestros servicios de reclutamiento, cumplimiento y marco legal.
            </p>
          </div>
        </section>

        <Section>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={FAQ_EMPRESAS} />
          </div>
        </Section>

        <CTABanner title="¿Dudas adicionales?" description="Nuestro equipo está listo para aclarar cualquier punto específico." cta="Hablar con un Asesor" />
      </main>
      <Footer />
    </>
  );
}
