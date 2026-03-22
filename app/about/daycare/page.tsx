"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { ChevronRight, Home, Clock, Baby, GraduationCap, Star, ShieldCheck, Gamepad2, Info, Heart } from "lucide-react";

export default function DaycarePage() {
  return (
    <>
      <TopBar />
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 pt-[120px] md:pt-[150px]">
        {/* Hero Section */}
        <div className="relative h-[300px] md:h-[450px] bg-primary flex items-center overflow-hidden">
          <div className="absolute inset-0 opacity-30">
             <Image 
                src="/images/Hero/25201861654ADSC_0254.jpg" 
                alt="Teresa House Daycare" 
                fill 
                className="object-cover"
             />
          </div>
          <div className="max-w-[1280px] mx-auto px-4 w-full relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 uppercase tracking-tighter">
              TERESA HOUSE <br/>
              <span className="text-accent underline decoration-white decoration-4 underline-offset-8">(DAYCARE)</span>
            </h1>
            <div className="flex items-center gap-2 text-white/80 text-sm md:text-base font-medium">
                <Link href="/" className="hover:text-accent transition-colors flex items-center gap-1">
                    <Home size={16} />
                    Home
                </Link>
                <ChevronRight size={16} />
                <span>About</span>
                <ChevronRight size={16} />
                <span className="text-accent font-bold">Daycare</span>
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 py-16 md:py-24">
          
          {/* Timings Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              { type: "Full Day", time: "9:00 - 5:30 pm", color: "bg-primary" },
              { type: "A.M Timings", time: "9:00 - 1:30 pm", color: "bg-accent" },
              { type: "P.M Timings", time: "1:30 - 5:30 pm", color: "bg-secondary" },
            ].map((timing, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2.5rem] shadow-xl border-t-8 border-primary relative group hover:-translate-y-2 transition-transform duration-300" style={{ borderTopColor: timing.color === 'bg-accent' ? '#ff6b6b' : (timing.color === 'bg-secondary' ? '#2d334a' : '#1a5b9c') }}>
                <div className={`w-12 h-12 ${timing.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-black text-gray-800 mb-2 uppercase">{timing.type}</h3>
                <p className="text-gray-500 font-bold">{timing.time}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Infants & Toddlers */}
            <div className="space-y-8">
              <section className="bg-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group border border-gray-100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full group-hover:scale-110 transition-transform" />
                <h2 className="text-3xl font-black text-primary mb-8 flex items-center gap-4 uppercase italic">
                   <Baby className="text-accent" size={32} /> For Infants
                </h2>
                <ul className="space-y-4">
                  {[
                    "Balanced Diet",
                    "Baby yoga, potty training",
                    "Music movements",
                    "Complimentary sessions with pediatrician",
                    "Baby massage and exercises"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium text-lg capitalize">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-primary p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-tl-full" />
                <h2 className="text-3xl font-black mb-8 flex items-center gap-4 uppercase italic tracking-tighter">
                   <GraduationCap className="text-accent" size={32} /> Toddlers Seekers
                </h2>
                <ul className="space-y-4">
                  {[
                    "In house cafetaria",
                    "Homework help",
                    "Special Summer/Winter Workshops"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/90 font-medium text-lg leading-snug">
                       <Star size={18} className="text-accent fill-accent" />
                       {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* What we offer */}
            <div className="space-y-8">
               <section className="bg-white p-10 rounded-[3.5rem] border-2 border-primary/5 shadow-xl relative">
                  <div className="mb-8">
                    <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-xs font-black uppercase tracking-widest mb-4">
                      Why Choose Us?
                    </span>
                    <h2 className="text-4xl font-black text-primary uppercase italic tracking-tighter">What we offer you?</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                    {[
                      { icon: <Heart size={18}/>, text: "A home away from Home" },
                      { icon: <ShieldCheck size={18}/>, text: "Full time CCTV surveillance" },
                      { icon: <Clock size={18}/>, text: "Temp controlled classrooms" },
                      { icon: <Info size={18}/>, text: "Coaching classes" },
                      { icon: <Baby size={18}/>, text: "Healthy balanced diet (individual tastes)" },
                      { icon: <Star size={18}/>, text: "V.R technology system (Virtual Reality)" },
                      { icon: <Gamepad2 size={18}/>, text: "Indoor playhouse" }
                    ].map((offer, idx) => (
                      <div key={idx} className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all transform group-hover:rotate-12">
                          {offer.icon}
                        </div>
                        <span className="text-gray-700 font-semibold text-sm leading-tight">{offer.text}</span>
                      </div>
                    ))}
                  </div>
               </section>

               <section className="bg-accent p-10 rounded-[3rem] text-white shadow-2xl relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full animate-pulse" />
                  <h2 className="text-3xl font-black mb-8 uppercase italic tracking-tighter leading-[0.9]">
                    After School <br/> activities
                  </h2>
                  <div className="grid grid-cols-2 gap-4 text-xs font-bold uppercase tracking-tight">
                    {[
                      "Self defence", "Moral Values", "Eating etiqnettes", "Role Plays", 
                      "Spoken english", "Art/Craft", "Animations", "Homework support", 
                      "Skating", "Dance/Aerobics", "Karoake singing", "Virtual Reality"
                    ].map((act, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-white/10 p-2 rounded-xl border border-white/5 hover:bg-white hover:text-accent transition-colors">
                        <ChevronRight size={12} />
                        {act}
                      </div>
                    ))}
                  </div>
               </section>
            </div>

          </div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
