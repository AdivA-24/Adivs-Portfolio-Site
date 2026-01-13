import { motion } from "framer-motion";
import { Fit } from "@rive-app/react-canvas";
import { RESUME_DATA } from "@/lib/data";
import RiveAnimation from "@/components/ui/rive-animation";

export default function Contact() {
  return (
    <footer id="contact" className="py-32 border-t border-border bg-secondary/20 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Rive Mascot for Personality */}
        <div className="w-64 h-64 md:w-80 md:h-80 mb-8 -mt-20">
          <RiveAnimation 
            src="https://ucarecdn.com/d2e95826-37c2-4c9d-af6c-e96e00a232f6/rumplelooks.riv" 
            stateMachines={["State Machine 1"]} 
            autoplay={true}
            fit={Fit.Contain}
          />
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight text-center"
        >
          Ready to build <br className="md:hidden" />
          <span className="font-serif italic text-primary">something</span> <span className="text-foreground">extraordinary?</span>
        </motion.h2>

        <motion.p
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-center"
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
        
        <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-border/50 pt-8 font-mono text-xs text-muted-foreground uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Adiv Ahsan</p>
          <p>Designed & Engineered with React + Tailwind + Rive</p>
        </div>
      </div>
    </footer>
  );
}
