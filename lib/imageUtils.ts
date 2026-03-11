"use server";

import imageData from "./imageData.json";

interface CategorizedImages {
  about: string[];
  activities: string[];
  classes: string[];
  events: string[];
  informational: string[];
  hero: string[];
  generalGallery: string[];
  event1: string[];
  event2: string[];
  heroFolder: string[];
  awardsFolder: string[];
}

export async function getCategorizedImages(): Promise<CategorizedImages> {
  return imageData as CategorizedImages;
}

