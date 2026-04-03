import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export function getSanityClient(token?: string): SanityClient | null {
  if (!projectId) return null;
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: !token,
    token,
    stega: {
      enabled: !!token,
      studioUrl: "/studio",
    },
  });
}
