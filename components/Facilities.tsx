"use client";

import Image from "next/image";
import { Bus, Sun, Utensils, CheckCircle } from "lucide-react";

const facilities = [
  {
    icon: Bus,
    title: "Transportation",
    description:
      "Safe and comfortable school bus service covering all major routes across the city with trained drivers and attendants.",
    color: "bg-blue-50",
    iconColor: "text-primary",
    iconBg: "bg-blue-100",
  },
  {
    icon: Sun,
    title: "Day Care",
    description:
      "Extended day care facility with a nurturing environment, engaging activities, and personalized attention for every child.",
    color: "bg-orange-50",
    iconColor: "text-accent",
    iconBg: "bg-orange-100",
  },
  {
    icon: Utensils,
    title: "Nutritious Food",
    description:
      "Freshly prepared, balanced meals and snacks that meet the dietary needs of growing children, prepared in a hygienic kitchen.",
    color: "bg-green-50",
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative animate-slide-in-left">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/kids-stage.png"
                alt="Kids speaking on stage"
                width={600}
                height={450}
                className="object-cover w-full h-[350px] md:h-[450px]"
              />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-white rounded-2xl p-5 shadow-xl hidden md:block">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full" />
          </div>

          {/* Right - Content */}
          <div className="animate-slide-in-right">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Facilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4 leading-tight">
              Best Facilities for Kids
            </h2>
            <p className="text-gray-500 mb-8">
              We provide world-class facilities to ensure your child&apos;s
              comfort, safety, and holistic development in a nurturing
              environment.
            </p>

            {/* Facilities list */}
            <div className="space-y-4">
              {facilities.map((facility, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 p-5 rounded-xl ${facility.color} hover:shadow-md transition-all duration-300 cursor-pointer group`}
                >
                  <div
                    className={`${facility.iconBg} p-3 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <facility.icon size={24} className={facility.iconColor} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 flex items-center gap-2">
                      {facility.title}
                      <CheckCircle size={16} className="text-green-500" />
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
