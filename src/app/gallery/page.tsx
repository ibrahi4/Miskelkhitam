import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import GalleryContent from "./Content";

export const metadata: Metadata = {
  title: "معرض الصور",
  description: `شاهد صوراً حقيقية من اعمال ${siteConfig.name} في النقل والتغليف والفك والتركيب.`,
  alternates: {
    canonical: `${siteConfig.url}/gallery`,
  },
};

export default function GalleryPage() {
  return <GalleryContent />;
}