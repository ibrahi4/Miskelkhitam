import type { Metadata } from "next";
import TestimonialsContent from "./Content";

export const metadata: Metadata = {
  title: "آراء العملاء",
  description:
    "اقرأ تقييمات وآراء عملاء شركة البحرين لنقل الأثاث وشاهد لماذا يثق بنا العملاء في خدمات النقل والتغليف والفك والتركيب.",
};

export default function TestimonialsPage() {
  return <TestimonialsContent />;
}