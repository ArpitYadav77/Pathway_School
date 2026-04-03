import Image from "next/image";
import { Bus, Sun, Utensils, CheckCircle } from "lucide-react";

const facilities = [
  {
    icon: Bus,
    title: "Transportation",
    description: "Safe school bus service with trained staff.",
    color: "bg-blue-50/50",
    iconColor: "text-blue-600",
  },
  {
    icon: Sun,
    title: "Day Care",
    description: "Nurturing environment for extended care.",
    color: "bg-orange-50/50",
    iconColor: "text-orange-600",
  },
  {
    icon: Utensils,
    title: "Healthy Meals",
    description: "Fresh, hygienic, and balanced nutrition.",
    color: "bg-green-50/50",
    iconColor: "text-green-600",
  },
];

export default async function Facilities() {
  const imageSrc = "/Pictures/Admission2026-2027.jpeg";

  return (
    <div className="w-full">
      <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/50 group">
        <Image
          src={imageSrc}
          alt="Admissions 2026-27"
          fill
          sizes="(max-width: 1280px) 100vw, 600px"
          className="object-contain group-hover:scale-105 transition-transform duration-1000 bg-gray-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
