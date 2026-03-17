"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Trophy } from "lucide-react";
import { getCategorizedImages } from "@/lib/imageUtils";

const baseActivities = [
  {
    image: "/images/carnival.png",
    title: "Carnival 2025",
    description: "A day full of fun, games, and excitement for all children!",
  },
  {
    image: "/images/friendship-day.png",
    title: "Friendship Day",
    description:
      "Celebrating the bonds of friendship with activities and fun.",
  },
  {
    image: "/images/summer-camp.png",
    title: "Summer Camp",
    description:
      "An exciting summer program with outdoor activities and learning.",
  },
];

export default function KidsActivities() {
  const [activities, setActivities] = useState(baseActivities);
  const [awards, setAwards] = useState<string[]>([]);

  useEffect(() => {
    getCategorizedImages().then((res) => {
      if (res.events && res.events.length > 0) {
        const newActivities = baseActivities.map((act, i) => ({
          ...act,
          image: res.events[i % res.events.length],
        }));
        setActivities(newActivities);
      }
      
      if (res.awardsFolder && res.awardsFolder.length > 0) {
        setAwards(res.awardsFolder);
      }
    });
  }, []);

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-accent/30 rounded-full animate-bounce-subtle" />
        <div className="absolute top-20 right-1/3 w-3 h-3 bg-white/20 rounded-full animate-float" />
      </div>

      <div className="max-w-[1920px] mx-auto relative z-10">
        {/* Events Section Header */}
        <div className="text-center mb-12 px-4">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles size={20} className="text-accent" />
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Events & Activities
            </span>
            <Sparkles size={20} className="text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Education and Innovations
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Floating Kids Visuals Section */}
        <div className="kids-visuals flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 my-16 px-4">
          <div className="kids-img relative w-40 h-40 md:w-52 md:h-52 animate-kids-float">
            <Image 
              src="/animation/boy_pencil-removebg-preview.png" 
              alt="Artistic Boy" 
              fill 
              className="object-contain"
            />
          </div>
          <div className="kids-img relative w-40 h-40 md:w-52 md:h-52 animate-kids-float-rotate delay-200">
            <Image 
              src="/animation/girl_pencil-removebg-preview.png" 
              alt="Creative Girl" 
              fill 
              className="object-contain"
            />
          </div>
          <div className="kids-img relative w-40 h-40 md:w-52 md:h-52 animate-kids-float-alt delay-500">
            <Image 
              src="/animation/image-removebg-preview (2).png" 
              alt="Innovation" 
              fill 
              className="object-contain"
            />
          </div>
          <div className="kids-img relative w-40 h-40 md:w-52 md:h-52 animate-kids-float-rotate delay-300">
            <Image 
              src="/animation/image_copy-removebg-preview.png" 
              alt="Innovation Side" 
              fill 
              className="object-contain"
            />
          </div>
        </div>

        {/* Auto-Scrolling Events Carousel */}
        <div className="mb-20 overflow-hidden relative group">
          <div className="flex w-max animate-marquee-x gap-6 px-3">
            {[...activities, ...activities, ...activities].map((activity, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-xl w-[300px] sm:w-[350px] shrink-0 card-hover"
              >
                <div className="aspect-[4/3] relative img-zoom">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    sizes="(max-width: 640px) 300px, 350px"
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Event
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-primary text-lg mb-2 truncate">
                    {activity.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
