"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getCategorizedImages } from "@/lib/imageUtils";

const staticContent = {
  title: "Where Learning is an Adventure",
  subtitle:
    "At The Seekers International, we believe every child is unique. Our nurturing environment inspires curiosity, creativity, and a lifelong love for learning.",
};

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    getCategorizedImages().then((res) => {
      // Prioritize the new Hero folder images, fallback to matching root hero images, then fallback to safe static
      if (res.heroFolder && res.heroFolder.length > 0) {
        setImages(res.heroFolder);
      } else if (res.hero && res.hero.length > 0) {
        setImages(res.hero);
      } else {
        setImages(["/images/hero-banner.png"]);
      }
    });
  }, []);

  useEffect(() => {
    if (images.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length, isPaused]);

  const prev = () =>
    setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  // If we haven't loaded yet, show a safe default to prevent layout shift
  const displayImages = images.length > 0 ? images : ["/images/hero-banner.png"];

  return (
    <section 
      id="home" 
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides (Backgrounds only) */}
      {displayImages.map((imageSrc, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={imageSrc}
            alt={`Hero Slide ${i + 1}`}
            fill
            className="object-cover"
            priority={i === 0}
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
      ))}

      {/* Overlay Content (Left Aligned) */}
      <div className="absolute inset-0 flex items-center pt-[80px]">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="glass max-w-xl rounded-[2.5rem] p-10 md:p-14 lg:p-16 animate-fade-in-up shadow-2xl backdrop-blur-md">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] drop-shadow-md">
              {staticContent.title}
            </h2>
            <p className="text-white/95 text-lg md:text-xl mb-10 leading-relaxed font-medium max-w-lg">
              {staticContent.subtitle}
            </p>
            <div className="flex">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-white font-bold px-12 py-5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/40 hover:scale-105"
              >
                Contact Us
                <ChevronRight size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {displayImages.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20"
          >
            <ChevronRight size={32} />
          </button>
        </>
      )}

      {/* Dots */}
      {displayImages.length > 1 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {displayImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-accent w-10"
                  : "bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      )}

      {/* Decorative shapes */}
      <div className="absolute top-10 right-10 w-20 h-20 border-4 border-accent/20 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-20 right-20 w-14 h-14 bg-purple-start/10 rounded-lg rotate-45 animate-spin-slow hidden lg:block" />
    </section>
  );
}
