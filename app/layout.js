import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google"; // Importar el componente
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Humanis México | Executive Search y Headhunting Líder",
  description:
    "Firma #1 executive search México. Especialistas headhunting C-Level con 98% retención, 9 días promedio. 300+ ejecutivos colocados. Consulta gratuita.",
  keywords:
    "executive search méxico, headhunting, reclutamiento ejecutivo, consultoria talento, c-level recruitment, talent acquisition, búsqueda ejecutivos",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  authors: [{ name: "Humanis México" }],
  generator: "Next.js",
  publisher: "Humanis México",
  category: "Business Services",
  classification: "Executive Search",
  alternates: {
    canonical: "https://humanis.com.mx",
    languages: {
      "es-MX": "https://humanis.com.mx",
      es: "https://humanis.com.mx",
    },
  },
  openGraph: {
    type: "website",
    title: "Humanis México | Executive Search y Headhunting Líder",
    description:
      "Firma #1 executive search México. 300+ ejecutivos colocados, 98% retención, 9 días promedio. Transformamos empresas con talento C-Level.",
    images: [
      {
        url: "https://humanis.com.mx/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Humanis México - Executive Search Premium",
        type: "image/jpeg",
      },
      {
        url: "https://humanis.com.mx/images/og-image-square.jpg",
        width: 1080,
        height: 1080,
        alt: "Humanis México Logo",
        type: "image/jpeg",
      },
    ],
    url: "https://humanis.com.mx",
    siteName: "Humanis México",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Humanis México | Executive Search y Headhunting Líder",
    description:
      "Firma #1 executive search México. 300+ ejecutivos colocados, 98% retención, 9 días promedio.",
    images: ["https://humanis.com.mx/images/twitter-image.jpg"],
    creator: "@humanismx",
    site: "@humanismx",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "#1e40af",
  colorScheme: "light",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  verification: {
    google: "verification_code_here",
    // yandex: "verification_code_here",
    // bing: "verification_code_here",
  },
  other: {
    "msapplication-TileColor": "#1e40af",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Humanis México",
    "mobile-web-app-capable": "yes",
    "geo.region": "MX-DIF",
    "geo.placename": "Ciudad de México",
    "geo.position": "19.4326;-99.1332",
    "ICBM": "19.4326, -99.1332",
    language: "es-MX",
    coverage: "Worldwide",
    distribution: "Global",
    rating: "General",
    "revisit-after": "7 days",
  },
};

// Schema.org estructurado más completo
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://humanis.com.mx/#organization",
  name: "Humanis México",
  alternateName: ["Humanis Consultoría", "Humanis Executive Search"],
  url: "https://humanis.com.mx",
  logo: {
    "@type": "ImageObject",
    url: "https://humanis.com.mx/images/logohumanis.png",
    width: 240,
    height: 80,
  },
  image: "https://humanis.com.mx/images/og-image.jpg",
  description:
    "Humanis México es la firma líder en executive search, headhunting y consultoría de talento ejecutivo en México. Especialistas en reclutamiento C-Level con 98% de retención.",
  foundingDate: "2013",
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
    latitude: 19.4326,
    longitude: -99.1332,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+52-55-4416-7974",
      contactType: "customer service",
      areaServed: "MX",
      availableLanguage: ["Spanish", "English"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
        validFrom: "2024-01-01",
        validThrough: "2025-12-31",
      },
    },
    {
      "@type": "ContactPoint",
      email: "contacto@humanis.com.mx",
      contactType: "sales",
      areaServed: "MX",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/humanismx",
    "https://humanis.com.mx",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.9,
    reviewCount: 523,
    bestRating: 5,
    worstRating: 1,
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
    maxValue: 50,
  },
  slogan: "Conectamos Líderes Excepcionales con Empresas Extraordinarias",
  knowsAbout: [
    "Executive Search",
    "Headhunting",
    "Talent Acquisition",
    "C-Level Recruitment",
    "Executive Recruiting",
    "Leadership Development",
  ],
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://humanis.com.mx/#service",
  name: "Humanis México Executive Search",
  provider: {
    "@id": "https://humanis.com.mx/#organization",
  },
  serviceType: "Executive Search Services",
  description:
    "Servicios premium de executive search, headhunting y consultoría de talento ejecutivo para empresas líderes en México.",
  areaServed: {
    "@type": "Country",
    name: "Mexico",
    sameAs: "https://en.wikipedia.org/wiki/Mexico",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios Executive Search",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Executive Search",
          description: "Búsqueda especializada de ejecutivos nivel C-Level con metodología comprobada.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Talent Mapping",
          description: "Inteligencia de mercado y mapeo competitivo de talento ejecutivo.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Organizational Development",
          description: "Desarrollo organizacional y consultoría de transformación cultural.",
        },
      },
    ],
  },
  priceRange: "$$$",
  url: "https://humanis.com.mx",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://humanis.com.mx/#website",
  url: "https://humanis.com.mx",
  name: "Humanis México",
  description: "Sitio web oficial de Humanis México - Firma líder en executive search y headhunting.",
  publisher: {
    "@id": "https://humanis.com.mx/#organization",
  },
  inLanguage: "es-MX",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://humanis.com.mx/buscar?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://humanis.com.mx",
    },
  ],
};

// Combinación de todos los schemas
const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    professionalServiceSchema,
    websiteSchema,
    breadcrumbSchema,
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <head>
        {/* Preconnect para optimización de rendimiento */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Meta tags adicionales para SEO */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-navbutton-color" content="#1e40af" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Información de frescura del contenido */}
        <meta httpEquiv="last-modified" content={new Date().toISOString()} />
        <meta name="dc.date.modified" content={new Date().toISOString()} />

        {/* Enlaces alternos */}
        <link rel="alternate" hrefLang="es-mx" href="https://humanis.com.mx" />
        <link rel="alternate" hrefLang="es" href="https://humanis.com.mx" />
        <link rel="alternate" hrefLang="x-default" href="https://humanis.com.mx" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Schema.org estructurado */}
        <Script
          id="schema-org-combined"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
        />

        {/* Google Analytics con @next/third-parties */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}

        {/* Google Tag Manager (manteniendo tu configuración existente) */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />

        {/* Performance optimization */}
        <Script
          id="performance-observer"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('PerformanceObserver' in window) {
                const observer = new PerformanceObserver((list) => {
                  for (const entry of list.getEntries()) {
                    if (entry.entryType === 'largest-contentful-paint') {
                      gtag && gtag('event', 'web_vitals', {
                        name: 'LCP',
                        value: Math.round(entry.startTime),
                        event_category: 'Web Vitals',
                      });
                    }
                  }
                });
                observer.observe({entryTypes: ['largest-contentful-paint']});
              }
            `,
          }}
        />

        {children}

        {/* GTM NoScript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </html>
  );
}