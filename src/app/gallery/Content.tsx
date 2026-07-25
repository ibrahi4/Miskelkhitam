"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
  Shield,
  Package,
  Truck,
  Phone,
  MessageCircle,
  Send,
} from "lucide-react";
import { galleryImages } from "@/config/media";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteDialog } from "@/components/shared/QuoteDialog";

const stats = [
  {
    title: "صور حقيقية",
    value: `${galleryImages.length}+`,
    icon: ImageIcon,
  },
  {
    title: "عمليات تغليف",
    value: "احترافية",
    icon: Package,
  },
  {
    title: "نقل آمن",
    value: "مضمون",
    icon: Shield,
  },
  {
    title: "تنفيذ سريع",
    value: "ومنظم",
    icon: Truck,
  },
];

export default function GalleryContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("الكل");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const categories = useMemo(() => {
    return ["الكل", ...Array.from(new Set(galleryImages.map((item) => item.category)))];
  }, []);

  const filteredImages = useMemo(() => {
    if (selectedCategory === "الكل") {
      return galleryImages;
    }

    return galleryImages.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % filteredImages.length);
  };

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  const activeImage = activeIndex !== null ? filteredImages[activeIndex] : null;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-3xl text-center mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700 mb-4">
              <ImageIcon className="h-4 w-4" />
              معرض الصور
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-sky-950 mb-4">
              صور حقيقية من أعمالنا
            </h1>
            <p className="text-slate-600 leading-relaxed md:text-lg">
              استعرض مستوى التنظيم، التغليف، والنقل الاحترافي اللي نقدمه يوميًا
              لعملائنا في القاهرة الجديدة، مدينتي، الشيخ زايد، و6 أكتوبر.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Card className="border-sky-100 bg-white/90 shadow-sm">
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
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setSelectedCategory(category);
                  setActiveIndex(null);
                }}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  selectedCategory === category
                    ? "bg-sky-500 text-white"
                    : "bg-sky-50 text-sky-700 hover:bg-sky-100"
                }`}
                aria-label={`عرض صور ${category}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <motion.button
                key={image.id}
                type="button"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square overflow-hidden rounded-3xl border border-sky-100 bg-slate-100"
                aria-label={image.alt}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-full p-3 transition-transform duration-300 group-hover:translate-y-0">
                  <div className="rounded-xl bg-white/95 px-3 py-2 text-right">
                    <p className="text-sm font-bold text-sky-950">{image.category}</p>
                    <p className="text-xs text-slate-500">{image.alt}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-sky-50/60">
        <div className="container-custom">
          <div className="rounded-3xl bg-gradient-to-l from-sky-700 to-sky-500 px-6 py-10 text-center text-white md:px-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              جاهز تنقل أثاثك مع فريق محترف؟
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-sky-100">
              تواصل معنا الآن واحصل على عرض سعر سريع وخدمة منظمة من أول المعاينة
              حتى التسليم.
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

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 p-4"
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute left-4 top-4 z-10 text-white/80 hover:text-white"
              aria-label="إغلاق"
            >
              <X className="h-7 w-7" />
            </button>

            <button
              type="button"
              onClick={showPrev}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-white/80 hover:text-white"
              aria-label="السابق"
            >
              <ChevronRight className="h-9 w-9" />
            </button>

            <button
              type="button"
              onClick={showNext}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-white/80 hover:text-white"
              aria-label="التالي"
            >
              <ChevronLeft className="h-9 w-9" />
            </button>

            <div className="flex h-full items-center justify-center">
              <div className="relative aspect-[4/3] w-full max-w-5xl">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-6 text-center text-white">
              <p className="font-semibold">{activeImage.category}</p>
              <p className="text-sm text-white/75">{activeImage.alt}</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}