"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQProps {
  items: readonly { q: string; a: string }[];
}

export default function FAQAccordion({ items }: FAQProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="space-y-3" role="list">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        const id = `faq-${idx}`;

        return (
          <div
            key={idx}
            role="listitem"
            className={`border rounded-2xl transition-colors duration-200 ${
              isOpen
                ? "border-cyan-200 bg-white shadow-sm"
                : "border-stone-200 bg-white hover:border-stone-300"
            }`}
          >
            <button
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
              aria-controls={`${id}-answer`}
              id={`${id}-question`}
            >
              <span
                className={`text-base sm:text-lg font-bold leading-snug transition-colors ${
                  isOpen ? "text-stone-900" : "text-stone-700"
                }`}
              >
                {item.q}
              </span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-stone-400 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-cyan-600" : ""
                }`}
              />
            </button>

            <div
              id={`${id}-answer`}
              role="region"
              aria-labelledby={`${id}-question`}
              className={`overflow-hidden transition-all duration-200 ${
                isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6 pt-0">
                <div className="w-12 h-0.5 bg-cyan-500 rounded-full mb-4" />
                <p className="text-stone-600 leading-relaxed whitespace-pre-line">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
