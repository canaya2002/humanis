"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";

const NAV = [
  {
    label: "Para Empresas",
    href: "/para-empresas",
    sub: [
      { label: "Servicios", href: "/servicios" },
      { label: "FAQ Empresas", href: "/faq-empresas" },
    ],
  },
  { label: "Casos de Éxito", href: "/casos-de-exito" },
  {
    label: "Talento",
    href: "/talento",
    sub: [
      { label: "Vacantes", href: "/vacantes" },
      { label: "FAQ Talento", href: "/faq-talento" },
    ],
  },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-stone-200/50"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0" aria-label="Humanis — Inicio">
              <Image
                src="/humanislogo.png"
                alt="Humanis"
                width={120}
                height={40}
                className="h-10 lg:h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
              {NAV.map((item) => (
                <div
                  key={item.href}
                  className="relative group"
                  onMouseEnter={() => item.sub && setOpenSub(item.label)}
                  onMouseLeave={() => setOpenSub(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-stone-700 rounded-lg hover:bg-stone-100 hover:text-stone-900 transition-colors"
                  >
                    {item.label}
                    {item.sub && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          openSub === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {item.sub && openSub === item.label && (
                    <div className="absolute top-full left-0 pt-2 w-56">
                      <div className="bg-white rounded-xl shadow-xl border border-stone-100 p-1.5 animate-fade-in">
                        {item.sub.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-stone-600 rounded-lg hover:bg-stone-50 hover:text-stone-900 transition-colors"
                          >
                            {s.label}
                            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 text-cyan-700" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contacto"
                className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-stone-900 text-white text-sm font-bold rounded-full hover:bg-cyan-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
              >
                Agendar Llamada
              </Link>

              <button
                className="lg:hidden p-2 rounded-lg hover:bg-stone-100 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <nav
            className="absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl p-6 pt-24 overflow-y-auto animate-fade-in"
            aria-label="Menú móvil"
          >
            <div className="space-y-2">
              {NAV.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-lg font-bold text-stone-900 rounded-xl hover:bg-stone-50 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.sub && (
                    <div className="ml-4 border-l-2 border-stone-100 pl-4 space-y-1 mb-2">
                      {item.sub.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block py-2 text-stone-600 font-medium hover:text-stone-900"
                          onClick={() => setMobileOpen(false)}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/contacto"
                className="block w-full py-4 bg-stone-900 text-white text-center font-bold rounded-xl hover:bg-cyan-800 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Agendar Llamada
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
