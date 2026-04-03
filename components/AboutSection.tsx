import Image from "next/image";
import { BookOpen, Target } from "lucide-react";
import { getCategorizedImages } from "@/lib/imageUtils";

export default async function AboutSection() {
  const { about } = await getCategorizedImages();
  const image1 = about.length > 0 ? about[0] : "/gallery/awards/about100.jpg";

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center h-full">
      {/* Representative Image */}
      <div className="relative w-full h-[280px] sm:h-[350px] xl:h-[450px] rounded-2xl overflow-hidden shadow-md group">
        <Image
          src={image1}
          alt="School environment"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 1280px) 100vw, 800px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 text-white bg-teal-600/80 backdrop-blur-sm px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest">
            Since 15+ Years
        </div>
      </div>

      <div className="flex flex-col h-full justify-between gap-6">
        <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded bg-teal-50 text-teal-600 font-bold text-[10px] uppercase tracking-widest">
                Our Story
            </div>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
            At The Seekers International School, we foster a child-centered environment that celebrates diverse cultural and linguistic backgrounds. Our mission is to prioritize well-being and curiosity to meet each student&apos;s unique learning needs.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7]">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <BookOpen size={18} className="text-green-600" />
              </div>
              <h4 className="font-extrabold text-green-900 text-sm uppercase tracking-wider">Mission</h4>
            </div>
            <p className="text-green-800/80 text-sm leading-relaxed">
              To inspire and empower every student to achieve their highest potential through critical thinking.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FFF7ED] border border-[#FFEDD5]">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <Target size={18} className="text-orange-600" />
              </div>
              <h4 className="font-extrabold text-orange-900 text-sm uppercase tracking-wider">Purpose</h4>
            </div>
            <p className="text-orange-800/80 text-sm leading-relaxed">
              Commitment to academic integrity, ensuring all work is authentic and reflects individual effort.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
