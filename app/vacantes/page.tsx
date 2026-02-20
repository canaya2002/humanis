import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { JsonLd } from "../components/ui";
import { SITE, VACANCIES } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";
import VacantesClient from "./VacantesClient";

export const metadata: Metadata = {
  title: "Bolsa de Trabajo — Vacantes de Empleo en México",
  description:
    "Explora oportunidades de empleo en todo México. Vacantes operativas, administrativas y ejecutivas. Servicio gratuito para candidatos.",
  alternates: { canonical: "/vacantes" },
};

export default function VacantesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Inicio", url: SITE.url },
        { name: "Vacantes", url: `${SITE.url}/vacantes` },
      ])} />

      <Header />
      <main id="main-content" className="pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 animate-fade-in">
            <span className="inline-block px-4 py-1.5 mb-5 text-xs font-bold uppercase tracking-widest text-stone-600 bg-stone-100 rounded-full">
              Bolsa de Trabajo
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.1]">
              Oportunidades activas
            </h1>
          </div>
          <VacantesClient vacancies={VACANCIES} />
        </div>
      </main>
      <Footer />
    </>
  );
}
