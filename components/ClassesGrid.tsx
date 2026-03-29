import Image from "next/image";
import { getCategorizedImages } from "@/lib/imageUtils";

const baseClasses = [
  {
    image: "/images/classroom-playgroup.png",
    title: "Playgroup",
    age: "1.5 – 2 Years",
    color: "bg-teal-500",
  },
  {
    image: "/images/classroom-playgroup.png",
    title: "Pre Nursery",
    age: "2 – 3 Years",
    color: "bg-blue-500",
  },
  {
    image: "/images/classroom-nursery.png",
    title: "Nursery",
    age: "3 – 4 Years",
    color: "bg-orange-500",
  },
  {
    image: "/images/classroom-nursery.png",
    title: "Kindergarten",
    age: "4 – 5 Years",
    color: "bg-purple-500",
  },
  {
    image: "/images/classroom-older.png",
    title: "Primary (1-5)",
    age: "6 – 10 Years",
    color: "bg-indigo-500",
  },
  {
    image: "/images/classroom-older.png",
    title: "Middle (6-8)",
    age: "11 – 13 Years",
    color: "bg-rose-500",
  },
];

export default async function ClassesGrid() {
  const { classes } = await getCategorizedImages();
  
  const displayClasses = baseClasses.map((cls, i) => {
    return {
      ...cls,
      image: classes?.length > 0 ? classes[i % classes.length] : cls.image,
    };
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {displayClasses.map((cls, i) => (
        <div
          key={i}
          className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 group hover:shadow-sm transition-all duration-300"
        >
          <div className="aspect-[16/10] relative overflow-hidden">
            <Image
              src={cls.image}
              alt={cls.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
            />
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-white/90 backdrop-blur-sm shadow-sm border border-white/50">
               <span className="text-[10px] font-bold text-gray-700 uppercase tracking-tighter">Academics</span>
            </div>
          </div>
          <div className="p-3.5">
            <h3 className="font-bold text-primary text-sm mb-1">{cls.title}</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-[11px] font-medium italic">{cls.age}</span>
              <div className={`w-2 h-2 rounded-full ${cls.color}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
