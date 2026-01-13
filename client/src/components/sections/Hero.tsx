import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@assets/generated_images/soft_beige_and_blue_abstract_organic_shapes.png";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Enhanced Mouse interaction for parallax blobs
  // Increased stiffness and damping for a more "responsive" feel
  const springConfig = { stiffness: 150, damping: 20 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Subtle parallax only - removed direct cursor tracking for a cleaner feel
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
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 opacity-40 mix-blend-multiply"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
      </motion.div>

      {/* Animated Blobs (Framer Motion) - Enhanced Range */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ 
            x: useTransform(mouseX, [-0.5, 0.5], [60, -60]), 
            y: useTransform(mouseY, [-0.5, 0.5], [60, -60]) 
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
        />
        <motion.div 
          style={{ 
            x: useTransform(mouseX, [-0.5, 0.5], [-60, 60]), 
            y: useTransform(mouseY, [-0.5, 0.5], [-60, 60]) 
          }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/60 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
        />
        <motion.div 
           style={{ 
             x: useTransform(mouseX, [-0.5, 0.5], [40, -40]), 
             y: useTransform(mouseY, [-0.5, 0.5], [-40, 40]) 
           }}
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
            <span className="text-foreground font-medium">Software Engineer II.</span>  
            <br className="hidden md:block" />
            Crafting scalable data solutions and fluid digital experiences.
          </motion.p>
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
