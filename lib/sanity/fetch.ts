import { groq } from "next-sanity";
import type { Image } from "sanity";
import {
  defaultCaseStudies,
  defaultHomeContent,
  defaultPhotography,
} from "./defaults";
import type {
  CaseStudyFrame,
  HeroSlide,
  HomeContent,
  PhotographyItem,
} from "./types";
import { getSanityClient } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

const siteSettingsQuery = groq`
  *[_type == "siteSettings" && _id == "siteSettings"][0]{
    heroName,
    heroTagline,
    heroSlides[]{ text, image },
    aboutTitle,
    aboutBody,
    highlights[]{ icon, title, description },
    stats[]{ number, label },
    contactTitle,
    contactBlurb,
    contactEmail,
    contactPhone,
    resumeUrl,
    resumePath,
    footerLine1,
    footerLine2
  }
`;

const caseStudiesQuery = groq`
  *[_type == "caseStudy"] | order(order asc) {
    "id": slug.current,
    title,
    category,
    date,
    image,
    description,
    details
  }
`;

const photographyQuery = groq`
  *[_type == "photographySlide"] | order(order asc) {
    title,
    description,
    alt,
    image
  }
`;

type RawHeroSlide = { text?: string; image?: Image };

type RawSite = Partial<{
  heroName: string;
  heroTagline: string;
  heroSlides: RawHeroSlide[];
  aboutTitle: string;
  aboutBody: string;
  highlights: HomeContent["highlights"];
  stats: HomeContent["stats"];
  contactTitle: string;
  contactBlurb: string;
  contactEmail: string;
  contactPhone: string;
  resumeUrl: string;
  resumePath?: string;
  footerLine1: string;
  footerLine2: string;
}> | null;

function mapHeroSlides(slides: RawHeroSlide[] | undefined): HeroSlide[] {
  if (!slides?.length) return defaultHomeContent.heroSlides;
  const mapped = slides
    .map((s) => {
      const url = urlForImage(s.image);
      if (!s.text || !url) return null;
      return { text: s.text, image: url };
    })
    .filter(Boolean) as HeroSlide[];
  return mapped.length ? mapped : defaultHomeContent.heroSlides;
}

function mergeHome(raw: RawSite): HomeContent {
  const base = defaultHomeContent;
  if (!raw) return base;
  return {
    heroName: raw.heroName || base.heroName,
    heroTagline: raw.heroTagline || base.heroTagline,
    heroSlides: mapHeroSlides(raw.heroSlides),
    aboutTitle: raw.aboutTitle || base.aboutTitle,
    aboutBody: raw.aboutBody?.trim() ? raw.aboutBody : base.aboutBody,
    highlights:
      raw.highlights && raw.highlights.length > 0
        ? raw.highlights
        : base.highlights,
    stats: raw.stats && raw.stats.length > 0 ? raw.stats : base.stats,
    contactTitle: raw.contactTitle || base.contactTitle,
    contactBlurb: raw.contactBlurb?.trim()
      ? raw.contactBlurb
      : base.contactBlurb,
    contactEmail: raw.contactEmail || base.contactEmail,
    contactPhone: raw.contactPhone || base.contactPhone,
    resumeUrl:
      (typeof raw.resumeUrl === "string" && raw.resumeUrl) ||
      (raw.resumePath?.trim() ? raw.resumePath.trim() : "") ||
      base.resumeUrl,
    footerLine1: raw.footerLine1 || base.footerLine1,
    footerLine2: raw.footerLine2 || base.footerLine2,
  };
}

type RawCase = {
  id?: string;
  title?: string;
  category?: string;
  date?: string;
  image?: Image;
  description?: string;
  details?: string[];
};

function mapCaseStudies(rows: RawCase[] | null): CaseStudyFrame[] {
  if (!rows?.length) return defaultCaseStudies;
  const out: CaseStudyFrame[] = [];
  for (const row of rows) {
    const url = urlForImage(row.image);
    if (!row.id || !row.title || !url) continue;
    out.push({
      id: row.id,
      title: row.title,
      category: row.category ?? "",
      date: row.date ?? "",
      image: url,
      description: row.description ?? "",
      details: row.details?.filter(Boolean) ?? [],
    });
  }
  return out.length ? out : defaultCaseStudies;
}

type RawPhoto = {
  title?: string;
  description?: string;
  alt?: string;
  image?: Image;
};

function mapPhotography(rows: RawPhoto[] | null): PhotographyItem[] {
  if (!rows?.length) return defaultPhotography;
  const out: PhotographyItem[] = [];
  rows.forEach((row, idx) => {
    const url = urlForImage(row.image);
    if (!row.title || !url) return;
    out.push({
      id: idx + 1,
      src: url,
      alt: row.alt || row.title,
      title: row.title,
      description: row.description ?? "",
    });
  });
  return out.length ? out : defaultPhotography;
}

export async function getHomeContent(): Promise<HomeContent> {
  const client = getSanityClient();
  if (!client) return defaultHomeContent;
  const raw = await client.fetch<RawSite>(siteSettingsQuery);
  return mergeHome(raw);
}

export async function getCaseStudies(): Promise<CaseStudyFrame[]> {
  const client = getSanityClient();
  if (!client) return defaultCaseStudies;
  const rows = await client.fetch<RawCase[] | null>(caseStudiesQuery);
  return mapCaseStudies(rows);
}

export async function getPhotographySlides(): Promise<PhotographyItem[]> {
  const client = getSanityClient();
  if (!client) return defaultPhotography;
  const rows = await client.fetch<RawPhoto[] | null>(photographyQuery);
  return mapPhotography(rows);
}
