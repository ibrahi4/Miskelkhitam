export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface VideoItem {
  id: string;
  src: string;
  poster?: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  service: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/gallery/photo_1_2026-08-16_14-31-37.jpg",
    alt: "فريق مسك الختام اثناء تجهيز نقلة",
    category: "فريق العمل",
  },
  {
    id: "g2",
    src: "/images/gallery/photo_2_2026-08-16_14-31-37.jpg",
    alt: "تغليف اثاث احترافي بمواد عالمية",
    category: "تغليف",
  },
  {
    id: "g3",
    src: "/images/gallery/photo_3_2026-08-16_14-31-37.jpg",
    alt: "تحميل اثاث في سيارة نقل مجهزة",
    category: "نقل",
  },
  {
    id: "g4",
    src: "/images/gallery/photo_4_2026-08-16_14-31-37.jpg",
    alt: "فك وتركيب غرفة نوم بعد النقل",
    category: "فك وتركيب",
  },
  {
    id: "g5",
    src: "/images/gallery/photo_5_2026-08-16_14-31-37.jpg",
    alt: "تغليف قطع حساسة بفقاعات هوائية",
    category: "تغليف",
  },
  {
    id: "g6",
    src: "/images/gallery/photo_6_2026-08-16_14-31-37.jpg",
    alt: "فريق العمل اثناء نقلة في التجمع الخامس",
    category: "فريق العمل",
  },
  {
    id: "g7",
    src: "/images/gallery/photo_7_2026-08-16_14-31-37.jpg",
    alt: "سيارة نقل اثاث مغلقة ومجهزة",
    category: "نقل",
  },
  {
    id: "g8",
    src: "/images/gallery/photo_8_2026-08-16_14-31-38.jpg",
    alt: "تركيب مطبخ بعد النقل",
    category: "فك وتركيب",
  },
  {
    id: "g9",
    src: "/images/gallery/photo_9_2026-08-16_14-31-38.jpg",
    alt: "ترتيب وتسليم نقلة كاملة",
    category: "نقل",
  },
];

export const videos: VideoItem[] = [];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "م. احمد جمال",
    location: "التجمع الخامس",
    rating: 5,
    text: "نقلت فيلا كاملة مع مسك الختام. الشباب كانوا منظمين جداً والاثاث وصل بدون اي مشكلة. احسن قرار اخدته.",
    date: "2025-06",
    service: "نقل فيلا",
  },
  {
    id: "t2",
    name: "د. سارة المنشاوي",
    location: "مدينتي",
    rating: 5,
    text: "كنت قلقانة من النقل بس الحمدلله مسك الختام ريحوني من كل حاجة. من التغليف للتركيب كان كل حاجة تمام.",
    date: "2025-05",
    service: "نقل وتغليف شامل",
  },
  {
    id: "t3",
    name: "عمرو حسني",
    location: "الشيخ زايد",
    rating: 5,
    text: "سعرهم كان احسن سعر لقيته والخدمة كانت 10/10. فكوا المطبخ وركبوه تاني في ساعتين.",
    date: "2025-04",
    service: "فك وتركيب مطبخ",
  },
  {
    id: "t4",
    name: "هند عبدالرحمن",
    location: "القاهرة الجديدة",
    rating: 5,
    text: "الونش كان ضروري عشان غرفة النوم كبيرة. الشغل تم بسرعة واحترافية. شكراً مسك الختام!",
    date: "2025-03",
    service: "ونش رفع",
  },
  {
    id: "t5",
    name: "ا. خالد سعيد",
    location: "6 اكتوبر",
    rating: 5,
    text: "نقلت مكتبي بالكامل معاهم. كل حاجة اتغلفت كويس ومفيش ورقة واحدة ضاعت. ناس محترمة.",
    date: "2025-02",
    service: "نقل مكتبي",
  },
  {
    id: "t6",
    name: "نرمين فؤاد",
    location: "الرحاب",
    rating: 5,
    text: "عندي نجفة كريستال غالية جداً وكنت خايفة عليها. مسك الختام غلفوها قطعة قطعة ووصلت سليمة. ربنا يوفقهم.",
    date: "2025-01",
    service: "نقل انتيكات",
  },
];

export const serviceBackgrounds = {
  "furniture-moving": "/images/services/bg-naql-athath.webp",
  "disassembly-assembly": "/images/services/bg-fak-tarkeeb.webp",
  "professional-packing": "/images/services/bg-taghleef.webp",
  "furniture-crane": "/images/services/bg-wensh-raf3.webp",
  "ac-services": "/images/services/bg-takyifat.webp",
  "fragile-items": "/images/services/bg-moqtaniat.webp",
} as const;