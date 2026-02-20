"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

const SERVICE_OPTIONS = [
  "Reclutamiento y Selección",
  "Servicios Especializados",
  "Gestión de Nómina",
  "Consultoría Laboral",
  "Otro",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    privacy: false,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const update = (field: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const canSubmit =
    form.name.trim() &&
    form.email.trim() &&
    form.phone.trim() &&
    form.privacy &&
    status !== "sending";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("sending");

    try {
      await addDoc(collection(db, "leads"), {
        ...form,
        createdAt: serverTimestamp(),
        source: "website-contact",
      });
      setStatus("success");
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        privacy: false,
      });
    } catch (err) {
      console.error("Firebase error:", err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={32} className="text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-stone-900 mb-3">Solicitud recibida</h3>
        <p className="text-stone-500 max-w-md mx-auto">
          Nuestro equipo revisará tu solicitud y se pondrá en contacto contigo en horario
          laboral. Tiempos estimados según disponibilidad.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1.5">
            Nombre *
          </label>
          <input
            id="cf-name"
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 font-medium placeholder:text-stone-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition-colors"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="cf-company" className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1.5">
            Empresa
          </label>
          <input
            id="cf-company"
            type="text"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 font-medium placeholder:text-stone-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition-colors"
            placeholder="Organización"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-email" className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1.5">
          Correo electrónico *
        </label>
        <input
          id="cf-email"
          type="email"
          required
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 font-medium placeholder:text-stone-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition-colors"
          placeholder="nombre@empresa.com"
        />
      </div>

      <div>
        <label htmlFor="cf-phone" className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1.5">
          Teléfono / WhatsApp *
        </label>
        <input
          id="cf-phone"
          type="tel"
          required
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 font-medium placeholder:text-stone-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition-colors"
          placeholder="+52 55..."
        />
      </div>

      <div>
        <label htmlFor="cf-service" className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1.5">
          Servicio de interés
        </label>
        <select
          id="cf-service"
          value={form.service}
          onChange={(e) => update("service", e.target.value)}
          className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 font-medium focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition-colors"
        >
          <option value="">Selecciona un servicio</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1.5">
          Mensaje <span className="text-stone-400 normal-case tracking-normal font-normal">(Opcional)</span>
        </label>
        <textarea
          id="cf-message"
          rows={3}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 font-medium placeholder:text-stone-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition-colors resize-none"
          placeholder="Detalles adicionales..."
        />
      </div>

      {/* Privacy checkbox */}
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          checked={form.privacy}
          onChange={(e) => update("privacy", e.target.checked)}
          className="mt-1 w-4 h-4 rounded border-stone-300 text-cyan-600 focus:ring-cyan-500"
        />
        <span className="text-xs text-stone-500 leading-relaxed">
          He leído y acepto el{" "}
          <Link href="/legal" className="text-stone-800 font-bold underline underline-offset-2">
            Aviso de Privacidad
          </Link>{" "}
          de Humanis.
        </span>
      </label>

      {status === "error" && (
        <p className="text-sm text-red-600 font-medium">
          Ocurrió un error al enviar tu solicitud. Intenta de nuevo o contáctanos por WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={!canSubmit}
        className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-600 ${
          canSubmit
            ? "bg-stone-900 text-white hover:bg-cyan-800 active:scale-[0.98]"
            : "bg-stone-200 text-stone-400 cursor-not-allowed"
        }`}
      >
        {status === "sending" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={18} />
            Enviar Solicitud
          </>
        )}
      </button>

      <p className="text-xs text-stone-400 text-center">
        Sin compromiso. Tu información se maneja conforme a nuestro Aviso de Privacidad.
      </p>
    </form>
  );
}
