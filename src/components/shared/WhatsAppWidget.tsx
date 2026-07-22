"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle, X, Phone, Send,
  Package, Home, Wrench, Wind, Calendar, HelpCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/shared/Logo";
import { trackPhoneCall, trackWhatsApp } from "@/lib/analytics/events";

interface WhatsAppWidgetProps {
  open: boolean;
  onClose: () => void;
  position?: "desktop-left" | "mobile-bottom";
}

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

export function WhatsAppWidget({
  open,
  onClose,
  position = "desktop-left",
}: WhatsAppWidgetProps) {
  // Prevent body scroll on mobile when open
  useEffect(() => {
    if (open && position === "mobile-bottom") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, position]);

  const isMobile = position === "mobile-bottom";

  return (
    <>
      {/* Overlay backdrop - Mobile only */}
      <AnimatePresence>
        {open && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-[60] backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Widget Container */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={
              isMobile
                ? { opacity: 0, y: "100%" }
                : { opacity: 0, y: 20, scale: 0.95 }
            }
            animate={
              isMobile
                ? { opacity: 1, y: 0 }
                : { opacity: 1, y: 0, scale: 1 }
            }
            exit={
              isMobile
                ? { opacity: 0, y: "100%" }
                : { opacity: 0, y: 20, scale: 0.95 }
            }
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={
              isMobile
                ? "fixed bottom-0 left-0 right-0 z-[70] lg:hidden bg-white rounded-t-3xl shadow-2xl border-t border-[#E5E1DA] max-h-[90vh] flex flex-col"
                : "hidden lg:flex flex-col fixed bottom-24 left-6 z-50 bg-white rounded-3xl shadow-2xl border border-[#E5E1DA] w-[380px] max-h-[85vh] overflow-hidden"
            }
          >
            {/* Widget Header */}
            <div className="relative bg-gradient-to-br from-[#1C1C1C] via-[#2A2A2A] to-[#1C1C1C] text-white p-4 md:p-5 shrink-0">
              <div className="absolute inset-0 opacity-20" aria-hidden="true">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#1F5F3F] rounded-full blur-3xl" />
              </div>

              {/* Handle bar for mobile */}
              {isMobile && (
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-1 bg-white/20 rounded-full" />
                </div>
              )}

              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Logo variant="white" size="md" href={null} />
                      <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 bg-[#1F5F3F] border-2 border-[#1C1C1C] rounded-full" />
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-9 h-9 hover:bg-white/10 active:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                    aria-label="إغلاق"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center gap-2 mb-2">
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

            {/* Quick Messages - Scrollable */}
            <div className="flex-1 overflow-y-auto p-4 bg-[#F5F2EC]">
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
                        onClose();
                      }}
                      className="group flex items-center gap-3 bg-white hover:bg-[#1C1C1C] active:bg-[#1C1C1C] border border-[#E5E1DA] hover:border-[#1C1C1C] p-3 md:p-3.5 rounded-2xl transition-all duration-200"
                    >
                      <div className="w-11 h-11 bg-[#1F5F3F]/10 group-hover:bg-[#E8E3D9] group-active:bg-[#E8E3D9] text-[#1F5F3F] group-hover:text-[#1C1C1C] group-active:text-[#1C1C1C] rounded-xl flex items-center justify-center shrink-0 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0 text-right">
                        <div className="text-sm font-bold text-[#1C1C1C] group-hover:text-white group-active:text-white transition-colors leading-tight">
                          {msg.text}
                        </div>
                        <div className="text-[11px] text-[#6B6B6B] group-hover:text-[#E8E3D9] group-active:text-[#E8E3D9] transition-colors mt-1">
                          {msg.hint}
                        </div>
                      </div>
                      <Send className="w-4 h-4 text-[#1F5F3F] group-hover:text-[#E8E3D9] group-active:text-[#E8E3D9] transition-all group-hover:-translate-x-1 shrink-0" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Widget Footer */}
            <div className="p-4 border-t border-[#E5E1DA] bg-white space-y-2 shrink-0">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsApp("floating_main");
                  onClose();
                }}
                className="flex items-center justify-center gap-2 bg-[#1F5F3F] hover:bg-[#164A30] active:bg-[#0F3520] text-white py-3 md:py-3.5 rounded-2xl text-sm font-bold transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                ابدأ محادثة جديدة
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                onClick={() => {
                  trackPhoneCall("floating_widget");
                  onClose();
                }}
                className="flex items-center justify-center gap-2 text-[#1C1C1C]/70 hover:text-[#1C1C1C] active:text-[#1C1C1C] py-2 text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>أو اتصل الآن:</span>
                <span dir="ltr" className="font-bold text-[#1F5F3F]">
                  {siteConfig.phone}
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}