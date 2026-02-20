import { Metadata } from "next";
import { Building2, Briefcase, CheckCircle2 } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Section, SectionHeader, CTABanner, JsonLd } from "../components/ui";
import { SITE } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Casos de Éxito — Resultados Documentados",
  description: "Resultados documentados de empresas que resolvieron retos de talento con Humanis. Métricas verificables según caso.",
  alternates: { canonical: "/casos-de-exito" },
};

// [POR VALIDAR] — Estos casos deben ser confirmados por el cliente
const cases = [
  {
    industry: "Retail",
    challenge: "Cobertura de múltiples posiciones de piso en plazos cortos para apertura de tiendas.",
    result: "Posiciones cubiertas en tiempos estimados con tasas de retención superiores al promedio del sector.",
    metrics: [
      { label: "Posiciones", value: "[POR VALIDAR]" },
      { label: "Tiempo", value: "[POR VALIDAR]" },
      { label: "Retención", value: "[POR VALIDAR]" },
    ],
  },
  {
    industry: "Tecnología",
    challenge: "Formación de equipo core de desarrollo en un mercado altamente competitivo.",
    result: "Equipo completo integrado según tiempos pactados con alta permanencia durante el primer año.",
    metrics: [
      { label: "Posiciones", value: "[POR VALIDAR]" },
      { label: "Tiempo", value: "[POR VALIDAR]" },
      { label: "Permanencia", value: "[POR VALIDAR]" },
    ],
  },
  {
    industry: "Logística",
    challenge: "Rotación elevada en posiciones operativas que impactaba la productividad.",
    result: "Reducción significativa de rotación mediante mejora en el perfilamiento de candidatos.",
    metrics: [
      { label: "Rotación previa", value: "[POR VALIDAR]" },
      { label: "Rotación post", value: "[POR VALIDAR]" },
    ],
  },
];

export default function CasosDeExitoPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Inicio", url: SITE.url },
        { name: "Casos de Éxito", url: `${SITE.url}/casos-de-exito` },
      ])} />

      <Header />
      <main id="main-content">
        <section className="pt-32 pb-16 bg-gradient-to-b from-stone-50 to-white">
          <div className="mx-auto max-w-3xl px-6 text-center animate-fade-in">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest text-stone-600 bg-stone-100 rounded-full">
              Resultados Documentados
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.1] mb-6">
              Casos de <span className="text-cyan-700">éxito</span>
            </h1>
            <p className="text-lg text-stone-500">
              Resolvemos retos de negocio a través del talento humano. Resultados sujetos a las condiciones de cada proyecto.
            </p>
          </div>
        </section>

        <Section>
          <div className="space-y-12 max-w-4xl mx-auto">
            {cases.map((c, idx) => (
              <div key={idx} className="bg-white border border-stone-200 rounded-2xl p-8 lg:p-10">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 rounded-full text-xs font-bold text-stone-600 mb-5">
                  <Building2 size={12} /> {c.industry}
                </span>

                <div className="grid sm:grid-cols-2 gap-8 mb-8">
                  <div className="border-l-4 border-amber-200 pl-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">Reto</h3>
                    <p className="text-stone-700 font-medium">{c.challenge}</p>
                  </div>
                  <div className="border-l-4 border-emerald-200 pl-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">Resultado</h3>
                    <p className="text-stone-700 font-medium">{c.result}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {c.metrics.map((m, i) => (
                    <div key={i} className="bg-stone-50 border border-stone-100 rounded-xl px-5 py-3 text-center">
                      <p className="text-lg font-extrabold text-stone-900">{m.value}</p>
                      <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-stone-400 mt-8 max-w-lg mx-auto">
            Los resultados mostrados corresponden a proyectos reales. Las métricas específicas están sujetas a validación y varían según las condiciones de cada caso.
          </p>
        </Section>

        <CTABanner title="¿Tu empresa es la siguiente?" description="Cuéntanos tu reto y diseñamos una solución." />
      </main>
      <Footer />
    </>
  );
}
