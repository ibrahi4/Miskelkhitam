import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Home, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "شكراً لك",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="section-padding bg-white min-h-[70vh] flex items-center">
      <div className="container-custom text-center space-y-6 max-w-lg mx-auto">
        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="h-10 w-10 text-blue-600" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-blue-950">شكراً لتواصلك معنا</h1>
        <p className="text-slate-500 leading-relaxed">
          تم استلام رسالتك بنجاح. فريقنا هيتواصل معك في اقرب وقت ممكن.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          <Button className="bg-blue-700 hover:bg-blue-800 text-white gap-2" asChild>
            <Link href="/">
              <Home className="h-4 w-4" />
              الرئيسية
            </Link>
          </Button>
          <Button variant="outline" className="border-blue-200 text-blue-700 gap-2" asChild>
            <a href={`tel:${siteConfig.phone}`}>
              <Phone className="h-4 w-4" />
              اتصل بنا
            </a>
          </Button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white gap-2" asChild>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              واتساب
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}