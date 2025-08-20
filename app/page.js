'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      parallaxElements.forEach(el => {
        const speed = el.dataset.parallax;
        const yPos = -(window.scrollY * speed);
        el.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };

    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100
        });
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.05, rootMargin: '-50px' }
    );

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

    const statTimer = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % 4);
    }, 4000);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      clearInterval(statTimer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      title: 'Executive Search',
      subtitle: 'Búsqueda de Ejecutivos',
      description: 'Identificamos líderes transformacionales capaces de impulsar el crecimiento estratégico de su organización con metodología comprobada.',
      features: [
        'Evaluación psicométrica avanzada',
        'Verificación exhaustiva de referencias',
        'Assessment 360 grados',
        'Due diligence profesional'
      ],
      image: '/images/executive-search.jpg',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Talent Mapping',
      subtitle: 'Inteligencia de Mercado',
      description: 'Análisis profundo del panorama de talento en su industria para decisiones informadas de contratación y desarrollo organizacional.',
      features: [
        'Mapeo competitivo del sector',
        'Análisis salarial benchmark',
        'Identificación de talento pasivo',
        'Reportes de mercado detallados'
      ],
      image: '/images/talent-mapping.jpg',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Organizational Development',
      subtitle: 'Desarrollo Organizacional',
      description: 'Transformamos culturas corporativas y optimizamos estructuras para máximo rendimiento y retención de talento.',
      features: [
        'Diagnóstico cultural profundo',
        'Diseño de estructuras ágiles',
        'Programas de liderazgo',
        'Change management'
      ],
      image: '/images/organizational-dev.jpg',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const stats = [
    { value: '300', suffix: '+', label: 'Ejecutivos Colocados', trend: '+23%' },
    { value: '98', suffix: '%', label: 'Tasa de Retención', trend: 'Industry Leading' },
    { value: '9', suffix: '', label: 'Días Promedio', trend: '72% más rápido' },
    { value: '50', suffix: '+', label: 'Empresas Clientes' }
  ];

  const clients = [
    '/images/cliente1.png',
    '/images/cliente2.png',
    '/images/cliente3.png',
    '/images/cliente4.png',
    '/images/cliente5.png',
    '/images/cliente6.png',
    '/images/cliente7.png',
    '/images/cliente8.png'
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'Análisis profundo de necesidades, cultura organizacional y definición del perfil ideal.',
      duration: '2-3 días',
      image: '/images/process-discovery.jpg'
    },
    {
      step: '02',
      title: 'Market Intelligence',
      description: 'Mapeo exhaustivo del mercado y activación de red exclusiva de contactos.',
      duration: '2-4 días',
      image: '/images/process-intelligence.jpg'
    },
    {
      step: '03',
      title: 'Assessment & Selection',
      description: 'Evaluación integral con metodología propietaria de 7 dimensiones.',
      duration: '3-5 días',
      image: '/images/process-assessment.jpg'
    },
    {
      step: '04',
      title: 'Integration & Success',
      description: 'Acompañamiento durante 90 días para garantizar integración exitosa.',
      duration: '3 meses',
      image: '/images/process-integration.jpg'
    }
  ];

  const achievements = [
    {
      title: 'Red Exclusiva de Talento',
      description: 'Más de 1,000 profesionales verificados en toda la República Mexicana.',
      image: '/images/achievement-network.jpg'
    },
    {
      title: 'Metodología Comprobada',
      description: 'Sistema propietario de 7 filtros que garantiza la calidad de cada candidato.',
      image: '/images/achievement-methodology.jpg'
    },
    {
      title: 'Garantía de Satisfacción',
      description: 'Reemplazo sin costo durante los primeros 60 días de contratación.',
      image: '/images/achievement-guarantee.jpg'
    }
  ];

  // Structured Data para SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Humanis México",
    "url": "https://humanis.com.mx",
    "logo": "https://humanis.com.mx/images/logohumanis.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+52-55-4416-7974",
      "contactType": "sales",
      "areaServed": "MX",
      "availableLanguage": "Spanish"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MX"
    },
    "description": "Firma líder en executive search México. Especialistas en headhunting C-Level con 98% retención y 9 días promedio de colocación.",
    "foundingDate": "2013",
    "numberOfEmployees": "10-50",
    "industry": "Executive Search",
    "serviceArea": {
      "@type": "Country",
      "name": "Mexico"
    },
    "service": [
      {
        "@type": "Service",
        "name": "Executive Search",
        "description": "Búsqueda especializada de ejecutivos nivel C-Level"
      },
      {
        "@type": "Service", 
        "name": "Talent Mapping",
        "description": "Inteligencia de mercado y mapeo de talento"
      },
      {
        "@type": "Service",
        "name": "Organizational Development", 
        "description": "Desarrollo organizacional y consultoría de talento"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Humanis México | Executive Search y Headhunting Líder</title>
        <meta name="description" content="Firma #1 executive search México. Especialistas headhunting C-Level con 98% retención, 9 días promedio. 300+ ejecutivos colocados. Consulta gratuita." />
        <meta name="keywords" content="executive search méxico, headhunting, reclutamiento ejecutivo, búsqueda de talento, consultores c-level" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://humanis.com.mx/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Humanis México | Executive Search y Headhunting Líder" />
        <meta property="og:description" content="Firma #1 executive search México. Especialistas headhunting C-Level con 98% retención, 9 días promedio. 300+ ejecutivos colocados." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://humanis.com.mx/" />
        <meta property="og:image" content="https://humanis.com.mx/images/og-image.jpg" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:site_name" content="Humanis México" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Humanis México | Executive Search y Headhunting Líder" />
        <meta name="twitter:description" content="Firma #1 executive search México. Especialistas headhunting C-Level con 98% retención, 9 días promedio." />
        <meta name="twitter:image" content="https://humanis.com.mx/images/og-image.jpg" />
        
        {/* Technical SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Spanish" />
        <meta name="geo.region" content="MX" />
        <meta name="geo.country" content="Mexico" />
        <meta name="ICBM" content="19.4326, -99.1332" />
        
        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          background: #ffffff;
          overflow-x: hidden;
        }

        ::selection {
          background: rgba(59, 130, 246, 0.15);
          color: #1e40af;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f8f9fa;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #3b82f6, #1e40af);
          border-radius: 5px;
        }

        /* Layout Classes */
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }
        }

        /* Loading Animation */
        .loader {
          position: fixed;
          inset: 0;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .loader.hidden {
          opacity: 0;
          visibility: hidden;
          transform: scale(0.95);
        }

        .loader-content {
          text-align: center;
        }

        .loader-logo {
          width: 240px;
          height: 96px;
          margin-bottom: 2rem;
          opacity: 0;
          animation: logoFadeIn 0.6s ease forwards;
        }

        .loader-dots {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
        }

        .loader-dot {
          width: 10px;
          height: 10px;
          background: #3b82f6;
          border-radius: 50%;
          animation: dotPulse 1.4s ease-in-out infinite;
        }

        .loader-dot:nth-child(2) { animation-delay: 0.2s; }
        .loader-dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes logoFadeIn {
          to { opacity: 1; }
        }

        @keyframes dotPulse {
          0%, 80%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          40% {
            transform: scale(1.3);
            opacity: 0.7;
          }
        }

        /* Navigation Styles */
        .nav-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-header.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
        }

        .nav-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 0;
        }

        @media (max-width: 768px) {
          .nav-wrapper {
            padding: 0.5rem 0;
          }
        }

        .logo-container {
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: transform 0.3s ease;
        }

        .logo-container:hover {
          transform: scale(1.05);
        }

        .logo-image {
          height: 80px;
          width: auto;
        }

        @media (max-width: 768px) {
          .logo-image {
            height: 60px;
          }
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: #6b7280;
          text-decoration: none;
          position: relative;
          padding: 0.5rem 0;
          transition: color 0.2s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2px;
          background: #3b82f6;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-50%);
        }

        .nav-link:hover {
          color: #1a1a1a;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-cta {
          display: flex;
          gap: 1rem;
        }

        /* Button Styles */
        .btn {
          padding: 0.75rem 1.75rem;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          gap: 0.625rem;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          border: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          box-shadow: 0 4px 14px rgba(59, 130, 246, 0.35);
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.45);
        }

        .btn-secondary {
          border: 2px solid #e5e7eb;
          color: #6b7280;
          background: white;
        }

        .btn-secondary:hover {
          border-color: #3b82f6;
          color: #3b82f6;
          background: #f0f9ff;
        }

        .btn-white {
          background: white;
          color: #1e40af;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        .btn-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
        }

        .btn-outline-white {
          border: 2px solid white;
          color: white;
          background: transparent;
        }

        .btn-outline-white:hover {
          background: white;
          color: #1e40af;
        }

        /* Mobile Menu */
        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 8px;
          cursor: pointer;
          background: none;
          border: none;
        }

        .mobile-menu-btn span {
          width: 26px;
          height: 2px;
          background: #6b7280;
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        .mobile-menu-btn.active span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .mobile-menu-btn.active span:nth-child(2) {
          opacity: 0;
          transform: translateX(-10px);
        }

        .mobile-menu-btn.active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        @media (max-width: 1024px) {
          .nav-menu, .nav-cta {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }
        }

        .mobile-menu {
          position: fixed;
          top: 92px;
          left: 0;
          right: 0;
          background: white;
          padding: 2rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transform: translateY(-120%);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @media (max-width: 768px) {
          .mobile-menu {
            top: 76px;
            padding: 1.5rem;
          }
        }

        .mobile-menu.active {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #3b82f6 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 7rem 0 4rem;
        }

        @media (max-width: 768px) {
          .hero {
            padding: 5rem 0 3rem;
            min-height: 90vh;
          }
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.2) 0%, transparent 50%),
                      radial-gradient(circle at 40% 20%, rgba(34, 211, 238, 0.2) 0%, transparent 50%);
          animation: floatAnimation 20s ease-in-out infinite;
        }

        @keyframes floatAnimation {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(1deg); }
          66% { transform: translate(-20px, 20px) rotate(-1deg); }
        }

        .hero-pattern {
          position: absolute;
          top: 0;
          right: -10%;
          width: 60%;
          height: 100%;
          opacity: 0.1;
          background-image: 
            linear-gradient(60deg, #3b82f6 12%, transparent 12.5%, transparent 87%, #3b82f6 87.5%, #3b82f6),
            linear-gradient(120deg, #3b82f6 12%, transparent 12.5%, transparent 87%, #3b82f6 87.5%, #3b82f6);
          background-size: 60px 100px;
          background-position: 0 0, 30px 50px;
          animation: waveAnimation 15s linear infinite;
        }

        @keyframes waveAnimation {
          0% { transform: translateX(0); }
          100% { transform: translateX(60px); }
        }

        .hero-glow {
          position: absolute;
          top: 10%;
          left: -20%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 60%);
          filter: blur(100px);
          animation: pulseGlow 8s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes pulseGlow {
          0%, 100% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.2) translateY(-50px); }
        }

        .hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 200px;
          background: linear-gradient(to top, rgba(255, 255, 255, 0.05) 0%, transparent 100%);
          pointer-events: none;
        }

        .hero-lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          opacity: 0.1;
        }

        .hero-line {
          position: absolute;
          width: 2px;
          height: 100%;
          background: linear-gradient(to bottom, transparent 0%, rgba(147, 197, 253, 0.8) 50%, transparent 100%);
          animation: lineMove 15s linear infinite;
          box-shadow: 0 0 20px rgba(147, 197, 253, 0.5);
        }

        @keyframes lineMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(100vw); }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          50% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0.8;
          }
        }

        .hero-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .hero-wrapper {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .hero-content {
          position: relative;
          z-index: 10;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.625rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 0.625rem 1.5rem;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .hero-badge {
            padding: 0.5rem 1rem;
            margin-bottom: 1.5rem;
          }
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s infinite;
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
        }

        @keyframes pulse {
          0%, 100% { 
            opacity: 1;
            transform: scale(1);
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
          }
          50% { 
            opacity: 0.8;
            transform: scale(1.5);
            box-shadow: 0 0 30px rgba(16, 185, 129, 0.8);
          }
        }

        .badge-text {
          color: white;
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .badge-text {
            font-size: 0.75rem;
          }
        }

        .hero-title {
          font-size: clamp(2rem, 5vw, 4.5rem);
          font-weight: 900;
          color: white;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .hero-gradient-text {
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #fbbf24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 8s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0%, 100% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(30deg); }
        }

        .hero-description {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          max-width: 600px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .hero-description {
            font-size: 1rem;
            margin-bottom: 2rem;
          }
        }

        .hero-buttons {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .hero-buttons {
            flex-direction: column;
            gap: 1rem;
          }

          .hero-buttons .btn {
            justify-content: center;
            padding: 1rem 2rem;
          }
        }

        /* Stats Section */
        .hero-stats-container {
          position: relative;
          z-index: 10;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          padding: 2.5rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3),
                      inset 0 1px 0 rgba(255, 255, 255, 0.2);
          position: relative;
        }

        @media (max-width: 768px) {
          .hero-stats {
            grid-template-columns: 1fr;
            padding: 2rem;
            gap: 1.5rem;
          }
        }

        .hero-stats::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 24px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.5));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .stat-card {
          text-align: center;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: default;
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .stat-card {
            padding: 1.25rem;
          }
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: rotate(45deg);
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          50%, 100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .stat-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.3);
          border-color: rgba(59, 130, 246, 0.5);
          background: rgba(255, 255, 255, 0.1);
        }

        .stat-value {
          font-size: 3rem;
          font-weight: 900;
          color: white;
          margin-bottom: 0.5rem;
          font-variant-numeric: tabular-nums;
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.25rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .stat-value {
            font-size: 2.25rem;
          }
        }

        .stat-suffix {
          font-size: 2.25rem;
          background: linear-gradient(135deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @media (max-width: 768px) {
          .stat-suffix {
            font-size: 1.75rem;
          }
        }

        .stat-label {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.75rem;
        }

        @media (max-width: 768px) {
          .stat-label {
            font-size: 0.85rem;
          }
        }

        .stat-trend {
          display: inline-block;
          padding: 0.375rem 0.875rem;
          background: rgba(16, 185, 129, 0.2);
          color: #10b981;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          border: 1px solid rgba(16, 185, 129, 0.3);
          backdrop-filter: blur(10px);
        }

        @media (max-width: 768px) {
          .stat-trend {
            font-size: 0.75rem;
            padding: 0.25rem 0.75rem;
          }
        }

        /* Clients Section */
        .clients-section {
          padding: 6rem 0;
          background: white;
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .clients-section {
            padding: 4rem 0;
          }
        }

        .clients-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        @media (max-width: 768px) {
          .clients-header {
            margin-bottom: 3rem;
          }
        }

        .section-badge {
          display: inline-block;
          padding: 0.625rem 1.5rem;
          background: linear-gradient(135deg, #dbeafe, #bfdbfe);
          color: #1e40af;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.875rem;
          letter-spacing: 0.5px;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          border: 1px solid #93c5fd;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.1);
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          color: #1a1a1a;
          margin-bottom: 1.25rem;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: #6b7280;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .section-subtitle {
            font-size: 1rem;
          }
        }

        .clients-carousel {
          position: relative;
          margin: 0 -2rem;
          padding: 2rem 0;
          mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
        }

        .clients-track {
          display: flex;
          gap: 3rem;
          animation: scroll 20s linear infinite;
          align-items: center;
        }

        @media (max-width: 768px) {
          .clients-track {
            gap: 2rem;
            animation: scroll 15s linear infinite;
          }
        }

        .clients-carousel:hover .clients-track {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .client-logo {
          width: 280px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          filter: grayscale(30%);
          opacity: 0.8;
          transition: all 0.3s ease;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        @media (max-width: 768px) {
          .client-logo {
            width: 220px;
            height: 80px;
            padding: 1rem;
          }
        }

        .client-logo:hover {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .client-logo img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        /* Services Section */
        .services-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 4rem 0;
          }
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        @media (max-width: 768px) {
          .section-header {
            margin-bottom: 3rem;
          }
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            margin-top: 3rem;
            gap: 2rem;
          }
        }

        .service-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.06);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          cursor: pointer;
          border: 1px solid #f1f5f9;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--card-gradient);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.12);
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-image {
          width: 100%;
          height: 200px;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
        }

        .service-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 100%);
        }

        .service-content {
          padding: 2.5rem;
        }

        @media (max-width: 768px) {
          .service-content {
            padding: 2rem;
          }
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
        }

        .service-subtitle {
          color: #6b7280;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .service-description {
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .service-features {
          list-style: none;
        }

        .service-feature {
          display: flex;
          align-items: flex-start;
          gap: 0.875rem;
          margin-bottom: 1rem;
        }

        .feature-icon {
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #10b981, #059669);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .feature-icon svg {
          width: 12px;
          height: 12px;
          stroke: white;
          stroke-width: 3;
        }

        /* Process Section */
        .process-section {
          padding: 6rem 0;
          background: white;
        }

        @media (max-width: 768px) {
          .process-section {
            padding: 4rem 0;
          }
        }

        .process-timeline {
          position: relative;
          margin-top: 4rem;
        }

        @media (max-width: 768px) {
          .process-timeline {
            margin-top: 3rem;
          }
        }

        .process-line {
          position: absolute;
          top: 120px;
          left: 10%;
          right: 10%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #3b82f6, #3b82f6, transparent);
          opacity: 0.3;
          z-index: 0;
        }

        @media (max-width: 768px) {
          .process-line {
            display: none;
          }
        }

        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
          position: relative;
        }

        @media (max-width: 768px) {
          .process-steps {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .process-step {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .process-image {
          width: 180px;
          height: 180px;
          margin: 0 auto 1.5rem;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          border: 4px solid #e5e7eb;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
        }

        @media (max-width: 768px) {
          .process-image {
            width: 150px;
            height: 150px;
          }
        }

        .process-step:hover .process-image {
          transform: scale(1.05);
          border-color: #3b82f6;
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.2);
        }

        .step-number {
          position: absolute;
          top: -10px;
          right: 20px;
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #3b82f6, #1e40af);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 1.125rem;
          color: white;
          z-index: 1;
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
        }

        @media (max-width: 768px) {
          .step-number {
            width: 40px;
            height: 40px;
            font-size: 1rem;
            right: 15px;
          }
        }

        .step-title {
          font-size: 1.375rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.875rem;
        }

        @media (max-width: 768px) {
          .step-title {
            font-size: 1.25rem;
          }
        }

        .step-description {
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 1rem;
          padding: 0 1rem;
        }

        @media (max-width: 768px) {
          .step-description {
            padding: 0;
          }
        }

        .step-duration {
          display: inline-block;
          padding: 0.375rem 1rem;
          background: linear-gradient(135deg, #f0f9ff, #dbeafe);
          color: #3b82f6;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        /* About Section */
        .about-section {
          background: white;
          padding: 6rem 0;
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 4rem 0;
          }
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-top: 4rem;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .about-content {
          padding: 2rem;
        }

        @media (max-width: 768px) {
          .about-content {
            padding: 0;
          }
        }

        .about-content h3 {
          font-size: 2.25rem;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
          .about-content h3 {
            font-size: 1.875rem;
          }
        }

        .about-content > p {
          color: #6b7280;
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .about-content > p {
            font-size: 1rem;
          }
        }

        .about-image {
          position: relative;
          height: 500px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.12);
        }

        @media (max-width: 768px) {
          .about-image {
            height: 300px;
          }
        }

        .about-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 2rem;
        }

        @media (max-width: 768px) {
          .about-features {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        .about-feature {
          display: flex;
          align-items: start;
          gap: 1rem;
        }

        .about-icon {
          width: 52px;
          height: 52px;
          background: linear-gradient(135deg, #3b82f6, #1e40af);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .about-icon {
            width: 44px;
            height: 44px;
          }
        }

        .about-feature-text h4 {
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.25rem;
        }

        .about-feature-text p {
          color: #6b7280;
          font-size: 0.875rem;
        }

        /* Achievements Section */
        .achievements-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        }

        @media (max-width: 768px) {
          .achievements-section {
            padding: 4rem 0;
          }
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 3rem;
          margin-top: 4rem;
        }

        @media (max-width: 768px) {
          .achievements-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            margin-top: 3rem;
          }
        }

        .achievement-card {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .achievement-card:hover {
          transform: translateY(-10px);
        }

        .achievement-image {
          width: 100%;
          height: 280px;
          position: relative;
          background: linear-gradient(135deg, #1e40af, #3b82f6);
        }

        @media (max-width: 768px) {
          .achievement-image {
            height: 240px;
          }
        }

        .achievement-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 100%);
        }

        @media (max-width: 768px) {
          .achievement-overlay {
            padding: 1.5rem;
          }
        }

        .achievement-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.625rem;
        }

        @media (max-width: 768px) {
          .achievement-title {
            font-size: 1.25rem;
          }
        }

        .achievement-description {
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }

        /* CTA Section */
        .cta-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .cta-section {
            padding: 4rem 0;
          }
        }

        .cta-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .cta-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 1024px) {
          .cta-wrapper {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }
        }

        .cta-content {
          color: white;
        }

        .cta-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 900;
          margin-bottom: 1.5rem;
        }

        .cta-description {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 3rem;
          line-height: 1.8;
        }

        @media (max-width: 768px) {
          .cta-description {
            font-size: 1rem;
            margin-bottom: 2rem;
          }
        }

        .cta-buttons {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .cta-buttons {
            flex-direction: column;
            gap: 1rem;
          }

          .cta-buttons .btn {
            justify-content: center;
          }
        }

        .cta-image {
          position: relative;
          height: 400px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 1024px) {
          .cta-image {
            height: 300px;
          }
        }

        @media (max-width: 768px) {
          .cta-image {
            height: 250px;
          }
        }

        /* Footer */
        .footer {
          background: #ffffff;
          color: #1a1a1a;
          padding: 4rem 0 2rem;
          border-top: 1px solid #e5e7eb;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 3rem 0 2rem;
          }
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .footer-brand {
          max-width: 350px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .footer-logo-image {
          height: 80px;
          width: auto;
        }

        @media (max-width: 768px) {
          .footer-logo-image {
            height: 60px;
          }
        }

        .footer-description {
          color: #6b7280;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .footer-social {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          width: 44px;
          height: 44px;
          background: #f8fafc;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: #64748b;
          border: 1px solid #e2e8f0;
        }

        .social-link:hover {
          background: #3b82f6;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
          border-color: #3b82f6;
        }

        .footer-column h4 {
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #1a1a1a;
        }

        .footer-links {
          list-style: none;
        }

        .footer-link {
          color: #6b7280;
          text-decoration: none;
          display: block;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #3b82f6;
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }
        }

        .footer-copyright {
          color: #6b7280;
        }

        .footer-legal {
          display: flex;
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .footer-legal {
            gap: 1rem;
          }
        }

        /* Animation Classes */
        [data-animate] {
          opacity: 0;
          transform: translateY(30px);
        }

        .in-view {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Focus States */
        a:focus-visible,
        button:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        /* Performance Optimizations */
        .hero-glow,
        .hero-pattern,
        .hero::before {
          will-change: transform;
        }

        .stat-card,
        .service-card,
        .achievement-card {
          will-change: transform;
        }

        /* Reduce Motion */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div className={`loader ${!isLoading ? 'hidden' : ''}`}>
        <div className="loader-content">
          <Image 
            src="/images/logohumanis.png"
            alt="Humanis México - Executive Search"
            width={240}
            height={96}
            className="loader-logo"
            priority
          />
          <div className="loader-dots">
            <div className="loader-dot"></div>
            <div className="loader-dot"></div>
            <div className="loader-dot"></div>
          </div>
        </div>
      </div>

      <header className={`nav-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-wrapper">
            <Link href="/" className="logo-container">
              <Image 
                src="/images/logohumanis.png"
                alt="Humanis México - Executive Search y Headhunting"
                width={240}
                height={80}
                className="logo-image"
                priority
              />
            </Link>

            <nav className="nav-menu">
              <a href="#inicio" className="nav-link">Inicio</a>
              <a href="#servicios" className="nav-link">Servicios</a>
              <a href="#proceso" className="nav-link">Proceso</a>
              <a href="#nosotros" className="nav-link">Nosotros</a>
              <a href="#clientes" className="nav-link">Clientes</a>
            </nav>

            <div className="nav-cta">
              <Link href="/nosotros" className="btn btn-secondary">
                ¿Por qué Humanis?
              </Link>
              <Link href="/consulta" className="btn btn-primary">
                Contactar
              </Link>
            </div>

            <button 
              className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú de navegación"
              type="button"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <nav className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`} role="navigation" aria-label="Menú móvil">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a href="#inicio" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Inicio</a>
            <a href="#servicios" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
            <a href="#proceso" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Proceso</a>
            <a href="#nosotros" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Nosotros</a>
            <a href="#clientes" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Clientes</a>
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Link href="/nosotros" className="btn btn-secondary">¿Por qué Humanis?</Link>
              <Link href="/consulta" className="btn btn-primary">Contactar</Link>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero" role="banner">
          <div className="hero-pattern" data-parallax="0.1"></div>
          <div className="hero-glow" style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}></div>
          
          <div className="hero-lines" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <div
                key={`line-${i}`}
                className="hero-line"
                style={{
                  left: `${i * 25}%`,
                  animationDelay: `${i * 2}s`,
                  animationDuration: `${10 + i * 2}s`
                }}
              />
            ))}
          </div>
          
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            overflow: 'hidden'
          }} aria-hidden="true">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  background: 'rgba(255, 255, 255, 0.5)',
                  borderRadius: '50%',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 10 + 10}s ${Math.random() * 5}s infinite ease-in-out`,
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
                }}
              />
            ))}
          </div>
          
          <div className="container">
            <div className="hero-wrapper">
              <div className="hero-content" data-animate id="hero-content">
                <div className="hero-badge">
                  <span className="badge-dot"></span>
                  <span className="badge-text">Executive Search Premium</span>
                </div>

                <h1 className="hero-title">
                  Conectamos <span className="hero-gradient-text">Líderes Excepcionales</span><br />
                  con Empresas Extraordinarias
                </h1>

                <p className="hero-description">
                  Somos Humanis, la firma líder de executive search en México, especializados en identificar 
                  y atraer el talento ejecutivo que transformará su organización.
                </p>

                <div className="hero-buttons">
                  <Link href="/consulta" className="btn btn-primary" style={{
                    background: 'white',
                    color: '#1e40af',
                    boxShadow: '0 10px 40px rgba(255, 255, 255, 0.2)'
                  }}>
                    Iniciar Consulta
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                  <Link href="/nosotros" className="btn btn-secondary" style={{
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    ¿Por qué Humanis?
                  </Link>
                </div>
              </div>

              <div className="hero-stats-container" data-animate id="hero-stats">
                <div className="hero-stats">
                  {stats.map((stat, index) => (
                    <div 
                      key={index} 
                      className="stat-card"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        opacity: currentStat === index ? 1 : 0.85,
                        transform: currentStat === index ? 'scale(1.02)' : 'scale(1)',
                      }}
                    >
                      <div className="stat-value">
                        {stat.value}
                        <span className="stat-suffix">{stat.suffix}</span>
                      </div>
                      <div className="stat-label">{stat.label}</div>
                      {stat.trend && <span className="stat-trend">{stat.trend}</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clientes" className="clients-section">
          <div className="container">
            <div className="clients-header" data-animate id="clients-header">
              <span className="section-badge">Clientes</span>
              <h2 className="section-title">Confianza de Líderes del Mercado</h2>
              <p className="section-subtitle">
                Muchas empresas líderes confían en Humanis para construir equipos ejecutivos de alto rendimiento 
                y transformar sus organizaciones con talento excepcional.
              </p>
            </div>
          </div>
          
          <div className="clients-carousel" aria-label="Carrusel de logos de clientes">
            <div className="clients-track">
              {[...clients, ...clients].map((client, index) => (
                <div key={index} className="client-logo">
                  <Image 
                    src={client} 
                    alt={`Logo cliente ${(index % 8) + 1} - Humanis México`}
                    width={280}
                    height={100}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="servicios" className="services-section">
          <div className="container">
            <div className="section-header" data-animate id="services-header">
              <span className="section-badge">Nuestros Servicios</span>
              <h2 className="section-title">Soluciones Premium de Talento Ejecutivo</h2>
              <p className="section-subtitle">
                Metodología propietaria respaldada por tecnología de vanguardia 
                y una red exclusiva de más de 1,000 ejecutivos verificados en toda la República Mexicana.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service, index) => (
                <article 
                  key={index} 
                  className="service-card" 
                  data-animate 
                  id={`service-${index}`}
                  style={{ '--card-gradient': service.gradient.split(' ')[1] === 'from-blue-500' 
                    ? 'linear-gradient(90deg, #3b82f6, #2563eb)' 
                    : service.gradient.split(' ')[1] === 'from-indigo-500'
                    ? 'linear-gradient(90deg, #6366f1, #8b5cf6)' 
                    : 'linear-gradient(90deg, #a855f7, #ec4899)' }}
                >
                  <div className="service-image">
                    <Image 
                      src={service.image}
                      alt={`${service.title} - Humanis México`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-subtitle">{service.subtitle}</p>
                    <p className="service-description">{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="service-feature">
                          <span className="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proceso" className="process-section">
          <div className="container">
            <div className="section-header" data-animate id="process-header">
              <span className="section-badge">Nuestro Proceso</span>
              <h2 className="section-title">Metodología Comprobada de 4 Fases</h2>
              <p className="section-subtitle">
                Un proceso riguroso y eficiente que garantiza la identificación del talento ideal 
                en tiempo récord, con seguimiento post-contratación incluido.
              </p>
            </div>

            <div className="process-timeline">
              <div className="process-line" aria-hidden="true"></div>
              <div className="process-steps">
                {process.map((step, index) => (
                  <article key={index} className="process-step" data-animate id={`process-${index}`}>
                    <div className="process-image">
                      <Image 
                        src={step.image}
                        alt={`${step.title} - Proceso Humanis México`}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="step-number" aria-label={`Paso ${step.step}`}>{step.step}</div>
                    </div>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                    <span className="step-duration">{step.duration}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="nosotros" className="about-section">
          <div className="container">
            <div className="section-header" data-animate id="about-header">
              <span className="section-badge">Sobre Nosotros</span>
              <h2 className="section-title">Líderes en Transformación de Talento</h2>
              <p className="section-subtitle">
                Con más de una década de experiencia, hemos construido la red más sólida 
                de talento ejecutivo en México, transformando organizaciones a través de personas excepcionales.
              </p>
            </div>

            <div className="about-grid">
              <div className="about-content" data-animate id="about-content">
                <h3>Nuestra Propuesta de Valor</h3>
                <p>
                  En Humanis, no solo identificamos talento; creamos conexiones estratégicas que impulsan 
                  el crecimiento sostenible de las organizaciones. Nuestro enfoque personalizado y metodología 
                  probada garantizan resultados excepcionales en cada búsqueda.
                </p>
                
                <div className="about-features">
                  <div className="about-feature">
                    <div className="about-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                        <path d="M2 17l10 5 10-5"/>
                        <path d="M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                    <div className="about-feature-text">
                      <h4>Red Exclusiva</h4>
                      <p>+1,000 ejecutivos verificados</p>
                    </div>
                  </div>
                  
                  <div className="about-feature">
                    <div className="about-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                        <path d="M9 11l3 3L22 4"/>
                        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                      </svg>
                    </div>
                    <div className="about-feature-text">
                      <h4>Garantía Total</h4>
                      <p>60 días de reemplazo sin costo</p>
                    </div>
                  </div>
                  
                  <div className="about-feature">
                    <div className="about-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </div>
                    <div className="about-feature-text">
                      <h4>Tiempo Récord</h4>
                      <p>9 días promedio de colocación</p>
                    </div>
                  </div>
                  
                  <div className="about-feature">
                    <div className="about-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                        <circle cx="8.5" cy="7" r="4"/>
                        <line x1="20" y1="8" x2="20" y2="14"/>
                        <line x1="23" y1="11" x2="17" y2="11"/>
                      </svg>
                    </div>
                    <div className="about-feature-text">
                      <h4>Seguimiento</h4>
                      <p>3 meses de acompañamiento</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-image" data-animate id="about-image">
                <Image 
                  src="/images/about-team.jpg"
                  alt="Equipo Humanis México - Executive Search"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="achievements-section">
          <div className="container">
            <div className="section-header" data-animate id="achievements-header">
              <span className="section-badge">Diferenciadores</span>
              <h2 className="section-title">Lo que nos Hace Únicos</h2>
              <p className="section-subtitle">
                Factores clave que posicionan a Humanis como la firma de executive search 
                más confiable y efectiva en México.
              </p>
            </div>

            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <article key={index} className="achievement-card" data-animate id={`achievement-${index}`}>
                  <div className="achievement-image">
                    <Image 
                      src={achievement.image}
                      alt={`${achievement.title} - Humanis México`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="achievement-overlay">
                      <h3 className="achievement-title">{achievement.title}</h3>
                      <p className="achievement-description">{achievement.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-pattern" aria-hidden="true"></div>
          <div className="container">
            <div className="cta-wrapper">
              <div className="cta-content">
                <h2 className="cta-title">
                  Transforme Su Organización con el Talento Correcto
                </h2>
                <p className="cta-description">
                  Inicie hoy mismo con una consultoría gratuita y descubra cómo Humanis puede 
                  acelerar el crecimiento de su empresa con ejecutivos excepcionales.
                </p>
                <div className="cta-buttons">
                  <Link href="/consulta" className="btn btn-white">
                    Agendar Consulta Gratuita
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/>
                    </svg>
                  </Link>
                  <Link href="/nosotros" className="btn btn-outline-white">
                    Conocer Más
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="cta-image">
                <Image 
                  src="/images/cta-success.jpg"
                  alt="Éxito ejecutivo Humanis México"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <Image 
                  src="/images/logohumanis.png"
                  alt="Humanis México - Executive Search"
                  width={240}
                  height={80}
                  className="footer-logo-image"
                  priority={false}
                />
              </div>
              <p className="footer-description">
                Firma líder en executive search y consultoría de talento en México. 
                Transformamos organizaciones conectando líderes excepcionales con empresas extraordinarias.
              </p>
              <div className="footer-social">
                <a href="https://www.linkedin.com/company/humanismx" className="social-link" aria-label="Síguenos en LinkedIn" rel="noopener noreferrer" target="_blank">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h4>Enlaces Rápidos</h4>
              <ul className="footer-links">
                <li><a href="#inicio" className="footer-link">Inicio</a></li>
                <li><a href="#servicios" className="footer-link">Servicios</a></li>
                <li><a href="#proceso" className="footer-link">Proceso</a></li>
                <li><a href="#nosotros" className="footer-link">Nosotros</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Páginas</h4>
              <ul className="footer-links">
                <li><Link href="/consulta" className="footer-link">Consulta Gratuita</Link></li>
                <li><Link href="/nosotros" className="footer-link">¿Por qué Humanis?</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contacto</h4>
              <ul className="footer-links">
                <li>
                  <a href="tel:+525544167974" className="footer-link">
                    +52 (55) 4416-7974
                  </a>
                </li>
                <li>
                  <span className="footer-link">
                    contacto at humanis.com.mx
                  </span>
                </li>
                <li className="footer-link">
                  Lun - Vie: 9:00 - 18:00
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 Humanis México. Todos los derechos reservados.
            </p>
            <div className="footer-legal">
              <Link href="/aviso-de-privacidad" className="footer-link">Aviso de Privacidad</Link>
              <Link href="/terminos-y-condiciones" className="footer-link">Términos y Condiciones</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}