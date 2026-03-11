import Image from "next/image";
import { BookOpen, Target, ChevronRight } from "lucide-react";
import { getCategorizedImages } from "@/lib/imageUtils";

export default async function AboutSection() {
  const { about } = await getCategorizedImages();
  const image1 = about.length > 0 ? about[0] : "/images/awards/about100.jpg";
  const image2 = about.length > 1 ? about[1] : (about.length > 0 ? about[0] : "/images/awards/about200.jpg");

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-start/5 rounded-full blur-xl" />

      {/* Decorative kite */}
      <div className="absolute top-16 right-20 hidden lg:block animate-float">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M30 5 L50 30 L30 55 L10 30 Z" fill="none" stroke="#FF6B57" strokeWidth="2" opacity="0.3" />
          <line x1="30" y1="55" x2="30" y2="75" stroke="#FF6B57" strokeWidth="1.5" opacity="0.3" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* Decorative doodle dots */}
      <div className="absolute bottom-20 left-20 w-24 h-24 deco-dots opacity-20 hidden lg:block" />

      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Stacked Images */}
          <div className="relative animate-slide-in-left">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-xl relative z-10 w-full h-[300px] md:h-[350px]">
                <Image
                  src={image1}
                  alt="Children learning together"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              {/* Secondary image - offset */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20 hidden md:block">
                <Image
                  src={image2}
                  alt="Children playing outdoors"
                  fill
                  sizes="192px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative circle */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-full z-0" />
              <div className="absolute -bottom-4 -left-8 w-16 h-16 bg-primary/10 rounded-lg rotate-12" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="animate-slide-in-right lg:pl-8">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-6 leading-tight">
              Welcome to{" "}
              <span className="gradient-text">
                The Seekers International
              </span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The Seekers International School aims to provide an inclusive, child centered diverse cultural, linguistic and educational background. In line with NCF, the school prioritizes the child’s well-being, curiosity and unique learning needs, fostering holistic development.
            </p>

            {/* Mission & Purpose */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300 border border-blue-100">
                <div className="bg-primary rounded-lg p-2.5 shrink-0">
                  <BookOpen size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-primary uppercase text-xs tracking-wider mb-2">School Mission Statement</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our mission at TLS is to inspire and empower every student to achieve their highest potential in a nurturing and inclusive environment. We are committed to fostering a lifelong love for learning by providing a dynamic curriculum that encourages critical thinking creativity and global citizenship. Through personalized education, dedicated educator and supportive community, we aim to cultivate well-rounded individuals who are equipped with the skills values and resilience necessary to thrive in an ever changing world.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors duration-300 border border-orange-100">
                <div className="bg-accent rounded-lg p-2.5 shrink-0">
                  <Target size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-accent-dark uppercase text-xs tracking-wider mb-2">Purpose</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    This policy outlines our school&apos;s commitment to academic integrity by ensuring that all work submitted by students is authentic, acknowledges the contributions of others, and reflects individual effort. It serves as a guide for students, teachers, and parents to uphold these values in alignment with the IB philosophy.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 group"
            >
              Read More
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
