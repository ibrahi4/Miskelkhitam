import type { Metadata } from "next";
import {
  HelpCircle,
  Phone,
  MessageCircle,
  Truck,
  Package,
  CreditCard,
  Clock,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة",
  description: `إجابات واضحة على أكتر الأسئلة اللي بتيجي لنا عن خدمات نقل الأثاث، الأسعار، التغليف، والضمان.`,
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
};

const faqCategories = [
  {
    title: "عن خدمات النقل",
    icon: Truck,
    faqs: [
      { q: "بتنقلوا جوه نفس المنطقة ولا بين مناطق؟", a: "الاتنين. بننقل جوه نفس المنطقة وبين أي منطقتين. سواء من التجمع لمدينتي أو من الشيخ زايد لأكتوبر." },
      { q: "بتنقلوا مكاتب وشركات؟", a: "أيوه، عندنا خدمة نقل مكاتب متخصصة بتشمل كل حاجة من الديسكات للسيرفرات." },
      { q: "ممكن أحجز في نفس اليوم؟", a: "بنحاول نوفر أقرب موعد. لو فيه متاح في نفس اليوم هنأكد لك فورًا." },
    ],
  },
  {
    title: "التغليف والحماية",
    icon: Package,
    faqs: [
      { q: "التغليف بفلوس ولا مع الخدمة؟", a: "التغليف الأساسي مشمول. التغليف الاحترافي الكامل ليه تسعيرة منفصلة حسب الكمية." },
      { q: "بتستخدموا إيه في التغليف؟", a: "استرتش فيلم صناعي، فقاعات هوائية، كرتون مقوى ثلاثي الطبقات، وفلين للأجهزة." },
      { q: "لو عندي أنتيكات غالية هتتغلف إزاي؟", a: "كل قطعة بتتغلف يدويًا بمواد مخصصة. وبنوفر صناديق خشبية للقطع الكبيرة والثمينة." },
    ],
  },
  {
    title: "الأسعار والدفع",
    icon: CreditCard,
    faqs: [
      { q: "إزاي بتحسبوا السعر؟", a: "بنعمل معاينة مجانية، وبناءً عليها بنحدد السعر حسب حجم الأثاث والمسافة والخدمات المطلوبة. السعر بيكون مكتوب ونهائي." },
      { q: "فيه رسوم مخفية؟", a: "أبدًا. اللي بنتفق عليه هو اللي هتدفعه. مفيش مفاجآت." },
      { q: "الدفع قبل ولا بعد؟", a: "الدفع بيكون بعد ما نخلص النقلة كاملة وتتأكد إن كل حاجة تمام." },
    ],
  },
  {
    title: "المواعيد والتوفر",
    icon: Clock,
    faqs: [
      { q: "بتشتغلوا في الإجازات؟", a: "أيوه، إحنا متاحين 24 ساعة / 7 أيام، بما فيها الإجازات والأعياد." },
      { q: "بتغطوا أنهي مناطق؟", a: `بنغطي: ${siteConfig.serviceAreas.join("، ")}. ولو منطقتك مش في القائمة - كلمنا وهنوصلك.` },
    ],
  },
  {
    title: "الضمان والتأمين",
    icon: Shield,
    faqs: [
      { q: "أثاثي مأمن عليه؟", a: "أيوه. كل المنقولات مؤمن عليها بالكامل طول فترة النقل." },
      { q: "لو حاجة اتكسرت هتعوضوني؟", a: "طبعًا. لو حصل أي تلف - وده نادر جدًا - بنتحمل المسؤولية الكاملة حسب سياسة التأمين." },
    ],
  },
];

const allFaqs = faqCategories.flatMap((cat) =>
  cat.faqs.map((f) => ({ question: f.q, answer: f.a }))
);

export default function FaqPage() {
  const faqSchema = generateFAQSchema(allFaqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: siteConfig.url },
    { name: "الأسئلة الشائعة", url: `${siteConfig.url}/faq` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-gradient-to-b from-sky-50 via-white to-white">
        <div className="container-custom py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700 mb-4">
            <HelpCircle className="h-4 w-4" />
            أسئلة شائعة
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-sky-950 mb-4">عندك سؤال؟ هنا الإجابة</h1>
          <p className="text-slate-600 max-w-2xl mx-auto md:text-lg">جمعنا لك أكتر الأسئلة اللي العملاء بيسألوها مع إجابات واضحة ومباشرة.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl space-y-10">
          {faqCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title}>
                <div className="flex items-center gap-2 mb-5">
                  <Icon className="h-5 w-5 text-sky-500" />
                  <h2 className="text-xl font-bold text-sky-950">{cat.title}</h2>
                </div>
                <div className="space-y-3">
                  {cat.faqs.map((faq, i) => (
                    <Card key={i} className="border-sky-100">
                      <CardContent className="p-5">
                        <h3 className="font-bold text-sky-950 mb-2">{faq.q}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-padding bg-sky-50/60">
        <div className="container-custom text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-950">لسه عندك سؤال؟</h2>
          <p className="text-slate-500 max-w-md mx-auto">كلمنا على أي وسيلة وهنرد عليك فورًا</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white" asChild>
              <a href={`tel:${siteConfig.phone}`}><Phone className="h-5 w-5" />اتصل دلوقتي</a>
            </Button>
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white" asChild>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" />واتساب</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}