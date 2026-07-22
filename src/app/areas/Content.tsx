"use client";

import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import {
  Crown, MapPin, Phone, MessageCircle,
  Star, Search, Sparkles, ArrowLeft, Building2,
} from "lucide-react";
import { areas, areaGroups, vipAreas } from "@/config/areas";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function AreasContent() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.trim().toLowerCase();
    return areas.filter(
      (a) =>
        a.name.includes(searchQuery.trim()) ||
        a.neighborhoods?.some((n) => n.includes(searchQuery.trim())) ||
        a.compounds?.some((c) => c.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const AreaCard = ({
    area,
    featured = false,
  }: {
    area: (typeof areas)[0];
    featured?: boolean;
  }) => (
    <Link href={`/areas/${area.slug}`}>
      {featured ? (
        <Card className="h-full hover:border-[#3F4F44] hover:shadow-xl transition-all duration-300 group cursor-pointer border-[#E5E1DA] bg-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#3F4F44]/5 rounded-full blur-2xl group-hover:bg-[#3F4F44]/10 transition-all" />
          <CardContent className="p-6 relative">
            <div className="flex items-start justify-between mb-5">
              <div className="w-14 h-14 bg-[#1C1C1C] text-[#E8E3D9] rounded-2xl flex items-center justify-center shadow-lg">
                <Crown className="w-6 h-6" />
              </div>
              <div className="flex flex-col items-end gap-1">
                <Badge className="bg-[#3F4F44] text-white border-0 text-[10px]">VIP</Badge>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 fill-[#3F4F44] text-[#3F4F44]" />
                  ))}
                </div>
              </div>
            </div>
            <h3 className="text-xl font-black text-[#1C1C1C] mb-2 group-hover:text-[#3F4F44] transition-colors">
              نقل أثاث {area.name}
            </h3>
            <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4 line-clamp-2">
              {area.description}
            </p>
            {area.compounds && area.compounds.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {area.compounds.slice(0, 3).map((c) => (
                  <span
                    key={c}
                    className="text-[10px] bg-[#3F4F44]/10 text-[#3F4F44] px-2 py-0.5 rounded-full font-medium"
                  >
                    {c}
                  </span>
                ))}
                {area.compounds.length > 3 && (
                  <span className="text-[10px] bg-[#F5F2EC] text-[#6B6B6B] px-2 py-0.5 rounded-full">
                    +{area.compounds.length - 3}
                  </span>
                )}
              </div>
            )}
            <div className="flex items-center justify-between pt-3 border-t border-[#E5E1DA]">
              <span className="text-[#3F4F44] font-bold text-sm flex items-center gap-2">
                اعرف المزيد
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </span>
              <span className="text-xs text-[#6B6B6B] flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#3F4F44]" />
                الأكثر طلباً
              </span>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="h-full hover:border-[#3F4F44] hover:shadow-md transition-all group cursor-pointer border-[#E5E1DA] bg-white relative">
          {area.isVip && (
            <Badge className="absolute top-2 left-2 bg-[#1C1C1C] text-[#E8E3D9] border-0 text-[10px] z-10">
              <Crown className="w-2.5 h-2.5 ml-0.5" />
              VIP
            </Badge>
          )}
          <CardContent className="p-5 text-center">
            <div className="w-12 h-12 bg-[#3F4F44]/10 group-hover:bg-[#3F4F44] text-[#3F4F44] group-hover:text-white rounded-xl flex items-center justify-center mx-auto mb-3 transition-all">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="font-bold text-sm md:text-base text-[#1C1C1C] group-hover:text-[#3F4F44] transition-colors">
              {area.name}
            </div>
            <div className="text-[10px] md:text-xs text-[#6B6B6B] mt-1">
              {area.isVip ? "خدمة VIP" : "نقل أثاث"}
            </div>
          </CardContent>
        </Card>
      )}
    </Link>
  );

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1C1C1C] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3F4F44] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8E3D9] rounded-full blur-3xl" />
        </div>
        <div className="relative container-custom py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/5 text-[#E8E3D9] border border-white/10 mb-5 px-4 py-1.5">
              <MapPin className="w-3 h-3 ml-1.5" />
              القاهرة الكبرى والمدن الجديدة
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-5 tracking-tight leading-tight">
              ابحث عن <span className="text-[#E8E3D9]">منطقتك</span>
            </h1>
            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8">
              متخصصون في نقل الأثاث داخل الكمبوندات الراقية والمدن الجديدة
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B6B6B]" />
              <Input
                type="text"
                placeholder="ابحث... (التجمع، مدينتي، Hyde Park...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white text-[#1C1C1C] h-14 pr-12 pl-4 text-base rounded-2xl border-0 shadow-2xl placeholder:text-[#6B6B6B]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {mounted && filteredResults !== null && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-[#1C1C1C] mb-2 tracking-tight">
                نتائج البحث
                <span className="text-[#3F4F44] mr-2">({filteredResults.length})</span>
              </h2>
              <p className="text-[#6B6B6B]">نتائج بحثك عن &quot;{searchQuery}&quot;</p>
            </div>
            {filteredResults.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {filteredResults.map((area) => (
                  <AreaCard key={area.slug} area={area} />
                ))}
              </div>
            ) : (
              <Card className="border-[#E5E1DA]">
                <CardContent className="p-12 text-center">
                  <Search className="w-16 h-16 text-[#E5E1DA] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#1C1C1C] mb-2">لا توجد نتائج</h3>
                  <p className="text-[#6B6B6B] mb-6">
                    لم نجد منطقة بهذا الاسم. تواصل معنا مباشرة وسنخدمك.
                  </p>
                  <Button
                    asChild
                    className="bg-[#3F4F44] hover:bg-[#2E3B32] text-white"
                  >
                    <a href={`tel:${siteConfig.phone}`}>
                      <Phone className="w-4 h-4 ml-2" />
                      اتصل بنا
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      )}

      {(!mounted || filteredResults === null) && (
        <>
          {/* VIP - المدن الجديدة */}
          <section className="section-padding bg-white">
            <div className="container-custom">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <Badge className="bg-[#1C1C1C] text-[#E8E3D9] border-0 mb-4 px-4 py-1.5">
                  <Crown className="w-3 h-3 ml-1.5" />
                  خدمة VIP - الأكثر طلباً
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1C] mb-3 tracking-tight">
                  متخصصون في
                  <br />
                  <span className="text-[#3F4F44]">الكمبوندات الراقية</span>
                </h2>
                <p className="text-base text-[#6B6B6B] leading-relaxed">
                  خبرة سنوات في خدمة الكمبوندات الفاخرة والفلل في المدن الجديدة
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {vipAreas.map((area) => (
                  <AreaCard key={area.slug} area={area} featured />
                ))}
              </div>
            </div>
          </section>

          {/* القاهرة */}
          <section className="section-padding bg-[#F5F2EC]">
            <div className="container-custom">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 bg-[#1C1C1C] text-[#E8E3D9] rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-[#1C1C1C] tracking-tight">
                    القاهرة
                  </h2>
                  <p className="text-sm text-[#6B6B6B]">
                    {areaGroups.cairo.areas.length} منطقة
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {areaGroups.cairo.areas.map((area) => (
                  <AreaCard key={area.slug} area={area} />
                ))}
              </div>
            </div>
          </section>

          {/* الجيزة */}
          <section className="section-padding bg-white">
            <div className="container-custom">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 bg-[#1C1C1C] text-[#E8E3D9] rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-[#1C1C1C] tracking-tight">
                    الجيزة
                  </h2>
                  <p className="text-sm text-[#6B6B6B]">
                    {areaGroups.giza.areas.length} منطقة
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {areaGroups.giza.areas.map((area) => (
                  <AreaCard key={area.slug} area={area} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA */}
      <section className="bg-[#F5F2EC] py-12 md:py-16">
        <div className="container-custom">
          <Card className="bg-[#1C1C1C] border-0 text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#3F4F44] rounded-full blur-3xl" />
            </div>
            <CardContent className="p-8 md:p-12 text-center relative">
              <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tight">
                منطقتك مش موجودة؟
                <br />
                <span className="text-[#E8E3D9]">تواصل معنا</span>
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                نخدم جميع مناطق القاهرة الكبرى، اتصل بنا للحصول على عرض سعر فوري
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