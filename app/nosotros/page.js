'use client';

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export default function PorQueNosotrosPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [activeTab, setActiveTab] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countingStarted, setCountingStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Parallax effects
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      parallaxElements.forEach(el => {
        const speed = el.dataset.parallax;
        const yPos = -(window.scrollY * speed);
        el.style.transform = `translateY(${yPos}px)`;
      });
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
            entry.target.classList.add('section-visible');
            
            // Start counting animation for metrics
            if (entry.target.id === 'achievements-header') {
              setCountingStarted(true);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

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
      gradientStart: '#3b82f6',
      gradientEnd: '#1d4ed8'
    },
    {
      title: 'Proceso de 7 Filtros de Calidad',
      description: 'Metodología propietaria que garantiza que solo los candidatos más calificados y compatibles lleguen a tu proceso de entrevistas.',
      icon: 'filter',
      stats: '7',
      unit: 'Etapas de Verificación',
      gradientStart: '#6366f1',
      gradientEnd: '#4f46e5'
    },
    {
      title: 'Garantía de Reemplazo 60 Días',
      description: 'Si el ejecutivo no cumple expectativas en los primeros 60 días, lo reemplazamos sin costo adicional para tu empresa.',
      icon: 'shield',
      stats: '60',
      unit: 'Días de Garantía',
      gradientStart: '#0ea5e9',
      gradientEnd: '#0284c7'
    },
    {
      title: 'Tiempo de Colocación Récord',
      description: 'Colocamos talento ejecutivo 60% más rápido que la competencia gracias a nuestra metodología optimizada y red establecida.',
      icon: 'clock',
      stats: '9',
      unit: 'Días Promedio',
      gradientStart: '#1e40af',
      gradientEnd: '#1e3a8a'
    }
  ];

  const methodology = [
    {
      step: '01',
      title: 'Discovery & Análisis',
      description: 'Inmersión profunda en tu cultura empresarial, necesidades técnicas y objetivos estratégicos para definir el perfil ideal.',
      image: '/images/executive-search.jpg',
      duration: '2-3 días'
    },
    {
      step: '02',
      title: 'Búsqueda Estratégica',
      description: 'Activación de nuestra red exclusiva y aplicación de headhunting especializado para identificar candidatos de alto calibre.',
      image: '/images/talent-mapping.jpg',
      duration: '2-4 días'
    },
    {
      step: '03',
      title: 'Evaluación Integral',
      description: 'Aplicación de nuestro proceso de 7 filtros: técnico, cultural, psicométrico, referencias, competencias, valores y potencial.',
      image: '/images/organizational-dev.jpg',
      duration: '3-5 días'
    },
    {
      step: '04',
      title: 'Presentación Executive',
      description: 'Presentación de candidatos finalistas con reportes detallados, análisis comparativo y recomendaciones estratégicas.',
      image: '/images/process-discovery.jpg',
      duration: '1-2 días'
    },
    {
      step: '05',
      title: 'Integración & Seguimiento',
      description: 'Acompañamiento durante 6 meses post-contratación para asegurar una integración exitosa y desarrollo óptimo.',
      image: '/images/process-integration.jpg',
      duration: '6 meses'
    }
  ];

  const achievements = [
    { metric: '50+', label: 'Empresas Clientes', icon: 'building' },
    { metric: '300+', label: 'Ejecutivos Colocados', icon: 'users' },
    { metric: '98%', label: 'Tasa de Retención', icon: 'chart' },
    { metric: '24h', label: 'Respuesta Inicial', icon: 'clock' },
    { metric: '90%', label: 'Clientes Recurrentes', icon: 'repeat' },
    { metric: '4.9/5', label: 'Calificación Promedio', icon: 'star' }
  ];

  const industries = [
    { name: 'Tecnología & Software', percentage: 35 },
    { name: 'Finanzas & Banca', percentage: 25 },
    { name: 'Manufactura & Industria', percentage: 20 },
    { name: 'Retail & Consumo', percentage: 15 },
    { name: 'Salud & Farmacéutica', percentage: 5 }
  ];

  const values = [
    {
      title: 'Excelencia',
      description: 'Comprometidos con entregar resultados excepcionales en cada búsqueda.',
      icon: 'star'
    },
    {
      title: 'Integridad',
      description: 'Transparencia y honestidad en cada interacción con clientes y candidatos.',
      icon: 'shield'
    },
    {
      title: 'Innovación',
      description: 'Metodologías vanguardistas y tecnología de punta en recruitment.',
      icon: 'lightbulb'
    },
    {
      title: 'Confidencialidad',
      description: 'Máxima discreción en el manejo de información sensible.',
      icon: 'lock'
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Por Qué Humanis - Executive Search México",
    "description": "Descubre por qué Humanis es la firma líder en executive search en México. +1,000 ejecutivos verificados, 98% retención, metodología probada.",
    "url": "https://humanis.com.mx/por-que-nosotros",
    "mainEntity": {
      "@type": "Organization",
      "name": "Humanis México",
      "url": "https://humanis.com.mx",
      "logo": "https://humanis.com.mx/logo.svg",
      "foundingDate": "2019",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": 50
      },
      "award": [
        "Great Place to Work 2024",
        "ISO 9001:2015 Certified",
        "LinkedIn Talent Solutions Partner"
      ],
      "member": [
        {
          "@type": "Person",
          "name": "Ana Patricia Méndez",
          "jobTitle": "CEO & Fundadora"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "523",
        "bestRating": "5"
      }
    }
  };

  return (
    <>
      <Head>
        <title>¿Por Qué Humanis? | Líder en Executive Search México</title>
        <meta name="description" content="Humanis: +1,000 ejecutivos verificados, 98% tasa de retención, 9 días promedio de colocación. Descubre por qué somos la firma #1 de executive search en México." />
        <meta name="keywords" content="por que humanis, humanis mexico, executive search mexico, ventajas humanis, consultoria talento mexico, headhunting mexico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://humanis.com.mx/por-que-nosotros" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="¿Por Qué Humanis? | Executive Search Premium" />
        <meta property="og:description" content="Descubre las ventajas competitivas que hacen de Humanis la firma líder en executive search en México." />
        <meta property="og:image" content="https://humanis.com.mx/og-por-que.jpg" />
        <meta property="og:url" content="https://humanis.com.mx/por-que-nosotros" />
        <meta property="og:site_name" content="Humanis México" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="¿Por Qué Humanis? - Executive Search" />
        <meta name="twitter:description" content="La diferencia Humanis en executive search y consultoría de talento" />
        <meta name="twitter:image" content="https://humanis.com.mx/twitter-por-que.jpg" />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
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
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.6;
          color: #0f172a;
          background: #ffffff;
          overflow-x: hidden;
        }

        ::selection {
          background: #3b82f6;
          color: white;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 1.25rem;
          }
        }

        /* Navigation */
        .nav-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }

        .nav-header.scrolled {
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
        }

        .nav-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 0;
        }

        .logo-container {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .logo-image {
          height: 80px;
          width: auto;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .nav-link {
          font-weight: 500;
          color: #475569;
          text-decoration: none;
          position: relative;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #1d4ed8);
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #1e293b;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link.active {
          color: #3b82f6;
        }

        .nav-cta {
          display: flex;
          gap: 1rem;
        }

        .btn {
          padding: 0.875rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .btn-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
          border: none;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4);
        }

        .btn-secondary {
          border: 2px solid #e2e8f0;
          color: #475569;
          background: white;
        }

        .btn-secondary:hover {
          border-color: #3b82f6;
          color: #3b82f6;
          background: #f0f9ff;
        }

        /* Mobile Menu */
        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          gap: 6px;
          padding: 8px;
          cursor: pointer;
        }

        .mobile-menu-btn span {
          width: 28px;
          height: 2px;
          background: #475569;
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        .mobile-menu-btn.active span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .mobile-menu-btn.active span:nth-child(2) {
          opacity: 0;
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
          top: 80px;
          left: 0;
          right: 0;
          background: white;
          padding: 2rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .mobile-menu.active {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 8rem 0 4rem;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          opacity: 0.1;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
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
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 0.625rem 1.5rem;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 2rem;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .badge-text {
          color: white;
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: 0.5px;
        }

        .hero-title {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          font-weight: 900;
          color: white;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .hero-gradient-text {
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.25rem;
          color: #cbd5e1;
          line-height: 1.8;
          margin-bottom: 3rem;
        }

        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .hero-stat {
          text-align: center;
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 900;
          color: white;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          color: #94a3b8;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Sections */
        .section {
          padding: 6rem 0;
          position: relative;
        }

        .section-alt {
          background: #f8fafc;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-badge {
          display: inline-block;
          padding: 0.5rem 1.25rem;
          background: linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%);
          color: #3b82f6;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: 0.5px;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: #64748b;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* Differentiators */
        .diff-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .diff-grid {
            grid-template-columns: 1fr;
          }
        }

        .diff-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          border-top: 4px solid transparent;
        }

        .diff-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
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
        }

        .diff-stats {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }

        /* Methodology */
        .method-grid {
          display: grid;
          gap: 3rem;
        }

        .method-step {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .method-step:nth-child(even) {
          direction: rtl;
        }

        .method-step:nth-child(even) > * {
          direction: ltr;
        }

        @media (max-width: 768px) {
          .method-step {
            grid-template-columns: 1fr;
          }
          
          .method-step:nth-child(even) {
            direction: ltr;
          }
        }

        .method-content {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
        }

        .method-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          border-radius: 50%;
          font-weight: 900;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
        }

        .method-image {
          position: relative;
          height: 320px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
        }

        /* Achievements */
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 2rem;
        }

        @media (max-width: 1024px) {
          .achievements-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .achievements-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .achievement-card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .achievement-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
        }

        .achievement-metric {
          font-size: 2.5rem;
          font-weight: 900;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        /* Industries */
        .industries-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .industry-bar {
          margin-bottom: 2rem;
        }

        .industry-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .industry-progress {
          height: 8px;
          background: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
        }

        .industry-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #1d4ed8);
          border-radius: 4px;
          transition: width 1.5s ease;
        }

        /* Values */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        @media (max-width: 1024px) {
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .values-grid {
            grid-template-columns: 1fr;
          }
        }

        .value-card {
          text-align: center;
          padding: 2rem;
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

        .value-card:hover .value-icon {
          transform: scale(1.1);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
        }

        .cta-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        /* Footer */
        .footer {
          background: #ffffff;
          color: #0f172a;
          padding: 4rem 0 2rem;
          border-top: 1px solid #e2e8f0;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
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

        .footer-description {
          color: #64748b;
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
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: #64748b;
        }

        .social-link:hover {
          background: #3b82f6;
          color: white;
          transform: translateY(-2px);
        }

        .footer-column h4 {
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #0f172a;
        }

        .footer-links {
          list-style: none;
        }

        .footer-link {
          color: #64748b;
          text-decoration: none;
          display: block;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #0f172a;
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-copyright {
          color: #64748b;
        }

        .footer-legal {
          display: flex;
          gap: 2rem;
        }

        /* Animations */
        [data-animate] {
          opacity: 0;
          transform: translateY(30px);
        }

        .section-visible {
          animation: fadeInUp 0.8s ease forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
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

        .animate-count {
          animation: countUp 0.6s ease forwards;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .section {
            padding: 4rem 0;
          }
        }
      `}</style>

      <header className={`nav-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-wrapper">
            <Link href="/" className="logo-container">
              <Image 
                src="/images/logohumanis.png"
                alt="Humanis Logo"
                width={200}
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
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link href="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Inicio</Link>
            <Link href="/#servicios" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Servicios</Link>
            <Link href="/#proceso" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Proceso</Link>
            <Link href="/por-que-nosotros" className="nav-link active" onClick={() => setMobileMenuOpen(false)}>¿Por qué nosotros?</Link>
            <Link href="/consulta" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contactar</Link>
            <div style={{ marginTop: '1rem' }}>
              <Link href="/consulta" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Consulta Gratuita
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-bg" style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15), transparent 50%)`
        }}></div>
        <div className="hero-grid" data-parallax="0.1"></div>
        
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
                Somos más que una consultora de talento. Somos tu socio estratégico para construir 
                equipos ejecutivos excepcionales que impulsen el crecimiento sostenible de tu empresa. 
                Descubre qué nos hace únicos en el mercado mexicano.
              </p>

              <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                <Link href="/consulta" className="btn btn-primary">
                  Iniciar Consulta
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                <a href="#metodologia" className="btn btn-secondary">
                  Ver Metodología
                </a>
              </div>
            </div>

            <div data-animate id="hero-stats">
              <div className="hero-stats-grid">
                <div className="hero-stat">
                  <div className="stat-value">1K+</div>
                  <div className="stat-label">Ejecutivos</div>
                </div>
                <div className="hero-stat">
                  <div className="stat-value">98%</div>
                  <div className="stat-label">Retención</div>
                </div>
                <div className="hero-stat">
                  <div className="stat-value">9</div>
                  <div className="stat-label">Días Promedio</div>
                </div>
                <div className="hero-stat">
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
              Factores clave que nos posicionan como la firma de executive search 
              más confiable y efectiva en México.
            </p>
          </div>

          <div className="diff-grid">
            {differentiators.map((diff, index) => (
              <div 
                key={index}
                className="diff-card"
                data-animate
                id={`diff-${index}`}
              >
                <div 
                  className="diff-icon"
                  style={{
                    background: `linear-gradient(135deg, ${diff.gradientStart}, ${diff.gradientEnd})`
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    {diff.icon === 'network' && (
                      <>
                        <circle cx="12" cy="5" r="3"/>
                        <circle cx="12" cy="19" r="3"/>
                        <circle cx="5" cy="12" r="3"/>
                        <circle cx="19" cy="12" r="3"/>
                        <line x1="12" y1="8" x2="12" y2="16"/>
                        <line x1="8" y1="12" x2="16" y2="12"/>
                      </>
                    )}
                    {diff.icon === 'filter' && (
                      <>
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
                      </>
                    )}
                    {diff.icon === 'shield' && (
                      <>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        <polyline points="9 12 12 15 16 10"/>
                      </>
                    )}
                    {diff.icon === 'clock' && (
                      <>
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </>
                    )}
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '1rem' }}>
                  {diff.title}
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  {diff.description}
                </p>
                <div className="diff-stats">
                  <span 
                    style={{
                      background: `linear-gradient(135deg, ${diff.gradientStart}, ${diff.gradientEnd})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontSize: '3rem',
                      fontWeight: '900',
                      lineHeight: '1'
                    }}
                  >
                    {diff.stats}
                  </span>
                  <span 
                    style={{
                      color: diff.gradientStart,
                      fontSize: '1rem',
                      fontWeight: '600',
                      marginLeft: '0.5rem'
                    }}
                  >
                    {diff.unit}
                  </span>
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
              Un sistema de 5 pasos diseñado para garantizar que encuentres exactamente 
              el talento ejecutivo que necesitas, cuando lo necesitas.
            </p>
          </div>

          <div className="method-grid">
            {methodology.map((step, index) => (
              <div key={index} className="method-step" data-animate id={`method-${index}`}>
                <div className="method-content">
                  <div className="method-number">{step.step}</div>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#0f172a', marginBottom: '1rem' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: '#64748b', lineHeight: '1.8', marginBottom: '1rem' }}>
                    {step.description}
                  </p>
                  <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: '#f0f9ff', color: '#3b82f6', borderRadius: '20px', fontSize: '0.875rem', fontWeight: '600' }}>
                    Duración: {step.duration}
                  </div>
                </div>
                <div className="method-image">
                  <Image 
                    src={step.image}
                    alt={step.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            ))}
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
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`achievement-metric ${countingStarted ? 'animate-count' : ''}`}>
                  {achievement.metric}
                </div>
                <div style={{ color: '#64748b', fontSize: '0.875rem', fontWeight: '600' }}>
                  {achievement.label}
                </div>
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
            <p className="section-subtitle">
              Experiencia profunda en los sectores más dinámicos de México.
            </p>
          </div>

          <div className="industries-container">
            {industries.map((industry, index) => (
              <div key={index} className="industry-bar" data-animate id={`industry-${index}`}>
                <div className="industry-header">
                  <span style={{ fontWeight: '600', color: '#0f172a' }}>{industry.name}</span>
                  <span style={{ fontWeight: '700', color: '#3b82f6' }}>{industry.percentage}%</span>
                </div>
                <div className="industry-progress">
                  <div 
                    className="industry-fill" 
                    style={{ 
                      width: visibleSections.has(`industry-${index}`) ? `${industry.percentage}%` : '0%' 
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
            <p className="section-subtitle">
              Los valores que guían cada búsqueda y cada relación con nuestros clientes.
            </p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card" data-animate id={`value-${index}`}>
                <div className="value-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                    {value.icon === 'star' && (
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    )}
                    {value.icon === 'shield' && (
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    )}
                    {value.icon === 'lightbulb' && (
                      <>
                        <line x1="12" y1="2" x2="12" y2="6"/>
                        <line x1="12" y1="18" x2="12" y2="22"/>
                        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
                        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
                        <line x1="2" y1="12" x2="6" y2="12"/>
                        <line x1="18" y1="12" x2="22" y2="12"/>
                        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/>
                        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
                      </>
                    )}
                    {value.icon === 'lock' && (
                      <>
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0110 0v4"/>
                      </>
                    )}
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.75rem' }}>
                  {value.title}
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-pattern"></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', color: 'white', marginBottom: '1.5rem' }}>
              Experimenta la Diferencia Humanis
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
              Ahora que conoces por qué somos líderes, es momento de experimentar 
              nuestro servicio excepcional. Comienza con una consulta gratuita.
            </p>
            <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link 
                href="/consulta"
                className="btn"
                style={{ background: 'white', color: '#1e40af', padding: '1rem 2rem' }}
              >
                Consulta Gratuita
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <a 
                href="tel:+525555550100"
                className="btn"
                style={{ border: '2px solid white', color: 'white', padding: '1rem 2rem' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72"></path>
                </svg>
                Llamar: (55) 5555-0100
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <Image 
                  src="/images/logohumanis.png"
                  alt="Humanis Logo"
                  width={240}
                  height={96}
                  className="footer-logo-image"
                  priority={true}
                />
              </div>
              <p className="footer-description">
                Firma líder en executive search y consultoría de talento en México. 
                Transformamos organizaciones conectando líderes excepcionales con empresas extraordinarias.
              </p>
              <div className="footer-social">
                <a 
                  href="https://linkedin.com/company/humanis-mexico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h4>Enlaces Rápidos</h4>
              <ul className="footer-links">
                <li><Link href="/" className="footer-link">Inicio</Link></li>
                <li><Link href="/#servicios" className="footer-link">Servicios</Link></li>
                <li><Link href="/#proceso" className="footer-link">Proceso</Link></li>
                <li><Link href="/por-que-nosotros" className="footer-link">¿Por qué Humanis?</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Páginas</h4>
              <ul className="footer-links">
                <li><Link href="/consulta" className="footer-link">Consulta Gratuita</Link></li>
                <li><Link href="/por-que-nosotros" className="footer-link">¿Por qué nosotros?</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contacto Principal</h4>
              <ul className="footer-links">
                <li>
                  <a href="tel:+525555550100" className="footer-link">
                    +52 (55) 4416-7974
                  </a>
                </li>
                <li>
                  <a href="mailto:contacto@humanis.com.mx" className="footer-link">
                    contacto@humanis.com.mx
                  </a>
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
              <Link href="/privacidad" className="footer-link">Aviso de Privacidad</Link>
              <Link href="/terminos" className="footer-link">Términos y Condiciones</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}