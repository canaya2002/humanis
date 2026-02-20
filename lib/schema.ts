import { SITE } from "./data";

// ─── Organization (singleton, referenced by @id everywhere) ───
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/humanislogo.png`,
    image: `${SITE.url}/humanislogo.png`,
    description:
      "Agencia de colocación de personal en México. Reclutamiento, filtros y validación de candidatos. Servicio gratuito para el talento, tarifa al empleador.",
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.colony,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: { "@type": "Country", name: "México" },
    sameAs: Object.values(SITE.social),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "customer service",
      areaServed: "MX",
      availableLanguage: ["Spanish"],
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };
}

// ─── Breadcrumb ───
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── FAQ Page ───
export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

// ─── Service ───
export function serviceSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
    },
    areaServed: { "@type": "Country", name: "México" },
  };
}

// ─── Job Posting ───
export function jobPostingSchema(vacancy: {
  id: number;
  title: string;
  description: string;
  datePosted: string;
  validThrough: string;
  employmentType: string;
  location: string;
  salary: string;
  type: string;
  slug: string;
}) {
  // Parse salary
  const clean = vacancy.salary.replace(/[^0-9-]/g, "");
  const parts = clean.split("-");
  const minSalary = parts[0] ? parseInt(parts[0], 10) : 0;
  const maxSalary = parts[1] ? parseInt(parts[1], 10) : minSalary;
  const hasSalary = !isNaN(minSalary) && minSalary > 0;

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: vacancy.title,
    description: vacancy.description,
    identifier: {
      "@type": "PropertyValue",
      name: SITE.name,
      value: `humanis-${vacancy.id}`,
    },
    datePosted: vacancy.datePosted,
    validThrough: vacancy.validThrough,
    employmentType: vacancy.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: vacancy.location.includes("CDMX")
          ? "Ciudad de México"
          : vacancy.location,
        addressCountry: "MX",
      },
    },
    ...(hasSalary && {
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "MXN",
        value: {
          "@type": "QuantitativeValue",
          minValue: minSalary,
          maxValue: maxSalary,
          unitText: "MONTH",
        },
      },
    }),
    ...(vacancy.type === "Remoto" && { jobLocationType: "TELECOMMUTE" }),
    applicantLocationRequirements: { "@type": "Country", name: "MX" },
    directApply: true,
    url: `${SITE.url}/vacantes/${vacancy.slug}`,
  };
}
