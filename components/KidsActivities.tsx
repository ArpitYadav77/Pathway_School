"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const activities = [
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
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + activities.length) % activities.length);
  const next = () => setCurrent((c) => (c + 1) % activities.length);

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-accent/30 rounded-full animate-bounce-subtle" />
        <div className="absolute top-20 right-1/3 w-3 h-3 bg-white/20 rounded-full animate-float" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {activities.map((activity, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl overflow-hidden shadow-xl card-hover cursor-pointer transition-all duration-500 ${
                i === current ? "ring-2 ring-accent ring-offset-2 ring-offset-primary" : ""
              }`}
              onClick={() => setCurrent(i)}
            >
              <div className="aspect-[4/3] relative img-zoom">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                  New
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-primary text-lg mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-500 text-sm">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Arrows */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous activity"
            className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {activities.map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current ? "bg-accent w-6" : "bg-white/40"
                }`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next activity"
            className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
