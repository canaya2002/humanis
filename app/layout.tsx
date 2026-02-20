import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { organizationSchema } from "@/lib/schema";
import { SITE } from "@/lib/data";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: "#0e7490",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Humanis | Agencia de Colocación de Personal en México",
    template: "%s | Humanis México",
  },
  description:
    "Agencia de colocación de personal en CDMX con cobertura nacional. Reclutamiento, filtros y validación de candidatos. Servicio gratuito para talento, tarifa al empleador.",
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "./" },
  openGraph: {
    title: "Humanis | Agencia de Colocación de Personal en México",
    description:
      "Colocación de personal operativo, administrativo y mandos medios. Servicio gratuito para talento.",
    url: SITE.url,
    siteName: "Humanis México",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Humanis — Agencia de Colocación de Personal en México",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Humanis | Agencia de Colocación de Personal",
    description:
      "Colocación de personal con proceso trazable. Reclutamiento, filtros y validación para empresas en México.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${outfit.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        {/* Accessibility: skip to content */}
        <a href="#main-content" className="skip-link">
          Ir al contenido principal
        </a>

        {children}

        {/* Global Schema — single source of truth */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
