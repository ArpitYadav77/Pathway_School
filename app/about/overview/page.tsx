"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { ChevronRight, Home, Sparkles, Target, Heart, BookOpen } from "lucide-react";

export default function AboutOverviewPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      
      <main className="min-h-screen bg-white pt-[120px] md:pt-[150px]">
        {/* Hero Section */}
        <div className="relative h-[250px] md:h-[350px] bg-primary flex items-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
             <Image 
                src="/images/Fun/2672018233332IMG_2694.jpg" 
                alt="Background" 
                fill 
                className="object-cover"
             />
          </div>
          <div className="max-w-[1280px] mx-auto px-4 w-full relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 uppercase tracking-tighter">
              About Our School
            </h1>
            <div className="flex items-center gap-2 text-white/80 text-sm md:text-base font-medium">
                <Link href="/" className="hover:text-accent transition-colors flex items-center gap-1">
                    <Home size={16} />
                    Home
                </Link>
                <ChevronRight size={16} />
                <span>About</span>
                <ChevronRight size={16} />
                <span className="text-accent font-bold">Overview</span>
            </div>
          </div>
          
          {/* Decorative Shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="max-w-[1280px] mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Visual Section - Left Side */}
            <div className="w-full lg:w-1/2 relative space-y-8">
               <div className="relative z-20">
                  {/* Decorative Elements */}
                  <div className="absolute -top-12 -left-12 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse" />
                  
                  <div className="relative group rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                     <Image 
                        src="/images/Fun/school_building_main.png" 
                        alt="Seekers International Campus" 
                        width={800} 
                        height={600} 
                        className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     <div className="absolute bottom-8 left-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                        <p className="font-black text-2xl uppercase italic">Excellence in Education</p>
                     </div>
                  </div>

                  {/* Overlapping Secondary Image */}
                  <div className="absolute -bottom-16 -right-12 w-[65%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-30 hidden md:block group/small h-auto rotate-3 hover:rotate-0 transition-all duration-500">
                     <Image 
                        src="/images/Fun/25201861654ADSC_0104.jpg" 
                        alt="Learning in Action" 
                        width={500} 
                        height={350} 
                        className="w-full aspect-square md:aspect-video object-cover group-hover/small:scale-105 transition-transform duration-700"
                     />
                  </div>
                  
                  {/* Animation Overlay */}
                  <div className="absolute -top-20 -right-20 w-48 h-48 pointer-events-none animate-float hidden md:block">
                     <Image src="/animation/boy_pencil-removebg-preview.png" alt="Decoration" width={200} height={200} />
                  </div>
               </div>

               {/* Quick Stats/Highlights */}
               <div className="grid grid-cols-2 gap-4 mt-20 md:mt-32">
                  <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 text-center hover:bg-white hover:shadow-xl transition-all group">
                     <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Target size={24} />
                     </div>
                     <p className="text-3xl font-black text-primary mb-1 uppercase tracking-tighter">NCF</p>
                     <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Aligned Curriculum</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 text-center hover:bg-white hover:shadow-xl transition-all group">
                     <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Sparkles size={24} />
                     </div>
                     <p className="text-3xl font-black text-accent mb-1 uppercase tracking-tighter">Practical</p>
                     <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Hands-on Learning</p>
                  </div>
               </div>
            </div>

            {/* Content Section - Right Side */}
            <div className="w-full lg:w-1/2 space-y-12">
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-black uppercase tracking-widest">
                  <Sparkles size={16} />
                  About Us
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-primary uppercase italic tracking-tighter leading-[0.9]">
                  Welcome to <br />
                  <span className="text-accent underline decoration-primary decoration-4 underline-offset-8">The Seekers International</span>
                </h2>
                <div className="w-24 h-2 bg-accent rounded-full mb-8" />
                
                <p className="text-gray-700 leading-relaxed text-lg font-medium">
                  The Little Seekers provide early, primary and middle year education, and is aspiring to start secondary and higher secondary education also at our new sight, i.e seona road, Patiala, behind D-mart.
                </p>
              </div>

              {/* Preschool Section */}
              <section className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/50 rounded-bl-[4rem] group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-2xl font-black text-primary mb-4 flex items-center gap-3">
                  <span className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-white">
                    <Heart size={24} />
                  </span>
                  Preschool Programs
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The preschool programs (Age 1.5Yrs to 5 Yrs) are designed to further children's social and cognitive development. The preschool programs also known as playgroup, nursery school, pre primary school or day care is an educational establishment or learning space offering early childhood education to children before they began compulsory education at primary school.
                </p>
              </section>

              {/* Primary & Middle Section */}
              <section className="bg-white p-8 rounded-[2.5rem] border-2 border-primary/5 shadow-lg relative group">
                <h3 className="text-2xl font-black text-primary mb-4 flex items-center gap-3">
                  <span className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                    <BookOpen size={24} />
                  </span>
                  Primary & Middle School
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Primary and Middle school is for children who are 6-13 years old. It is designed to provide fundamental skills such as writing, learning and reading. We focus on everything child knowledge base to a good level. We aim at improving at communication and social skill by giving every child a stage to perform and taking them for competition at different level. <span className="text-accent font-black uppercase italic tracking-tight">The little seeker is all about education with fun.</span>
                </p>
              </section>

              {/* Philosophy Section */}
              <section className="bg-primary p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-full pointer-events-none group-hover:rotate-12 transition-transform duration-1000" />
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter italic">Unique Educational Philosophy</h3>
                <div className="space-y-4 text-white/90 leading-relaxed">
                  <p>
                    The school stands out for its commitment to a unique educational philosophy that emphasizes understanding over rote memorization. Guided by the belief that true learning is best acquired through a practical, hands-on approach, Little Seekers integrates thematic teaching methods into its curriculum.
                  </p>
                  <div className="h-0.5 bg-accent/30 w-full" />
                  <p>
                    This ensures that students not only grasp concepts but also learn to apply them in real-life situations. By fostering curiosity, creativity, and critical thinking, the school provides a strong foundation for young learners to grow into confident and well-rounded individuals.
                  </p>
                </div>
              </section>

              {/* Decorative Animation Bottom */}
              <div className="flex justify-center pt-8">
                 <div className="animate-bounce-subtle">
                    <Image src="/animation/girl_pencil-removebg-preview.png" alt="Decoration" width={150} height={150} />
                 </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
