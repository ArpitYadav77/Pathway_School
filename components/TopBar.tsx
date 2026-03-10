"use client";

import { Facebook, Instagram, Youtube, Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-primary text-white text-sm">
      <div className="max-w-[1280px] mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-accent transition-colors duration-300 hover:scale-110 transform"
          >
            <Facebook size={16} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-accent transition-colors duration-300 hover:scale-110 transform"
          >
            <Instagram size={16} />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="hover:text-accent transition-colors duration-300 hover:scale-110 transform"
          >
            <Youtube size={16} />
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>+91 98765 43210</span>
            <span className="hidden sm:inline">|</span>
            <span>+91 98765 43211</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>info@seekersinternational.edu</span>
          </div>
        </div>
      </div>
    </div>
  );
}
