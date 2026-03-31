"use client";

import { useEffect, useState } from "react";
import { getAnnouncements } from "@/lib/sanityQueries";
import { BellRing, ExternalLink, Calendar, Download } from "lucide-react";
import { useDragScroll } from "@/hooks/useDragScroll";

interface Announcement {
  _id: string;
  title: string;
  content: string;
  link?: string;
  fileUrl?: string;
  fileName?: string;
  isExternal?: boolean;
  date: string;
}

export default function SanityAnnouncements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useDragScroll<HTMLDivElement>({
    autoScroll: true,
    speed: 1,      // Normal scrolling speed
    pauseOnHover: true,
    seamlessLoop: true // We'll duplicate the items to make the loop seamless
  });

  useEffect(() => {
    getAnnouncements()
      .then(setAnnouncements)
      .finally(() => setLoading(true)); // Simulating longer load for better UX demo
      
    // Real loading set
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const isNew = (dateStr: string) => {
    const announcementDate = new Date(dateStr);
    const today = new Date();
    const diffInDays = Math.floor((today.getTime() - announcementDate.getTime()) / (1000 * 3600 * 24));
    return diffInDays <= 7;
  };

  if (loading) {
    return (
      <div className="w-full bg-white/50 py-3 border-b animate-pulse">
        <div className="max-w-4xl mx-auto px-6 h-6 bg-gray-200 rounded-full" />
      </div>
    );
  }

  if (announcements.length === 0) {
    return null; // Fallback: hide banner if no announcements
  }

  return (
    <div className="bg-white/60 backdrop-blur-md border-b border-accent/10 py-3 overflow-hidden">
      <div className="w-full px-6 flex items-center justify-center gap-6">
        <div className="flex items-center gap-2 bg-accent/15 px-3 py-1.5 rounded-full shrink-0 shadow-sm">
          <BellRing size={16} className="text-accent animate-wiggle" />
          <span className="text-accent font-bold text-[10px] uppercase tracking-widest">Announcement</span>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex-grow overflow-x-auto overflow-y-hidden relative flex items-center max-w-5xl pb-1"
          style={{ scrollbarWidth: "thin" }}
        >
          <div className="whitespace-nowrap flex items-center gap-10 text-secondary font-semibold text-sm w-max min-w-full px-2">
            {Array(8).fill(announcements).flat().map((item, index) => (
              <a
                key={`${item._id}-${index}`}
                href={item.fileUrl || item.link || "#"}
                target={item.fileUrl || item.isExternal ? "_blank" : "_self"}
                rel={item.fileUrl || item.isExternal ? "noopener noreferrer" : ""}
                className="flex items-center gap-3 group hover:text-accent transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  {isNew(item.date) && (
                    <span className="bg-red-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded leading-none">NEW</span>
                  )}
                  <span className="group-hover:underline underline-offset-4">{item.title}</span>
                </div>
                <span className="text-gray-400 text-xs font-normal flex items-center gap-1">
                  <Calendar size={12} />
                  {new Date(item.date).toLocaleDateString()}
                </span>
                {item.link && !item.fileUrl && <ExternalLink size={13} className="opacity-40 group-hover:opacity-100" />}
                {item.fileUrl && (
                  <span className="bg-accent text-white text-[9px] font-bold px-2 py-0.5 rounded leading-none flex items-center gap-1">
                    DOWNLOAD <Download size={8} />
                  </span>
                )}
                <span className="text-accent/20 mx-2 text-xs opacity-50">•</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
