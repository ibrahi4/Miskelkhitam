"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
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
  CheckCircle2,
  Package,
  Wrench,
  CableCar,
  CircleCheckBig,
  ClipboardList,
  PackageCheck,
  HomeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { areas } from "@/config/areas";
import { testimonials } from "@/config/media";
import { GallerySection } from "@/components/features/GallerySection";
import { QuoteDialog } from "@/components/shared/QuoteDialog";
import { InlineQuoteForm } from "@/components/shared/InlineQuoteForm";

/* ───── Animated Counter ───── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-black text-blue-700">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

/* ───── Star Rating ───── */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-slate-200"}`}
        />
      ))}
    </div>
  );
}

/* ───── How It Works Steps ───── */
const steps = [
  {
    icon: ClipboardList,
    title: "معاينة مجانية",
    desc: "بنيجي نشوف الاثاث ونقدر حجم الشغل ونديك سعر نهائي.",
    num: "01",
  },
  {
    icon: Package,
    title: "تغليف وفك",
    desc: "كل قطعة بتتغلف بالمادة المناسبة ليها والاثاث بيتفك بترقيم.",
    num: "02",
  },
  {
    icon: Truck,
    title: "نقل آمن",
    desc: "سيارات مغلقة مجهزة بأنظمة تثبيت بتحمي اثاثك اثناء الطريق.",
    num: "03",
  },
  {
    icon: HomeIcon,
    title: "تركيب وتسليم",
    desc: "بنركب كل حاجة في مكانها الجديد ونسلمك النقلة كاملة.",
    num: "04",
  },
];

/* ───── Why Us ───── */
const whyUsItems = [
  { icon: Shield, title: "تأمين شامل", desc: "كل قطعة مؤمن عليها طول فترة النقل" },
  { icon: Users, title: "فريق متخصص", desc: "فنيين مدربين على كل انواع الاثاث" },
  { icon: Clock, title: "مواعيد دقيقة", desc: "بنلتزم بالموعد المتفق عليه بدون تأخير" },
  { icon: ThumbsUp, title: "سعر نهائي", desc: "مفيش رسوم خفية. السعر المتفق عليه هو النهائي" },
  { icon: Zap, title: "خبرة بالكمبوندات", desc: "بنعرف اجراءات كل كمبوند وبنتعامل بسلاسة" },
  { icon: Award, title: "ضمان الجودة", desc: "لو مش راضي عن اي حاجة بنرجع نظبطها" },
];

/* ───── Stats ───── */
const statsData = [
  { value: 4800, suffix: "+", label: "نقلة ناجحة", icon: Truck },
  { value: 7, suffix: "+", label: "سنوات خبرة", icon: Award },
  { value: 35, suffix: "+", label: "فرد في الفريق", icon: Users },
  { value: 98, suffix: "%", label: "رضا العملاء", icon: Star },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export default function HomeContent() {
  const [mounted, setMounted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [mounted]);

  if (!mounted) return null;

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-bl from-blue-950 via-blue-900 to-blue-800" />

        {/* Soft glowing blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px]" />
          <div className="absolute top-1/3 -left-40 w-[520px] h-[520px] bg-sky-400/15 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/3 w-[420px] h-[420px] bg-blue-400/10 rounded-full blur-[130px]" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Top shine */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Text - takes 7 cols */}
            <div className="lg:col-span-7 space-y-7">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <Badge className="bg-white/10 backdrop-blur-md text-white border-white/20 text-sm px-4 py-2 gap-2">
                  <CircleCheckBig className="w-4 h-4 text-blue-400" />
                  +{siteConfig.completedMoves} نقلة ناجحة في القاهرة الكبرى
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black text-white leading-[1.1] tracking-tight"
              >
                نقلتك
                <span className="block text-blue-400 mt-1">في ايد امينة</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl"
              >
                فريق محترف بخبرة {siteConfig.yearsOfExperience} سنوات. تغليف عالمي، سيارات مجهزة، وضمان كامل. من الباب للباب.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="flex flex-wrap gap-3"
              >
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white gap-2 text-base h-13 px-7 shadow-xl shadow-blue-500/25 rounded-2xl" asChild>
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="w-5 h-5" />
                    اتصل دلوقتي
                  </a>
                </Button>
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 gap-2 text-base h-13 px-7 rounded-2xl font-bold" asChild>
                  <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    واتساب
                  </a>
                </Button>
                <QuoteDialog
                  trigger={
                    <div className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl border-2 border-white/30 bg-white/5 backdrop-blur-sm px-7 text-base font-medium text-white transition-all hover:bg-white/15 cursor-pointer">
                      <Send className="w-5 h-5" />
                      عرض سعر مجاني
                    </div>
                  }
                />
              </motion.div>

              {/* Trust Ticker */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-6 pt-4"
              >
                {[
                  { icon: Shield, text: "ضمان شامل" },
                  { icon: Clock, text: "24/7" },
                  { icon: PackageCheck, text: "تغليف عالمي" },
                ].map((item, i) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-2 text-white/50 text-sm">
                      <ItemIcon className="w-4 h-4 text-blue-400/70" />
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Floating Cards - takes 5 cols */}
            <div className="hidden lg:flex lg:col-span-5 flex-col items-center gap-5 relative">
              {/* Rating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-white rounded-3xl shadow-2xl p-5 w-64 self-start"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center">
                    <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-blue-950">4.9</div>
                    <div className="text-xs text-slate-500">تقييم العملاء</div>
                  </div>
                </div>
                <div className="flex gap-0.5 mt-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </motion.div>

              {/* Moves Counter Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="bg-white rounded-3xl shadow-2xl p-5 w-64 self-end"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                    <Truck className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-blue-950">{siteConfig.completedMoves}+</div>
                    <div className="text-xs text-slate-500">نقلة ناجحة</div>
                  </div>
                </div>
              </motion.div>

              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="bg-blue-600 text-white rounded-3xl shadow-2xl p-5 w-64 self-start"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-black">{siteConfig.yearsOfExperience}+</div>
                    <div className="text-xs text-blue-200">سنوات خبرة</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="#F8FBFF" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════ STATS (Counter) ═══════════════════════ */}
      <section className="py-16 bg-[#F8FBFF]">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, i) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-4">
                    <StatIcon className="w-7 h-7 text-blue-700" />
                  </div>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  <div className="text-sm text-slate-500 mt-1 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <GallerySection />

      {/* ═══════════════════════ HOW IT WORKS ═══════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <Badge className="bg-blue-50 text-blue-700 border-blue-200 mb-4 px-4 py-1.5 text-sm">
              <Wrench className="w-4 h-4 mr-1.5" />
              طريقة شغلنا
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-3">
              4 خطوات وبس
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto text-lg">
              من المعاينة للتسليم - كل حاجة منظمة ومحسوبة
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="hidden md:block absolute right-1/2 top-0 bottom-0 w-px bg-blue-200 translate-x-1/2" />

            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-20 md:gap-y-16">
              {steps.map((step, i) => {
                const StepIcon = step.icon;
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={step.num}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className={`relative ${isEven ? "md:text-left" : "md:col-start-2 md:text-right"}`}
                  >
                    {/* Number circle on line (desktop) */}
                    <div className={`hidden md:flex absolute top-2 ${isEven ? "-left-[62px]" : "-right-[62px]"} w-10 h-10 bg-blue-700 text-white rounded-full items-center justify-center text-sm font-black z-10 shadow-lg shadow-blue-700/30`}>
                      {step.num}
                    </div>

                    <Card className="border-blue-100/60 hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group">
                      <CardContent className="p-6">
                        <div className={`flex items-start gap-4 ${isEven ? "" : "md:flex-row-reverse"}`}>
                          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                            <StepIcon className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors duration-300" />
                          </div>
                          <div>
                            <span className="md:hidden text-xs font-bold text-blue-600 mb-1 block">خطوة {step.num}</span>
                            <h3 className="text-lg font-bold text-blue-950 mb-1">{step.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SERVICES ═══════════════════════ */}
      <section className="section-padding bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-400 rounded-full blur-[120px]" />
        </div>

        <div className="container-custom relative">
          <div className="text-center mb-14">
            <Badge className="bg-blue-500/15 text-blue-300 border-blue-500/30 mb-4 px-4 py-1.5 text-sm">
              <Package className="w-4 h-4 mr-1.5" />
              خدماتنا
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              كل اللي اثاثك محتاجه
            </h2>
            <p className="text-blue-200/70 max-w-lg mx-auto text-lg">
              6 خدمات متكاملة تغطي كل احتياجاتك
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => {
              const SIcon = service.icon;
              return (
                <motion.div key={service.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <Link href={`/services/${service.slug}`}>
                    <Card className="group h-full border-blue-800/50 bg-blue-900/50 backdrop-blur-sm hover:bg-blue-800/60 transition-all duration-300 cursor-pointer overflow-hidden">
                      <CardContent className="p-6">
                        <div className="w-14 h-14 bg-blue-500/15 border border-blue-500/25 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-300">
                          <SIcon className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="font-bold text-white text-lg mb-2 group-hover:text-blue-300 transition-colors">
                          {service.shortTitle}
                        </h3>
                        <p className="text-sm text-blue-200/60 line-clamp-2 leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-1.5 text-blue-400 text-sm font-medium group-hover:gap-3 transition-all">
                          <span>تفاصيل الخدمة</span>
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

      {/* ═══════════════════════ WHY US ═══════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Side */}
            <div>
              <Badge className="bg-blue-50 text-blue-700 border-blue-200 mb-4 px-4 py-1.5 text-sm">
                <CheckCircle2 className="w-4 h-4 mr-1.5" />
                ليه مسك الختام؟
              </Badge>
              <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-4">
                مش مجرد شركة نقل
                <span className="block text-blue-600 mt-1">احنا شريكك في كل تفصيلة</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                كل نقلة عندنا بتتعامل معاها كأنها الوحيدة. فريق مدرب، معدات حديثة، والتزام كامل بالوعود.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {whyUsItems.map((item, i) => {
                  const ItemIcon = item.icon;
                  return (
                    <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                      <div className="flex items-start gap-3 p-4 rounded-2xl bg-blue-50/60 border border-blue-100/60 hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                          <ItemIcon className="w-5 h-5 text-blue-700" />
                        </div>
                        <div>
                          <h3 className="font-bold text-blue-950 text-sm">{item.title}</h3>
                          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/gallery/photo_1_2026-08-16_14-31-37.jpg"
                  alt="فريق مسك الختام"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-blue-700 text-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-blue-300" />
                  <div>
                    <div className="font-bold text-lg">تأمين شامل</div>
                    <div className="text-xs text-blue-300">على كل المنقولات</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ AREAS ═══════════════════════ */}
      <section className="section-padding bg-blue-50/40">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4 px-4 py-1.5 text-sm">
              <MapPin className="w-4 h-4 mr-1.5" />
              مناطق الخدمة
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-3">
              موجودين في منطقتك
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {areas.map((area, i) => (
              <motion.div key={area.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link href={`/areas/${area.slug}`}>
                  <div className="group flex items-center gap-3 bg-white rounded-2xl p-4 border border-blue-100/60 hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                      <MapPin className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-950 text-sm group-hover:text-blue-700 transition-colors">{area.name}</h3>
                      <span className="text-[11px] text-slate-400">{area.compounds.length} كمبوند</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 gap-2 rounded-xl" asChild>
              <Link href="/areas">كل المناطق<ArrowLeft className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TESTIMONIAL SPOTLIGHT ═══════════════════════ */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge className="bg-amber-50 text-amber-700 border-amber-200 mb-4 px-4 py-1.5 text-sm">
              <Star className="w-4 h-4 mr-1.5 fill-amber-400" />
              آراء العملاء
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-blue-950">
              عملاؤنا بيتكلموا
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-blue-100/60 shadow-lg bg-white overflow-hidden">
                <CardContent className="p-8 md:p-10 text-center">
                  <StarRating rating={currentTestimonial.rating} />
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed mt-5 mb-6 font-medium">
                    &ldquo;{currentTestimonial.text}&rdquo;
                  </p>
                  <div>
                    <div className="font-bold text-blue-950 text-lg">{currentTestimonial.name}</div>
                    <div className="flex items-center justify-center gap-1.5 text-sm text-slate-400 mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{currentTestimonial.location}</span>
                      <span className="mx-1">-</span>
                      <span className="text-blue-600 font-medium">{currentTestimonial.service}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === activeTestimonial ? "w-8 bg-blue-600" : "w-2.5 bg-blue-200 hover:bg-blue-300"
                  }`}
                  aria-label={`عرض التقييم ${i + 1}`}
                />
              ))}
            </div>

            <div className="text-center mt-6">
              <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 gap-2 rounded-xl" asChild>
                <Link href="/testimonials">كل الآراء<ArrowLeft className="w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ INLINE QUOTE FORM ═══════════════════════ */}
      <InlineQuoteForm />

      {/* ═══════════════════════ FINAL CTA ═══════════════════════ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/bg-taghleef.webp"
            alt="تغليف احترافي"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-blue-950/90" />
        </div>

        <div className="container-custom text-center space-y-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white">جاهز تنقل؟</h2>
          <p className="text-blue-200 max-w-md mx-auto text-lg">
            كلمنا دلوقتي والمعاينة مجانية وعرض السعر فوري.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 gap-2 text-base h-13 px-8 rounded-2xl font-bold shadow-xl" asChild>
              <a href={`tel:${siteConfig.phone}`}>
                <Phone className="w-5 h-5" />
                اتصل دلوقتي
              </a>
            </Button>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white gap-2 text-base h-13 px-8 rounded-2xl shadow-xl shadow-blue-500/25" asChild>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                واتساب
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}