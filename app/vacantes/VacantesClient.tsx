"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, MapPin, DollarSign, Building2, ArrowRight } from "lucide-react";
import type { Vacancy } from "@/lib/data";

interface Props {
  vacancies: Vacancy[];
}

export default function VacantesClient({ vacancies }: Props) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("Todos");

  const filtered = vacancies.filter((v) => {
    const matchSearch =
      v.title.toLowerCase().includes(search.toLowerCase()) ||
      v.company.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === "Todos" || v.type === typeFilter;
    return matchSearch && matchType;
  });

  return (
    <div>
      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Buscar puesto o empresa..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white border border-stone-200 rounded-xl text-stone-900 font-medium placeholder:text-stone-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
          />
        </div>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-4 py-3 bg-white border border-stone-200 rounded-xl text-stone-700 font-semibold text-sm focus:outline-none focus:border-cyan-500"
        >
          <option value="Todos">Todos</option>
          <option value="Presencial">Presencial</option>
          <option value="Remoto">Remoto</option>
          <option value="Híbrido">Híbrido</option>
        </select>
      </div>

      {/* Count */}
      <p className="text-sm font-bold text-stone-400 mb-6">
        {filtered.length} vacante{filtered.length !== 1 ? "s" : ""} encontrada{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 bg-stone-50 rounded-2xl">
          <p className="text-lg font-bold text-stone-900 mb-2">Sin resultados</p>
          <p className="text-stone-500">Intenta ajustar tus filtros de búsqueda.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((v) => (
            <Link
              key={v.id}
              href={`/vacantes/${v.slug}`}
              className="group block bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                  {v.area}
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                  v.type === "Remoto" ? "bg-emerald-50 text-emerald-700" :
                  v.type === "Híbrido" ? "bg-amber-50 text-amber-700" :
                  "bg-stone-100 text-stone-600"
                }`}>
                  {v.type}
                </span>
              </div>

              <h3 className="text-lg font-bold text-stone-900 mb-1 group-hover:text-cyan-700 transition-colors">
                {v.title}
              </h3>
              <p className="text-sm text-stone-500 flex items-center gap-1.5 mb-4">
                <Building2 size={14} /> {v.company}
              </p>

              <div className="flex items-center justify-between text-xs text-stone-400 font-medium">
                <span className="flex items-center gap-1">
                  <MapPin size={12} /> {v.location}
                </span>
                <span className="flex items-center gap-1">
                  <DollarSign size={12} /> {v.salary.split(" ")[0]}
                </span>
              </div>

              <div className="mt-4 pt-4 border-t border-stone-100">
                <span className="text-xs font-bold text-cyan-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ver detalle <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
