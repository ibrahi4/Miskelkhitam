import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import AreasContent from "./Content";

export const metadata: Metadata = {
  title: "مناطق الخدمة",
  description: "نغطي اهم المدن الجديدة والكمبوندات: التجمع الخامس، القاهرة الجديدة، مدينتي، الشيخ زايد، 6 اكتوبر، الرحاب، والعاصمة الادارية.",
  alternates: {
    canonical: `${siteConfig.url}/areas`,
  },
};

export default function AreasPage() {
  return <AreasContent />;
}