'use client';
import React from 'react';

export default function GlobalStyles() {
  return (
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800;900&family=Host+Grotesk:wght@500;700&display=swap');

      :root {
        --primary: #4f46e5;
        --bg-body: #ffffff;
        --text-main: #0f172a;
      }

      body {
        background-color: var(--bg-body);
        color: var(--text-main);
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
        margin: 0;
      }

      /* === HERO SECTION - BLANCO Y NEGRO === */
      .hero-image-wrapper-clean {
        position: relative;
        z-index: 10;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fade-in-scale 1.5s ease-out;
      }

      @keyframes fade-in-scale {
        from {
          opacity: 0;
          transform: scale(0.9) translateY(30px);
        }
        to {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }

      /* Badge glassmorphic blanco */
      .hero-badge-glass-white {
        position: absolute;
        bottom: 2.5rem;
        left: 0;
        z-index: 40;
        padding: 1.5rem 2rem;
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 20px;
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 
          0 8px 32px rgba(0, 0, 0, 0.08),
          inset 0 1px 0 rgba(255, 255, 255, 0.8),
          0 0 0 1px rgba(0, 0, 0, 0.05);
        min-width: 220px;
        animation: fade-in-left 1s ease-out 1s both;
      }

      @keyframes fade-in-left {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      /* Textos negros con animaciones */
      .hero-text-reveal-1-black,
      .hero-text-reveal-2-black,
      .hero-text-reveal-3-black {
        display: block;
        animation: text-reveal 1.2s cubic-bezier(0.25, 1, 0.5, 1) both;
        color: #0f172a;
      }

      .hero-text-reveal-1-black {
        font-weight: 300;
      }

      .hero-text-reveal-2-black {
        font-weight: 500;
        animation-delay: 0.15s;
      }

      .hero-text-reveal-3-black {
        color: #475569;
        font-weight: 100;
        font-size: 0.75em;
        animation-delay: 0.3s;
      }

      @keyframes text-reveal {
        from {
          transform: translateY(100%) rotateX(-20deg);
          opacity: 0;
        }
        to {
          transform: translateY(0) rotateX(0);
          opacity: 1;
        }
      }

      .hero-text-shimmer-black {
        position: absolute;
        inset: 0;
        background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.8), transparent);
        background-size: 200% 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        mix-blend-mode: overlay;
        pointer-events: none;
        animation: shimmer 5s ease-in-out infinite 2s;
      }

      @keyframes shimmer {
        from { background-position: -150% 0; }
        to { background-position: 150% 0; }
      }

      .hero-description-black {
        font-size: 1.25rem;
        color: #475569;
        font-weight: 300;
        max-width: 42rem;
        line-height: 1.75;
        padding-left: 1rem;
        border-left: 2px solid rgba(99, 102, 241, 0.3);
        animation: fade-in-up 1s ease-out 0.7s both;
      }

      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .hero-buttons-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        padding-top: 1rem;
        animation: fade-in-scale-buttons 1s ease-out 0.9s both;
      }

      @keyframes fade-in-scale-buttons {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      .hero-stats-wrapper-black {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 3rem;
        padding-top: 2rem;
        padding-left: 1rem;
        animation: fade-in-up 1s ease-out 1.1s both;
      }

      /* === BOTONES GLASSMORPHIC BLANCOS === */
      .glass-button-white {
        position: relative;
        padding: 0;
        background: transparent;
        border: none;
        cursor: pointer;
        transform-style: preserve-3d;
        transition: transform 0.3s ease;
      }

      .glass-button-white:hover {
        transform: translateY(-2px) scale(1.02);
      }

      .glass-button-white:active {
        transform: translateY(0px) scale(0.98);
      }

      .glass-button-inner-white {
        position: relative;
        padding: 1.25rem 2.5rem;
        background: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 16px;
        box-shadow: 
          0 8px 32px rgba(0, 0, 0, 0.08),
          0 0 0 1px rgba(0, 0, 0, 0.05),
          inset 0 1px 0 rgba(255, 255, 255, 0.8),
          inset 0 -1px 0 rgba(0, 0, 0, 0.05),
          0 4px 0 rgba(0, 0, 0, 0.03);
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        transform: translateZ(0);
      }

      .glass-button-white:hover .glass-button-inner-white {
        background: rgba(255, 255, 255, 0.6);
        border-color: rgba(255, 255, 255, 0.8);
        box-shadow: 
          0 12px 40px rgba(0, 0, 0, 0.12),
          0 0 0 1px rgba(0, 0, 0, 0.08),
          inset 0 1px 0 rgba(255, 255, 255, 1),
          inset 0 -1px 0 rgba(0, 0, 0, 0.08),
          0 6px 0 rgba(0, 0, 0, 0.05);
      }

      .glass-button-white-secondary {
        position: relative;
        padding: 0;
        background: transparent;
        border: none;
        cursor: pointer;
        transform-style: preserve-3d;
        transition: transform 0.3s ease;
      }

      .glass-button-white-secondary:hover {
        transform: translateY(-2px) scale(1.02);
      }

      .glass-button-white-secondary:active {
        transform: translateY(0px) scale(0.98);
      }

      .glass-button-inner-white-secondary {
        position: relative;
        padding: 1.25rem 2.5rem;
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 16px;
        box-shadow: 
          0 6px 24px rgba(0, 0, 0, 0.06),
          0 0 0 1px rgba(0, 0, 0, 0.04),
          inset 0 1px 0 rgba(255, 255, 255, 0.6),
          inset 0 -1px 0 rgba(0, 0, 0, 0.05),
          0 3px 0 rgba(0, 0, 0, 0.02);
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        transform: translateZ(0);
      }

      .glass-button-white-secondary:hover .glass-button-inner-white-secondary {
        background: rgba(255, 255, 255, 0.5);
        border-color: rgba(255, 255, 255, 0.7);
        box-shadow: 
          0 10px 32px rgba(0, 0, 0, 0.1),
          0 0 0 1px rgba(0, 0, 0, 0.06),
          inset 0 1px 0 rgba(255, 255, 255, 0.8),
          inset 0 -1px 0 rgba(0, 0, 0, 0.08),
          0 5px 0 rgba(0, 0, 0, 0.04);
      }

      /* --- ANIMACIONES --- */
      .typewriter-effect {
        background: linear-gradient(90deg, #2563eb 0%, #7c3aed 50%, #06b6d4 100%);
        background-size: 200% auto;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        animation: shine 3s linear infinite;
        font-weight: 900;
      }
      @keyframes shine { to { background-position: -200% center; } }

      /* Botones */
      .antigravity-btn {
          background: #0f172a;
          color: white;
          border: none;
          border-radius: 99px;
          padding: 1rem 2.5rem;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 10px 20px -5px rgba(0,0,0,0.2);
      }
      .antigravity-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 20px 30px -10px rgba(79, 70, 229, 0.4);
      }
      .antigravity-btn.secondary {
          background: white;
          color: #0f172a;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
      }

      /* --- JUMPING ICONS --- */
      .jumping-icons-container {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
          padding: 4rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
      }
      .j-icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(79, 70, 229, 0.1);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          animation: float 3s ease-in-out infinite;
          transition: all 0.3s ease;
      }
      .j-icon-wrapper:nth-child(2n) { animation-delay: 0.5s; }
      .j-icon-wrapper:nth-child(3n) { animation-delay: 1s; }
      .j-icon-wrapper:nth-child(4n) { animation-delay: 1.5s; }
      .j-icon-wrapper:hover {
          color: #4f46e5;
          border-color: #4f46e5;
          transform: scale(1.15) translateY(-10px);
          box-shadow: 0 20px 40px rgba(79, 70, 229, 0.3);
          background: rgba(79, 70, 229, 0.05);
      }
      @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
      }

      /* --- CARRUSEL INFINITO --- */
      @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(calc(-250px * 7)); } }
      .slider { background: white; height: 100px; margin: auto; overflow: hidden; position: relative; width: 100%; }
      .slider::before, .slider::after {
          background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
          content: ""; height: 100px; position: absolute; width: 150px; z-index: 2;
      }
      .slider::after { right: 0; top: 0; transform: rotateZ(180deg); }
      .slider::before { left: 0; top: 0; }
      .slide-track { animation: scroll 40s linear infinite; display: flex; width: calc(250px * 14); align-items: center; }
      .slide { height: 100px; width: 250px; display: flex; align-items: center; justify-content: center; padding: 20px; }
      .slide img { max-width: 100%; max-height: 100%; filter: grayscale(100%); opacity: 0.5; transition: all 0.3s; }
      .slide img:hover { filter: grayscale(0%); opacity: 1; }

      /* ORBIT STYLES - IMPROVED */
      .orbit-container { 
        width: 100%; 
        height: 100%; 
        position: relative; 
        display: flex; 
        align-items: center; 
        justify-content: center;
        background: linear-gradient(135deg, rgba(79, 70, 229, 0.05), rgba(124, 58, 237, 0.05));
        border-radius: 24px;
        padding: 2rem;
      }
      .orbit-svg { 
        width: 100%; 
        height: 100%; 
        max-width: 700px; 
        overflow: visible; 
      }
      .orbit-path { 
        fill: none; 
        stroke: rgba(79, 70, 229, 0.2); 
        stroke-width: 2;
        filter: drop-shadow(0 0 10px rgba(79, 70, 229, 0.3));
      }
      .orbit-dash { 
        fill: none; 
        stroke: url(#orbit-gradient);
        stroke-width: 3; 
        stroke-linecap: round; 
        stroke-dasharray: 30 300; 
        stroke-dashoffset: 0; 
        animation: moveLine 25s linear infinite; 
        filter: drop-shadow(0 0 8px rgba(79, 70, 229, 0.8));
      }
      @keyframes moveLine { 
        0% { stroke-dashoffset: 0; } 
        100% { stroke-dashoffset: -330; } 
      }
      .orbit-node { 
        position: absolute; 
        top: var(--circle-y); 
        left: var(--circle-x); 
        transform: translate(-50%, -50%); 
        width: 64px; 
        height: 64px; 
        background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7));
        backdrop-filter: blur(10px);
        border: 2px solid rgba(79, 70, 229, 0.3);
        border-radius: 50%; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        box-shadow: 
          0 8px 24px rgba(79, 70, 229, 0.2),
          inset 0 -2px 8px rgba(79, 70, 229, 0.1);
        z-index: 10; 
        transition: all 0.3s ease; 
        color: #4f46e5;
        animation: pulse-node 3s ease-in-out infinite;
      }
      .orbit-node:nth-child(2n) { animation-delay: 0.5s; }
      .orbit-node:nth-child(3n) { animation-delay: 1s; }
      .orbit-node:hover { 
        border-color: #4f46e5; 
        background: linear-gradient(135deg, #fff, rgba(79, 70, 229, 0.1));
        transform: translate(-50%, -50%) scale(1.2); 
        box-shadow: 
          0 12px 32px rgba(79, 70, 229, 0.4),
          inset 0 -2px 12px rgba(79, 70, 229, 0.2);
      }
      @keyframes pulse-node {
        0%, 100% { box-shadow: 0 8px 24px rgba(79, 70, 229, 0.2); }
        50% { box-shadow: 0 12px 32px rgba(79, 70, 229, 0.4); }
      }

      /* --- CONTACT REVEAL --- */
      .contact-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100vh; z-index: 1000; pointer-events: none; opacity: 0; }
      .contact-active { pointer-events: auto; opacity: 1; }
      .preloader-mask { position: absolute; inset: 0; background: #0f172a; transform-origin: bottom; transform: scaleY(0); }
      .contact-content { position: relative; z-index: 1001; height: 100%; width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; color: white; opacity: 0; }
      .contact-title { font-family: 'Host Grotesk', sans-serif; font-size: clamp(3rem, 8vw, 8rem); line-height: 0.9; font-weight: 800; text-align: center; background: linear-gradient(180deg, #FFF 20%, #94a3b8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 2rem; }
      .contact-form-wrapper { background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); padding: 3rem; border-radius: 2rem; width: 90%; max-width: 600px; transform: translateY(50px); }
      .close-contact { position: absolute; top: 2rem; right: 2rem; color: white; cursor: pointer; z-index: 1002; }

      /* --- TEXT ROTATION EFFECT --- */
      .text-rotator {
        display: inline-block;
        position: relative;
        vertical-align: top;
        min-height: 1.2em;
        min-width: 650px;
      }

      .text-rotator__word {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        opacity: 0;
        transform: translateY(100%);
        animation: rotateWord 12s infinite;
        background: linear-gradient(90deg, #2563eb 0%, #7c3aed 50%, #06b6d4 100%);
        background-size: 200% auto;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 900;
        white-space: nowrap;
      }

      .text-rotator__word:nth-child(1) { animation-delay: 0s; }
      .text-rotator__word:nth-child(2) { animation-delay: 3s; }
      .text-rotator__word:nth-child(3) { animation-delay: 6s; }
      .text-rotator__word:nth-child(4) { animation-delay: 9s; }

      @keyframes rotateWord {
        0%, 25% {
          opacity: 0;
          transform: translateY(100%);
        }
        27%, 48% {
          opacity: 1;
          transform: translateY(0);
        }
        50%, 100% {
          opacity: 0;
          transform: translateY(-100%);
        }
      }

      /* Glassmorphism Nav */
      .glass-nav {
        background: rgba(255, 255, 255, 0.08);
        border: 2px solid rgba(255, 255, 255, 0.6);
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.6), 0 16px 32px rgba(0, 0, 0, 0.12);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-radius: 999px;
        padding: 0.5rem 1.5rem;
      }

      /* SVG Gradient for Orbit */
      .orbit-gradient-svg {
        position: absolute;
        width: 0;
        height: 0;
      }

      /* --- SCROLL PATH CARDS (WOW EFFECT) --- */
      .gsap-main-wrapper { 
        position: relative; 
        width: 100%; 
        background: linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%);
        min-height: 100vh;
      }

      .gsap-pinned-container {
          height: 100vh;
          width: 100%;
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 5%;
      }

      .gsap-card {
          position: absolute;
          width: 550px;
          min-height: 360px;
          padding: 3rem;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 32px;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.9),
            0 0 0 1px rgba(79, 70, 229, 0.08);
          opacity: 0.25;
          transform: scale(0.88);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
      }

      .gsap-card.active {
          opacity: 1;
          transform: scale(1);
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(32px);
          -webkit-backdrop-filter: blur(32px);
          box-shadow: 
              0 20px 60px rgba(79, 70, 229, 0.15),
              0 0 0 1px rgba(79, 70, 229, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 1);
          z-index: 10;
          border-color: rgba(79, 70, 229, 0.2);
      }

      .gsap-card-img {
          position: absolute;
          width: 450px;
          height: 320px;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.5),
            0 0 40px rgba(79, 70, 229, 0.4),
            0 30px 70px rgba(0,0,0,0.2);
          border: 2px solid rgba(79, 70, 229, 0.3);
          z-index: 2;
          transition: all 0.8s ease;
          filter: brightness(1.05) contrast(1.05);
      }

      .card-left {
          left: 5%;
          top: 50%;
          transform: translateY(-50%) scale(0.88);
      }

      .card-left .gsap-card-img {
          right: -240px;
          top: 50%;
          transform: translateY(-50%);
      }

      .card-left .gsap-card-content {
          padding-right: 1rem;
      }

      .card-right {
          right: 5%;
          top: 50%;
          transform: translateY(-50%) scale(0.88);
      }

      .card-right .gsap-card-img {
          left: -240px;
          top: 50%;
          transform: translateY(-50%);
      }

      .card-right .gsap-card-content {
          padding-left: 1rem;
          text-align: right;
      }

      .card-left.active,
      .card-right.active {
          transform: translateY(-50%) scale(1);
      }

      .gsap-card-content { 
        padding: 0;
        max-width: 380px;
        position: relative;
        z-index: 3;
      }

      .gsap-marker-icon {
          position: absolute;
          top: 2.5rem;
          left: 2.5rem;
          width: 76px;
          height: 76px;
          background: rgba(79, 70, 229, 0.15);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: #4f46e5;
          border: 1px solid rgba(79, 70, 229, 0.3);
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 8px 24px rgba(79, 70, 229, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.6);
          font-size: 1.8rem;
          z-index: 4;
          transition: all 0.3s ease;
      }

      .card-right .gsap-marker-icon {
          left: auto;
          right: 2.5rem;
      }

      .gsap-card.active .gsap-marker-icon {
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.9), rgba(124, 58, 237, 0.9));
          backdrop-filter: blur(16px);
          color: white;
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 
            0 12px 32px rgba(79, 70, 229, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
      }

      /* Icono flotante glassmorphic */
      .floating-icon-glass {
          position: absolute;
          z-index: 30;
          width: 72px;
          height: 72px;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 255, 255, 0.7);
          box-shadow: 
            0 0 0 1px rgba(79, 70, 229, 0.1),
            0 8px 32px rgba(79, 70, 229, 0.3),
            0 20px 60px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4f46e5;
          animation: float-pulse 3s ease-in-out infinite;
          position: relative;
          overflow: hidden;
      }

      .icon-glow {
          position: absolute;
          inset: -50%;
          background: radial-gradient(circle, rgba(79, 70, 229, 0.3), transparent 70%);
          animation: rotate-glow 4s linear infinite;
      }

      @keyframes float-pulse {
          0%, 100% {
              transform: scale(1) translateY(0);
              box-shadow: 
                0 0 0 1px rgba(79, 70, 229, 0.1),
                0 8px 32px rgba(79, 70, 229, 0.3),
                0 20px 60px rgba(0, 0, 0, 0.15),
                inset 0 1px 0 rgba(255, 255, 255, 0.9);
          }
          50% {
              transform: scale(1.1) translateY(-5px);
              box-shadow: 
                0 0 0 1px rgba(79, 70, 229, 0.2),
                0 12px 40px rgba(79, 70, 229, 0.5),
                0 30px 80px rgba(0, 0, 0, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 1);
          }
      }

      @keyframes rotate-glow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
      }

      .card-1 { top: 12%; }
      .card-2 { top: 24%; }
      .card-3 { top: 38%; }
      .card-4 { top: 52%; }
      .card-5 { top: 66%; }
      .card-6 { top: 80%; }
    `}</style>
  );
}