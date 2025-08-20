'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export default function PorQueNosotrosPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countingStarted, setCountingStarted] = useState(false);

  useEffect(() => {
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
          y: (e.clientY / window.innerHeight) * 100,
        });
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
            entry.target.classList.add('in-view');
            if (entry.target.id === 'achievements-header') {
              setCountingStarted(true);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const differentiators = [
    {
      title: 'Red Exclusiva de +1,000 Profesionales',
      description: 'Base de datos verificada y actualizada constantemente con los mejores talentos ejecutivos de México en todas las industrias clave.',
      icon: 'network',
      stats: '+1,000',
      unit: 'Ejecutivos Verificados',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Proceso de 7 Filtros de Calidad',
      description: 'Metodología propietaria que garantiza que solo los candidatos más calificados y compatibles lleguen a tu proceso de entrevistas.',
      icon: 'filter',
      stats: '7',
      unit: 'Etapas de Verificación',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'Garantía de Reemplazo 60 Días',
      description: 'Si el ejecutivo no cumple expectativas en los primeros 60 días, lo reemplazamos sin costo adicional para tu empresa.',
      icon: 'shield',
      stats: '60',
      unit: 'Días de Garantía',
      gradient: 'from-cyan-500 to-blue-600',
    },
  ];

  const methodology = [
    {
      step: '01',
      title: 'Discovery & Análisis',
      description: 'Inmersión profunda en tu cultura empresarial, necesidades técnicas y objetivos estratégicos para definir el perfil ideal.',
      image: '/images/executive-search.jpg',
      duration: '2-3 días',
    },
    {
      step: '02',
      title: 'Búsqueda Estratégica',
      description: 'Activación de nuestra red exclusiva y aplicación de headhunting especializado para identificar candidatos de alto calibre.',
      image: '/images/talent-mapping.jpg',
      duration: '2-4 días',
    },
    {
      step: '03',
      title: 'Evaluación Integral',
      description: 'Aplicación de nuestro proceso de 7 filtros: técnico, cultural, psicométrico, referencias, competencias, valores y potencial.',
      image: '/images/organizational-dev.jpg',
      duration: '3-5 días',
    },
    {
      step: '04',
      title: 'Presentación Executive',
      description: 'Presentación de candidatos finalistas con reportes detallados, análisis comparativo y recomendaciones estratégicas.',
      image: '/images/process-discovery.jpg',
      duration: '1-2 días',
    },
    {
      step: '05',
      title: 'Integración & Seguimiento',
      description: 'Acompañamiento durante 6 meses post-contratación para asegurar una integración exitosa y desarrollo óptimo.',
      image: '/images/process-integration.jpg',
      duration: '6 meses',
    },
  ];

  const achievements = [
    { metric: '50+', label: 'Empresas Clientes', icon: 'building' },
    { metric: '300+', label: 'Ejecutivos Colocados', icon: 'users' },
    { metric: '98%', label: 'Tasa de Retención', icon: 'chart' },
    { metric: '90%', label: 'Clientes Recurrentes', icon: 'repeat' },
    { metric: '4.9/5', label: 'Calificación Promedio', icon: 'star' },
  ];

  const industries = [
    { name: 'Tecnología & Software', percentage: 35 },
    { name: 'Finanzas & Banca', percentage: 25 },
    { name: 'Manufactura & Industria', percentage: 20 },
    { name: 'Retail & Consumo', percentage: 15 },
    { name: 'Salud & Farmacéutica', percentage: 5 },
  ];

  const values = [
    {
      title: 'Excelencia',
      description: 'Comprometidos con entregar resultados excepcionales en cada búsqueda.',
      icon: 'star',
    },
    {
      title: 'Integridad',
      description: 'Transparencia y honestidad en cada interacción con clientes y candidatos.',
      icon: 'shield',
    },
    {
      title: 'Innovación',
      description: 'Metodologías vanguardistas y tecnología de punta en recruitment.',
      icon: 'lightbulb',
    },
    {
      title: 'Confidencialidad',
      description: 'Máxima discreción en el manejo de información sensible.',
      icon: 'lock',
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Por Qué Humanis - Executive Search México",
    "description": "Descubre por qué Humanis es la firma líder en executive search en México. Red de +1,000 ejecutivos verificados, metodología de 7 filtros y 98% de retención.",
    "url": "https://humanis.com.mx/nosotros",
    "mainEntity": {
      "@type": "Organization",
      "name": "Humanis México",
      "url": "https://humanis.com.mx",
      "logo": "https://humanis.com.mx/images/logohumanis.png",
      "foundingDate": "2019",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": 50,
      },
      "award": [
        "Great Place to Work 2024",
        "ISO 9001:2015 Certified",
        "LinkedIn Talent Solutions Partner",
      ],
      "member": [
        {
          "@type": "Person",
          "name": "Ana Patricia Méndez",
          "jobTitle": "CEO & Fundadora",
        },
      ],
      "sameAs": [
        "https://linkedin.com/company/humanis-mexico",
        "https://twitter.com/humanismx",
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "523",
        "bestRating": "5",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+52-55-4416-7974",
        "contactType": "Customer Service",
        "email": "contacto@humanis.com.mx",
        "areaServed": "MX",
        "availableLanguage": ["Spanish"],
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "MX",
        "addressLocality": "Ciudad de México",
        "postalCode": "11560",
        "streetAddress": "Av. Presidente Masaryk 61, Polanco",
      },
    },
  };

  return (
    <>
      <Head>
        <html lang="es-MX" />
        <title>¿Por Qué Humanis? | Líder en Executive Search México</title>
        <meta
          name="description"
          content="Humanis: Líder en executive search en México con +1,000 ejecutivos verificados, 98% de retención y 9 días promedio de colocación. Descubre nuestra metodología única."
        />
        <meta
          name="keywords"
          content="executive search México, reclutamiento ejecutivo, headhunting México, consultoría de talento, Humanis México, contratación ejecutiva, talento ejecutivo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Humanis México" />
        <link rel="canonical" href="https://humanis.com.mx/nosotros" />
        <link rel="alternate" hrefLang="es-MX" href="https://humanis.com.mx/nosotros" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="¿Por Qué Humanis? | Executive Search Premium México" />
        <meta
          property="og:description"
          content="Líderes en executive search en México. Con +1,000 ejecutivos verificados y una metodología de 7 filtros, garantizamos talento excepcional en tiempo récord."
        />
        <meta property="og:image" content="https://humanis.com.mx/og-por-que.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Humanis México - Líder en Executive Search" />
        <meta property="og:url" content="https://humanis.com.mx/nosotros" />
        <meta property="og:site_name" content="Humanis México" />
        <meta property="og:locale" content="es_MX" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="¿Por Qué Humanis? | Executive Search México" />
        <meta
          name="twitter:description"
          content="Descubre por qué Humanis es la firma líder en executive search en México con una red exclusiva de +1,000 profesionales."
        />
        <meta name="twitter:image" content="https://humanis.com.mx/og-por-que.jpg" />
        <meta name="twitter:site" content="@humanismx" />

        {/* Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />

        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </Head>

      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Script
        id="gtag"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
      />

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

        /* Navigation */
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
            height: 50px;
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

        .nav-link.active {
          color: #1e40af;
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

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .nav-cta {
          display: flex;
          gap: 1rem;
        }

        .btn {
          padding: 0.75rem 1.75rem;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.625rem;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .btn-primary {
          background: #3b82f6;
          color: white;
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.25);
        }

        .btn-primary:hover {
          background: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.35);
        }

        .btn-secondary {
          border: 1.5px solid #e5e7eb;
          color: #6b7280;
          background: white;
        }

        .btn-secondary:hover {
          border-color: #3b82f6;
          color: #3b82f6;
          background: #f0f9ff;
        }

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
          .nav-menu,
          .nav-cta {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }
        }

        .mobile-menu {
          position: fixed;
          top: 76px;
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
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(1deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(-1deg);
          }
        }

        .hero-pattern {
          position: absolute;
          top: 0;
          right: -10%;
          width: 60%;
          height: 100%;
          opacity: 0.1;
          background-image: linear-gradient(
              60deg,
              #3b82f6 12%,
              transparent 12.5%,
              transparent 87%,
              #3b82f6 87.5%,
              #3b82f6
            ),
            linear-gradient(120deg, #3b82f6 12%, transparent 12.5%, transparent 87%, #3b82f6 87.5%, #3b82f6);
          background-size: 60px 100px;
          background-position: 0 0, 30px 50px;
          animation: waveAnimation 15s linear infinite;
        }

        @keyframes waveAnimation {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(60px);
          }
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
        }

        @keyframes pulseGlow {
          0%,
          100% {
            transform: scale(1) translateY(0);
          }
          50% {
            transform: scale(1.2) translateY(-50px);
          }
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
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100vw);
          }
        }

        @keyframes float {
          0%,
          100% {
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

        .badge-dot {
          width: 0.75rem;
          height: 0.75rem;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s infinite;
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
        }

        @keyframes pulse {
          0%,
          100% {
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

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
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
          0%,
          100% {
            filter: hue-rotate(0deg);
          }
          50% {
            filter: hue-rotate(30deg);
          }
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
            font-size: 1.1rem;
          }
        }

        .hero-buttons {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

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
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2);
          position: relative;
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

        @media (max-width: 768px) {
          .hero-stats {
            grid-template-columns: 1fr;
            padding: 1.5rem;
            gap: 1.5rem;
          }
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
            padding: 1rem;
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
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          50%,
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
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
            font-size: 2rem;
          }
        }

        .stat-label {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .stat-label {
            font-size: 0.8rem;
          }
        }

        /* Sections */
        .section {
          padding: 6rem 0;
          position: relative;
        }

        @media (max-width: 768px) {
          .section {
            padding: 4rem 0;
          }
        }

        .section-alt {
          background: #f8fafc;
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

        .section-badge {
          display: inline-block;
          padding: 0.5rem 1.25rem;
          background: linear-gradient(135deg, #f0f9ff, #dbeafe);
          color: #3b82f6;
          border-radius: 30px;
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: 0.5px;
          margin-bottom: 1rem;
          text-transform: uppercase;
          border: 1px solid #bfdbfe;
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
            font-size: 1.1rem;
          }
        }

        /* Differentiators */
        .diff-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 2rem;
          min-height: 400px;
          align-items: stretch;
        }

        @media (max-width: 768px) {
          .diff-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        .diff-card {
          background: white;
          border-radius: 20px;
          overflow: visible;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          cursor: pointer;
          border: 1px solid #e5e7eb;
          display: flex;
          flex-direction: column;
        }

        .diff-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .diff-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
        }

        .diff-card:hover::before {
          transform: scaleX(1);
        }

        .diff-content {
          padding: 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        @media (max-width: 768px) {
          .diff-content {
            padding: 1.5rem;
          }
        }

        .diff-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          box-shadow: 0 8px 30px rgba(59, 130, 246, 0.2);
          background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
        }

        .diff-icon svg {
          stroke: white;
          fill: none;
          stroke-width: 2;
        }

        .diff-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .diff-title {
            font-size: 1.25rem;
          }
        }

        .diff-description {
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }

        .diff-stats {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          font-size: 3rem;
          font-weight: 900;
          color: var(--gradient-start);
          transition: transform 0.3s ease;
        }

        @media (max-width: 768px) {
          .diff-stats {
            font-size: 2.25rem;
          }
        }

        .diff-stats:hover {
          transform: scale(1.05);
        }

        .diff-unit {
          font-size: 1rem;
          font-weight: 600;
          color: var(--gradient-start);
        }

        @media (max-width: 768px) {
          .diff-unit {
            font-size: 0.875rem;
          }
        }

        /* Methodology */
        .method-timeline {
          position: relative;
          margin-top: 4rem;
          min-height: 600px;
        }

        .method-line {
          position: absolute;
          top: 100px;
          left: 10%;
          right: 10%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #3b82f6, #3b82f6, transparent);
          opacity: 0.3;
          z-index: 0;
        }

        .method-steps {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 2rem;
          position: relative;
          padding: 2rem 0;
          align-items: stretch;
        }

        @media (max-width: 1200px) {
          .method-steps {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .method-steps {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .method-line {
            display: none;
          }
        }

        .method-step {
          text-align: center;
          position: relative;
          z-index: 1;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        @media (max-width: 768px) {
          .method-step {
            min-height: auto;
          }
        }

        .method-image {
          width: 160px;
          height: 160px;
          margin: 0 auto 1.5rem;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          border: 4px solid #e5e7eb;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
        }

        @media (max-width: 768px) {
          .method-image {
            width: 120px;
            height: 120px;
          }
        }

        .method-step:hover .method-image {
          transform: scale(1.05);
          border-color: #3b82f6;
          box-shadow: 0 15px 50px rgba(59, 130, 246, 0.2);
        }

        .method-number {
          position: absolute;
          top: -10px;
          right: 10px;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #3b82f6, #1e40af);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 1rem;
          color: white;
          z-index: 1;
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
        }

        @media (max-width: 768px) {
          .method-number {
            width: 32px;
            height: 32px;
            font-size: 0.875rem;
            top: -8px;
            right: 8px;
          }
        }

        .method-title {
          font-size: 1.375rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.875rem;
        }

        @media (max-width: 768px) {
          .method-title {
            font-size: 1.25rem;
          }
        }

        .method-description {
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 1rem;
          padding: 0 1rem;
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .method-description {
            padding: 0;
            font-size: 0.9rem;
          }
        }

        .method-duration {
          display: inline-block;
          padding: 0.375rem 1rem;
          background: linear-gradient(135deg, #f0f9ff, #dbeafe);
          color: #3b82f6;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        /* Achievements */
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
          padding: 2rem;
          align-items: stretch;
        }

        @media (max-width: 1024px) {
          .achievements-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .achievements-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            padding: 1rem;
          }
        }

        @media (max-width: 480px) {
          .achievements-grid {
            grid-template-columns: 1fr;
            max-width: 280px;
            margin: 0 auto;
          }
        }

        .achievement-card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid #e5e7eb;
          min-height: 150px;
          opacity: 1 !important;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .achievement-card {
            padding: 1.5rem 1rem;
            min-height: 120px;
          }
        }

        .achievement-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
        }

        .achievement-metric {
          font-size: 2.5rem;
          font-weight: 900;
          color: #1e40af;
          margin-bottom: 0.5rem;
          transition: transform 0.3s ease;
        }

        @media (max-width: 768px) {
          .achievement-metric {
            font-size: 2rem;
          }
        }

        .achievement-card:hover .achievement-metric {
          transform: scale(1.05);
        }

        .achievement-label {
          color: #6b7280;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .achievement-label {
            font-size: 0.75rem;
          }
        }

        /* Industries */
        .industries-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .industry-bar {
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .industry-bar {
            margin-bottom: 1.5rem;
          }
        }

        .industry-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .industry-name {
          font-weight: 600;
          color: #1a1a1a;
        }

        @media (max-width: 768px) {
          .industry-name {
            font-size: 0.9rem;
          }
        }

        .industry-percentage {
          font-weight: 700;
          color: #3b82f6;
        }

        .industry-progress {
          height: 8px;
          background: #e5e7eb;
          border-radius: 4px;
          overflow: hidden;
        }

        .industry-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #1e40af);
          border-radius: 4px;
          transition: width 1.5s ease;
        }

        /* Values */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .values-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        .value-card {
          text-align: center;
          padding: 2rem;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .value-card {
            padding: 1.5rem;
          }
        }

        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
        }

        .value-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #f0f9ff, #dbeafe);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .value-icon {
            width: 60px;
            height: 60px;
          }
        }

        .value-card:hover .value-icon {
          transform: scale(1.1);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
        }

        .value-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.75rem;
        }

        .value-description {
          color: #6b7280;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .value-description {
            font-size: 0.95rem;
          }
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
          background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
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
            font-size: 1.1rem;
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
            justify-content: center;
            gap: 1rem;
          }
        }

        .cta-image {
          position: relative;
          height: 400px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .cta-image {
            height: 300px;
          }
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
            margin-bottom: 2rem;
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
          width: 40px;
          height: 40px;
          background: #f1f5f9;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: #6b7280;
        }

        .social-link:hover {
          background: #3b82f6;
          color: white;
          transform: translateY(-3px);
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

        /* Animations */
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

        .animate-count {
          animation: countUp 0.6s ease forwards;
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Focus states */
        a:focus-visible,
        button:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
      `}</style>

      <header className={`nav-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-wrapper">
            <Link href="/" className="logo-container">
              <Image
                src="/images/logohumanis.png"
                alt="Humanis México - Executive Search"
                width={240}
                height={80}
                className="logo-image"
                priority
              />
            </Link>

            <nav className="nav-menu">
              <Link href="/" className="nav-link">Inicio</Link>
              <Link href="/#servicios" className="nav-link">Servicios</Link>
              <Link href="/#proceso" className="nav-link">Proceso</Link>
              <Link href="/nosotros" className="nav-link active">¿Por qué nosotros?</Link>
              <Link href="/consulta" className="nav-link">Contactar</Link>
            </nav>

            <div className="nav-cta">
              <Link href="/consulta" className="btn btn-primary">
                Consulta Gratuita
              </Link>
            </div>

            <button
              className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link href="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Inicio
            </Link>
            <Link href="/#servicios" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Servicios
            </Link>
            <Link href="/#proceso" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Proceso
            </Link>
            <Link href="/nosotros" className="nav-link active" onClick={() => setMobileMenuOpen(false)}>
              ¿Por qué nosotros?
            </Link>
            <Link href="/consulta" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Contactar
            </Link>
            <div style={{ marginTop: '1rem' }}>
              <Link href="/consulta" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Consulta Gratuita
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-pattern" data-parallax="0.1"></div>
          <div
            className="hero-glow"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            }}
          ></div>

          <div className="hero-lines">
            {[...Array(5)].map((_, i) => (
              <div
                key={`line-${i}`}
                className="hero-line"
                style={{
                  left: `${i * 25}%`,
                  animationDelay: `${i * 2}s`,
                  animationDuration: `${10 + i * 2}s`,
                }}
              />
            ))}
          </div>

          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
            }}
          >
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
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                }}
              />
            ))}
          </div>

          <div className="container">
            <div className="hero-wrapper">
              <div className="hero-content" data-animate id="hero-content">
                <div className="hero-badge">
                  <span className="badge-dot"></span>
                  <span className="badge-text">La Diferencia Humanis</span>
                </div>

                <h1 className="hero-title">
                  ¿Por Qué <span className="hero-gradient-text">Elegir Humanis</span>?
                </h1>

                <p className="hero-description">
                  Somos más que una consultora de talento. Somos tu socio estratégico para construir equipos ejecutivos
                  excepcionales que impulsen el crecimiento sostenible de tu empresa. Descubre qué nos hace únicos en el
                  mercado mexicano.
                </p>

                <div className="hero-buttons">
                  <Link
                    href="/consulta"
                    className="btn btn-primary"
                    style={{
                      background: 'white',
                      color: '#1e40af',
                      boxShadow: '0 10px 40px rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    Iniciar Consulta
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a href="#metodologia" className="btn btn-secondary">
                    Ver Metodología
                  </a>
                </div>
              </div>

              <div className="hero-stats-container" data-animate id="hero-stats">
                <div className="hero-stats">
                  <div className="stat-card">
                    <div className="stat-value">1K+</div>
                    <div className="stat-label">Ejecutivos</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-value">98%</div>
                    <div className="stat-label">Retención</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-value">9</div>
                    <div className="stat-label">Días Promedio</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-value">50+</div>
                    <div className="stat-label">Empresas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header" data-animate id="diff-header">
              <span className="section-badge">Ventajas Competitivas</span>
              <h2 className="section-title">Lo que Nos Hace Únicos</h2>
              <p className="section-subtitle">
                Factores clave que nos posicionan como la firma de executive search más confiable y efectiva en México.
              </p>
            </div>

            <div className="diff-grid">
              {differentiators.map((diff, index) => (
                <div
                  key={index}
                  className="diff-card"
                  data-animate
                  id={`diff-${index}`}
                  style={{ '--gradient-start': '#3b82f6', '--gradient-end': '#1e40af' }}
                >
                  <div className="diff-content">
                    <div className="diff-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        {diff.icon === 'network' && (
                          <>
                            <circle cx="12" cy="5" r="3" />
                            <circle cx="12" cy="19" r="3" />
                            <circle cx="5" cy="12" r="3" />
                            <circle cx="19" cy="12" r="3" />
                            <line x1="12" y1="8" x2="12" y2="16" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                          </>
                        )}
                        {diff.icon === 'filter' && (
                          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                        )}
                        {diff.icon === 'shield' && (
                          <>
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <polyline points="9 12 12 15 16 10" />
                          </>
                        )}
                      </svg>
                    </div>
                    <h3 className="diff-title">{diff.title}</h3>
                    <p className="diff-description">{diff.description}</p>
                    <div className="diff-stats" style={{ color: '#3b82f6' }}>
                      <span>{diff.stats}</span>
                      <span className="diff-unit" style={{ color: '#3b82f6' }}>{diff.unit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="metodologia" className="section section-alt">
          <div className="container">
            <div className="section-header" data-animate id="method-header">
              <span className="section-badge">Metodología</span>
              <h2 className="section-title">Nuestro Proceso Comprobado</h2>
              <p className="section-subtitle">
                Un sistema de 5 pasos diseñado para garantizar que encuentres exactamente el talento ejecutivo que necesitas,
                cuando lo necesitas.
              </p>
            </div>

            <div className="method-timeline">
              <div className="method-line"></div>
              <div className="method-steps">
                {methodology.map((step, index) => (
                  <div key={index} className="method-step" data-animate id={`method-${index}`}>
                    <div className="method-image">
                      <Image src={step.image} alt={`Paso ${step.title} - Humanis México`} fill style={{ objectFit: 'cover' }} />
                      <div className="method-number">{step.step}</div>
                    </div>
                    <h3 className="method-title">{step.title}</h3>
                    <p className="method-description">{step.description}</p>
                    <span className="method-duration">{step.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-header" data-animate id="achievements-header">
              <span className="section-badge">Resultados</span>
              <h2 className="section-title">Números que Hablan</h2>
              <p className="section-subtitle">
                Nuestros resultados reflejan años de excelencia y compromiso con el éxito de nuestros clientes.
              </p>
            </div>

            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="achievement-card"
                  data-animate
                  id={`achievement-${index}`}
                >
                  <div className="achievement-metric">{achievement.metric}</div>
                  <div className="achievement-label">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header" data-animate id="industries-header">
              <span className="section-badge">Expertise</span>
              <h2 className="section-title">Industrias que Servimos</h2>
              <p className="section-subtitle">Experiencia profunda en los sectores más dinámicos de México.</p>
            </div>

            <div className="industries-container">
              {industries.map((industry, index) => (
                <div key={index} className="industry-bar" data-animate id={`industry-${index}`}>
                  <div className="industry-header">
                    <span className="industry-name">{industry.name}</span>
                    <span className="industry-percentage">{industry.percentage}%</span>
                  </div>
                  <div className="industry-progress">
                    <div
                      className="industry-fill"
                      style={{
                        width: visibleSections.has(`industry-${index}`) ? `${industry.percentage}%` : '0%',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-header" data-animate id="values-header">
              <span className="section-badge">Valores</span>
              <h2 className="section-title">Nuestros Principios</h2>
              <p className="section-subtitle">Los valores que guían cada búsqueda y cada relación con nuestros clientes.</p>
            </div>

            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card" data-animate id={`value-${index}`}>
                  <div className="value-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                      {value.icon === 'star' && (
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      )}
                      {value.icon === 'shield' && (
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      )}
                      {value.icon === 'lightbulb' && (
                        <>
                          <line x1="12" y1="2" x2="12" y2="6" />
                          <line x1="12" y1="18" x2="12" y2="22" />
                          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                          <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                          <line x1="2" y1="12" x2="6" y2="12" />
                          <line x1="18" y1="12" x2="22" y2="12" />
                          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                          <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                        </>
                      )}
                      {value.icon === 'lock' && (
                        <>
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0110 0v4" />
                        </>
                      )}
                    </svg>
                  </div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-pattern"></div>
          <div className="container">
            <div className="cta-wrapper">
              <div className="cta-content">
                <h2 className="cta-title">Experimenta la Diferencia Humanis</h2>
                <p className="cta-description">
                  Ahora que conoces por qué somos líderes, es momento de experimentar nuestro servicio excepcional.
                  Comienza con una consulta gratuita.
                </p>
                <div className="cta-buttons">
                  <Link href="/consulta" className="btn btn-white">
                    Consulta Gratuita
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a href="tel:+525544167974" className="btn btn-outline-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72"></path>
                    </svg>
                    Llamar: (55) 4416-7974
                  </a>
                </div>
              </div>
              <div className="cta-image" data-animate id="cta-image">
                <Image src="/images/cta-success.jpg" alt="Humanis Success" fill style={{ objectFit: 'cover' }} />
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
                  alt="Humanis México"
                  width={240}
                  height={80}
                  className="footer-logo-image"
                  priority
                />
              </div>
              <p className="footer-description">
                Firma líder en executive search y consultoría de talento en México. Transformamos organizaciones conectando
                líderes excepcionales con empresas extraordinarias.
              </p>
              <div className="footer-social">
                <a
                  href="https://www.linkedin.com/company/humanismx"
                  className="social-link"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h4>Enlaces Rápidos</h4>
              <ul className="footer-links">
                <li>
                  <Link href="/" className="footer-link">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/#servicios" className="footer-link">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="/#proceso" className="footer-link">
                    Proceso
                  </Link>
                </li>
                <li>
                  <Link href="/nosotros" className="footer-link">
                    ¿Por qué Humanis?
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Páginas</h4>
              <ul className="footer-links">
                <li>
                  <Link href="/consulta" className="footer-link">
                    Consulta Gratuita
                  </Link>
                </li>
                <li>
                  <Link href="/nosotros" className="footer-link">
                    ¿Por qué nosotros?
                  </Link>
                </li>
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
                  <a href="mailto:contacto@humanis.com.mx" className="footer-link">
                    contacto@humanis.com.mx
                  </a>
                </li>
                <li className="footer-link">Lun - Vie: 9:00 - 18:00</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">© 2025 Humanis México. Todos los derechos reservados.</p>
            <div className="footer-legal">
              <Link href="/privacidad" className="footer-link">
                Aviso de Privacidad
              </Link>
              <Link href="/terminos" className="footer-link">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}