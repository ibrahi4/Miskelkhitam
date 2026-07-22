import Image from "next/image";
import {
  Award, Users, Shield, Clock, CheckCircle2, Target,
  Heart, Sparkles, Phone, MessageCircle, MapPin,
  TrendingUp, Star, Crown,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = buildMetadata({
  title: "من نحن | خطوة لنقل الأثاث",
  description:
    "تعرف على خطوة لنقل الأثاث، خدمة احترافية بخبرة تليق بمنزلك في التجمع الخامس ومدينتي والشيخ زايد وجميع محافظات مصر.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1C1C1C] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3F4F44] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8E3D9] rounded-full blur-3xl" />
        </div>

        <div className="relative container-custom py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/5 text-[#E8E3D9] border border-white/10 mb-5 px-4 py-1.5">
              <Sparkles className="w-3 h-3 ml-1.5" />
              قصتنا
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-5 leading-tight tracking-tight">
              خبرة تصنع
              <br />
              <span className="text-[#E8E3D9]">الفارق</span>
            </h1>
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              منذ تأسيسنا عام {siteConfig.foundingYear}، التزمنا بتقديم خدمة نقل أثاث تليق بمنزلك،
              بمعايير احترافية وفرق مدربة.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <Badge variant="outline" className="border-[#3F4F44] text-[#3F4F44] mb-4">
                قصتنا
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1C] mb-6 leading-tight tracking-tight">
                رحلتنا من
                <br />
                <span className="text-[#3F4F44]">{siteConfig.foundingYear} حتى اليوم</span>
              </h2>
              <div className="space-y-4 text-[#6B6B6B] leading-relaxed">
                <p>
                  بدأت <strong className="text-[#1C1C1C]">خطوة لنقل الأثاث</strong> رحلتها
                  بفريق متخصص وحلم كبير لتقديم خدمة نقل أثاث ترقى لتوقعات العميل المصري
                  الباحث عن الجودة.
                </p>
                <p>
                  على مدار <strong className="text-[#3F4F44]">أكثر من 10 سنوات</strong>،
                  نمت الشركة لتصبح من أبرز شركات نقل الأثاث المتخصصة في خدمة الكمبوندات
                  الراقية في القاهرة الجديدة والتجمع الخامس ومدينتي والشيخ زايد.
                </p>
                <p>
                  نتخصص في خدمة <strong className="text-[#1C1C1C]">الكمبوندات الفاخرة</strong>
                  والمدن الجديدة، حيث نقدم خدمة White Glove تليق بمقتنياتكم الثمينة.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#E5E1DA]">
                <div>
                  <div className="text-3xl md:text-4xl font-black text-[#3F4F44] mb-1">+10</div>
                  <div className="text-xs text-[#6B6B6B]">سنوات خبرة</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-black text-[#3F4F44] mb-1">500+</div>
                  <div className="text-xs text-[#6B6B6B]">عميل راضٍ</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-black text-[#3F4F44] mb-1">20+</div>
                  <div className="text-xs text-[#6B6B6B]">منطقة مخدومة</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/herosection.jpeg"
                  alt="خطوة لنقل الأثاث"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 right-6 left-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#E8E3D9] rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-[#1C1C1C]" />
                      </div>
                      <div>
                        <div className="font-bold text-sm">مقرنا الرئيسي</div>
                        <div className="text-xs text-white/70">{siteConfig.address}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#1C1C1C] rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-[#E8E3D9] text-center">
                  <div className="text-2xl font-black">10+</div>
                  <div className="text-[10px] font-bold">سنوات</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="section-padding bg-[#F5F2EC]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="outline" className="border-[#3F4F44] text-[#3F4F44] mb-4">
              قيمنا
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1C] mb-4 tracking-tight">
              ما نؤمن به
            </h2>
            <p className="text-[#6B6B6B]">قيمنا الأساسية هي ما يميزنا ويصنع الفارق في خدماتنا</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Target,
                title: "رسالتنا",
                desc: "تقديم خدمة نقل أثاث تليق بمنزلك، بأعلى معايير الجودة والاحترافية، وشفافية كاملة في التعامل.",
              },
              {
                icon: Crown,
                title: "رؤيتنا",
                desc: "أن نكون الخيار الأول لسكان الكمبوندات الراقية في مصر عند التفكير في نقل الأثاث.",
              },
              {
                icon: Heart,
                title: "قيمنا",
                desc: "الأمانة، الاحترافية، الالتزام بالمواعيد، واحترام كل قطعة أثاث كأنها ملكنا.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="hover:border-[#3F4F44] hover:shadow-lg transition-all bg-white border-[#E5E1DA] group"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-[#1C1C1C] group-hover:bg-[#3F4F44] text-[#E8E3D9] rounded-2xl flex items-center justify-center mb-5 transition-all">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-[#1C1C1C] mb-3 group-hover:text-[#3F4F44] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#6B6B6B] leading-relaxed text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="outline" className="border-[#3F4F44] text-[#3F4F44] mb-4">
              مميزاتنا
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1C] mb-4 tracking-tight">
              لماذا يختارنا
              <br />
              <span className="text-[#3F4F44]">سكان الكمبوندات؟</span>
            </h2>
            <p className="text-[#6B6B6B]">نقدم لعملائنا ما يستحقونه من خدمة احترافية متكاملة</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { icon: Award, title: "خبرة 10+ سنوات", desc: "في مجال نقل الأثاث" },
              { icon: Users, title: "فرق متخصصة", desc: "مدربة على أعلى مستوى" },
              { icon: Shield, title: "ضمان كامل", desc: "على جميع المقتنيات" },
              { icon: Clock, title: "خدمة 24/7", desc: "متاحون طوال الأسبوع" },
              { icon: TrendingUp, title: "أسطول حديث", desc: "سيارات مجهزة بالكامل" },
              { icon: CheckCircle2, title: "أسعار شفافة", desc: "بدون رسوم خفية" },
              { icon: Crown, title: "خدمة VIP", desc: "للكمبوندات الفاخرة" },
              { icon: MapPin, title: "تغطية شاملة", desc: "جميع محافظات مصر" },
            ].map((item, i) => (
              <Card
                key={i}
                className="hover:border-[#3F4F44] hover:shadow-md transition-all border-[#E5E1DA] bg-[#F5F2EC]"
              >
                <CardContent className="p-5 text-center">
                  <div className="w-12 h-12 bg-[#3F4F44]/10 text-[#3F4F44] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="font-bold text-[#1C1C1C] text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-[#6B6B6B]">{item.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-[#F5F2EC]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="outline" className="border-[#3F4F44] text-[#3F4F44] mb-4">
              خطوات العمل
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1C] mb-4 tracking-tight">
              كيف نعمل؟
            </h2>
            <p className="text-[#6B6B6B]">عملية احترافية مدروسة من البداية حتى النهاية</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", title: "التواصل والاستفسار", desc: "اتصل بنا أو راسلنا على واتساب وأخبرنا باحتياجاتك" },
              { step: "02", title: "المعاينة المجانية", desc: "فريقنا يحضر للمعاينة وتقديم عرض سعر شفاف" },
              { step: "03", title: "التغليف والنقل", desc: "تغليف احترافي ونقل آمن بأحدث السيارات" },
              { step: "04", title: "التركيب والتسليم", desc: "تركيب الأثاث وتسليم المنزل جاهزاً" },
            ].map((item, i) => (
              <Card
                key={i}
                className="bg-white border-[#E5E1DA] hover:border-[#3F4F44] hover:shadow-lg transition-all h-full group"
              >
                <CardContent className="p-6">
                  <div className="text-6xl font-black text-[#E5E1DA] group-hover:text-[#3F4F44]/30 transition-colors mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#1C1C1C] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rating Card */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Card className="bg-[#1C1C1C] border-0 text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#3F4F44] rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8E3D9] rounded-full blur-3xl" />
            </div>

            <CardContent className="p-8 md:p-12 relative">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="bg-white/5 text-[#E8E3D9] border border-white/10 mb-5 px-4 py-1.5">
                    <Star className="w-3 h-3 ml-1.5 fill-[#E8E3D9]" />
                    تقييم عملائنا
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight tracking-tight">
                    ثقة <span className="text-[#E8E3D9]">عملائنا</span> هي شهادتنا
                  </h2>
                  <p className="text-white/60 mb-6 leading-relaxed">
                    أرقامنا تتحدث عن جودة خدماتنا واحترافية فرقنا
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-6 h-6 fill-[#E8E3D9] text-[#E8E3D9]" />
                    ))}
                    <span className="text-3xl font-black text-[#E8E3D9] mr-2">4.9</span>
                    <span className="text-sm text-white/60">/ 5</span>
                  </div>
                  <div className="text-sm text-white/50">متوسط تقييم العملاء</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "500+", label: "عميل راضٍ" },
                    { value: "98%", label: "معدل الرضا" },
                    { value: "10+", label: "سنوات خبرة" },
                    { value: "24/7", label: "خدمة مستمرة" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="bg-white/5 backdrop-blur p-5 rounded-2xl border border-white/10 text-center"
                    >
                      <div className="text-3xl md:text-4xl font-black text-[#E8E3D9] mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/60">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#1C1C1C] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3F4F44] rounded-full blur-3xl" />
        </div>

        <div className="relative container-custom py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-5 tracking-tight">
            جاهزون لخدمتك
            <br />
            <span className="text-[#E8E3D9]">في أي وقت</span>
          </h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            انضم لآلاف العملاء الذين وثقوا بنا في نقل أثاثهم
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-[#E8E3D9] hover:bg-[#D4CCB8] text-[#1C1C1C] font-bold h-14 px-8 shadow-2xl"
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
              className="bg-white/5 hover:bg-white/10 border-white/20 text-white hover:text-white h-14 px-8 backdrop-blur"
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
        </div>
      </section>
    </>
  );
}