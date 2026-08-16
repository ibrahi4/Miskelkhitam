"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  HelpCircle,
  Phone,
  MessageCircle,
  Truck,
  Package,
  CreditCard,
  Clock,
  Shield,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

const faqCategories = [
  {
    title: "عن خدمات النقل",
    icon: Truck,
    faqs: [
      { q: "بتنقلوا جوه نفس المنطقة ولا بين مناطق؟", a: "الاتنين. بننقل جوه نفس المنطقة وبين اي منطقتين. سواء من التجمع لمدينتي او من الشيخ زايد لاكتوبر." },
      { q: "بتنقلوا مكاتب وشركات؟", a: "ايوه، عندنا خدمة نقل مكاتب متخصصة بتشمل كل حاجة من الديسكات للسيرفرات." },
      { q: "ممكن احجز في نفس اليوم؟", a: "بنحاول نوفر اقرب موعد. لو فيه متاح في نفس اليوم هنأكد لك فوراً." },
    ],
  },
  {
    title: "التغليف والحماية",
    icon: Package,
    faqs: [
      { q: "التغليف بفلوس ولا مع الخدمة؟", a: "التغليف الاساسي مشمول. التغليف الاحترافي الكامل ليه تسعيرة منفصلة حسب الكمية." },
      { q: "بتستخدموا ايه في التغليف؟", a: "استرتش فيلم صناعي، فقاعات هوائية، كرتون مقوى ثلاثي الطبقات، وفلين للاجهزة." },
      { q: "لو عندي انتيكات غالية هتتغلف ازاي؟", a: "كل قطعة بتتغلف يدوياً بمواد مخصصة. وبنوفر صناديق خشبية للقطع الكبيرة والثمينة." },
    ],
  },
  {
    title: "الاسعار والدفع",
    icon: CreditCard,
    faqs: [
      { q: "ازاي بتحسبوا السعر؟", a: "بنعمل معاينة مجانية، وبناءً عليها بنحدد السعر حسب حجم الاثاث والمسافة والخدمات المطلوبة. السعر بيكون مكتوب ونهائي." },
      { q: "فيه رسوم مخفية؟", a: "ابداً. اللي بنتفق عليه هو اللي هتدفعه. مفيش مفاجآت." },
      { q: "الدفع قبل ولا بعد؟", a: "الدفع بيكون بعد ما نخلص النقلة كاملة وتتأكد ان كل حاجة تمام." },
    ],
  },
  {
    title: "المواعيد والتوفر",
    icon: Clock,
    faqs: [
      { q: "بتشتغلوا في الاجازات؟", a: "ايوه، احنا متاحين 24 ساعة / 7 ايام، بما فيها الاجازات والاعياد." },
      { q: "بتغطوا انهي مناطق؟", a: `بنغطي: ${siteConfig.serviceAreas.join("، ")}. ولو منطقتك مش في القائمة - كلمنا وهنوصلك.` },
    ],
  },
  {
    title: "الضمان والتأمين",
    icon: Shield,
    faqs: [
      { q: "اثاثي مأمن عليه؟", a: "ايوه. كل المنقولات مؤمن عليها بالكامل طول فترة النقل." },
      { q: "لو حاجة اتكسرت هتعوضوني؟", a: "طبعاً. لو حصل اي تلف - وده نادر جداً - بنتحمل المسؤولية الكاملة حسب سياسة التأمين." },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4 },
  }),
};

export default function FaqContent() {
  const [mounted, setMounted] = useState(false);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggle = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!mounted) return null;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 via-white to-white">
        <div className="container-custom py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700 mb-4">
            <HelpCircle className="h-4 w-4" />
            اسئلة شائعة
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-green-950 mb-4">عندك سؤال؟ هنا الاجابة</h1>
          <p className="text-slate-600 max-w-2xl mx-auto md:text-lg">جمعنا لك اكتر الاسئلة اللي العملاء بيسألوها مع اجابات واضحة ومباشرة.</p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl space-y-10">
          {faqCategories.map((cat, catIndex) => {
            const Icon = cat.icon;
            return (
              <motion.div key={cat.title} custom={catIndex} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-9 h-9 bg-green-50 text-green-700 rounded-lg flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-green-950">{cat.title}</h2>
                </div>
                <div className="space-y-2">
                  {cat.faqs.map((faq, i) => {
                    const key = `${catIndex}-${i}`;
                    const isOpen = openItems[key] || false;
                    return (
                      <Card key={i} className="border-green-100/60 overflow-hidden">
                        <button
                          type="button"
                          onClick={() => toggle(key)}
                          className="w-full flex items-center justify-between p-5 text-right"
                        >
                          <h3 className="font-bold text-green-950 text-sm">{faq.q}</h3>
                          <ChevronDown className={`w-5 h-5 text-green-600 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 -mt-1">
                            <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                          </div>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-green-50/50">
        <div className="container-custom text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-green-950">لسه عندك سؤال؟</h2>
          <p className="text-slate-500 max-w-md mx-auto">كلمنا على اي وسيلة وهنرد عليك فوراً</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white gap-2" asChild>
              <a href={`tel:${siteConfig.phone}`}><Phone className="h-5 w-5" />اتصل دلوقتي</a>
            </Button>
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white gap-2" asChild>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" />واتساب</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}