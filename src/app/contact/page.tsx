import { buildMetadata } from "@/lib/seo/metadata";
import ContactContent from "./Content";

export const metadata = buildMetadata({
  title: "تواصل معنا | خطوة لنقل الأثاث",
  description:
    "تواصل مع خطوة لنقل الأثاث. متاحون 24/7 لخدمتك في التجمع الخامس ومدينتي والشيخ زايد وجميع محافظات مصر.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactContent />;
}