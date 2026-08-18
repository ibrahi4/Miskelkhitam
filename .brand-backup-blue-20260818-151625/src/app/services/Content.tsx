"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Phone, Wrench, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import { QuoteDialog } from "@/components/shared/QuoteDialog";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function ServicesContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-bl from-green-950 via-green-900 to-green-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container-custom py-16 md:py-24 text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-400/30 px-4 py-1.5 text-sm font-semibold text-green-200 mb-4">
            <Wrench className="h-4 w-4" />
            خدماتنا
          </div>
          <h1 className="mb-4 text-3xl md:text-5xl font-black text-white leading-tight">
            كل حاجة اثاثك محتاجها
            <br />
            <span className="text-green-400">في مكان واحد</span>
          </h1>
          <p className="mx-auto max-w-2xl text-green-100/80 md:text-lg leading-relaxed">
            من النقل والتغليف للفك والتركيب - بنقدم خدمات متكاملة بمعايير احترافية وضمان شامل.
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#FAFDF7] to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <Link href={`/services/${service.slug}`}>
                    <Card className="group h-full cursor-pointer overflow-hidden border-green-100/60 transition-all hover:border-green-200 hover:shadow-xl hover:-translate-y-1 bg-white">
                      <div className="relative h-52 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-green-950/20 to-transparent" />
                        <div className="absolute bottom-3 right-3 flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 text-white shadow-lg">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>

                      <CardContent className="p-5">
                        <h2 className="mb-2 text-lg font-bold text-green-950 transition-colors group-hover:text-green-700">
                          {service.shortTitle}
                        </h2>
                        <p className="line-clamp-3 text-sm leading-relaxed text-slate-500">
                          {service.description}
                        </p>
                        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-green-600 transition-all group-hover:gap-2">
                          <span>تفاصيل الخدمة</span>
                          <ArrowLeft className="h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-green-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl" />
        </div>
        <div className="container-custom text-center relative space-y-6">
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">محتاج تحجز خدمة؟</h2>
          <p className="mx-auto max-w-md text-green-200">كلمنا دلوقتي وهنرتب لك كل حاجة</p>

          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="bg-white text-green-800 hover:bg-green-50 gap-2" asChild>
              <a href={`tel:${siteConfig.phone}`}>
                <Phone className="h-5 w-5" />
                اتصل دلوقتي
              </a>
            </Button>
            <Button size="lg" className="bg-green-500 text-white hover:bg-green-600 gap-2" asChild>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                واتساب
              </a>
            </Button>
            <QuoteDialog
              trigger={
                <div className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-6 text-base font-medium text-white transition-colors hover:bg-white/20 cursor-pointer">
                  <Send className="h-5 w-5" />
                  عرض سعر
                </div>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}