"use client";

import { motion } from "framer-motion";
import {
  MessageSquareQuote,
  Star,
  MapPin,
  Shield,
  Users,
  Phone,
  MessageCircle,
  Send,
} from "lucide-react";
import { testimonials } from "@/config/media";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteDialog } from "@/components/shared/QuoteDialog";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating ? "fill-amber-400 text-amber-400" : "text-slate-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsContent() {
  const averageRating = (
    testimonials.reduce((sum, item) => sum + item.rating, 0) / testimonials.length
  ).toFixed(1);

  const stats = [
    {
      title: "متوسط التقييم",
      value: averageRating,
      icon: Star,
    },
    {
      title: "آراء موثقة",
      value: `${testimonials.length}+`,
      icon: MessageSquareQuote,
    },
    {
      title: "سنوات خبرة",
      value: `${siteConfig.yearsOfExperience}+`,
      icon: Shield,
    },
    {
      title: "مناطق خدمة",
      value: `${siteConfig.serviceAreas.length}+`,
      icon: Users,
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white">
        <div className="container-custom py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700">
              <MessageSquareQuote className="h-4 w-4" />
              آراء العملاء
            </div>
            <h1 className="mb-4 text-3xl font-black text-sky-950 md:text-5xl">
              ثقة عملائنا هي أكبر دليل
            </h1>
            <p className="text-slate-600 leading-relaxed md:text-lg">
              آراء حقيقية من عملاء استفادوا بخدماتنا في النقل، التغليف، الفك،
              التركيب، ورفع الأثاث.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Card className="border-sky-100 bg-white shadow-sm">
                    <CardContent className="p-5 text-center">
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="text-lg font-bold text-sky-950">{item.value}</div>
                      <div className="text-sm text-slate-500">{item.title}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <Card className="h-full border-sky-100 transition-shadow hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <StarRating rating={item.rating} />
                      <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                        {item.service}
                      </span>
                    </div>

                    <p className="mb-5 text-sm leading-relaxed text-slate-600">
                      &ldquo;{item.text}&rdquo;
                    </p>

                    <div className="border-t border-sky-50 pt-4">
                      <div className="font-bold text-sky-950">{item.name}</div>
                      <div className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-sky-50/60">
        <div className="container-custom">
          <div className="rounded-3xl bg-gradient-to-l from-sky-600 to-sky-500 px-6 py-10 text-center text-white md:px-10">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">
              انضم لعملائنا السعداء
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-sky-100">
              لو محتاج شركة نقل أثاث موثوقة ومنظمة، تواصل معنا الآن واحصل على
              خدمة تليق بمقتنياتك.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                size="lg"
                className="bg-white text-sky-700 hover:bg-sky-50"
                asChild
              >
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="h-5 w-5" />
                  اتصل الآن
                </a>
              </Button>

              <Button
                size="lg"
                className="bg-green-500 text-white hover:bg-green-600"
                asChild
              >
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  واتساب
                </a>
              </Button>

              <QuoteDialog
                trigger={
                  <div className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/35 px-6 text-base font-medium text-white transition-colors hover:bg-white/10">
                    <Send className="h-5 w-5" />
                    طلب عرض سعر
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}