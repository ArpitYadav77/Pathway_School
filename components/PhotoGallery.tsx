"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
          title: "Event 1",
          coverImage: images.event1[0],
        });
      }
      
      if (images.event2 && images.event2.length > 0) {
        activeEvents.push({
          id: "event2",
          title: "Second Event",
          coverImage: images.event2[0],
        });
      }
      
      setEvents(activeEvents);
    });
  }, []);

  return (
    <section id="gallery" className="py-20 bg-bg-light">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Photo Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            Capturing Beautiful Moments
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            A glimpse into the wonderful experiences and cherished memories
            created at our school every day.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {events.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">Loading events...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col group animate-fade-in-up card-hover"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* Event Cover Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={event.coverImage}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300" />
                </div>
                
                {/* Event Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-4 truncate text-center">
                    {event.title}
                  </h3>
                  
                  <div className="mt-auto flex justify-center">
                    <Link
                      href={`/gallery/${event.id}`}
                      className="inline-flex items-center gap-2 bg-[#ffeed1] hover:bg-accent text-accent hover:text-white font-bold px-6 py-2 rounded border border-accent transition-all duration-300 w-full justify-center group/btn"
                    >
                      VIEW MORE
                      <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
