This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# Al-baraka





🚀 برومبت استكمال مشروع شركة البركة لنقل الأثاث
📋 معلومات المشروع
أنا بشتغل على موقع شركة "البركة لنقل الأثاث" - شركة حقيقية في مصر، خبرة 10+ سنوات، مقرها العباسية - ميدان الجيش، القاهرة.

🎯 الهدف الأساسي من الموقع:
SEO قوي جداً والظهور على جوجل في الكلمات المفتاحية المهمة
تقليل صرف الإعلانات (الموقع الحالي شغال بالإعلانات فقط: themovingzone.online)
بناء ثقة عالية خصوصاً لعملاء المدن الجديدة الراقية
تحويلات عالية (Conversions) للمكالمات والواتساب
👥 الجمهور المستهدف:
الأولوية للمدن الجديدة الفاخرة: الشيخ زايد، التجمع الخامس، مدينتي، 6 أكتوبر، العاصمة الإدارية، القاهرة الجديدة
عملاء راقيين بميزانيات أعلى ومتطلبات أعلى
الشركة بتغطي 27 محافظة في مصر + 12 مدينة جديدة
🛠️ الخدمات المقدمة:
نقل الأثاث (naql-athath)
فك وتركيب الأثاث (fak-tarkeeb-athath)
فك وتركيب التكييفات (fak-tarkeeb-takyifat)
تغليف الأثاث (taghleef-athath)
ونش رفع الأثاث (wensh-raf3-athath)
نقل المقتنيات الحساسة (naql-moqtaniat-hassasa)
🎨 الهوية البصرية المعتمدة:
الألوان:
Navy (Primary): #1B2A41 / Hover: #0F1A2B
Gold (Accent): #C9A961 / Hover: #A8893F
Background: #FFFFFF / Alt: #F8F6F2
Text Primary: #1B2A41
Text Secondary: #6B7280
الخط:
Cairo من Google Fonts (400, 500, 600, 700, 800, 900)
الستايل:
Light mode فقط - فخم، هادي، احترافي
مستوحى من موقع nasertrans.com لكن بألوان Quiet Luxury
يستهدف عملاء راقيين (التجمع، زايد، مدينتي)
Mobile-First (أغلب الزيارات من الموبايل)
💻 الـ Tech Stack:
text

- Next.js 16.2.6 (App Router + Turbopack)
- TypeScript
- Tailwind CSS v4
- shadcn/ui (Neutral theme)
- Framer Motion (للأنيميشنز)
- Lucide React (للأيقونات)
- Radix UI primitives
المكتبات المثبتة:
Bash

framer-motion, embla-carousel-react, embla-carousel-autoplay,
react-intersection-observer, next-themes, sonner, lucide-react,
class-variance-authority, @radix-ui/react-slot, @radix-ui/react-accordion
shadcn Components المثبتة:
button, card, badge, separator, sheet, accordion, form, input, textarea, select, dialog, skeleton, tabs, avatar, tooltip, dropdown-menu, navigation-menu

📁 هيكل المشروع:
text

src/
├── app/
│   ├── page.tsx                    # الصفحة الرئيسية
│   ├── layout.tsx                  # Layout عام
│   ├── not-found.tsx               # صفحة 404
│   ├── loading.tsx                 # Loading state
│   ├── globals.css                 # Tailwind v4 setup
│   ├── sitemap.ts                  # SEO sitemap
│   ├── robots.ts                   # SEO robots
│   ├── manifest.ts                 # PWA manifest
│   ├── about/page.tsx              # من نحن
│   ├── contact/page.tsx            # اتصل بنا (مع نموذج WhatsApp)
│   ├── faq/page.tsx                # الأسئلة الشائعة (8 أقسام، 30+ سؤال)
│   ├── services/
│   │   ├── page.tsx                # كل الخدمات
│   │   └── [slug]/page.tsx         # صفحة الخدمة الواحدة
│   └── areas/
│       ├── page.tsx                # كل المناطق (مع Search)
│       └── [slug]/page.tsx         # صفحة المنطقة الواحدة
│
├── components/
│   ├── ui/                         # shadcn components
│   ├── layout/
│   │   ├── Header.tsx              # Header مع Sheet للموبايل
│   │   ├── Footer.tsx              # Footer كامل
│   │   └── FloatingActions.tsx     # WhatsApp + Call + Back to Top
│   ├── features/
│   │   ├── GallerySection.tsx      # معرض الصور
│   │   └── VideosSection.tsx       # معرض الفيديوهات
│   └── analytics/
│       └── GoogleAnalytics.tsx     # GA + GTM + Event tracking
│
├── config/
│   ├── site.ts                     # بيانات الشركة المركزية
│   ├── navigation.ts               # روابط الـ Nav
│   ├── services.ts                 # الخدمات الـ 6 بـ Meta كامل
│   ├── governorates.ts             # 27 محافظة + 12 مدينة جديدة
│   └── media.ts                    # صور + فيديوهات + خلفيات
│
├── lib/
│   ├── utils.ts                    # cn() helper
│   └── seo/
│       ├── metadata.ts             # buildMetadata helper
│       └── schema.ts               # JSON-LD Schema (LocalBusiness, Service, FAQ, Breadcrumb)
│
└── types/
    └── index.ts                    # TypeScript types
📊 بيانات الشركة المركزية (siteConfig):
TypeScript

{
  name: "شركة البركة لنقل الأثاث",
  shortName: "البركة",
  url: "https://albaraka-moving.com",
  phone: "01000000000",
  whatsapp: "201000000000",
  address: "العباسية - ميدان الجيش - القاهرة - مصر",
  yearsOfExperience: 10,
  foundingYear: 2014,
}
✅ ما تم إنجازه بالكامل:
✅ Setup كامل: Next.js + Tailwind v4 + shadcn + كل المكتبات
✅ Design System: ألوان + خطوط + spacing موحد
✅ Header احترافي: Top bar + Sheet للموبايل + sticky
✅ Footer كامل: 4 أعمدة + روابط الخدمات والمناطق
✅ الصفحة الرئيسية: Hero + Features + Services (كروت سينمائية بصور خلفية) + Gallery + Why Us + Videos + Areas + CTA
✅ صفحات الخدمات: /services + /services/[slug] (مع features + FAQ + breadcrumb)
✅ صفحات المناطق: /areas (مع Search فوري) + /areas/[slug]
✅ صفحة من نحن: قصة + رسالة + رؤية + قيم + خطوات العمل + إحصائيات
✅ صفحة اتصل بنا: نموذج كامل يرسل للواتساب + بطاقات تواصل
✅ صفحة FAQ: 8 أقسام، 30+ سؤال، schema markup
✅ Floating Actions: WhatsApp widget بـ Quick Messages + Call + Back to Top
✅ SEO Foundation: sitemap + robots + schema + metadata
✅ 404 page احترافية + loading.tsx
✅ PWA manifest
✅ Google Analytics + GTM setup + Event tracking
🎯 المدن الجديدة المميزة بـ VIP:
text

sheikh-zayed, tagamoa-khames, madinaty, 6-october,
new-capital, new-cairo, rehab, shorouk,
october-gardens, mostakbal-city, badr-city, obour
🚀 الخطوات القادمة (لم تتم بعد):
تحسينات مطلوبة:
صور Favicon و OG Image (لسه ما اتعملوش)
Privacy Policy + Terms of Service
اختبار النشر على Vercel
ربط دومين حقيقي
Google Search Console verification
Google Business Profile
صفحة البلوج /blog (محتوى SEO)
تصوير صور حقيقية للشغل
أولويات SEO القادمة:
إضافة blog posts للكلمات المفتاحية
صفحات مدن مخصصة أكثر تفصيلاً
Internal linking strategy
Backlinks plan
📝 قواعد التواصل معي:
أنا Front-end Developer - فاهم كود لكن مش خبير backend
أنا شغال على Windows + PowerShell - الأوامر لازم تكون متوافقة مع PowerShell
بنزل الأكواد بالصق مرة واحدة - استخدم @'...'@ | Set-Content path
عايز ردود قصيرة ومباشرة - بدون حشو زيادة
الكود ممكن يكون طويل لكن الشرح اختصار
لما يبقى فيه ملف بـ [slug] استخدم -LiteralPath في PowerShell
أي تعديل لازم يبقى كامل - مش جزئي عشان مرة واحدة بنفذ
اللي بعتقد فيه احترافية اعمله - بس لو هتعمل تغيير كبير اسألني الأول
🎨 ملاحظات تصميمية مهمة:
مفيش dark mode - لايت فقط
Mobile-First دايماً - الموبايل أهم من الديسكتوب
Spacing نظامي - استخدم section-padding و container-custom
Animations هادية - مش مبالغ فيها
**Cards بـ hover