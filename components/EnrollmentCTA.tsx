"use client";
import React, { useState, useEffect, useRef } from "react";
import { Rocket, Plane, Star, Sparkles, Cloud, Lightbulb } from "lucide-react";
import { getCategorizedImages } from "@/lib/imageUtils";

export default function EnrollmentCTA() {
  const [bgImage, setBgImage] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    getCategorizedImages().then((images) => {
      const { hero } = images;
      const img = hero && hero.length > 1 ? hero[1] : (hero && hero.length > 0 ? hero[0] : null);
      setBgImage(img);
    });
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-24 relative overflow-hidden transition-colors duration-500" 
      style={{
        background: bgImage 
          ? `linear-gradient(135deg, rgba(124, 58, 237, 0.92), rgba(147, 51, 234, 0.92)), url(${bgImage}) center/cover no-repeat`
          : "linear-gradient(135deg, #7C3AED, #9333EA)"
      }}
    >
      {/* Interactive Decorative Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Rocket */}
        <div 
          className="absolute top-10 left-10 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePos.x * -0.8}px, ${mousePos.y * -0.8}px)` }}
        >
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center animate-float">
            <Rocket size={32} className="text-white/60" />
          </div>
        </div>

        {/* Aeroplane */}
        <div 
          className="absolute top-1/4 right-20 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePos.x * -1.2}px, ${mousePos.y * -1.2}px)` }}
        >
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center animate-bounce-subtle">
            <Plane size={28} className="text-white/60 rotate-45" />
          </div>
        </div>

        {/* Cloud 1 */}
        <div 
          className="absolute bottom-1/4 left-20 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` }}
        >
          <Cloud size={48} className="text-white/20 animate-float" />
        </div>

        {/* Bulb */}
        <div 
          className="absolute top-1/2 right-1/4 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px)` }}
        >
          <div className="p-4 bg-yellow-400/10 rounded-full animate-pulse">
            <Lightbulb size={30} className="text-yellow-300/50" fill="currentColor" />
          </div>
        </div>

        {/* More Stars */}
        <div 
          className="absolute bottom-20 left-1/3 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePos.x * -0.4}px, ${mousePos.y * -0.4}px)` }}
        >
          <Star size={24} className="text-yellow-300/40 animate-wiggle" fill="currentColor" />
        </div>

        <div 
          className="absolute top-1/3 left-1/4 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px)` }}
        >
          <Star size={16} className="text-white/30 animate-pulse" fill="currentColor" />
        </div>

        {/* Cloud 2 */}
        <div 
          className="absolute top-10 right-1/3 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)` }}
        >
          <Cloud size={32} className="text-white/10" />
        </div>

        {/* Sparkles */}
        <div 
          className="absolute bottom-10 right-1/3 transition-transform duration-300 ease-out font-bold"
          style={{ transform: `translate(${mousePos.x * -2}px, ${mousePos.y * -2}px)` }}
        >
          <Sparkles size={24} className="text-accent/40 animate-spin-slow" />
        </div>

        {/* Decorative Geometric Shapes */}
        <div 
          className="absolute bottom-20 right-20 w-24 h-24 border-2 border-white/5 rounded-2xl rotate-45 transition-transform duration-500 ease-out"
          style={{ transform: `translate(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px) rotate(${45 + mousePos.x}deg)` }}
        />
        
        <div 
          className="absolute top-1/2 left-10 w-8 h-8 bg-accent/20 rounded-full blur-sm transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight animate-fade-in">
            Enroll Your Child in{" "}
            <span className="text-yellow-300 drop-shadow-lg">The Seekers International</span>
          </h2>
          <p className="text-white/90 text-xl mb-12 leading-relaxed animate-fade-in delay-200">
            Give your child the gift of quality education. Our dedicated team of
            educators and state-of-the-art facilities ensure the best learning
            experience for your little ones.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-white font-extrabold px-12 py-5 rounded-full text-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,107,87,0.5)] hover:scale-110 group animate-bounce-subtle"
          >
            Enroll Now
            <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

