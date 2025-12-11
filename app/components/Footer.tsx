'use client';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 text-slate-900 pt-24 pb-12">
      <div className="container mx-auto px-6 text-center">
        <div className="text-3xl font-black tracking-widest mb-8">HUMANIS</div>
        <p className="text-slate-500 mb-10">Redefiniendo el estándar.</p>
        <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Humanis S.A. de C.V.
        </div>
      </div>
    </footer>
  );
}