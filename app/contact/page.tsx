"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { ChevronRight, Home, Phone, Mail, MapPin, Send, Instagram, Facebook, Youtube } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      
      <main className="min-h-screen bg-white pt-[120px] md:pt-[150px]">
        {/* Hero Section */}
        <div className="relative h-[250px] md:h-[350px] bg-primary flex items-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
             <Image src="/images/Hero/2912025234310s1.jpg" alt="Contact Us" fill className="object-cover" />
          </div>
          <div className="max-w-[1280px] mx-auto px-4 w-full relative z-10">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter italic">
              Contact <span className="text-accent underline underline-offset-8">Us</span>
            </h1>
            <div className="flex items-center gap-2 text-white/80 text-sm md:text-base font-medium">
                <Link href="/" className="hover:text-accent transition-colors flex items-center gap-1">
                    <Home size={16} />
                    Home
                </Link>
                <ChevronRight size={16} />
                <span className="text-accent font-bold">Contact</span>
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Info & Map */}
            <div className="space-y-12">
               <div>
                  <h2 className="text-3xl font-black text-primary uppercase italic tracking-tighter mb-8 border-l-8 border-accent pl-6">Get In Touch</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                        <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform">
                           <Phone size={24} />
                        </div>
                        <h3 className="font-black text-secondary uppercase text-xs tracking-widest mb-2">Call Us</h3>
                        <p className="text-primary font-bold text-lg leading-tight">
                           +91 62809 94044<br/>
                           +91 62809 95744
                        </p>
                     </div>
                     <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                        <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform">
                           <Mail size={24} />
                        </div>
                        <h3 className="font-black text-secondary uppercase text-xs tracking-widest mb-2">Email Us</h3>
                        <p className="text-primary font-bold text-sm md:text-base break-all">
                           theseekersinternational2025@gmail.com
                        </p>
                     </div>
                  </div>
               </div>

               <div className="space-y-8">
                  <div className="bg-white p-8 rounded-[3rem] shadow-2xl border-2 border-slate-50">
                     <div className="flex items-start gap-4 mb-8">
                        <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-white shrink-0">
                           <MapPin size={24} />
                        </div>
                        <div>
                           <h3 className="font-black text-primary uppercase text-lg tracking-tighter italic">Address 1</h3>
                           <p className="text-gray-500 font-medium">Hasanpur Prohthan Road, Backside D Mart, Patiala, Punjab</p>
                        </div>
                     </div>
                     
                     <div className="flex items-start gap-4 mb-8">
                        <div className="w-12 h-12 bg-slate-200 rounded-2xl flex items-center justify-center text-gray-500 shrink-0">
                           <MapPin size={24} />
                        </div>
                        <div>
                           <h3 className="font-black text-primary uppercase text-lg tracking-tighter italic">Address 2</h3>
                           <p className="text-gray-500 font-medium">Sat Complex, Sirhind - Patiala Rd, Bypass, Patiala, Punjab</p>
                        </div>
                     </div>

                     {/* Map Placeholder */}
                     <div className="rounded-[2rem] overflow-hidden h-[300px] relative shadow-lg group">
                        <iframe 
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.222383838383!2d76.3883372!3d30.342238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028133549201!2sThe%20Seekers%20International!5e0!3m2!1sen!2sin!4v1711144444444!5m2!1sen!2sin"
                           width="100%" 
                           height="100%" 
                           style={{ border: 0 }} 
                           allowFullScreen 
                           loading="lazy"
                           className="grayscale hover:grayscale-0 transition-all duration-700"
                        ></iframe>
                        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-4 py-2 rounded-xl text-xs font-bold text-primary shadow-xl pointer-events-none group-hover:translate-x-2 transition-transform">
                           View on Google Maps
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-primary rounded-[4rem] p-10 md:p-16 text-white shadow-[0_30px_60px_rgba(26,91,156,0.3)] relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full pointer-events-none -translate-y-12 translate-x-12" />
               <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase italic tracking-tighter">Send a Message</h2>
                  <form className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-xs font-bold uppercase tracking-widest text-white/60 ml-2">Your Name</label>
                           <input type="text" className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:bg-white/20 focus:border-accent transition-all placeholder:text-white/20" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs font-bold uppercase tracking-widest text-white/60 ml-2">Phone Number</label>
                           <input type="tel" className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:bg-white/20 focus:border-accent transition-all placeholder:text-white/20" placeholder="+91 12345 67890" />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-white/60 ml-2">Email Address</label>
                        <input type="email" className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:bg-white/20 focus:border-accent transition-all placeholder:text-white/20" placeholder="john@example.com" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-white/60 ml-2">Message</label>
                        <textarea rows={5} className="w-full bg-white/10 border border-white/10 rounded-3xl px-6 py-4 outline-none focus:bg-white/20 focus:border-accent transition-all placeholder:text-white/20 resize-none" placeholder="Tell us how we can help..."></textarea>
                     </div>
                     <button className="w-full bg-accent hover:bg-white hover:text-accent text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl transition-all flex items-center justify-center gap-3">
                        <Send size={20} />
                        Send Message Now
                     </button>
                  </form>

                  <div className="mt-12 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                     <div className="text-center md:text-left">
                        <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Follow Us</p>
                        <div className="flex items-center gap-4">
                           <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all"><Facebook size={18}/></a>
                           <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-accent transition-all"><Instagram size={18}/></a>
                           <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-red-500 transition-all"><Youtube size={18}/></a>
                        </div>
                     </div>
                     <div className="hidden md:block">
                        <p className="text-xs font-bold uppercase tracking-widest text-white/40 text-right">Office Hours</p>
                        <p className="font-bold">Mon - Sat: 9:00 AM - 5:30 PM</p>
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
