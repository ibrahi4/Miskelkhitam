import Link from "next/link";
import {
  Truck, Wrench, Wind, Box, ArrowUpToLine, Gem,
  ArrowLeft, Phone, MessageCircle,
} from "lucide-react";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
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
      {/* Hero */}
      <section className="relative bg-[#1C1C1C] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3F4F44] rounded-full blur-3xl" />
        </div>

        <div className="relative container-custom py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/5 text-[#E8E3D9] border border-white/10 mb-5 px-4 py-1.5">
              خدماتنا
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-5 tracking-tight">
              حلول متكاملة
              <br />
              <span className="text-[#E8E3D9]">لنقل الأثاث</span>
            </h1>
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              باقة شاملة من الخدمات الاحترافية لتلبية جميع احتياجاتك في نقل وتركيب الأثاث
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.slug] || Truck;
              return (
                <Link key={s.slug} href={`/services/${s.slug}`} className="block h-full group">
                  <Card className="h-full bg-[#F5F2EC] hover:bg-[#1C1C1C] transition-all duration-500 cursor-pointer border-[#E5E1DA] hover:border-[#1C1C1C] overflow-hidden">
                    <CardContent className="p-7 relative">
                      <div className="text-[80px] font-black text-[#E5E1DA] group-hover:text-white/5 leading-none absolute top-4 left-6 transition-colors duration-500 select-none">
                        0{i + 1}
                      </div>

                      <div className="relative w-14 h-14 bg-[#3F4F44] group-hover:bg-[#E8E3D9] rounded-2xl flex items-center justify-center mb-6 transition-all duration-500">
                        <Icon className="w-6 h-6 text-white group-hover:text-[#1C1C1C] transition-colors duration-500" />
                      </div>

                      <h2 className="relative text-xl md:text-2xl font-black text-[#1C1C1C] group-hover:text-white mb-3 leading-tight transition-colors duration-500">
                        {s.name}
                      </h2>

                      <p className="relative text-sm text-[#6B6B6B] group-hover:text-white/70 leading-relaxed mb-6 line-clamp-3 transition-colors duration-500">
                        {s.shortDescription}
                      </p>

                      <div className="relative flex items-center gap-2 text-[#3F4F44] group-hover:text-[#E8E3D9] font-bold text-sm transition-all duration-500">
                        <span>اكتشف الخدمة</span>
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-300" />
                      </div>
                    </CardContent>
                  </Card>
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