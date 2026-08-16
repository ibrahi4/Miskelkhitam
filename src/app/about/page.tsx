import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import AboutContent from "./Content";

export const metadata: Metadata = {
  title: "من نحن | تعرف على مسك الختام لنقل الاثاث",
  description: `${siteConfig.name} - اكثر من ${siteConfig.yearsOfExperience} سنوات خبرة و${siteConfig.completedMoves} نقلة ناجحة. تعرف على قصتنا وفريقنا وليه العملاء بيثقوا فينا.`,
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return <AboutContent />;
}