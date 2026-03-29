import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import ActivityGallery from "@/components/ActivityGallery";
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
import { Info, Bell, Camera, Sparkles, GraduationCap, MapPin, School } from "lucide-react";

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

        {/* Row 2: Photo Gallery + Facilities */}
        <div className="lg:col-span-2">
          <Card title="Photo Gallery" icon={<Camera size={24} />}>
            <PhotoGallery />
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Card title="Our Modern Facilities" icon={<MapPin size={24} />}>
            <Facilities />
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
