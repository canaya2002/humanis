import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  ShieldCheck,
  FileText,
  Search,
  CheckCircle2,
  Building2,
  Phone,
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Section, SectionHeader, Button, ComplianceBadge, CTABanner, JsonLd } from "./components/ui";
import { SITE, SERVICES, INDUSTRIES } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Inicio", url: SITE.url }])}
      />

      <Header />

      <main id="main-content">
        {/* ─── HERO ─── */}
        <section className="relative min-h-[85vh] flex items-center bg-white overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/40 via-white to-stone-50/60" />

          <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-36">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Copy */}
              <div className="animate-fade-in">
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest text-cyan-800 bg-cyan-50 border border-cyan-100 rounded-full">
                  Agencia de Colocación — CDMX
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.1] mb-6">
                  El talento adecuado para{" "}
                  <span className="text-cyan-700">tu empresa</span>
                </h1>

                <p className="text-lg lg:text-xl text-stone-500 leading-relaxed max-w-lg mb-8">
                  Reclutamos, filtramos y validamos candidatos operativos,
                  administrativos y mandos medios. Servicio gratuito para el
                  talento, tarifa al empleador.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <Button href="/para-empresas" size="lg">
                    Soy Empresa
                    <ArrowRight size={18} />
                  </Button>
                  <Button href="/talento" variant="outline" size="lg">
                    Soy Candidato
                  </Button>
                </div>

                {/* Trust signals */}
                <div className="flex items-center gap-6 text-sm text-stone-500">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-emerald-600" />
                    Apego a LFT y STPS
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    Cobertura nacional
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative animate-fade-in delay-200">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                  <Image
                    src="/humanishero.png"
                    alt="Equipo de reclutamiento Humanis en oficina de CDMX"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-stone-100 p-5 hidden md:flex items-center gap-4 animate-slide-up delay-400">
                  <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center">
                    <Users size={24} className="text-cyan-700" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                      Cobertura
                    </p>
                    <p className="text-lg font-extrabold text-stone-900">Nacional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SERVICES ─── */}
        <Section bg="stone" id="servicios">
          <SectionHeader
            tag="Servicios"
            title="Soluciones para tu empresa"
            description="Ofrecemos servicios de colocación con enfoque en cumplimiento normativo. El alcance específico se define en cada propuesta comercial."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc) => (
              <Link
                key={svc.id}
                href={`/servicios#${svc.id}`}
                className="group bg-white rounded-2xl border border-stone-200 p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-700 mb-5 group-hover:bg-cyan-700 group-hover:text-white transition-colors">
                  {svc.id === "reclutamiento-seleccion" && <Search size={22} />}
                  {svc.id === "servicios-especializados" && <ShieldCheck size={22} />}
                  {svc.id === "gestion-nomina" && <FileText size={22} />}
                  {svc.id === "consultoria-laboral" && <Users size={22} />}
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-cyan-800 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed mb-4">
                  {svc.shortDesc}
                </p>
                <span className="text-xs font-bold text-cyan-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Más información <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 max-w-2xl mx-auto">
            <ComplianceBadge text="Todos nuestros servicios operan con apego a la Ley Federal del Trabajo, STPS, IMSS, SAT e INFONAVIT. Para servicios especializados (REPSE), la aplicación se valida según documentación y alcance del proyecto." />
          </div>
        </Section>

        {/* ─── INDUSTRIES ─── */}
        <Section>
          <SectionHeader
            tag="Sectores"
            title="Experiencia en tu industria"
            description="Hemos colocado talento en diversos sectores económicos de México."
          />

          <div className="flex flex-wrap justify-center gap-3">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                className="px-5 py-3 bg-stone-50 border border-stone-200 rounded-full text-sm font-semibold text-stone-700 hover:border-cyan-300 hover:bg-cyan-50 transition-colors"
              >
                <Building2 size={14} className="inline mr-2 text-stone-400" />
                {ind.name}
              </div>
            ))}
          </div>
        </Section>

        {/* ─── WHY HUMANIS ─── */}
        <Section bg="dark">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                tag="Para Empresas"
                title="Cumplimiento normativo como prioridad"
                description="Operamos con controles orientados a proteger a tu empresa en cada contratación. Sujeto a diagnóstico previo."
                center={false}
              />

              <ul className="space-y-4 mb-8">
                {[
                  "Controles orientados a mitigar responsabilidad solidaria",
                  "Enfoque en deducibilidad fiscal según alcance",
                  "Entregables mensuales (sujeto a contrato)",
                  "Atención a requerimientos de autoridades",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2
                      size={18}
                      className="text-emerald-600 shrink-0 mt-0.5"
                    />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Button href="/para-empresas">
                Conocer Soluciones <ArrowRight size={16} />
              </Button>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/nosotros/compliance.png"
                alt="Cumplimiento normativo laboral Humanis"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </Section>

        {/* ─── FOR TALENT ─── */}
        <Section>
          <div className="bg-cyan-50 border border-cyan-100 rounded-3xl p-8 lg:p-14 text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-5 text-xs font-bold uppercase tracking-widest text-cyan-800 bg-white rounded-full">
              Para Candidatos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 mb-4">
              Servicio gratuito para talento
            </h2>
            <p className="text-lg text-stone-600 mb-8 max-w-xl mx-auto">
              Humanis no cobra a los candidatos. Accede a vacantes validadas en
              empresas de todo México. Tu información se maneja con total confidencialidad.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/vacantes">
                Ver Vacantes <ArrowRight size={16} />
              </Button>
              <Button href="/talento" variant="outline">
                Más Información
              </Button>
            </div>
          </div>
        </Section>

        {/* ─── CONTACT QUICK ─── */}
        <Section bg="stone">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 mb-5">
              Hablemos de tu necesidad
            </h2>
            <p className="text-lg text-stone-500 mb-8">
              Sin compromiso. Cuéntanos qué buscas y definimos juntos el mejor
              enfoque.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contacto" size="lg">
                Agendar Llamada <ArrowRight size={18} />
              </Button>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 text-sm font-bold text-stone-900 bg-white border border-stone-200 rounded-full hover:border-stone-400 transition-colors"
              >
                <Phone size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
