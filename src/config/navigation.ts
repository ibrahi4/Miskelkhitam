import {
  Home,
  Info,
  Wrench,
  MapPin,
  Image,
  Video,
  MessageSquareQuote,
  Phone,
  HelpCircle,
  BookOpen,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
}

export const mainNavItems: NavItem[] = [
  { label: "الرئيسية", href: "/", icon: Home },
  { label: "من نحن", href: "/about", icon: Info },
  { label: "خدماتنا", href: "/services", icon: Wrench },
  { label: "مناطق الخدمة", href: "/areas", icon: MapPin },
  { label: "معرض الصور", href: "/gallery", icon: Image },
  { label: "فيديوهات", href: "/videos", icon: Video },
  { label: "آراء العملاء", href: "/testimonials", icon: MessageSquareQuote },
  { label: "الأسئلة الشائعة", href: "/faq", icon: HelpCircle },
  { label: "المدونة", href: "/blog", icon: BookOpen },
  { label: "تواصل معنا", href: "/contact", icon: Phone },
];

export const footerServices = [
  { label: "نقل الأثاث", href: "/services/furniture-moving" },
  { label: "فك وتركيب", href: "/services/disassembly-assembly" },
  { label: "تغليف احترافي", href: "/services/professional-packing" },
  { label: "ونش رفع الأثاث", href: "/services/furniture-crane" },
  { label: "فك وتركيب التكييفات", href: "/services/ac-services" },
  { label: "نقل المقتنيات الحساسة", href: "/services/fragile-items" },
];

export const footerAreas = [
  { label: "التجمع الخامس", href: "/areas/tagamoa" },
  { label: "القاهرة الجديدة", href: "/areas/new-cairo" },
  { label: "مدينتي", href: "/areas/madinaty" },
  { label: "الشيخ زايد", href: "/areas/sheikh-zayed" },
  { label: "6 أكتوبر", href: "/areas/october" },
  { label: "الرحاب", href: "/areas/rehab" },
  { label: "العاصمة الإدارية", href: "/areas/new-capital" },
];

export const footerQuickLinks = [
  { label: "من نحن", href: "/about" },
  { label: "معرض الصور", href: "/gallery" },
  { label: "فيديوهات", href: "/videos" },
  { label: "آراء العملاء", href: "/testimonials" },
  { label: "الأسئلة الشائعة", href: "/faq" },
  { label: "المدونة", href: "/blog" },
  { label: "تواصل معنا", href: "/contact" },
  { label: "سياسة الخصوصية", href: "/privacy" },
  { label: "الشروط والأحكام", href: "/terms" },
];