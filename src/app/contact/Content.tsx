"use client";

import { useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";

const contactInfo = [
  { icon: Phone, label: "اتصل بنا", value: siteConfig.phone, href: `tel:${siteConfig.phone}`, color: "bg-blue-700", ltr: true },
  { icon: MessageCircle, label: "واتساب", value: "تواصل عبر واتساب", href: `https://wa.me/${siteConfig.whatsapp}`, color: "bg-blue-500", ltr: false },
  { icon: Mail, label: "البريد الالكتروني", value: siteConfig.email, href: `mailto:${siteConfig.email}`, color: "bg-sky-600", ltr: true },
  { icon: MapPin, label: "العنوان", value: siteConfig.address, href: "#", color: "bg-slate-700", ltr: false },
  { icon: Clock, label: "ساعات العمل", value: "24 ساعة / 7 ايام", href: "#", color: "bg-amber-600", ltr: false },
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  from: string;
  to: string;
  message: string;
}

export default function ContactContent() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: "", phone: "", email: "", from: "", to: "", message: "",
  });

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("الاسم ورقم التليفون مطلوبين");
      return;
    }
    setLoading(true);

    const msg = [
      "*رسالة جديدة من موقع مسك الختام*",
      `الاسم: ${form.name}`,
      `التليفون: ${form.phone}`,
      form.email ? `الايميل: ${form.email}` : "",
      form.from ? `من: ${form.from}` : "",
      form.to ? `الى: ${form.to}` : "",
      form.message ? `الرسالة: ${form.message}` : "",
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    toast.success("تم فتح واتساب - ارسل الرسالة وهنرد عليك في اسرع وقت");
    setLoading(false);
    setForm({ name: "", phone: "", email: "", from: "", to: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-bl from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500 rounded-full blur-3xl" />
        </div>
        <div className="container-custom py-16 md:py-20 text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 px-4 py-1.5 text-sm font-semibold text-blue-200 mb-4">
            <Phone className="h-4 w-4" />
            تواصل معنا
          </div>
          <h1 className="mb-4 text-3xl md:text-5xl font-black text-white leading-tight">
            نحب نسمع منك
          </h1>
          <p className="text-blue-100/80 leading-relaxed md:text-lg max-w-2xl mx-auto">
            سواء محتاج عرض سعر او عندك استفسار، فريقنا جاهز يساعدك 24/7.
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#F8FBFF] to-transparent" />
      </section>

      {/* Contact Cards */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group"
                >
                  <Card className="border-blue-100/60 hover:shadow-lg hover:border-blue-200 transition-all h-full">
                    <CardContent className="p-4 text-center space-y-2">
                      <div className={`w-11 h-11 ${item.color} text-white rounded-xl flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="text-xs text-slate-500">{item.label}</div>
                      <div className="font-bold text-blue-950 text-xs line-clamp-1" dir={item.ltr ? "ltr" : undefined}>
                        {item.value}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding bg-blue-50/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Info Side */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-blue-950 mb-3">اختار وسيلة التواصل اللي تريحك</h2>
                <p className="text-slate-600 leading-relaxed">
                  فريقنا متاح 24 ساعة. اتصل بينا، ابعت واتساب، او املا الفورم واحنا هنرد عليك في دقائق.
                </p>
              </div>

              <Card className="border-blue-100/60 bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-700 text-white rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">اتصل بنا مباشرة</div>
                      <a href={`tel:${siteConfig.phone}`} className="text-lg font-bold text-blue-950 hover:text-blue-700" dir="ltr">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-blue-50">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center shrink-0">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-slate-500">واتساب مباشر</div>
                      <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-blue-950 hover:text-blue-600">
                        كلمنا الآن
                      </a>
                    </div>
                  </div>

                  {siteConfig.email && (
                    <div className="flex items-center gap-3 pt-4 border-t border-blue-50">
                      <div className="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center shrink-0">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-slate-500">البريد الالكتروني</div>
                        <a href={`mailto:${siteConfig.email}`} className="text-sm font-bold text-blue-950 hover:text-sky-600 line-clamp-1" dir="ltr">
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3 pt-4 border-t border-blue-50">
                    <div className="w-12 h-12 bg-amber-600 text-white rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">مواعيد العمل</div>
                      <div className="text-lg font-bold text-blue-950">24 ساعة / 7 ايام</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-4 border-t border-blue-50">
                    <div className="w-12 h-12 bg-slate-700 text-white rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">المقر الرئيسي</div>
                      <div className="text-sm font-bold text-blue-950">{siteConfig.address}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Form Side */}
            <div>
              <Card className="border-blue-100/60 bg-white shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-10 h-10 bg-blue-700 text-white rounded-xl flex items-center justify-center">
                      <Send className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-blue-950">ارسل لنا رسالة</h2>
                      <p className="text-xs text-slate-500">هنرد عليك في اقل من ساعة</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="c-name">الاسم *</Label>
                        <Input id="c-name" placeholder="اسمك الكريم" value={form.name} onChange={(e) => update("name", e.target.value)} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="c-phone">التليفون *</Label>
                        <Input id="c-phone" type="tel" placeholder="01xxxxxxxxx" value={form.phone} onChange={(e) => update("phone", e.target.value)} required dir="ltr" className="text-left" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="c-email">الايميل (اختياري)</Label>
                      <Input id="c-email" type="email" placeholder="example@email.com" value={form.email} onChange={(e) => update("email", e.target.value)} dir="ltr" className="text-left" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="c-from">النقل من</Label>
                        <Input id="c-from" placeholder="المنطقة" value={form.from} onChange={(e) => update("from", e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="c-to">النقل الى</Label>
                        <Input id="c-to" placeholder="المنطقة" value={form.to} onChange={(e) => update("to", e.target.value)} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="c-msg">تفاصيل النقلة او استفسارك</Label>
                      <Textarea id="c-msg" placeholder="اكتب اي تفاصيل هتساعدنا نقدملك احسن خدمة..." value={form.message} onChange={(e) => update("message", e.target.value)} rows={4} />
                    </div>

                    <Button type="submit" disabled={loading} className="w-full gap-2 bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20" size="lg">
                      {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <MessageCircle className="h-5 w-5" />}
                      ارسال عبر واتساب
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="h-4 w-4 text-blue-600" />
                      <span>بياناتك آمنة ومحفوظة</span>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}