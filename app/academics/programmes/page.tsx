"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { ChevronRight, Home, GraduationCap, Users, Clock, Sparkles } from "lucide-react";

const programmes = [
  {
    title: "Playgroup",
    age: "1.5 – 2 Years",
    description: "Focuses on social interaction, sensory play, and basic motor skills in a nurturing environment.",
    color: "bg-teal-500",
    image: "/images/classroom-playgroup.png"
  },
  {
    title: "Pre Nursery",
    age: "2 – 3 Years",
    description: "Encourages language development, creative expression, and early literacy through fun activities.",
    color: "bg-blue-500",
    image: "/images/classroom-playgroup.png"
  },
  {
    title: "Nursery",
    age: "3 – 4 Years",
    description: "Introduces foundational concepts in math and science while fostering independence and confidence.",
    color: "bg-orange-500",
    image: "/images/classroom-nursery.png"
  },
  {
    title: "Kindergarten",
    age: "4 – 5 Years",
    description: "Prepares children for formal schooling with enhanced cognitive, physical, and social development.",
    color: "bg-purple-500",
    image: "/images/classroom-nursery.png"
  },
  {
    title: "Primary (1-5)",
    age: "6 – 10 Years",
    description: "Comprehensive curriculum focusing on core subjects with a focus on critical thinking and project-based learning.",
    color: "bg-indigo-500",
    image: "/images/classroom-older.png"
  },
  {
    title: "Middle (6-8)",
    age: "11 – 13 Years",
    description: "Advanced learning phase emphasizing academic rigor, leadership, and emotional intelligence.",
    color: "bg-rose-500",
    image: "/images/classroom-older.png"
  }
];

export default function ProgrammesPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      
      <main className="min-h-screen bg-white pt-[120px] md:pt-[150px]">
        {/* Hero Section */}
        <div className="relative h-[250px] md:h-[400px] bg-primary flex items-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
             <Image 
                src="/images/Hero/2912025234310s1.jpg" 
                alt="Programmes Background" 
                fill 
                className="object-cover"
             />
          </div>
          <div className="max-w-[1280px] mx-auto px-4 w-full relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tighter italic">
              Our <span className="text-accent underline underline-offset-8">Programmes</span>
            </h1>
            <div className="flex items-center gap-2 text-white/80 text-sm md:text-lg font-medium">
                <Link href="/" className="hover:text-accent transition-colors flex items-center gap-1">
                    <Home size={18} />
                    Home
                </Link>
                <ChevronRight size={18} />
                <span>Academics</span>
                <ChevronRight size={18} />
                <span className="text-accent font-bold">Our Programmes</span>
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-black uppercase tracking-widest mb-6 border border-primary/20">
              <Sparkles size={16}/> Educational Excellence
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase italic tracking-tighter leading-tight mb-8">
              Tailored Learning for <br/>
              <span className="text-accent">Every Stage of Growth</span>
            </h2>
            <p className="text-gray-500 text-lg font-medium leading-relaxed">
              We provide a continuous learning journey from early childhood to middle school, ensuring each child receives the right support and challenge at the right time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmes.map((prog, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-[3rem] border-2 border-slate-50 overflow-hidden hover:shadow-[0_40px_80px_rgba(30,58,138,0.1)] transition-all duration-700 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={prog.image} 
                    alt={prog.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute top-6 right-6 px-4 py-2 rounded-2xl ${prog.color} text-white text-xs font-bold shadow-lg`}>
                    Age: {prog.age}
                  </div>
                </div>
                
                <div className="p-8 md:p-10">
                   <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl ${prog.color}/10 flex items-center justify-center text-${prog.color.split('-')[1]}-500 shadow-sm`}>
                         <GraduationCap size={20} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-primary uppercase italic tracking-tighter">{prog.title}</h3>
                   </div>
                   <p className="text-gray-600 font-medium leading-relaxed mb-8">
                      {prog.description}
                   </p>
                   
                   <div className="flex items-center gap-6 pt-6 border-t border-slate-50">
                      <div className="flex items-center gap-2 text-primary/60">
                         <Users size={16} />
                         <span className="text-xs font-bold uppercase tracking-widest">Co-ed</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary/60">
                         <Clock size={16} />
                         <span className="text-xs font-bold uppercase tracking-widest">Full Day</span>
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24 bg-primary rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden text-center">
             <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <Image src="/images/Hero/2912025234310s1.jpg" alt="CTA Background" fill className="object-cover" />
             </div>
             <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase italic tracking-tighter">Ready to Begin the Journey?</h2>
                <p className="text-white/80 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto">
                   Join the family at The Seekers International and give your child the foundation they deserve.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                   <Link href="/contact" className="w-full sm:w-auto bg-accent hover:bg-white hover:text-accent text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl">
                      Enquire Now
                   </Link>
                   <Link href="/admissions/process" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-2xl font-black uppercase tracking-widest transition-all backdrop-blur-sm">
                      Admission Process
                   </Link>
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
