"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/hero-banner.png",
    title: "Where Learning is an Adventure",
    subtitle:
      "At The Seekers International, we believe every child is unique. Our nurturing environment inspires curiosity, creativity, and a lifelong love for learning.",
  },
  {
    image: "/images/about1.png",
    title: "Building Tomorrow's Leaders",
    subtitle:
      "Through innovative teaching methods and a caring community, we prepare children for a bright future filled with endless possibilities.",
  },
  {
    image: "/images/about2.png",
    title: "Play, Learn, and Grow",
    subtitle:
      "Our state-of-the-art facilities and experienced educators create the perfect environment for your child's holistic development.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section id="home" className="relative h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
      ))}

      {/* Overlay Card */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-[1280px] mx-auto px-4 w-full">
          <div className="glass max-w-xl rounded-2xl p-8 md:p-10 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {slides[current].title}
            </h2>
            <p className="text-white/90 text-sm md:text-base mb-6 leading-relaxed">
              {slides[current].subtitle}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:scale-105"
            >
              Contact Us
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-accent w-8"
                : "bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-10 right-10 w-20 h-20 border-4 border-accent/20 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-20 right-20 w-14 h-14 bg-purple-start/10 rounded-lg rotate-45 animate-spin-slow hidden lg:block" />
    </section>
  );
}
