import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "lesn71k7",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-11",
  useCdn: false,
});

import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export async function getNotices() {
  const query = `*[_type == "notice"] | order(date desc) {
    _id,
    title,
    content,
    date,
    "slug": _id,
    "description": content,
    "fileUrl": file.asset->url,
    "fileName": file.asset->originalFilename,
    link,
    isExternal
  }`;
  
  return await client.fetch(query);
}

export async function getAnnouncements() {
  const query = `*[_type == "announcement"] | order(date desc) {
    _id,
    title,
    content,
    "fileUrl": file.asset->url,
    "fileName": file.asset->originalFilename,
    link,
    isExternal,
    date
  }`;
  return await client.fetch(query);
}

export interface SanityHeroBanner {
  _id: string;
  title: string;
  image: {
    asset: {
      url: string;
    };
  };
  link?: string;
  isExternal?: boolean;
  order?: number;
}

export async function getHeroBanners(): Promise<SanityHeroBanner[]> {
  const query = `*[_type == "heroBanner" && isActive == true] | order(order asc) {
    _id,
    title,
    image {
      asset->{
        url
      }
    },
    link,
    isExternal,
    order
  }`;
  return await client.fetch(query);
}
export interface SanityGallery {
  _id: string;
  title: string;
  slug: string;
  images: string[];
  coverImage: string;
}

export async function getGalleries(): Promise<SanityGallery[]> {
  const query = `*[_type == "gallery"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    "images": images[].asset->url,
    "coverImage": images[0].asset->url
  }`;
  return await client.fetch(query);
}

export async function getGalleryBySlug(slug: string): Promise<SanityGallery | null> {
  const query = `*[_type == "gallery" && slug.current == $slug][0] {
    _id,
    title,
    "images": images[].asset->url,
    "slug": slug.current,
    "coverImage": images[0].asset->url
  }`;
  return await client.fetch(query, { slug });
}
