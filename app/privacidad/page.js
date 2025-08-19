'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export default function PrivacyPage() {
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
    "name": "Aviso de Privacidad - Humanis México",
    "url": "https://humanis.com.mx/privacidad",
    "description": "Aviso de Privacidad de Humanis México, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
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
        <title>Aviso de Privacidad | Humanis México</title>
        <meta
          name="description"
          content="Conozca nuestro Aviso de Privacidad. En Humanis México protegemos sus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares."
        />
        <meta
          name="keywords"
          content="aviso de privacidad, humanis méxico, protección de datos, consultoría de talento, privacidad"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://humanis.com.mx/privacidad" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aviso de Privacidad | Humanis México" />
        <meta
          property="og:description"
          content="Aviso de Privacidad de Humanis México, garantizando la protección de sus datos personales."
        />
        <meta property="og:image" content="https://humanis.com.mx/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://humanis.com.mx/privacidad" />
        <meta property="og:site_name" content="Humanis México" />
        <meta property="og:locale" content="es_MX" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@humanismx" />
        <meta name="twitter:title" content="Aviso de Privacidad | Humanis México" />
        <meta
          name="twitter:description"
          content="Aviso de Privacidad de Humanis México, conforme a la Ley Federal de Protección de Datos."
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

        /* Hero Section */
        .privacy-hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          padding: 10rem 0 4rem; /* Aumentado padding-top de 8rem a 10rem */
          position: relative;
          overflow: hidden;
        }

        .privacy-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .privacy-hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .privacy-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 0.625rem 1.5rem;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 3rem; /* Aumentado de 2rem a 3rem */
        }

        .badge-text {
          color: white;
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: 0.5px;
        }

        .privacy-hero-title {
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-weight: 900;
          color: white;
          line-height: 1.1;
          margin-bottom: 2.5rem; /* Aumentado de 1.5rem a 2.5rem */
        }

        .privacy-hero-gradient {
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .privacy-hero-subtitle {
          font-size: 1.25rem;
          color: #cbd5e1;
          line-height: 1.8;
          margin-bottom: 4rem; /* Aumentado de 3rem a 4rem */
        }

        .privacy-meta {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2.5rem; /* Aumentado de 2rem a 2.5rem */
          padding: 2rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .privacy-meta-item {
          text-align: center;
        }

        .privacy-meta-label {
          color: #94a3b8;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }

        .privacy-meta-value {
          color: white;
          font-weight: 600;
          font-size: 1.125rem;
        }

        /* Privacy Content Section */
        .privacy-section {
          padding: 6rem 0;
          background: #ffffff;
        }

        .privacy-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .privacy-nav {
          background: #f8fafc;
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 4rem;
          border: 1px solid #e2e8f0;
        }

        .privacy-nav h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 1.5rem;
        }

        .privacy-nav-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 0.75rem;
          list-style: none;
        }

        .privacy-nav-item {
          padding: 0.75rem 1rem;
          background: white;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .privacy-nav-item:hover {
          border-color: #3b82f6;
          background: #f0f9ff;
        }

        .privacy-nav-link {
          color: #64748b;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.875rem;
        }

        .privacy-nav-item:hover .privacy-nav-link {
          color: #3b82f6;
        }

        .privacy-section-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 3px solid #3b82f6;
          position: relative;
        }

        .privacy-section-title::before {
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

        .privacy-content {
          counter-reset: section;
        }

        .privacy-text {
          color: #475569;
          line-height: 1.8;
          margin-bottom: 2rem;
          font-size: 1rem;
        }

        .privacy-text strong {
          color: #0f172a;
          font-weight: 600;
        }

        .privacy-list {
          list-style: none;
          margin-bottom: 2.5rem;
        }

        .privacy-list li {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.25rem;
          padding: 1rem;
          background: #f8fafc;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }

        .privacy-list li::before {
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

        .privacy-highlight {
          background: linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%);
          border: 1px solid #bfdbfe;
          border-radius: 12px;
          padding: 2rem;
          margin: 2rem 0;
        }

        .privacy-highlight h4 {
          color: #1e40af;
          font-weight: 700;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .privacy-highlight h4::before {
          content: '💡';
          font-size: 1.25rem;
        }

        .privacy-contact-box {
          background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
          color: white;
          border-radius: 16px;
          padding: 2.5rem;
          margin: 3rem 0;
          text-align: center;
        }

        .privacy-contact-box h3 {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .privacy-contact-box p {
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }

        .privacy-contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .privacy-contact-item {
          background: rgba(255, 255, 255, 0.1);
          padding: 1rem;
          border-radius: 8px;
          backdrop-filter: blur(10px);
        }

        .privacy-section-content {
          margin-bottom: 4rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .privacy-section-content:last-child {
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
          height: auto; /* Mantiene proporciones */
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
        .privacy-link {
          color: #3b82f6;
          text-decoration: none;
          font-weight: 600;
          border-bottom: 1px solid transparent;
          transition: border-color 0.3s ease;
        }

        .privacy-link:hover {
          border-bottom-color: #3b82f6;
        }

        @media (max-width: 768px) {
          .privacy-hero {
            padding: 7rem 0 3rem; /* Reducido de 10rem a 7rem en móviles */
          }

          .privacy-badge {
            margin-bottom: 2rem; /* Reducido de 3rem a 2rem en móviles */
          }

          .privacy-hero-title {
            font-size: clamp(2rem, 6vw, 3rem);
            margin-bottom: 1.5rem; /* Reducido de 2.5rem a 1.5rem */
          }

          .privacy-hero-subtitle {
            font-size: 1rem;
            margin-bottom: 2.5rem; /* Reducido de 4rem a 2.5rem */
          }

          .privacy-meta {
            grid-template-columns: 1fr; /* Apila en una columna en móviles */
            gap: 1.5rem; /* Reducido de 2.5rem a 1.5rem */
            padding: 1.5rem;
          }

          .privacy-section {
            padding: 4rem 0;
          }

          .privacy-section-title::before {
            display: none;
          }

          .privacy-nav-list {
            grid-template-columns: 1fr;
          }

          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-logo-image {
            width: 180px; /* Reducido en móviles para mejor ajuste */
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

      <section className="privacy-hero">
        <div className="container">
          <div className="privacy-hero-content">
            <div className="privacy-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
              <span className="badge-text">Protección de Datos</span>
            </div>

            <h1 className="privacy-hero-title">
              Aviso de <span className="privacy-hero-gradient">Privacidad</span> Integral
            </h1>

            <p className="privacy-hero-subtitle">
              En Humanis México protegemos sus datos personales con el más alto estándar de seguridad 
              y transparencia, cumpliendo estrictamente con la Ley Federal de Protección de Datos Personales.
            </p>

            <div className="privacy-meta">
              <div className="privacy-meta-item">
                <div className="privacy-meta-label">Última Actualización</div>
                <div className="privacy-meta-value">Enero 2025</div>
              </div>
              <div className="privacy-meta-item">
                <div className="privacy-meta-label">Marco Legal</div>
                <div className="privacy-meta-value">LFPDPPP</div>
              </div>
              <div className="privacy-meta-item">
                <div className="privacy-meta-label">Autoridad</div>
                <div className="privacy-meta-value">INAI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="container">
          <div className="privacy-content">
            <div className="privacy-nav">
              <h3>Índice de Contenidos</h3>
              <ul className="privacy-nav-list">
                <li className="privacy-nav-item">
                  <a href="#responsable" className="privacy-nav-link">Responsable del Tratamiento</a>
                </li>
                <li className="privacy-nav-item">
                  <a href="#datos-recolectados" className="privacy-nav-link">Datos que Recolectamos</a>
                </li>
                <li className="privacy-nav-item">
                  <a href="#finalidades" className="privacy-nav-link">Finalidades del Tratamiento</a>
                </li>
                <li className="privacy-nav-item">
                  <a href="#transferencias" className="privacy-nav-link">Transferencia de Datos</a>
                </li>
                <li className="privacy-nav-item">
                  <a href="#derechos-arco" className="privacy-nav-link">Derechos ARCO</a>
                </li>
                <li className="privacy-nav-item">
                  <a href="#seguridad" className="privacy-nav-link">Medidas de Seguridad</a>
                </li>
                <li className="privacy-nav-item">
                  <a href="#cookies" className="privacy-nav-link">Cookies y Tecnologías</a>
                </li>
                <li className="privacy-nav-item">
                  <a href="#conservacion" className="privacy-nav-link">Plazo de Conservación</a>
                </li>
                <li className="privacy-nav-item">
                  <a href="#cambios" className="privacy-nav-link">Cambios al Aviso</a>
                </li>
                <li className="privacy-nav-item">
                  <a href="#contacto" className="privacy-nav-link">Contacto</a>
                </li>
              </ul>
            </div>

            <div id="responsable" className="privacy-section-content">
              <h2 className="privacy-section-title">Identidad y Domicilio del Responsable</h2>
              <p className="privacy-text">
                <strong>Humanis México, S.A. de C.V.</strong>, con domicilio en Av. Paseo de la Reforma 250, Piso 15, Col. Juárez, Ciudad de México, C.P. 06600, es el responsable del tratamiento de sus datos personales. Nos especializamos en conectar candidatos, incluyendo estudiantes y recién egresados (becarios), con empresas que buscan talento, garantizando un manejo transparente y seguro de la información.
              </p>
            </div>

            <div id="datos-recolectados" className="privacy-section-content">
              <h2 className="privacy-section-title">Datos Personales que Recolectamos</h2>
              <p className="privacy-text">
                Para cumplir con nuestras finalidades de conectar talento con oportunidades laborales, podemos recolectar las siguientes categorías de datos personales:
              </p>
              <ul className="privacy-list">
                <li><strong>Datos de identificación:</strong> Nombre completo, correo electrónico, número telefónico, dirección particular, fecha de nacimiento, género (opcional, solo si es relevante para el proceso de selección).</li>
                <li><strong>Datos laborales:</strong> Currículum vitae, historial profesional, referencias laborales, certificaciones, habilidades técnicas y blandas, nivel educativo, institución de origen (en el caso de becarios).</li>
                <li><strong>Datos empresariales:</strong> Nombre de la empresa, cargo, dirección de la empresa, información de contacto profesional, necesidades de contratación, perfiles de vacantes.</li>
                <li><strong>Datos sensibles:</strong> En algunos casos, con su consentimiento expreso, podemos recolectar datos sensibles como información sobre discapacidades (si es relevante para adaptaciones laborales) o datos de salud relacionados con requisitos específicos de la vacante.</li>
                <li><strong>Datos de uso digital:</strong> Información recopilada automáticamente al usar nuestro sitio web (humanis.com.mx), como dirección IP, tipo de navegador, cookies, preferencias de navegación y datos de interacción con formularios.</li>
              </ul>

              <div className="privacy-highlight">
                <h4>Importante: Protección de Menores</h4>
                <p>No recolectamos datos personales de menores de edad sin el consentimiento de sus padres o tutores. En el caso de becarios menores de 18 años, solicitamos autorización expresa de un tutor legal.</p>
              </div>
            </div>

            <div id="finalidades" className="privacy-section-content">
              <h2 className="privacy-section-title">Finalidades del Tratamiento de Datos</h2>
              <p className="privacy-text">
                Los datos personales que recopilamos son utilizados para las siguientes <strong>finalidades primarias</strong>, esenciales para la prestación de nuestros servicios:
              </p>
              <ul className="privacy-list">
                <li>Facilitar la conexión entre candidatos (incluyendo becarios) y empresas para oportunidades laborales, incluyendo prácticas profesionales y empleos de nivel inicial o ejecutivo.</li>
                <li>Realizar procesos de selección, evaluación y filtrado de candidatos según los requerimientos de las empresas clientes.</li>
                <li>Elaborar perfiles de candidatos para presentarlos a empresas, incluyendo análisis de compatibilidad cultural y técnica.</li>
                <li>Gestionar comunicaciones con candidatos y empresas, como entrevistas, retroalimentación y seguimiento de procesos de contratación.</li>
                <li>Cumplir con obligaciones legales, contractuales y fiscales derivadas de nuestra actividad como consultoría de talento.</li>
              </ul>
              <p className="privacy-text">
                También utilizamos los datos para <strong>finalidades secundarias</strong>, siempre que contemos con su consentimiento:
              </p>
              <ul className="privacy-list">
                <li>Enviar boletines informativos, invitaciones a eventos de networking o actualizaciones sobre oportunidades laborales.</li>
                <li>Realizar análisis estadísticos y de mercado para mejorar nuestros servicios y entender las tendencias del talento en México.</li>
                <li>Personalizar la experiencia en nuestro sitio web, como mostrar vacantes relevantes según su perfil.</li>
              </ul>
              <p className="privacy-text">
                Si no desea que sus datos sean utilizados para finalidades secundarias, puede manifestar su oposición enviando un correo a <a href="mailto:contacto@humanis.com.mx" className="privacy-link">contacto@humanis.com.mx</a>.
              </p>
            </div>

            <div id="transferencias" className="privacy-section-content">
              <h2 className="privacy-section-title">Transferencia de Datos Personales</h2>
              <p className="privacy-text">
                Para cumplir con nuestras finalidades, sus datos personales pueden ser transferidos a:
              </p>
              <ul className="privacy-list">
                <li><strong>Empresas clientes:</strong> Compartimos datos de candidatos (como currículum y perfil profesional) con empresas interesadas en contratar talento, únicamente con el consentimiento expreso del candidato.</li>
                <li><strong>Universidades y socios educativos:</strong> En el caso de becarios, podemos compartir datos con instituciones educativas para validar información académica o gestionar programas de prácticas, siempre con autorización previa.</li>
                <li><strong>Proveedores de servicios:</strong> Podemos transferir datos a terceros que nos apoyen en la gestión de nuestra plataforma, como proveedores de hosting, CRM o herramientas de análisis, quienes están obligados a cumplir con esta política de privacidad.</li>
                <li><strong>Autoridades:</strong> En caso de requerimientos legales, compartiremos datos para cumplir con obligaciones fiscales, laborales o judiciales.</li>
              </ul>
              <div className="privacy-highlight">
                <h4>Protección en Transferencias</h4>
                <p>Toda transferencia de datos se realiza con medidas de seguridad adecuadas y, cuando se requiere consentimiento, se solicita de manera previa, expresa e informada. No transferimos datos a terceros para fines comerciales sin su autorización.</p>
              </div>
            </div>

            <div id="derechos-arco" className="privacy-section-content">
              <h2 className="privacy-section-title">Derechos ARCO</h2>
              <p className="privacy-text">
                De acuerdo con la LFPDPPP, usted tiene derecho a:
              </p>
              <ul className="privacy-list">
                <li><strong>Acceso:</strong> Conocer qué datos personales tenemos y cómo los utilizamos.</li>
                <li><strong>Rectificación:</strong> Corregir o actualizar sus datos si son inexactos o incompletos.</li>
                <li><strong>Cancelación:</strong> Solicitar la eliminación de sus datos de nuestra base, salvo que exista una obligación legal de conservarlos.</li>
                <li><strong>Oposición:</strong> Negarse al tratamiento de sus datos para finalidades específicas, como las secundarias mencionadas.</li>
              </ul>
              <p className="privacy-text">
                Para ejercer sus derechos ARCO, envíe una solicitud por escrito a <a href="mailto:contacto@humanis.com.mx" className="privacy-link">contacto@humanis.com.mx</a> o preséntela físicamente en nuestro domicilio. Su solicitud debe incluir:
              </p>
              <ul className="privacy-list">
                <li>Nombre completo y datos de contacto.</li>
                <li>Descripción clara del derecho que desea ejercer (Acceso, Rectificación, Cancelación u Oposición).</li>
                <li>Copia de una identificación oficial (INE, pasaporte o cédula profesional).</li>
                <li>En caso de rectificación, los documentos que acrediten los cambios solicitados.</li>
              </ul>
              <p className="privacy-text">
                Responderemos a su solicitud en un plazo máximo de <strong>20 días hábiles</strong>, comunicando la resolución a través del correo proporcionado. Si requiere un representante legal, este debe presentar un poder notarial simple.
              </p>
            </div>

            <div id="seguridad" className="privacy-section-content">
              <h2 className="privacy-section-title">Medidas de Seguridad</h2>
              <p className="privacy-text">
                En Humanis México implementamos medidas de seguridad técnicas, administrativas y físicas para proteger sus datos personales contra accesos no autorizados, pérdida, alteración o uso indebido:
              </p>
              <ul className="privacy-list">
                <li><strong>Técnicas:</strong> Encriptación SSL para nuestro sitio web, firewalls y sistemas de detección de intrusos.</li>
                <li><strong>Administrativas:</strong> Políticas internas de confidencialidad, capacitación de empleados y auditorías periódicas.</li>
                <li><strong>Físicas:</strong> Acceso restringido a servidores y archivos físicos, sistemas de vigilancia en nuestras oficinas.</li>
              </ul>
              <p className="privacy-text">
                En el caso de becarios, garantizamos que los datos compartidos con empresas o universidades estén protegidos mediante acuerdos de confidencialidad y cláusulas específicas en nuestros contratos.
              </p>
            </div>

            <div id="cookies" className="privacy-section-content">
              <h2 className="privacy-section-title">Uso de Cookies y Tecnologías Similares</h2>
              <p className="privacy-text">
                Nuestro sitio web (humanis.com.mx) utiliza cookies y tecnologías similares para mejorar su experiencia y analizar el uso de la plataforma. Estas incluyen:
              </p>
              <ul className="privacy-list">
                <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio, como la gestión de sesiones.</li>
                <li><strong>Cookies de análisis:</strong> Nos permiten medir el tráfico y comportamiento de los usuarios (por ejemplo, Google Analytics).</li>
                <li><strong>Cookies de personalización:</strong> Guardan preferencias como idioma o región.</li>
              </ul>
              <p className="privacy-text">
                Puede gestionar las cookies desde la configuración de su navegador. Al continuar navegando en nuestro sitio, acepta el uso de cookies esenciales. Para desactivar cookies no esenciales, contáctenos en <a href="mailto:contacto@humanis.com.mx" className="privacy-link">contacto@humanis.com.mx</a>.
              </p>
            </div>

            <div id="conservacion" className="privacy-section-content">
              <h2 className="privacy-section-title">Plazo de Conservación de los Datos</h2>
              <p className="privacy-text">
                Conservaremos sus datos personales únicamente durante el tiempo necesario para cumplir con las finalidades descritas o las obligaciones legales. Por ejemplo:
              </p>
              <ul className="privacy-list">
                <li><strong>Datos de candidatos:</strong> Hasta 2 años tras el último proceso de selección, salvo que el candidato solicite su eliminación antes.</li>
                <li><strong>Datos empresariales:</strong> Mientras dure la relación contractual con la empresa cliente, más 5 años para cumplir con obligaciones fiscales.</li>
                <li><strong>Datos de becarios:</strong> Durante el periodo de prácticas y hasta 1 año posterior, salvo autorización para mantenerlos en nuestra base.</li>
              </ul>
              <p className="privacy-text">
                Una vez concluido el plazo, los datos serán eliminados o anonimizados de forma segura.
              </p>
            </div>

            <div id="cambios" className="privacy-section-content">
              <h2 className="privacy-section-title">Cambios al Aviso de Privacidad</h2>
              <p className="privacy-text">
                Nos reservamos el derecho de actualizar este Aviso de Privacidad para reflejar cambios en nuestras prácticas o en la legislación aplicable. Las modificaciones serán publicadas en <Link href="/privacidad" className="privacy-link">humanis.com.mx/privacidad</Link> y, en caso de cambios significativos, notificaremos a los usuarios registrados por correo electrónico.
              </p>
            </div>

            <div id="contacto" className="privacy-section-content">
              <div className="privacy-contact-box">
                <h3>¿Necesita Ayuda con sus Datos Personales?</h3>
                <p>
                  Para cualquier duda, aclaración o ejercicio de derechos relacionados con este Aviso de Privacidad, 
                  nuestro equipo está disponible para asistirle de manera profesional y oportuna.
                </p>
                <div className="privacy-contact-info">
                  <div className="privacy-contact-item">
                    <strong>Email:</strong><br />
                    <a href="mailto:contacto@humanis.com.mx" style={{ color: 'white' }}>contacto@humanis.com.mx</a>
                  </div>
                  <div className="privacy-contact-item">
                    <strong>Teléfono:</strong><br />
                    <a href="tel:+525544167974" style={{ color: 'white' }}>+52 (55) 4416-7974</a>
                  </div>
                  <div className="privacy-contact-item">
                    <strong>Horario:</strong><br />
                    Lunes a viernes<br />9:00 - 18:00 hrs
                  </div>
                  <div className="privacy-contact-item">
                    <strong>Domicilio:</strong><br />
                    Av. Paseo de la Reforma 250, Piso 15<br />Col. Juárez, CDMX 06600
                  </div>
                </div>
              </div>
            </div>

            <div className="privacy-section-content">
              <h2 className="privacy-section-title">Autoridad de Protección de Datos</h2>
              <p className="privacy-text">
                Si considera que sus derechos de protección de datos han sido vulnerados, puede presentar una queja ante el <strong>Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI)</strong>. Para más información, visite <a href="https://www.inai.org.mx" className="privacy-link" target="_blank" rel="noopener noreferrer">www.inai.org.mx</a>.
              </p>
            </div>

            <div className="privacy-section-content">
              <h2 className="privacy-section-title">Consentimiento</h2>
              <p className="privacy-text">
                Al proporcionarnos sus datos personales a través de nuestro sitio web, formularios, correos electrónicos o cualquier otro medio, usted acepta las condiciones de este Aviso de Privacidad. Para datos sensibles o transferencias no esenciales, solicitaremos su consentimiento expreso por escrito o mediante medios electrónicos (como casillas de verificación en formularios).
              </p>
              <div className="privacy-highlight">
                <h4>Su Privacidad es Nuestra Prioridad</h4>
                <p>En Humanis México, su confianza es fundamental. Mantenemos los más altos estándares de protección de datos y transparencia en todos nuestros procesos.</p>
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