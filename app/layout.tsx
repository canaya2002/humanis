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

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.humanis.com.mx'),
  // Canonical: Indica a Google que esta es la versión original (Crucial para SEO)
  alternates: {
    canonical: './',
  },
  title: {
    default: "Humanis | Agencia de Headhunting y Staffing REPSE en México",
    template: "%s | Humanis México"
  },
  description: "Agencia experta en Capital Humano. Headhunting de ejecutivos, Staffing de TI, Maquila de Nómina y Blindaje Jurídico Laboral. Garantía de talento y cumplimiento.",
  keywords: [
    "Headhunting México", 
    "Agencia de Reclutamiento", 
    "Staffing IT", 
    "Maquila de Nómina", 
    "Empresas REPSE", 
    "Consultoría de RH", 
    "Humanis", 
    "Reclutamiento Ejecutivo",
    "Agencia de Colocación",
    "Outsourcing de Personal"
  ],
  authors: [{ name: "Humanis Team", url: "https://www.humanis.com.mx" }],
  creator: "Humanis México",
  publisher: "Humanis México",
  category: "Human Resources",
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
  openGraph: {
    title: "Humanis | La Evolución del Capital Humano",
    description: "Ingeniería de personal y blindaje jurídico. Accede al top 1% del talento en México con nuestra metodología de inteligencia de mercado.",
    url: 'https://www.humanis.com.mx',
    siteName: 'Humanis México',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/humanishero.png',
        width: 1200,
        height: 630,
        alt: 'Humanis - Soluciones de Capital Humano',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Humanis | Headhunting & Staffing",
    description: "Transformamos tu estrategia de talento con tecnología y cumplimiento legal.",
    images: ['/humanishero.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // SCHEMA.ORG: Datos Estructurados para "Agencia de Empleo"
  // Esto vincula tus redes sociales a tu entidad en Google
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency", // Tipo específico que Google premia en tu sector
    "name": "Humanis",
    "alternateName": "Humanis México",
    "url": "https://www.humanis.com.mx",
    "logo": "https://www.humanis.com.mx/humanislogo.png",
    "image": "https://www.humanis.com.mx/humanishero.png",
    "description": "Agencia líder en Headhunting Estratégico y Staffing REPSE.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ciudad de México",
      "addressCountry": "MX"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+52-55-4416-7974", 
      "contactType": "customer service",
      "areaServed": "MX",
      "availableLanguage": "Spanish"
    },
    // AQUÍ ESTÁN TUS REDES VINCULADAS
    "sameAs": [
      "https://www.linkedin.com/company/humanismx/",
      "https://www.instagram.com/humanis.oficial/",
      "https://www.tiktok.com/@humanis_mx",
      "https://www.facebook.com/people/Humanis/61576232000413/"
    ]
  };

  return (
    <html lang="es-MX" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        
        {/* Inyección de JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}