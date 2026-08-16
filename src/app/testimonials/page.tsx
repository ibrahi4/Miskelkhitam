import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import TestimonialsContent from "./Content";

export const metadata: Metadata = {
  title: "آراء العملاء",
  description: `اقرأ تقييمات وآراء عملاء ${siteConfig.name} وشاهد لماذا يثق بنا العملاء في خدمات النقل والتغليف والفك والتركيب.`,
  alternates: {
    canonical: `${siteConfig.url}/testimonials`,
  },
};

export default function TestimonialsPage() {
  return <TestimonialsContent />;
}