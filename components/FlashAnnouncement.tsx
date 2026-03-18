"use client";

import { BellRing, ExternalLink } from "lucide-react";

export default function FlashAnnouncement() {
  return (
    <div className="bg-white/50 backdrop-blur-sm border-b border-accent/20 py-2.5 overflow-hidden">
      <div className="w-full px-6 md:px-12 flex items-center justify-center gap-6">
        <div className="flex items-center gap-2 bg-accent/15 px-3 py-1.5 rounded-full shrink-0 shadow-sm animate-pulse-glow">
          <BellRing size={16} className="text-accent" />
          <span className="text-accent font-bold text-xs uppercase tracking-widest">Flash News</span>
        </div>
        
        <div className="flex overflow-hidden relative h-5 items-center max-w-4xl w-full">
          <div className="whitespace-nowrap flex items-center gap-8 text-secondary font-bold text-sm tracking-wide animate-marquee-x py-1">
            <span className="flex items-center gap-2">
              📅 List Book 2026 is Out! Download Now 🚀
              <ExternalLink size={14} className="opacity-60" />
            </span>
            <span className="text-accent/40 font-black tracking-tighter mx-2">★★★</span>
            <span className="flex items-center gap-2">
              🎉 New Academic Session 2026 Registrations Open 🏫
              <ExternalLink size={14} className="opacity-60" />
            </span>
            <span className="text-accent/40 font-black tracking-tighter mx-2">★★★</span>
            <span className="flex items-center gap-2">
              📅 List Book 2026 is Out! Download Now 🚀
              <ExternalLink size={14} className="opacity-60" />
            </span>
            <span className="text-accent/40 font-black tracking-tighter mx-2">★★★</span>
            <span className="flex items-center gap-2">
              🎉 New Academic Session 2026 Registrations Open 🏫
              <ExternalLink size={14} className="opacity-60" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
