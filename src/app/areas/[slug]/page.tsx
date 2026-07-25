import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowLeft,
  Building2,
  HelpCircle,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { QuoteDialog } from "@/components/shared/QuoteDialog";
import { areas, getRelatedAreas } from "@/config/areas";
import { siteConfig } from "@/config/site";
import {
  generateAreaSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/seo/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) return { title: "غير موجود" };
  return {
    title: area.seoTitle,
    description: area.seoDescription,
    alternates: {
      canonical: `${siteConfig.url}/areas/${area.slug}`,
    },
  };
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) notFound();

  const related = getRelatedAreas(slug, 4);

  const areaSchema = generateAreaSchema({
    name: area.name,
    description: area.description,
    slug: area.slug,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: siteConfig.url },
    { name: "المناطق", url: `${siteConfig.url}/areas` },
    { name: area.name, url: `${siteConfig.url}/areas/${area.slug}` },
  ]);

  const faqSchema = area.faqs.length > 0 ? generateFAQSchema(area.faqs) : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-bl from-sky-950 via-sky-900 to-sky-800">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        </div>

        <div className="container-custom py-14 md:py-20 relative z-10">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: "المناطق", href: "/areas" },
                { label: area.name },
              ]}
            />
          </div>

          <div className="max-w-3xl">
            <Badge className="bg-sky-500/20 text-sky-200 border-sky-400/30 mb-4 backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5" />
              {area.name}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
              {area.heroTitle}
            </h1>
            <p className="text-sky-100/90 text-lg leading-relaxed mb-6">{area.heroDescription}</p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/40" asChild>
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="h-5 w-5" />
                  اتصل دلوقتي
                </a>
              </Button>
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/40" asChild>
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  واتساب
                </a>
              </Button>
              <QuoteDialog
                trigger={
                  <div className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 backdrop-blur-sm px-6 text-base font-medium text-white transition-colors hover:bg-white/20 cursor-pointer">
                    <Send className="h-5 w-5" />
                    عرض سعر
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-slate-600 leading-relaxed text-lg">{area.longDescription}</p>

              <h2 className="text-xl font-bold text-sky-950 pt-4">مميزات الخدمة في {area.name}</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[...area.highlights, ...area.benefits].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-sky-50 rounded-xl p-4">
                    <CheckCircle2 className="h-5 w-5 text-sky-500 shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-bold text-sky-950 flex items-center gap-2 pt-4">
                <Building2 className="h-5 w-5 text-sky-500" />
                كمبوندات نخدمها في {area.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                {area.compounds.map((c) => (
                  <Badge key={c} variant="secondary" className="text-sm px-3 py-1.5">{c}</Badge>
                ))}
              </div>

              {area.faqs.length > 0 && (
                <>
                  <h2 className="text-xl font-bold text-sky-950 flex items-center gap-2 pt-4">
                    <HelpCircle className="h-5 w-5 text-sky-500" />
                    أسئلة عن {area.name}
                  </h2>
                  <div className="space-y-3">
                    {area.faqs.map((faq, i) => (
                      <Card key={i} className="border-sky-100">
                        <CardContent className="p-5">
                          <h3 className="font-bold text-sky-950 mb-2">{faq.question}</h3>
                          <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              )}

              <Card className="border-sky-100 bg-gradient-to-l from-sky-50 to-white mt-6">
                <CardContent className="p-6 text-center space-y-3">
                  <h3 className="font-bold text-sky-950 text-lg">جاهز تنقل في {area.name}؟</h3>
                  <div className="flex flex-wrap justify-center gap-2 pt-2">
                    <Button className="bg-sky-500 hover:bg-sky-600 text-white" asChild>
                      <a href={`tel:${siteConfig.phone}`}><Phone className="h-4 w-4" />اتصل</a>
                    </Button>
                    <Button className="bg-green-500 hover:bg-green-600 text-white" asChild>
                      <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" />واتساب</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-sky-950">مناطق تانية</h3>
              {related.map((r) => (
                <Link key={r.id} href={`/areas/${r.slug}`}>
                  <Card className="border-sky-100 hover:shadow-md hover:border-sky-200 transition-all cursor-pointer mb-3">
                    <CardContent className="flex items-center gap-3 p-4">
                      <div className="w-11 h-11 bg-sky-50 text-sky-500 rounded-xl flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-sky-950 text-sm">{r.name}</div>
                        <div className="text-xs text-slate-500 line-clamp-1">{r.description}</div>
                      </div>
                      <ArrowLeft className="h-4 w-4 text-slate-400" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}