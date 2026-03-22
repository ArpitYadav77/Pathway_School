"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { ChevronRight, Home, BookOpen, FlaskConical, Users, Sparkles } from "lucide-react";

export default function CurriculumOverviewPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      
      <main className="min-h-screen bg-white pt-[120px] md:pt-[150px]">
        {/* Hero Section */}
        <div className="relative h-[250px] md:h-[350px] bg-primary flex items-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
             <Image 
                src="/images/Hero/2912025234310s1.jpg" 
                alt="Curriculum Background" 
                fill 
                className="object-cover"
             />
          </div>
          <div className="max-w-[1280px] mx-auto px-4 w-full relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 uppercase tracking-tighter italic">
              Academic Curriculum
            </h1>
            <div className="flex items-center gap-2 text-white/80 text-sm md:text-base font-medium">
                <Link href="/" className="hover:text-accent transition-colors flex items-center gap-1">
                    <Home size={16} />
                    Home
                </Link>
                <ChevronRight size={16} />
                <span>Academics</span>
                <ChevronRight size={16} />
                <span className="text-accent font-bold">Curriculum Overview</span>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="max-w-[1280px] mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-black uppercase tracking-widest mb-6 border border-accent/20">
              <Sparkles size={16}/> Our Approach
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase italic tracking-tighter leading-none mb-6">
              Empowering Minds Through <br/>
              <span className="text-accent">Practical Learning</span>
            </h2>
            <p className="text-gray-500 text-lg font-medium leading-relaxed">
              At The Seekers International, we believe in a balanced curriculum that combines academic excellence with creative expression and physical well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kindergarten Activities */}
            <div className="group relative bg-[#fffcf9] p-8 md:p-12 rounded-[3.5rem] border-2 border-[#fff3e6] hover:bg-white hover:shadow-2xl hover:border-accent/10 transition-all duration-500">
              <div className="w-16 h-16 bg-accent rounded-3xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-accent/20">
                <BookOpen size={32} />
              </div>
              <h3 className="text-3xl font-black text-primary mb-4 uppercase italic tracking-tighter">Kindergarten Activities</h3>
              <p className="text-gray-600 font-medium leading-relaxed mb-6">
                Our early years program focuses on social-emotional development, literacy, and numeracy through playful exploration and themed learning modules.
              </p>
              <div className="h-1.5 w-16 bg-accent rounded-full group-hover:w-32 transition-all" />
            </div>

            {/* Workshops */}
            <div className="group relative bg-[#f9faff] p-8 md:p-12 rounded-[3.5rem] border-2 border-[#e6edff] hover:bg-white hover:shadow-2xl hover:border-primary/10 transition-all duration-500">
              <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-primary/20">
                <Sparkles size={32} />
              </div>
              <h3 className="text-3xl font-black text-primary mb-4 uppercase italic tracking-tighter">Workshops</h3>
              <p className="text-gray-600 font-medium leading-relaxed mb-6">
                Specialized Summer and Winter workshops designed to enhance creative skills, technical awareness, and overall personality development.
              </p>
              <div className="h-1.5 w-16 bg-primary rounded-full group-hover:w-32 transition-all" />
            </div>

            {/* Lab Activities */}
            <div className="group relative bg-[#fdfafb] p-8 md:p-12 rounded-[3.5rem] border-2 border-[#ffeff2] hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-pink-500 rounded-3xl flex items-center justify-center text-white mb-8 group-hover:scale-110 shadow-lg shadow-pink-500/20">
                <FlaskConical size={32} />
              </div>
              <h3 className="text-3xl font-black text-primary mb-4 uppercase italic tracking-tighter">Lab Activities</h3>
              <p className="text-gray-600 font-medium leading-relaxed mb-6">
                State-of-the-art laboratory experiences providing hands-on opportunities in science, math, and technology to foster analytical thinking.
              </p>
              <div className="h-1.5 w-16 bg-pink-500 rounded-full group-hover:w-32 transition-all" />
            </div>

            {/* Beyond Activities */}
            <div className="group relative bg-[#fafff9] p-8 md:p-12 rounded-[3.5rem] border-2 border-[#e6ffed] hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-secondary rounded-3xl flex items-center justify-center text-white mb-8 group-hover:scale-110 shadow-lg shadow-secondary/20">
                <Users size={32} />
              </div>
              <h3 className="text-3xl font-black text-primary mb-4 uppercase italic tracking-tighter">Beyond Activities</h3>
              <p className="text-gray-600 font-medium leading-relaxed mb-6">
                From sports and skating to V.R. technology and karaoke, our extracurricular programs ensure our students grow beyond traditional classrooms.
              </p>
              <div className="h-1.5 w-16 bg-secondary rounded-full group-hover:w-32 transition-all" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
