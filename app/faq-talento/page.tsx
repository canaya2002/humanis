import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQAccordion from "../components/FAQAccordion";
import { Section, CTABanner, JsonLd } from "../components/ui";
import { SITE, FAQ_TALENTO } from "@/lib/data";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes para Candidatos",
  description: "Todo sobre nuestro servicio gratuito de colocación. Proceso, requisitos, tiempos y más.",
  alternates: { canonical: "/faq-talento" },
};

export default function FAQTalentoPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Inicio", url: SITE.url },
        { name: "FAQ Talento", url: `${SITE.url}/faq-talento` },
      ])} />
      <JsonLd data={faqPageSchema([...FAQ_TALENTO])} />

      <Header />
      <main id="main-content">
        <section className="pt-32 pb-16 bg-gradient-to-b from-cyan-50/30 to-white">
          <div className="mx-auto max-w-3xl px-6 text-center animate-fade-in">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest text-cyan-800 bg-cyan-50 border border-cyan-100 rounded-full">
              Centro de Ayuda
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.1] mb-6">
              Preguntas frecuentes <span className="text-cyan-700">para talento</span>
            </h1>
            <p className="text-lg text-stone-500">
              Todo lo que necesitas saber sobre nuestro servicio gratuito para candidatos.
            </p>
          </div>
        </section>

        <Section>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={FAQ_TALENTO} />
          </div>
        </Section>

        <CTABanner title="¿Más preguntas?" cta="Contactar Soporte" />
      </main>
      <Footer />
    </>
  );
}
