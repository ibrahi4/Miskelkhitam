export type Area = {
  slug: string;
  name: string;
  group: "cairo" | "giza" | "new-cities";
  isVip?: boolean;
  metaTitle: string;
  metaDescription: string;
  description?: string;
  compounds?: string[];
  neighborhoods?: string[];
};

export const areas: Area[] = [
  // ========== القاهرة ==========
  {
    slug: "nasr-city",
    name: "مدينة نصر",
    group: "cairo",
    metaTitle: "نقل أثاث مدينة نصر | خطوة - فرق متخصصة",
    metaDescription:
      "خطوة لنقل الأثاث في مدينة نصر. خدمة احترافية في جميع أحياء مدينة نصر.",
    description: "نخدم جميع أحياء مدينة نصر بفرق متخصصة وسيارات مجهزة.",
    neighborhoods: [
      "الحي السابع",
      "الحي العاشر",
      "الحي الثامن",
      "عباس العقاد",
      "مكرم عبيد",
      "طيبة",
    ],
  },
  {
    slug: "heliopolis",
    name: "مصر الجديدة",
    group: "cairo",
    metaTitle: "نقل أثاث مصر الجديدة | خطوة - خدمة راقية",
    metaDescription:
      "خطوة لنقل الأثاث في مصر الجديدة وهليوبوليس. خبرة في الفلل والشقق الفاخرة.",
    description: "متخصصون في نقل الأثاث الفاخر في مصر الجديدة وهليوبوليس.",
    neighborhoods: ["روكسي", "ميدان التحرير", "الوايلي", "الأمريكان", "قبة الهواء"],
  },
  {
    slug: "maadi",
    name: "المعادي",
    group: "cairo",
    metaTitle: "نقل أثاث المعادي | خطوة - خبراء المنطقة",
    metaDescription:
      "خطوة لنقل الأثاث في المعادي. متخصصون في فلل وشقق المعادي.",
    description: "خبرة واسعة في نقل الأثاث الفاخر في المعادي.",
    neighborhoods: [
      "المعادي الجديدة",
      "دجلة",
      "المعادي القديمة",
      "كورنيش المعادي",
    ],
  },
  {
    slug: "zamalek",
    name: "الزمالك",
    group: "cairo",
    metaTitle: "نقل أثاث الزمالك | خطوة - خدمة فاخرة",
    metaDescription:
      "خطوة لنقل الأثاث في الزمالك. متخصصون في الشقق والفلل الفاخرة.",
    description: "خبرة في نقل الأثاث الفاخر والأنتيك في أرقى أحياء القاهرة.",
    neighborhoods: [
      "شارع 26 يوليو",
      "حسن صبري",
      "إسماعيل محمد",
      "جزيرة الزمالك",
    ],
  },
  {
    slug: "moqattam",
    name: "المقطم",
    group: "cairo",
    metaTitle: "نقل أثاث المقطم | خطوة - ونش وسيارات مجهزة",
    metaDescription:
      "خطوة لنقل الأثاث في المقطم. متخصصون في الونش ورفع الأثاث للأدوار العالية.",
    description: "متخصصون في ونش الأثاث للأدوار العالية في المقطم.",
    neighborhoods: ["المقطم الأول", "المقطم الثاني", "المقطم الثالث"],
  },
  {
    slug: "katameya",
    name: "قطامية",
    group: "cairo",
    isVip: true,
    metaTitle: "نقل أثاث قطامية | خطوة - خدمة VIP للكمبوندات",
    metaDescription:
      "خطوة لنقل الأثاث في قطامية. متخصصون في كمبوندات قطامية الفاخرة.",
    description: "متخصصون في خدمة كمبوندات قطامية الفاخرة.",
    neighborhoods: ["قطامية هايتس", "قطامية الأشجار"],
    compounds: [
      "Hyde Park",
      "Katameya Heights",
      "Katameya Dunes",
      "Mountain View Katameya",
    ],
  },

  // ========== الجيزة ==========
  {
    slug: "mohandessin",
    name: "المهندسين",
    group: "giza",
    metaTitle: "نقل أثاث المهندسين | خطوة - خدمة راقية",
    metaDescription:
      "خطوة لنقل الأثاث في المهندسين. متخصصون في شقق وفلل المهندسين الفاخرة.",
    description: "خبرة في نقل الأثاث الفاخر في المهندسين.",
    neighborhoods: [
      "شارع جامعة الدول",
      "شارع لبنان",
      "ميدان المهندسين",
    ],
  },
  {
    slug: "dokki",
    name: "الدقي",
    group: "giza",
    metaTitle: "نقل أثاث الدقي | خطوة - فرق متخصصة",
    metaDescription:
      "خطوة لنقل الأثاث في الدقي. خدمة احترافية بفرق مدربة وسيارات مجهزة.",
    description: "نقل أثاث احترافي في الدقي وما حولها.",
    neighborhoods: ["شارع التحرير", "ميدان الدقي", "الجيزة", "أورمان"],
  },
  {
    slug: "agouza",
    name: "العجوزة",
    group: "giza",
    metaTitle: "نقل أثاث العجوزة | خطوة",
    metaDescription:
      "خطوة لنقل الأثاث في العجوزة. فرق مدربة وخدمة سريعة.",
    description: "نقل أثاث سريع واحترافي في العجوزة.",
    neighborhoods: ["شارع النيل", "ميدان العجوزة", "كورنيش النيل"],
  },
  {
    slug: "haram",
    name: "الهرم",
    group: "giza",
    metaTitle: "نقل أثاث الهرم | خطوة - تغطية كاملة",
    metaDescription:
      "خطوة لنقل الأثاث في منطقة الهرم. تغطية كاملة لجميع أحياء الهرم.",
    description: "تغطية كاملة لجميع أحياء ومناطق الهرم.",
    neighborhoods: ["شارع الهرم", "المريوطية", "البراجيل"],
  },

  // ========== المدن الجديدة (VIP) ==========
  {
    slug: "sheikh-zayed",
    name: "الشيخ زايد",
    group: "new-cities",
    isVip: true,
    metaTitle: "نقل أثاث الشيخ زايد | خطوة - خدمة VIP فاخرة",
    metaDescription:
      "خطوة لنقل الأثاث في الشيخ زايد. خدمة احترافية للفلل والكمبوندات.",
    description:
      "متخصصون في خدمة كمبوندات وفلل الشيخ زايد الفاخرة بأعلى معايير الاحترافية.",
    compounds: [
      "Beverly Hills",
      "Allegria",
      "Westown Residence",
      "Zed Towers",
      "Etapa",
      "The Estates",
      "Palm Hills Zayed",
    ],
    neighborhoods: ["الحي الأول", "الحي الثاني", "الحي الثالث"],
  },
  {
    slug: "6-october",
    name: "6 أكتوبر",
    group: "new-cities",
    isVip: true,
    metaTitle: "نقل أثاث 6 أكتوبر | خطوة - تغطية كاملة",
    metaDescription:
      "خطوة لنقل الأثاث في 6 أكتوبر. خدمة احترافية في جميع أحياء وكمبوندات 6 أكتوبر.",
    description: "تغطية شاملة لجميع أحياء وكمبوندات مدينة 6 أكتوبر.",
    compounds: [
      "Palm Hills October",
      "Mountain View iCity",
      "O West",
      "Badya",
      "New Giza",
      "Sodic West",
    ],
    neighborhoods: ["الحي الأول", "الحي الثالث", "الحي السادس", "المحور المركزي"],
  },
  {
    slug: "tagamoa-khames",
    name: "التجمع الخامس",
    group: "new-cities",
    isVip: true,
    metaTitle: "نقل أثاث التجمع الخامس | خطوة - خدمة راقية",
    metaDescription:
      "خطوة لنقل الأثاث في التجمع الخامس. متخصصون في كمبوندات التجمع الفاخرة.",
    description:
      "متخصصون في نقل الأثاث الفاخر داخل كمبوندات التجمع الخامس.",
    compounds: [
      "Mivida",
      "Villette",
      "Hyde Park",
      "Palm Hills New Cairo",
      "Eastown",
      "Stone Residence",
      "Lake View Residence",
    ],
    neighborhoods: [
      "التجمع الأول",
      "التجمع الثالث",
      "المنطقة المركزية",
      "النرجس",
      "البنفسج",
      "القرنفل",
    ],
  },
  {
    slug: "new-cairo",
    name: "القاهرة الجديدة",
    group: "new-cities",
    isVip: true,
    metaTitle: "نقل أثاث القاهرة الجديدة | خطوة - خدمة VIP",
    metaDescription:
      "خطوة لنقل الأثاث في القاهرة الجديدة. متخصصون في الكمبوندات والفلل.",
    description:
      "خبرة واسعة في نقل الأثاث داخل كمبوندات القاهرة الجديدة الفاخرة.",
    compounds: [
      "Mountain View 1",
      "Mountain View 2",
      "Sarai",
      "Taj City",
      "Waterway",
    ],
    neighborhoods: ["التجمع الأول", "التجمع الثاني", "المعراج", "اللوتس", "الياسمين"],
  },
  {
    slug: "madinaty",
    name: "مدينتي",
    group: "new-cities",
    isVip: true,
    metaTitle: "نقل أثاث مدينتي | خطوة - خبراء المدن الجديدة",
    metaDescription:
      "خطوة لنقل الأثاث في مدينتي. خبرة في كمبوندات مدينتي.",
    description:
      "خبرة متميزة في نقل الأثاث داخل مجتمع مدينتي السكني المتكامل.",
    compounds: [
      "Madinaty Villas",
      "Madinaty Apartments",
      "Madinaty B1",
      "Madinaty B2",
    ],
    neighborhoods: ["الحرف A", "الحرف B", "الحرف C", "الحرف G", "المنطقة التجارية"],
  },
  {
    slug: "rehab",
    name: "الرحاب",
    group: "new-cities",
    isVip: true,
    metaTitle: "نقل أثاث الرحاب | خطوة - خبراء المنطقة",
    metaDescription:
      "خطوة لنقل الأثاث في الرحاب. خبرة في جميع مراحل الرحاب.",
    description: "خبرة عميقة في نقل الأثاث داخل مدينة الرحاب بجميع مراحلها.",
    compounds: ["Rehab 1", "Rehab 2", "Rehab City"],
    neighborhoods: [
      "المرحلة الأولى",
      "المرحلة الثانية",
      "المرحلة الثالثة",
      "المرحلة الرابعة",
    ],
  },
  {
    slug: "shorouk",
    name: "مدينة الشروق",
    group: "new-cities",
    isVip: true,
    metaTitle: "نقل أثاث مدينة الشروق | خطوة",
    metaDescription:
      "خطوة لنقل الأثاث في مدينة الشروق. فرق مدربة وسيارات مجهزة.",
    description: "نقل أثاث احترافي في جميع أحياء مدينة الشروق.",
    neighborhoods: ["الحي الأول", "الحي الثاني", "الحي الثالث", "حي الأندلس"],
  },
  {
    slug: "new-capital",
    name: "العاصمة الإدارية",
    group: "new-cities",
    isVip: true,
    metaTitle: "نقل أثاث العاصمة الإدارية | خطوة",
    metaDescription:
      "خطوة لنقل الأثاث للعاصمة الإدارية الجديدة. خبراء في النقل للمدن الجديدة.",
    description:
      "متخصصون في نقل الأثاث للعاصمة الإدارية الجديدة من جميع مناطق القاهرة.",
    compounds: [
      "Midtown Condo",
      "IL Bosco",
      "Haptown",
      "Taj Tower",
      "Scenario",
    ],
    neighborhoods: [
      "الحي السكني R1",
      "الحي السكني R2",
      "الحي السكني R3",
    ],
  },
  {
    slug: "mostakbal-city",
    name: "مدينة المستقبل",
    group: "new-cities",
    isVip: true,
    metaTitle: "نقل أثاث مدينة المستقبل | خطوة",
    metaDescription:
      "خطوة لنقل الأثاث في مدينة المستقبل. خبراء في الكمبوندات الجديدة.",
    description: "نقل أثاث احترافي في كمبوندات مدينة المستقبل الحديثة.",
    compounds: ["Aria", "Bloom Fields", "La Verde", "Aliva", "Creek Town"],
    neighborhoods: ["المنطقة الأولى", "المنطقة الثانية"],
  },
];

export const areaGroups = {
  cairo: {
    label: "القاهرة",
    areas: areas.filter((a) => a.group === "cairo"),
  },
  giza: {
    label: "الجيزة",
    areas: areas.filter((a) => a.group === "giza"),
  },
  "new-cities": {
    label: "المدن الجديدة",
    areas: areas.filter((a) => a.group === "new-cities"),
  },
};

export const vipAreas = areas.filter((a) => a.isVip);

const featuredSlugs = [
  "sheikh-zayed",
  "tagamoa-khames",
  "madinaty",
  "6-october",
  "new-capital",
  "new-cairo",
];

export const featuredAreas = areas.filter((a) => featuredSlugs.includes(a.slug));