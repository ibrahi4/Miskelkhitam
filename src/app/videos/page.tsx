import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import VideosContent from "./Content";

export const metadata: Metadata = {
  title: "فيديوهات الاعمال",
  description: `شاهد فيديوهات حقيقية من خدمات ${siteConfig.name} في التغليف والنقل والفك والتركيب ورفع الاثاث.`,
  alternates: {
    canonical: `${siteConfig.url}/videos`,
  },
};

export default function VideosPage() {
  return <VideosContent />;
}