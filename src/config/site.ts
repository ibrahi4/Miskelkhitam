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
  name: "شركة مسك الختام لنقل الاثاث",
  shortName: "مسك الختام",
  englishName: "Misk Al Khitam Moving",
  tagline: "نقلتك علينا.. من أولها لآخرها",
  description:
    "شركة مسك الختام لنقل الاثاث متخصصة في نقل العفش والاثاث المنزلي والمكتبي في القاهرة الجديدة، التجمع الخامس، مدينتي، الشيخ زايد، و6 اكتوبر. فريق محترف، تغليف آمن، ونش رفع، فك وتركيب، وضمان شامل على كل المنقولات.",
  url: "https://miskelkhitam.com/",
  phone: "01055971122",
  whatsapp: "201055971122",
  email: "Miskalkhitam655@gmail.com",
  address: "ميدان الجيش - العباسية - القاهرة",
  country: "مصر",
  serviceArea:
    "التجمع الخامس، القاهرة الجديدة، مدينتي، الشيخ زايد، 6 اكتوبر، الرحاب، العاصمة الادارية",
  serviceAreas: [
    "التجمع الخامس",
    "القاهرة الجديدة",
    "مدينتي",
    "الشيخ زايد",
    "6 اكتوبر",
    "الرحاب",
    "العاصمة الادارية",
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