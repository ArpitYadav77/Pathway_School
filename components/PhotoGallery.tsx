import Image from "next/image";
import { getGallery } from "@/lib/sanityQueries";

export default async function PhotoGallery() {
  const galleries = await getGallery();
  
  // Flatten galleries into individual photos
  const photos = galleries
    ? galleries.flatMap((g: any) =>
        (g.images || []).map((img: string) => ({
          image: img,
          title: g.title,
        }))
      )
    : [];
  return (
    <section id="gallery" className="py-20 bg-bg-light">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Photo Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            Capturing Beautiful Moments
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            A glimpse into the wonderful experiences and cherished memories
            created at our school every day.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Gallery Grid */}
        {photos.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No gallery images available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {photos.map((photo: any, i: number) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden shadow-md cursor-pointer group relative img-zoom animate-fade-in-up ${
                  i === 0 || i === 5 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div
                  className={`relative ${
                    i === 0 || i === 5 ? "h-[300px] sm:h-full" : "h-[200px] sm:h-[220px]"
                  }`}
                >
                  <Image
                    src={photo.image}
                    alt={photo.title || "Gallery Image"}
                    fill
                    className="object-cover"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-center transform translate-y-4 group-hover:translate-y-0">
                      <h3 className="text-white font-bold text-lg">
                        {photo.title}
                      </h3>
                      <div className="w-8 h-0.5 bg-accent mx-auto mt-2" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
