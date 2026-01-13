import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Timeline from "@/components/sections/Timeline";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
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

      <footer id="contact" className="py-32 border-t border-border bg-secondary/20 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight"
          >
            Ready to build <br className="md:hidden" />
            <span className="font-serif italic text-primary">something</span> <span className="text-foreground">extraordinary?</span>
          </motion.h2>

          <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Currently building scalable solutions at PMG. Open to discussing interesting engineering challenges.
          </motion.p>
          
          <div className="flex justify-center space-x-6 mb-20">
            {RESUME_DATA.social.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 rounded-full border border-border bg-background hover:border-primary transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md"
              >
                <div className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
                <social.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors relative z-10" />
              </a>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-border/50 pt-8 font-mono text-xs text-muted-foreground uppercase tracking-widest">
            <p>© {new Date().getFullYear()} Adiv Ahsan</p>
            <p>Designed & Engineered with React + Tailwind</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
