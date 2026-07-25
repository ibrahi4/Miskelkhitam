import type { Metadata } from "next";
import VideosContent from "./Content";

export const metadata: Metadata = {
  title: "فيديوهات الأعمال",
  description:
    "شاهد فيديوهات حقيقية من خدمات شركة البحرين لنقل الأثاث في التغليف والنقل والفك والتركيب ورفع الأثاث.",
};

export default function VideosPage() {
  return <VideosContent />;
}