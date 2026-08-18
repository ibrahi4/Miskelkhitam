"use client";

import { useState, useEffect } from "react";
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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4 },
  }),
};

export default function TestimonialsContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const averageRating = (
    testimonials.reduce((sum, item) => sum + item.rating, 0) / testimonials.length
  ).toFixed(1);

  const stats = [
    { title: "متوسط التقييم", value: averageRating, icon: Star },
    { title: "آراء موثقة", value: `${testimonials.length}+`, icon: MessageSquareQuote },
    { title: "سنوات خبرة", value: `${siteConfig.yearsOfExperience}+`, icon: Shield },
    { title: "مناطق خدمة", value: `${siteConfig.serviceAreas.length}+`, icon: Users },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 via-white to-white">
        <div className="container-custom py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-700">
              <MessageSquareQuote className="h-4 w-4" />
              آراء العملاء
            </div>
            <h1 className="mb-4 text-3xl font-black text-green-950 md:text-5xl">
              ثقة عملائنا هي اكبر دليل
            </h1>
            <p className="text-slate-600 leading-relaxed md:text-lg">
              آراء حقيقية من عملاء استفادوا بخدماتنا في النقل والتغليف والفك والتركيب.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <Card className="border-green-100/60 bg-white shadow-sm">
                    <CardContent className="p-5 text-center">
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="text-lg font-bold text-green-950">{item.value}</div>
                      <div className="text-sm text-slate-500">{item.title}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((item, index) => (
              <motion.div key={item.id} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full border-green-100/60 transition-shadow hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <StarRating rating={item.rating} />
                      <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                        {item.service}
                      </span>
                    </div>
                    <p className="mb-5 text-sm leading-relaxed text-slate-600">
                      &ldquo;{item.text}&rdquo;
                    </p>
                    <div className="border-t border-green-50 pt-4">
                      <div className="font-bold text-green-950">{item.name}</div>
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

      {/* CTA */}
      <section className="section-padding bg-green-50/50">
        <div className="container-custom">
          <div className="rounded-3xl bg-green-950 px-6 py-10 text-center text-white md:px-10">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">انضم لعملائنا السعداء</h2>
            <p className="mx-auto mb-6 max-w-2xl text-green-200">
              لو محتاج شركة نقل اثاث موثوقة ومنظمة، تواصل معنا الآن.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" className="bg-white text-green-800 hover:bg-green-50 gap-2" asChild>
                <a href={`tel:${siteConfig.phone}`}><Phone className="h-5 w-5" />اتصل الآن</a>
              </Button>
              <Button size="lg" className="bg-green-500 text-white hover:bg-green-600 gap-2" asChild>
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" />واتساب</a>
              </Button>
              <QuoteDialog
                trigger={
                  <div className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/30 px-6 text-base font-medium text-white transition-colors hover:bg-white/10 cursor-pointer">
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