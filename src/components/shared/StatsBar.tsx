"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Award, Truck, Users, Star } from "lucide-react";
import { siteConfig } from "@/config/site";

const stats = [
  { icon: Award, value: `${siteConfig.yearsOfExperience}+`, label: "سنوات خبرة" },
  { icon: Truck, value: `${siteConfig.completedMoves}+`, label: "نقلة ناجحة" },
  { icon: Users, value: `${siteConfig.teamSize}+`, label: "فرد في الفريق" },
  { icon: Star, value: "4.9/5", label: "تقييم العملاء" },
];

export function StatsBar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative bg-green-950 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400 rounded-full blur-3xl" />
      </div>

      <div className="container-custom py-10 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-green-500/15 border border-green-400/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-1">
                  {s.value}
                </div>
                <div className="text-sm text-green-300">{s.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}