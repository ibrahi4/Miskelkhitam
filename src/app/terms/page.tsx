import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "الشروط والاحكام",
  description: `الشروط والاحكام الخاصة باستخدام موقع وخدمات ${siteConfig.name}.`,
};

const sections = [
  {
    title: "قبول الشروط",
    content: "باستخدامك لموقعنا او خدماتنا، فانت توافق على هذه الشروط والاحكام. اذا كنت لا توافق على اي جزء منها، يرجى عدم استخدام الموقع.",
  },
  {
    title: "الخدمات",
    content: "نقدم خدمات نقل الاثاث والعفش بما يشمل التغليف والفك والتركيب والنقل ورفع الاثاث بالونش. الاسعار يتم تحديدها بعد المعاينة وتكون نهائية ومكتوبة.",
  },
  {
    title: "التأمين والضمان",
    content: "جميع المنقولات مؤمن عليها اثناء عملية النقل. في حالة حدوث اي تلف - وهو نادر - نتحمل المسؤولية حسب سياسة التأمين المتفق عليها.",
  },
  {
    title: "الالغاء والتعديل",
    content: "يمكن الغاء او تعديل الحجز قبل 24 ساعة من الموعد المحدد بدون اي رسوم. الالغاء في نفس اليوم قد يترتب عليه رسوم ادارية.",
  },
  {
    title: "المسؤولية",
    content: "نبذل اقصى جهد لتقديم خدمة احترافية وآمنة. لا نتحمل المسؤولية عن الاضرار الناتجة عن معلومات غير دقيقة يقدمها العميل او ظروف خارجة عن السيطرة.",
  },
  {
    title: "التواصل",
    content: `لاي استفسار بخصوص الشروط والاحكام، تواصل معنا عبر ${siteConfig.phone} او ${siteConfig.email}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="container-custom py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-4">
            <FileText className="h-4 w-4" />
            الشروط
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-blue-950 mb-4">الشروط والاحكام</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            يرجى قراءة الشروط والاحكام بعناية قبل استخدام خدماتنا.
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