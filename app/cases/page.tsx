import { FilmRollGallery } from "@/components/film-roll-gallery";
import { getCaseStudies } from "@/lib/sanity/fetch";

export const dynamic = "force-dynamic";

export default async function CasesPage() {
  const frames = await getCaseStudies();
  return (
    <div className="min-h-screen">
      <FilmRollGallery initialFrames={frames} />
    </div>
  );
}
