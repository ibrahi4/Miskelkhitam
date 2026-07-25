import type { Metadata } from "next";
import AreasContent from "./Content";

export const metadata: Metadata = {
  title: "مناطق الخدمة",
  description:
    "نغطي أهم المدن الجديدة والكمبوندات: التجمع الخامس، القاهرة الجديدة، مدينتي، الشيخ زايد، 6 أكتوبر، الرحاب، والعاصمة الإدارية.",
};

export default function AreasPage() {
  return <AreasContent />;
}