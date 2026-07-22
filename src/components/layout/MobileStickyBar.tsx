"use client";

import { useState, useEffect } from "react";
import { Phone, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { QuoteDialog } from "@/components/shared/QuoteDialog";
import { trackPhoneCall } from "@/lib/analytics/events";

export function MobileStickyBar() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-30 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="h-6 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

      <div className="bg-[#1C1C1C] border-t border-[#3F4F44]/30 shadow-2xl">
        <div className="grid grid-cols-2 gap-0">

          {/* Call Button */}
          <a
            href={`tel:${siteConfig.phone}`}
            onClick={() => trackPhoneCall("mobile_sticky")}
            className="flex items-center justify-center gap-2 py-4 text-white hover:bg-white/5 transition-colors border-l border-white/10"
          >
            <Phone className="w-5 h-5 text-[#E8E3D9]" />
            <span className="text-sm font-bold">اتصل الآن</span>
          </a>

          {/* Quote Dialog Trigger */}
          <QuoteDialog
            source="mobile_sticky"
            trigger={
              <span
                role="button"
                tabIndex={0}
                className="relative flex items-center justify-center gap-2 py-4 bg-gradient-to-br from-[#3F4F44] to-[#2E3B32] text-white hover:from-[#2E3B32] hover:to-[#1C1C1C] transition-all overflow-hidden group cursor-pointer select-none"
              >
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E8E3D9]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                <Sparkles className="w-5 h-5 text-[#E8E3D9] relative z-10" />
                <span className="text-sm font-black relative z-10">
                  عرض سعر مجاني
                </span>
              </span>
            }
          />

        </div>
      </div>

      <div className="bg-[#1C1C1C]" style={{ height: "env(safe-area-inset-bottom)" }} />
    </div>
  );
}