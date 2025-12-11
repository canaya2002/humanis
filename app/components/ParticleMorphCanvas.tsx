'use client';
import React, { useEffect, useRef } from 'react';

interface Pos { x: number; y: number; }
interface Particle { pos: Pos; target: Pos; size: number; color: string; speed: number; }

class ParticleSystem {
  createParticle(width: number, height: number): Particle {
    const r = Math.floor(Math.random() * 50) + 100; 
    const g = Math.floor(Math.random() * 50) + 100;
    const b = 250; 
    return {
      pos: { x: Math.random() * width, y: Math.random() * height },
      target: { x: Math.random() * width, y: Math.random() * height },
      size: Math.random() * 4 + 2, 
      color: `rgba(${r}, ${g}, ${b}, ${Math.random() * 0.4 + 0.2})`, 
      speed: Math.random() * 0.15 + 0.05 
    };
  }
}

const ps = new ParticleSystem();

export default function ParticleMorphCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; 
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const PARTICLES_COUNT = 150; 
    let particles: Particle[] = [];

    const init = () => {
      particles = [];
      for(let i=0; i<PARTICLES_COUNT; i++) {
        particles.push(ps.createParticle(width, height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.pos.y -= p.speed * 2;
        p.pos.x += Math.sin(p.pos.y * 0.01) * 0.5;
        if (p.pos.y < -10) {
          p.pos.y = height + 10;
          p.pos.x = Math.random() * width;
        }
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.pos.x, p.pos.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();
    
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" style={{ mixBlendMode: 'multiply' }} />;
}