"use client";

import { useState, useEffect } from "react";
import { MessageCircle, ArrowUp, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppWidget } from "@/components/shared/WhatsAppWidget";
import { trackWhatsApp } from "@/lib/analytics/events";

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!mounted) return null;

  return (
    <>
      {/* WhatsApp Widget - Desktop */}
      <WhatsAppWidget
        open={whatsappOpen}
        onClose={() => setWhatsappOpen(false)}
        position="desktop-left"
      />

      {/* WhatsApp Toggle Button - Desktop ONLY */}
      <div className="hidden lg:block fixed bottom-6 left-6 z-50">
        <div className="relative">
          {showPulse && !whatsappOpen && (
            <>
              <span className="absolute inset-0 rounded-full bg-[#1F5F3F] animate-ping opacity-40" />
              <span className="absolute inset-0 rounded-full bg-[#1F5F3F] animate-pulse opacity-20" />
            </>
          )}

          <button
            onClick={() => {
              setWhatsappOpen(!whatsappOpen);
              if (!whatsappOpen) trackWhatsApp("floating_open");
            }}
            className="relative w-16 h-16 bg-[#1F5F3F] hover:bg-[#164A30] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 border-2 border-white/20"
            aria-label="تواصل عبر واتساب"
          >
            {whatsappOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MessageCircle className="w-7 h-7" />
            )}
          </button>

          {!whatsappOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#E8E3D9] text-[#1C1C1C] text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-sm">
              1
            </span>
          )}
        </div>
      </div>

      {/* Back To Top - Both Desktop & Mobile */}
      <AnimatePresence>
        {showBackToTop && (
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