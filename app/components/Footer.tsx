'use client';
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const footerLinks = {
  empresas: [
    { label: "Para Empresas", href: "/para-empresas" },
    { label: "Servicios", href: "/servicios" },
    { label: "Proceso", href: "/proceso" },
    { label: "Industrias", href: "/industrias" },
    { label: "Precios", href: "/precios" },
    { label: "Casos de Éxito", href: "/casos-de-exito" },
  ],
  talento: [
    { label: "Para Candidatos", href: "/talento" },
    { label: "Ver Vacantes", href: "/vacantes" },
    { label: "Registrarme", href: "/registro-talento" },
    { label: "FAQ Talento", href: "/faq-talento" },
  ],
  empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
    { label: "FAQ Empresas", href: "/faq-empresas" },
  ],
  legal: [
    { label: "Aviso de Privacidad", href: "/legal" },
    { label: "Términos y Condiciones", href: "/legal" },
    { label: "Cookies", href: "/legal" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl font-bold">H</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">HUMANIS</span>
            </Link>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Conectamos talento con oportunidad. Reclutamiento ágil, transparente y con garantía.
            </p>
            <div className="space-y-3">
              <a href="tel:+525512345678" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm">
                <Phone size={16} />
                +52 55 1234 5678
              </a>
              <a href="mailto:contacto@humanis.mx" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm">
                <Mail size={16} />
                contacto@humanis.mx
              </a>
              <a href="https://wa.me/525512345678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-green-400 hover:text-green-300 transition-colors text-sm">
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Para Empresas</h4>
            <ul className="space-y-3">
              {footerLinks.empresas.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Para Candidatos</h4>
            <ul className="space-y-3">
              {footerLinks.talento.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
              <p className="text-green-400 text-xs font-medium">
                ✓ 100% Gratuito para candidatos
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Humanis</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Humanis S.A. de C.V. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-slate-500 text-sm flex items-center gap-2">
                <MapPin size={14} />
                CDMX, México
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-500 text-sm">
                Cobertura Nacional
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}