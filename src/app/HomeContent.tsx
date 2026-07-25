"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Star,
  Shield,
  Clock,
  Users,
  ArrowLeft,
  MapPin,
  Truck,
  Award,
  Send,
  ThumbsUp,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { areas } from "@/config/areas";
import { GallerySection } from "@/components/features/GallerySection";
import { VideosSection } from "@/components/features/VideosSection";
import { TestimonialsSection } from "@/components/features/TestimonialsSection";
import { QuoteDialog } from "@/components/shared/QuoteDialog";
import { StatsBar } from "@/components/shared/StatsBar";
import { TrustBadges } from "@/components/shared/TrustBadges";

const trustBadges = [
  { icon: Shield, label: "ضمان شامل على الأثاث" },
  { icon: Clock, label: "متاحين 24/7" },
  { icon: Users, label: `${siteConfig.completedMoves} نقلة ناجحة` },
  { icon: Award, label: `${siteConfig.yearsOfExperience} سنوات خبرة` },
];

const whyUs = [
  { icon: Shield, title: "أثاثك مؤمن", desc: "تأمين شامل من لحظة الشيل لحد التسليم. لو حصل أي حاجة، إحنا مسؤولين." },
  { icon: Users, title: "فريق متمرس", desc: "فريقنا مش عمال عاديين - دول متخصصين بيتدربوا بشكل مستمر." },
  { icon: Truck, title: "سيارات مجهزة", desc: "أسطول سيارات مغلقة بأنظمة تثبيت داخلية تحمي أثاثك من أي حركة." },
  { icon: Clock, title: "في الموعد بالظبط", desc: "بنحترم وقتك ومواعيدنا. لو قلنا الساعة 8 الصبح، هنكون عندك." },
  { icon: ThumbsUp, title: "سعر واضح", desc: "السعر اللي بنتفق عليه هو اللي هتدفعه. مفيش مفاجآت ولا رسوم خفية." },
  { icon: Zap, title: "خبرة بالكمبوندات", desc: "بنعرف إجراءات كل كمبوند ومدينة سكنية. مفيش تأخير ولا مشاكل." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function HomeContent() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-bl from-sky-950 via-sky-900 to-sky-800">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-400 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[100px]" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl space-y-6">
            <Badge className="bg-sky-500/20 text-sky-200 border-sky-400/30 text-sm px-4 py-1.5 backdrop-blur-sm">
              <Star className="w-3.5 h-3.5 fill-sky-300 text-sky-300 mr-1.5" />
              +{siteConfig.completedMoves} نقلة ناجحة في القاهرة الكبرى
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-lg">
              أثاثك أمانة
              <br />
              <span className="text-sky-400">وإحنا أهل الأمانة</span>
            </h1>

            <p className="text-base md:text-lg text-sky-100/90 leading-relaxed max-w-xl">
              فريق متمرس، تغليف بخامات عالمية، سيارات مجهزة، وضمان كامل.
              بنخدم التجمع الخامس، مدينتي، الشيخ زايد، وكل المدن الجديدة
              بمستوى يليق بأثاثك.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white gap-2 text-base shadow-lg shadow-sky-500/40" asChild>
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="w-5 h-5" />
                  اتصل دلوقتي
                </a>
              </Button>

              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white gap-2 text-base shadow-lg shadow-green-500/40" asChild>
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  كلمنا واتساب
                </a>
              </Button>

              <QuoteDialog
                trigger={
                  <div className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 backdrop-blur-sm px-6 text-base font-medium text-white transition-colors hover:bg-white/20 cursor-pointer">
                    <Send className="w-5 h-5" />
                    عرض سعر مجاني
                  </div>
                }
              />
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {trustBadges.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="flex items-center gap-2 text-sky-200/80 text-sm">
                    <Icon className="w-4 h-4 text-sky-400" />
                    <span>{b.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white/5 to-transparent" />
      </section>

      <TrustBadges />

      {/* ===== SERVICES ===== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Truck className="w-4 h-4" />
              إيه اللي بنعمله؟
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-sky-950 mb-3">كل اللي أثاثك محتاجه في مكان واحد</h2>
            <p className="text-slate-500 max-w-lg mx-auto">من لحظة ما بنشيل لحد ما نركب ونسلم - كل حاجة علينا</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <Link href={`/services/${service.slug}`}>
                    <Card className="group h-full overflow-hidden border-sky-100 hover:shadow-lg hover:border-sky-200 transition-all cursor-pointer">
                      <div className="relative h-44 overflow-hidden">
                        <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-sky-950/60 to-transparent" />
                        <div className="absolute bottom-3 right-3 w-10 h-10 bg-sky-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <h3 className="font-bold text-sky-950 text-lg mb-2 group-hover:text-sky-600 transition-colors">{service.shortTitle}</h3>
                        <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">{service.description}</p>
                        <div className="flex items-center gap-1 text-sky-500 text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                          <span>اعرف أكتر</span>
                          <ArrowLeft className="w-4 h-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <StatsBar />

      {/* ===== WHY US ===== */}
      <section className="section-padding bg-sky-50/50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Award className="w-4 h-4" />
              ليه البحرين؟
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-sky-950 mb-3">6 أسباب تخليك تختارنا</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <Card className="h-full border-sky-100 hover:shadow-md transition-shadow text-center">
                    <CardContent className="p-6 space-y-3">
                      <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mx-auto">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="font-bold text-sky-950">{item.title}</h3>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== AREAS ===== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <MapPin className="w-4 h-4" />
              وصلنا فين؟
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-sky-950 mb-3">في منطقتك وجاهزين</h2>
            <p className="text-slate-500 max-w-lg mx-auto">بنغطي أهم المدن الجديدة والكمبوندات في القاهرة الكبرى</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {areas.map((area, i) => (
              <motion.div key={area.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link href={`/areas/${area.slug}`}>
                  <Card className="group h-full border-sky-100 hover:shadow-md hover:border-sky-200 transition-all cursor-pointer">
                    <CardContent className="p-4 text-center space-y-2">
                      <div className="w-11 h-11 bg-sky-50 text-sky-500 rounded-xl flex items-center justify-center mx-auto group-hover:bg-sky-500 group-hover:text-white transition-colors">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-sky-950 text-sm group-hover:text-sky-600 transition-colors">{area.name}</h3>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-sky-200 text-sky-700 hover:bg-sky-50 gap-2" asChild>
              <Link href="/areas">
                كل المناطق
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <GallerySection />
      <VideosSection />
      <TestimonialsSection />

      {/* ===== FINAL CTA ===== */}
      <section className="section-padding bg-gradient-to-bl from-sky-600 via-sky-500 to-sky-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-custom text-center space-y-6 relative">
          <h2 className="text-2xl md:text-4xl font-bold">جاهز تنقل؟ يلا نتكلم!</h2>
          <p className="text-sky-100 max-w-md mx-auto md:text-lg">كلمنا دلوقتي واحنا هنرتب كل حاجة من أولها لآخرها. عرض السعر مجاني والمعاينة ببلاش.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="bg-white text-sky-700 hover:bg-sky-50 gap-2 text-base shadow-lg" asChild>
              <a href={`tel:${siteConfig.phone}`}><Phone className="w-5 h-5" />اتصل دلوقتي</a>
            </Button>
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white gap-2 text-base shadow-lg" asChild>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5" />كلمنا واتساب</a>
            </Button>
            <QuoteDialog
              trigger={
                <div className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 px-6 text-base font-medium text-white transition-colors hover:bg-white/20 cursor-pointer">
                  <Send className="w-5 h-5" />
                  طلب عرض سعر
                </div>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}