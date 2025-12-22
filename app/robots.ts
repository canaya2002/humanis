import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'], // Bloquea lo que no quieras que Google vea
    },
    sitemap: 'https://www.humanis.com.mx/sitemap.xml',
  };
}