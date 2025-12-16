'use client';
import React from 'react';

export default function GlobalStyles() {
  return (
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

      /* SOLO VARIABLES Y ANIMACIONES - NADA DE LAYOUT */
      
      :root {
        --primary: #4f46e5;
        --primary-dark: #4338ca;
        --secondary: #7c3aed;
        --accent: #06b6d4;
      }

      body {
        font-family: 'Inter', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* ANIMACIONES SOLAMENTE */
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes fadeInDown {
        from { opacity: 0; transform: translateY(-30px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes fadeInLeft {
        from { opacity: 0; transform: translateX(-30px); }
        to { opacity: 1; transform: translateX(0); }
      }

      @keyframes fadeInRight {
        from { opacity: 0; transform: translateX(30px); }
        to { opacity: 1; transform: translateX(0); }
      }

      @keyframes slideDown {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }

      .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
      .animate-fadeInUp { animation: fadeInUp 0.8s ease-out; }
      .animate-fadeInDown { animation: fadeInDown 0.8s ease-out; }
      .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out; }
      .animate-fadeInRight { animation: fadeInRight 0.8s ease-out; }
      .animate-slideDown { animation: slideDown 0.4s ease-out; }
      .animate-float { animation: float 3s ease-in-out infinite; }

      /* GRADIENTE DE TEXTO */
      .gradient-text {
        background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #06b6d4 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    `}</style>
  );
}