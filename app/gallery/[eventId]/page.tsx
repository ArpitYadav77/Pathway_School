"use client";

import { useEffect, useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, X } from "lucide-react";
import { getCategorizedImages } from "@/lib/imageUtils";

export default function EventPage({ params }: { params: Promise<{ eventId: string }> }) {
  const unwrappedParams = use(params);
  const eventId = unwrappedParams.eventId;
  
  const [images, setImages] = useState<string[]>([]);
  const [title, setTitle] = useState("Loading...");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    let eventTitle = "Event Gallery";
    if (eventId === "event1") eventTitle = "Event 1";
    if (eventId === "event2") eventTitle = "Second Event";
    setTitle(eventTitle);

    getCategorizedImages().then((res) => {
      if (eventId === "event1") setImages(res.event1 || []);
      else if (eventId === "event2") setImages(res.event2 || []);
      else setImages([]);
    });
  }, [eventId]);

  return (
    <main className="min-h-screen bg-bg-light pt-24 pb-20">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Back Button and Title */}
        <div className="mb-10 text-center relative flex flex-col md:flex-row items-center justify-center">
          <Link
            href="/"
            className="md:absolute left-0 top-1/2 md:-translate-y-1/2 flex items-center gap-2 text-primary hover:text-accent font-semibold transition-colors bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow hover:shadow-md mb-6 md:mb-0 z-10"
          >
            <ChevronLeft size={20} />
            <span>Back to Home</span>
          </Link>
          
          <div className="pt-2">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider block mb-2">
              Event Gallery
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              {title}
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full" />
          </div>
        </div>

        {/* Gallery Grid */}
        {images.length === 0 ? (
          <p className="text-center text-gray-500 text-lg mt-20 font-medium">Loading images...</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(img)}
                className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg cursor-pointer group animate-fade-in-up"
                style={{ animationDelay: `${(i % 12) * 50}ms` }}
              >
                <Image
                  src={img}
                  alt={`${title} - Image ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-2 sm:p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={26} />
          </button>
          
          <div className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Gallery Preview"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
}
