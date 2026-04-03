import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "..");

const getFilesRecursive = (dir, baseDir = dir) => {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat && stat.isDirectory()) {
        results = results.concat(getFilesRecursive(filePath, baseDir));
      } else if (/\.(jpg|jpeg|png|gif|webp|JPG|PNG)$/i.test(file)) {
        // Create a relative path from the baseDir (usually public/images)
        const relPath = path.relative(baseDir, filePath).replace(/\\/g, '/');
        results.push(relPath);
      }
    });
  } catch (e) {
    console.warn(`Warning reading directory ${dir}:`, e.message);
  }
  return results.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
};

const getFiles = (dir) => {
  try {
    const files = fs.readdirSync(dir);
    return files
      .filter(f => /\.(jpg|jpeg|png|gif|webp|JPG|PNG)$/i.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
  } catch (e) {
    return [];
  }
};

async function generate() {
  const publicDir = path.join(rootDir, "public");
  const imagesDir = path.join(publicDir, "images");
  const galleryDir = path.join(imagesDir, "gallery");
  const picturesDir = path.join(publicDir, "Pictures");

  // Get all images from public/images recursively
  const imagesFiles = getFilesRecursive(imagesDir);
  
  // Get all images from public/Pictures for the album gallery
  const picturesFolders = [];
  const albumSources = [
    { dir: picturesDir, base: "Pictures" },
    { dir: galleryDir, base: "images/gallery" }
  ];

  for (const source of albumSources) {
    try {
      if (fs.existsSync(source.dir)) {
        const folders = fs.readdirSync(source.dir, { withFileTypes: true })
          .filter(dirent => dirent.isDirectory());
          
        for (const folder of folders) {
          const folderPath = path.join(source.dir, folder.name);
          const files = getFiles(folderPath);
          if (files.length > 0) {
            // Avoid duplicates if folder exists in both places
            if (!picturesFolders.find(p => p.slug === folder.name)) {
              picturesFolders.push({
                title: folder.name,
                slug: folder.name,
                coverImage: `/${source.base}/${folder.name}/${files[0]}`,
                images: files.map(f => `/${source.base}/${folder.name}/${f}`)
              });
            }
          }
        }
      }
    } catch (e) {
      console.warn(`Warning reading source directory ${source.dir}:`, e.message);
    }
  }

  // Specific gallery event folders
  const event1Files = getFiles(path.join(galleryDir, "event1")).map(f => `/images/gallery/event1/${f}`);
  const event2Files = getFiles(path.join(galleryDir, "event2")).map(f => `/images/gallery/event2/${f}`);
  
  const heroDir = path.join(imagesDir, "Hero");
  const heroFolderFiles = getFiles(heroDir).map(f => `/images/Hero/${f}`);
  
  const awardsDir = path.join(galleryDir, "awards"); 
  const awardsFolderFiles = getFiles(awardsDir).map(f => `/images/gallery/awards/${f}`);

  const buildingDir = path.join(galleryDir, "building");
  const buildingFiles = getFiles(buildingDir).map(f => `/images/gallery/building/${f}`);

  const categorized = {
    about: [],
    activities: [],
    classes: [],
    events: [],
    informational: [],
    hero: [],
    generalGallery: [],
  };

  const activityKeywords = ["activities", "crafts", "annualday", "birthdaycelebrations", "fun"];
  const classKeywords = ["class", "playgroup", "nursery", "kindergarten", "lkg", "ukg", "academic"];
  const eventKeywords = ["basant", "festivals", "celebrations", "lohri", "baisakhi", "carnival", "picnic", "summercamp", "fancydress", "friendship-day", "diwali"];
  const informationalKeywords = ["controls", "infographic", "facilities", "dentalcheckup", "bestfacilities"];
  const heroKeywords = ["background", "banner", "hero", "backdrops", "kids-stage", "dsc_", "img_"];

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

  const finalData = {
    ...categorized,
    event1: event1Files,
    event2: event2Files,
    heroFolder: heroFolderFiles,
    awardsFolder: awardsFolderFiles,
    building: buildingFiles,
    pictures: picturesFolders,
  };

  const outputPath = path.join(rootDir, "lib", "imageData.json");
  fs.writeFileSync(outputPath, JSON.stringify(finalData, null, 2));
  console.log(`Successfully generated lib/imageData.json with ${imagesFiles.length} images and ${picturesFolders.length} picture folders.`);
}

generate();
