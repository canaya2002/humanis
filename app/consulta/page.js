'use client';

import { useState, useEffect, useRef } from 'react';
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
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // FUNCIÓN ACTUALIZADA PARA ENVIAR A FORMSPREE
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Tu Form ID de Formspree
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
          // Campo adicional para identificar el formulario
          formulario: 'Consulta Executive Search - Humanis',
          fecha: new Date().toLocaleString('es-MX', { 
            timeZone: 'America/Mexico_City' 
          })
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
          mensaje: ''
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
      gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
      description: 'Habla directamente con un consultor especializado',
      bgColor: '#eff6ff'
    },
    {
      title: 'Email Corporativo',
      subtitle: 'Comunicación Formal',
      value: 'contacto@humanis.com.mx',
      icon: 'email',
      link: 'mailto:contacto@humanis.com.mx',
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
      description: 'Para propuestas y documentación oficial',
      bgColor: '#faf5ff'
    },
    {
      title: 'WhatsApp Business',
      subtitle: 'Respuesta Rápida',
      value: '+52 (55) 4416-7974',
      icon: 'whatsapp',
      link: 'https://wa.me/525544167974',
      gradient: 'linear-gradient(135deg, #059669, #10b981)',
      description: 'Chat directo con nuestro equipo comercial',
      bgColor: '#ecfdf5'
    }
  ];

  const offices = [
    {
      city: 'Ciudad de México',
      address: 'Av. Paseo de la Reforma 250, Piso 15',
      zone: 'Col. Juárez, CDMX 06600',
      phone: '+52 (55) 4416-7974',
      email: 'cdmx@humanis.com.mx',
      image: '/images/office-cdmx.jpg',
      mapUrl: 'https://maps.google.com'
    },
    {
      city: 'Guadalajara',
      address: 'Av. López Mateos Norte 2077',
      zone: 'Col. Italia Providencia, GDL 44648',
      phone: '+52 (33) 8765-4321',
      email: 'gdl@humanis.com.mx',
      image: '/images/office-guadalajara.jpg',
      mapUrl: 'https://maps.google.com'
    },
    {
      city: 'Monterrey',
      address: 'Ave. Constitución 1000, Torre A',
      zone: 'Col. Centro, MTY 64000',
      phone: '+52 (81) 5555-1234',
      email: 'mty@humanis.com.mx',
      image: '/images/office-monterrey.jpg',
      mapUrl: 'https://maps.google.com'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Consulta Inicial',
      description: 'Análisis profundo de necesidades y cultura organizacional',
      icon: 'consultation'
    },
    {
      number: '02',
      title: 'Propuesta Personalizada',
      description: 'Estrategia de búsqueda y timeline detallado',
      icon: 'proposal'
    },
    {
      number: '03',
      title: 'Búsqueda Activa',
      description: 'Activación de red y headhunting especializado',
      icon: 'search'
    },
    {
      number: '04',
      title: 'Integración Exitosa',
      description: 'Acompañamiento durante los primeros 6 meses',
      icon: 'success'
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Consulta Gratuita - Humanis México",
    "description": "Contacta a Humanis para una consulta gratuita sobre executive search y reclutamiento de talento ejecutivo en México.",
    "url": "https://humanis.com.mx/consulta",
    "mainEntity": {
      "@type": "Organization",
      "name": "Humanis México",
      "url": "https://humanis.com.mx",
      "logo": "https://humanis.com.mx/logo.svg",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+52-55-4416-7974",
          "contactType": "sales",
          "areaServed": "MX",
          "availableLanguage": ["Spanish", "English"],
          "contactOption": ["TollFree", "HearingImpairedSupported"]
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Paseo de la Reforma 250, Piso 15",
        "addressLocality": "Ciudad de México",
        "addressRegion": "CDMX",
        "postalCode": "06600",
        "addressCountry": "MX"
      }
    }
  };

  return (
    <>
      <Head>
        <title>Consulta Gratuita | Humanis - Executive Search México</title>
        <meta name="description" content="Agenda una consulta gratuita con Humanis. Especialistas en executive search y reclutamiento C-Level en México. Respuesta en 24 horas, sin compromiso." />
        <meta name="keywords" content="consulta reclutamiento, humanis contacto, executive search mexico, headhunting consulta, reclutamiento ejecutivo cdmx" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://humanis.com.mx/consulta" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Consulta Gratuita | Humanis Executive Search" />
        <meta property="og:description" content="Transforma tu organización con el talento ejecutivo adecuado. Consulta gratuita sin compromiso." />
        <meta property="og:image" content="https://humanis.com.mx/og-consulta.jpg" />
        <meta property="og:url" content="https://humanis.com.mx/consulta" />
        <meta property="og:site_name" content="Humanis México" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Consulta Gratuita - Humanis" />
        <meta name="twitter:description" content="Encuentra el talento ejecutivo ideal para tu empresa" />
        <meta name="twitter:image" content="https://humanis.com.mx/twitter-consulta.jpg" />
        
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

        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
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
          min-height: 90vh;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 12rem 0 6rem;
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

        /* Form Section */
        .form-card {
          background: white;
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
          margin-top: 2rem;
        }

        .form-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #a78bfa);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          font-weight: 600;
          color: #334155;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: 0.875rem 1.25rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: white;
          font-family: 'Inter', sans-serif;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }

        .form-textarea {
          min-height: 120px;
          resize: vertical;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Contact Methods - MEJORADO */
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .contact-card {
          background: white;
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          border: 2px solid transparent;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--card-gradient);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .contact-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.12);
          border-color: rgba(59, 130, 246, 0.1);
        }

        .contact-card:hover::before {
          transform: scaleX(1);
        }

        .contact-icon-wrapper {
          width: 80px;
          height: 80px;
          background: var(--card-bg);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          position: relative;
          transition: all 0.3s ease;
        }

        .contact-card:hover .contact-icon-wrapper {
          transform: scale(1.05);
        }

        .contact-icon {
          width: 40px;
          height: 40px;
          color: white;
          position: relative;
          z-index: 2;
        }

        .contact-icon-bg {
          position: absolute;
          inset: 8px;
          background: var(--card-gradient);
          border-radius: 12px;
          z-index: 1;
        }

        .contact-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.25rem;
        }

        .contact-subtitle {
          font-size: 0.9rem;
          color: #64748b;
          margin-bottom: 1.25rem;
          font-weight: 500;
        }

        .contact-value {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          display: block;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .contact-value:hover {
          transform: translateX(4px);
        }

        .contact-description {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .contact-action {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        /* Offices */
        .office-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .office-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .office-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12);
        }

        .office-image {
          width: 100%;
          height: 200px;
          position: relative;
          overflow: hidden;
        }

        .office-content {
          padding: 2rem;
        }

        .office-city {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 1rem;
        }

        .office-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .office-detail {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #64748b;
        }

        /* Process Steps */
        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          position: relative;
        }

        .process-line {
          position: absolute;
          top: 40px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #a78bfa);
          opacity: 0.2;
          z-index: 0;
        }

        .process-step {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .step-circle {
          width: 80px;
          height: 80px;
          background: white;
          border: 3px solid #3b82f6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-weight: 900;
          font-size: 1.5rem;
          color: #3b82f6;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease;
        }

        .process-step:hover .step-circle {
          transform: scale(1.1);
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.3);
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

        /* Success/Error Messages */
        .alert {
          padding: 1rem 1.5rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
          font-weight: 600;
          text-align: center;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .alert-success {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
        }

        .alert-error {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
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

        .cta-content {
          position: relative;
          z-index: 1;
          text-align: center;
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

        /* Responsive */
        @media (max-width: 768px) {
          .section {
            padding: 4rem 0;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .office-grid {
            grid-template-columns: 1fr;
          }

          .process-grid {
            grid-template-columns: 1fr;
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
              <Link href="/por-que-nosotros" className="nav-link">¿Por qué nosotros?</Link>
              <Link href="/consulta" className="nav-link active">Consulta</Link>
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
            <Link href="/por-que-nosotros" className="nav-link" onClick={() => setMobileMenuOpen(false)}>¿Por qué nosotros?</Link>
            <Link href="/consulta" className="nav-link active" onClick={() => setMobileMenuOpen(false)}>Consulta</Link>
            <div style={{ marginTop: '1rem' }}>
              <a href="tel:+525544167974" className="btn btn-primary" style={{ width: '100%' }}>Llamar Ahora</a>
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
                <span className="badge-text">Consulta Sin Compromiso</span>
              </div>

              <h1 className="hero-title">
                Comienza Tu Búsqueda de <span className="hero-gradient-text">Talento Ejecutivo</span>
              </h1>

              <p className="hero-description">
                Agenda una consulta gratuita con nuestros expertos en executive search. 
                Analizaremos tus necesidades y diseñaremos una estrategia personalizada 
                para encontrar el líder que transformará tu organización.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '3rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'white', marginBottom: '0.5rem' }}>24h</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Respuesta</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'white', marginBottom: '0.5rem' }}>100%</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Confidencial</div>
                </div>
              </div>
            </div>

            <div data-animate id="hero-form">
              <div className="form-card">
                <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0f172a', marginBottom: '2rem', textAlign: 'center' }}>
                  Solicita Tu Consulta Gratuita
                </h2>

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
                        <div style={{ width: '20px', height: '20px', border: '2px solid white', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Agendar Consulta Gratuita
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
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
                  '--card-gradient': method.gradient,
                  '--card-bg': method.bgColor
                }}
              >
                <div className="contact-icon-wrapper">
                  <div className="contact-icon-bg"></div>
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {method.icon === 'phone' && (
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                    )}
                    {method.icon === 'email' && (
                      <>
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </>
                    )}
                    {method.icon === 'whatsapp' && (
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    )}
                  </svg>
                </div>

                <h3 className="contact-title">{method.title}</h3>
                <p className="contact-subtitle">{method.subtitle}</p>
                
                <a 
                  href={method.link}
                  className="contact-value"
                  style={{ color: method.gradient.includes('3b82f6') ? '#3b82f6' : method.gradient.includes('8b5cf6') ? '#8b5cf6' : '#059669' }}
                >
                  {method.value}
                </a>
                
                <p className="contact-description">{method.description}</p>
                
                <a 
                  href={method.link}
                  className="contact-action"
                  style={{ 
                    background: method.bgColor,
                    color: method.gradient.includes('3b82f6') ? '#3b82f6' : method.gradient.includes('8b5cf6') ? '#8b5cf6' : '#059669'
                  }}
                >
                  {method.icon === 'phone' && 'Llamar Ahora'}
                  {method.icon === 'email' && 'Enviar Email'}
                  {method.icon === 'whatsapp' && 'Abrir WhatsApp'}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
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
            <span className="section-badge">Proceso</span>
            <h2 className="section-title">Cómo Trabajamos Contigo</h2>
            <p className="section-subtitle">
              Un proceso transparente y eficiente diseñado para maximizar resultados.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-line"></div>
            {processSteps.map((step, index) => (
              <div key={index} className="process-step" data-animate id={`process-${index}`}>
                <div className="step-circle">{step.number}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.75rem' }}>
                  {step.title}
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-pattern"></div>
        <div className="container">
          <div className="cta-content">
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', color: 'white', marginBottom: '1.5rem' }}>
              ¿Listo para Transformar tu Equipo Ejecutivo?
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
              No esperes más. Cada día sin el talento adecuado es una oportunidad perdida. 
              Comienza hoy con una consulta gratuita y sin compromiso.
            </p>
            <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="#hero-form"
                className="btn"
                style={{ background: 'white', color: '#1e40af', padding: '1rem 2rem' }}
              >
                Completar Formulario
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 7l10 10M17 7v10H7"/>
                </svg>
              </a>
              <a 
                href="tel:+525544167974"
                className="btn"
                style={{ border: '2px solid white', color: 'white', padding: '1rem 2rem' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72"></path>
                </svg>
                Llamar: (55) 4416-7974
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