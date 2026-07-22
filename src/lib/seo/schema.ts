import { siteConfig } from "@/config/site";

// Main Business Schema
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MovingCompany", "LocalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: [siteConfig.shortName, "Khotwa Moving", "خطوة"],
    description: siteConfig.description,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo.jpeg`,
      width: 512,
      height: 512,
      caption: siteConfig.name,
    },
    image: [
      `${siteConfig.url}/logo.jpeg`,
      `${siteConfig.url}/herosection.jpeg`,
    ],
    telephone: siteConfig.phone,
    email: "info@khotwa-trans.com",
    foundingDate: siteConfig.foundingYear.toString(),
    priceRange: "$$$",
    slogan: "خدمة نقل أثاث تليق بمنزلك",
    address: {
      "@type": "PostalAddress",
      streetAddress: "التجمع الخامس",
      addressLocality: "القاهرة الجديدة",
      addressRegion: "القاهرة",
      postalCode: "11835",
      addressCountry: {
        "@type": "Country",
        name: "EG",
      },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.0131,
      longitude: 31.4961,
    },
    hasMap: "https://www.google.com/maps?q=30.0131,31.4961",
    areaServed: [
      {
        "@type": "Country",
        name: "مصر",
        alternateName: "Egypt",
      },
      {
        "@type": "AdministrativeArea",
        name: "القاهرة",
      },
      {
        "@type": "AdministrativeArea",
        name: "الجيزة",
      },
      { "@type": "City", name: "التجمع الخامس" },
      { "@type": "City", name: "مدينتي" },
      { "@type": "City", name: "الشيخ زايد" },
      { "@type": "City", name: "6 أكتوبر" },
      { "@type": "City", name: "القاهرة الجديدة" },
      { "@type": "City", name: "العاصمة الإدارية" },
      { "@type": "City", name: "الرحاب" },
      { "@type": "City", name: "مدينة المستقبل" },
    ],
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
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "أحمد محمد" },
        datePublished: "2024-12-15",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: "خدمة استثنائية، نقلوا فيلتي بكل احترافية والتغليف كان ممتاز.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "سارة عبدالله" },
        datePublished: "2024-11-20",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: "التزام بالمواعيد وأسعار شفافة، أنصح بالتعامل معهم.",
      },
    ],
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer", "Vodafone Cash"],
    currenciesAccepted: "EGP",
    sameAs: [
      siteConfig.socialMedia?.facebook,
      siteConfig.socialMedia?.instagram,
    ].filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات نقل الأثاث",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "نقل الأثاث",
            description: "نقل الأثاث والعفش بأمان في جميع محافظات مصر",
            provider: { "@id": `${siteConfig.url}/#organization` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "فك وتركيب الأثاث",
            description: "فك وتركيب جميع أنواع الأثاث بدقة واحترافية",
            provider: { "@id": `${siteConfig.url}/#organization` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "فك وتركيب التكييفات",
            description: "خبراء فك ونقل وإعادة تركيب جميع أنواع التكييفات",
            provider: { "@id": `${siteConfig.url}/#organization` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "تغليف الأثاث",
            description: "تغليف احترافي بمواد عالية الجودة",
            provider: { "@id": `${siteConfig.url}/#organization` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ونش رفع الأثاث",
            description: "ونش رفع للأدوار المرتفعة والأماكن الضيقة",
            provider: { "@id": `${siteConfig.url}/#organization` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "نقل المقتنيات الحساسة",
            description: "نقل الزجاج والنجف والتحف بأمان تام",
            provider: { "@id": `${siteConfig.url}/#organization` },
          },
        },
      ],
    },
    knowsAbout: [
      "نقل الأثاث",
      "نقل العفش",
      "فك وتركيب الأثاث",
      "تغليف الأثاث",
      "ونش رفع الأثاث",
      "نقل التكييفات",
      "نقل المقتنيات الحساسة",
    ],
  };
}

// Service Schema (per service page)
export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  serviceUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    name: serviceName,
    description: serviceDescription,
    url: serviceUrl,
    provider: {
      "@type": "MovingCompany",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      telephone: siteConfig.phone,
      logo: `${siteConfig.url}/logo.jpeg`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "القاهرة الجديدة",
        addressCountry: "EG",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "مصر",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: serviceName,
    },
    audience: {
      "@type": "Audience",
      audienceType: "سكان الكمبوندات والمدن الجديدة",
    },
  };
}

// Area Schema (per area page)
export function generateAreaSchema(
  areaName: string,
  areaDescription: string,
  areaUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `نقل أثاث ${areaName}`,
    name: `خدمة نقل الأثاث في ${areaName}`,
    description: areaDescription,
    url: areaUrl,
    provider: {
      "@type": "MovingCompany",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      telephone: siteConfig.phone,
    },
    areaServed: {
      "@type": "City",
      name: areaName,
      containedInPlace: {
        "@type": "Country",
        name: "مصر",
      },
    },
  };
}

// FAQ Schema
export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Breadcrumb Schema
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

// Blog Post Schema
export function generateBlogPostSchema(post: {
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  author: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.jpeg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

// Website Schema (for search box in Google)
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
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
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}