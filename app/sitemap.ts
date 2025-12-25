import { MetadataRoute } from 'next';
import { vacancies } from './vacanciesData'; // Importamos tus datos de vacantes

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.humanis.com.mx';
  
  // Fecha actual para las páginas estáticas (se actualiza al hacer build)
  const currentDate = new Date();

  // 1. Definición de Rutas Estáticas
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/para-empresas`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/talento`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vacantes`,
      lastModified: currentDate,
      changeFrequency: 'daily', // Importante: esta página cambia diario
      priority: 0.9,
    },
    {
      url: `${baseUrl}/casos-de-exito`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/proceso`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
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
      priority: 0.8,
    },
    // Páginas Legales
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

  const vacancyRoutes: MetadataRoute.Sitemap = vacancies.map((vacancy) => ({
    url: `${baseUrl}/vacantes/${vacancy.slug}`,
    lastModified: new Date(vacancy.datePosted), // Usa la fecha real de publicación
    changeFrequency: 'daily',
    priority: 0.9, // Alta prioridad para ofertas de empleo
  }));

  // 3. Unificar ambos arreglos
  return [...staticRoutes, ...vacancyRoutes];
}