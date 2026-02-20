"use client";

import React, { useState } from "react";
import { Shield, FileText, Cookie } from "lucide-react";

const tabs = [
  { id: "privacy", label: "Aviso de Privacidad", icon: Shield },
  { id: "terms", label: "Términos", icon: FileText },
  { id: "cookies", label: "Cookies", icon: Cookie },
];

export default function LegalTabs() {
  const [active, setActive] = useState("privacy");

  return (
    <div className="flex border-b border-stone-200 p-1.5 gap-1 overflow-x-auto bg-stone-50">
      {tabs.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => {
            setActive(id);
            // Scroll to relevant section
            const el = document.getElementById(`legal-${id}`);
            el?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className={`flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm whitespace-nowrap transition-colors ${
            active === id
              ? "bg-white text-stone-900 shadow-sm"
              : "text-stone-500 hover:text-stone-700"
          }`}
        >
          <Icon size={16} />
          {label}
        </button>
      ))}
    </div>
  );
}
