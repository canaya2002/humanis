import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Humanis México | Executive Search, Headhunting y Consultoría de Talento Líder",
  description:
    "Humanis México: Firma #1 de executive search y headhunting. Especialistas en reclutamiento C-Level con 98% retención. Transformamos organizaciones conectando líderes excepcionales con empresas Fortune 500. ✓300+ ejecutivos colocados ✓9 días promedio ✓Garantía 60 días. Consulta gratuita disponible.",
  keywords:
    "humanis mexico, executive search mexico, headhunting mexico, headhunting cdmx, reclutamiento ejecutivo, consultoria talento mexico, c-level recruitment mexico, talent acquisition, humanis consultoria, busqueda ejecutivos, firma headhunting, reclutamiento directivo",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  authors: [{ name: "Humanis México" }],
  generator: "Next.js",
  alternates: {
    canonical: "https://humanis.com.mx",
    languages: { "es-MX": "https://humanis.com.mx" },
  },
  openGraph: {
    type: "website",
    title: "Humanis México | Executive Search & Headhunting Premium #1",
    description:
      "Firma líder de executive search en México. 300+ ejecutivos colocados, 98% retención. Transformamos empresas con talento C-Level excepcional.",
    images: [
      {
        url: "https://humanis.com.mx/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Humanis México - Executive Search Premium",
      },
    ],
    url: "https://humanis.com.mx",
    siteName: "Humanis México",
    locale: "es_MX",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/manifest.json",
  themeColor: "#1e40af",
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Humanis México",
  alternateName: "Humanis Consultoría Executive Search",
  url: "https://humanis.com.mx",
  logo: "https://humanis.com.mx/images/logohumanis.png",
  image: "https://humanis.com.mx/og-image.jpg",
  description:
    "Humanis México es la firma líder en executive search, headhunting y consultoría de talento ejecutivo. Especialistas en reclutamiento C-Level con 98% de retención.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Paseo de la Reforma 250, Piso 15",
    addressLocality: "Ciudad de México",
    addressRegion: "CDMX",
    postalCode: "06600",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "19.4326",
    longitude: "-99.1332",
  },
  telephone: "+52-55-4416-7974",
  email: "contacto@humanis.com.mx",
  priceRange: "$$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: ["https://www.linkedin.com/company/humanismx/?viewAsMember=true"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "523",
    bestRating: "5",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Script
          id="gtag"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        {children}
      </body>
    </html>
  );
}