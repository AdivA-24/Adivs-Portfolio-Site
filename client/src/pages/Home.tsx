import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Timeline from "@/components/sections/Timeline";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Marquee from "@/components/ui/marquee";
import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white font-sans overflow-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="py-12 border-y border-border/50 bg-secondary/30 backdrop-blur-sm overflow-hidden">
          <Marquee duration={40} className="text-5xl md:text-7xl font-display font-bold text-transparent text-stroke-1 opacity-20 hover:opacity-40 transition-opacity">
            <span className="mx-8 text-foreground">FULL STACK ENGINEER</span>
            <span className="mx-8 text-primary font-serif italic">&</span>
            <span className="mx-8 text-foreground">DATA ARCHITECT</span>
            <span className="mx-8 text-primary font-serif italic">&</span>
            <span className="mx-8 text-foreground">CLOUD NATIVE</span>
            <span className="mx-8 text-primary font-serif italic">&</span>
          </Marquee>
        </div>

        <About />

        <Timeline />
        
        <div className="py-12 border-y border-border/50 bg-primary/5 text-foreground overflow-hidden">
          <Marquee duration={30} reverse className="text-4xl md:text-6xl font-display font-bold">
            <span className="mx-12">TYPESCRIPT</span>
            <span className="mx-12 text-primary opacity-50">✦</span>
            <span className="mx-12">PYTHON</span>
            <span className="mx-12 text-primary opacity-50">✦</span>
            <span className="mx-12">REACT</span>
            <span className="mx-12 text-primary opacity-50">✦</span>
            <span className="mx-12">AWS</span>
            <span className="mx-12 text-primary opacity-50">✦</span>
            <span className="mx-12">KUBERNETES</span>
            <span className="mx-12 text-primary opacity-50">✦</span>
          </Marquee>
        </div>

        <Skills />
        <Projects />
      </main>

      <Contact />
    </div>
  );
}
