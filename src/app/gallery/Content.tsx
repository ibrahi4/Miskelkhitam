"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  Send,
} from "lucide-react";
import { galleryImages } from "@/config/media";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/shared/QuoteDialog";

export default function GalleryContent() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("الكل");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = useMemo(() => {
    return ["الكل", ...Array.from(new Set(galleryImages.map((item) => item.category)))];
  }, []);

  const filteredImages = useMemo(() => {
    if (selectedCategory === "الكل") return galleryImages;
    return galleryImages.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const activeImage = activeIndex !== null ? filteredImages[activeIndex] : null;

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % filteredImages.length);
  };

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-3xl text-center mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-4">
              <ImageIcon className="h-4 w-4" />
              معرض الصور
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-blue-950 mb-4">
              صور حقيقية من اعمالنا
            </h1>
            <p className="text-slate-600 leading-relaxed md:text-lg">
              استعرض مستوى التنظيم، التغليف، والنقل الاحترافي اللي نقدمه يومياً لعملائنا.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filters */}
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
                    ? "bg-blue-700 text-white"
                    : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <motion.button
                key={image.id}
                type="button"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setActiveIndex(index)}
                className="group relative aspect-square overflow-hidden rounded-2xl border border-blue-100/60 bg-slate-100"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-full p-3 transition-transform duration-300 group-hover:translate-y-0">
                  <div className="rounded-xl bg-white/95 px-3 py-2 text-right">
                    <p className="text-sm font-bold text-blue-950">{image.category}</p>
                    <p className="text-xs text-slate-500">{image.alt}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-blue-50/50">
        <div className="container-custom">
          <div className="rounded-3xl bg-blue-950 px-6 py-10 text-center text-white md:px-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              جاهز تنقل اثاثك مع فريق محترف؟
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-blue-200">
              تواصل معنا الآن واحصل على عرض سعر سريع وخدمة منظمة.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50 gap-2" asChild>
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="h-5 w-5" />
                  اتصل الآن
                </a>
              </Button>
              <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-600 gap-2" asChild>
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  واتساب
                </a>
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

      {/* Lightbox */}
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
              onClick={() => setActiveIndex(null)}
              className="absolute left-4 top-4 z-10 text-white/80 hover:text-white"
              aria-label="اغلاق"
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