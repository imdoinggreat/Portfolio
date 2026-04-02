import { PhotographyPageClient } from "@/components/photography-page-client";
import { getPhotographySlides } from "@/lib/sanity/fetch";

export const dynamic = "force-dynamic";

export default async function PhotographyPage() {
  const slides = await getPhotographySlides();
  return <PhotographyPageClient slides={slides} />;
}
