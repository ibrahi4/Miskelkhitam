"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Send,
  CheckCircle2,
  ArrowLeft,
  Shield,
  Clock,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { QuoteDialog } from "@/components/shared/QuoteDialog";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";

interface Props {
  slug: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

export default function ServiceContent({ slug }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const service = services.find((s) => s.slug === slug);

  if (!mounted || !service) {
    return null;
  }

  const Icon = service.icon;
  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-bl from-green-950 via-green-900 to-green-800">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-950/80 to-green-950/60" />
        </div>

        <div className="container-custom py-16 md:py-24 relative z-10">
          <Breadcrumb
            items={[
              { label: "خدماتنا", href: "/services" },
              { label: service.shortTitle },
            ]}
            variant="dark"
          />

          <div className="mt-6 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-green-500/20 border border-green-400/30 rounded-2xl flex items-center justify-center">
                <Icon className="w-7 h-7 text-green-400" />
              </div>
              <Badge className="bg-green-500/20 text-green-200 border-green-400/30 text-sm px-3 py-1">
                خدمة متميزة
              </Badge>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
              {service.title}
            </h1>
            <p className="text-green-100/80 leading-relaxed text-lg max-w-2xl mb-6">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white gap-2 shadow-lg shadow-green-500/30" asChild>
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="w-5 h-5" />
                  اتصل دلوقتي
                </a>
              </Button>
              <Button size="lg" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 gap-2" asChild>
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  واتساب
                </a>
              </Button>
              <QuoteDialog
                trigger={
                  <div className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border-2 border-green-400/40 bg-green-500/10 px-6 text-base font-medium text-white transition-colors hover:bg-green-500/20 cursor-pointer">
                    <Send className="w-5 h-5" />
                    عرض سعر مجاني
                  </div>
                }
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#FAFDF7] to-transparent" />
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-green-950 mb-4">عن الخدمة</h2>
                <p className="text-slate-600 leading-relaxed text-base">
                  {service.longDescription}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-green-950 mb-4">مميزات الخدمة</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50/60 border border-green-100/60">
                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 font-medium">{feature}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {service.priceNote && (
                <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/60">
                  <h3 className="font-bold text-amber-900 mb-1">ملاحظة عن السعر</h3>
                  <p className="text-sm text-amber-800">{service.priceNote}</p>
                </div>
              )}
            </div>

            <div className="space-y-5">
              <Card className="border-green-100/60 shadow-md">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-green-950 text-lg">محتاج الخدمة دي؟</h3>
                  <p className="text-sm text-slate-500">كلمنا دلوقتي وهنرتب لك كل حاجة</p>
                  <div className="space-y-2">
                    <Button className="w-full bg-green-700 hover:bg-green-800 text-white gap-2" asChild>
                      <a href={`tel:${siteConfig.phone}`}><Phone className="w-4 h-4" />اتصل دلوقتي</a>
                    </Button>
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white gap-2" asChild>
                      <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-4 h-4" />واتساب</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-100/60">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-bold text-green-950">ليه مسك الختام؟</h3>
                  {[
                    { icon: Shield, text: "ضمان شامل على المنقولات" },
                    { icon: Clock, text: "التزام كامل بالمواعيد" },
                    { icon: Award, text: `خبرة ${siteConfig.yearsOfExperience}+ سنوات` },
                  ].map((item, i) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <ItemIcon className="w-4 h-4 text-green-600" />
                        <span>{item.text}</span>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-green-50/40">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-green-950 mb-6 text-center">خدمات تانية ممكن تحتاجها</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.map((s, i) => {
              const SIcon = s.icon;
              return (
                <motion.div key={s.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <Link href={`/services/${s.slug}`}>
                    <Card className="group h-full border-green-100/60 hover:shadow-lg hover:border-green-200 transition-all cursor-pointer bg-white">
                      <div className="relative h-40 overflow-hidden rounded-t-xl">
                        <Image
                          src={s.image}
                          alt={s.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 to-transparent" />
                        <div className="absolute bottom-3 right-3 w-10 h-10 bg-green-600 text-white rounded-xl flex items-center justify-center">
                          <SIcon className="w-5 h-5" />
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold text-green-950 group-hover:text-green-700 transition-colors">{s.shortTitle}</h3>
                        <p className="text-sm text-slate-500 line-clamp-2 mt-1">{s.description}</p>
                        <div className="flex items-center gap-1 text-green-600 text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                          <span>تفاصيل</span>
                          <ArrowLeft className="w-4 h-4" />
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

      <section className="section-padding bg-green-950 text-white">
        <div className="container-custom text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">جاهز تبدأ؟</h2>
          <p className="text-green-200 max-w-md mx-auto">كلمنا دلوقتي والمعاينة مجانية وعرض السعر فوري.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="bg-white text-green-800 hover:bg-green-50 gap-2" asChild>
              <a href={`tel:${siteConfig.phone}`}><Phone className="w-5 h-5" />اتصل دلوقتي</a>
            </Button>
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white gap-2" asChild>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5" />واتساب</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}