"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { ChevronRight, Home, Clock, Sun, Snowflake, GraduationCap } from "lucide-react";

export default function SchoolTimingPage() {
  const timingData = [
    {
      category: "Playgroup",
      icon: <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600"><Clock size={24} /></div>,
      description: "Early childhood development sessions",
      timings: [
        { season: "Summers", time: "09:30 AM to 12:30 PM", icon: <Sun className="text-orange-500" size={18} /> },
        { season: "Winters", time: "10:00 AM to 01:00 PM", icon: <Snowflake className="text-blue-500" size={18} /> }
      ]
    },
    {
      category: "Nursery to UKG",
      icon: <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent"><GraduationCap size={24} /></div>,
      description: "Foundation stage learning hours",
      timings: [
        { season: "Summers", time: "9:30 AM to 01:30 PM", icon: <Sun className="text-orange-500" size={18} /> },
        { season: "Winters", time: "10:00 AM to 02:00 PM", icon: <Snowflake className="text-blue-500" size={18} /> }
      ]
    },
    {
      category: "Class 1 to 8th",
      icon: <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600"><Clock size={24} /></div>,
      description: "Primary and Middle school hours",
      timings: [
        { season: "Summers", time: "08:00 AM to 02:00 PM", icon: <Sun className="text-orange-500" size={18} /> },
        { season: "Winters", time: "09:00 AM to 03:00 PM", icon: <Snowflake className="text-blue-500" size={18} /> }
      ]
    }
  ];

  return (
    <>
      <TopBar />
      <Navbar />
      
      <main className="min-h-screen bg-white pt-[120px] md:pt-[150px]">
        {/* Banner Section */}
        <div className="relative h-[250px] md:h-[300px] bg-primary flex items-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
             <Image 
                src="/images/Fun/226201821023IMG_3181.JPG" 
                alt="Background" 
                fill 
                className="object-cover"
             />
          </div>
          <div className="max-w-[1280px] mx-auto px-4 w-full relative z-10">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
              School Timings
            </h1>
            <div className="flex items-center gap-2 text-white/80 text-sm">
                <Link href="/" className="hover:text-accent transition-colors flex items-center gap-1">
                    <Home size={14} />
                    Home
                </Link>
                <ChevronRight size={14} />
                <span>Admissions</span>
                <ChevronRight size={14} />
                <span className="text-accent font-bold">School Timings</span>
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Left Visual Section */}
            <div className="w-full lg:w-1/2 relative lg:sticky lg:top-[180px]">
               <div className="relative">
                  {/* Decorative Elements */}
                  <div className="absolute -top-10 -left-10 w-32 h-32 opacity-80 animate-float hidden md:block">
                     <Image src="/animation/boy_pencil-removebg-preview.png" alt="Decoration" width={150} height={150} />
                  </div>

                  {/* Main Image Overlay Effect */}
                  <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white z-20">
                     <Image 
                        src="/images/Fun/3072018201057IMG_4563.jpg" 
                        alt="Students" 
                        width={800} 
                        height={600} 
                        className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60" />
                     <div className="absolute bottom-6 left-6 text-white">
                        <p className="text-accent font-black text-xs uppercase tracking-widest mb-1">Morning Assembly</p>
                        <h3 className="text-xl font-bold">Start your day with joy!</h3>
                     </div>
                  </div>

                  {/* Secondary Image Overlapping */}
                  <div className="absolute -bottom-16 -right-10 w-[70%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-30 hidden md:block rotate-3 hover:rotate-0 transition-transform duration-500">
                     <Image 
                        src="/images/Fun/2520186158ADSC_0004.jpg" 
                        alt="Play Time" 
                        width={600} 
                        height={400} 
                        className="w-full aspect-[4/3] object-cover"
                     />
                  </div>
               </div>
            </div>

            {/* Right Content Section */}
            <div className="w-full lg:w-1/2 space-y-10">
              <div className="relative px-6 py-2 border-l-8 border-accent mb-8">
                <h2 className="text-3xl font-black text-primary uppercase italic">Daily Schedule</h2>
                <p className="text-gray-500 mt-2 font-medium">Providing structured learning environments for every age group.</p>
              </div>

              <div className="space-y-6">
                {timingData.map((item, index) => (
                  <div 
                    key={index} 
                    className="group bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                      {item.icon}
                      <div>
                        <h3 className="text-xl font-black text-primary uppercase tracking-tight">{item.category}</h3>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.timings.map((t, idx) => (
                        <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 group-hover:border-accent/20 transition-colors">
                          <div className="flex items-center gap-2 mb-3">
                             <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                                {t.icon}
                             </div>
                             <span className="font-black text-primary uppercase tracking-tighter text-sm">{t.season}</span>
                          </div>
                          <p className="text-lg font-bold text-accent">{t.time}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Informational Note */}
              <div className="bg-primary p-8 rounded-[2.5rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none" />
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div className="space-y-2">
                    <p className="font-bold text-lg">Punctuality Matters</p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      We encourage parents to drop off their children 10 minutes before the session starts to ensure they don't miss the morning assembly and physical activities.
                    </p>
                  </div>
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
