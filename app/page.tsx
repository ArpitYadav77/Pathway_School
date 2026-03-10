import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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

export default function Home() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <div className="flex flex-col lg:flex-row w-full bg-[#fdf8e6]">
        <div className="w-full lg:w-[70%]">
          <Hero />
        </div>
        <div className="w-full lg:w-[30%]">
          <SideNoticeBoard />
        </div>
      </div>
      <ActivityGallery />
      <AboutSection />
      <KidsActivities />
      <ClassesGrid />
      <Facilities />
      <EnrollmentCTA />
      <PhotoGallery />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
