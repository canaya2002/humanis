'use client';
import { useState, useEffect } from 'react';

export const useGSAP = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gsap) {
      setLoaded(true);
      return;
    }

    const scripts = [
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/MotionPathPlugin.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/CustomEase.min.js"
    ];

    let loadedCount = 0;
    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === scripts.length) {
        setLoaded(true);
      }
    };

    scripts.forEach(src => {
      const existingScript = document.querySelector(`script[src="${src}"]`);
      if (existingScript) {
        checkAllLoaded();
      } else {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = checkAllLoaded;
        script.onerror = () => console.error(`Failed to load script: ${src}`);
        document.body.appendChild(script);
      }
    });
  }, []);

  return loaded;
};