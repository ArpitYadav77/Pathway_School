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
      <div className="flex flex-col lg:flex-row w-full pt-[80px] md:pt-[100px]">
        <div className="w-full lg:w-[75%] h-[500px] md:h-[600px] lg:h-[700px]">
          <Hero />
        </div>
        <div className="w-full lg:w-[25%] h-[500px] md:h-[600px] lg:h-[700px]">
          <SideNoticeBoard />
        </div>
      </div>

      <ActivityGallery />
      <AboutSection />
      <KidsActivities />
      <PhotoGallery />
      <ClassesGrid />
      <Facilities />
      <EnrollmentCTA />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
