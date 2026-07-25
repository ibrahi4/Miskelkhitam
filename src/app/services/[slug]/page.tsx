import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, MessageCircle, Phone, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { QuoteDialog } from "@/components/shared/QuoteDialog";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) return { title: "الخدمة غير موجودة" };

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `${siteConfig.url}/services/${service.slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `${siteConfig.url}/services/${service.slug}`,
      images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  const Icon = service.icon;
  const otherServices = services.filter((item) => item.slug !== slug).slice(0, 3);

  const serviceSchema = generateServiceSchema({
    title: service.title,
    description: service.description,
    slug: service.slug,
    image: service.image,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: siteConfig.url },
    { name: "خدماتنا", url: `${siteConfig.url}/services` },
    { name: service.shortTitle, url: `${siteConfig.url}/services/${service.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
                { label: "خدماتنا", href: "/services" },
                { label: service.shortTitle },
              ]}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-lg shadow-sky-500/40">
                <Icon className="h-8 w-8" />
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
                {service.title}
              </h1>

              <p className="text-lg text-sky-100/90 leading-relaxed">{service.description}</p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button size="lg" className="bg-sky-500 text-white hover:bg-sky-600 shadow-lg shadow-sky-500/40" asChild>
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="h-5 w-5" />
                    اتصل دلوقتي
                  </a>
                </Button>
                <Button size="lg" className="bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/40" asChild>
                  <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    واتساب
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <h2 className="text-2xl font-bold text-sky-950">تفاصيل الخدمة</h2>
              <p className="leading-relaxed text-slate-600 text-lg">{service.longDescription}</p>

              <h3 className="text-xl font-bold text-sky-950 pt-4">مميزات الخدمة</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 rounded-xl bg-sky-50 p-4">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-sky-500" />
                    <span className="text-sm font-medium text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Badge variant="secondary" className="text-sm px-4 py-2">{service.priceNote}</Badge>
              </div>

              {/* CTA inline */}
              <Card className="border-sky-100 bg-gradient-to-l from-sky-50 to-white mt-8">
                <CardContent className="p-6 text-center space-y-3">
                  <h3 className="font-bold text-sky-950 text-lg">جاهز تحجز الخدمة؟</h3>
                  <p className="text-sm text-slate-500">كلمنا دلوقتي واحصل على عرض سعر مجاني</p>
                  <div className="flex flex-wrap justify-center gap-2 pt-2">
                    <Button className="bg-sky-500 hover:bg-sky-600 text-white" asChild>
                      <a href={`tel:${siteConfig.phone}`}><Phone className="h-4 w-4" />اتصل</a>
                    </Button>
                    <Button className="bg-green-500 hover:bg-green-600 text-white" asChild>
                      <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" />واتساب</a>
                    </Button>
                    <QuoteDialog
                      trigger={
                        <div className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-sky-200 bg-white px-4 text-sm font-medium text-sky-700 hover:bg-sky-50 cursor-pointer">
                          <Send className="h-4 w-4" />
                          عرض سعر
                        </div>
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-sky-950">خدمات تانية</h3>

              {otherServices.map((item) => {
                const OtherIcon = item.icon;
                return (
                  <Link key={item.id} href={`/services/${item.slug}`}>
                    <Card className="mb-3 cursor-pointer border-sky-100 transition-all hover:shadow-md hover:border-sky-200">
                      <CardContent className="flex items-center gap-3 p-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-500">
                          <OtherIcon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-sky-950">{item.shortTitle}</div>
                          <div className="line-clamp-1 text-xs text-slate-500">{item.description}</div>
                        </div>
                        <ArrowLeft className="h-4 w-4 text-slate-400" />
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}