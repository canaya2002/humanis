import { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, DollarSign, Briefcase, UserCheck, Clock, Search, Star } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Section, SectionHeader, Button, CTABanner, JsonLd } from "../components/ui";
import { SITE } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Empleo Gratuito para Talento",
  description:
    "Servicio gratuito para candidatos. Accede a vacantes operativas, administrativas y ejecutivas en México. No cobramos al talento.",
  alternates: { canonical: "/talento" },
};

const benefits = [
  { icon: DollarSign, title: "Gratuito", desc: "Nunca te cobraremos. Nuestro servicio lo pagan las empresas." },
  { icon: Briefcase, title: "Vacantes validadas", desc: "Acceso a posiciones en empresas reales y verificadas." },
  { icon: UserCheck, title: "Acompañamiento", desc: "Te apoyamos en la preparación de tu entrevista." },
  { icon: Clock, title: "Comunicación", desc: "Feedback constante. No te dejamos sin respuesta." },
];

const roles = ["Ventas", "Administrativo", "Tecnología", "Logística", "Finanzas", "Operaciones"];

export default function TalentoPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Inicio", url: SITE.url },
        { name: "Para Talento", url: `${SITE.url}/talento` },
      ])} />

      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative pt-32 pb-24 bg-gradient-to-b from-cyan-50/30 to-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest text-cyan-800 bg-cyan-50 border border-cyan-100 rounded-full">
                  Para Candidatos
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.1] mb-6">
                  Tu siguiente oportunidad{" "}
                  <span className="text-cyan-700">profesional</span>
                </h1>
                <p className="text-lg text-stone-500 leading-relaxed max-w-lg mb-8">
                  Conectamos talento con empresas que valoran a su gente. Servicio gratuito, siempre.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/vacantes" size="lg">
                    <Search size={16} /> Ver Vacantes
                  </Button>
                  <Button href="/contacto" variant="outline" size="lg">
                    Subir mi CV
                  </Button>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] animate-fade-in delay-200">
                <Image
                  src="/nosotros/culture-3.png"
                  alt="Candidato en proceso de entrevista de trabajo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <Section>
          <SectionHeader tag="Beneficios" title="¿Por qué Humanis?" description="No somos otra bolsa de trabajo. Te acompañamos en el proceso." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, title, desc }, idx) => (
              <div key={idx} className="p-7 bg-white rounded-2xl border border-stone-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-700 mb-5">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Areas */}
        <Section bg="stone">
          <SectionHeader tag="Áreas" title="Vacantes en múltiples sectores" />
          <div className="flex flex-wrap justify-center gap-3">
            {roles.map((role) => (
              <div key={role} className="px-5 py-3 bg-white border border-stone-200 rounded-full text-sm font-semibold text-stone-700">
                <Star size={14} className="inline mr-2 text-cyan-500" />
                {role}
              </div>
            ))}
          </div>
        </Section>

        <CTABanner title="¿Listo para dar el siguiente paso?" cta="Explorar Vacantes" href="/vacantes" />
      </main>
      <Footer />
    </>
  );
}
