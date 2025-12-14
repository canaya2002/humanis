'use client';
import React, { useEffect, useRef } from 'react';

export default function ParticleTornadoCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();

    // Centro del hero
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    
    let mouseX = centerX;
    let mouseY = centerY;
    let targetMouseX = centerX;
    let targetMouseY = centerY;

    class RadialParticle {
      baseAngle: number;
      baseRadius: number;
      currentRadius: number;
      x: number;
      y: number;
      size: number;
      opacity: number;
      oscillationSpeed: number;
      oscillationOffset: number;

      constructor(index: number, total: number, ring: number) {
        this.baseAngle = (index / total) * Math.PI * 2;
        this.baseRadius = 80 + ring * 60;
        this.currentRadius = this.baseRadius;
        
        this.size = Math.max(1, 3 - ring * 0.4);
        this.opacity = Math.max(0.2, 0.7 - ring * 0.12);
        this.oscillationSpeed = 0.005 + Math.random() * 0.003;
        this.oscillationOffset = Math.random() * Math.PI * 2;
        
        this.x = centerX + Math.cos(this.baseAngle) * this.currentRadius;
        this.y = centerY + Math.sin(this.baseAngle) * this.currentRadius;
      }

      update(time: number) {
        // Movimiento EXTREMADAMENTE lento hacia el mouse
        const dx = targetMouseX - mouseX;
        const dy = targetMouseY - mouseY;
        mouseX += dx * 0.015;
        mouseY += dy * 0.015;

        // Oscilación sutil del radio
        const oscillation = Math.sin(time * this.oscillationSpeed + this.oscillationOffset) * 15;
        this.currentRadius = this.baseRadius + oscillation;

        // Calcular posición desde el centro
        this.x = centerX + (mouseX - centerX) * 0.3 + Math.cos(this.baseAngle) * this.currentRadius;
        this.y = centerY + (mouseY - centerY) * 0.3 + Math.sin(this.baseAngle) * this.currentRadius;
      }

      draw() {
        if (!ctx) return;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 2
        );
        
        gradient.addColorStop(0, `rgba(120, 120, 140, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(160, 160, 180, ${this.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(200, 200, 220, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    const particles: RadialParticle[] = [];
    const rings = 5;
    const particlesPerRing = 40;

    for (let ring = 0; ring < rings; ring++) {
      for (let i = 0; i < particlesPerRing; i++) {
        particles.push(new RadialParticle(i, particlesPerRing, ring));
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', () => {
      resizeCanvas();
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
    });

    let startTime = Date.now();

    const animate = () => {
      const currentTime = (Date.now() - startTime) / 1000;

      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update(currentTime);
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}