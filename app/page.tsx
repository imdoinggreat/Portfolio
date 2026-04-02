import { HomePageClient } from "@/components/home-page-client";
import { getHomeContent } from "@/lib/sanity/fetch";

export default async function Home() {
  const content = await getHomeContent();
  return <HomePageClient content={content} />;
}
