import Link from "next/link";
import { Home, Search } from "lucide-react";
import { Button } from "./components/ui";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 px-6">
      <div className="text-center max-w-md">
        <p className="text-8xl font-extrabold text-stone-200 mb-4">404</p>
        <h1 className="text-3xl font-extrabold text-stone-900 mb-4 tracking-tight">
          Página no encontrada
        </h1>
        <p className="text-stone-500 mb-8">
          El enlace que buscas no existe o ha sido movido. Regresemos a terreno seguro.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/">
            <Home size={16} /> Ir al Inicio
          </Button>
          <Button href="/vacantes" variant="outline">
            <Search size={16} /> Ver Vacantes
          </Button>
        </div>
      </div>
    </div>
  );
}
