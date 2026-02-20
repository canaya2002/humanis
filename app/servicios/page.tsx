import { Metadata } from "next";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Section, SectionHeader, Button, ComplianceBadge, CTABanner, JsonLd } from "../components/ui";
import { SITE, SERVICES } from "@/lib/data";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Servicios de Reclutamiento y Colocación de Personal",
  description:
    "Reclutamiento y selección, servicios especializados REPSE, gestión de nómina y consultoría laboral. Operamos con apego a la normativa laboral vigente en México.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios de Colocación de Personal | Humanis",
    description: "Soluciones integrales de reclutamiento con cumplimiento normativo.",
    url: "/servicios",
  },
};

export default function ServiciosPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Inicio", url: SITE.url },
        { name: "Servicios", url: `${SITE.url}/servicios` },
      ])} />
      {SERVICES.map((svc) => (
        <JsonLd key={svc.id} data={serviceSchema(svc.title, svc.shortDesc)} />
      ))}

      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-stone-50 to-white">
          <div className="mx-auto max-w-4xl px-6 text-center animate-fade-in">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest text-cyan-800 bg-cyan-50 border border-cyan-100 rounded-full">
              Servicios Humanis
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.1] mb-6">
              Infraestructura de talento con{" "}
              <span className="text-cyan-700">cumplimiento normativo</span>
            </h1>
            <p className="text-lg text-stone-500 leading-relaxed max-w-2xl mx-auto">
              Cada servicio opera con controles orientados al cumplimiento de la normativa laboral vigente en México.
              El alcance específico se define en la propuesta comercial.
            </p>
          </div>
        </section>

        {/* Services Detail */}
        {SERVICES.map((svc, idx) => (
          <Section key={svc.id} id={svc.id} bg={idx % 2 === 0 ? "white" : "stone"}>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-extrabold text-stone-200">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                    {svc.title}
                  </h2>
                </div>
              </div>

              <p className="text-lg text-stone-600 leading-relaxed mb-8">
                {svc.shortDesc}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {svc.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-stone-100">
                    <CheckCircle2 size={18} className="text-cyan-600 shrink-0" />
                    <span className="text-sm font-semibold text-stone-700">{f}</span>
                  </div>
                ))}
              </div>

              <ComplianceBadge text={svc.compliance} />
            </div>
          </Section>
        ))}

        <CTABanner
          title="¿Hablamos de tu proyecto?"
          description="Agenda una conversación sin compromiso para definir el alcance de tu necesidad."
        />
      </main>
      <Footer />
    </>
  );
}
