import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import FaqContent from "./Content";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "الاسئلة الشائعة",
  description: "اجابات واضحة على اكتر الاسئلة اللي بتيجي لنا عن خدمات نقل الاثاث، الاسعار، التغليف، والضمان.",
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
};

export default function FaqPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: siteConfig.url },
    { name: "الاسئلة الشائعة", url: `${siteConfig.url}/faq` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FaqContent />
    </>
  );
}