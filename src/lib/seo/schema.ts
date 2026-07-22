import { siteConfig } from "@/config/site";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo.jpeg`,
      width: 512,
      height: 512,
    },
    image: `${siteConfig.url}/logo.jpeg`,
    telephone: siteConfig.phone,
    email: "info@khotwa-trans.com",
    foundingDate: siteConfig.foundingYear.toString(),
    address: {
      "@type": "PostalAddress",
      streetAddress: "التجمع الخامس",
      addressLocality: "القاهرة الجديدة",
      addressRegion: "القاهرة",
      addressCountry: "EG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "30.0131",
      longitude: "31.4961",
    },
    areaServed: [
      { "@type": "Country", name: "مصر" },
      { "@type": "City", name: "القاهرة" },
      { "@type": "City", name: "الجيزة" },
      { "@type": "City", name: "الشيخ زايد" },
      { "@type": "City", name: "التجمع الخامس" },
      { "@type": "City", name: "مدينتي" },
      { "@type": "City", name: "6 أكتوبر" },
      { "@type": "City", name: "القاهرة الجديدة" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات نقل الأثاث",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "نقل الأثاث" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "فك وتركيب الأثاث" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "فك وتركيب التكييفات" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "تغليف الأثاث" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "ونش رفع الأثاث" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "نقل المقتنيات الحساسة" } },
      ],
    },
  };
}

export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  serviceUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    url: serviceUrl,
    provider: {
      "@type": "MovingCompany",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      telephone: siteConfig.phone,
      logo: `${siteConfig.url}/logo.jpeg`,
    },
    areaServed: { "@type": "Country", name: "مصر" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: serviceName,
    },
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
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