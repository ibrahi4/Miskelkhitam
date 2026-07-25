"use client";

import { useState } from "react";
import { Phone, Star, Clock, Shield, X, Truck } from "lucide-react";
import { siteConfig } from "@/config/site";

const announcements = [
  { icon: Phone, text: `احجز نقلتك دلوقتي: ${siteConfig.phone}` },
  { icon: Star, text: "أكتر من 4,800 نقلة ناجحة" },
  { icon: Clock, text: "جاهزين لخدمتك 24 ساعة في اليوم" },
  { icon: Shield, text: "أثاثك مؤمن عليه بالكامل أثناء النقل" },
  { icon: Truck, text: "أسطول سيارات مغلقة ومجهزة بأحدث المعدات" },
];

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const duplicated = [...announcements, ...announcements, ...announcements];

  return (
    <div className="relative bg-sky-950 text-white overflow-hidden">
      <div className="flex items-center h-9">
        <div className="flex-1 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {duplicated.map((item, i) => {
              const Icon = item.icon;
              return (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 mx-6 text-xs font-medium"
                >
                  <Icon className="w-3.5 h-3.5 text-sky-300 shrink-0" />
                  <span>{item.text}</span>
                </span>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="shrink-0 px-2.5 h-full flex items-center justify-center hover:bg-sky-900 transition-colors"
          aria-label="إغلاق الشريط"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}