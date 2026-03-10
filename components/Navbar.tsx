"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight, Phone, Mail } from "lucide-react";

interface SubmenuItem {
  name: string;
  link?: string;
  submenu?: SubmenuItem[];
}

interface MenuItem {
  name: string;
  link?: string;
  submenu?: SubmenuItem[];
}

const menuItems: MenuItem[] = [
  { name: "Home", link: "/" },
  {
    name: "About",
    submenu: [
      { name: "Overview of Our Program", link: "/about/program-overview" },
      { name: "Daycare", link: "/about/daycare" },
      { name: "Books & Learning Resources", link: "/about/books" },
    ],
  },
  {
    name: "Admissions",
    submenu: [
      { name: "Admission Process", link: "/admissions/process" },
      { name: "School Timing", link: "/admissions/timing" },
      { name: "Google Map & Phone Contact", link: "/admissions/location" },
    ],
  },
  {
    name: "Academics",
    submenu: [
      { name: "Curriculum Overview", link: "/academics/curriculum" },
      { name: "Kindergarten Activities", link: "/academics/kindergarten-activities" },
      { name: "Workshops", link: "/academics/workshops" },
      { name: "Lab Activities", link: "/academics/lab" },
      {
        name: "Beyond Activities",
        submenu: [
          { name: "Sports", link: "/academics/beyond/sports" },
          { name: "Play Activities", link: "/academics/beyond/play" },
          { name: "Arts & Crafts", link: "/academics/beyond/arts-crafts" },
          { name: "Summer Camp", link: "/academics/beyond/summer-camp" },
        ],
      },
    ],
  },
  {
    name: "Facilities",
    submenu: [
      { name: "Transport", link: "/facilities/transport" },
      { name: "Daycare", link: "/facilities/daycare" },
      { name: "Food & Nutrition", link: "/facilities/food" },
      { name: "Faculty", link: "/facilities/faculty" },
      { name: "Temperature Controlled Classrooms", link: "/facilities/temperature-control" },
      { name: "Smart Classrooms", link: "/facilities/classroom" },
    ],
  },
  {
    name: "Parents",
    submenu: [
      { name: "Parent Sessions", link: "/parents/sessions" },
      {
        name: "Testimonials",
        submenu: [
          { name: "Parents Speak", link: "/parents/speak" },
          { name: "Parents Video Testimonials", link: "/parents/videos" },
        ],
      },
    ],
  },
  {
    name: "Gallery",
    submenu: [
      { name: "Photo Gallery", link: "/gallery/photos" },
      { name: "Video Gallery", link: "/gallery/videos" },
    ],
  },
  { name: "Contact", link: "/contact" },
  { name: "Franchise", link: "/franchise" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (link?: string) => link ? pathname === link : false;
  const isParentActive = (item: MenuItem) => {
    if (item.link && isActive(item.link)) return true;
    if (item.submenu) {
      return item.submenu.some(sub =>
        isActive(sub.link) || (sub.submenu && sub.submenu.some(nested => isActive(nested.link)))
      );
    }
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-white py-4"
        }`}
    >
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-full border-2 border-primary/10 group-hover:border-accent/40 transition-colors duration-300">
              <Image
                src="/images/logo.png"
                alt="The Seekers International School Logo"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-secondary font-extrabold text-xl md:text-2xl leading-none tracking-tight group-hover:text-primary transition-colors duration-300">
                THE SEEKERS
              </span>
              <span className="text-[10px] md:text-xs text-accent font-bold uppercase tracking-[0.2em]">
                International School
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-end xl:justify-center flex-grow px-2 md:px-4">
            <ul className="flex items-center gap-1 xl:gap-2">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.name)}
                  onMouseLeave={() => {
                    setActiveMenu(null);
                    setActiveSubmenu(null);
                  }}
                >
                  <Link
                    href={item.link || "#"}
                    className={`flex items-center gap-1 px-3 py-2 text-[15px] font-semibold transition-all duration-300 rounded-full whitespace-nowrap ${isParentActive(item)
                        ? "text-white bg-accent shadow-md"
                        : "text-gray-700 hover:text-accent"
                      }`}
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${activeMenu === item.name ? 'rotate-180' : ''}`}
                      />
                    )}
                  </Link>

                  {/* Level 1 Dropdown */}
                  {item.submenu && (
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-300 origin-top transform ${activeMenu === item.name
                          ? "opacity-100 scale-100 translate-y-0 visible"
                          : "opacity-0 scale-95 -translate-y-4 invisible"
                        }`}
                    >
                      <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden min-w-[240px] p-2">
                        {item.submenu.map((sub) => (
                          <div
                            key={sub.name}
                            className="relative"
                            onMouseEnter={() => setActiveSubmenu(sub.name)}
                            onMouseLeave={() => setActiveSubmenu(null)}
                          >
                            <Link
                              href={sub.link || "#"}
                              className={`flex items-center justify-between px-4 py-3 text-[14px] font-medium rounded-xl transition-all duration-200 ${isActive(sub.link)
                                  ? "text-accent bg-accent/5"
                                  : "text-gray-600 hover:text-accent hover:bg-gray-50"
                                }`}
                            >
                              {sub.name}
                              {sub.submenu && <ChevronRight size={16} opacity={0.5} />}
                            </Link>

                            {/* Level 2 Submenu */}
                            {sub.submenu && (
                              <div
                                className={`absolute left-full top-0 pl-1 transition-all duration-300 transform ${activeSubmenu === sub.name
                                    ? "opacity-100 scale-100 translate-x-0 visible"
                                    : "opacity-0 scale-95 -translate-x-4 invisible"
                                  }`}
                              >
                                <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden min-w-[220px] p-2">
                                  {sub.submenu.map((nested) => (
                                    <Link
                                      key={nested.name}
                                      href={nested.link || "#"}
                                      className={`block px-4 py-3 text-[13px] font-medium rounded-xl transition-all duration-200 ${isActive(nested.link)
                                          ? "text-accent bg-accent/5"
                                          : "text-gray-600 hover:text-accent hover:bg-gray-50"
                                        }`}
                                    >
                                      {nested.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Button / Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden xl:flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-md hover:shadow-primary/20 shrink-0"
            >
              Apply Now
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl bg-gray-50 text-secondary hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[70px] bg-white border-t border-gray-100 shadow-2xl transition-all duration-500 ease-in-out overflow-y-auto ${isOpen ? "h-[calc(100vh-70px)] opacity-100" : "h-0 opacity-0 pointer-events-none"
          }`}
      >
        <div className="px-6 py-8 space-y-4">
          {menuItems.map((item) => (
            <div key={item.name} className="border-b border-gray-50 pb-2 mb-2 last:border-0">
              <div
                className="flex items-center justify-between py-2 mb-1"
                onClick={() => {
                  if (item.submenu) {
                    setActiveMenu(activeMenu === item.name ? null : item.name);
                    setActiveSubmenu(null);
                  } else {
                    setIsOpen(false);
                  }
                }}
              >
                {item.link ? (
                  <Link
                    href={item.link}
                    className={`text-lg font-bold ${isActive(item.link) ? 'text-accent' : 'text-gray-800'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className={`text-lg font-bold ${activeMenu === item.name ? 'text-accent' : 'text-secondary'}`}>
                    {item.name}
                  </span>
                )}
                {item.submenu && (
                  <button className={`p-2 rounded-full bg-gray-50 transition-transform duration-300 ${activeMenu === item.name ? 'rotate-180 text-accent' : 'text-gray-400'}`}>
                    <ChevronDown size={20} />
                  </button>
                )}
              </div>

              {/* Mobile Submenu Level 1 */}
              {item.submenu && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${activeMenu === item.name ? "max-h-[1000px] opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="grid gap-1 pl-4 border-l-2 border-accent/10">
                    {item.submenu.map((sub) => (
                      <div key={sub.name}>
                        <div
                          className="flex items-center justify-between py-2"
                          onClick={() => {
                            if (sub.submenu) {
                              setActiveSubmenu(activeSubmenu === sub.name ? null : sub.name);
                            } else {
                              setIsOpen(false);
                            }
                          }}
                        >
                          <Link
                            href={sub.link || "#"}
                            className={`text-[15px] font-semibold ${isActive(sub.link) ? 'text-accent' : 'text-gray-600'}`}
                            onClick={(e) => {
                              if (sub.submenu) e.preventDefault();
                              else setIsOpen(false);
                            }}
                          >
                            {sub.name}
                          </Link>
                          {sub.submenu && (
                            <ChevronDown
                              size={16}
                              className={`transition-transform duration-300 ${activeSubmenu === sub.name ? "rotate-180 text-accent" : "text-gray-400"}`}
                            />
                          )}
                        </div>

                        {/* Mobile Submenu Level 2 */}
                        {sub.submenu && (
                          <div
                            className={`overflow-hidden transition-all duration-300 pl-4 ${activeSubmenu === sub.name ? "max-h-[300px] opacity-100 pb-2" : "max-h-0 opacity-0"
                              }`}
                          >
                            <div className="grid gap-2 py-2">
                              {sub.submenu.map((nested) => (
                                <Link
                                  key={nested.name}
                                  href={nested.link || "#"}
                                  className={`text-sm font-medium ${isActive(nested.link) ? 'text-accent' : 'text-gray-500'}`}
                                  onClick={() => setIsOpen(false)}
                                >
                                  • {nested.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Mobile Apply Button */}
          <div className="pt-6">
            <Link
              href="/contact"
              className="flex items-center justify-center w-full bg-accent text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-accent/20"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Contacts */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <a href="tel:+1234567890" className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-gray-50 text-gray-600">
              <Phone size={20} className="text-primary" />
              <span className="text-xs font-bold uppercase">Call Us</span>
            </a>
            <a href="mailto:info@theseekersinternational.com" className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-gray-50 text-gray-600">
              <Mail size={20} className="text-primary" />
              <span className="text-xs font-bold uppercase">Email</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}