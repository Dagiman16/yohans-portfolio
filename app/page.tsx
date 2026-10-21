import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Achievements from "@/components/Achievements";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Recommendations from "@/components/Recommendations";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-[#FAFAFA]">
      <Navbar />
      <main>
        <Hero />
        <Achievements />
        <About />
        <Education />
        <Skills />
        <Certificates />
        <Recommendations />
        <Contact />
      </main>
      <footer className="bg-[#F5C518] py-6 px-4 text-center text-xs sm:text-sm font-semibold text-[#1a1a1a]">
        © 2026 Fasikaw Getachew · Political Science Graduate · Woldia University
      </footer>
    </div>
  );
}
