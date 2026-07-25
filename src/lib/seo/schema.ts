import { siteConfig } from "@/config/site";

type SchemaPrimitive = string | number | boolean | null;
type SchemaValue = SchemaPrimitive | SchemaObject | SchemaValue[];

interface SchemaObject {
  [key: string]: SchemaValue;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface ServiceSchemaInput {
  title: string;
  description: string;
  slug: string;
  image?: string;
}

interface AreaSchemaInput {
  name: string;
  description: string;
  slug: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface ArticleSchemaInput {
  title: string;
  description: string;
  slug: string;
  image: string;
  datePublished: string;
  author: string;
}

const sameAs: string[] = [
  siteConfig.socialMedia.facebook,
  siteConfig.socialMedia.instagram,
  siteConfig.socialMedia.tiktok,
].filter((item): item is string => typeof item === "string" && item.length > 0);

export function generateOrganizationSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.englishName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo.jpeg`,
      width: 512,
      height: 512,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+2${siteConfig.phone}`,
        contactType: "customer service",
        areaServed: "EG",
        availableLanguage: ["Arabic", "English"],
      },
    ],
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function generateLocalBusinessSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    alternateName: siteConfig.englishName,
    image: `${siteConfig.url}/logo.jpeg`,
    logo: `${siteConfig.url}/logo.jpeg`,
    url: siteConfig.url,
    telephone: `+2${siteConfig.phone}`,
    email: siteConfig.email,
    priceRange: "EGP",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "القاهرة الجديدة",
      addressRegion: "القاهرة",
      addressCountry: "EG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.0131,
      longitude: 31.4961,
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    description: siteConfig.description,
    foundingDate: String(siteConfig.foundingYear),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "180",
      bestRating: "5",
      worstRating: "1",
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`,
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function generateWebsiteSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: siteConfig.englishName,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "ar-EG",
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/services?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateServiceSchema({
  title,
  description,
  slug,
  image,
}: ServiceSchemaInput): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/services/${slug}#service`,
    name: title,
    description,
    serviceType: title,
    ...(image ? { image: `${siteConfig.url}${image}` } : {}),
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    provider: {
      "@id": `${siteConfig.url}/#business`,
    },
    url: `${siteConfig.url}/services/${slug}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "EGP",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/services/${slug}`,
    },
  };
}

export function generateAreaSchema({
  name,
  description,
  slug,
}: AreaSchemaInput): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/areas/${slug}#area-service`,
    name: `نقل أثاث في ${name}`,
    description,
    serviceType: "خدمة نقل الأثاث",
    areaServed: {
      "@type": "Place",
      name,
    },
    provider: {
      "@id": `${siteConfig.url}/#business`,
    },
    url: `${siteConfig.url}/areas/${slug}`,
  };
}

export function generateFAQSchema(items: FaqItem[]): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateArticleSchema({
  title,
  description,
  slug,
  image,
  datePublished,
  author,
}: ArticleSchemaInput): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: `${siteConfig.url}${image}`,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Organization",
      name: author,
      url: siteConfig.url,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${slug}`,
    },
    inLanguage: "ar-EG",
  };
}