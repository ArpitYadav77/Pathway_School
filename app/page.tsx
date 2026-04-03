import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import AboutSection from "@/components/AboutSection";
import KidsActivities from "@/components/KidsActivities";
import ClassesGrid from "@/components/ClassesGrid";
import Facilities from "@/components/Facilities";
import EnrollmentCTA from "@/components/EnrollmentCTA";
import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";
import SideNoticeBoard from "@/components/SideNoticeBoard";
import FloatingButtons from "@/components/FloatingButtons";
import SanityAnnouncements from "@/components/SanityAnnouncements";
import SanityHero from "@/components/SanityHero";

import Card from "@/components/Card";
import GridLayout from "@/components/GridLayout";
import { Info, Bell, Camera, MapPin, School } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-gray-50/50 min-h-screen">
      <TopBar />
      <Navbar />
      
      <div className="flex flex-col w-full">
        <SanityAnnouncements />
        <div className="w-full">
          <SanityHero />
        </div>
      </div>

      <GridLayout>
        {/* Row 1: About + Notice Board */}
        <div className="lg:col-span-3">
          <Card title="Welcome to The Seekers" icon={<Info size={24} />}>
            <AboutSection />
          </Card>
        </div>
        <div className="lg:col-span-1">
          <Card title="Latest Announcements" icon={<Bell size={24} />}>
            <SideNoticeBoard />
          </Card>
        </div>

        {/* Row 2: Admissions & Vision */}
        <div className="lg:col-span-2">
          <Card title="Admissions 2026-27" icon={<MapPin size={24} />}>
            <Facilities />
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Card title="Upcoming Campus" icon={<School size={24} />}>
            <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/50 group bg-gray-50">
               <Image
                 src="/Pictures/image.png"
                 alt="Global Vision"
                 fill
                 sizes="(max-width: 1280px) 100vw, 600px"
                 className="object-contain group-hover:scale-105 transition-transform duration-1000"
               />
            </div>
          </Card>
        </div>

        {/* Row 3: Education & Innovations (Full Width Section Style) */}
        <div className="lg:col-span-4">
          <KidsActivities />
        </div>

        {/* Row 4: Academic Excellence */}
        <div className="lg:col-span-4">
          <Card title="Academic Excellence" icon={<School size={24} />}>
            <ClassesGrid />
          </Card>
        </div>

        {/* Row 4: Enrollment CTA (Highlight) */}
        <div className="lg:col-span-4 translate-y-2">
          <EnrollmentCTA />
        </div>
      </GridLayout>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
