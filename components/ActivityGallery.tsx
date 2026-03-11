import Image from "next/image";
import { getCategorizedImages } from "@/lib/imageUtils";

export default async function ActivityGallery() {
  const { activities } = await getCategorizedImages();

  // Create objects with proper titles
  const activityItems = activities.map((img) => {
    const filename = img.split('/').pop()?.split('.')[0] || "Activity";
    const title = filename.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return { image: img, title };
  });

  if (activityItems.length === 0) return null;

  return (
    <section className="py-16 bg-bg-light">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Activities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            Fun & Learning Activities
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Activity Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activityItems.map((activity, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${(i % 4) * 150}ms` }}
            >
              <div className="aspect-[4/3] relative img-zoom">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-lg group-hover:translate-y-0 translate-y-1 transition-transform duration-300 truncate">
                  {activity.title}
                </h3>
                <div className="w-8 h-0.5 bg-accent mt-2 group-hover:w-16 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
