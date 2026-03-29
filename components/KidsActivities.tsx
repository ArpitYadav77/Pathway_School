"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getCategorizedImages } from "@/lib/imageUtils";

const baseActivities = [
  {
    image: "/images/carnival.png",
    title: "Friendship Day",
    description: "Celebrating the bonds of friendship with activities and fun.",
    tag: "Event"
  },
  {
    image: "/images/summer-camp.png",
    title: "Summer Explorers",
    description: "An exciting summer program with outdoor learning and play.",
    tag: "Event"
  },
  {
    image: "/images/carnival.png",
    title: "Carnival 2025",
    description: "A day full of fun, games, and excitement for all children!",
    tag: "Event"
  },
  {
    image: "/images/summer-camp.png",
    title: "Friendship Day",
    description: "Celebrating the bonds of friendship with activities and fun.",
    tag: "Event"
  },
  {
    image: "/images/carnival.png",
    title: "Summer Camp",
    description: "An exciting summer program with outdoor activities and fun.",
    tag: "Event"
  },
];

export default function KidsActivities() {
  const [activities, setActivities] = useState(baseActivities);

  useEffect(() => {
    getCategorizedImages().then((res) => {
      if (res.events && res.events.length > 0) {
        const newActivities = Array(8).fill(null).map((_, i) => ({
          ...baseActivities[i % baseActivities.length],
          image: res.events[i % res.events.length],
        }));
        setActivities(newActivities);
      }
    });
  }, []);

  return (
    <section className="relative w-full bg-[#1e3a8a] py-16 md:py-20 lg:py-24 overflow-hidden rounded-3xl mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <p className="text-orange-400 font-extrabold text-xs uppercase tracking-[0.3em] mb-3">
          ✨ Events & Activities ✨
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tight">
          Education and Innovations
        </h2>
        <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full" />
      </div>

      {/* Playful Mascots - high quality 3D characters */}
      <div className="flex justify-center gap-6 md:gap-12 lg:gap-20 mb-16 px-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`relative w-24 h-24 md:w-32 md:h-32 xl:w-40 xl:h-40 transform transition-all duration-700 hover:scale-110 hover:rotate-3 ${i % 2 === 0 ? 'translate-y-6' : '-translate-y-6'}`}>
            <Image 
              src={`/animation/mascot${i}.png`} 
              alt={`Mascot ${i}`} 
              fill 
              className="object-contain drop-shadow-2xl" 
            />
          </div>
        ))}
      </div>

      {/* Marquee Section */}
      <div className="relative w-full flex overflow-hidden">
        <div className="flex animate-marquee-x gap-4 px-4 whitespace-nowrap overflow-visible py-4">
          {[...activities, ...activities].map((activity, i) => (
            <div
              key={i}
              className="inline-flex w-[280px] md:w-[320px] flex-col bg-white rounded-3xl overflow-hidden shadow-2xl shrink-0 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-lg shadow-md uppercase tracking-widest">
                  Event
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-extrabold text-[#003366] text-lg mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed whitespace-normal line-clamp-2">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CSS for marquee if not already in globals.css */}
        <style jsx>{`
          .animate-marquee-x {
            animation: marquee 25s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-x:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
}
