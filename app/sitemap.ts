import { MetadataRoute } from 'next';
import { vacancies } from './vacanciesData'; // Importamos tus datos de vacantes

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.humanis.com.mx';
  
  // Fecha actual para las páginas estáticas (se actualiza al hacer build)
  const currentDate = new Date();

  // 1. Definición de Rutas Estáticas
  const staticRoutes: MetadataRoute.Sitemap = [
    // HOME: Máxima prioridad
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // LISTADO DE VACANTES: Alta prioridad, cambia diario
    {
      url: `${baseUrl}/vacantes`,
      lastModified: currentDate,
      changeFrequency: 'daily', 
      priority: 0.8,
    },
    // LANDINGS PRINCIPALES: Prioridad media-alta
    {
      url: `${baseUrl}/para-empresas`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/talento`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // PÁGINAS INFORMATIVAS: Prioridad media
    {
      url: `${baseUrl}/nosotros`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/casos-de-exito`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/proceso`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // SOPORTE Y CONTACTO: Prioridad media-baja
    {
      url: `${baseUrl}/faq-empresas`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/faq-talento`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    // LEGALES: Baja prioridad (no gastar crawl budget aquí)
    {
      url: `${baseUrl}/privacidad`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // 2. Rutas Dinámicas de Vacantes (Detalle)
  const vacancyRoutes: MetadataRoute.Sitemap = vacancies.map((vacancy) => ({
    url: `${baseUrl}/vacantes/${vacancy.slug}`,
    // Usamos la fecha real de publicación de la vacante
    lastModified: new Date(vacancy.datePosted), 
    changeFrequency: 'daily', // El estado de una vacante puede cambiar rápido
    priority: 0.9, // Muy alta prioridad para indexar ofertas individuales
  }));

  // 3. Unificar ambos arreglos
  return [...staticRoutes, ...vacancyRoutes];
}