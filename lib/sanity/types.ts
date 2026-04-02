export type HeroSlide = { text: string; image: string };


export type HomeContent = {
  heroName: string;
  heroTagline: string;
  heroSlides: HeroSlide[];
  aboutTitle: string;
  aboutBody: string;
  highlights: { icon: string; title: string; description: string }[];
  stats: { number: string; label: string }[];
  contactTitle: string;
  contactBlurb: string;
  contactEmail: string;
  contactPhone: string;
  resumeUrl: string;
  footerLine1: string;
  footerLine2: string;
};

export type CaseStudyFrame = {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  details: string[];
};

export type PhotographyItem = {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
};
