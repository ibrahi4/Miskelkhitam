interface SocialMedia {
  facebook: string;
  instagram: string;
  tiktok: string;
}

interface SiteConfig {
  name: string;
  shortName: string;
  englishName: string;
  tagline: string;
  description: string;
  url: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  country: string;
  serviceArea: string;
  serviceAreas: string[];
  yearsOfExperience: number;
  foundingYear: number;
  completedMoves: string;
  teamSize: string;
  socialMedia: SocialMedia;
}

export const siteConfig: SiteConfig = {
  name: "شركة البحرين لنقل الأثاث",
  shortName: "البحرين",
  englishName: "Al Bahrain Moving",
  tagline: "أثاثك أمانة.. وإحنا أهل الأمانة",
  description:
    "شركة البحرين لنقل الأثاث متخصصة في نقل العفش والأثاث المنزلي والمكتبي في القاهرة الجديدة، التجمع الخامس، مدينتي، الشيخ زايد، و6 أكتوبر. فريق محترف، تغليف آمن، ونش رفع، فك وتركيب، وضمان شامل على كل المنقولات.",
  url: "",
  phone: "01044212354",
  whatsapp: "201044212354",
  email: "info@albahrainmoving.com",
  address: "التجمع الخامس - القاهرة الجديدة - مصر",
  country: "مصر",
  serviceArea:
    "التجمع الخامس، القاهرة الجديدة، مدينتي، الشيخ زايد، 6 أكتوبر، الرحاب، العاصمة الإدارية",
  serviceAreas: [
    "التجمع الخامس",
    "القاهرة الجديدة",
    "مدينتي",
    "الشيخ زايد",
    "6 أكتوبر",
    "الرحاب",
    "العاصمة الإدارية",
  ],
  yearsOfExperience: 7,
  foundingYear: 2019,
  completedMoves: "4,800",
  teamSize: "35",
  socialMedia: {
    facebook: "",
    instagram: "",
    tiktok: "",
  },
};