import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, DollarSign, Clock, Building2, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button, JsonLd } from "../../components/ui";
import { getVacancyBySlug, getAllVacancySlugs, SITE } from "@/lib/data";
import { jobPostingSchema, breadcrumbSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return getAllVacancySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const v = getVacancyBySlug(slug);
  if (!v) return { title: "Vacante no encontrada" };

  const expired = new Date(v.validThrough) < new Date();
  const prefix = expired ? "[Cerrada] " : "";

  return {
    title: `${prefix}${v.title} — ${v.company}`,
    description: `${v.description} Ubicación: ${v.location}. Salario: ${v.salary}.`,
    alternates: { canonical: `/vacantes/${slug}` },
  };
}

export default async function VacantePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const v = getVacancyBySlug(slug);
  if (!v) notFound();

  const expired = new Date(v.validThrough) < new Date();

  return (
    <>
      <JsonLd data={jobPostingSchema(v)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Inicio", url: SITE.url },
        { name: "Vacantes", url: `${SITE.url}/vacantes` },
        { name: v.title, url: `${SITE.url}/vacantes/${slug}` },
      ])} />

      <Header />
      <main id="main-content" className="pt-28 pb-20">
        <div className="mx-auto max-w-5xl px-6">
          {/* Back */}
          <Link href="/vacantes" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-500 hover:text-cyan-700 transition-colors mb-8">
            <ArrowLeft size={16} /> Volver a Vacantes
          </Link>

          {/* Expired notice */}
          {expired && (
            <div className="mb-8 p-5 bg-amber-50 border border-amber-100 rounded-xl">
              <h3 className="font-bold text-amber-900 mb-1">Vacante cerrada</h3>
              <p className="text-sm text-amber-800">
                Esta posición ya no acepta postulaciones.{" "}
                <Link href="/vacantes" className="underline">Ver otras vacantes</Link>.
              </p>
            </div>
          )}

          <div className={expired ? "opacity-60" : ""}>
            {/* Header */}
            <div className="mb-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-stone-900 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  {v.area}
                </span>
                <span className="text-xs font-medium text-stone-400 flex items-center gap-1">
                  <Clock size={12} /> {v.posted}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight mb-3">
                {v.title}
              </h1>
              <p className="text-xl text-stone-500 font-medium flex items-center gap-2">
                <Building2 size={20} className="text-stone-400" /> {v.company}
              </p>
            </div>

            {/* Quick info */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              {[
                { label: "Salario", value: v.salary, icon: DollarSign },
                { label: "Ubicación", value: v.location, icon: MapPin },
                { label: "Modalidad", value: v.type, icon: Briefcase },
                { label: "Jornada", value: v.schedule, icon: Clock },
              ].map(({ label, value, icon: Icon }, i) => (
                <div key={i} className="bg-stone-50 border border-stone-100 rounded-xl p-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">{label}</p>
                  <p className="text-sm font-bold text-stone-900 flex items-center gap-1.5">
                    <Icon size={14} className="text-cyan-600" /> {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <h2 className="text-xl font-bold text-stone-900 mb-4">Descripción</h2>
                  <p className="text-stone-600 leading-relaxed">{v.description}</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-stone-900 mb-4">Requisitos</h2>
                  <ul className="space-y-3">
                    {v.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-3 p-3 bg-stone-50 rounded-xl">
                        <CheckCircle2 size={16} className="text-cyan-600 shrink-0 mt-0.5" />
                        <span className="text-stone-700 font-medium">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar CTA */}
              <div>
                <div className={`sticky top-28 rounded-2xl p-8 ${expired ? "bg-stone-100" : "bg-stone-900 text-white"}`}>
                  {expired ? (
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-stone-800 mb-3">Postulaciones cerradas</h3>
                      <p className="text-sm text-stone-500 mb-6">Esta vacante ya no está disponible.</p>
                      <Button href="/vacantes" variant="primary" size="md">
                        Ver otras vacantes <ArrowRight size={14} />
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-xl font-bold mb-3">¿Te interesa?</h3>
                      <p className="text-stone-400 text-sm mb-6">Aplica ahora. Nuestro servicio es gratuito para ti.</p>
                      <Link
                        href="/contacto"
                        className="block w-full py-4 bg-white text-stone-900 text-center font-bold rounded-xl hover:bg-cyan-50 transition-colors mb-4"
                      >
                        Postularme
                      </Link>
                      <div className="space-y-3 text-xs text-stone-400">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-emerald-500" />
                          Sin costos ocultos
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-emerald-500" />
                          Feedback según disponibilidad
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
