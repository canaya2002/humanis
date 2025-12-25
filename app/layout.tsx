import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// VIEWPORT CONFIGURATION
export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// METADATA MAESTRA SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://www.humanis.com.mx'),
  title: {
    default: "Humanis | Agencia de Contratación y Colocación de Personal en México",
    template: "%s | Humanis México"
  },
  description: "Agencia de colocación de personal en CDMX con cobertura nacional. Reclutamiento, filtros y validación de candidatos para cualquier posición. Servicio gratuito para talento, tarifa al empleador.",
  authors: [{ name: "Humanis México" }],
  creator: "Humanis México",
  publisher: "Humanis México",
  
  // --- CORRECCIÓN: DEFINICIÓN EXPLÍCITA DE ICONOS ---
  // Esto asegura que Google y navegadores encuentren tus logos sin ambigüedad
  icons: {
    icon: '/icon.png', 
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: './',
  },
  openGraph: {
    title: "Humanis | Agencia de Contratación y Colocación de Personal en México",
    description: "Colocación de personal operativo, administrativo y mandos medios. Proceso trazable con filtros y validación. Servicio gratuito para talento.",
    url: 'https://www.humanis.com.mx',
    siteName: 'Humanis México',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/humanishero.png',
        width: 1200,
        height: 630,
        alt: 'Humanis - Agencia de Colocación de Personal en México',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Humanis | Agencia de Contratación y Colocación de Personal",
    description: "Colocación de personal con proceso trazable. Reclutamiento, filtros y validación para empresas en México.",
    images: ['/humanishero.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
        {/* Schema.org Global: EmploymentAgency */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EmploymentAgency",
              "@id": "https://www.humanis.com.mx/#organization",
              "name": "Humanis",
              "url": "https://www.humanis.com.mx",
              "logo": "https://www.humanis.com.mx/humanislogo.png",
              "image": "https://www.humanis.com.mx/humanislogo.png",
              "description": "Agencia de colocación de personal en México. Reclutamiento, filtros y validación de candidatos para cualquier posición operativa, administrativa y mandos medios. Servicio gratuito para el talento, tarifa al empleador.",
              "telephone": "+52-55-44-16-7974",
              "email": "soporte@humanis.mx",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "C. Montes Urales 424-V",
                "addressLocality": "Lomas de Chapultepec",
                "addressRegion": "Miguel Hidalgo",
                "postalCode": "11000",
                "addressCountry": "MX"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 19.428992,
                "longitude": -99.207107
              },
              "areaServed": {
                "@type": "Country",
                "name": "México"
              },
              "sameAs": [
                "https://www.facebook.com/people/Humanis/61576232000413/",
                "https://www.instagram.com/humanis.oficial",
                "https://www.linkedin.com/company/humanismx/",
                "https://www.tiktok.com/@humanis_mx"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+52-55-44-16-7974",
                "contactType": "customer service",
                "areaServed": "MX",
                "availableLanguage": ["Spanish"]
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            })
          }}
        />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}