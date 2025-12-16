'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Search, MapPin, DollarSign, Clock, Building2, 
  Filter, X, Briefcase, Sparkles
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';

const vacancies = [
  { 
    id: 1,
    title: "Ejecutivo de Ventas", 
    company: "Empresa Retail Nacional", 
    location: "CDMX - Polanco", 
    salary: "$18,000 - $25,000 + comisiones",
    type: "Presencial",
    schedule: "Tiempo completo",
    area: "Ventas",
    posted: "Hace 2 días",
    description: "Buscamos ejecutivo de ventas con experiencia en retail para tienda de lujo. Excelentes comisiones.",
    requirements: ["2+ años en ventas", "Inglés intermedio", "Disponibilidad de horario"]
  },
  { 
    id: 2,
    title: "Desarrollador Full Stack", 
    company: "Startup Fintech", 
    location: "Remoto (México)", 
    salary: "$45,000 - $60,000",
    type: "Remoto",
    schedule: "Tiempo completo",
    area: "TI",
    posted: "Hace 1 día",
    description: "Únete a nuestro equipo de desarrollo. Stack: React, Node.js, PostgreSQL.",
    requirements: ["3+ años de experiencia", "React y Node.js", "Inglés avanzado"]
  },
  { 
    id: 3,
    title: "Coordinador de Logística", 
    company: "Empresa de Logística", 
    location: "Guadalajara, Jalisco", 
    salary: "$22,000 - $28,000",
    type: "Presencial",
    schedule: "Tiempo completo",
    area: "Logística",
    posted: "Hace 3 días",
    description: "Coordinar operaciones de almacén y distribución en zona metropolitana.",
    requirements: ["Experiencia en logística", "Manejo de personal", "Licencia de manejo"]
  },
  { 
    id: 4,
    title: "Analista de Marketing Digital", 
    company: "Agencia de Marketing", 
    location: "Híbrido - CDMX", 
    salary: "$20,000 - $28,000",
    type: "Híbrido",
    schedule: "Tiempo completo",
    area: "Marketing",
    posted: "Hace 1 día",
    description: "Gestión de campañas digitales, análisis de métricas y reportes.",
    requirements: ["Google Ads certificado", "Meta Ads", "Excel avanzado"]
  },
  { 
    id: 5,
    title: "Contador General", 
    company: "Empresa de Manufactura", 
    location: "Monterrey, NL", 
    salary: "$25,000 - $32,000",
    type: "Presencial",
    schedule: "Tiempo completo",
    area: "Finanzas",
    posted: "Hace 5 días",
    description: "Responsable de la contabilidad general y cumplimiento fiscal.",
    requirements: ["Título en Contaduría", "SAT y nóminas", "5+ años experiencia"]
  },
  { 
    id: 6,
    title: "Customer Success Manager", 
    company: "SaaS B2B", 
    location: "Remoto (México)", 
    salary: "$35,000 - $45,000",
    type: "Remoto",
    schedule: "Tiempo completo",
    area: "Servicio al Cliente",
    posted: "Hace 2 días",
    description: "Gestionar cartera de clientes enterprise y asegurar su éxito.",
    requirements: ["Inglés avanzado", "Experiencia en CS", "Habilidades analíticas"]
  },
  { 
    id: 7,
    title: "Gerente de Tienda", 
    company: "Cadena de Restaurantes", 
    location: "Querétaro", 
    salary: "$28,000 - $35,000",
    type: "Presencial",
    schedule: "Tiempo completo",
    area: "Operaciones",
    posted: "Hace 4 días",
    description: "Liderar operación de sucursal con 25+ empleados.",
    requirements: ["Experiencia en restaurantes", "Liderazgo", "Disponibilidad total"]
  },
  { 
    id: 8,
    title: "Diseñador UX/UI", 
    company: "Startup EdTech", 
    location: "Remoto (México)", 
    salary: "$30,000 - $40,000",
    type: "Remoto",
    schedule: "Tiempo completo",
    area: "TI",
    posted: "Hace 1 día",
    description: "Diseñar experiencias para plataforma educativa con millones de usuarios.",
    requirements: ["Figma experto", "Portafolio sólido", "Research skills"]
  },
];

const locations = ["Todas", "CDMX", "Guadalajara", "Monterrey", "Querétaro", "Remoto"];
const areas = ["Todas", "Ventas", "TI", "Logística", "Marketing", "Finanzas", "Operaciones", "Servicio al Cliente"];
const types = ["Todos", "Presencial", "Remoto", "Híbrido"];

export default function VacantesPage() {
  const [showHeader, setShowHeader] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Todas");
  const [selectedArea, setSelectedArea] = useState("Todas");
  const [selectedType, setSelectedType] = useState("Todos");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedVacancy, setSelectedVacancy] = useState<typeof vacancies[0] | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredVacancies = vacancies.filter(v => {
    const matchesSearch = v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         v.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = selectedLocation === "Todas" || v.location.includes(selectedLocation);
    const matchesArea = selectedArea === "Todas" || v.area === selectedArea;
    const matchesType = selectedType === "Todos" || v.type === selectedType;
    return matchesSearch && matchesLocation && matchesArea && matchesType;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedLocation("Todas");
    setSelectedArea("Todas");
    setSelectedType("Todos");
  };

  return (
    <>
      <GlobalStyles />
      <div className="min-h-screen bg-white text-slate-900">
        <Header showHeader={showHeader} />

        <main className="pt-28">
          <section className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white py-16">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="max-w-3xl">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 opacity-0 animate-fadeInUp">
                  Vacantes Disponibles
                </h1>
                <p className="text-xl text-indigo-100 mb-8 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                  {filteredVacancies.length} oportunidades esperándote. Encuentra tu próximo empleo.
                </p>

                <div className="relative opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="text"
                    placeholder="Buscar por puesto o empresa..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-white/30"
                  />
                  <button 
                    onClick={() => setShowFilters(!showFilters)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <Filter size={20} className="text-slate-600" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {showFilters && (
            <section className="bg-slate-50 border-b border-slate-200 py-6 opacity-0 animate-slideDown">
              <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-wrap gap-4 items-center">
                  <div>
                    <label className="text-sm font-medium text-slate-600 block mb-1">Ubicación</label>
                    <select 
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="py-2 px-4 border-2 border-slate-200 rounded-xl min-w-[150px] focus:border-indigo-500 focus:outline-none"
                    >
                      {locations.map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-600 block mb-1">Área</label>
                    <select 
                      value={selectedArea}
                      onChange={(e) => setSelectedArea(e.target.value)}
                      className="py-2 px-4 border-2 border-slate-200 rounded-xl min-w-[150px] focus:border-indigo-500 focus:outline-none"
                    >
                      {areas.map(area => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-600 block mb-1">Modalidad</label>
                    <select 
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="py-2 px-4 border-2 border-slate-200 rounded-xl min-w-[150px] focus:border-indigo-500 focus:outline-none"
                    >
                      {types.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <button 
                    onClick={clearFilters}
                    className="text-sm text-indigo-600 hover:underline mt-6"
                  >
                    Limpiar filtros
                  </button>
                </div>
              </div>
            </section>
          )}

          <section className="py-12 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  {filteredVacancies.length === 0 ? (
                    <div className="text-center py-16">
                      <Briefcase size={48} className="mx-auto text-slate-300 mb-4" />
                      <h3 className="text-xl font-bold mb-2">No encontramos vacantes</h3>
                      <p className="text-slate-600 mb-4">Intenta con otros filtros o búsqueda.</p>
                      <button onClick={clearFilters} className="px-6 py-3 bg-white border-2 border-slate-200 rounded-xl hover:border-indigo-600 transition-colors">
                        Limpiar filtros
                      </button>
                    </div>
                  ) : (
                    filteredVacancies.map((vacancy, idx) => (
                      <div 
                        key={vacancy.id}
                        onClick={() => setSelectedVacancy(vacancy)}
                        className={`p-6 bg-white border-2 rounded-2xl transition-all duration-300 cursor-pointer opacity-0 animate-fadeInUp hover:shadow-xl hover:-translate-y-1 ${selectedVacancy?.id === vacancy.id ? 'border-indigo-500 shadow-lg' : 'border-slate-100'}`}
                        style={{ animationDelay: `${idx * 0.05}s` }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-lg">{vacancy.title}</h3>
                            <p className="text-slate-600 text-sm flex items-center gap-1">
                              <Building2 size={14} />
                              {vacancy.company}
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${vacancy.type === 'Remoto' ? 'bg-green-100 text-green-700' : vacancy.type === 'Híbrido' ? 'bg-purple-100 text-purple-700' : 'bg-orange-100 text-orange-700'}`}>
                            {vacancy.type}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-3">
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {vacancy.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign size={14} />
                            {vacancy.salary}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {vacancy.posted}
                          </span>
                        </div>

                        <p className="text-slate-600 text-sm line-clamp-2">{vacancy.description}</p>
                      </div>
                    ))
                  )}
                </div>

                <div className="hidden lg:block">
                  <div className="sticky top-32">
                    {selectedVacancy ? (
                      <div className="p-6 bg-white/60 backdrop-blur-xl rounded-2xl border border-slate-100 shadow-xl opacity-0 animate-fadeIn">
                        <div className="mb-6">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${selectedVacancy.type === 'Remoto' ? 'bg-green-100 text-green-700' : selectedVacancy.type === 'Híbrido' ? 'bg-purple-100 text-purple-700' : 'bg-orange-100 text-orange-700'}`}>
                            {selectedVacancy.type}
                          </span>
                          <h2 className="text-2xl font-bold mb-2">{selectedVacancy.title}</h2>
                          <p className="text-slate-600 flex items-center gap-2">
                            <Building2 size={16} />
                            {selectedVacancy.company}
                          </p>
                        </div>

                        <div className="space-y-3 mb-6 pb-6 border-b border-slate-200">
                          <p className="flex items-center gap-2 text-sm">
                            <MapPin size={16} className="text-slate-400" />
                            {selectedVacancy.location}
                          </p>
                          <p className="flex items-center gap-2 text-sm">
                            <DollarSign size={16} className="text-slate-400" />
                            {selectedVacancy.salary}
                          </p>
                          <p className="flex items-center gap-2 text-sm">
                            <Clock size={16} className="text-slate-400" />
                            {selectedVacancy.schedule}
                          </p>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-bold mb-2">Descripción</h4>
                          <p className="text-slate-600 text-sm">{selectedVacancy.description}</p>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-bold mb-2">Requisitos</h4>
                          <ul className="space-y-2">
                            {selectedVacancy.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link href="/registro-talento" className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                          <Sparkles size={18} />
                          Postularme
                        </Link>
                      </div>
                    ) : (
                      <div className="p-8 text-center bg-white/60 backdrop-blur-xl rounded-2xl border border-slate-100 shadow-xl">
                        <Briefcase size={48} className="mx-auto text-slate-300 mb-4" />
                        <p className="text-slate-600">Selecciona una vacante para ver los detalles</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {selectedVacancy && (
            <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setSelectedVacancy(null)}>
              <div 
                className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[80vh] overflow-y-auto opacity-0 animate-slideUp"
                onClick={e => e.stopPropagation()}
              >
                <div className="p-6">
                  <button 
                    onClick={() => setSelectedVacancy(null)}
                    className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full"
                  >
                    <X size={20} />
                  </button>

                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${selectedVacancy.type === 'Remoto' ? 'bg-green-100 text-green-700' : selectedVacancy.type === 'Híbrido' ? 'bg-purple-100 text-purple-700' : 'bg-orange-100 text-orange-700'}`}>
                    {selectedVacancy.type}
                  </span>
                  <h2 className="text-2xl font-bold mb-2">{selectedVacancy.title}</h2>
                  <p className="text-slate-600 mb-4">{selectedVacancy.company}</p>

                  <div className="space-y-2 mb-6">
                    <p className="flex items-center gap-2 text-sm">
                      <MapPin size={16} className="text-slate-400" />
                      {selectedVacancy.location}
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                      <DollarSign size={16} className="text-slate-400" />
                      {selectedVacancy.salary}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Descripción</h4>
                    <p className="text-slate-600 text-sm">{selectedVacancy.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Requisitos</h4>
                    <ul className="space-y-2">
                      {selectedVacancy.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/registro-talento" className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg">
                    <Sparkles size={18} />
                    Postularme
                  </Link>
                </div>
              </div>
            </div>
          )}

          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-6 max-w-4xl text-center">
              <h2 className="text-3xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
              <p className="text-slate-600 mb-8">
                Regístrate y te avisamos cuando publiquemos vacantes que hagan match con tu perfil.
              </p>
              <Link href="/registro-talento" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Sparkles size={20} />
                Registrarme
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.4s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}