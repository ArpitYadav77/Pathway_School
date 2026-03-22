"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { ChevronRight, Home, Bus, Thermometer, Utensils, ShieldCheck, CheckCircle2, Clock, Baby } from "lucide-react";

export default function FacilitiesPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      
      <main className="min-h-screen bg-white pt-[120px] md:pt-[150px]">
        {/* Hero Section */}
        <div className="relative h-[300px] md:h-[450px] bg-primary flex items-center overflow-hidden">
          <div className="absolute inset-0 opacity-40">
             <Image 
                src="/Facilities/image.png" 
                alt="Our Best Facilities" 
                fill 
                className="object-cover"
             />
          </div>
          <div className="max-w-[1280px] mx-auto px-4 w-full relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 uppercase tracking-tighter italic">
              Empowering <br/>
              <span className="text-accent underline decoration-white decoration-4 underline-offset-8">Facilities</span>
            </h1>
            <div className="flex items-center gap-2 text-white/80 text-sm md:text-base font-medium">
                <Link href="/" className="hover:text-accent transition-colors flex items-center gap-1">
                    <Home size={16} />
                    Home
                </Link>
                <ChevronRight size={16} />
                <span className="text-accent font-bold">Facilities</span>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="max-w-[1280px] mx-auto px-4 py-16 md:py-24">
          
          {/* Main Highlights */}
          <div className="space-y-32">
            
            {/* Transportation */}
            <section className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="w-full lg:w-1/2 order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-black uppercase tracking-widest mb-6 border border-primary/20">
                     <Bus size={16} strokeWidth={3}/> Transportation
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-primary uppercase italic tracking-tighter mb-6 leading-none">
                    Safe & Secure <br/> 
                    <span className="text-accent">Campus Transport</span>
                  </h2>
                  <p className="text-gray-600 text-lg font-medium leading-relaxed mb-8">
                    We offer safe and secure transport to each and every student. Our fleet is maintained to the highest safety standards, ensuring a comfortable and reliable commute for your little ones every day.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                     {[
                       "GPS Tracking", "Trained Staff", "Regular Checks", "Safe Driving"
                     ].map((item, idx) => (
                       <div key={idx} className="flex items-center gap-2 text-primary font-bold">
                          <CheckCircle2 size={18} className="text-accent" />
                          <span>{item}</span>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="w-full lg:w-1/2 order-1 lg:order-2">
                  <div className="relative h-[350px] md:h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                     <Image 
                        src="/Facilities/transport.png" 
                        alt="Transportation" 
                        fill 
                        className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                  </div>
               </div>
            </section>

            {/* Temperature Control Classrooms */}
            <section className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="w-full lg:w-1/2">
                  <div className="relative h-[350px] md:h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                     <Image 
                        src="/Facilities/classrom1.png" 
                        alt="Classrooms" 
                        fill 
                        className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-accent/40 to-transparent" />
                  </div>
               </div>
               <div className="w-full lg:w-1/2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-black uppercase tracking-widest mb-6 border border-accent/20">
                     <Thermometer size={16} strokeWidth={3}/> Climate Control
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-primary uppercase italic tracking-tighter mb-6 leading-none">
                    Temperature Controlled <br/> 
                    <span className="text-accent">Classrooms</span>
                  </h2>
                  <p className="text-gray-600 text-lg font-medium leading-relaxed mb-8">
                    Our school is equipped with high-standard temperature control systems, maintaining an ideal learning environment regardless of external weather conditions. This ensures consistent comfort and focus for all students.
                  </p>
                  <ul className="space-y-4">
                     {[
                       "Optimized Airflow", "Smart Heating & Cooling", "Pure Air Filtration", "Constant Monitoring"
                     ].map((item, idx) => (
                       <li key={idx} className="flex items-center gap-4 text-gray-700 font-bold">
                          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                             <ShieldCheck size={18} />
                          </div>
                          {item}
                       </li>
                     ))}
                  </ul>
               </div>
            </section>

            {/* Food & Nutrition */}
            <section className="bg-primary/5 rounded-[4rem] p-8 md:p-16 border border-primary/10">
               <div className="flex flex-col lg:flex-row gap-16 items-center">
                  <div className="w-full lg:w-1/2">
                     <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-black uppercase tracking-widest mb-6 border border-green-500/20">
                        <Utensils size={16} strokeWidth={3}/> Food & Nutrition
                     </div>
                     <h2 className="text-4xl md:text-5xl font-black text-primary uppercase italic tracking-tighter mb-10 leading-[0.9]">
                        Healthy Minds <br/> 
                        <span className="text-accent">Fuelled by Fresh Nutrition</span>
                     </h2>
                     <div className="space-y-8">
                        <div className="bg-white p-6 rounded-3xl shadow-lg border-l-8 border-green-500 transform hover:-rotate-1 transition-transform">
                           <p className="text-gray-700 font-bold leading-relaxed text-lg">
                              Warm and fresh food is provided to the playgroup and pre nursery students as per the pre scheduled menu.
                           </p>
                        </div>
                        <div className="bg-white p-6 rounded-3xl shadow-lg border-l-8 border-orange-500 transform hover:rotate-1 transition-transform">
                           <p className="text-gray-700 font-bold leading-relaxed text-lg">
                              Breakfast, Lunch and Evening snacks are provided to the daycare kids as per the pre scheduled menu.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="w-full lg:w-1/2 relative">
                     <div className="relative h-[400px] rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white">
                        <Image 
                           src="/Facilities/classroom.png" 
                           alt="Food & Nutrition" 
                           fill 
                           className="object-cover" 
                        />
                        <div className="absolute top-8 left-8 bg-white/95 backdrop-blur px-6 py-4 rounded-3xl shadow-xl flex items-center gap-4">
                           <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white">
                              <Utensils size={24} />
                           </div>
                           <div>
                              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Monthly Plan</p>
                              <p className="text-primary font-black uppercase tracking-tighter">Scheduled Meals</p>
                           </div>
                        </div>
                     </div>
                     {/* Decorative Elements */}
                     <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent rounded-full -z-10 animate-float" />
                  </div>
               </div>
            </section>

          </div>

          {/* Quick Stats at bottom */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32">
             {[
               { icon: <ShieldCheck className="text-accent"/>, title: "100% Secure", tag: "CCTV Enabled" },
               { icon: <Clock className="text-primary"/>, title: "On Time", tag: "Timely Commute" },
               { icon: <Baby className="text-secondary"/>, title: "Holistic Care", tag: "Nurturing Environment" }
             ].map((stat, idx) => (
               <div key={idx} className="bg-white p-8 rounded-[3rem] text-center border border-gray-100 hover:shadow-2xl transition-all group">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                     {stat.icon}
                  </div>
                  <h4 className="text-2xl font-black text-primary uppercase italic tracking-tighter mb-1">{stat.title}</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{stat.tag}</p>
               </div>
             ))}
          </div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
