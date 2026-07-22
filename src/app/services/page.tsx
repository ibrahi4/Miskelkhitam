import Link from "next/link";
import Image from "next/image";
import {
  Truck, Wrench, Wind, Box, ArrowUpToLine, Gem,
  ArrowLeft, Phone, MessageCircle, Star, Sparkles,
} from "lucide-react";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import { serviceBackgrounds } from "@/config/media";
import { buildMetadata } from "@/lib/seo/metadata";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = buildMetadata({
  title: "خدماتنا | خطوة لنقل الأثاث",
  description:
    "تعرف على جميع خدمات خطوة لنقل الأثاث: نقل، فك وتركيب، تغليف، ونش رفع، ونقل المقتنيات الحساسة في جميع محافظات مصر.",
  path: "/services",
});

const serviceIcons: Record<string, React.ElementType> = {
  "naql-athath": Truck,
  "fak-tarkeeb-athath": Wrench,
  "fak-tarkeeb-takyifat": Wind,
  "taghleef-athath": Box,
  "wensh-raf3-athath": ArrowUpToLine,
  "naql-moqtaniat-hassasa": Gem,
};

export default function ServicesPage() {
  return (
    <>
      {/* HERO WITH IMAGE */}
      <section className="relative bg-[#1C1C1C] text-white overflow-hidden min-h-[70vh] flex items-center">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/services/hero-main.webp"
            alt="خدمات خطوة لنقل الأثاث"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#1C1C1C]/95 via-[#1C1C1C]/75 to-[#1C1C1C]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent" />
        </div>

        <div className="relative container-custom py-16 md:py-24 w-full">
          <div className="max-w-3xl">

            {/* Badge */}
            <Badge className="bg-white/10 text-[#E8E3D9] border border-white/20 mb-5 px-4 py-1.5 backdrop-blur">
              <Sparkles className="w-3 h-3 ml-1.5" />
              خدماتنا
            </Badge>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-[1.1] drop-shadow-2xl">
              حلول متكاملة
              <br />
              <span className="text-[#E8E3D9]">لنقل الأثاث</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-xl text-white/85 leading-relaxed max-w-2xl mb-8 drop-shadow-lg">
              باقة شاملة من الخدمات الاحترافية لتلبية جميع احتياجاتك
              في نقل وتركيب الأثاث في جميع محافظات مصر
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-[#E8E3D9] hover:bg-[#D4CCB8] text-[#1C1C1C] font-bold h-14 px-8 shadow-2xl text-base"
              >
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="w-4 h-4 ml-2" />
                  احجز خدمتك الآن
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 border-white/30 text-white hover:text-white h-14 px-8 backdrop-blur text-base"
              >
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 ml-2" />
                  واتساب
                </a>
              </Button>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-lg">
              {[
                { value: "6+", label: "خدمات متكاملة" },
                { value: "+10", label: "سنوات خبرة" },
                { value: "24/7", label: "خدمة مستمرة" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl md:text-3xl font-black text-[#E8E3D9] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/50 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] uppercase tracking-widest">استكشف الخدمات</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* SERVICES GRID WITH IMAGES */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.slug] || Truck;
              const bg = serviceBackgrounds[s.slug];

              return (
                <Link key={s.slug} href={`/services/${s.slug}`} className="block group">
                  <div className="relative h-[440px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-[#1C1C1C]">

                    {/* Background Image */}
                    {bg && (
                      <Image
                        src={bg.src}
                        alt={bg.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading={i < 3 ? "eager" : "lazy"}
                        quality={80}
                      />
                    )}

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/60 to-[#1C1C1C]/20 group-hover:from-[#1C1C1C] group-hover:via-[#1C1C1C]/50 transition-all duration-500" />

                    {/* Olive Accent on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3F4F44]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Number - Top Left */}
                    <div className="absolute top-5 left-5 z-10">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center">
                        <span className="text-white font-black text-base">0{i + 1}</span>
                      </div>
                    </div>

                    {/* Icon - Top Right */}
                    <div className="absolute top-5 right-5 z-10">
                      <div className="w-14 h-14 bg-[#E8E3D9] group-hover:bg-white rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500">
                        <Icon className="w-6 h-6 text-[#1C1C1C]" />
                      </div>
                    </div>

                    {/* Content - Bottom */}
                    <div className="absolute bottom-0 right-0 left-0 p-6 md:p-7 z-10">
                      <div className="w-12 h-0.5 bg-[#E8E3D9] mb-4 group-hover:w-24 transition-all duration-500" />

                      <h2 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight group-hover:text-[#E8E3D9] transition-colors duration-500 tracking-tight">
                        {s.name}
                      </h2>

                      <p className="text-white/80 text-sm leading-relaxed mb-5 line-clamp-2">
                        {s.shortDescription}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-white/20">
                        <span className="text-white font-bold text-sm flex items-center gap-2 group-hover:text-[#E8E3D9] transition-colors">
                          اكتشف الخدمة
                          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-300" />
                        </span>

                        <div className="flex items-center gap-1 text-xs text-white/70">
                          <Star className="w-3 h-3 fill-[#E8E3D9] text-[#E8E3D9]" />
                          <span>خدمة مميزة</span>
                        </div>
                      </div>
                    </div>

                    {/* Ring on hover */}
                    <div className="absolute inset-0 rounded-3xl ring-2 ring-[#E8E3D9]/0 group-hover:ring-[#E8E3D9]/40 transition-all duration-500 pointer-events-none" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F2EC] py-12 md:py-16">
        <div className="container-custom">
          <Card className="bg-[#1C1C1C] border-0 text-white overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tight">
                تحتاج خدمة <span className="text-[#E8E3D9]">مخصصة؟</span>
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر يناسب احتياجاتك
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#E8E3D9] hover:bg-[#D4CCB8] text-[#1C1C1C] h-12 px-8"
                >
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="w-4 h-4 ml-2" />
                    اتصل الآن
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/5 hover:bg-white/10 border-white/20 text-white hover:text-white h-12 px-8 backdrop-blur"
                >
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 ml-2" />
                    واتساب
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}