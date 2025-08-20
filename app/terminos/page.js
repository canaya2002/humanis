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
      setIsScrolled(window.scrollY > 10);
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
    "url": "https://humanis.com.mx/terminos-y-condiciones",
    "description": "Términos y Condiciones de Humanis México, que rigen el uso de nuestros servicios de consultoría de talento y conexión entre candidatos y empresas.",
    "publisher": {
      "@type": "Organization",
      "name": "Humanis México",
      "logo": {
        "@type": "ImageObject",
        "url": "https://humanis.com.mx/images/logohumanis.png"
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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Humanis México" />
        <link rel="canonical" href="https://humanis.com.mx/terminos-y-condiciones" />

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
        <meta property="og:url" content="https://humanis.com.mx/terminos-y-condiciones" />
        <meta property="og:site_name" content="Humanis México" />
        <meta property="og:locale" content="es_MX" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Términos y Condiciones | Humanis México" />
        <meta
          name="twitter:description"
          content="Términos y Condiciones de los servicios de consultoría de talento de Humanis México."
        />
        <meta name="twitter:image" content="https://humanis.com.mx/twitter-card.jpg" />

        {/* Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />

        {/* Preconnect */}
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

        /* Terms Hero Section */
        .terms-hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #3b82f6 100%);
          padding: 12rem 0 4rem; /* Aumentado de 7rem a 8rem para más espacio */
          position: relative;
          overflow: hidden;
        }

        .terms-hero::before {
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

        .terms-hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 900px;
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
          margin-bottom: 2.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .badge-text {
          color: white;
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .terms-hero-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 900;
          color: white;
          line-height: 1.1;
          margin-bottom: 2rem;
          letter-spacing: -0.03em;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .terms-hero-gradient {
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

        .terms-hero-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
          margin-bottom: 3rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .terms-meta {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          padding: 2.5rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 768px) {
          .terms-meta {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 2rem;
          }
        }

        .terms-meta-item {
          text-align: center;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .terms-meta-item:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.3);
          border-color: rgba(59, 130, 246, 0.5);
          background: rgba(255, 255, 255, 0.1);
        }

        .terms-meta-label {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .terms-meta-value {
          color: white;
          font-weight: 700;
          font-size: 1.125rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        /* Terms Content Section */
        .terms-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        }

        .terms-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .terms-nav {
          background: white;
          border-radius: 24px;
          padding: 3rem;
          margin-bottom: 4rem;
          border: 1px solid #e2e8f0;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
          position: relative;
          overflow: hidden;
        }

        .terms-nav::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
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

        .terms-nav h3 {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 2rem;
          text-align: center;
        }

        .terms-nav-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          list-style: none;
        }

        @media (max-width: 768px) {
          .terms-nav-list {
            grid-template-columns: 1fr;
          }
        }

        .terms-nav-item {
          padding: 1rem 1.5rem;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .terms-nav-item:hover {
          border-color: #3b82f6;
          background: #f0f9ff;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
        }

        .terms-nav-link {
          color: #64748b;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .terms-nav-item:hover .terms-nav-link {
          color: #3b82f6;
        }

        .terms-section-title {
          font-size: 2rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 3px solid #3b82f6;
          position: relative;
        }

        .terms-section-title::before {
          content: counter(section);
          counter-increment: section;
          position: absolute;
          left: -4rem;
          top: 0;
          width: 2.5rem;
          height: 2.5rem;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 1rem;
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
        }

        @media (max-width: 768px) {
          .terms-section-title::before {
            display: none;
          }
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
          font-weight: 700;
        }

        .terms-list {
          list-style: none;
          margin-bottom: 2.5rem;
        }

        .terms-list li {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding: 1.5rem;
          background: white;
          border-radius: 16px;
          border-left: 4px solid #3b82f6;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .terms-list li:hover {
          transform: translateX(8px);
          box-shadow: 0 8px 30px rgba(59, 130, 246, 0.15);
        }

        .terms-list li::before {
          content: '✓';
          color: #10b981;
          font-size: 1.25rem;
          font-weight: 900;
          flex-shrink: 0;
          width: 2rem;
          height: 2rem;
          background: #dcfce7;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2);
        }

        .terms-contact-box {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          color: white;
          border-radius: 24px;
          padding: 3rem;
          margin: 4rem 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .terms-contact-box::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .terms-contact-box h3 {
          font-size: 2rem;
          font-weight: 900;
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }

        .terms-contact-box p {
          margin-bottom: 2rem;
          opacity: 0.9;
          position: relative;
          z-index: 1;
          font-size: 1.125rem;
        }

        .terms-contact-info {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 2rem;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .terms-contact-info {
            grid-template-columns: 1fr;
          }
        }

        .terms-contact-item {
          background: rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          border-radius: 16px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .terms-contact-item:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }

        .terms-section-content {
          margin-bottom: 4rem;
          padding: 3rem;
          background: white;
          border-radius: 24px;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.06);
          border: 1px solid #f1f5f9;
          position: relative;
          overflow: hidden;
        }

        .terms-section-content::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(30%, -30%);
          pointer-events: none;
        }

        .terms-section-content:last-child {
          margin-bottom: 0;
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

        /* Link Styles */
        .terms-link {
          color: #3b82f6;
          text-decoration: none;
          font-weight: 600;
          border-bottom: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .terms-link:hover {
          border-bottom-color: #3b82f6;
          transform: translateX(2px);
        }

        @media (max-width: 768px) {
          .terms-hero {
            padding: 7rem 0 3rem;
          }

          .terms-section {
            padding: 4rem 0;
          }

          .terms-nav {
            padding: 2rem;
          }

          .terms-section-content {
            padding: 2rem;
          }

          .terms-contact-box {
            padding: 2rem;
          }

          .terms-contact-box h3 {
            font-size: 1.5rem;
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
              <Link href="/consulta" className="nav-link">
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
              <Link href="/consulta" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
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
        </div>
      </header>

      <section className="terms-hero">
        <div className="container">
          <div className="terms-hero-content">
            <div className="terms-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
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
                Al acceder a nuestro sitio web o utilizar nuestros servicios de conexión de talento, usted declara que ha leído, comprendido y aceptado estar sujeto a estos Términos y Condiciones, así como a nuestro <Link href="/aviso-de-privacidad" className="terms-link">Aviso de Privacidad</Link>. Si no está de acuerdo, le pedimos que no utilice nuestro sitio ni nuestros servicios.
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
                El tratamiento de datos personales se rige por nuestro <Link href="/aviso-de-privacidad" className="terms-link">Aviso de Privacidad</Link>. Al utilizar nuestros servicios, los usuarios aceptan que sus datos sean tratados conforme a dicho aviso, incluyendo la transferencia a empresas clientes para fines de reclutamiento, con su consentimiento previo.
              </p>
            </div>

            <div id="modificaciones" className="terms-section-content">
              <h2 className="terms-section-title">Modificaciones a los Términos</h2>
              <p className="terms-text">
                Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las actualizaciones serán publicadas en <Link href="/terminos-y-condiciones" className="terms-link">humanis.com.mx/terminos-y-condiciones</Link>, y los usuarios registrados serán notificados por correo electrónico en caso de cambios significativos. El uso continuado de nuestros servicios implica la aceptación de las modificaciones.
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
    </>
  );
}