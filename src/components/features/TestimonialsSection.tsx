"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import {
  MessageSquareQuote,
  Star,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/config/media";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-amber-400 text-amber-400" : "text-slate-200"
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      direction: "rtl",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section id="testimonials" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <MessageSquareQuote className="w-4 h-4" />
            آراء العملاء
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-sky-950 mb-3">
            عملاؤنا بيتكلموا عننا
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            آراء حقيقية من عملاء ثقوا فينا واستفادوا بخدماتنا
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                >
                  <Card className="h-full border-sky-100 hover:shadow-lg transition-shadow relative overflow-hidden">
                    <div className="absolute top-4 left-4 opacity-10">
                      <Quote className="w-16 h-16 text-sky-500" />
                    </div>
                    <CardContent className="p-6 space-y-4 relative">
                      <StarRating rating={t.rating} />
                      <p className="text-sm text-slate-600 leading-relaxed min-h-[80px]">
                        &ldquo;{t.text}&rdquo;
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-sky-50">
                        <div>
                          <p className="text-sm font-bold text-sky-950">{t.name}</p>
                          <div className="flex items-center gap-1 text-xs text-slate-400 mt-0.5">
                            <MapPin className="w-3 h-3" />
                            {t.location}
                          </div>
                        </div>
                        <span className="text-[10px] bg-sky-50 text-sky-600 px-2 py-1 rounded-full font-medium">
                          {t.service}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full bg-white border border-sky-200 text-sky-600 hover:bg-sky-50 flex items-center justify-center transition-colors shadow-sm"
              aria-label="السابق"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1.5">
              {scrollSnaps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`h-2 rounded-full transition-all ${
                    selectedIndex === i ? "w-6 bg-sky-500" : "w-2 bg-sky-200 hover:bg-sky-300"
                  }`}
                  aria-label={`الانتقال للتقييم ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full bg-white border border-sky-200 text-sky-600 hover:bg-sky-50 flex items-center justify-center transition-colors shadow-sm"
              aria-label="التالي"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}