"use client";

import { useState, useEffect } from "react";
import {
  Sparkles, Truck, Shield, Clock, Percent, Gift,
  Crown, Award, Star, CheckCircle2, Zap, Phone,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const items = [
  { icon: Percent, text: "خصم حصري 15% على أول طلب" },
  { icon: Truck, text: "شحن مجاني داخل التجمع الخامس ومدينتي" },
  { icon: Shield, text: "ضمان كامل على جميع مقتنياتك" },
  { icon: Crown, text: "خدمة VIP لسكان الكمبوندات الراقية" },
  { icon: Clock, text: "متاحون 24 ساعة طوال أيام الأسبوع" },
  { icon: Gift, text: "معاينة مجانية بدون أي التزام" },
  { icon: Award, text: "خبرة أكثر من 10 سنوات في السوق المصري" },
  { icon: Star, text: "تقييم 4.9 من 5 من عملائنا الكرام" },
  { icon: CheckCircle2, text: "فرق مدربة ومحترفة في نقل الأثاث الفاخر" },
  { icon: Zap, text: "استجابة سريعة خلال دقائق من التواصل" },
];

export function AnnouncementBar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-[#1C1C1C] text-white h-10 flex items-center justify-center overflow-hidden">
        <div className="flex items-center gap-2 text-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#E8E3D9]" />
          <span className="text-white/80">خطوة لنقل الأثاث - خدمة تليق بمنزلك</span>
        </div>
      </div>
    );
  }

  // Duplicate items for seamless infinite scroll
  const scrollItems = [...items, ...items, ...items];

  return (
    <div className="relative bg-gradient-to-r from-[#0F0F0F] via-[#1C1C1C] to-[#0F0F0F] text-white overflow-hidden border-b border-[#3F4F44]/30 group">

      {/* Luxury shimmer overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E8E3D9]/5 to-transparent animate-shimmer-slow" />
      </div>

      {/* Gold accent line on top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8E3D9]/40 to-transparent" />

      {/* Gold accent line on bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3F4F44]/60 to-transparent" />

      <div className="relative flex items-center h-10">

        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/80 to-transparent z-10 pointer-events-none" />

        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0F0F0F] via-[#0F0F0F]/80 to-transparent z-10 pointer-events-none" />

        {/* Phone number - Desktop pinned right */}
        <a
          href={`tel:${siteConfig.phone}`}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 items-center gap-1.5 text-xs font-bold text-[#E8E3D9] hover:text-white transition-colors bg-[#0F0F0F] pl-4"
          dir="ltr"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>{siteConfig.phone}</span>
        </a>

        {/* Marquee track */}
        <div className="flex animate-marquee-rtl whitespace-nowrap group-hover:[animation-play-state:paused]">
          {scrollItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2.5 mx-6 md:mx-8 shrink-0"
              >
                {/* Icon in circle */}
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#3F4F44]/30 border border-[#E8E3D9]/20 shrink-0">
                  <Icon className="w-3 h-3 text-[#E8E3D9]" />
                </div>

                {/* Text */}
                <span className="text-xs md:text-sm text-white/90 font-medium tracking-wide">
                  {item.text}
                </span>

                {/* Diamond separator */}
                <span className="text-[#E8E3D9]/40 text-[8px] mr-4 md:mr-6">
                  ◆
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(33.333%);
          }
        }

        @keyframes shimmer-slow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-marquee-rtl {
          animation: marquee-rtl 60s linear infinite;
        }

        .animate-shimmer-slow {
          animation: shimmer-slow 8s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .animate-marquee-rtl {
            animation-duration: 45s;
          }
        }
      `}</style>
    </div>
  );
}