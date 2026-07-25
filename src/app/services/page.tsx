import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Phone, Wrench, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import { QuoteDialog } from "@/components/shared/QuoteDialog";

export const metadata: Metadata = {
  title: "خدماتنا",
  description: `جميع خدمات ${siteConfig.name}: نقل أثاث، فك وتركيب، تغليف احترافي، ونش رفع، تكييفات، ونقل مقتنيات حساسة.`,
};

export default function ServicesPage() {
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

        <div className="container-custom py-16 md:py-24 text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 backdrop-blur-sm border border-sky-400/30 px-4 py-1.5 text-sm font-semibold text-sky-200 mb-4">
            <Wrench className="h-4 w-4" />
            خدماتنا
          </div>
          <h1 className="mb-4 text-3xl md:text-5xl font-black text-white leading-tight">
            كل حاجة أثاثك محتاجها
            <br />
            <span className="text-sky-400">في مكان واحد</span>
          </h1>
          <p className="mx-auto max-w-2xl text-sky-100/90 md:text-lg leading-relaxed">
            من النقل والتغليف للفك والتركيب - بنقدم خدمات متكاملة بمعايير احترافية وضمان شامل.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.id} href={`/services/${service.slug}`}>
                  <Card className="group h-full cursor-pointer overflow-hidden border-sky-100 transition-all hover:border-sky-200 hover:shadow-xl hover:-translate-y-1">
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 via-sky-950/20 to-transparent" />
                      <div className="absolute bottom-3 right-3 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500 text-white shadow-lg">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <CardContent className="p-5">
                      <h2 className="mb-2 text-lg font-bold text-sky-950 transition-colors group-hover:text-sky-600">
                        {service.shortTitle}
                      </h2>
                      <p className="line-clamp-3 text-sm leading-relaxed text-slate-500">
                        {service.description}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-sky-500 transition-all group-hover:gap-2">
                        <span>تفاصيل الخدمة</span>
                        <ArrowLeft className="h-4 w-4" />
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
      <section className="section-padding bg-gradient-to-l from-sky-600 to-sky-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-custom text-center relative">
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">محتاج تحجز خدمة؟</h2>
          <p className="mx-auto mb-6 max-w-md text-sky-100">كلمنا دلوقتي وهنرتب لك كل حاجة</p>

          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="bg-white text-sky-700 hover:bg-sky-50" asChild>
              <a href={`tel:${siteConfig.phone}`}>
                <Phone className="h-5 w-5" />
                اتصل دلوقتي
              </a>
            </Button>
            <Button size="lg" className="bg-green-500 text-white hover:bg-green-600" asChild>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                واتساب
              </a>
            </Button>
            <QuoteDialog
              trigger={
                <div className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 px-6 text-base font-medium text-white transition-colors hover:bg-white/20 cursor-pointer">
                  <Send className="h-5 w-5" />
                  عرض سعر
                </div>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}