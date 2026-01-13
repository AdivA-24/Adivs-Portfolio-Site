import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_dark_topographic_lines_with_neon_lime_accents.png";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
        
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </motion.div>

      {/* Decorative Tech Elements */}
      <div className="absolute top-32 left-6 md:left-12 font-mono text-xs text-muted-foreground/40 hidden md:block">
        COORD: 34.0522° N, 118.2437° W<br/>
        SYS: ONLINE<br/>
        VER: 2.0.4
      </div>
      
      <div className="absolute bottom-32 right-6 md:right-12 font-mono text-xs text-muted-foreground/40 hidden md:block text-right">
        MEMORY: 64GB<br/>
        UPTIME: 99.99%<br/>
        RENDER: GPU-ACCELERATED
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-mono text-primary mb-6 tracking-[0.2em] uppercase text-sm border-l-2 border-primary pl-4"
          >
            Hello, I am
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.9] mb-8"
          >
            ADIV
            <br />
            <span className="text-stroke-1 md:text-stroke-2 text-transparent hover:text-foreground transition-colors duration-500">
              AHSAN
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 w-32 bg-primary mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed"
          >
            <span className="text-foreground font-medium">Software Engineer & Data Architect.</span> Building scalable cross-data warehouse APIs and high-performance infrastructure.
          </motion.p>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ArrowDown className="text-primary w-8 h-8 opacity-80" />
      </motion.div>
    </section>
  );
}
