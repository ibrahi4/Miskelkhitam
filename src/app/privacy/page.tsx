import type { Metadata } from "next";
import { Shield } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description: `سياسة الخصوصية الخاصة بموقع ${siteConfig.name}.`,
};

const sections = [
  {
    title: "جمع المعلومات",
    content: "نجمع المعلومات التي تقدمها لنا طواعية عند التواصل معنا او طلب عرض سعر، مثل الاسم ورقم الهاتف والمنطقة. لا نجمع اي بيانات حساسة بدون موافقتك.",
  },
  {
    title: "استخدام المعلومات",
    content: "نستخدم بياناتك فقط للتواصل معك بخصوص الخدمات المطلوبة، تحسين خدماتنا، وارسال عروض اذا وافقت على ذلك. لا نبيع او نشارك بياناتك مع اطراف ثالثة.",
  },
  {
    title: "حماية البيانات",
    content: "نتخذ اجراءات امنية مناسبة لحماية بياناتك الشخصية من الوصول غير المصرح به او التعديل او الافصاح.",
  },
  {
    title: "ملفات تعريف الارتباط",
    content: "نستخدم ملفات تعريف الارتباط (Cookies) لتحسين تجربة التصفح وتحليل حركة الزوار. يمكنك تعطيلها من اعدادات المتصفح.",
  },
  {
    title: "حقوقك",
    content: "يحق لك طلب الاطلاع على بياناتك الشخصية او تعديلها او حذفها في اي وقت عن طريق التواصل معنا.",
  },
  {
    title: "التواصل",
    content: `لاي استفسار بخصوص سياسة الخصوصية، يمكنك التواصل معنا عبر الهاتف ${siteConfig.phone} او البريد الالكتروني ${siteConfig.email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="container-custom py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-4">
            <Shield className="h-4 w-4" />
            الخصوصية
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-blue-950 mb-4">سياسة الخصوصية</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            خصوصيتك مهمة لنا. هنا نوضح كيف نتعامل مع بياناتك.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl space-y-8">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-lg font-bold text-blue-950 mb-2">{s.title}</h2>
              <p className="text-slate-600 leading-relaxed text-sm">{s.content}</p>
            </div>
          ))}
          <p className="text-xs text-slate-400 pt-4 border-t border-blue-100">
            آخر تحديث: يناير 2025
          </p>
        </div>
      </section>
    </>
  );
}