"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { ChevronRight, Home, CheckCircle2, FileText, Calendar, Clock, Phone, MapPin } from "lucide-react";

export default function AdmissionProcessPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      
      <main className="min-h-screen bg-white pt-[120px] md:pt-[150px]">
        {/* Banner Section */}
        <div className="relative h-[250px] md:h-[300px] bg-primary flex items-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
             <Image 
                src="/images/Fun/2672018233332IMG_2694.jpg" 
                alt="Background" 
                fill 
                className="object-cover"
             />
          </div>
          <div className="max-w-[1280px] mx-auto px-4 w-full relative z-10">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              Admission Procedure
            </h1>
            <div className="flex items-center gap-2 text-white/80 text-sm">
                <Link href="/" className="hover:text-accent transition-colors flex items-center gap-1">
                    <Home size={14} />
                    Home
                </Link>
                <ChevronRight size={14} />
                <span>Admissions</span>
                <ChevronRight size={14} />
                <span className="text-accent font-bold">Admission Procedure</span>
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Visual Section - Left */}
            <div className="w-full lg:w-1/2 relative lg:sticky lg:top-[180px]">
               {/* Decorative Kite */}
               <div className="absolute -top-10 -left-10 w-32 h-32 opacity-80 animate-float hidden md:block">
                  <Image src="/animation/boy_pencil-removebg-preview.png" alt="Decoration" width={150} height={150} />
               </div>
               
               <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                  <Image 
                    src="/images/Fun/25201861654ADSC_0104.jpg" 
                    alt="Admission Process" 
                    width={800} 
                    height={600} 
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  
                  {/* Floating Highlight Card */}
                  <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform hidden md:block">
                     <p className="text-white font-black text-xl">Session 2025-26</p>
                     <p className="text-white/90 text-sm font-bold">Admissions Now Open!</p>
                  </div>
               </div>

               {/* Second Image Layered */}
               <div className="mt-8 relative hidden md:block">
                  <div className="absolute -top-20 -right-10 w-48 h-48 animate-float-rotate-slow pointer-events-none">
                     <Image src="/animation/girl_pencil-removebg-preview.png" alt="Decoration" width={200} height={200} />
                  </div>
                  <div className="max-w-[80%] mx-auto rounded-3xl overflow-hidden shadow-xl border-4 border-white rotate-[-2deg]">
                     <Image 
                        src="/images/Fun/25201861654ADSC_0150.jpg" 
                        alt="Classroom" 
                        width={600} 
                        height={400} 
                        className="w-full"
                     />
                  </div>
               </div>
            </div>

            {/* Content Section - Right */}
            <div className="w-full lg:w-1/2 space-y-12">
              
              {/* Special Offers Tile */}
              <div className="bg-[#fdf8e6] p-8 rounded-[2rem] border-2 border-accent/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-[4rem] flex items-start justify-end p-4">
                   <CheckCircle2 className="text-accent" size={32} />
                </div>
                <h2 className="text-2xl font-black text-primary mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white">
                    <Calendar size={20} />
                  </span>
                  Session 2025-26
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white/50 rounded-2xl">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                      <FileText size={20} />
                    </div>
                    <div>
                      <p className="font-black text-primary">No admission fees.</p>
                      <p className="text-sm text-gray-500">Limited time offer for early birds.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white/50 rounded-2xl border-l-4 border-accent">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="font-black text-primary uppercase tracking-tight">50% Waiver on annual charges</p>
                      <p className="text-accent font-bold">Valid till 15th March 2025.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Admission Policy */}
              <section className="space-y-6">
                <div className="relative px-6 py-2 border-l-8 border-accent">
                  <h2 className="text-3xl font-black text-primary uppercase italic">Admission Policy</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  The admission policy of **The Little Seekers School** is inclusive, transparent and guided by our commitment to the developing internationally minded, lifelong learners.
                </p>

                <div className="grid gap-8 mt-10">
                  <div className="bg-gray-50 p-8 rounded-3xl group hover:bg-white hover:shadow-xl transition-all border border-gray-100">
                    <h3 className="text-xl font-black text-primary mb-4 flex items-center gap-3">
                      <span className="text-accent font-black text-2xl">1.</span> Philosophy
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      The Little Seekers School aims to provide an inclusive, child centered diverse cultural, linguistic and educational background. In line with NCF, the school prioritizes the child&apos;s well-being, curiosity and unique learning needs, fostering holistic development.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-3xl group hover:bg-white hover:shadow-xl transition-all border border-gray-100">
                    <h3 className="text-xl font-black text-secondary mb-4 flex items-center gap-3">
                      <span className="text-accent font-black text-2xl">2.</span> Objectives
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Ensure fair and inclusive admission practice for all children.",
                        "Provide opportunities to every child irrespective of their diverse backgrounds and physical abilities."
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3 text-gray-600">
                          <CheckCircle2 size={20} className="text-accent shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-3xl group hover:bg-white hover:shadow-xl transition-all border border-gray-100">
                    <h3 className="text-xl font-black text-primary mb-4 flex items-center gap-3">
                      <span className="text-accent font-black text-2xl">3.</span> Admission Guidelines
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <p className="font-bold text-primary mb-2 underline decoration-accent underline-offset-4">a) Age criteria:</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <li className="bg-white p-4 rounded-xl shadow-sm border border-accent/10">
                            <p className="text-xs text-accent font-black uppercase tracking-widest">Pre-Primary</p>
                            <p className="font-bold text-primary">3-6 Years old</p>
                            <p className="text-[10px] text-gray-400">Foundation Stage</p>
                          </li>
                          <li className="bg-white p-4 rounded-xl shadow-sm border border-accent/10">
                            <p className="text-xs text-accent font-black uppercase tracking-widest">Primary</p>
                            <p className="font-bold text-primary">6-11 Years</p>
                            <p className="text-[10px] text-gray-400">Grade-1 to Grade 5</p>
                          </li>
                        </ul>
                      </div>
                      <p className="text-sm text-gray-500 italic bg-accent/5 p-4 rounded-xl">
                        Admissions are based on age-appropriate placement, aligned with the developmental stages outlined in the NCF.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Documents Required */}
              <section className="bg-primary p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
                <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                  <FileText className="text-accent" />
                  Documents Required for Admission
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Date of birth certificate",
                    "Aadhar card of the child",
                    "Aadhar card of the parents",
                    "Blood group report",
                    "2 passport size photographs",
                    "One family photograph",
                    "Transfer Certificate",
                    "Vaccination record"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/90 text-sm bg-white/5 p-3 rounded-lg border border-white/10">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Visiting Hours & Contact */}
              <section className="bg-gray-900 p-10 rounded-[3rem] text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                   <div className="space-y-6">
                      <h3 className="text-xl font-black flex items-center gap-3 italic tracking-tight underline decoration-accent/30 underline-offset-8">
                         <span className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white">
                            <MapPin size={20} />
                         </span>
                         Visit Us
                      </h3>
                      <div className="space-y-4">
                         <div className="flex justify-between items-center border-b border-white/10 pb-2">
                             <span className="text-gray-400">Mon - Fri</span>
                             <span className="font-bold">9:00am - 5:30pm</span>
                         </div>
                         <div className="flex justify-between items-center border-b border-white/10 pb-2">
                             <span className="text-gray-400">Saturday</span>
                             <span className="font-bold">10:00am - 01:00pm</span>
                         </div>
                         <p className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/10 p-2 text-center rounded-full">Closed on Sundays & Holidays</p>
                      </div>
                   </div>

                   <div className="space-y-6">
                      <h3 className="text-xl font-black flex items-center gap-3 italic tracking-tight underline decoration-accent/30 underline-offset-8">
                         <span className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white">
                            <Phone size={20} />
                         </span>
                         Contact
                      </h3>
                      <div className="space-y-3">
                         {["+91 6280995744", "+91 6280994044", "+91 9888238222"].map((num) => (
                           <a key={num} href={`tel:${num}`} className="block text-lg hover:text-accent transition-colors">
                             {num}
                           </a>
                         ))}
                      </div>
                   </div>
                </div>
                
                <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
                   <p className="text-sm text-gray-400 text-center">
                     Alternatively you can also fill the enquiry form or the registration form online. 
                     We will respond to your application asap.
                   </p>
                   <p className="mt-4 text-xs font-bold text-center text-accent uppercase tracking-widest">
                     Please Note: Registration forms are also available in the school.
                   </p>
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
