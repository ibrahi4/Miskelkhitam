import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Truck, Wrench, Wind, Box, ArrowUpToLine, Gem,
  Phone, MessageCircle, CheckCircle2, ChevronLeft,
  Shield, Clock, Users, Award, Sparkles,
} from "lucide-react";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import { serviceBackgrounds } from "@/config/media";
import { buildMetadata } from "@/lib/seo/metadata";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const serviceIcons: Record<string, React.ElementType> = {
  "naql-athath": Truck,
  "fak-tarkeeb-athath": Wrench,
  "fak-tarkeeb-takyifat": Wind,
  "taghleef-athath": Box,
  "wensh-raf3-athath": ArrowUpToLine,
  "naql-moqtaniat-hassasa": Gem,
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  const bg = serviceBackgrounds[slug];

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
    image: bg?.src || "/logo.jpeg",
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const Icon = serviceIcons[service.slug] || Truck;
  const bg = serviceBackgrounds[service.slug];
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);
  const serviceUrl = `${siteConfig.url}/services/${slug}`;

  const serviceSchema = generateServiceSchema(
    service.name,
    service.metaDescription,
    serviceUrl
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: siteConfig.url },
    { name: "خدماتنا", url: `${siteConfig.url}/services` },
    { name: service.name, url: serviceUrl },
  ]);

  const features = [
    { icon: Shield, title: "ضمان كامل", desc: "على جميع المقتنيات" },
    { icon: Users, title: "فرق متخصصة", desc: "مدربة على أعلى مستوى" },
    { icon: Clock, title: "التزام بالمواعيد", desc: "دقة في التنفيذ" },
    { icon: Award, title: "جودة عالية", desc: "معايير احترافية" },
  ];

  const benefits = [
    "معاينة مجانية قبل تحديد السعر",
    "أسعار شفافة بدون رسوم خفية",
    "فريق مدرب ومحترف",
    "معدات حديثة ومتطورة",
    "تغليف احترافي بمواد عالية الجودة",
    "ضمان كامل على المقتنيات",
    "خدمة سريعة والتزام بالمواعيد",
    "دعم فني قبل وبعد الخدمة",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-[#F5F2EC] border-b border-[#E5E1DA]">
        <div className="container-custom py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <Link href="/" className="hover:text-[#3F4F44] transition-colors">
              الرئيسية
            </Link>
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            <Link href="/services" className="hover:text-[#3F4F44] transition-colors">
              خدماتنا
            </Link>
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            <span className="text-[#1C1C1C] font-semibold" aria-current="page">
              {service.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero with Background Image */}
      <section className="relative bg-[#1C1C1C] text-white overflow-hidden min-h-[70vh] flex items-center">
        {/* Background Image */}
        {bg && (
          <div className="absolute inset-0">
            <Image
              src={bg.src}
              alt={bg.alt}
              fill
              priority
              quality={85}
              className="object-cover"
              sizes="100vw"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#1C1C1C]/95 via-[#1C1C1C]/80 to-[#1C1C1C]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent" />
          </div>
        )}

        <div className="relative container-custom py-16 md:py-20 w-full">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">

              {/* Service Icon */}
              <div className="w-20 h-20 bg-[#3F4F44] rounded-3xl flex items-center justify-center mb-6 shadow-2xl backdrop-blur-md border border-white/10">
                <Icon className="w-10 h-10 text-white" />
              </div>

              <Badge className="bg-white/10 text-[#E8E3D9] border border-white/20 mb-5 px-4 py-1.5 backdrop-blur">
                <Sparkles className="w-3 h-3 ml-1.5" />
                خدمة احترافية
              </Badge>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-5 tracking-tight leading-tight drop-shadow-2xl">
                {service.name}
              </h1>

              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mb-8 drop-shadow-lg">
                {service.shortDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#E8E3D9] hover:bg-[#D4CCB8] text-[#1C1C1C] font-bold h-14 px-8 shadow-2xl"
                >
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="w-4 h-4 ml-2" />
                    احجز الخدمة الآن
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 border-white/30 text-white hover:text-white h-14 px-8 backdrop-blur"
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
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-[#F5F2EC] border-b border-[#E5E1DA]">
        <div className="container-custom py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-[#E5E1DA] hover:border-[#3F4F44] hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 bg-[#3F4F44]/10 text-[#3F4F44] rounded-xl flex items-center justify-center shrink-0">
                  <f.icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-[#1C1C1C] text-sm">{f.title}</div>
                  <div className="text-xs text-[#6B6B6B]">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail with Image */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Service Image */}
            <div className="relative order-2 lg:order-1">
              {bg && (
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#E5E1DA] group">
                  <Image
                    src={bg.src}
                    alt={bg.alt}
                    fill
                    quality={85}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  {/* Overlay Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-[#E5E1DA] shadow-lg flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#3F4F44] rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-bold text-[#1C1C1C]">
                        {service.name}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Info Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/80 to-transparent p-6 pt-16">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 bg-[#E8E3D9] rounded-full border-2 border-[#1C1C1C] flex items-center justify-center"
                          >
                            <Users className="w-3 h-3 text-[#1C1C1C]" />
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="text-xs text-white/60">فريق متخصص</div>
                        <div className="text-sm font-bold text-white">مدرب على أعلى مستوى</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 hidden lg:block">
                <Card className="bg-[#1C1C1C] border-2 border-white text-white shadow-2xl">
                  <CardContent className="p-5 flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#E8E3D9] rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-[#1C1C1C]" />
                    </div>
                    <div>
                      <div className="text-xs text-white/60">ضمان كامل</div>
                      <div className="text-sm font-black text-[#E8E3D9]">10+ سنوات خبرة</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <Badge variant="outline" className="border-[#3F4F44] text-[#3F4F44] mb-4">
                لماذا خطوة
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1C] mb-5 leading-tight tracking-tight">
                خدمة تليق
                <br />
                <span className="text-[#3F4F44]">بمنزلك</span>
              </h2>
              <p className="text-base text-[#6B6B6B] leading-relaxed mb-8">
                نقدم خدمة {service.name} بأعلى معايير الجودة والاحترافية،
                مع الالتزام الكامل بالمواعيد وضمان سلامة مقتنياتك.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-[#F5F2EC] p-3 rounded-xl border border-[#E5E1DA]"
                  >
                    <div className="w-8 h-8 bg-[#3F4F44] text-white rounded-lg flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm text-[#1C1C1C] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Card */}
      <section className="section-padding bg-[#F5F2EC]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-[#1C1C1C] border-0 text-white overflow-hidden relative">
              <div className="absolute inset-0 opacity-10" aria-hidden="true">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#3F4F44] rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8E3D9] rounded-full blur-3xl" />
              </div>

              <CardContent className="p-8 md:p-12 relative">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Award className="w-12 h-12 text-[#E8E3D9] mb-4" />
                    <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
                      احجز {service.name}
                      <br />
                      <span className="text-[#E8E3D9]">الآن</span>
                    </h3>
                    <p className="text-white/60 mb-8 leading-relaxed">
                      تواصل معنا لحجز موعد المعاينة والحصول على عرض سعر شفاف ومناسب
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-[#E8E3D9] hover:bg-[#D4CCB8] text-[#1C1C1C] font-bold h-14 shadow-xl"
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
                      className="w-full bg-white/5 hover:bg-white/10 border-white/20 text-white hover:text-white h-14 backdrop-blur"
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="outline" className="border-[#3F4F44] text-[#3F4F44] mb-4">
              خدمات أخرى
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1C] mb-4 tracking-tight">
              اكتشف باقي خدماتنا
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.map((s) => {
              const SIcon = serviceIcons[s.slug] || Truck;
              const sBg = serviceBackgrounds[s.slug];
              return (
                <Link key={s.slug} href={`/services/${s.slug}`} className="block group">
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer border-[#E5E1DA] hover:border-[#3F4F44]">
                    {/* Card Image */}
                    {sBg && (
                      <div className="relative aspect-video overflow-hidden bg-[#F5F2EC]">
                        <Image
                          src={sBg.src}
                          alt={sBg.alt}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 via-[#1C1C1C]/30 to-transparent" />

                        {/* Icon Badge */}
                        <div className="absolute top-4 right-4">
                          <div className="w-11 h-11 bg-[#E8E3D9] rounded-xl flex items-center justify-center shadow-lg">
                            <SIcon className="w-5 h-5 text-[#1C1C1C]" />
                          </div>
                        </div>
                      </div>
                    )}

                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-[#1C1C1C] mb-2 group-hover:text-[#3F4F44] transition-colors">
                        {s.name}
                      </h3>
                      <p className="text-sm text-[#6B6B6B] leading-relaxed line-clamp-2">
                        {s.shortDescription}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              size="lg"
              className="bg-[#1C1C1C] hover:bg-[#2A2A2A] text-white h-12 px-8"
            >
              <Link href="/services">عرض جميع الخدمات</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}