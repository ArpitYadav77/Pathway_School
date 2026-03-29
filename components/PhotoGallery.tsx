"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Camera } from "lucide-react";
import { getCategorizedImages } from "@/lib/imageUtils";

interface EventGallery {
  id: string;
  title: string;
  coverImage: string;
}

export default function PhotoGallery() {
  const [events, setEvents] = useState<EventGallery[]>([]);

  useEffect(() => {
    getCategorizedImages().then((images) => {
      const activeEvents: EventGallery[] = [];
      
      if (images.event1 && images.event1.length > 0) {
        activeEvents.push({
          id: "event1",
          title: "Event Gallery 1",
          coverImage: images.event1[0],
        });
      }
      
      if (images.event2 && images.event2.length > 0) {
        activeEvents.push({
          id: "event2",
          title: "School Events",
          coverImage: images.event2[0],
        });
      }

      if (images.awardsFolder && images.awardsFolder.length > 0) {
        activeEvents.push({
          id: "awards",
          title: "Our Awards",
          coverImage: images.awardsFolder[0],
        });
      }
      
      setEvents(activeEvents);
    });
  }, []);

  return (
    <div className="w-full">
      {events.length === 0 ? (
        <div className="flex items-center justify-center p-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-100">
           <p className="text-gray-400 font-medium">Loading collection...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`/gallery/${event.id}`}
              className="group relative h-[250px] md:h-[300px] xl:h-[350px] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Image
                src={event.coverImage}
                alt={event.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-1 opacity-80">
                   <Camera size={14} className="text-teal-400" />
                   <span className="text-[10px] text-white uppercase tracking-widest font-bold">Gallery</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {event.title}
                </h3>
                <span className="inline-flex items-center text-teal-300 text-xs font-bold gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  EXPLORE <ChevronRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
