"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { ChevronRight, Home, X, ChevronLeft, Maximize2 } from "lucide-react";

const reviews = [
  "29120202431901.jpeg",
  "29120202503601.jpeg",
  "29120202505701.jpeg",
  "2912020251402.jpeg",
  "2912020310004.jpeg",
  "29120203101506.jpeg",
  "2912020310805.jpeg",
  "29120203172207.jpeg",
  "29120203173008.jpeg",
  "29120203174509.jpeg",
  "29120203175410.jpeg",
  "29120203181013.jpeg",
  "2912020318111.jpeg",
  "29120203181614.jpeg",
  "29120203182115.jpeg",
  "29120203182616.jpeg",
  "29120203183217.jpeg",
  "29120203184318.jpeg",
  "29120203184519.jpeg",
  "2912020318512.jpeg",
  "29120203185820.jpeg",
  "29120203191523.jpeg",
  "29120203192724.jpeg",
  "29120203193025.jpeg",
  "2912020319321.jpeg",
  "29120203193826.jpeg",
  "29120203194327.jpeg",
  "29120203195628.jpeg",
  "2912020319822.jpeg",
  "29120203201231.jpeg",
  "2912020320129.jpeg",
  "29120203202632.jpeg",
  "29120203203033.jpeg",
  "29120203204334.jpeg",
  "29120203204935.jpeg",
  "2912020320730.jpeg",
  "2912020395203.jpeg",
];

export default function ParentsSpeakPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isSliding, setIsSliding] = useState(false);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setIsSliding(true);
    setTimeout(() => {
      setSelectedIndex((prev) => (prev! + 1) % reviews.length);
      setIsSliding(false);
    }, 200);
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setIsSliding(true);
    setTimeout(() => {
      setSelectedIndex((prev) => (prev! - 1 + reviews.length) % reviews.length);
      setIsSliding(false);
    }, 200);
  }, [selectedIndex]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev, handleClose]);

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="min-h-screen bg-[#f8f9fa] pt-[120px] md:pt-[150px] pb-20 gallery-section">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 px-4">
          <Link href="/" className="hover:text-accent transition-colors flex items-center gap-1">
            <Home size={14} />
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-gray-400">Parents</span>
          <ChevronRight size={14} />
          <span className="text-secondary font-bold">Parent's Speak</span>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12 px-4">
          <h1 className="text-3xl md:text-4xl font-black text-secondary mb-4 uppercase tracking-wider">
            Parent's <span className="text-accent text-outline-small">Speak</span>
          </h1>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 gallery-grid">
          {reviews.map((img, index) => (
            <div
              key={index}
              className="gallery-item group relative cursor-pointer aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={`/images/Parents_review/${img}`}
                alt={`Parent Review ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Maximize2 className="text-white w-10 h-10 transform scale-75 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 animate-in fade-in duration-300 gallery-modal"
          onClick={handleClose}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
            onClick={(e) => { e.stopPropagation(); handleClose(); }}
          >
            <X size={40} />
          </button>

          {/* Navigation Arrows */}
          <button 
            className="nav-arrow absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all z-[110] bg-white/10 p-3 rounded-full hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          >
            <ChevronLeft size={40} />
          </button>
          
          <button 
            className="nav-arrow absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all z-[110] bg-white/10 p-3 rounded-full hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
          >
            <ChevronRight size={40} />
          </button>

          {/* Modal Content */}
          <div 
            className={`relative max-w-[90vw] max-h-[85vh] transition-all duration-200 ${isSliding ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-auto bg-white p-2 rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <img
                src={`/images/Parents_review/${reviews[selectedIndex]}`}
                alt="Full Review"
                className="modal-image max-w-full max-h-[80vh] object-contain rounded-sm"
              />
              <div className="mt-4 text-center text-gray-400 text-sm font-medium">
                Review {selectedIndex + 1} of {reviews.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles for text-outline-small */}
      <style jsx>{`
        .text-outline-small {
          text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        }
      `}</style>
    </main>
    <Footer />
    <FloatingButtons />
    </>
  );
}
