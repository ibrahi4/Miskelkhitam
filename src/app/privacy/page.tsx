import type { Metadata } from "next";
import { Shield } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "سياسة الخصوصية" };

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-3xl">
        <div className="flex items-center gap-2 mb-6">
          <Shield className="h-6 w-6 text-sky-500" />
          <h1 className="text-2xl md:text-3xl font-bold text-sky-950">سياسة الخصوصية</h1>
        </div>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>في {siteConfig.name}، خصوصيتك مهمة عندنا وبنلتزم بحمايتها بالكامل.</p>
          <h2 className="text-lg font-bold text-sky-950 mt-6">إيه البيانات اللي بنجمعها؟</h2>
          <p>بنجمع بس اللي محتاجينه عشان نقدم لك الخدمة: اسمك، رقم تليفونك، وتفاصيل النقلة. مش بنجمع أي بيانات زيادة.</p>
          <h2 className="text-lg font-bold text-sky-950 mt-6">بنستخدم البيانات دي في إيه؟</h2>
          <p>في التواصل معاك بخصوص الخدمة اللي طلبتها بس. مش بنبيع أو نشارك بياناتك مع أي حد تاني أبدًا.</p>
          <h2 className="text-lg font-bold text-sky-950 mt-6">إزاي بنحمي بياناتك؟</h2>
          <p>بناخد كل الاحتياطات التقنية والتنظيمية اللازمة عشان نحمي بياناتك من أي وصول غير مصرح بيه.</p>
          <h2 className="text-lg font-bold text-sky-950 mt-6">عايز تسأل أكتر؟</h2>
          <p>كلمنا على {siteConfig.phone} وهنجاوب على أي سؤال عندك.</p>
        </div>
      </div>
    </section>
  );
}