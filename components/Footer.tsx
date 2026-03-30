"use client";
import React, { useState, useRef } from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Plane,
  Star as StarIcon,
  Cloud as CloudIcon,
  Atom,
  Home as HomeIcon,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const usefulLinks = [
  "Home",
  "About us",
  "Classes",
  "Admissions",
  "Our Gallery",
  "Contact us",
];

const quickLinks = [
  "Scholastics",
  "Academics",
  "Beyond Academics",
  "Facilities",
  "Parents",
  "ERP Login",
];

const bestLinks = [
  "Best Pre School in Patiala",
  "Best Playway School in Patiala",
  "Best Pre School near me",
  "Best Kindergarten in Patiala",
  "Best Daycare in Patiala",
  "Best Dayboarding in Patiala",
];

export default function Footer() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const footerRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!footerRef.current) return;
    const { left, top, width, height } = footerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 30;
    const y = (e.clientY - top - height / 2) / 30;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <footer 
      id="contact" 
      ref={footerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group overflow-hidden"
    >
      {/* Top Part - Dark Blue Background */}
      <div className="bg-[#1e3a8a] text-white pt-16 pb-20 relative overflow-hidden">
        {/* Interactive Decorative Icons */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div 
            className="absolute top-10 left-10 transition-transform duration-500 ease-out"
            style={{ transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px) rotate(-12deg)` }}
          >
            <Plane size={120} className="text-white/40" />
          </div>
          
          <div 
            className="absolute top-20 left-1/3 transition-transform duration-500 ease-out"
            style={{ transform: `translate(${mousePos.x * -0.8}px, ${mousePos.y * -0.8}px)` }}
          >
            <StarIcon size={40} className="text-white/40 animate-pulse" />
          </div>

          <div 
            className="absolute top-10 right-1/4 transition-transform duration-500 ease-out"
            style={{ transform: `translate(${mousePos.x * -1.2}px, ${mousePos.y * -1.2}px)` }}
          >
            <CloudIcon size={80} className="text-white/40" />
          </div>

          <div 
            className="absolute bottom-20 left-1/4 transition-transform duration-500 ease-out"
            style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` }}
          >
            <Atom size={60} className="text-white/40 animate-spin-slow" />
          </div>

          <div 
            className="absolute top-1/2 right-10 transition-transform duration-500 ease-out"
            style={{ transform: `translate(${mousePos.x * -2}px, ${mousePos.y * -2}px)` }}
          >
            <Atom size={40} className="text-white/40 animate-float" />
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1 - About & Best Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative inline-block group/title">
                The Seekers International
                <span className="absolute bottom-[-4px] left-0 w-12 h-[2px] bg-accent transition-all duration-300 group-hover/title:w-full" />
              </h3>
              <p className="text-white/80 text-[13px] leading-relaxed mb-6">
                The Seekers International provide both childcare, early
                education and primary education. The learning is totally
                conceptual and practical based. The preschool programs are
                designed to further children&apos;s social and cognitive
                development...
              </p>
              <ul className="space-y-2">
                {bestLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-accent text-[13px] transition-all duration-300 flex items-center gap-1 group/item"
                    >
                      <span className="w-0 h-[1px] bg-accent transition-all duration-300 group-hover/item:w-2" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 - Useful Link */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative inline-block group/title">
                Useful Link
                <span className="absolute bottom-[-4px] left-0 w-12 h-[2px] bg-accent transition-all duration-300 group-hover/title:w-full" />
              </h3>
              <ul className="space-y-4">
                {usefulLinks.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-accent text-sm transition-all duration-300 flex items-center gap-2 group/link"
                    >
                      <ChevronRight size={14} className="opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Quick Link */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative inline-block group/title">
                Quick Link
                <span className="absolute bottom-[-4px] left-0 w-12 h-[2px] bg-accent transition-all duration-300 group-hover/title:w-full" />
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-accent text-sm transition-all duration-300 flex items-center gap-2 group/link"
                    >
                      <ChevronRight size={14} className="opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Get in Touch */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative inline-block group/title">
                Get in Touch
                <span className="absolute bottom-[-4px] left-0 w-12 h-[2px] bg-accent transition-all duration-300 group-hover/title:w-full" />
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4 group/addr">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center shrink-0 group-hover/addr:bg-accent/20 transition-colors">
                    <HomeIcon size={20} className="text-accent" />
                  </div>
                  <p className="text-white/80 text-[13px] leading-relaxed group-hover:text-white transition-colors">
                    The Seekers International, Hasanpur Prohthan Road, Backside
                    D Mart, Patiala, Punjab
                  </p>
                </div>
                <div className="flex gap-4 group/addr">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center shrink-0 group-hover/addr:bg-accent/20 transition-colors">
                    <HomeIcon size={20} className="text-accent" />
                  </div>
                  <p className="text-white/80 text-[13px] leading-relaxed group-hover:text-white transition-colors">
                    The Seekers International, Sat Complex, Sirhind - Patiala Rd,
                    Bypass, Patiala, Punjab
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col gap-3">
                    {[ "+91 6280995744", "+91 6280994044", "+91 9888238222" ].map((num) => (
                      <div key={num} className="flex items-center gap-3 group/phone">
                        <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center group-hover/phone:bg-accent/20 transition-colors">
                          <Phone size={16} className="text-accent" />
                        </div>
                        <span className="text-white/80 text-sm font-semibold group-hover:text-white transition-colors cursor-pointer">
                          {num}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 group/mail">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover/mail:bg-accent/20 transition-colors">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <span className="text-white/80 text-sm break-all group-hover:text-white transition-colors cursor-pointer">
                    thelittleseekers2018@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* IB Disclaimer Section */}
          <div className="mt-12 pt-10 border-t border-white/10">
            <p className="text-white/60 text-[12px] leading-relaxed italic max-w-4xl hover:text-white/80 transition-colors">
              &quot;The Seekers International&quot; is a candidate school* for the Primary
              Years&apos; Programme. This school is pursuing affiliation as an &quot;IB
              World School&quot;. <br />
              *These are the schools that share a common philosophy- A
              Commitment to High Quality, Challenging, International Education
              that The Seekers International believes is important for our
              students.
            </p>
          </div>
        </div>

        {/* Cloud Wave Bottom */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-[60px] fill-[#fdf8e6]"
          >
            <path d="M0,0 C150,110 400,110 600,60 C800,10 1050,10 1200,60 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>

      {/* Bottom Row - Cream Background */}
      <div className="bg-[#fdf8e6] py-8 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <div className="text-gray-500 text-sm font-semibold tracking-wide">
            Copyright © The Seekers International
          </div>

          {/* Center Logo */}
          <div className="flex items-center gap-3 group/logo cursor-pointer">
            <Image
              src="/logo/image.png"
              alt="The Seekers logo"
              width={60}
              height={60}
              className="object-contain transition-transform duration-500 group-hover/logo:scale-110 group-hover/logo:rotate-[360deg]"
            />
            <div className="flex flex-col">
              <span className="text-[#1e3a8a] font-black text-xl leading-none transition-colors group-hover/logo:text-accent">
                The Seekers
              </span>
              <span className="text-[#1e3a8a] text-[10px] font-bold uppercase tracking-widest text-center">
                International
              </span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-11 h-11 bg-[#3b5998] text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-[#3b5998]/40 hover:-translate-y-1"
            >
              <Facebook size={22} fill="currentColor" />
            </a>
            <a
              href="#"
              className="w-11 h-11 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-red-500/40 hover:-translate-y-1"
            >
              <Instagram size={22} />
            </a>
            <a
              href="#"
              className="w-11 h-11 bg-[#ff0000] text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-red-600/40 hover:-translate-y-1"
            >
              <Youtube size={22} fill="currentColor" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

