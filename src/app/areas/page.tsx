import { buildMetadata } from "@/lib/seo/metadata";
import AreasContent from "./Content";

export const metadata = buildMetadata({
  title: "مناطق الخدمة | خطوة لنقل الأثاث",
  description:
    "خدمة نقل الأثاث في التجمع الخامس ومدينتي والشيخ زايد و6 أكتوبر والقاهرة الجديدة والعاصمة الإدارية وجميع محافظات مصر.",
  path: "/areas",
});

export default function AreasPage() {
  return <AreasContent />;
}