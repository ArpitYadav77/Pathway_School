"use server";

import fs from "fs";
import path from "path";
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
  building: string[];
}

export async function getCategorizedImages(): Promise<CategorizedImages> {
  return imageData as CategorizedImages;
}

export async function getGalleryImages(folderName: string): Promise<string[]> {
  const possiblePaths = [
    path.join(process.cwd(), "public", "images", "gallery", folderName),
    path.join(process.cwd(), "public", "Pictures", folderName)
  ];
  
  for (const directoryPath of possiblePaths) {
    try {
      if (fs.existsSync(directoryPath)) {
        const files = fs.readdirSync(directoryPath);
        const folderBase = directoryPath.includes("Pictures") ? "Pictures" : "images/gallery";
        
        return files
          .filter(file => /\.(jpg|jpeg|png|webp|gif|JPG|PNG)$/.test(file))
          .map(file => `/${folderBase}/${folderName}/${file}`);
      }
    } catch (error) {
       console.error(`Error reading directory ${directoryPath}:`, error);
    }
  }
  
  return [];
}

export async function getLocalGalleryFolders(): Promise<{title: string, slug: string, coverImage: string}[]> {
  const picturesPath = path.join(process.cwd(), "public", "Pictures");
  try {
    if (!fs.existsSync(picturesPath)) return [];
    
    const folders = fs.readdirSync(picturesPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory());
      
    return folders.map(folder => {
      const folderPath = path.join(picturesPath, folder.name);
      const files = fs.readdirSync(folderPath)
        .filter(file => /\.(jpg|jpeg|png|webp|gif|JPG|PNG)$/.test(file));
        
      return {
        title: folder.name,
        slug: folder.name,
        coverImage: files.length > 0 ? `/Pictures/${folder.name}/${files[0]}` : ""
      };
    });
  } catch (error) {
    return [];
  }
}

export async function getAllPictures(): Promise<string[]> {
  const picturesPath = path.join(process.cwd(), "public", "Pictures");
  let allImages: string[] = [];
  
  try {
    if (!fs.existsSync(picturesPath)) return [];
    
    const folders = fs.readdirSync(picturesPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory());
      
    for (const folder of folders) {
      const folderPath = path.join(picturesPath, folder.name);
      const files = fs.readdirSync(folderPath)
        .filter(file => /\.(jpg|jpeg|png|webp|gif|JPG|PNG)$/.test(file));
        
      allImages = allImages.concat(files.map(file => `/Pictures/${folder.name}/${file}`));
    }
    
    return allImages;
  } catch (error) {
    console.error("Error reading Pictures directory:", error);
    return [];
  }
}

