'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export default function ConsultaPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    empresa: '',
    cargo: '',
    email: '',
    telefono: '',
    empleados: '',
    necesidad: '',
    mensaje: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const parallaxElements = document.querySelectorAll('[data-parallax]');
      parallaxElements.forEach((el) => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mdkdvryw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          apellido: formData.apellido,
          empresa: formData.empresa,
          cargo: formData.cargo,
          email: formData.email,
          telefono: formData.telefono,
          empleados: formData.empleados,
          necesidad: formData.necesidad,
          mensaje: formData.mensaje,
          formulario: 'Consulta Executive Search - Humanis',
          fecha: new Date().toLocaleString('es-MX', {
            timeZone: 'America/Mexico_City',
          }),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nombre: '',
          apellido: '',
          empresa: '',
          cargo: '',
          email: '',
          telefono: '',
          empleados: '',
          necesidad: '',
          mensaje: '',
        });
        setTimeout(() => setSubmitStatus(''), 5000);
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      title: 'Llamada Directa',
      subtitle: 'Respuesta Inmediata',
      value: '+52 (55) 4416-7974',
      icon: 'phone',
      link: 'tel:+525544167974',
      gradient: 'from-blue-500 to-blue-600',
      description: 'Habla directamente con un consultor especializado',
      bgColor: '#eff6ff',
      actionText: 'Llamar Ahora',
    },
    {
      title: 'Email Corporativo',
      subtitle: 'Comunicación Formal',
      value: 'contacto@humanis.com.mx',
      icon: 'email',
      link: 'mailto:contacto@humanis.com.mx',
      gradient: 'from-indigo-500 to-purple-600',
      description: 'Para propuestas y documentación oficial',
      bgColor: '#faf5ff',
      actionText: 'Enviar Email',
    },
    {
      title: 'WhatsApp Business',
      subtitle: 'Respuesta Rápida',
      value: '+52 (55) 4416-7974',
      icon: 'whatsapp',
      link: 'https://wa.me/525544167974',
      gradient: 'from-emerald-500 to-teal-600',
      description: 'Chat directo con nuestro equipo comercial',
      bgColor: '#ecfdf5',
      actionText: 'Abrir WhatsApp',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Consulta Inicial',
      description: 'Análisis profundo de necesidades y cultura organizacional',
      icon: 'consultation',
    },
    {
      number: '02',
      title: 'Propuesta Personalizada',
      description: 'Estrategia de búsqueda y timeline detallado',
      icon: 'proposal',
    },
    {
      number: '03',
      title: 'Búsqueda Activa',
      description: 'Activación de red y headhunting especializado',
      icon: 'search',
    },
    {
      number: '04',
      title: 'Integración Exitosa',
      description: 'Acompañamiento durante los primeros 6 meses',
      icon: 'success',
    },
  ];

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Consulta Gratuita - Humanis México',
    description:
      'Contacta a Humanis para una consulta gratuita sobre executive search y reclutamiento de talento ejecutivo en México. Respuesta en 24 horas.',
    url: 'https://humanis.com.mx/consulta',
    mainEntity: {
      '@type': 'Organization',
      name: 'Humanis México',
      url: 'https://humanis.com.mx',
      logo: 'https://humanis.com.mx/images/logohumanis.png',
      foundingDate: '2019',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: 50,
      },
      award: [
        'Great Place to Work 2024',
        'ISO 9001:2015 Certified',
        'LinkedIn Talent Solutions Partner',
      ],
      member: [
        {
          '@type': 'Person',
          name: 'Ana Patricia Méndez',
          jobTitle: 'CEO & Fundadora',
        },
      ],
      sameAs: ['https://linkedin.com/company/humanis-mexico'],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '523',
        bestRating: '5',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+52-55-4416-7974',
        contactType: 'Customer Service',
        email: 'contacto@humanis.com.mx',
        areaServed: 'MX',
        availableLanguage: ['Spanish', 'English'],
      },
    },
  };

  return (
    <>
      <Head>
        <html lang="es-MX" />
        <title>Consulta Gratuita | Humanis - Executive Search México</title>
        <meta
          name="description"
          content="Agenda una consulta gratuita con Humanis. Especialistas en executive search y reclutamiento C-Level en México. Respuesta en 24 horas, sin compromiso."
        />
        <meta
          name="keywords"
          content="consulta reclutamiento, humanis contacto, executive search méxico, headhunting consulta, reclutamiento ejecutivo cdmx, talento ejecutivo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Humanis México" />
        <link rel="canonical" href="https://humanis.com.mx/consulta" />
        <link rel="alternate" hrefLang="es-MX" href="https://humanis.com.mx/consulta" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Consulta Gratuita | Humanis Executive Search" />
        <meta
          property="og:description"
          content="Transforma tu organización con el talento ejecutivo adecuado. Consulta gratuita sin compromiso con respuesta en 24 horas."
        />
        <meta property="og:image" content="https://humanis.com.mx/og-consulta.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Humanis México - Consulta Gratuita" />
        <meta property="og:url" content="https://humanis.com.mx/consulta" />
        <meta property="og:site_name" content="Humanis México" />
        <meta property="og:locale" content="es_MX" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Consulta Gratuita - Humanis México" />
        <meta
          name="twitter:description"
          content="Encuentra el talento ejecutivo ideal para tu empresa con nuestra consulta gratuita."
        />
        <meta name="twitter:image" content="https://humanis.com.mx/og-consulta.jpg" />
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
          padding: 1rem 0;
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

        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
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
          top: 96px;
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
          width: 8px;
          height: 8px;
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
            padding: 2rem;
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

        .stat-label {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Sections */
        .section {
          padding: 6rem 0;
          position: relative;
        }

        .section-alt {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
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
          font-size: clamp(2.25rem, 4vw, 3.5rem);
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: #64748b;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Enhanced Form Section */
        .form-card {
          background: white;
          border-radius: 32px;
          padding: 4rem;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(59, 130, 246, 0.05);
          position: relative;
          overflow: hidden;
          margin-top: 3rem;
          border: 1px solid rgba(226, 232, 240, 0.8);
        }

        .form-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
          background-size: 200% 100%;
          animation: gradientSlide 3s ease-in-out infinite;
        }

        @keyframes gradientSlide {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .form-card::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(30%, -30%);
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .form-card {
            padding: 2.5rem 2rem;
            border-radius: 24px;
          }
        }

        .form-group {
          margin-bottom: 2rem;
          position: relative;
        }

        .form-label {
          display: block;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.75rem;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          position: relative;
        }

        .form-label::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 30px;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
          border-radius: 1px;
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: 1rem 1.5rem;
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: #fafafa;
          font-family: 'Inter', sans-serif;
          position: relative;
          z-index: 1;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #94a3b8;
          font-weight: 400;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          background: white;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1), 0 8px 30px rgba(59, 130, 246, 0.08);
          transform: translateY(-2px);
        }

        .form-textarea {
          min-height: 140px;
          resize: vertical;
          line-height: 1.6;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        /* Enhanced Contact Methods */
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .contact-card {
          background: white;
          border-radius: 24px;
          padding: 2.5rem 2rem;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.06);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          border: 1px solid #f1f5f9;
          display: flex;
          flex-direction: column;
          min-height: 280px;
          overflow: hidden;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: var(--card-gradient);
          transform: scaleX(0);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .contact-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.12);
          border-color: rgba(59, 130, 246, 0.2);
        }

        .contact-card:hover::before {
          transform: scaleX(1);
        }

        .contact-icon-wrapper {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          box-shadow: 0 12px 35px rgba(59, 130, 246, 0.25);
          background: var(--card-gradient);
          position: relative;
          overflow: hidden;
        }

        .contact-icon-wrapper::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transform: rotate(45deg);
          animation: iconShimmer 2s ease-in-out infinite;
        }

        @keyframes iconShimmer {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          50%,
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        .contact-icon {
          width: 36px;
          height: 36px;
          color: white;
          position: relative;
          z-index: 1;
        }

        .contact-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        .contact-subtitle {
          font-size: 1rem;
          color: #64748b;
          margin-bottom: 1.5rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .contact-value {
          font-size: 1.375rem;
          font-weight: 800;
          margin-bottom: 1rem;
          display: block;
          text-decoration: none;
          transition: all 0.3s ease;
          color: var(--card-color);
          line-height: 1.3;
        }

        .contact-value:hover {
          transform: translateX(6px);
          text-decoration: underline;
          text-decoration-thickness: 2px;
        }

        .contact-description {
          font-size: 1rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 2rem;
          flex: 1;
        }

        .contact-action {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          border-radius: 16px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 0.95rem;
          background: var(--card-bg);
          color: var(--card-color);
          border: 2px solid transparent;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .contact-action:hover {
          background: var(--card-color);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
        }

        /* Enhanced Process Steps */
        .process-timeline {
          position: relative;
          margin-top: 5rem;
          padding: 3rem 0;
        }

        .process-line {
          position: absolute;
          top: 80px;
          left: 5%;
          right: 5%;
          height: 3px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            #e2e8f0 10%, 
            #3b82f6 30%, 
            #06b6d4 70%, 
            #e2e8f0 90%, 
            transparent 100%
          );
          opacity: 0.6;
          z-index: 0;
          border-radius: 2px;
        }

        @media (max-width: 1024px) {
          .process-line {
            display: none;
          }
        }

        .process-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          position: relative;
          z-index: 1;
          align-items: stretch;
        }

        @media (max-width: 1024px) {
          .process-steps {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (max-width: 640px) {
          .process-steps {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .process-step {
          text-align: center;
          position: relative;
          background: white;
          border-radius: 20px;
          padding: 2.5rem 1.5rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #f1f5f9;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 300px;
          overflow: hidden;
        }

        .process-step::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(59, 130, 246, 0.02) 0%, 
            rgba(6, 182, 212, 0.02) 50%, 
            rgba(139, 92, 246, 0.02) 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .process-step:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 25px 70px rgba(59, 130, 246, 0.15);
          border-color: rgba(59, 130, 246, 0.2);
        }

        .process-step:hover::before {
          opacity: 1;
        }

        .step-circle {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
          border: 4px solid #93c5fd;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          font-weight: 900;
          font-size: 1.5rem;
          color: #1e40af;
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.25);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .step-circle::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transform: rotate(45deg);
          animation: stepShimmer 3s ease-in-out infinite;
        }

        @keyframes stepShimmer {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          50%,
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        .process-step:hover .step-circle {
          transform: scale(1.15) rotate(5deg);
          border-color: #3b82f6;
          background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
          color: white;
          box-shadow: 0 20px 50px rgba(59, 130, 246, 0.4);
        }

        .step-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 1.25rem;
          line-height: 1.3;
        }

        .step-description {
          color: #64748b;
          line-height: 1.7;
          font-size: 1rem;
          flex: 1;
          display: flex;
          align-items: center;
        }

        /* CTA Section */
        .cta-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          position: relative;
          overflow: hidden;
        }

        .cta-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .cta-content {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .cta-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 900;
          color: white;
          margin-bottom: 1.5rem;
        }

        .cta-description {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 3rem;
          line-height: 1.8;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
          justify-content: center;
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

        /* Alerts */
        .alert {
          padding: 1.25rem 2rem;
          border-radius: 16px;
          margin-bottom: 2rem;
          font-weight: 600;
          text-align: center;
          animation: slideDown 0.3s ease;
          border: 1px solid;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .alert-success {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          border-color: #059669;
          box-shadow: 0 8px 30px rgba(16, 185, 129, 0.2);
        }

        .alert-error {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          border-color: #dc2626;
          box-shadow: 0 8px 30px rgba(239, 68, 68, 0.2);
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Footer */
        .footer {
          background: #ffffff;
          color: #1a1a1a;
          padding: 4rem 0 2rem;
          border-top: 1px solid #e5e7eb;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
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

        .footer-copyright {
          color: #6b7280;
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

        .in-view {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.25rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .process-steps {
            grid-template-columns: 1fr;
          }

          .stat-value {
            font-size: 2.25rem;
          }

          .contact-card {
            padding: 2rem;
          }

          .process-step {
            padding: 2rem 1.5rem;
          }
        }

        /* Focus states */
        a:focus-visible,
        button:focus-visible,
        input:focus-visible,
        select:focus-visible,
        textarea:focus-visible {
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
              <Link href="/" className="nav-link">
                Inicio
              </Link>
              <Link href="/#servicios" className="nav-link">
                Servicios
              </Link>
              <Link href="/#proceso" className="nav-link">
                Proceso
              </Link>
              <Link href="/por-que-nosotros" className="nav-link">
                ¿Por qué nosotros?
              </Link>
              <Link href="/consulta" className="nav-link active">
                Consulta
              </Link>
            </nav>

            <div className="nav-cta">
              <a href="tel:+525544167974" className="btn btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                </svg>
                Llamar Ahora
              </a>
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
            <Link href="/por-que-nosotros" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              ¿Por qué nosotros?
            </Link>
            <Link href="/consulta" className="nav-link active" onClick={() => setMobileMenuOpen(false)}>
              Consulta
            </Link>
            <div style={{ marginTop: '1rem' }}>
              <a
                href="tel:+525544167974"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Llamar Ahora
              </a>
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
                  <span className="badge-text">Consulta Sin Compromiso</span>
                </div>

                <h1 className="hero-title">
                  Comienza Tu Búsqueda de <span className="hero-gradient-text">Talento Ejecutivo</span>
                </h1>

                <p className="hero-description">
                  Agenda una consulta gratuita con nuestros expertos en executive search. Analizaremos tus necesidades y
                  diseñaremos una estrategia personalizada para encontrar el líder que transformará tu organización.
                </p>

                <div className="hero-buttons">
                  <a href="#hero-form" className="btn btn-primary" style={{ background: 'white', color: '#1e40af' }}>
                    Completar Formulario
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a href="tel:+525544167974" className="btn btn-secondary">
                    Llamar Ahora
                  </a>
                </div>
              </div>

              <div className="hero-stats-container" data-animate id="hero-stats">
                <div className="hero-stats">
                  <div className="stat-card">
                    <div className="stat-value">24h</div>
                    <div className="stat-label">Respuesta</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-value">100%</div>
                    <div className="stat-label">Confidencial</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="formulario" className="section section-alt">
          <div className="container">
            <div className="section-header" data-animate id="form-header">
              <span className="section-badge">Consulta Gratuita</span>
              <h2 className="section-title">Solicita Tu Consulta</h2>
              <p className="section-subtitle">
                Completa el formulario y nuestro equipo te contactará en menos de 24 horas para discutir tus necesidades de talento.
              </p>
            </div>

            <div className="form-card" data-animate id="hero-form">
              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  ¡Consulta agendada exitosamente! Te contactaremos en las próximas 24 horas.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="alert alert-error">
                  Error al enviar el formulario. Por favor intenta nuevamente.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Nombre *</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Juan"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Apellido *</label>
                    <input
                      type="text"
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Pérez"
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Empresa *</label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Cargo *</label>
                    <input
                      type="text"
                      name="cargo"
                      value={formData.cargo}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Director de RRHH"
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Email Corporativo *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="juan@empresa.com"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Teléfono *</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="+52 55 1234 5678"
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Número de Empleados</label>
                    <select
                      name="empleados"
                      value={formData.empleados}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Selecciona</option>
                      <option value="1-50">1-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="501-1000">501-1000</option>
                      <option value="1000+">Más de 1000</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Necesidad Principal</label>
                    <select
                      name="necesidad"
                      value={formData.necesidad}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Selecciona tu necesidad</option>
                      <optgroup label="C-Level / Alta Dirección">
                        <option value="ceo">CEO / Director General</option>
                        <option value="coo">COO / Director de Operaciones</option>
                        <option value="cfo">CFO / Director Financiero</option>
                        <option value="cto">CTO / Director de Tecnología</option>
                        <option value="cmo">CMO / Director de Marketing</option>
                        <option value="chro">CHRO / Director de RRHH</option>
                        <option value="cso">CSO / Director de Estrategia</option>
                        <option value="cio">CIO / Director de Sistemas</option>
                        <option value="cdo">CDO / Director Digital</option>
                        <option value="cpo">CPO / Director de Producto</option>
                        <option value="clo">CLO / Director Legal</option>
                        <option value="cro">CRO / Director de Ingresos</option>
                      </optgroup>
                      <optgroup label="VP / Vicepresidencias">
                        <option value="vp-ventas">VP de Ventas</option>
                        <option value="vp-marketing">VP de Marketing</option>
                        <option value="vp-operaciones">VP de Operaciones</option>
                        <option value="vp-finanzas">VP de Finanzas</option>
                        <option value="vp-rrhh">VP de Recursos Humanos</option>
                        <option value="vp-tecnologia">VP de Tecnología</option>
                        <option value="vp-desarrollo">VP de Desarrollo</option>
                        <option value="vp-comercial">VP Comercial</option>
                      </optgroup>
                      <optgroup label="Directores / Gerentes">
                        <option value="director-ventas">Director de Ventas</option>
                        <option value="director-marketing">Director de Marketing</option>
                        <option value="director-operaciones">Director de Operaciones</option>
                        <option value="director-finanzas">Director de Finanzas</option>
                        <option value="director-rrhh">Director de RRHH</option>
                        <option value="director-it">Director de IT</option>
                        <option value="director-supply">Director de Supply Chain</option>
                        <option value="director-calidad">Director de Calidad</option>
                        <option value="director-comercial">Director Comercial</option>
                        <option value="director-produccion">Director de Producción</option>
                        <option value="director-planta">Director de Planta</option>
                        <option value="director-regional">Director Regional</option>
                      </optgroup>
                      <optgroup label="Gerencias Especializadas">
                        <option value="gerente-general">Gerente General</option>
                        <option value="gerente-ventas">Gerente de Ventas</option>
                        <option value="gerente-marketing">Gerente de Marketing</option>
                        <option value="gerente-operaciones">Gerente de Operaciones</option>
                        <option value="gerente-finanzas">Gerente de Finanzas</option>
                        <option value="gerente-rrhh">Gerente de RRHH</option>
                        <option value="gerente-it">Gerente de IT</option>
                        <option value="gerente-logistica">Gerente de Logística</option>
                        <option value="gerente-calidad">Gerente de Calidad</option>
                        <option value="gerente-compras">Gerente de Compras</option>
                        <option value="gerente-proyecto">Gerente de Proyectos</option>
                        <option value="gerente-producto">Gerente de Producto</option>
                      </optgroup>
                      <optgroup label="Posiciones Técnicas Senior">
                        <option value="cto-startup">CTO para Startup</option>
                        <option value="lead-developer">Lead Developer</option>
                        <option value="arquitecto-software">Arquitecto de Software</option>
                        <option value="data-scientist">Data Scientist Senior</option>
                        <option value="cybersecurity">Director de Ciberseguridad</option>
                        <option value="devops-lead">DevOps Lead</option>
                        <option value="ai-lead">AI/ML Lead</option>
                      </optgroup>
                      <optgroup label="Posiciones Especializadas">
                        <option value="head-sales">Head of Sales</option>
                        <option value="head-marketing">Head of Marketing</option>
                        <option value="head-growth">Head of Growth</option>
                        <option value="head-people">Head of People</option>
                        <option value="country-manager">Country Manager</option>
                        <option value="plant-manager">Plant Manager</option>
                        <option value="regional-manager">Regional Manager</option>
                        <option value="business-development">Director de Desarrollo de Negocios</option>
                      </optgroup>
                      <optgroup label="Consultoría Organizacional">
                        <option value="transformacion-digital">Transformación Digital</option>
                        <option value="reestructuracion">Reestructuración Organizacional</option>
                        <option value="expansion">Expansión de Negocio</option>
                        <option value="merger-acquisition">Merger & Acquisition</option>
                        <option value="turnaround">Turnaround Management</option>
                        <option value="startup-team">Equipo Fundacional Startup</option>
                      </optgroup>
                      <optgroup label="Otros">
                        <option value="consejo-administracion">Miembro del Consejo</option>
                        <option value="consultoria-personalizada">Consultoría Personalizada</option>
                        <option value="multiple-posiciones">Múltiples Posiciones</option>
                        <option value="otro">Otra Necesidad</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Mensaje (Opcional)</label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Cuéntanos más sobre tus necesidades de talento ejecutivo..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          border: '2px solid white',
                          borderTopColor: 'transparent',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite',
                        }}
                      ></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Agendar Consulta Gratuita
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header" data-animate id="contact-header">
              <span className="section-badge">Contacto Directo</span>
              <h2 className="section-title">Múltiples Canales de Comunicación</h2>
              <p className="section-subtitle">
                Elige el método que prefieras para iniciar una conversación con nuestro equipo de expertos.
              </p>
            </div>

            <div className="contact-grid">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="contact-card"
                  data-animate
                  id={`contact-${index}`}
                  style={{
                    '--card-gradient': method.icon === 'phone' 
                      ? 'linear-gradient(135deg, #3b82f6, #2563eb)' 
                      : method.icon === 'email' 
                      ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' 
                      : 'linear-gradient(135deg, #10b981, #059669)',
                    '--card-color': method.icon === 'phone' 
                      ? '#3b82f6' 
                      : method.icon === 'email' 
                      ? '#6366f1' 
                      : '#10b981',
                    '--card-bg': method.bgColor,
                  }}
                >
                  <div className="contact-icon-wrapper">
                    {method.icon === 'phone' && (
                      <svg
                        className="contact-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    )}
                    {method.icon === 'email' && (
                      <svg
                        className="contact-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    )}
                    {method.icon === 'whatsapp' && (
                      <svg
                        className="contact-icon"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    )}
                  </div>

                  <h3 className="contact-title">{method.title}</h3>
                  <p className="contact-subtitle">{method.subtitle}</p>
                  <a href={method.link} className="contact-value">
                    {method.value}
                  </a>
                  <p className="contact-description">{method.description}</p>
                  <a href={method.link} className="contact-action">
                    {method.actionText}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-header" data-animate id="process-header">
              <span className="section-badge">Nuestro Proceso</span>
              <h2 className="section-title">Cómo Trabajamos</h2>
              <p className="section-subtitle">
                Un proceso estructurado y personalizado para garantizar el éxito en la búsqueda de talento ejecutivo.
              </p>
            </div>

            <div className="process-timeline" data-animate id="process-timeline">
              <div className="process-line"></div>
              <div className="process-steps">
                {processSteps.map((step, index) => (
                  <div key={index} className="process-step" data-animate id={`step-${index}`}>
                    <div className="step-circle">{step.number}</div>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-pattern"></div>
          <div className="container">
            <div className="cta-content" data-animate id="cta-content">
              <h2 className="cta-title">¿Listo para Transformar Tu Equipo Ejecutivo?</h2>
              <p className="cta-description">
                Agenda una consulta gratuita con Humanis y descubre cómo nuestro enfoque personalizado puede ayudarte a
                encontrar el talento que llevará tu organización al siguiente nivel.
              </p>
              <div className="cta-buttons">
                <a href="#formulario" className="btn btn-white">
                  Agendar Consulta
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="https://wa.me/525544167974" className="btn btn-outline-white">
                  Contactar por WhatsApp
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand">
                <Link href="/" className="footer-logo">
                  <Image
                    src="/images/logohumanis.png"
                    alt="Humanis México - Executive Search"
                    width={240}
                    height={80}
                    className="footer-logo-image"
                  />
                </Link>
                <p className="footer-description">
                  Humanis es líder en executive search en México, especializado en conectar empresas con talento C-Level
                  excepcional. Transformamos organizaciones a través de líderes visionarios.
                </p>
                <div className="footer-social">
                  <a
                    href="https://linkedin.com/company/humanis-mexico"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="footer-column">
                <h4>Enlaces Rápidos</h4>
                <ul className="footer-links">
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
                    <Link href="/por-que-nosotros" className="footer-link">
                      ¿Por Qué Nosotros?
                    </Link>
                  </li>
                  <li>
                    <Link href="/consulta" className="footer-link">
                      Consulta
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
                  <li>
                    <a href="https://wa.me/525544167974" className="footer-link">
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <p className="footer-copyright">
                &copy; {new Date().getFullYear()} Humanis México. Todos los derechos reservados.
              </p>
              <div className="footer-legal">
                <Link href="/aviso-de-privacidad" className="footer-link">
                  Aviso de Privacidad
                </Link>
                <Link href="/terminos-y-condiciones" className="footer-link">
                  Términos y Condiciones
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}