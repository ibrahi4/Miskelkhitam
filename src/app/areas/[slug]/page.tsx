import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin, Phone, MessageCircle, ChevronLeft, Crown,
  CheckCircle2, Building2, Home, Sparkles, Shield, Clock,
} from "lucide-react";
import { areas } from "@/config/areas";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { generateAreaSchema, generateBreadcrumbSchema } from "@/lib/seo/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) return {};

  return buildMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/areas/${slug}`,
  });
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);

  if (!area) notFound();

  const otherAreas = areas
    .filter((a) => a.slug !== slug && a.group === area.group)
    .slice(0, 6);

  const areaUrl = `${siteConfig.url}/areas/${slug}`;

  const areaSchema = generateAreaSchema(
    area.name,
    area.description || area.metaDescription,
    areaUrl
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: siteConfig.url },
    { name: "مناطق الخدمة", url: `${siteConfig.url}/areas` },
    { name: area.name, url: areaUrl },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }}
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
            <Link href="/areas" className="hover:text-[#3F4F44] transition-colors">
              مناطق الخدمة
            </Link>
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            <span className="text-[#1C1C1C] font-semibold" aria-current="page">
              {area.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-[#1C1C1C] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3F4F44] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8E3D9] rounded-full blur-3xl" />
        </div>

        <div className="relative container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            {area.isVip && (
              <Badge className="bg-[#3F4F44] text-white border-0 mb-5 px-4 py-1.5">
                <Crown className="w-3 h-3 ml-1.5" />
                خدمة VIP
              </Badge>
            )}

            <div className="inline-flex w-20 h-20 bg-[#3F4F44] rounded-3xl items-center justify-center mb-6 shadow-2xl">
              <MapPin className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-5 tracking-tight leading-tight">
              نقل أثاث
              <br />
              <span className="text-[#E8E3D9]">{area.name}</span>
            </h1>

            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-8">
              {area.description ||
                `خدمة نقل أثاث احترافية في ${area.name} بفرق متخصصة ومعدات حديثة`}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#E8E3D9] hover:bg-[#D4CCB8] text-[#1C1C1C] font-bold h-14 px-8"
              >
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="w-4 h-4 ml-2" />
                  احجز الآن
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
        </div>
      </section>

      {/* Compounds */}
      {area.compounds && area.compounds.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Badge variant="outline" className="border-[#3F4F44] text-[#3F4F44] mb-4">
                <Crown className="w-3 h-3 ml-1.5" />
                الكمبوندات
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1C] mb-4 tracking-tight">
                نخدم أشهر كمبوندات
                <br />
                <span className="text-[#3F4F44]">{area.name}</span>
              </h2>
              <p className="text-base text-[#6B6B6B] leading-relaxed">
                خبرة في التعامل مع إدارات الكمبوندات والفلل والشقق الفاخرة
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {area.compounds.map((c) => (
                <Card
                  key={c}
                  className="hover:border-[#3F4F44] hover:shadow-md transition-all border-[#E5E1DA] bg-[#F5F2EC]"
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-10 h-10 bg-[#1C1C1C] text-[#E8E3D9] rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-sm text-[#1C1C1C]">{c}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Neighborhoods */}
      {area.neighborhoods && area.neighborhoods.length > 0 && (
        <section className="section-padding bg-[#F5F2EC]">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Badge variant="outline" className="border-[#3F4F44] text-[#3F4F44] mb-4">
                <Home className="w-3 h-3 ml-1.5" />
                الأحياء
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1C] mb-4 tracking-tight">
                نغطي جميع أحياء
                <br />
                <span className="text-[#3F4F44]">{area.name}</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {area.neighborhoods.map((n) => (
                <div
                  key={n}
                  className="bg-white border border-[#E5E1DA] hover:border-[#3F4F44] p-4 rounded-xl text-center transition-all"
                >
                  <MapPin className="w-4 h-4 text-[#3F4F44] mx-auto mb-2" />
                  <div className="text-sm font-semibold text-[#1C1C1C]">{n}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services in Area */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="outline" className="border-[#3F4F44] text-[#3F4F44] mb-4">
              <Sparkles className="w-3 h-3 ml-1.5" />
              خدماتنا في {area.name}
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1C] mb-4 tracking-tight">
              خدمات متكاملة
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="block group"
              >
                <Card className="h-full hover:border-[#3F4F44] hover:shadow-md transition-all border-[#E5E1DA] bg-[#F5F2EC]">
                  <CardContent className="p-5">
                    <div className="w-11 h-11 bg-[#3F4F44] text-white rounded-xl flex items-center justify-center mb-3">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-[#1C1C1C] mb-1 group-hover:text-[#3F4F44] transition-colors">
                      {s.name}
                    </h3>
                    <p className="text-xs text-[#6B6B6B] line-clamp-2">
                      {s.shortDescription}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us in Area */}
      <section className="section-padding bg-[#F5F2EC]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <Badge variant="outline" className="border-[#3F4F44] text-[#3F4F44] mb-4">
                لماذا خطوة
              </Badge>
              <h2 className="text-3xl md:text-4xl font-black text-[#1C1C1C] mb-5 leading-tight tracking-tight">
                لماذا نحن الأفضل
                <br />
                <span className="text-[#3F4F44]">في {area.name}؟</span>
              </h2>
              <p className="text-base text-[#6B6B6B] leading-relaxed mb-8">
                خبرة عميقة في المنطقة وفهم كامل لطبيعة الكمبوندات والأحياء،
                مما يضمن لك خدمة سلسة واحترافية.
              </p>

              <div className="space-y-3">
                {[
                  { icon: Shield, title: "ضمان كامل", desc: "على جميع المقتنيات" },
                  { icon: Clock, title: "التزام بالمواعيد", desc: "دقة في التنفيذ" },
                  { icon: Crown, title: "معرفة بالإجراءات", desc: "خبرة بإدارات الكمبوندات" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-3 bg-white p-4 rounded-2xl border border-[#E5E1DA]"
                  >
                    <div className="w-11 h-11 bg-[#3F4F44]/10 text-[#3F4F44] rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1C1C1C] mb-0.5">{item.title}</h4>
                      <p className="text-sm text-[#6B6B6B]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-[#1C1C1C] border-0 text-white overflow-hidden relative">
              <div className="absolute inset-0 opacity-10" aria-hidden="true">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#3F4F44] rounded-full blur-3xl" />
              </div>
              <CardContent className="p-8 md:p-10 relative">
                <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">
                  احجز خدمتك في {area.name}
                </h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                  فريقنا جاهز للوصول إليك في أي وقت. اتصل الآن للحصول على معاينة مجانية
                </p>

                <div className="space-y-3">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-[#E8E3D9] hover:bg-[#D4CCB8] text-[#1C1C1C] font-bold h-14"
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Areas */}
      {otherAreas.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <Badge variant="outline" className="border-[#3F4F44] text-[#3F4F44] mb-4">
                مناطق قريبة
              </Badge>
              <h2 className="text-3xl md:text-4xl font-black text-[#1C1C1C] tracking-tight">
                مناطق أخرى نخدمها
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {otherAreas.map((a) => (
                <Link key={a.slug} href={`/areas/${a.slug}`}>
                  <Card className="hover:border-[#3F4F44] hover:shadow-md transition-all cursor-pointer border-[#E5E1DA] bg-[#F5F2EC] group">
                    <CardContent className="p-4 text-center">
                      <MapPin className="w-5 h-5 text-[#3F4F44] mx-auto mb-2" />
                      <div className="text-sm font-bold text-[#1C1C1C] group-hover:text-[#3F4F44] transition-colors">
                        {a.name}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild variant="outline" className="border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white h-12 px-8">
                <Link href="/areas">عرض جميع المناطق</Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}