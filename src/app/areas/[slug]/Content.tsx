"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Send,
  MapPin,
  CheckCircle2,
  ArrowLeft,
  Building2,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { QuoteDialog } from "@/components/shared/QuoteDialog";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import type { Area } from "@/config/areas";

interface Props {
  area: Area;
  relatedAreas: Area[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

export default function AreaContent({ area, relatedAreas }: Props) {
  const [mounted, setMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-bl from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500 rounded-full blur-3xl" />
        </div>
        <div className="container-custom py-16 md:py-24 relative z-10">
          <Breadcrumb
            items={[
              { label: "مناطق الخدمة", href: "/areas" },
              { label: area.name },
            ]}
            variant="dark"
          />
          <div className="mt-6 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-blue-500/20 border border-blue-400/30 rounded-2xl flex items-center justify-center">
                <MapPin className="w-7 h-7 text-blue-400" />
              </div>
              {area.popular && (
                <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 text-sm px-3 py-1">منطقة رئيسية</Badge>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
              {area.heroTitle}
            </h1>
            <p className="text-blue-100/80 leading-relaxed text-lg max-w-2xl mb-6">
              {area.heroDescription}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white gap-2 shadow-lg shadow-blue-500/30" asChild>
                <a href={`tel:${siteConfig.phone}`}><Phone className="w-5 h-5" />اتصل دلوقتي</a>
              </Button>
              <Button size="lg" className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 gap-2" asChild>
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5" />واتساب</a>
              </Button>
              <QuoteDialog
                trigger={
                  <div className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border-2 border-blue-400/40 bg-blue-500/10 px-6 text-base font-medium text-white transition-colors hover:bg-blue-500/20 cursor-pointer">
                    <Send className="w-5 h-5" />عرض سعر
                  </div>
                }
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#F8FBFF] to-transparent" />
      </section>

      {/* Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-blue-950 mb-4">نقل اثاث في {area.name}</h2>
                <p className="text-slate-600 leading-relaxed">{area.longDescription}</p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-xl font-bold text-blue-950 mb-4">ليه نخدمك في {area.name}؟</h3>
                <div className="space-y-3">
                  {area.highlights.map((h, i) => (
                    <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50/60 border border-blue-100/60">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 font-medium">{h}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Compounds */}
              <div>
                <h3 className="text-xl font-bold text-blue-950 mb-4">كمبوندات ومناطق بنخدمها في {area.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {area.compounds.map((c) => (
                    <span key={c} className="rounded-full bg-blue-50 border border-blue-100/60 px-4 py-2 text-sm font-medium text-blue-700">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              {area.faqs.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-blue-950 mb-4">اسئلة شائعة عن النقل في {area.name}</h3>
                  <div className="space-y-2">
                    {area.faqs.map((faq, i) => {
                      const isOpen = openFaq[i] || false;
                      return (
                        <Card key={i} className="border-blue-100/60">
                          <button type="button" onClick={() => setOpenFaq((p) => ({ ...p, [i]: !p[i] }))} className="w-full flex items-center justify-between p-5 text-right">
                            <h4 className="font-bold text-blue-950 text-sm">{faq.question}</h4>
                            <ChevronDown className={`w-5 h-5 text-blue-600 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-5 -mt-1">
                              <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </Card>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <Card className="border-blue-100/60 shadow-md">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-blue-950 text-lg">محتاج تنقل في {area.name}؟</h3>
                  <p className="text-sm text-slate-500">كلمنا دلوقتي وهنوصلك</p>
                  <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white gap-2" asChild>
                    <a href={`tel:${siteConfig.phone}`}><Phone className="w-4 h-4" />اتصل دلوقتي</a>
                  </Button>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white gap-2" asChild>
                    <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-4 h-4" />واتساب</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-blue-100/60">
                <CardContent className="p-6">
                  <h3 className="font-bold text-blue-950 mb-3">خدماتنا في {area.name}</h3>
                  <div className="space-y-2">
                    {services.slice(0, 4).map((s) => {
                      const SIcon = s.icon;
                      return (
                        <Link key={s.id} href={`/services/${s.slug}`} className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-700 transition-colors">
                          <SIcon className="w-4 h-4 text-blue-600" />
                          <span>{s.shortTitle}</span>
                        </Link>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Areas */}
      {relatedAreas.length > 0 && (
        <section className="section-padding bg-blue-50/40">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-blue-950 mb-6 text-center">مناطق تانية بنخدمها</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedAreas.map((ra, i) => (
                <motion.div key={ra.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <Link href={`/areas/${ra.slug}`}>
                    <Card className="group h-full border-blue-100/60 hover:shadow-lg hover:border-blue-200 transition-all cursor-pointer bg-white">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-11 h-11 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <ArrowLeft className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors" />
                        </div>
                        <h3 className="font-bold text-blue-950 group-hover:text-blue-700 transition-colors">{ra.name}</h3>
                        <p className="text-sm text-slate-500 line-clamp-2 mt-1">{ra.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-blue-950 text-white">
        <div className="container-custom text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">جاهز تنقل في {area.name}؟</h2>
          <p className="text-blue-200 max-w-md mx-auto">كلمنا دلوقتي والمعاينة مجانية.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50 gap-2" asChild>
              <a href={`tel:${siteConfig.phone}`}><Phone className="w-5 h-5" />اتصل دلوقتي</a>
            </Button>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white gap-2" asChild>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5" />واتساب</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}