"use client";

import { useState, useEffect } from "react";
import {
  MessageCircle, ArrowUp, X, Phone, Send,
  Package, Home, Wrench, Wind, Calendar, HelpCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/shared/Logo";
import { trackPhoneCall, trackWhatsApp } from "@/lib/analytics/events";

export function FloatingActions() {
  const [mounted, setMounted] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const timer = setTimeout(() => setShowPulse(false), 10000);
    return () => clearTimeout(timer);
  }, [mounted]);

  // Prevent body scroll when widget is open on mobile
  useEffect(() => {
    if (!mounted) return;
    if (whatsappOpen && window.innerWidth < 1024) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [whatsappOpen, mounted]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickMessages = [
    {
      icon: Package,
      text: "احتاج عرض سعر لنقل الأثاث",
      hint: "الأكثر طلباً",
    },
    {
      icon: Home,
      text: "اريد نقل أثاث كامل لكمبوند",
      hint: "خدمة VIP",
    },
    {
      icon: Wrench,
      text: "احتاج خدمة فك وتركيب أثاث",
      hint: "فنيون متخصصون",
    },
    {
      icon: Wind,
      text: "احتاج خدمة فك وتركيب تكييفات",
      hint: "فنيون معتمدون",
    },
    {
      icon: Calendar,
      text: "اريد حجز موعد للمعاينة",
      hint: "معاينة مجانية",
    },
    {
      icon: HelpCircle,
      text: "لدي استفسار عن الأسعار",
      hint: "رد فوري",
    },
  ];

  if (!mounted) return null;

  return (
    <>
      {/* Mobile Overlay when widget open */}
      <AnimatePresence>
        {whatsappOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setWhatsappOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* WhatsApp Widget - Desktop & Mobile */}
      <div className="fixed bottom-24 lg:bottom-6 left-4 lg:left-6 z-50 flex flex-col items-start gap-3">
        <AnimatePresence>
          {whatsappOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl shadow-2xl border border-[#E5E1DA] w-[calc(100vw-2rem)] max-w-[360px] overflow-hidden"
            >
              {/* Widget Header */}
              <div className="relative bg-gradient-to-br from-[#1C1C1C] via-[#2A2A2A] to-[#1C1C1C] text-white p-5">
                <div className="absolute inset-0 opacity-20" aria-hidden="true">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#3F4F44] rounded-full blur-3xl" />
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Logo variant="white" size="md" href={null} />
                        <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 bg-[#3F4F44] border-2 border-[#1C1C1C] rounded-full" />
                      </div>
                    </div>
                    <button
                      onClick={() => setWhatsappOpen(false)}
                      className="w-8 h-8 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
                      aria-label="إغلاق"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex items-center gap-1.5 text-xs text-white/80">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8E3D9] opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E8E3D9]" />
                      </span>
                      متصلون الآن
                    </span>
                    <span className="text-white/30">|</span>
                    <span className="text-xs text-white/60">
                      رد خلال دقائق
                    </span>
                  </div>

                  <p className="text-sm text-white/80 leading-relaxed">
                    مرحباً بك في خطوة، كيف يمكننا مساعدتك اليوم؟
                  </p>
                </div>
              </div>

              {/* Quick Messages */}
              <div className="p-4 bg-[#F5F2EC] max-h-[50vh] lg:max-h-[360px] overflow-y-auto">
                <p className="text-[11px] text-[#6B6B6B] mb-3 font-bold uppercase tracking-wider flex items-center gap-2">
                  <MessageCircle className="w-3 h-3" />
                  اختر رسالتك السريعة
                </p>

                <div className="space-y-2">
                  {quickMessages.map((msg, i) => {
                    const Icon = msg.icon;
                    return (
                      <a
                        key={i}
                        href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg.text)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          trackWhatsApp("floating_quick_msg");
                          setWhatsappOpen(false);
                        }}
                        className="group flex items-center gap-3 bg-white hover:bg-[#1C1C1C] border border-[#E5E1DA] hover:border-[#1C1C1C] p-3 rounded-2xl transition-all duration-200"
                      >
                        <div className="w-10 h-10 bg-[#3F4F44]/10 group-hover:bg-[#E8E3D9] text-[#3F4F44] group-hover:text-[#1C1C1C] rounded-xl flex items-center justify-center shrink-0 transition-all">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-bold text-[#1C1C1C] group-hover:text-white transition-colors leading-tight">
                            {msg.text}
                          </div>
                          <div className="text-[10px] text-[#6B6B6B] group-hover:text-[#E8E3D9] transition-colors mt-0.5">
                            {msg.hint}
                          </div>
                        </div>
                        <Send className="w-4 h-4 text-[#3F4F44] group-hover:text-[#E8E3D9] transition-all group-hover:-translate-x-1 shrink-0" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Widget Footer */}
              <div className="p-4 border-t border-[#E5E1DA] bg-white space-y-2">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackWhatsApp("floating_main");
                    setWhatsappOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 bg-[#3F4F44] hover:bg-[#2E3B32] text-white py-3 rounded-2xl text-sm font-bold transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  ابدأ محادثة جديدة
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  onClick={() => {
                    trackPhoneCall("floating_widget");
                    setWhatsappOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 text-[#1C1C1C]/70 hover:text-[#1C1C1C] py-2 text-xs font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>أو اتصل الآن:</span>
                  <span dir="ltr" className="font-bold text-[#3F4F44]">
                    {siteConfig.phone}
                  </span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Toggle Button */}
        <div className="relative">
          {showPulse && !whatsappOpen && (
            <>
              <span className="absolute inset-0 rounded-full bg-[#3F4F44] animate-ping opacity-40" />
              <span className="absolute inset-0 rounded-full bg-[#3F4F44] animate-pulse opacity-20" />
            </>
          )}

          <button
            onClick={() => {
              setWhatsappOpen(!whatsappOpen);
              if (!whatsappOpen) trackWhatsApp("floating_open");
            }}
            className="relative w-14 h-14 lg:w-16 lg:h-16 bg-[#3F4F44] hover:bg-[#2E3B32] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 border-2 border-white/20"
            aria-label="تواصل عبر واتساب"
          >
            {whatsappOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MessageCircle className="w-6 h-6 lg:w-7 lg:h-7" />
            )}
          </button>

          {!whatsappOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#E8E3D9] text-[#1C1C1C] text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-sm">
              1
            </span>
          )}
        </div>
      </div>

      {/* Back To Top */}
      <AnimatePresence>
        {showBackToTop && !whatsappOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-24 lg:bottom-6 right-6 z-40 w-11 h-11 bg-[#E8E3D9] hover:bg-[#D4CCB8] text-[#1C1C1C] rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="العودة للأعلى"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}