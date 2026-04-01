"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Camera } from "lucide-react";
import galleryData from "@/lib/galleryData.json";

export default function PhotoGallery() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {galleryData.map((item) => (
          <Link
            key={item.folderName}
            href={`/gallery/${encodeURIComponent(item.folderName)}`}
            className="group relative aspect-[4/5] sm:aspect-[1/1.2] rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 hover:-translate-y-2"
          >
            {/* Background Image with Zoom */}
            <Image
              src={item.imagePath}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
              priority={false}
            />
            
            {/* Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 via-[#003366]/20 to-transparent group-hover:via-[#003366]/40 transition-all duration-500" />
            
            {/* Content Container */}
            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              {/* Gallery Label */}
              <div className="flex items-center gap-2 mb-3">
                 <div className="bg-accent/20 p-1.5 rounded-lg border border-accent/30 backdrop-blur-sm">
                    <Camera size={14} className="text-secondary" />
                 </div>
                 <span className="text-[10px] text-white/90 uppercase tracking-[0.3em] font-black">Gallery</span>
              </div>
              
              {/* Reference Style Title */}
              <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-4 tracking-tight drop-shadow-lg">
                {item.title}
              </h3>
              
              {/* Explore Link */}
              <div className="flex items-center gap-2 text-accent text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 group-hover:gap-3">
                Explore <ChevronRight size={16} strokeWidth={3} />
              </div>
            </div>

            {/* Glassmorphic border effect on hover */}
            <div className="absolute inset-0 border-0 group-hover:border-[12px] border-white/5 transition-all duration-500 rounded-[2.5rem]" />
          </Link>
        ))}
      </div>
      
      {/* Footer link for all photos */}
      <div className="mt-16 text-center">
         <Link 
            href="/gallery/photos" 
            className="inline-flex items-center gap-3 text-[#003366] hover:text-accent font-black uppercase text-xs tracking-[0.2em] transition-all duration-300 bg-white px-8 py-4 rounded-full shadow-sm hover:shadow-md border border-gray-100"
         >
           Browse All Categories 
           <ChevronRight size={16} strokeWidth={3} className="transition-transform group-hover:translate-x-1" />
         </Link>
      </div>
    </div>
  );
}
