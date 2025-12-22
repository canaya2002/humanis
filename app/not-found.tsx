'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex items-center justify-center relative overflow-hidden selection:bg-cyan-100">
      
      {/* Fondo Animado Sutil */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full blur-[100px] opacity-20" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-9xl font-black text-slate-900 tracking-tighter mb-4 opacity-10 select-none">
                404
            </h1>
        </motion.div>
        
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Ruta no encontrada
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-md mx-auto leading-relaxed">
                Parece que este enlace se ha perdido en el proceso. Regresemos a terreno seguro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                    <Home size={20} />
                    Ir al Inicio
                </Link>
                <Link href="/vacantes" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 font-bold py-4 px-8 rounded-full hover:bg-slate-50 transition-all">
                    Ver Vacantes <ArrowRight size={20} />
                </Link>
            </div>
        </motion.div>
      </div>
    </div>
  );
}