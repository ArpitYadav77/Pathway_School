"use server";

import fs from "fs";
import path from "path";

const getFiles = (dir: string) => {
  try {
    const files = fs.readdirSync(dir);
    return files
      .filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
  } catch (e) {
    return [];
  }
};

export async function getCategorizedImages() {
  const imagesDir = path.join(process.cwd(), "public", "images");
  const event1Dir = path.join(process.cwd(), "public", "gallery", "event1");
  const event2Dir = path.join(process.cwd(), "public", "gallery", "event2");

  const imagesFiles = getFiles(imagesDir);
  const event1Files = getFiles(event1Dir).map(f => `/gallery/event1/${f}`);
  const event2Files = getFiles(event2Dir).map(f => `/gallery/event2/${f}`);
  
  const heroDir = path.join(process.cwd(), "public", "images", "Hero");
  const heroFolderFiles = getFiles(heroDir).map(f => `/images/Hero/${f}`);
  
  const awardsDir = path.join(process.cwd(), "public", "images", "awards");
  const awardsFolderFiles = getFiles(awardsDir).map(f => `/images/awards/${f}`);

  const categorized = {
    about: [] as string[],
    activities: [] as string[],
    classes: [] as string[],
    events: [] as string[],
    informational: [] as string[],
    hero: [] as string[],
    generalGallery: [] as string[],
  };

  const activityKeywords = ["activities", "crafts", "annualday", "birthdaycelebrations"];
  const classKeywords = ["class1", "class2", "class3", "class4", "class5", "class6", "class7", "class-", "lkg", "ukg"];
  const eventKeywords = ["basant", "festivals", "celebrations", "lohri", "baisakhi", "carnival", "picnic", "summercamp", "fancydress", "friendship-day"];
  const informationalKeywords = ["controls", "infographic", "facilities", "dentalcheckup"];
  const heroKeywords = ["background", "banner", "hero", "backdrops", "kids-stage"];

  imagesFiles.forEach((f) => {
    const p = `/images/${f}`;
    const name = f.toLowerCase();

    if (name.includes("about")) {
      categorized.about.push(p);
    } else if (activityKeywords.some(kw => name.includes(kw))) {
      categorized.activities.push(p);
    } else if (classKeywords.some(kw => name.includes(kw))) {
      categorized.classes.push(p);
    } else if (eventKeywords.some(kw => name.includes(kw))) {
      categorized.events.push(p);
    } else if (informationalKeywords.some(kw => name.includes(kw))) {
      categorized.informational.push(p);
    } else if (heroKeywords.some(kw => name.includes(kw))) {
      categorized.hero.push(p);
    } else {
      categorized.generalGallery.push(p);
    }
  });

  return {
    ...categorized,
    event1: event1Files,
    event2: event2Files,
    heroFolder: heroFolderFiles,
    awardsFolder: awardsFolderFiles,
  };
}
