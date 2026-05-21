import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portraitSrc from "@assets/IMG_8993_1768290565388.JPG";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(portraitRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      <div className="container mx-auto px-6 pt-32 pb-16 lg:pt-40 lg:pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left — type */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-eyebrow mb-6"
            >
              <span className="text-primary">●</span> Software Engineer II · PMG · Dallas
            </motion.p>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="font-display font-bold tracking-tighter text-foreground leading-[0.92] text-[clamp(3.2rem,9vw,8.5rem)]"
              >
                ADIV
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
                className="font-display font-bold tracking-tighter text-foreground leading-[0.92] text-[clamp(3.2rem,9vw,8.5rem)] flex items-baseline gap-2"
              >
                AHSAN<span className="text-primary">.</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.7, ease: "circOut" }}
              className="h-px w-28 bg-primary origin-left mt-8 mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              I build cross-warehouse data infrastructure, NL-to-SQL agents, and
              high-throughput pipelines. Lately:{" "}
              <span className="text-foreground font-medium">
                LangGraph, dbt MetricFlow, SQS Infra
              </span>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-10 flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground"
            >
              <a
                href="#experience"
                className="group inline-flex items-center gap-3 px-4 py-2 border border-foreground/15 rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                <span>See the work</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>
              <span aria-hidden>/</span>
              <span>Open to new opportunities</span>
            </motion.div>
          </div>

          {/* Right — WebGL portrait */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <motion.div
              ref={portraitRef}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full max-w-[420px] mx-auto overflow-hidden"
            >
              <img
                src={portraitSrc}
                alt="Adiv Ahsan"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground"
      >
        <span className="w-6 h-px bg-foreground/30" />
        Scroll
        <span className="w-6 h-px bg-foreground/30" />
      </motion.div>
    </section>
  );
}
