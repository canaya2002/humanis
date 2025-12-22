import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/api/'], // Buenas prácticas de seguridad SEO
    },
    sitemap: 'https://www.humanis.com.mx/sitemap.xml',
  };
}