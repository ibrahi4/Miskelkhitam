import type { Metadata } from "next";
import GalleryContent from "./Content";

export const metadata: Metadata = {
  title: "معرض الصور",
  description:
    "شاهد صورًا حقيقية من أعمال شركة البحرين لنقل الأثاث في النقل والتغليف والفك والتركيب داخل القاهرة الجديدة ومدينتي والشيخ زايد.",
};

export default function GalleryPage() {
  return <GalleryContent />;
}