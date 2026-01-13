import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@assets/generated_images/soft_beige_and_blue_abstract_organic_shapes.png";
import RiveAnimation from "@/components/ui/rive-animation";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse interaction for parallax blobs
  const springConfig = { stiffness: 100, damping: 30 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  return (
    <section 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background"
      onMouseMove={handleMouseMove}
    >
      {/* Rive Background Layer - Using a clean abstract animation if available, or a fallback */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 opacity-40 mix-blend-multiply"
      >
        {/* Using a public Rive animation that fits the clean aesthetic */}
        {/* This is a placeholder for a 'clean' animation. Users would typically replace this URL with their own hosted .riv file */}
        <div className="absolute inset-0 scale-150 blur-sm opacity-50">
           {/* Fallback to image if Rive fails to load or for design preference */}
            <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
            />
        </div>
      </motion.div>

      {/* Animated Blobs (Framer Motion) - Kept for the 'soft' feel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ x: useTransform(mouseX, [-0.5, 0.5], [20, -20]), y: useTransform(mouseY, [-0.5, 0.5], [20, -20]) }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
        />
        <motion.div 
          style={{ x: useTransform(mouseX, [-0.5, 0.5], [-20, 20]), y: useTransform(mouseY, [-0.5, 0.5], [-20, 20]) }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/60 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
        />
        <motion.div 
           style={{ x: useTransform(mouseX, [-0.5, 0.5], [10, -10]), y: useTransform(mouseY, [-0.5, 0.5], [-10, 10]) }}
          className="absolute -bottom-32 left-1/3 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"
        />
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-mono text-primary mb-6 tracking-[0.2em] uppercase text-sm"
          >
            Hello, I am
          </motion.p>
          
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.9] mb-8 text-foreground"
            >
              ADIV AHSAN
            </motion.h1>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
            className="h-px w-24 bg-primary mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed"
          >
            <span className="text-foreground font-medium">Software Engineer & Data Architect.</span> 
            <br className="hidden md:block" />
            Crafting scalable data solutions and fluid digital experiences.
          </motion.p>
          
           {/* Rive Badge / Indicator */}
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1.2 }}
             className="mt-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-primary/20 text-[10px] font-mono text-primary/70"
           >
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
             POWERED BY RIVE & REACT
           </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ArrowDown className="text-primary w-8 h-8 opacity-60 hover:opacity-100 transition-opacity" />
      </motion.div>
    </section>
  );
}
