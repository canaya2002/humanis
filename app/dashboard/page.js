// app/dashboard/page.js
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [empleados, setEmpleados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingEmpleados, setLoadingEmpleados] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const canvasRef = useRef(null);

  // Handle scroll for header effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set mounted state for animations
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Particle animation background
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
        size: Math.random() * 2 + 0.5,
        speedX: Math.random() * 0.3 - 0.15,
        speedY: Math.random() * 0.3 - 0.15,
        opacity: Math.random() * 0.3 + 0.2
      };
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 12000);
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
          if (distance < 80) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - distance / 80)})`;
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
        cargarEmpleados(authUser.email);
      } else {
        window.location.href = '/login';
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const cargarEmpleados = async (correoUsuario) => {
    setLoadingEmpleados(true);
    try {
      const clientesSnapshot = await getDocs(collection(db, 'clientes'));
      let empleadosEncontrados = [];

      for (const clienteDoc of clientesSnapshot.docs) {
        const usuariosRef = collection(db, 'clientes', clienteDoc.id, 'usuarios');
        const q = query(usuariosRef, where('correo', '==', correoUsuario));
        const usuariosSnapshot = await getDocs(q);

        usuariosSnapshot.forEach((doc) => {
          empleadosEncontrados.push({
            id: doc.id,
            cliente: clienteDoc.id,
            ...doc.data()
          });
        });
      }

      setEmpleados(empleadosEncontrados);
    } catch (error) {
      console.error('Error cargando empleados:', error);
    } finally {
      setLoadingEmpleados(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = '/login';
    } catch (error) {
      console.error('Error cerrando sesión:', error);
    }
  };

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Inter, sans-serif',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '2rem 3rem',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <div style={{
            width: '24px',
            height: '24px',
            border: '3px solid rgba(255, 255, 255, 0.3)',
            borderTop: '3px solid white',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
          Cargando...
        </div>
      </div>
    );
  }

  return (
    <>
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
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          overflow-x: hidden;
          min-height: 100vh;
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

        /* Animation Keyframes */
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        /* Layout */
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Background Canvas */
        .background-canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          opacity: 0;
          transition: opacity 1s ease;
        }

        .canvas-loaded {
          opacity: 1;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(248, 250, 252, 0.8) 0%, rgba(226, 232, 240, 0.8) 100%);
          z-index: 1;
          pointer-events: none;
        }

        /* Header */
        .header {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 1rem 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-image {
          height: 60px;
          width: auto;
          transition: transform 0.3s ease;
        }

        .logo-image:hover {
          transform: scale(1.05);
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          background: rgba(59, 130, 246, 0.1);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          backdrop-filter: blur(10px);
        }

        .user-email {
          font-weight: 600;
          color: #475569;
          font-size: 0.9rem;
        }

        .logout-btn {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 0.875rem;
          box-shadow: 0 4px 14px rgba(239, 68, 68, 0.3);
        }

        .logout-btn:hover {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4);
        }

        /* Main Content */
        .main-content {
          padding: 3rem 0;
          position: relative;
          z-index: 2;
        }

        .dashboard-title {
          font-size: 3.5rem;
          font-weight: 900;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #1e293b, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: center;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 2.5rem;
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .stat-card:nth-child(1) {
          animation-delay: 0.3s;
        }

        .stat-card:nth-child(2) {
          animation-delay: 0.4s;
        }

        .stat-card:nth-child(3) {
          animation-delay: 0.5s;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.25);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .stat-card:hover::before {
          opacity: 1;
        }

        .stat-value {
          font-size: 3rem;
          font-weight: 900;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          display: block;
        }

        .stat-label {
          color: #64748b;
          font-weight: 600;
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Employees Section */
        .empleados-section {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 3rem;
          border-radius: 32px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.6s forwards;
        }

        .empleados-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4, #10b981);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 2.5rem;
          background: linear-gradient(135deg, #1e293b, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: center;
        }

        /* Employee Grid */
        .empleados-grid {
          display: grid;
          gap: 1.5rem;
        }

        .empleado-card {
          background: rgba(248, 250, 252, 0.8);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid rgba(226, 232, 240, 0.8);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .empleado-card:nth-child(odd) {
          animation-delay: 0.7s;
        }

        .empleado-card:nth-child(even) {
          animation-delay: 0.8s;
        }

        .empleado-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, #3b82f6, #8b5cf6);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .empleado-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(59, 130, 246, 0.15);
          background: rgba(255, 255, 255, 0.95);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .empleado-card:hover::before {
          opacity: 1;
        }

        .empleado-nombre {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
        }

        .empleado-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .empleado-correo {
          color: #64748b;
          font-size: 1rem;
          font-weight: 500;
        }

        .cliente-info {
          font-size: 0.875rem;
          color: #94a3b8;
          margin-top: 0.5rem;
          font-weight: 500;
        }

        .empleado-nomina {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          padding: 0.6rem 1.2rem;
          border-radius: 25px;
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 14px rgba(59, 130, 246, 0.3);
          transition: all 0.3s ease;
        }

        .empleado-nomina:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
        }

        /* Loading States */
        .loading-message {
          text-align: center;
          padding: 4rem;
          color: #64748b;
          font-size: 1.2rem;
          font-weight: 500;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid rgba(59, 130, 246, 0.2);
          border-top: 4px solid #3b82f6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 1rem;
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 4rem;
          color: #64748b;
        }

        .empty-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          opacity: 0.7;
        }

        .empty-state h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #475569;
          margin-bottom: 0.5rem;
        }

        .empty-state p {
          font-size: 1.1rem;
          color: #64748b;
          max-width: 400px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }

          .header-content {
            flex-direction: column;
            gap: 1rem;
          }

          .user-info {
            flex-direction: column;
            text-align: center;
            padding: 1rem 1.5rem;
          }

          .dashboard-title {
            font-size: 2.5rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .stat-card {
            padding: 2rem;
          }

          .stat-value {
            font-size: 2.5rem;
          }

          .empleados-section {
            padding: 2rem;
            margin: 1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .empleado-info {
            flex-direction: column;
            align-items: flex-start;
          }

          .empleado-nomina {
            align-self: flex-end;
          }
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

      <canvas 
        ref={canvasRef} 
        className={`background-canvas ${isMounted ? 'canvas-loaded' : ''}`} 
        aria-hidden="true" 
      />
      <div className="overlay" />

      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <Link href="/">
              <Image 
                src="/images/logohumanis.png"
                alt="Humanis México"
                width={180}
                height={60}
                className="logo-image"
                priority
              />
            </Link>
            
            <div className="user-info">
              <span className="user-email">{user?.email}</span>
              <button onClick={handleLogout} className="logout-btn">
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <h1 className="dashboard-title">Dashboard Ejecutivo</h1>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">{empleados.length}</div>
              <div className="stat-label">Empleados Registrados</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-value">
                {new Set(empleados.map(emp => emp.cliente)).size}
              </div>
              <div className="stat-label">Clientes Asociados</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-value">
                {empleados.filter(emp => emp.nomina).length}
              </div>
              <div className="stat-label">Con Nómina Activa</div>
            </div>
          </div>

          <div className="empleados-section">
            <h2 className="section-title">Gestión de Empleados</h2>
            
            {loadingEmpleados ? (
              <div className="loading-message">
                <div className="loading-spinner"></div>
                Cargando información de empleados...
              </div>
            ) : empleados.length > 0 ? (
              <div className="empleados-grid">
                {empleados.map((empleado) => (
                  <div key={`${empleado.cliente}-${empleado.id}`} className="empleado-card">
                    <div className="empleado-nombre">
                      {empleado.nombre_empleado || 'Sin nombre asignado'}
                    </div>
                    <div className="empleado-info">
                      <div>
                        <div className="empleado-correo">{empleado.correo}</div>
                        <div className="cliente-info">
                          Cliente: {empleado.cliente}
                        </div>
                      </div>
                      {empleado.nomina && (
                        <div className="empleado-nomina">
                          Nómina: {empleado.nomina}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-icon">👥</div>
                <h3>No hay empleados registrados</h3>
                <p>No se encontraron empleados asociados a su correo electrónico. Contacte a su administrador para más información.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}