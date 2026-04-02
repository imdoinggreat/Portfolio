import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function SanityStudioRoot() {
  return <NextStudio config={config} />;
}
