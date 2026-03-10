"use client";

import Image from "next/image";

const classes = [
  {
    image: "/images/classroom-playgroup.png",
    title: "Playgroup",
    age: "Age 1.5 – 2",
    color: "bg-pink-500",
  },
  {
    image: "/images/classroom-playgroup.png",
    title: "Pre Nursery",
    age: "Age 2 – 3",
    color: "bg-blue-500",
  },
  {
    image: "/images/classroom-nursery.png",
    title: "Nursery",
    age: "Age 3",
    color: "bg-green-500",
  },
  {
    image: "/images/classroom-nursery.png",
    title: "Class 2",
    age: "Age 6 – 7",
    color: "bg-purple-500",
  },
  {
    image: "/images/classroom-older.png",
    title: "Class 3",
    age: "Age 7 – 8",
    color: "bg-amber-500",
  },
  {
    image: "/images/classroom-older.png",
    title: "Class 4",
    age: "Age 8 – 9",
    color: "bg-teal-500",
  },
  {
    image: "/images/classroom-older.png",
    title: "Class 5",
    age: "Age 9 – 10",
    color: "bg-rose-500",
  },
  {
    image: "/images/classroom-older.png",
    title: "Class 6",
    age: "Age 10 – 11",
    color: "bg-indigo-500",
  },
  {
    image: "/images/classroom-nursery.png",
    title: "Class 7",
    age: "Age 11 – 12",
    color: "bg-orange-500",
  },
];

export default function ClassesGrid() {
  return (
    <section id="academics" className="py-20 bg-bg-light relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 right-10 w-20 h-20 border-2 border-accent/10 rounded-full hidden lg:block" />
      <div className="absolute bottom-10 left-10 w-28 h-28 bg-primary/5 rounded-full blur-xl hidden lg:block" />

      <div className="max-w-[1280px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Classes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            Education for Your Children
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            We offer a wide range of classes designed to support your child&apos;s
            growth at every stage of their educational journey.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-md card-hover cursor-pointer group animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] relative img-zoom">
                <Image
                  src={cls.image}
                  alt={cls.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              {/* Content */}
              <div className="p-5 relative">
                <h3 className="font-bold text-primary text-lg">{cls.title}</h3>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-gray-500 text-sm">{cls.age}</span>
                  <span
                    className={`${cls.color} text-white text-xs font-bold px-4 py-1.5 rounded-full`}
                  >
                    {cls.age}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
