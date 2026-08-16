"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Clock,
  Award,
  Truck,
  CheckCircle2,
  Phone,
  MessageCircle,
  Target,
  Eye,
  Heart,
  ArrowLeft,
  Gem,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

const values = [
  { icon: Shield, title: "الامانة", desc: "اثاثك امانة عندنا. كل قطعة بنتعامل معاها كأنها ملكنا الشخصي." },
  { icon: Clock, title: "الالتزام", desc: "مواعيدنا مقدسة. لو قلنا بكرة الصبح، يبقى بكرة الصبح." },
  { icon: Gem, title: "الاتقان", desc: "مش بنخلص وبس - بنخلص صح. كل تفصيلة مهمة عندنا." },
  { icon: Heart, title: "الاحترام", desc: "بنحترم بيتك ووقتك واثاثك. والعميل عندنا دايماً على حق." },
];

const milestones = [
  { year: 2019, text: "بدأنا رحلتنا بفريق صغير وسيارة واحدة في القاهرة الجديدة" },
  { year: 2021, text: "وصلنا لـ 1000 نقلة ناجحة وتوسعنا للشيخ زايد و6 اكتوبر" },
  { year: 2023, text: "اضفنا خدمة الونش والتكييفات واصبح فريقنا اكتر من 30 فرد" },
  { year: 2025, text: `تخطينا ${siteConfig.completedMoves} نقلة ناجحة ونخدم 7+ مناطق رئيسية` },
];

const stats = [
  { value: `${siteConfig.yearsOfExperience}+`, label: "سنة في السوق", icon: Award },
  { value: siteConfig.completedMoves + "+", label: "نقلة ناجحة", icon: Truck },
  { value: siteConfig.teamSize + "+", label: "فرد في الفريق", icon: Users },
  { value: "24/7", label: "جاهزين لخدمتك", icon: Clock },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function AboutContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-bl from-green-950 via-green-900 to-green-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container-custom py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-400/30 px-4 py-1.5 text-sm font-semibold text-green-200 mb-4">
              <Users className="h-4 w-4" />
              من نحن
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight">
              مسك الختام لنقل الاثاث
              <br />
              <span className="text-green-400">نقلتك في ايد امينة</span>
            </h1>
            <p className="text-green-100/80 leading-relaxed text-lg mb-6 max-w-2xl">
              من سنة {siteConfig.foundingYear}، بدأنا بفكرة بسيطة: ان نقل الاثاث لازم يكون تجربة مريحة مش مصدر قلق.
              النهارده، بعد اكتر من {siteConfig.completedMoves} نقلة ناجحة، مسك الختام اصبحت واحدة من اكتر شركات النقل الموثوقة في القاهرة الكبرى.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30 gap-2" asChild>
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="h-5 w-5" />
                  كلمنا دلوقتي
                </a>
              </Button>
              <Button size="lg" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 gap-2" asChild>
                <Link href="/services">
                  شوف خدماتنا
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#FAFDF7] to-transparent" />
      </section>

      {/* Stats */}
      <section className="py-10 bg-green-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-green-500/15 border border-green-400/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="text-3xl font-black">{s.value}</div>
                  <div className="text-green-300 text-sm">{s.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-green-100/60 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-2xl bg-green-50 text-green-700 flex items-center justify-center mb-5">
                  <Target className="h-7 w-7" />
                </div>
                <h2 className="text-xl font-bold text-green-950 mb-3">رسالتنا</h2>
                <p className="text-slate-600 leading-relaxed">
                  ان كل عميل يحس بالراحة والامان لما ينقل اثاثه معانا. بنسعى نقدم خدمة تخلي العميل يرشحنا لاهله وصحابه بثقة.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-100/60 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-2xl bg-green-50 text-green-700 flex items-center justify-center mb-5">
                  <Eye className="h-7 w-7" />
                </div>
                <h2 className="text-xl font-bold text-green-950 mb-3">رؤيتنا</h2>
                <p className="text-slate-600 leading-relaxed">
                  نكون الاسم الاول اللي يجي في بال اي حد محتاج ينقل اثاثه في مصر. مش بس بالاعلانات - بالسمعة والشغل المحترف.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-green-50/40">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-green-950 mb-3">القيم اللي بنشتغل بيها</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <Card className="border-green-100/60 text-center hover:shadow-md transition-shadow h-full bg-white">
                    <CardContent className="p-6">
                      <div className="h-14 w-14 rounded-2xl bg-green-50 text-green-700 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="font-bold text-green-950 mb-2">{v.title}</h3>
                      <p className="text-sm text-slate-500">{v.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-green-950 text-center mb-10">رحلتنا</h2>
          <div className="max-w-2xl mx-auto space-y-8">
            {milestones.map((m, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-4 items-start">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-green-700 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-green-700/20">
                  {m.year}
                </div>
                <div className="pt-3">
                  <p className="text-slate-700 font-medium leading-relaxed">{m.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-green-50/40">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-950 mb-4">ليه الناس بتختار مسك الختام؟</h2>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4 mt-8">
            {[
              "فريق مدرب ومحترف بخبرة سنين",
              "سيارات مغلقة بأنظمة تثبيت حديثة",
              "تغليف بخامات عالمية لكل انواع الاثاث",
              "تأمين شامل على كل المنقولات",
              "اسعار واضحة ومكتوبة بدون مفاجآت",
              "جاهزين 24 ساعة - حتى في الاجازات",
            ].map((item, i) => (
              <motion.div key={item} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-green-100/60 hover:shadow-md transition-shadow">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                  <span className="text-slate-700 font-medium text-sm">{item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-green-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl" />
        </div>
        <div className="container-custom text-center space-y-6 relative">
          <h2 className="text-2xl md:text-3xl font-bold">يلا نبدأ مع بعض</h2>
          <p className="text-green-200 max-w-md mx-auto">كلمنا دلوقتي واحنا هنرتب كل حاجة. عرض السعر مجاني والمعاينة ببلاش.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="bg-white text-green-800 hover:bg-green-50 gap-2" asChild>
              <a href={`tel:${siteConfig.phone}`}><Phone className="h-5 w-5" />اتصل دلوقتي</a>
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