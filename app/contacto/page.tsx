import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { Section, JsonLd } from "../components/ui";
import { SITE } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contáctanos en ${SITE.address.full}. Teléfono: ${SITE.phone}. Agencia de colocación con cobertura nacional.`,
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto | Humanis CDMX",
    description: "Oficinas en Lomas - Virreyes, CDMX. Cobertura nacional.",
    url: "/contacto",
  },
};

const contactCards = [
  {
    icon: MapPin,
    title: "Oficinas",
    lines: [SITE.address.street, `${SITE.address.colony}, ${SITE.address.city}`, `${SITE.address.zip} ${SITE.address.state}`],
  },
  {
    icon: Phone,
    title: "Teléfono",
    lines: [SITE.phone],
    href: `tel:${SITE.phoneTel}`,
  },
  {
    icon: Mail,
    title: "Correo",
    lines: [SITE.email],
    href: `mailto:${SITE.email}`,
  },
  {
    icon: Clock,
    title: "Horario",
    lines: ["Lun — Vie: 9:00 - 18:00"],
  },
];

export default function ContactoPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Inicio", url: SITE.url },
        { name: "Contacto", url: `${SITE.url}/contacto` },
      ])} />

      <Header />
      <main id="main-content">
        <section className="pt-32 pb-20 bg-gradient-to-b from-stone-50 to-white">
          <div className="mx-auto max-w-4xl px-6 text-center animate-fade-in">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest text-stone-600 bg-stone-100 rounded-full">
              Contacto
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.1] mb-6">
              Hablemos de tu necesidad
            </h1>
            <p className="text-lg text-stone-500 leading-relaxed">
              Ya sea que busques talento o tu próxima oportunidad, el primer paso es conversar. Sin compromiso.
            </p>
          </div>
        </section>

        <Section>
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactCards.map(({ icon: Icon, title, lines, href }, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-stone-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-stone-900 mb-1">{title}</h3>
                    {lines.map((line, i) =>
                      href ? (
                        <a key={i} href={href} className="block text-sm text-stone-500 hover:text-cyan-700 transition-colors">
                          {line}
                        </a>
                      ) : (
                        <p key={i} className="text-sm text-stone-500">{line}</p>
                      )
                    )}
                  </div>
                </div>
              ))}

              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl font-bold text-sm hover:bg-emerald-100 transition-colors"
              >
                <Phone size={16} />
                Enviar WhatsApp
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-stone-200 p-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Envía tu solicitud</h2>
              <ContactForm />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
