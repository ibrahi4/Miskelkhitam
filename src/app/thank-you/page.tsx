import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, MessageCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "شكرًا لك" };

export default function ThankYouPage() {
  return (
    <section className="section-padding bg-white min-h-[60vh] flex items-center">
      <div className="container-custom text-center space-y-6 max-w-lg mx-auto">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="h-10 w-10 text-green-500" />
        </div>
        <h1 className="text-3xl font-black text-sky-950">شكرًا لتواصلك معنا</h1>
        <p className="text-slate-600">تم استلام رسالتك بنجاح. فريقنا هيتواصل معك في أقرب وقت.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white" asChild>
            <a href={`tel:${siteConfig.phone}`}><Phone className="h-5 w-5" />اتصل الآن</a>
          </Button>
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white" asChild>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" />واتساب</a>
          </Button>
        </div>
        <Button variant="ghost" className="text-sky-600" asChild>
          <Link href="/"><ArrowLeft className="h-4 w-4 rotate-180" />العودة للرئيسية</Link>
        </Button>
      </div>
    </section>
  );
}