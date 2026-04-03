"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { ChevronRight, Home, GraduationCap, Users, Clock, Sparkles } from "lucide-react";

const programmes = [
  {
    title: "Playgroup (The Newtons)",
    age: "Age-1.5 to 2 years",
    description: "The Play Group at The Little Seekers School is a vibrant and nurturing environment designed to cater to the youngest learners. At this foundational stage, the focus is on fostering curiosity, creativity, and a love for learning through playful exploration. The school emphasizes a child-centered approach, incorporating activities that engage the senses and stimulate early cognitive and motor skill development. Through interactive play, storytelling, music, art, and hands-on activities, the children are encouraged to discover, experiment, and express themselves. The Little Seekers ensures that each child feels safe, valued, and supported in their first steps of education, laying a strong emotional and social foundation.",
    color: "bg-teal-500",
    image: "/images/classroom-playgroup.png"
  },
  {
    title: "Pre Nursery (The Einsteins)",
    age: "Age-2 to 3 years",
    description: "At The Little Seekers School, the “Einstein Group,” consisting of children aged 2 to 3 years, embarks on a delightful journey of exploration and discovery. These young learners, full of curiosity and wonder, are introduced to an engaging environment that nurtures their development through play and hands-on activities. The Einstein Group program focuses on building essential skills such as social interaction, language development, motor coordination, and sensory exploration. Activities like storytelling, music, art, and imaginative play are thoughtfully curated to spark their creativity and foster a love for learning. With patient and caring teachers guiding them, the children in the Einstein Group gain confidence, independence, and a sense of belonging.",
    color: "bg-blue-500",
    image: "/images/classroom-playgroup.png"
  },
  {
    title: "Nursery (The Ramans)",
    age: "Age - 3 years",
    description: "\"Ask the right questions and Nature will open the doors to her secrets.\" C.V. Raman a great scientist, philosopher who was well known in his field who created magic in so many things that his name is taken with respect till today. At The Little Seekers School, the Nursery class, proudly named after the great scientist C.V. Raman, reflects the spirit of curiosity, exploration, and discovery that he exemplified. This class is designed for children who are beginning to take their first steps into formal learning, blending fun with foundational education. The C.V. Raman class focuses on fostering early academic, social, and emotional development. Through a balanced mix of play-based and experiential learning, children are encouraged to ask questions and explore.",
    color: "bg-orange-500",
    image: "/images/classroom-nursery.png"
  },
  {
    title: "LKG (The Kalams)",
    age: "Age - 4 years",
    description: "At The Little Seekers School, the Lower Kindergarten (LKG) class is named after the visionary leader and renowned scientist Dr. A.P.J. Abdul Kalam, reflecting his legacy of inspiring young minds and fostering dreams. In this class, the focus is on developing foundational skills in literacy, numeracy, and creative thinking through interactive and engaging activities. The curriculum encourages hands-on learning, fostering curiosity, problem-solving, and teamwork among students. Activities such as storytelling, art, music, and group play are designed to spark imagination and build self-confidence. Guided by the values of perseverance, innovation, and humility associated with Dr. Abdul Kalam, the LKG class nurtures a love for knowledge while instilling strong moral values.",
    color: "bg-purple-500",
    image: "/images/classroom-nursery.png"
  },
  {
    title: "UKG (The Aryabhattas)",
    age: "Age - 5 years",
    description: "At The Little Seekers School, the Upper Kindergarten (UKG) class, named after the brilliant mathematician and astronomer Aryabhatta, reflects his legacy of intellectual curiosity and logical thinking. This class is designed for students aged 5 years and above, who are ready to explore more advanced concepts and prepare for formal schooling. The “Aryabhatta” class focuses on developing critical thinking, problem-solving, and foundational academic skills in literacy and numeracy. The curriculum integrates hands-on activities, creative projects, and interactive learning to make subjects engaging and meaningful. In line with Aryabhatta's pioneering spirit, this class encourages students to ask questions, explore new ideas, and build confidence in their abilities.",
    color: "bg-indigo-500",
    image: "/images/classroom-older.png"
  },
  {
    title: "Class 1 (The Kalpanas)",
    age: "Age - 6 years",
    description: "At The Little Seekers School, the Class 1 students are part of the “Kalpana Chawla” class, named after the trailblazing astronaut who inspired the world. In the Kalpana Chawla class, students begin to build a solid foundation in core subjects such as English, Mathematics, Environmental Studies, General Knowledge, Hindi, Punjabi, Music, Arts, Sports, and Dance. French is introduced from this class for students to be prepared globally. The curriculum emphasizes practical learning, critical thinking, and collaborative activities. Inspired by Kalpana Chawla's perseverance, this class motivates students to dream big and strive for excellence. We work on the IB philosophy of inquiry-based learning.",
    color: "bg-rose-500",
    image: "/images/classroom-older.png"
  },
  {
    title: "Class 2 (The Tagores)",
    age: "Age - 7 years",
    description: "At The Little Seekers School, the Class 2 students are part of the “Rabindranath Tagore” class. This class reflects Tagore's ideals by fostering intellectual, emotional, and artistic development. The curriculum is thoughtfully designed to provide a well-rounded education. In addition to core subjects, students are introduced to French and Abacus to enhance their linguistic and cognitive skills. Language learning is further enriched with Hindi and Punjabi. The program also emphasizes extracurricular activities such as sports, dance, and art, ensuring students develop physical fitness and creative expression. Guided by Tagore’s philosophy of learning through experience, the Class 2 program inspires children to think independently.",
    color: "bg-teal-600",
    image: "/images/classroom-playgroup.png"
  },
  {
    title: "Class 3 (The Teslas)",
    age: "Age - 8 years",
    description: "At The Little Seekers School, the Class 3 students are part of the “Tesla” class, named after the brilliant inventor Nikola Tesla. The Tesla class focuses on nurturing curiosity and a love for discovery. The curriculum is diverse and engaging, with a strong emphasis on core subjects taught through hands-on activities to encourage critical thinking. Students also explore language learning through Hindi, Punjabi, and French. To further enhance cognitive development, the Tesla class integrates Abacus, strengthening mental calculation and concentration. The curriculum also prioritizes artistic expression, with students participating in art, dance, and sports to develop coordination and teamwork.",
    color: "bg-blue-600",
    image: "/images/classroom-playgroup.png"
  },
  {
    title: "Class 4 (The Ramakrishnans)",
    age: "Age - 9 years",
    description: "At The Little Seekers School, Class 4 students are part of the “Venki Ramakrishnan” class. This class focuses on enhancing students’ academic and personal growth by combining rigorous learning with practical experiences. The curriculum includes core subjects taught through inquiry-based learning. Language skills are further developed through Hindi, Punjabi, and French. Abacus is incorporated to sharpen mental arithmetic. In addition to core academics, the class offers skill-building activities like public speaking, drama, and presentations to enhance stage confidence. Students grow intellectually, creatively, and emotionally, preparing them to tackle challenges with confidence and purpose.",
    color: "bg-orange-600",
    image: "/images/classroom-nursery.png"
  },
  {
    title: "Class 5 (The Khuranas)",
    age: "Age - 10 years",
    description: "At The Little Seekers School, Class 5 students are part of the “Hargobind Khurana” class, named after the renowned scientist who made groundbreaking contributions to genetics. The curriculum includes core subjects taught with an emphasis on inquiry-based learning and hands-on experiments to encourage scientific thinking. Language proficiency is further developed through Hindi, Punjabi, and French. The use of Abacus also helps strengthen cognitive skills. Complementing academic learning, the class offers various skill-building activities, including arts, dance, and sports. Students are encouraged to build stage confidence through public speaking and presentations, cultivating a passion for scientific inquiry.",
    color: "bg-purple-600",
    image: "/images/classroom-nursery.png"
  },
  {
    title: "Class 6 (The Ramanujans)",
    age: "Age - 11 years",
    description: "At The Little Seekers School, Class 6 students are part of the “Ramanujan” class, named after the legendary mathematician. This class is designed to spark curiosity, creativity, and analytical thinking. The curriculum includes essential subjects with a focus on problem-solving and critical thinking. Students engage in language learning through Hindi, Punjabi, and French. Abacus training helps enhance concentration. A highlight is the annual Science Exhibition, where students showcase their creativity through projects and demonstrations. This fosters a deeper understanding of scientific concepts while encouraging students to think critically and present their findings with confidence.",
    color: "bg-indigo-600",
    image: "/images/classroom-older.png"
  },
  {
    title: "Class 7 (The Bhabhas)",
    age: "Age - 12 years",
    description: "At The Little Seekers School, Class 7 students are part of the “Homi Jehangir Bhabha” class. His legacy of scientific inquiry and leadership serves as an inspiration. The curriculum covers essential subjects with a strong emphasis on experimental learning and problem-solving. Students engage in language development through Hindi, Punjabi, and French. Abacus training is continued. Public speaking, drama, and presentations are integral, helping students build stage confidence. A standout event is the Science Exhibition, where students showcase their scientific knowledge through projects. The class is designed to cultivate the spirit of discovery, leadership, and intellectual curiosity.",
    color: "bg-rose-600",
    image: "/images/classroom-older.png"
  }
];

const houses = [
  { name: "Orion", description: "The Hunter", color: "bg-blue-600", icon: "🏹" },
  { name: "Perseus", description: "The Hero", color: "bg-red-600", icon: "⚔️" },
  { name: "Leo", description: "The Lion", color: "bg-orange-500", icon: "🦁" },
  { name: "Hercules", description: "The Strong Man", color: "bg-teal-600", icon: "💪" }
];

export default function ProgrammesPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      
      <main className="min-h-screen bg-gray-50 pt-[120px] md:pt-[150px]">
        {/* Header Section */}
        <div className="max-w-[1280px] mx-auto px-4 py-8 md:py-12">
            <div className="flex items-center gap-2 text-primary/60 text-xs md:text-sm font-bold uppercase tracking-widest mb-4">
                <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                <ChevronRight size={14} />
                <span>Academics</span>
                <ChevronRight size={14} />
                <span className="text-accent">Our Programmes</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-primary uppercase italic tracking-tighter mb-4">
                Our <span className="text-accent">Programmes</span>
            </h1>
            <div className="w-20 h-2 bg-accent rounded-full mb-8" />
            <p className="text-gray-500 text-lg font-medium max-w-3xl leading-relaxed">
                Discover our specialized learning groups named after legendary visionaries and scientists, designed to inspire the next generation of leaders.
            </p>
        </div>

        {/* Scrolling Card Feature Section */}
        <section className="relative w-full bg-[#1e3a8a] py-16 md:py-24 overflow-hidden mb-24">
            <div className="absolute inset-0 opacity-10">
                <Image src="/images/Hero/2912025234310s1.jpg" alt="Background" fill className="object-cover" />
            </div>

            <div className="relative z-10 max-w-[1280px] mx-auto px-4 mb-12">
                <div className="flex items-center gap-4 text-orange-400 mb-2">
                    <Sparkles size={20} />
                    <span className="font-extrabold text-xs uppercase tracking-[0.3em]">Excellence in Education</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Academic Pathways</h2>
            </div>

            {/* Marquee Section */}
            <div className="relative w-full flex overflow-hidden">
                <div className="flex animate-marquee-x gap-6 px-6 whitespace-nowrap overflow-visible py-8">
                    {[...programmes, ...programmes].map((prog, i) => (
                        <div
                            key={i}
                            className="inline-flex w-[320px] md:w-[400px] flex-col bg-white rounded-[3rem] overflow-hidden shadow-2xl shrink-0 group hover:-translate-y-4 transition-all duration-500 border border-white/20"
                        >
                            <div className="aspect-[16/10] relative overflow-hidden">
                                <Image
                                    src={prog.image}
                                    alt={prog.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className={`absolute top-6 right-6 px-4 py-1.5 rounded-xl ${prog.color} text-white text-[10px] font-black shadow-lg uppercase tracking-widest`}>
                                    {prog.age}
                                </div>
                            </div>
                            <div className="p-8 md:p-10 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-10 h-10 rounded-xl ${prog.color}/10 flex items-center justify-center text-${prog.color.split('-')[1]}-500`}>
                                        <GraduationCap size={20} />
                                    </div>
                                    <h3 className="font-black text-[#003366] text-xl md:text-2xl uppercase italic tracking-tighter leading-none whitespace-normal">
                                        {prog.title}
                                    </h3>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed whitespace-normal line-clamp-6 font-medium">
                                    {prog.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <style jsx>{`
                    .animate-marquee-x {
                        animation: marquee 50s linear infinite;
                    }
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-marquee-x:hover {
                        animation-play-state: paused;
                    }
                `}</style>
            </div>
        </section>

        {/* House System Section */}
        <div className="max-w-[1280px] mx-auto px-4 pb-24">
            <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl border-2 border-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none" />
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-black uppercase tracking-widest mb-6 border border-accent/20">
                        Our Community
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-primary uppercase italic tracking-tighter leading-tight mb-6">
                        The School <span className="text-accent">House System</span>
                    </h2>
                    <p className="text-gray-500 text-lg font-medium">
                        To foster teamwork and healthy competition, our school is divided into four houses named after famous constellations.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {houses.map((house, i) => (
                        <div key={i} className="group p-8 rounded-[2.5rem] bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-500 text-center border border-transparent hover:border-gray-100">
                            <div className={`w-20 h-20 mx-auto rounded-3xl ${house.color} flex items-center justify-center text-4xl mb-6 shadow-lg shadow-${house.color.split('-')[1]}-500/20 group-hover:scale-110 transition-transform duration-500`}>
                                {house.icon}
                            </div>
                            <h3 className="text-2xl font-black text-primary uppercase italic tracking-tighter mb-2">{house.name}</h3>
                            <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">{house.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
