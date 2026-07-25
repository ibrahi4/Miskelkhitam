import type { Metadata } from "next";
import ContactContent from "./Content";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description:
    "تواصل مع شركة البحرين لنقل الأثاث عبر الهاتف أو الواتساب أو النموذج. خدمة 24/7 في التجمع الخامس ومدينتي والشيخ زايد.",
};

export default function ContactPage() {
  return <ContactContent />;
}