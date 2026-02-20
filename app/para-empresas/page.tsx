import { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Clock, Users, Target, TrendingUp } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Section, SectionHeader, Button, ComplianceBadge, CTABanner, JsonLd } from "../components/ui";
import { SITE, SERVICES } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contratación de Personal para Empresas",
  description:
    "Agencia de colocación de personal en México. Cubrimos vacantes operativas, administrativas y mandos medios con proceso trazable. Tarifa al empleador, gratuito para talento.",
  alternates: { canonical: "/para-empresas" },
  openGraph: {
    title: "Soluciones de Contratación de Personal | Humanis",
    description: "Proceso trazable con filtros, validación y presentación de candidatos.",
    url: "/para-empresas",
  },
};

const challenges = [
  { icon: Clock, title: "Vacantes urgentes", desc: "Posiciones críticas que afectan tu operación diaria." },
  { icon: TrendingUp, title: "Picos de operación", desc: "Necesidades estacionales que requieren escalabilidad." },
  { icon: Users, title: "Alta rotación", desc: "Ciclos de reclutamiento que desgastan a tu equipo interno." },
  { icon: Target, title: "Pipeline insuficiente", desc: "Falta de candidatos calificados listos para entrar." },
];

export default function ParaEmpresasPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Inicio", url: SITE.url },
        { name: "Para Empresas", url: `${SITE.url}/para-empresas` },
      ])} />

      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative pt-32 pb-24 bg-gradient-to-b from-stone-50 to-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in">
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest text-stone-600 bg-stone-100 rounded-full">
                  Soluciones B2B
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.1] mb-6">
                  Talento validado,
                  <br />
                  <span className="text-cyan-700">listo para integrarse</span>
                </h1>
                <p className="text-lg text-stone-500 leading-relaxed max-w-lg mb-8">
                  Cubrimos tus vacantes con un proceso trazable de reclutamiento, filtros y validación.
                  Tiempos estimados según perfil y alcance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contacto" size="lg">
                    Hablar con un Asesor <ArrowRight size={16} />
                  </Button>
                  <Button href="/servicios" variant="outline" size="lg">
                    Ver Servicios
                  </Button>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] animate-fade-in delay-200">
                <Image
                  src="/nosotros/culture-5.png"
                  alt="Equipo de trabajo Humanis atendiendo necesidades de empresas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <Section>
          <SectionHeader
            tag="Retos comunes"
            title="Sabemos lo costoso que es tener una silla vacía"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="p-7 bg-stone-50 rounded-2xl border border-stone-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-cyan-700 mb-5">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Services Preview */}
        <Section bg="stone">
          <SectionHeader
            tag="Nuestros servicios"
            title="Soluciones según tu necesidad"
            description="Cada servicio se adapta a tu contexto. El alcance y tiempos se definen en la propuesta comercial."
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {SERVICES.map((svc) => (
              <div key={svc.id} className="bg-white rounded-2xl border border-stone-200 p-7">
                <h3 className="text-xl font-bold text-stone-900 mb-3">{svc.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed mb-5">{svc.shortDesc}</p>
                <ul className="space-y-2 mb-5">
                  {svc.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-stone-700 font-medium">
                      <CheckCircle2 size={14} className="text-cyan-600 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <ComplianceBadge text={svc.compliance} />
              </div>
            ))}
          </div>
        </Section>

        <CTABanner
          title="¿Listo para contratar?"
          description="Cuéntanos tu necesidad y diseñamos un plan a la medida. Sin compromiso."
          cta="Agendar Llamada"
          href="/contacto"
        />
      </main>
      <Footer />
    </>
  );
}
