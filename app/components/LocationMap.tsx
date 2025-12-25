'use client';
import React, { useEffect, useRef } from 'react';

export default function LocationMap() {
  const locatorRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // 1. Cargar script de Google Maps (Extended Component Library)
    const script = document.createElement('script');
    script.src = "https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.11/index.min.js";
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);

    // 2. Configuración (Montes Urales)
    const CONFIGURATION = {
      "locations": [
        {
          "title": "Humanis Corporativo",
          "address1": "C. Montes Urales 424",
          "address2": "Lomas - Virreyes, Miguel Hidalgo, CDMX",
          "coords": { "lat": 19.428992271140743, "lng": -99.20710712949982 },
          "placeId": "ChIJMXgU_PUB0oURW-sE_yVv8ZI"
        }
      ],
      "mapOptions": {
        "center": { "lat": 19.428992, "lng": -99.207107 },
        "fullscreenControl": true,
        "mapTypeControl": false,
        "streetViewControl": false,
        "zoom": 15,
        "zoomControl": true,
        "maxZoom": 17,
        "mapId": "" 
      },
      "mapsApiKey": process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY, 
      "capabilities": { "input": false, "autocomplete": false, "directions": true, "distanceMatrix": false, "details": true, "actions": false }
    };

    const initMap = async () => {
      await customElements.whenDefined('gmpx-store-locator');
      if (locatorRef.current) {
        // @ts-ignore
        locatorRef.current.configureFromQuickBuilder(CONFIGURATION);
      }
    };

    script.onload = initMap;

    return () => {
        // Limpieza si fuera necesaria
    };
  }, []);

  return (
    <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 relative">
      
      {/* --- CORRECCIÓN SEO: DIRECCIÓN EN TEXTO PLANO --- */}
      {/* Invisible visualmente pero legible para crawlers y screen readers */}
      <div className="sr-only">
        <h3>Oficinas Centrales Humanis</h3>
        <p>C. Montes Urales 424, Lomas - Virreyes, Miguel Hidalgo, 11000 Ciudad de México, CDMX</p>
        <p>Teléfono: +52 55 44 16 7974</p>
      </div>

      {/* USAMOS @ts-ignore PARA QUE TYPESCRIPT NO BLOQUEE EL BUILD 
         AL NO RECONOCER LOS ELEMENTOS WEB DE GOOGLE 
      */}
      
      {/* @ts-ignore */}
      <gmpx-api-loader 
        key="loader"
        solution-channel="GMP_QB_locatorplus_v11_c"
      />
      
      {/* @ts-ignore */}
      <gmpx-store-locator 
        ref={locatorRef} 
        style={{ width: '100%', height: '100%' }} 
      />
    </div>
  );
}