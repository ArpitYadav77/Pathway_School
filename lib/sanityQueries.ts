import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "lesn71k7",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-11",
  useCdn: false,
});

const builder = imageUrlBuilder(client);
export function urlFor(source: any) {
  return builder.image(source);
}

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

export async function getAnnouncements() {
  const query = `*[_type == "announcement"] | order(date desc) {
    _id,
    title,
    content,
    link,
    isExternal,
    date
  }`;
  return await client.fetch(query);
}

export async function getHeroBanners() {
  const query = `*[_type == "heroBanner" && isActive == true] | order(order asc) {
    _id,
    title,
    image,
    link,
    isExternal
  }`;
  return await client.fetch(query);
}
