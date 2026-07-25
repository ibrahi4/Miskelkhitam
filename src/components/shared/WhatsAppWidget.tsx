"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

const quickMessages = [
  "محتاج أنقل شقة - ممكن عرض سعر؟",
  "عايز أنقل غرفة نوم بس",
  "محتاج ونش رفع أثاث",
  "عندي نقلة من التجمع - الأسعار كام؟",
  "محتاج فك وتركيب تكييف",
  "عايز معاينة مجانية",
];

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const sendMessage = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encoded}`,
      "_blank"
    );
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-14 left-0 w-72 bg-white rounded-2xl shadow-xl border border-sky-100 overflow-hidden"
          >
            <div className="bg-green-500 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <MessageCircle className="w-5 h-5" />
                <div>
                  <p className="text-sm font-bold">{siteConfig.shortName}</p>
                  <p className="text-[10px] opacity-80">أونلاين - هنرد فورًا</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white"
                aria-label="إغلاق"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3 max-h-64 overflow-y-auto space-y-2">
              <p className="text-xs text-slate-500 text-center mb-2">
                اختار رسالة جاهزة أو اكتب رسالتك
              </p>
              {quickMessages.map((msg, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(msg)}
                  className="w-full text-right px-3 py-2.5 rounded-xl text-sm bg-sky-50 hover:bg-sky-100 text-slate-700 transition-colors flex items-center justify-between gap-2 group"
                >
                  <span>{msg}</span>
                  <Send className="w-3.5 h-3.5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="w-11 h-11 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all"
        aria-label="تواصل عبر واتساب"
      >
        {open ? (
          <X className="w-5 h-5" />
        ) : (
          <MessageCircle className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}