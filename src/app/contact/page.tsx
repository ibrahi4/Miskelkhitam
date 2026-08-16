import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ContactContent from "./Content";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: `تواصل مع ${siteConfig.name} عبر الهاتف او الواتساب او النموذج. خدمة 24/7 في التجمع الخامس ومدينتي والشيخ زايد.`,
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return <ContactContent />;
}