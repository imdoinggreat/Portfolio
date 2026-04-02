import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { dataset, projectId } from "../env";

const builder =
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset })
    : null;

export function urlForImage(source: Image | undefined): string | undefined {
  if (!source?.asset || !builder) return undefined;
  return builder.image(source).width(1600).quality(85).url();
}
