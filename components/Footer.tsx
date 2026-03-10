"use client";

import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Heart,
} from "lucide-react";

const usefulLinks = [
  "Home",
  "About",
  "Classes",
  "Admissions",
  "Gallery",
  "Contact",
];

const quickLinks = [
  "Scholastics",
  "Academics",
  "Facilities",
  "Parents",
  "Login",
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="max-w-[1280px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-sm font-bold">
                SI
              </div>
              The Seekers International
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              The Seekers International is committed to providing quality
              education in a nurturing environment. We foster creativity,
              curiosity, and a love for learning in every child.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Useful Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <div className="w-8 h-0.5 bg-accent mb-4 rounded-full" />
            <ul className="space-y-2.5">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/70 hover:text-accent text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    → {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="w-8 h-0.5 bg-accent mb-4 rounded-full" />
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/70 hover:text-accent text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    → {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="w-8 h-0.5 bg-accent mb-4 rounded-full" />
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <p className="text-white/70 text-sm">
                  123 Education Lane, Knowledge City,
                  <br />
                  State 110001, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <div className="text-white/70 text-sm">
                  <p>+91 98765 43210</p>
                  <p>+91 98765 43211</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <p className="text-white/70 text-sm">
                  info@seekersinternational.edu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-sm flex items-center gap-1">
            © 2025 The Seekers International. Made with{" "}
            <Heart size={14} className="text-accent" fill="currentColor" /> All
            rights reserved.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-white/60 hover:text-accent transition-colors duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
