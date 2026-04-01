"use client";

import { useEffect, useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, X, Loader2, ChevronRight, ImageOff, Camera } from "lucide-react";
import { getGalleryBySlug, getGalleries, SanityGallery } from "@/lib/sanityQueries";
import { getGalleryImages, getLocalGalleryFolders } from "@/lib/imageUtils";

export default function EventPage({ params }: { params: Promise<{ eventId: string }> }) {
  const unwrappedParams = use(params);
  const eventId = decodeURIComponent(unwrappedParams.eventId);
  
  const [images, setImages] = useState<string[]>([]);
  const [folders, setFolders] = useState<SanityGallery[]>([]);
  const [title, setTitle] = useState("Loading...");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"images" | "folders">("images");

  useEffect(() => {
    setIsLoading(true);
    
    if (eventId === "photos") {
      setViewMode("folders");
      Promise.all([
        getGalleries(),
        getLocalGalleryFolders()
      ]).then(([sanityData, localData]) => {
        const merged = [...(sanityData || [])];
        localData.forEach(local => {
          if (!merged.find(item => item.slug === local.slug || item.title === local.title)) {
            merged.push({
              _id: local.slug,
              title: local.title,
              slug: local.slug,
              coverImage: local.coverImage
            });
          }
        });
        setFolders(merged);
        setTitle("Photo Gallery");
        setIsLoading(false);
      });
      return;
    }

    setViewMode("images");
    // 1. Try to find in Sanity first
    getGalleryBySlug(eventId).then(gallery => {
      if (gallery && gallery.images?.length > 0) {
        setImages(gallery.images);
        setTitle(gallery.title);
        setIsLoading(false);
      } else {
        // 2. Not found in Sanity or no images, check local folders
        getGalleryImages(eventId).then(localImages => {
          if (localImages.length > 0) {
            setImages(localImages);
            setTitle(eventId);
            setIsLoading(false);
          } else {
             // 3. Last fallback: Check if slug exists in static Sanity galleries
            getGalleries().then(allGalleries => {
              const matched = allGalleries?.find((g: SanityGallery) => g.slug === eventId || g._id === eventId);
              if (matched && matched.images?.length > 0) {
                 setImages(matched.images);
                 setTitle(matched.title);
              } else {
                 setTitle("Gallery Not Found");
              }
              setIsLoading(false);
            });
          }
        });
      }
    });
  }, [eventId]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <main className="min-h-screen bg-bg-light pt-24 pb-20">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center relative flex flex-col md:flex-row items-center justify-center">
          <Link
            href="/"
            className="md:absolute left-0 top-1/2 md:-translate-y-1/2 flex items-center gap-2 text-primary hover:text-accent font-bold transition-all bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md border border-gray-100 group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
          
          <div className="pt-4">
            <span className="text-accent font-black text-sm uppercase tracking-[0.3em] block mb-3">
              {viewMode === "folders" ? "Browse Categories" : "Explore Collection"}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-black text-[#003366] uppercase italic tracking-tighter leading-tight translate-y-2">
              {title}
            </h1>
            <div className="w-32 h-2 bg-accent mx-auto mt-8 rounded-full" />
          </div>
        </div>

        {/* Gallery Content */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <Loader2 className="animate-spin text-accent" size={48} />
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Loading...</p>
          </div>
        ) : viewMode === "folders" ? (
          /* Folder Grid Mode */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {folders.map((folder) => (
              <Link
                key={folder._id}
                href={`/gallery/${folder.slug || folder._id}`}
                className="group relative h-[300px] rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white border border-gray-100"
              >
                {folder.coverImage ? (
                   <Image
                    src={folder.coverImage}
                    alt={folder.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-50 flex items-center justify-center">
                    <ImageOff size={48} className="text-gray-200" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 via-[#003366]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-2 mb-3 text-accent transition-transform duration-500 group-hover:translate-x-1">
                    <Camera size={16} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Album</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tighter leading-none mb-4">
                    {folder.title}
                  </h3>
                  <div className="flex items-center gap-2 text-accent text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    Open Gallery <ChevronRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-32 bg-white rounded-[3rem] shadow-sm border border-gray-100 flex flex-col items-center gap-4">
             <ImageOff size={48} className="text-gray-100" />
            <p className="text-gray-400 text-lg font-bold uppercase tracking-widest">No images found for this category.</p>
          </div>
        ) : (
          /* Normal Image Grid Mode */
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImageIndex(i)}
                className="aspect-[4/5] relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl cursor-pointer group animate-fade-in-up border-4 border-transparent hover:border-accent/10 transition-all duration-500"
                style={{ animationDelay: `${(i % 12) * 50}ms` }}
              >
                <Image
                  src={img}
                  alt={`${title} - Capture ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-[#003366]/40 transition-all duration-500 flex items-center justify-center">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 shadow-xl">
                      <ChevronRight size={20} className="text-[#003366]" />
                   </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Enhanced Lightbox */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-[#003366]/95 flex items-center justify-center backdrop-blur-md"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Controls */}
          <button 
            className="absolute top-8 right-8 text-white hover:text-accent p-3 rounded-full transition-all z-[110] bg-white/10 hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(null); }}
          >
            <X size={32} />
          </button>

          <button 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-accent p-4 rounded-full transition-all z-[110] bg-white/5 hover:bg-white/10"
            onClick={handlePrev}
          >
            <ChevronLeft size={48} />
          </button>

          <button 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-accent p-4 rounded-full transition-all z-[110] bg-white/5 hover:bg-white/10"
            onClick={handleNext}
          >
            <ChevronRight size={48} />
          </button>
          
          {/* Main Image */}
          <div className="relative w-full h-full max-w-7xl max-h-[80vh] flex flex-col items-center justify-center p-4">
            <div className="relative w-full h-full">
              <Image
                src={images[selectedImageIndex]}
                alt="Gallery Preview"
                fill
                className="object-contain transition-all duration-500"
                sizes="100vw"
                priority
              />
            </div>
            
            {/* Index Counter */}
            <div className="mt-8 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 font-bold text-sm tracking-widest uppercase">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
