import { createClient } from "next-sanity";
import type { SanityClient } from "@sanity/client";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

const token = process.env.SANITY_API_READ_TOKEN;

export function getClient({
  preview,
}: { preview?: boolean } = {}): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // CHANGE TO TRUE FOR PRODUCTION
  });
  if (preview) {
    return client.withConfig({
      token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
    });
  }
  return client;
}
