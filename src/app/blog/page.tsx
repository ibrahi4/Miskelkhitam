import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import BlogContent from "./Content";

export const metadata: Metadata = {
  title: "المدونة",
  description: `مقالات ونصائح من ${siteConfig.name} عن نقل الاثاث والتغليف والفك والتركيب.`,
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  return <BlogContent />;
}