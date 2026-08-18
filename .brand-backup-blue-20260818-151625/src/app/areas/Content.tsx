"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowLeft, Phone, MessageCircle, Building2 } from "lucide-react";
import { areas, areaGroups } from "@/config/areas";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4 },
  }),
};

export default function AreasContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <section className="bg-gradient-to-b from-green-50 via-white to-white">
        <div className="container-custom py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700 mb-4">
            <MapPin className="h-4 w-4" />
            مناطق الخدمة
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-green-950 mb-4">
            نخدمك في كل مكان
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto md:text-lg">
            نغطي اهم المدن الجديدة والكمبوندات في القاهرة الكبرى بخدمة احترافية وسريعة.
          </p>
        </div>
      </section>

      {areaGroups.map((group, gi) => (
        <section key={group.id} className={`section-padding ${gi % 2 === 0 ? "bg-white" : "bg-green-50/30"}`}>
          <div className="container-custom">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="h-5 w-5 text-green-600" />
                <h2 className="text-xl md:text-2xl font-bold text-green-950">{group.title}</h2>
              </div>
              <p className="text-slate-500">{group.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {group.areas.map((area, index) => (
                <motion.div key={area.id} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <Link href={`/areas/${area.slug}`}>
                    <Card className="group h-full border-green-100/60 hover:shadow-lg hover:border-green-200 transition-all cursor-pointer bg-white">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="h-12 w-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
                            <MapPin className="h-6 w-6" />
                          </div>
                          <ArrowLeft className="h-5 w-5 text-slate-300 group-hover:text-green-600 transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold text-green-950 mb-2 group-hover:text-green-700 transition-colors">
                          {area.name}
                        </h3>
                        <p className="text-sm text-slate-500 line-clamp-2 mb-4">
                          {area.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {area.compounds.slice(0, 3).map((c) => (
                            <span key={c} className="rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-medium text-green-700">
                              {c}
                            </span>
                          ))}
                          {area.compounds.length > 3 && (
                            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-500">
                              +{area.compounds.length - 3}
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-green-950 text-white">
        <div className="container-custom text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">منطقتك مش في القائمة؟</h2>
          <p className="text-green-200 max-w-md mx-auto">
            كلمنا وهنوصلك في اي مكان. خدمتنا تغطي القاهرة الكبرى كلها.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="bg-white text-green-800 hover:bg-green-50 gap-2" asChild>
              <a href={`tel:${siteConfig.phone}`}><Phone className="h-5 w-5" />اتصل الآن</a>
            </Button>
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white gap-2" asChild>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" />واتساب</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}