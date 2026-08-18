"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Video,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Shield,
  Package,
  Wrench,
  Truck,
  Phone,
  MessageCircle,
  Send,
} from "lucide-react";
import { videos } from "@/config/media";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteDialog } from "@/components/shared/QuoteDialog";

const processItems = [
  { title: "تغليف احترافي", description: "كل قطعة يتم تجهيزها وحمايتها حسب نوعها.", icon: Package },
  { title: "فك وترقيم", description: "فك الاثاث بعناية مع تنظيم القطع لاعادة التركيب.", icon: Wrench },
  { title: "تحميل آمن", description: "تحميل منظم داخل سيارات مجهزة تحافظ على الاثاث.", icon: Truck },
  { title: "تسليم وتركيب", description: "تفريغ وتركيب وتسليم نهائي بشكل مرتب وسريع.", icon: Shield },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

export default function VideosContent() {
  const [mounted, setMounted] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playing, setPlaying] = useState<Record<string, boolean>>({});
  const [muted, setMuted] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setMounted(true);
  }, []);

  const togglePlay = async (id: string, index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;
    if (video.paused) {
      await video.play();
      setPlaying((prev) => ({ ...prev, [id]: true }));
    } else {
      video.pause();
      setPlaying((prev) => ({ ...prev, [id]: false }));
    }
  };

  const toggleMute = (id: string, index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;
    video.muted = !video.muted;
    setMuted((prev) => ({ ...prev, [id]: video.muted }));
  };

  if (!mounted) return null;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 via-white to-white">
        <div className="container-custom py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700">
              <Video className="h-4 w-4" />
              فيديوهات الاعمال
            </div>
            <h1 className="mb-4 text-3xl font-black text-green-950 md:text-5xl">
              شوف الخدمة على الطبيعة
            </h1>
            <p className="text-slate-600 leading-relaxed md:text-lg">
              فيديوهات حقيقية توضح مستوى التغليف والتنظيم والعناية في كل نقلة.
            </p>
          </div>
        </div>
      </section>

      {/* Videos */}
      {videos.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {videos.map((item, index) => (
                <motion.div key={item.id} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <Card className="overflow-hidden border-green-100/60 shadow-sm">
                    <div className="relative aspect-video bg-slate-100">
                      <video
                        ref={(el) => { videoRefs.current[index] = el; }}
                        src={item.src}
                        poster={item.poster}
                        className="h-full w-full object-cover"
                        playsInline
                        muted
                        loop
                        preload="metadata"
                      />
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <button
                          type="button"
                          onClick={() => void togglePlay(item.id, index)}
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition-colors hover:bg-green-700"
                          aria-label={playing[item.id] ? "ايقاف" : "تشغيل"}
                        >
                          {playing[item.id] ? <Pause className="h-4 w-4" /> : <Play className="mr-0.5 h-4 w-4" />}
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleMute(item.id, index)}
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors hover:bg-white/30"
                          aria-label={muted[item.id] ? "تشغيل الصوت" : "كتم"}
                        >
                          {muted[item.id] ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h2 className="text-lg font-bold text-green-950">{item.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How We Work */}
      <section className="section-padding bg-green-50/40">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-green-950 mb-3">كيف نعمل؟</h2>
            <p className="mx-auto max-w-2xl text-slate-600">
              شغلنا مبني على خطوات واضحة تضمن لك نتيجة منظمة وآمنة.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <Card className="h-full border-green-100/60 bg-white">
                    <CardContent className="p-6 text-center">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-700">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mb-2 font-bold text-green-950">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="rounded-3xl bg-green-950 px-6 py-10 text-center text-white md:px-10">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">احجز خدمتك الآن</h2>
            <p className="mx-auto mb-6 max-w-2xl text-green-200">
              لو اعجبك مستوى الشغل، كلمنا الآن وخلي فريق مسك الختام يتولى النقل من البداية للنهاية.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" className="bg-white text-green-800 hover:bg-green-50 gap-2" asChild>
                <a href={`tel:${siteConfig.phone}`}><Phone className="h-5 w-5" />اتصل الآن</a>
              </Button>
              <Button size="lg" className="bg-green-500 text-white hover:bg-green-600 gap-2" asChild>
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" />واتساب</a>
              </Button>
              <QuoteDialog
                trigger={
                  <div className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/30 px-6 text-base font-medium text-white transition-colors hover:bg-white/10 cursor-pointer">
                    <Send className="h-5 w-5" />
                    طلب عرض سعر
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}