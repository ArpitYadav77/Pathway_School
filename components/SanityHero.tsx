"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getHeroBanners, urlFor, SanityHeroBanner } from "@/lib/sanityQueries";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SanityHero() {
  const [banners, setBanners] = useState<SanityHeroBanner[]>([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHeroBanners()
      .then(setBanners)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (banners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const prev = () => setCurrent((c) => (c - 1 + banners.length) % banners.length);
  const next = () => setCurrent((c) => (c + 1) % banners.length);

  if (loading) {
    return <div className="w-full h-[40vh] md:h-[60vh] lg:h-[80vh] bg-gray-200 animate-pulse" />;
  }

  if (banners.length === 0) {
    return (
      <div className="w-full h-[40vh] md:h-[60vh] lg:h-[80vh] bg-slate-100 flex items-center justify-center text-slate-400">
        No active hero banners found.
      </div>
    );
  }

  return (
    <section id="home" className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] xl:h-[85vh] overflow-hidden group">
      {/* Slides */}
      {banners.map((banner, i) => (
        <div
          key={banner._id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
            i === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
          }`}
        >
          {/* Image with overlay */}
          <div className="relative w-full h-full">
            <Image
              src={urlFor(banner.image).width(1920).height(1080).auto('format').url()}
              alt={banner.title || "School Banner"}
              fill
              className="object-cover object-center"
              priority={i === 0}
              quality={90}
            />
            {/* Darker gradient overlay for readability - now on top of image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-transparent z-10" />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
              <div className="max-w-4xl animate-fade-in-up">
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-12 h-[2px] bg-teal-400" />
                    <span className="text-teal-400 text-xs md:text-sm font-black tracking-widest uppercase">
                        The Seekers International School
                    </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-8 drop-shadow-lg">
                  {banner.title || "Shape Your Future with Excellence"}
                </h1>
                
                <div className="flex flex-wrap gap-4">
                    {banner.link && (
                    <Link
                        href={banner.link}
                        target={banner.isExternal ? "_blank" : "_self"}
                        className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 group/btn"
                    >
                        LEARN MORE
                        <ArrowRight size={22} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    )}
                    <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold px-10 py-4 rounded-xl transition-all duration-300">
                        OUR ADMISSIONS
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls (Visible on hover) */}
      {banners.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center rounded-full transition-all z-30 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
            aria-label="Previous slide"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center rounded-full transition-all z-30 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
            aria-label="Next slide"
          >
            <ChevronRight size={32} />
          </button>

          {/* New Progress Indicators */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-30">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-500 rounded-full h-1.5 ${
                  i === current ? "bg-teal-400 w-12" : "bg-white/40 w-6 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
