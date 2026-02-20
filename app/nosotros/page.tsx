import { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Heart, Target, Users, Scale } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Section, SectionHeader, Button, ComplianceBadge, CTABanner, JsonLd } from "../components/ui";
import { SITE } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sobre Humanis — Agencia de Colocación en CDMX",
  description:
    "Agencia de colocación de personal con apego a normativa STPS. Intermediamos entre empresas y talento con transparencia y proceso trazable.",
  alternates: { canonical: "/nosotros" },
};

const values = [
  { icon: ShieldCheck, title: "Cumplimiento Normativo", desc: "Operamos bajo estricto apego a la normativa laboral mexicana vigente." },
  { icon: Heart, title: "Transparencia", desc: "Servicio gratuito para talento. Tarifa clara al empleador. Sin costos ocultos." },
  { icon: Target, title: "Enfoque en Resultados", desc: "Proceso trazable con filtros y validación de candidatos documentados." },
  { icon: Users, title: "Enfoque Humano", desc: "Facilitamos oportunidades de crecimiento para personas y empresas." },
];

const compliance = [
  { title: "Apego a STPS", desc: "Agencia de colocación que opera conforme a la normativa de la Secretaría del Trabajo." },
  { title: "Constitución Legal", desc: "Sociedad debidamente constituida con cumplimiento fiscal." },
  { title: "Normativa Laboral", desc: "Apego a la Ley Federal del Trabajo y marco regulatorio vigente." },
  { title: "Protección de Datos", desc: "Manejo de información conforme a la Ley de Protección de Datos Personales." },
];

export default function NosotrosPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Inicio", url: SITE.url },
        { name: "Nosotros", url: `${SITE.url}/nosotros` },
      ])} />

      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-stone-50 to-white">
          <div className="mx-auto max-w-4xl px-6 text-center animate-fade-in">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest text-stone-600 bg-stone-100 rounded-full">
              Sobre Humanis
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.1] mb-6">
              Agencia de colocación con{" "}
              <span className="text-cyan-700">apego normativo</span>
            </h1>
            <p className="text-lg text-stone-500 leading-relaxed max-w-2xl mx-auto">
              Intermediamos entre empresas y talento con transparencia, cumplimiento legal y proceso trazable.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <Section>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[21/9] max-w-5xl mx-auto">
            <Image
              src="/nosotros/hero-team.png"
              alt="Equipo Humanis — agencia de colocación en CDMX"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>
        </Section>

        {/* Compliance */}
        <Section bg="stone">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                tag="Marco Legal"
                title="Cumplimiento como pilar"
                description="Operamos con los controles necesarios para proteger a nuestros clientes y candidatos en cada proceso."
                center={false}
              />
              <div className="space-y-4">
                {compliance.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-stone-200">
                    <Scale size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-sm text-stone-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[3/4]">
              <Image
                src="/nosotros/compliance.png"
                alt="Documentación de cumplimiento normativo Humanis"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </Section>

        {/* Values */}
        <Section>
          <SectionHeader tag="Valores" title="Lo que nos define" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, idx) => (
              <div key={idx} className="p-7 bg-stone-50 rounded-2xl border border-stone-100">
                <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-cyan-700 mb-5">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <CTABanner title="¿Listo para trabajar con una agencia transparente?" />
      </main>
      <Footer />
    </>
  );
}
