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
    src: "/images/gallery/fareq-3amal.webp",
    alt: "فريق البحرين أثناء تجهيز نقلة في التجمع الخامس",
    category: "فريق العمل",
  },
  {
    id: "g2",
    src: "/images/gallery/Crane_lifting_furniture.jpeg",
    alt: "ونش رفع أثاث لدور عالي",
    category: "ونش رفع",
  },
  {
    id: "g3",
    src: "/images/gallery/taghleef.jpeg",
    alt: "تغليف أثاث بالاسترتش فيلم والفقاعات الهوائية",
    category: "تغليف",
  },
  {
    id: "g4",
    src: "/images/gallery/tarkeeb.jpeg",
    alt: "تركيب غرفة نوم مودرن بعد النقل",
    category: "فك وتركيب",
  },
];

export const videos: VideoItem[] = [];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "م. أحمد جمال",
    location: "التجمع الخامس",
    rating: 5,
    text: "نقلت فيلا كاملة مع البحرين. الشباب كانوا منظمين جدًا والأثاث وصل بدون أي مشكلة. أحسن قرار أخدته.",
    date: "2025-06",
    service: "نقل فيلا",
  },
  {
    id: "t2",
    name: "د. سارة المنشاوي",
    location: "مدينتي",
    rating: 5,
    text: "كنت مرعوبة من النقل بس الحمدلله البحرين ريحوني من كل حاجة. من التغليف للتركيب كان كل حاجة تمام.",
    date: "2025-05",
    service: "نقل وتغليف شامل",
  },
  {
    id: "t3",
    name: "عمرو حسني",
    location: "الشيخ زايد",
    rating: 5,
    text: "سعرهم كان أحسن سعر لقيته والخدمة كانت 10/10. فكوا المطبخ وركبوه تاني في ساعتين.",
    date: "2025-04",
    service: "فك وتركيب مطبخ",
  },
  {
    id: "t4",
    name: "هند عبدالرحمن",
    location: "القاهرة الجديدة",
    rating: 5,
    text: "الونش كان ضروري عشان غرفة النوم كبيرة. الشغل تم بسرعة واحترافية. شكرًا يا بحرين!",
    date: "2025-03",
    service: "ونش رفع",
  },
  {
    id: "t5",
    name: "أ. خالد سعيد",
    location: "6 أكتوبر",
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
    text: "عندي نجفة كريستال غالية جدًا وكنت خايفة عليها. البحرين غلفوها قطعة قطعة ووصلت سليمة. ربنا يوفقهم.",
    date: "2025-01",
    service: "نقل أنتيكات",
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