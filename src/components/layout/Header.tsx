"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ChevronLeft,
  ChevronDown,
  Home,
  Info,
  Wrench,
  MapPin,
  MessageSquareQuote,
  HelpCircle,
  BookOpen,
  Image as ImageIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/Logo";
import { services } from "@/config/services";
import { areas } from "@/config/areas";
import { siteConfig } from "@/config/site";

const primaryNav = [
  { label: "الرئيسية", href: "/", icon: Home },
  { label: "من نحن", href: "/about", icon: Info },
];

const helpNav = [
  { label: "آراء العملاء", href: "/testimonials", icon: MessageSquareQuote, desc: "تقييمات حقيقية" },
  { label: "معرض الاعمال", href: "/gallery", icon: ImageIcon, desc: "صور من شغلنا" },
  { label: "الاسئلة الشائعة", href: "/faq", icon: HelpCircle, desc: "اجابات سريعة" },
  { label: "المدونة", href: "/blog", icon: BookOpen, desc: "مقالات ونصائح" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-green-100"
          : "bg-white border-b border-green-50"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-18 lg:h-20 gap-4">
          <Logo size="md" />

          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-green-700 bg-green-50"
                    : "text-slate-600 hover:text-green-700 hover:bg-green-50/60"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Services Menu */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("services")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive("/services")
                    ? "text-green-700 bg-green-50"
                    : "text-slate-600 hover:text-green-700 hover:bg-green-50/60"
                }`}
              >
                خدماتنا
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openMenu === "services" ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openMenu === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-1 w-[540px] bg-white rounded-2xl shadow-xl border border-green-100 p-4"
                  >
                    <div className="grid grid-cols-2 gap-1.5">
                      {services.map((s) => {
                        const Icon = s.icon;
                        return (
                          <Link
                            key={s.id}
                            href={`/services/${s.slug}`}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-green-50 transition-colors group"
                          >
                            <div className="w-9 h-9 bg-green-50 text-green-600 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-sm font-bold text-green-950">{s.shortTitle}</div>
                              <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">{s.description}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="mt-3 pt-3 border-t border-green-100">
                      <Link
                        href="/services"
                        className="flex items-center justify-between px-3 py-2 rounded-lg bg-green-50 hover:bg-green-100 transition-colors text-sm font-semibold text-green-700"
                      >
                        <span>عرض كل الخدمات</span>
                        <ChevronLeft className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Areas Menu */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("areas")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive("/areas")
                    ? "text-green-700 bg-green-50"
                    : "text-slate-600 hover:text-green-700 hover:bg-green-50/60"
                }`}
              >
                المناطق
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openMenu === "areas" ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openMenu === "areas" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-1 w-64 bg-white rounded-2xl shadow-xl border border-green-100 p-3"
                  >
                    <div className="space-y-0.5">
                      {areas.map((area) => (
                        <Link
                          key={area.id}
                          href={`/areas/${area.slug}`}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-green-50 transition-colors text-sm text-slate-600 hover:text-green-700"
                        >
                          <MapPin className="w-3.5 h-3.5 text-green-500" />
                          <span>{area.name}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-green-100">
                      <Link
                        href="/areas"
                        className="flex items-center justify-between px-3 py-2 rounded-lg bg-green-50 hover:bg-green-100 transition-colors text-sm font-semibold text-green-700"
                      >
                        <span>كل المناطق</span>
                        <ChevronLeft className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Help Menu */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("help")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive("/testimonials") || isActive("/faq") || isActive("/blog") || isActive("/gallery")
                    ? "text-green-700 bg-green-50"
                    : "text-slate-600 hover:text-green-700 hover:bg-green-50/60"
                }`}
              >
                المزيد
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openMenu === "help" ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openMenu === "help" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-1 w-64 bg-white rounded-2xl shadow-xl border border-green-100 p-3"
                  >
                    {helpNav.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-green-50 transition-colors group"
                        >
                          <div className="w-8 h-8 bg-green-50 text-green-600 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-green-950">{item.label}</div>
                            <div className="text-xs text-slate-500">{item.desc}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive("/contact")
                  ? "text-green-700 bg-green-50"
                  : "text-slate-600 hover:text-green-700 hover:bg-green-50/60"
              }`}
            >
              تواصل معنا
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-1.5 px-3 h-9 rounded-lg border border-green-200 text-green-700 hover:bg-green-50 text-sm font-semibold transition-colors"
              dir="ltr"
            >
              <Phone className="w-4 h-4" />
              <span>{siteConfig.phone}</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 h-9 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>واتساب</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-green-50 transition-colors"
            aria-label={mobileOpen ? "اغلاق القائمة" : "فتح القائمة"}
          >
            {mobileOpen ? <X className="w-6 h-6 text-slate-700" /> : <Menu className="w-6 h-6 text-slate-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-green-100 bg-white max-h-[calc(100vh-72px)] overflow-y-auto"
          >
            <nav className="container-custom py-4 space-y-1">
              {[
                { label: "الرئيسية", href: "/", icon: Home },
                { label: "من نحن", href: "/about", icon: Info },
                { label: "خدماتنا", href: "/services", icon: Wrench },
                { label: "المناطق", href: "/areas", icon: MapPin },
                { label: "معرض الاعمال", href: "/gallery", icon: ImageIcon },
                { label: "آراء العملاء", href: "/testimonials", icon: MessageSquareQuote },
                { label: "الاسئلة الشائعة", href: "/faq", icon: HelpCircle },
                { label: "المدونة", href: "/blog", icon: BookOpen },
                { label: "تواصل معنا", href: "/contact", icon: Phone },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium ${
                      isActive(item.href) ? "bg-green-50 text-green-700" : "text-slate-600"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="w-5 h-5" />
                      {item.label}
                    </span>
                    <ChevronLeft className="w-4 h-4 opacity-40" />
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-green-100 space-y-2">
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white gap-2" asChild>
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="w-4 h-4" />
                    اتصل دلوقتي
                  </a>
                </Button>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white gap-2" asChild>
                  <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    واتساب
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}