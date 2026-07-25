import type { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "من نحن | تعرف على البحرين لنقل الأثاث",
  description: `${siteConfig.name} - أكثر من ${siteConfig.yearsOfExperience} سنوات خبرة و${siteConfig.completedMoves} نقلة ناجحة. تعرف على قصتنا وفريقنا وليه العملاء بيثقوا فينا.`,
};

const values = [
  { icon: Shield, title: "الأمانة", desc: "أثاثك أمانة عندنا. كل قطعة بنتعامل معاها كأنها ملكنا الشخصي." },
  { icon: Clock, title: "الالتزام", desc: "مواعيدنا مقدسة. لو قلنا بكرة الصبح، يبقى بكرة الصبح." },
  { icon: Gem, title: "الإتقان", desc: "مش بنخلص وبس - بنخلص صح. كل تفصيلة مهمة عندنا." },
  { icon: Heart, title: "الاحترام", desc: "بنحترم بيتك ووقتك وأثاثك. والعميل عندنا دايمًا على حق." },
];

const milestones = [
  { year: 2019, text: "بدأنا رحلتنا بفريق صغير وسيارة واحدة في القاهرة الجديدة" },
  { year: 2021, text: "وصلنا لـ 1000 نقلة ناجحة وتوسعنا للشيخ زايد و6 أكتوبر" },
  { year: 2023, text: "أضفنا خدمة الونش والتكييفات وأصبح فريقنا أكتر من 30 فرد" },
  { year: 2025, text: `تخطينا ${siteConfig.completedMoves} نقلة ناجحة ونخدم 7+ مناطق رئيسية` },
];

const stats = [
  { value: `${siteConfig.yearsOfExperience}+`, label: "سنة في السوق", icon: Award },
  { value: siteConfig.completedMoves + "+", label: "نقلة ناجحة", icon: Truck },
  { value: siteConfig.teamSize + "+", label: "فرد في الفريق", icon: Users },
  { value: "24/7", label: "جاهزين لخدمتك", icon: Clock },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-bl from-sky-950 via-sky-900 to-sky-800">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        </div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container-custom py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 backdrop-blur-sm border border-sky-400/30 px-4 py-1.5 text-sm font-semibold text-sky-200 mb-4">
              <Users className="h-4 w-4" />
              مين إحنا؟
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight">
              البحرين لنقل الأثاث
              <br />
              <span className="text-sky-400">أثاثك في أيد أمينة</span>
            </h1>
            <p className="text-sky-100/90 leading-relaxed text-lg mb-6">
              من سنة {siteConfig.foundingYear}، بدأنا بفكرة بسيطة: إن نقل الأثاث لازم يكون تجربة مريحة مش مصدر قلق.
              النهارده، بعد أكتر من {siteConfig.completedMoves} نقلة ناجحة، البحرين أصبحت واحدة من أكتر شركات النقل الموثوقة في القاهرة الكبرى.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/40" asChild>
                <a href={`tel:${siteConfig.phone}`}><Phone className="h-5 w-5" />كلمنا دلوقتي</a>
              </Button>
              <Button size="lg" className="bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/20" asChild>
                <Link href="/services">شوف خدماتنا<ArrowLeft className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-sky-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="text-center">
                  <div className="w-12 h-12 bg-sky-500/20 border border-sky-400/30 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-sky-400" />
                  </div>
                  <div className="text-3xl font-black">{s.value}</div>
                  <div className="text-sky-300 text-sm">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-sky-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-5">
                  <Target className="h-7 w-7" />
                </div>
                <h2 className="text-xl font-bold text-sky-950 mb-3">رسالتنا</h2>
                <p className="text-slate-600 leading-relaxed">
                  إن كل عميل يحس بالراحة والأمان لما ينقل أثاثه معانا. بنسعى نقدم خدمة تخلي العميل يرشحنا لأهله وصحابه بثقة.
                </p>
              </CardContent>
            </Card>
            <Card className="border-sky-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-5">
                  <Eye className="h-7 w-7" />
                </div>
                <h2 className="text-xl font-bold text-sky-950 mb-3">رؤيتنا</h2>
                <p className="text-slate-600 leading-relaxed">
                  نكون الاسم الأول اللي يجي في بال أي حد محتاج ينقل أثاثه في مصر. مش بس بالإعلانات - بالسمعة والشغل المحترف.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-sky-50/50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-sky-950 mb-3">القيم اللي بنشتغل بيها</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <Card key={v.title} className="border-sky-100 text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-14 w-14 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-bold text-sky-950 mb-2">{v.title}</h3>
                    <p className="text-sm text-slate-500">{v.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-950 text-center mb-10">رحلتنا</h2>
          <div className="max-w-2xl mx-auto space-y-8">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-sky-500 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-sky-500/30">
                  {m.year}
                </div>
                <div className="pt-3"><p className="text-slate-700 font-medium leading-relaxed">{m.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-sky-50/50">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-950 mb-4">ليه الناس بتختار البحرين؟</h2>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4 mt-8">
            {[
              "فريق مدرب ومحترف بخبرة سنين",
              "سيارات مغلقة بأنظمة تثبيت حديثة",
              "تغليف بخامات عالمية لكل أنواع الأثاث",
              "تأمين شامل على كل المنقولات",
              "أسعار واضحة ومكتوبة بدون مفاجآت",
              "جاهزين 24 ساعة - حتى في الإجازات",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
                <CheckCircle2 className="h-5 w-5 text-sky-500 shrink-0" />
                <span className="text-slate-700 font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-l from-sky-600 to-sky-500 text-white">
        <div className="container-custom text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">يلا نبدأ مع بعض</h2>
          <p className="text-sky-100 max-w-md mx-auto">كلمنا دلوقتي واحنا هنرتب كل حاجة. عرض السعر مجاني والمعاينة ببلاش.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="bg-white text-sky-700 hover:bg-sky-50" asChild>
              <a href={`tel:${siteConfig.phone}`}><Phone className="h-5 w-5" />اتصل دلوقتي</a>
            </Button>
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white" asChild>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" />واتساب</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}