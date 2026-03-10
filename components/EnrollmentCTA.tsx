"use client";

import { Rocket, Plane, Star, Sparkles } from "lucide-react";

export default function EnrollmentCTA() {
  return (
    <section className="py-20 relative overflow-hidden" style={{
      background: "linear-gradient(135deg, #7C3AED, #9333EA)"
    }}>
      {/* Decorative Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Planet */}
        <div className="absolute top-10 left-10 animate-float">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
            <Rocket size={28} className="text-white/60" />
          </div>
        </div>
        {/* Plane */}
        <div className="absolute top-1/4 right-16 animate-bounce-subtle">
          <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
            <Plane size={24} className="text-white/60 rotate-45" />
          </div>
        </div>
        {/* Stars */}
        <div className="absolute bottom-16 left-1/4 animate-wiggle">
          <Star size={24} className="text-yellow-300/40" fill="currentColor" />
        </div>
        <div className="absolute top-20 left-1/3 animate-float" style={{ animationDelay: "1s" }}>
          <Star size={16} className="text-white/30" fill="currentColor" />
        </div>
        <div className="absolute bottom-10 right-1/3 animate-bounce-subtle" style={{ animationDelay: "0.5s" }}>
          <Sparkles size={20} className="text-white/30" />
        </div>
        {/* Shapes */}
        <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-white/10 rounded-xl rotate-45 animate-spin-slow" />
        <div className="absolute top-1/2 left-16 w-6 h-6 bg-accent/30 rounded-full" />
        <div className="absolute top-10 right-1/2 w-3 h-3 bg-white/20 rounded-full" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Enroll Your Child in{" "}
            <span className="text-yellow-300">The Seekers International</span>
          </h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">
            Give your child the gift of quality education. Our dedicated team of
            educators and state-of-the-art facilities ensure the best learning
            experience for your little ones.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/40 hover:scale-105 animate-pulse-glow"
          >
            Enroll Now
            <Sparkles size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
