"use client";

import Link from "next/link";
import { MapPin, Phone, MessageCircle, Clock, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { featuredAreas } from "@/config/areas";
import { Logo } from "@/components/shared/Logo";
import { Separator } from "@/components/ui/separator";
import { trackPhoneCall, trackWhatsApp } from "@/lib/analytics/events";

export function Footer() {
  const validAreas = (featuredAreas || []).filter((a) => a && a.slug && a.name);

  return (
    <footer className="bg-[#1C1C1C] text-white mt-16 lg:mt-24">
      <div className="container-custom">

        {/* Top Section */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

            {/* Brand */}
            <div className="space-y-4">
              <Logo variant="white" size="lg" />
              <p className="text-sm text-white/60 leading-relaxed">
                خدمات نقل أثاث احترافية تليق بسكان التجمع ومدينتي والشيخ زايد.
                فرق مدربة ومعدات حديثة لضمان أعلى مستوى من الجودة.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <div className="w-2 h-2 bg-[#3F4F44] rounded-full" />
                <span className="text-xs text-white/50">خبرة {siteConfig.yearsOfExperience} سنوات في خدمتكم</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-sm text-white/90 mb-4 uppercase tracking-wider">
                خدماتنا
              </h4>
              <ul className="space-y-2.5">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-sm text-white/55 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ArrowLeft className="w-3 h-3 text-[#3F4F44] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas */}
            <div>
              <h4 className="font-bold text-sm text-white/90 mb-4 uppercase tracking-wider">
                مناطق الخدمة
              </h4>
              <ul className="space-y-2.5">
                {validAreas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={`/areas/${area.slug}`}
                      className="text-sm text-white/55 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ArrowLeft className="w-3 h-3 text-[#3F4F44] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      نقل أثاث {area.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/areas"
                    className="text-sm text-[#E8E3D9] hover:text-white transition-colors font-semibold flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3 h-3" />
                    كل المناطق
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-sm text-white/90 mb-4 uppercase tracking-wider">
                تواصل معنا
              </h4>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#3F4F44] shrink-0 mt-0.5" />
                  <span className="text-sm text-white/55 leading-relaxed">
                    {siteConfig.address}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#3F4F44] shrink-0" />
                  <a
                    href={`tel:${siteConfig.phone}`}
                    dir="ltr"
                    onClick={() => trackPhoneCall("footer")}
                    className="text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-[#3F4F44] shrink-0" />
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsApp("footer")}
                    className="text-sm text-white/55 hover:text-white transition-colors"
                  >
                    تواصل عبر واتساب
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#3F4F44] shrink-0" />
                  <span className="text-sm text-white/55">متاحون 24 ساعة / 7 أيام</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <Separator className="bg-white/10" />

        {/* Bottom */}
        <div className="py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <div>
            © {new Date().getFullYear()} {siteConfig.name} - جميع الحقوق محفوظة
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">
              سياسة الخصوصية
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/terms" className="hover:text-white/70 transition-colors">
              شروط الاستخدام
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/faq" className="hover:text-white/70 transition-colors">
              الأسئلة الشائعة
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}