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
  const imageSrc = "/images/building/2520186158ADSC_0002.jpg";

  return (
    <div className="flex flex-col gap-6">
      <div className="relative w-full h-[180px] rounded-xl overflow-hidden shadow-sm">
        <Image
          src={imageSrc}
          alt="School Facilities"
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-sm border border-white/50">
           <span className="text-teal-600 font-bold text-lg">15+</span>
           <span className="text-[10px] text-gray-500 ml-1 block leading-tight">Years Exp.</span>
        </div>
      </div>

      <div className="space-y-3">
        {facilities.map((facility, i) => (
          <div
            key={i}
            className={`flex items-center gap-4 p-3 rounded-xl ${facility.color} border border-gray-100/50 hover:shadow-sm transition-all duration-300 group`}
          >
            <div className={`p-2 rounded-lg shrink-0 group-hover:scale-110 transition-transform duration-300 bg-white shadow-sm`}>
              <facility.icon size={20} className={facility.iconColor} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-gray-800 text-sm flex items-center gap-1.5">
                {facility.title}
                <CheckCircle size={12} className="text-teal-500" />
              </h4>
              <p className="text-gray-500 text-xs truncate">
                {facility.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
