import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.humanis.com.mx';
  
  // Fechas fijas para diferentes tipos de contenido
  // Actualiza estas fechas cuando modifiques el contenido real
  const contentDates = {
    homepage: new Date('2025-12-24'),
    paraEmpresas: new Date('2025-12-24'),
    talento: new Date('2025-12-24'),
    servicios: new Date('2025-12-24'),
    vacantes: new Date('2025-12-24'), 
    casosExito: new Date('2025-12-24'),
    proceso: new Date('2025-12-24'),
    nosotros: new Date('2025-12-24'),
    faqEmpresas: new Date('2025-12-24'),
    faqTalento: new Date('2025-12-24'),
    contacto: new Date('2025-12-24'),
    privacidad: new Date('2025-12-24'),
    legal: new Date('2025-12-24'),
  };

  return [
    {
      url: baseUrl,
      lastModified: contentDates.homepage,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/para-empresas`,
      lastModified: contentDates.paraEmpresas,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/talento`,
      lastModified: contentDates.talento,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: contentDates.servicios,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vacantes`,
      lastModified: contentDates.vacantes,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/casos-de-exito`,
      lastModified: contentDates.casosExito,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/proceso`,
      lastModified: contentDates.proceso,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: contentDates.nosotros,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq-empresas`,
      lastModified: contentDates.faqEmpresas,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/faq-talento`,
      lastModified: contentDates.faqTalento,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: contentDates.contacto,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    // Páginas legales (Esenciales para la confianza de Google E-E-A-T)
    {
      url: `${baseUrl}/privacidad`,
      lastModified: contentDates.privacidad,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: contentDates.legal,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}