import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Humanis - Headhunting & Staffing',
    short_name: 'Humanis',
    description: 'Expertos en Capital Humano 4.0 y Staffing REPSE.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/icon.png', // Usa el mismo icon.png que creaste arriba
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}