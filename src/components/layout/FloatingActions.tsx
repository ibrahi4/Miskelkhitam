"use client";

import { useState, useEffect } from "react";
import { ArrowUp, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppWidget } from "@/components/shared/WhatsAppWidget";
import { siteConfig } from "@/config/site";

export function FloatingActions() {
  const [mounted, setMounted] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!mounted) return null;

  return (
    <>
      {/* Right - Call */}
      <div className="fixed bottom-6 right-4 z-40 no-print md:right-6">
        <a
          href={`tel:${siteConfig.phone}`}
          className="relative flex w-12 h-12 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-800"
          aria-label="اتصل بنا"
        >
          <span className="absolute inset-0 rounded-full bg-blue-700 animate-ping opacity-20" />
          <Phone className="w-5 h-5 relative z-10" />
        </a>
      </div>

      {/* Left - WhatsApp + Scroll top */}
      <div className="fixed bottom-6 left-4 z-40 flex items-center gap-3 no-print md:left-6">
        <AnimatePresence>
          {showScroll && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="w-11 h-11 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
              aria-label="العودة لاعلى الصفحة"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        <WhatsAppWidget />
      </div>
    </>
  );
}