import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ServicesContent from "./Content";

export const metadata: Metadata = {
  title: "خدماتنا",
  description: `جميع خدمات ${siteConfig.name}: نقل اثاث، فك وتركيب، تغليف احترافي، ونش رفع، تكييفات، ونقل مقتنيات حساسة.`,
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}