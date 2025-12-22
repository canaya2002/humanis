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

// 1. CONFIGURACIÓN DEL VIEWPORT (Móvil primero)
export const viewport: Viewport = {
  themeColor: '#0f172a', // Color de la barra de navegador en móvil (slate-900)
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// 2. METADATA MAESTRA (SEO AVANZADO)
export const metadata: Metadata = {
  metadataBase: new URL('https://www.humanis.com.mx'),
  title: {
    default: "Humanis | Headhunting Estratégico y Staffing REPSE en México",
    template: "%s | Humanis México"
  },
  description: "Expertos en Capital Humano 4.0. Headhunting de ejecutivos, Staffing REPSE, Maquila de Nómina y Blindaje Jurídico Laboral. Garantía de talento y cumplimiento legal.",
  keywords: ["Headhunting México", "Agencia de Reclutamiento", "Staffing IT", "Maquila de Nómina", "Empresas REPSE", "Consultoría de RH", "Humanis"],
  authors: [{ name: "Humanis Team" }],
  creator: "Humanis México",
  publisher: "Humanis México",
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
  // 3. OPEN GRAPH (Para compartir en Facebook/LinkedIn/WhatsApp)
  openGraph: {
    title: "Humanis | La Evolución del Capital Humano",
    description: "Ingeniería de personal y blindaje jurídico. Accede al top 1% del talento en México con nuestra metodología de inteligencia de mercado.",
    url: 'https://www.humanis.com.mx',
    siteName: 'Humanis México',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/humanishero.png', // Asegúrate de que esta imagen sea de 1200x630px
        width: 1200,
        height: 630,
        alt: 'Humanis - Soluciones de Capital Humano',
      },
    ],
  },
  // 4. TWITTER CARDS
  twitter: {
    card: 'summary_large_image',
    title: "Humanis | Headhunting & Staffing",
    description: "Transformamos tu estrategia de talento con tecnología y cumplimiento legal.",
    images: ['/humanishero.png'],
  },
  
  // NOTA: Se eliminó la sección 'icons' manual. 
  // Next.js ahora buscará automáticamente 'icon.png', 'apple-icon.png' y 'favicon.ico' en tu carpeta /app.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // IDIOMA: es-MX definido para SEO local
    <html lang="es-MX" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
        {/* Schema.org Global: Organización */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Humanis",
              "url": "https://www.humanis.com.mx",
              "logo": "https://www.humanis.com.mx/humanislogo.png",
              "sameAs": [
                "https://www.linkedin.com/company/humanis-mx", 
                "https://www.facebook.com/humanis-mx"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+52-55-0000-0000", // RECUERDA: Cambiar por tu teléfono real
                "contactType": "customer service",
                "areaServed": "MX",
                "availableLanguage": "Spanish"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ciudad de México", 
                "addressCountry": "MX"
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