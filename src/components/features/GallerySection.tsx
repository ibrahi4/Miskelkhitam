"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/config/media";

export function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const next = () => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % galleryImages.length);
  };

  const prev = () => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <ImageIcon className="w-4 h-4" />
            معرض الصور
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-sky-950 mb-3">
            شاهد أعمالنا
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            صور حقيقية من عمليات النقل والتغليف والفك والتركيب
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.button
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => openLightbox(i)}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 inset-x-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white text-xs font-medium bg-sky-500/80 px-2 py-1 rounded-lg">
                  {img.category}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 left-4 text-white/80 hover:text-white z-10"
            aria-label="إغلاق"
          >
            <X className="w-7 h-7" />
          </button>
          <button
            onClick={prev}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-10"
            aria-label="السابق"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <button
            onClick={next}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-10"
            aria-label="التالي"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-3xl aspect-[4/3]">
            <Image
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
          <p className="absolute bottom-6 text-white/80 text-sm">
            {galleryImages[lightbox].alt}
          </p>
        </div>
      )}
    </section>
  );
}