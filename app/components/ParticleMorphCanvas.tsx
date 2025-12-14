'use client';
import React, { useEffect, useRef } from 'react';

export default function ParticleTornadoCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    class TornadoParticle {
      x: number;
      y: number;
      angle: number;
      radius: number;
      speed: number;
      size: number;
      opacity: number;
      spiralSpeed: number;

      constructor(index: number, total: number) {
        this.angle = (index / total) * Math.PI * 2;
        this.radius = 150 + (index % 3) * 80;
        this.speed = 0.002 + Math.random() * 0.001;
        this.size = 2 + Math.random() * 3;
        this.opacity = 0.3 + Math.random() * 0.4;
        this.spiralSpeed = 0.01 + Math.random() * 0.005;
        
        this.x = mouseX + Math.cos(this.angle) * this.radius;
        this.y = mouseY + Math.sin(this.angle) * this.radius;
      }

      update() {
        // Movimiento extremadamente lento hacia el mouse
        const dx = targetMouseX - mouseX;
        const dy = targetMouseY - mouseY;
        mouseX += dx * 0.008; // MUY LENTO
        mouseY += dy * 0.008;

        // Rotación en espiral
        this.angle += this.spiralSpeed;
        
        // Variar el radio para efecto tornado
        const radiusVariation = Math.sin(this.angle * 3) * 20;
        const currentRadius = this.radius + radiusVariation;

        this.x = mouseX + Math.cos(this.angle) * currentRadius;
        this.y = mouseY + Math.sin(this.angle) * currentRadius;
      }

      draw() {
        if (!ctx) return;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 2
        );
        gradient.addColorStop(0, `rgba(79, 70, 229, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(124, 58, 237, ${this.opacity * 0.6})`);
        gradient.addColorStop(1, `rgba(6, 182, 212, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    const particles: TornadoParticle[] = [];
    const particleCount = 120;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new TornadoParticle(i, particleCount));
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}