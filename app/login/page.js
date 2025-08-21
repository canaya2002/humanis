// app/login/page.js
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const canvasRef = useRef(null);

  // Handle scroll for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set mounted state to ensure animations run after initial render
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.3
      };
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();

        for (let j = index + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animateParticles);
    };

    resizeCanvas();
    initParticles();
    animateParticles();

    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Por favor complete todos los campos');
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Error de login:', error);
      if (error.code === 'auth/user-not-found') {
        setError('Usuario no encontrado');
      } else if (error.code === 'auth/wrong-password') {
        setError('Contraseña incorrecta');
      } else if (error.code === 'auth/invalid-email') {
        setError('Email inválido');
      } else if (error.code === 'auth/invalid-credential') {
        setError('Credenciales inválidas');
      } else {
        setError('Error al iniciar sesión. Verifique sus credenciales.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Iniciar Sesión | Humanis México</title>
        <meta name="description" content="Acceda a su cuenta en Humanis México para gestionar su dashboard y empleados." />
        <meta name="keywords" content="login, humanis méxico, executive search, iniciar sesión" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
          justify-content: center;
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

        /* Login Section */
        .login-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 7rem 0 4rem;
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .login-section {
            padding: 6rem 0 3rem;
          }
        }

        .background-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .canvas-loaded {
          opacity: 1;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(248, 250, 252, 0.7) 0%, rgba(241, 245, 249, 0.7) 100%);
          z-index: 1;
        }

        .login-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.08);
          width: 100%;
          max-width: 400px;
          border: 2px solid transparent;
          background-clip: padding-box;
          position: relative;
          z-index: 2;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
        }

        .login-card.mounted {
          opacity: 1;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .login-card:hover {
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.12);
          border-color: rgba(59, 130, 246, 0.2);
        }

        @media (max-width: 768px) {
          .login-card {
            padding: 1.5rem;
            margin: 1rem;
            max-width: 95%;
            border-radius: 16px;
          }
        }

        .login-logo {
          display: block;
          margin: 0 auto 2rem;
          width: 140px;
          height: auto;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .login-logo.mounted {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .login-logo {
            width: 120px;
            margin-bottom: 1.5rem;
          }
        }

        .form-group {
          margin-bottom: 1.5rem;
          position: relative;
          opacity: 0;
          transition: opacity 0.5s ease 0.4s;
        }

        .form-group.mounted {
          opacity: 1;
        }

        .form-label {
          display: block;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .form-input {
          width: 100%;
          padding: 0.875rem 0.875rem 0.875rem 2.75rem;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 0.95rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: #f8fafc;
        }

        .form-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          background: white;
        }

        @media (max-width: 768px) {
          .form-input {
            padding: 0.75rem 0.75rem 0.75rem 2.5rem;
            font-size: 0.9rem;
          }
        }

        .form-icon {
          position: absolute;
          left: 0.875rem;
          top: 66.5%;
          transform: translateY(-50%);
          color: #6b7280;
          pointer-events: none;
          width: 18px;
          height: 18px;
        }

        @media (max-width: 768px) {
          .form-icon {
            left: 0.75rem;
            width: 16px;
            height: 16px;
          }
        }

        .error-message {
          color: #ef4444;
          text-align: center;
          margin-bottom: 1.5rem;
          font-weight: 500;
          background: #fef2f2;
          padding: 0.75rem;
          border-radius: 8px;
          border: 1px solid #fecaca;
          font-size: 0.875rem;
          animation: shake 0.3s ease;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }

        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          border: none;
          padding: 0.875rem;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          box-shadow: 0 4px 14px rgba(59, 130, 246, 0.35);
          opacity: 0;
          transition: opacity 0.5s ease 0.5s;
        }

        .submit-btn.mounted {
          opacity: 1;
        }

        .submit-btn:hover {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.45);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        @media (max-width: 768px) {
          .submit-btn {
            padding: 0.75rem;
            font-size: 0.9rem;
          }
        }

        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .password-help {
          text-align: center;
          margin-top: 1.5rem;
          color: #6b7280;
          font-size: 0.875rem;
          line-height: 1.5;
          opacity: 0;
          transition: opacity 0.5s ease 0.6s;
        }

        .password-help.mounted {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .password-help {
            font-size: 0.8rem;
            margin-top: 1rem;
          }
        }

        /* Footer */
        .footer {
          background: #ffffff;
          color: #1a1a1a;
          padding: 4rem 0 2rem;
          border-top: 1px solid #e5e7eb;
          position: relative;
          z-index: 2;
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
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Focus States */
        a:focus-visible,
        button:focus-visible,
        input:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
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

          .background-canvas {
            display: none;
          }
        }
      `}</style>

      <canvas ref={canvasRef} className={`background-canvas ${isMounted ? 'canvas-loaded' : ''}`} aria-hidden="true" />
      <div className="overlay" />

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
          </div>
        </div>
      </header>

      <main className="login-section">
        <div className={`login-card ${isMounted ? 'mounted' : ''}`}>
          <Image
            src="/images/logohumanis.png"
            alt="Humanis México"
            width={140}
            height={47}
            className={`login-logo ${isMounted ? 'mounted' : ''}`}
          />

          {error && (
            <div className="error-message">{error}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className={`form-group ${isMounted ? 'mounted' : ''}`}>
              <label htmlFor="email" className="form-label">
                Correo Electrónico
              </label>
              <svg
                className="form-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="su-correo@empresa.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                aria-label="Correo electrónico"
              />
            </div>

            <div className={`form-group ${isMounted ? 'mounted' : ''}`}>
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <svg
                className="form-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <circle cx="12" cy="16" r="1"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
                required
                aria-label="Contraseña"
              />
            </div>

            <button
              type="submit"
              className={`submit-btn ${isMounted ? 'mounted' : ''}`}
              disabled={isLoading}
              aria-label="Iniciar sesión"
            >
              {isLoading ? (
                <>
                  <span className="spinner"></span>
                  Iniciando...
                </>
              ) : (
                'Iniciar Sesión'
              )}
            </button>
          </form>

          <p className={`password-help ${isMounted ? 'mounted' : ''}`}>
            Si olvidó su contraseña, contacte a su asesor personal
          </p>
        </div>
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
                <a
                  href="https://www.linkedin.com/company/humanismx"
                  className="social-link"
                  aria-label="Síguenos en LinkedIn"
                  rel="noopener noreferrer"
                  target="_blank"
                >
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
              <Link href="/privacidad" className="footer-link">Aviso de Privacidad</Link>
              <Link href="/terminos" className="footer-link">Términos y Condiciones</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}