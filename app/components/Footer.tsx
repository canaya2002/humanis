import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/data";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  ArrowUp,
} from "lucide-react";

const footerNav = [
  { name: "Para Empresas", href: "/para-empresas" },
  { name: "Servicios", href: "/servicios" },
  { name: "Talento", href: "/talento" },
  { name: "Vacantes", href: "/vacantes" },
  { name: "Casos de Éxito", href: "/casos-de-exito" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
];

const socialLinks = [
  { name: "Facebook", href: SITE.social.facebook, Icon: Facebook },
  { name: "Instagram", href: SITE.social.instagram, Icon: Instagram },
  { name: "LinkedIn", href: SITE.social.linkedin, Icon: Linkedin },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-400" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        {/* Top: Logo + Nav + Social */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-4">
            <Image
              src="/humanislogo.png"
              alt="Humanis"
              width={120}
              height={40}
              className="h-10 w-auto brightness-0 invert mb-6"
            />
            <p className="text-sm leading-relaxed max-w-xs">
              Agencia de colocación de personal con cobertura nacional. Operamos
              con apego a la normativa laboral vigente en México.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (NAP consistency) */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4">
              Contacto
            </h3>
            <address className="not-italic space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                <span>{SITE.address.full}</span>
              </div>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone size={16} className="shrink-0" />
                <span>{SITE.phone}</span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail size={16} className="shrink-0" />
                <span>{SITE.email}</span>
              </a>
            </address>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar ${name}`}
                  className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-500 hover:border-cyan-600 hover:text-cyan-400 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {year} {SITE.legalName}. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/legal" className="hover:text-white transition-colors">
              Aviso de Privacidad
            </Link>
            <Link href="/legal" className="hover:text-white transition-colors">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
