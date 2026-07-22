export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
};

export type Governorate = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  cities?: City[];
};

export type City = {
  slug: string;
  name: string;
  governorate: string;
  metaTitle: string;
  metaDescription: string;
};

export type FAQ = {
  question: string;
  answer: string;
};
