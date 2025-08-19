'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export default function TermsPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Términos y Condiciones - Humanis México",
    "url": "https://humanis.com.mx/terminos",
    "description": "Términos y Condiciones de Humanis México, que rigen el uso de nuestros servicios de consultoría de talento y conexión entre candidatos y empresas.",
    "publisher": {
      "@type": "Organization",
      "name": "Humanis México",
      "logo": {
        "@type": "ImageObject",
        "url": "https://humanis.com.mx/logo.svg"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Paseo de la Reforma 250, Piso 15",
      "addressLocality": "Ciudad de México",
      "addressRegion": "CDMX",
      "postalCode": "06600",
      "addressCountry": "MX"
    }
  };

  return (
    <>
      <Head>
        <title>Términos y Condiciones | Humanis México</title>
        <meta
          name="description"
          content="Conozca los Términos y Condiciones que rigen el uso de los servicios de Humanis México, líder en consultoría de talento y conexión de candidatos con empresas."
        />
        <meta
          name="keywords"
          content="términos y condiciones, humanis méxico, consultoría de talento, reclutamiento, condiciones de servicio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://humanis.com.mx/terminos" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Términos y Condiciones | Humanis México" />
        <meta
          property="og:description"
          content="Términos y Condiciones de Humanis México, regulando nuestros servicios de conexión de talento con empresas."
        />
        <meta property="og:image" content="https://humanis.com.mx/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://humanis.com.mx/terminos" />
        <meta property="og:site_name" content="Humanis México" />
        <meta property="og:locale" content="es_MX" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@humanismx" />
        <meta name="twitter:title" content="Términos y Condiciones | Humanis México" />
        <meta
          name="twitter:description"
          content="Términos y Condiciones de los servicios de consultoría de talento de Humanis México."
        />
        <meta name="twitter:image" content="https://humanis.com.mx/twitter-card.jpg" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
        }

        .btn-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
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

        @media (max-width: 1024px) {
          .nav-menu,
          .nav-cta {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }
        }

        /* Terms Hero Section */
        .terms-hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          padding: 10rem 0 4rem;
          position: relative;
          overflow: hidden;
        }

        .terms-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .terms-hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .terms-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 0.625rem 1.5rem;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 3rem;
        }

        .badge-text {
          color: white;
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: 0.5px;
        }

        .terms-hero-title {
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-weight: 900;
          color: white;
          line-height: 1.1;
          margin-bottom: 2.5rem;
        }

        .terms-hero-gradient {
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .terms-hero-subtitle {
          font-size: 1.25rem;
          color: #cbd5e1;
          line-height: 1.8;
          margin-bottom: 4rem;
        }

        .terms-meta {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2.5rem;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .terms-meta-item {
          text-align: center;
        }

        .terms-meta-label {
          color: #94a3b8;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }

        .terms-meta-value {
          color: white;
          font-weight: 600;
          font-size: 1.125rem;
        }

        /* Terms Content Section */
        .terms-section {
          padding: 6rem 0;
          background: #ffffff;
        }

        .terms-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .terms-nav {
          background: #f8fafc;
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 4rem;
          border: 1px solid #e2e8f0;
        }

        .terms-nav h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 1.5rem;
        }

        .terms-nav-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 0.75rem;
          list-style: none;
        }

        .terms-nav-item {
          padding: 0.75rem 1rem;
          background: white;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .terms-nav-item:hover {
          border-color: #3b82f6;
          background: #f0f9ff;
        }

        .terms-nav-link {
          color: #64748b;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.875rem;
        }

        .terms-nav-item:hover .terms-nav-link {
          color: #3b82f6;
        }

        .terms-section-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 3px solid #3b82f6;
          position: relative;
        }

        .terms-section-title::before {
          content: counter(section);
          counter-increment: section;
          position: absolute;
          left: -3rem;
          top: 0;
          width: 2rem;
          height: 2rem;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 0.875rem;
        }

        .terms-content {
          counter-reset: section;
        }

        .terms-text {
          color: #475569;
          line-height: 1.8;
          margin-bottom: 2rem;
          font-size: 1rem;
        }

        .terms-text strong {
          color: #0f172a;
          font-weight: 600;
        }

        .terms-list {
          list-style: none;
          margin-bottom: 2.5rem;
        }

        .terms-list li {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.25rem;
          padding: 1rem;
          background: #f8fafc;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }

        .terms-list li::before {
          content: '✓';
          color: #10b981;
          font-size: 1.25rem;
          font-weight: 900;
          flex-shrink: 0;
          width: 1.5rem;
          height: 1.5rem;
          background: #dcfce7;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .terms-contact-box {
          background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
          color: white;
          border-radius: 16px;
          padding: 2.5rem;
          margin: 3rem 0;
          text-align: center;
        }

        .terms-contact-box h3 {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .terms-contact-box p {
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }

        .terms-contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .terms-contact-item {
          background: rgba(255, 255, 255, 0.1);
          padding: 1rem;
          border-radius: 8px;
          backdrop-filter: blur(10px);
        }

        .terms-section-content {
          margin-bottom: 4rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .terms-section-content:last-child {
          border-bottom: none;
          margin-bottom: 0;
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
          width: 240px;
          height: auto;
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

        /* Link Styles */
        .terms-link {
          color: #3b82f6;
          text-decoration: none;
          font-weight: 600;
          border-bottom: 1px solid transparent;
          transition: border-color 0.3s ease;
        }

        .terms-link:hover {
          border-bottom-color: #3b82f6;
        }

        @media (max-width: 768px) {
          .terms-hero {
            padding: 7rem 0 3rem;
          }

          .terms-badge {
            margin-bottom: 2rem;
          }

          .terms-hero-title {
            font-size: clamp(2rem, 6vw, 3rem);
            margin-bottom: 1.5rem;
          }

          .terms-hero-subtitle {
            font-size: 1rem;
            margin-bottom: 2.5rem;
          }

          .terms-meta {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 1.5rem;
          }

          .terms-section {
            padding: 4rem 0;
          }

          .terms-section-title::before {
            display: none;
          }

          .terms-nav-list {
            grid-template-columns: 1fr;
          }

          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-logo-image {
            width: 180px;
            height: auto;
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
              <a href="/#inicio" className="nav-link">Inicio</a>
              <a href="/#servicios" className="nav-link">Servicios</a>
              <a href="/#proceso" className="nav-link">Proceso</a>
              <a href="/#nosotros" className="nav-link">Nosotros</a>
              <a href="/#clientes" className="nav-link">Clientes</a>
            </nav>

            <div className="nav-cta">
              <Link href="/por-que-nosotros" className="btn btn-secondary">
                ¿Por qué nosotros?
              </Link>
              <Link href="/consulta" className="btn btn-primary">
                Contactar
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

          <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="/#inicio" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Inicio</a>
              <a href="/#servicios" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
              <a href="/#proceso" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Proceso</a>
              <a href="/#nosotros" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Nosotros</a>
              <a href="/#clientes" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Clientes</a>
              <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Link href="/por-que-nosotros" className="btn btn-secondary">¿Por qué nosotros?</Link>
                <Link href="/consulta" className="btn btn-primary">Contactar</Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <section className="terms-hero">
        <div className="container">
          <div className="terms-hero-content">
            <div className="terms-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
              <span className="badge-text">Condiciones de Servicio</span>
            </div>

            <h1 className="terms-hero-title">
              Términos y <span className="terms-hero-gradient">Condiciones</span>
            </h1>

            <p className="terms-hero-subtitle">
              Bienvenido a Humanis México. Estos Términos y Condiciones regulan el uso de nuestros servicios de consultoría de talento y conexión entre candidatos, incluyendo becarios, y empresas.
            </p>

            <div className="terms-meta">
              <div className="terms-meta-item">
                <div className="terms-meta-label">Última Actualización</div>
                <div className="terms-meta-value">Enero 2025</div>
              </div>
              <div className="terms-meta-item">
                <div className="terms-meta-label">Jurisdicción</div>
                <div className="terms-meta-value">Ciudad de México</div>
              </div>
              <div className="terms-meta-item">
                <div className="terms-meta-label">Legislación</div>
                <div className="terms-meta-value">Código Civil Federal</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="terms-section">
        <div className="container">
          <div className="terms-content">
            <div className="terms-nav">
              <h3>Índice de Contenidos</h3>
              <ul className="terms-nav-list">
                <li className="terms-nav-item">
                  <a href="#aceptacion" className="terms-nav-link">Aceptación de los Términos</a>
                </li>
                <li className="terms-nav-item">
                  <a href="#servicios" className="terms-nav-link">Descripción de los Servicios</a>
                </li>
                <li className="terms-nav-item">
                  <a href="#obligaciones" className="terms-nav-link">Obligaciones del Usuario</a>
                </li>
                <li className="terms-nav-item">
                  <a href="#condiciones" className="terms-nav-link">Condiciones de los Servicios</a>
                </li>
                <li className="terms-nav-item">
                  <a href="#propiedad" className="terms-nav-link">Propiedad Intelectual</a>
                </li>
                <li className="terms-nav-item">
                  <a href="#uso-sitio" className="terms-nav-link">Uso del Sitio Web</a>
                </li>
                <li className="terms-nav-item">
                  <a href="#responsabilidad" className="terms-nav-link">Limitación de Responsabilidad</a>
                </li>
                <li className="terms-nav-item">
                  <a href="#privacidad" className="terms-nav-link">Privacidad y Protección de Datos</a>
                </li>
                <li className="terms-nav-item">
                  <a href="#modificaciones" className="terms-nav-link">Modificaciones a los Términos</a>
                </li>
                <li className="terms-nav-item">
                  <a href="#legislacion" className="terms-nav-link">Legislación Aplicable</a>
                </li>
                <li className="terms-nav-item">
                  <a href="#contacto" className="terms-nav-link">Contacto</a>
                </li>
              </ul>
            </div>

            <div id="aceptacion" className="terms-section-content">
              <h2 className="terms-section-title">Aceptación de los Términos</h2>
              <p className="terms-text">
                Al acceder a nuestro sitio web o utilizar nuestros servicios de conexión de talento, usted declara que ha leído, comprendido y aceptado estar sujeto a estos Términos y Condiciones, así como a nuestro <Link href="/privacidad" className="terms-link">Aviso de Privacidad</Link>. Si no está de acuerdo, le pedimos que no utilice nuestro sitio ni nuestros servicios.
              </p>
            </div>

            <div id="servicios" className="terms-section-content">
              <h2 className="terms-section-title">Descripción de los Servicios</h2>
              <p className="terms-text">
                Humanis México, S.A. de C.V., con domicilio en Av. Paseo de la Reforma 250, Piso 15, Col. Juárez, Ciudad de México, C.P. 06600, ofrece servicios de consultoría especializados en conectar candidatos (incluyendo estudiantes y recién egresados como becarios) con empresas para oportunidades laborales, prácticas profesionales y programas de talento joven. Nuestros servicios incluyen:
              </p>
              <ul className="terms-list">
                <li>Identificación y presentación de candidatos a empresas según sus necesidades de contratación.</li>
                <li>Gestión de procesos de selección, incluyendo revisión de currículums y entrevistas iniciales.</li>
                <li>Conexión con universidades para programas de becarios.</li>
                <li>Asesoramiento a empresas sobre perfiles de talento y tendencias del mercado laboral.</li>
              </ul>
              <p className="terms-text">
                No ofrecemos formación directa, mentorías ni planes de carrera, sino que actuamos como intermediarios entre candidatos y empresas.
              </p>
            </div>

            <div id="obligaciones" className="terms-section-content">
              <h2 className="terms-section-title">Obligaciones del Usuario</h2>
              <p className="terms-text">
                Al utilizar nuestros servicios, los usuarios (candidatos y empresas) se comprometen a:
              </p>
              <ul className="terms-list">
                <li><strong>Candidatos</strong>: Proporcionar información veraz y actualizada en sus currículums, perfiles y entrevistas. Los candidatos son responsables de la exactitud de sus datos y de obtener las autorizaciones necesarias para compartir referencias o información sensible.</li>
                <li><strong>Empresas</strong>: Especificar claramente los requisitos de las vacantes y cumplir con las leyes laborales mexicanas (Ley Federal del Trabajo, NOM-035) al contratar candidatos o becarios presentados por Humanis.</li>
                <li><strong>Ambos</strong>: Utilizar el sitio web y los servicios de manera lícita, respetando los derechos de terceros y absteniéndose de actividades que puedan dañar la plataforma o nuestra reputación.</li>
              </ul>
            </div>

            <div id="condiciones" className="terms-section-content">
              <h2 className="terms-section-title">Condiciones de los Servicios</h2>
              <p className="terms-text">
                Los servicios de Humanis están sujetos a las siguientes condiciones:
              </p>
              <ul className="terms-list">
                <li><strong>Disponibilidad</strong>: Nos esforzamos por conectar a los candidatos con oportunidades adecuadas, pero no garantizamos la contratación ni la satisfacción total de las expectativas, ya que la decisión final recae en las empresas y los candidatos.</li>
                <li><strong>Tarifas</strong>: Los servicios para empresas están sujetos a tarifas acordadas contractualmente, que pueden incluir comisiones por colocación (por ejemplo, 10-20% del salario del candidato). Los candidatos, incluidos becarios, no incurren en costos por utilizar nuestros servicios.</li>
                <li><strong>Garantía</strong>: Ofrecemos una garantía de reemplazo sin costo durante los primeros 90 días si el candidato seleccionado no cumple con las expectativas, sujeto a los términos del contrato con la empresa.</li>
                <li><strong>Limitaciones</strong>: No nos hacemos responsables de decisiones de contratación, conflictos laborales o incumplimientos entre candidatos y empresas tras la conexión inicial.</li>
              </ul>
            </div>

            <div id="propiedad" className="terms-section-content">
              <h2 className="terms-section-title">Propiedad Intelectual</h2>
              <p className="terms-text">
                Todo el contenido del sitio web humanis.com.mx, incluyendo logotipos, textos, diseños, imágenes y software, es propiedad de Humanis México o de sus licenciantes y está protegido por las leyes de propiedad intelectual de México (Ley Federal del Derecho de Autor). Los usuarios no pueden copiar, modificar, distribuir ni reproducir dicho contenido sin autorización previa por escrito.
              </p>
            </div>

            <div id="uso-sitio" className="terms-section-content">
              <h2 className="terms-section-title">Uso del Sitio Web</h2>
              <p className="terms-text">
                Los usuarios se comprometen a utilizar el sitio web de manera responsable y lícita. Está prohibido:
              </p>
              <ul className="terms-list">
                <li>Subir contenido falso, ofensivo o ilegal.</li>
                <li>Intentar acceder sin autorización a nuestros servidores o bases de datos.</li>
                <li>Utilizar el sitio para fines distintos a los establecidos (por ejemplo, spam o actividades comerciales no autorizadas).</li>
              </ul>
              <p className="terms-text">
                Nos reservamos el derecho de suspender o cancelar el acceso al sitio a usuarios que incumplan estas condiciones.
              </p>
            </div>

            <div id="responsabilidad" className="terms-section-content">
              <h2 className="terms-section-title">Limitación de Responsabilidad</h2>
              <p className="terms-text">
                Humanis México no será responsable por:
              </p>
              <ul className="terms-list">
                <li>Daños indirectos, consecuenciales o incidentales derivados del uso de nuestros servicios o del sitio web.</li>
                <li>Interrupciones en el sitio web debido a mantenimientos, fallos técnicos o causas de fuerza mayor.</li>
                <li>Decisiones de contratación o desempeño de los candidatos una vez conectados con las empresas.</li>
              </ul>
              <p className="terms-text">
                Nuestra responsabilidad se limita a lo estipulado en los contratos con las empresas clientes y a lo permitido por la legislación mexicana.
              </p>
            </div>

            <div id="privacidad" className="terms-section-content">
              <h2 className="terms-section-title">Privacidad y Protección de Datos</h2>
              <p className="terms-text">
                El tratamiento de datos personales se rige por nuestro <Link href="/privacidad" className="terms-link">Aviso de Privacidad</Link>. Al utilizar nuestros servicios, los usuarios aceptan que sus datos sean tratados conforme a dicho aviso, incluyendo la transferencia a empresas clientes para fines de reclutamiento, con su consentimiento previo.
              </p>
            </div>

            <div id="modificaciones" className="terms-section-content">
              <h2 className="terms-section-title">Modificaciones a los Términos</h2>
              <p className="terms-text">
                Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las actualizaciones serán publicadas en <Link href="/terminos" className="terms-link">humanis.com.mx/terminos</Link>, y los usuarios registrados serán notificados por correo electrónico en caso de cambios significativos. El uso continuado de nuestros servicios implica la aceptación de las modificaciones.
              </p>
            </div>

            <div id="legislacion" className="terms-section-content">
              <h2 className="terms-section-title">Legislación Aplicable y Jurisdicción</h2>
              <p className="terms-text">
                Estos Términos y Condiciones se rigen por las leyes de México, en particular el Código Civil Federal y la Ley Federal de Protección al Consumidor. Cualquier controversia será sometida a los tribunales competentes de la Ciudad de México, renunciando las partes a cualquier otro fuero.
              </p>
            </div>

            <div id="contacto" className="terms-section-content">
              <div className="terms-contact-box">
                <h3>¿Dudas sobre nuestros Términos y Condiciones?</h3>
                <p>
                  Para cualquier aclaración o consulta relacionada con estos Términos y Condiciones, nuestro equipo está disponible para asistirle de manera profesional y oportuna.
                </p>
                <div className="terms-contact-info">
                  <div className="terms-contact-item">
                    <strong>Email:</strong><br />
                    <a href="mailto:contacto@humanis.com.mx" style={{ color: 'white' }}>contacto@humanis.com.mx</a>
                  </div>
                  <div className="terms-contact-item">
                    <strong>Teléfono:</strong><br />
                    <a href="tel:+525544167974" style={{ color: 'white' }}>+52 (55) 4416-7974</a>
                  </div>
                  <div className="terms-contact-item">
                    <strong>Horario:</strong><br />
                    Lunes a viernes<br />9:00 - 18:00 hrs
                  </div>
                  <div className="terms-contact-item">
                    <strong>Domicilio:</strong><br />
                    Av. Paseo de la Reforma 250, Piso 15<br />Col. Juárez, CDMX 06600
                  </div>
                </div>
              </div>
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
                <li><a href="/#inicio" className="footer-link">Inicio</a></li>
                <li><a href="/#servicios" className="footer-link">Servicios</a></li>
                <li><a href="/#proceso" className="footer-link">Proceso</a></li>
                <li><a href="/#nosotros" className="footer-link">Nosotros</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Páginas</h4>
              <ul className="footer-links">
                <li><Link href="/consulta" className="footer-link">Consulta Gratuita</Link></li>
                <li><Link href="/por-que-nosotros" className="footer-link">¿Por qué Humanis?</Link></li>
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
                <li className="footer-link">
                  Av. Paseo de la Reforma 250<br />
                  Col. Juárez, CDMX 06600
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