import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { areas, getAreaBySlug, getRelatedAreas } from "@/config/areas";
import { generateAreaSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo/schema";
import AreaContent from "./Content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};

  return {
    title: area.seoTitle,
    description: area.seoDescription,
    alternates: {
      canonical: `${siteConfig.url}/areas/${slug}`,
    },
    openGraph: {
      title: area.seoTitle,
      description: area.seoDescription,
      url: `${siteConfig.url}/areas/${slug}`,
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const relatedAreas = getRelatedAreas(slug, 3);

  const areaSchema = generateAreaSchema({
    name: area.name,
    description: area.seoDescription,
    slug: area.slug,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: siteConfig.url },
    { name: "مناطق الخدمة", url: `${siteConfig.url}/areas` },
    { name: area.name, url: `${siteConfig.url}/areas/${slug}` },
  ]);

  const faqSchema = area.faqs.length > 0
    ? generateFAQSchema(area.faqs.map((f) => ({ question: f.question, answer: f.answer })))
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <AreaContent area={area} relatedAreas={relatedAreas} />
    </>
  );
}