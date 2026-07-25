import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "الشروط والأحكام" };

export default function TermsPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-3xl">
        <div className="flex items-center gap-2 mb-6">
          <FileText className="h-6 w-6 text-sky-500" />
          <h1 className="text-2xl md:text-3xl font-bold text-sky-950">الشروط والأحكام</h1>
        </div>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>لما بتستخدم خدمات {siteConfig.name}، ده معناه إنك موافق على الشروط دي.</p>
          <h2 className="text-lg font-bold text-sky-950 mt-6">الخدمة</h2>
          <p>بنلتزم بتقديم الخدمات المتفق عليها في عرض السعر بالجودة والمواعيد المحددة. أي تغيير بيكون بموافقة الطرفين.</p>
          <h2 className="text-lg font-bold text-sky-950 mt-6">المسؤولية</h2>
          <p>بنتحمل المسؤولية الكاملة عن أي تلف يحصل للأثاث أثناء النقل وفقًا لسياسة التأمين المتفق عليها.</p>
          <h2 className="text-lg font-bold text-sky-950 mt-6">الأسعار</h2>
          <p>السعر المكتوب في عرض السعر هو النهائي. مفيش إضافات أو رسوم مخفية. لو حصل تغيير في نطاق العمل، بيتم الاتفاق على السعر الجديد قبل التنفيذ.</p>
          <h2 className="text-lg font-bold text-sky-950 mt-6">الإلغاء</h2>
          <p>تقدر تلغي الحجز قبل الموعد بـ 24 ساعة بدون أي رسوم. الإلغاء بعد كده ممكن يترتب عليه رسوم تشغيلية بسيطة.</p>
          <h2 className="text-lg font-bold text-sky-950 mt-6">الدفع</h2>
          <p>الدفع بيكون بعد إتمام النقلة كاملة والتأكد من رضا العميل. بنقبل الدفع نقدي أو تحويل.</p>
        </div>
      </div>
    </section>
  );
}