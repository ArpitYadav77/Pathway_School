"use client";
import React, { useState, useEffect } from "react";
import { Sparkles, GraduationCap } from "lucide-react";
import { getCategorizedImages } from "@/lib/imageUtils";

export default function EnrollmentCTA() {
  const [bgImage, setBgImage] = useState<string | null>(null);

  useEffect(() => {
    getCategorizedImages().then((images) => {
      const { hero } = images;
      const img = hero && hero.length > 0 ? hero[0] : null;
      setBgImage(img);
    });
  }, []);

  return (
    <div 
      className="relative h-full min-h-[300px] flex items-center justify-center text-center p-8 rounded-xl overflow-hidden group shadow-lg"
      style={{
        background: bgImage 
          ? `linear-gradient(135deg, rgba(20, 184, 166, 0.95), rgba(13, 148, 136, 0.95)), url(${bgImage}) center/cover no-repeat`
          : "linear-gradient(135deg, #14b8a6, #0d9488)"
      }}
    >
      <div className="relative z-10 max-w-lg mx-auto">
        <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
           <GraduationCap size={32} className="text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
          Ready for <span className="text-teal-100">Admission?</span>
        </h2>
        <p className="text-white/90 text-sm md:text-base mb-8 leading-relaxed font-medium">
          Give your child the gift of quality education. Join our community of lifelong learners and critical thinkers today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/admissions/process"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-teal-50 text-teal-700 font-bold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            Apply Now
            <Sparkles size={18} className="text-teal-600 animate-pulse" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-teal-800/20 hover:bg-teal-800/30 text-white border border-white/30 font-bold px-8 py-3.5 rounded-xl transition-all duration-300 backdrop-blur-sm"
          >
            Contact Admissions
          </a>
        </div>
      </div>
      
      {/* Subtle decorations */}
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
        <Sparkles size={120} className="text-white" />
      </div>
    </div>
  );
}

