"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getHeroBanners, urlFor } from "@/lib/sanityQueries";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface HeroBanner {
  _id: string;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  link?: string;
  isExternal?: boolean;
}

export default function SanityHero() {
  const [banners, setBanners] = useState<HeroBanner[]>([]);
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
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const prev = () => setCurrent((c) => (c - 1 + banners.length) % banners.length);
  const next = () => setCurrent((c) => (c + 1) % banners.length);

  if (loading) {
    return <div className="w-full h-full bg-gray-100 animate-pulse" />;
  }

  // Fallback UI
  if (banners.length === 0) {
    return (
      <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
        No active hero banners found. Add some in Sanity!
      </div>
    );
  }

  return (
    <section id="home" className="relative h-full w-full overflow-hidden group">
      {/* Slides */}
      {banners.map((banner, i) => (
        <div
          key={banner._id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {banner.link ? (
            <a
              href={banner.link}
              target={banner.isExternal ? "_blank" : "_self"}
              rel={banner.isExternal ? "noopener noreferrer" : ""}
              className="relative block w-full h-full cursor-pointer"
            >
              <Image
                src={urlFor(banner.image).width(1920).height(1080).url()}
                alt={banner.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority={i === 0}
              />
              <div className="absolute top-4 right-4 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={20} />
              </div>
            </a>
          ) : (
            <Image
              src={urlFor(banner.image).width(1920).height(1080).url()}
              alt={banner.title}
              fill
              className="object-cover"
              priority={i === 0}
            />
          )}
        </div>
      ))}

      {/* Navigation */}
      {banners.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full transition-all z-20 group-hover:left-8"
          >
            <ChevronLeft size={30} />
          </button>
          <button
            onClick={next}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full transition-all z-20 group-hover:right-8"
          >
            <ChevronRight size={30} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? "bg-accent w-8 h-2.5 shadow-lg shadow-accent/40" : "bg-white/60 w-2.5 h-2.5 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
