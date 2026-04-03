"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronLeft, Play, Loader2, Youtube } from "lucide-react";
import { getVideos, SanityVideo } from "@/lib/sanityQueries";

export default function VideoGalleryPage() {
  const [videos, setVideos] = useState<SanityVideo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getVideos().then((data) => {
      // If Sanity returns nothing, use the demo video as a fallback
      if (!data || data.length === 0) {
        setVideos([
          {
            _id: "demo-1",
            title: "School Highlights",
            url: "https://youtu.be/TAEq9OmWVn0?si=s1r1AhxbPospNkuC",
          },
        ]);
      } else {
        setVideos(data);
      }
      setIsLoading(false);
    });
  }, []);

  const getEmbedUrl = (url: string) => {
    let videoId = "";
    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    } else if (url.includes("youtube.com/watch?v=")) {
      videoId = url.split("v=")[1].split("&")[0];
    } else if (url.includes("youtube.com/embed/")) {
      videoId = url.split("embed/")[1].split("?")[0];
    }
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <>
      <TopBar />
      <Navbar />
      
      <main className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-4">
          
          {/* Header */}
          <div className="mb-16 text-center relative flex flex-col md:flex-row items-center justify-center">
            <Link
              href="/"
              className="md:absolute left-0 top-1/2 md:-translate-y-1/2 flex items-center gap-2 text-primary hover:text-accent font-bold transition-all bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md border border-gray-100 group"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
            
            <div className="pt-4">
              <span className="text-accent font-black text-sm uppercase tracking-[0.3em] block mb-3">
                Multimedia Gallery
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-[#003366] uppercase italic tracking-tighter leading-tight translate-y-2">
                Video <span className="text-accent underline underline-offset-8">Gallery</span>
              </h1>
              <div className="w-40 h-2 bg-accent mx-auto mt-10 rounded-full" />
            </div>
          </div>

          {/* Video Grid */}
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <Loader2 className="animate-spin text-accent" size={48} />
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Fetching Videos...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              {videos.map((video, index) => (
                <div 
                  key={video._id} 
                  className="flex flex-col gap-6 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-white/50 bg-white group-hover:-translate-y-2 transition-all duration-700">
                    <iframe
                      src={getEmbedUrl(video.url)}
                      title={video.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="px-4">
                    <div className="flex items-center gap-3 mb-2">
                       <div className="p-2 bg-red-50 text-red-600 rounded-xl">
                          <Youtube size={18} />
                       </div>
                       <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">YouTube Content</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-primary uppercase italic tracking-tighter leading-none group-hover:text-accent transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          {videos.length === 0 && !isLoading && (
            <div className="text-center py-32 bg-white rounded-[4rem] shadow-sm border border-gray-100">
               <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Play size={32} className="text-gray-200" />
               </div>
               <p className="text-gray-400 text-lg font-bold uppercase tracking-widest leading-tight">
                  No videos uploaded yet.<br/>
                  <span className="text-xs mt-2 block font-medium opacity-50">Check back later or visit our YouTube channel.</span>
               </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
