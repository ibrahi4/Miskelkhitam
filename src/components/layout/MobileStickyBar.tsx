"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppWidget } from "@/components/shared/WhatsAppWidget";
import { trackPhoneCall, trackWhatsApp } from "@/lib/analytics/events";

export function MobileStickyBar() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [widgetOpen, setWidgetOpen] = useState(false);

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
    <>
      {/* WhatsApp Widget for Mobile */}
      <WhatsAppWidget
        open={widgetOpen}
        onClose={() => setWidgetOpen(false)}
        position="mobile-bottom"
      />

      {/* Sticky Bar */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-30 transition-all duration-500 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        {/* Subtle shadow above bar */}
        <div className="h-4 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />

        {/* Main Bar */}
        <div className="bg-[#1C1C1C] border-t border-[#3F4F44]/40 shadow-2xl">
          <div className="grid grid-cols-2 gap-0">

            {/* Call Button */}
            <a
              href={`tel:${siteConfig.phone}`}
              onClick={() => trackPhoneCall("mobile_sticky")}
              className="relative flex items-center justify-center gap-2 py-4 text-white bg-gradient-to-br from-[#1C1C1C] to-[#2A2A2A] active:from-[#2A2A2A] active:to-[#1C1C1C] transition-all overflow-hidden group border-l border-white/10"
            >
              <div className="w-9 h-9 bg-[#E8E3D9]/10 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#E8E3D9]" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] text-white/60 font-medium leading-none">
                  اتصل بنا
                </span>
                <span className="text-sm font-black text-white leading-tight mt-0.5">
                  الآن
                </span>
              </div>
            </a>

            {/* WhatsApp Button - Opens Widget */}
            <button
              type="button"
              onClick={() => {
                setWidgetOpen(true);
                trackWhatsApp("mobile_sticky");
              }}
              className="relative flex items-center justify-center gap-2 py-4 text-white bg-gradient-to-br from-[#1F5F3F] to-[#164A30] active:from-[#164A30] active:to-[#0F3520] transition-all overflow-hidden group"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-40 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              <div className="relative w-9 h-9 bg-white/15 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8E3D9] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E8E3D9]" />
                </span>
              </div>

              <div className="relative flex flex-col items-start">
                <span className="text-[10px] text-white/70 font-medium leading-none">
                  واتساب
                </span>
                <span className="text-sm font-black text-white leading-tight mt-0.5">
                  رد فوري
                </span>
              </div>
            </button>

          </div>
        </div>

        {/* Safe area for iOS */}
        <div className="bg-[#1C1C1C]" style={{ height: "env(safe-area-inset-bottom)" }} />
      </div>
    </>
  );
}