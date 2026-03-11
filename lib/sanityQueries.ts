import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "lesn71k7",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-11",
  useCdn: false,
});

export async function getNotices() {
  const query = `*[_type == "notice"] | order(date desc) {
    _id,
    title,
    content,
    date,
    "slug": _id,
    "description": content
  }`;
  
  return await client.fetch(query);
}
