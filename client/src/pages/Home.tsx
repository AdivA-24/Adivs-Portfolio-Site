import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Timeline from "@/components/sections/Timeline";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Marquee from "@/components/ui/marquee";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground font-sans overflow-hidden">
      <Navbar />

      <main>
        <Hero />

        {/* Metrics marquee — punctuation-only accent */}
        <div className="py-10 border-y border-foreground/10 bg-secondary/40 overflow-hidden">
          <Marquee
            duration={45}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight"
          >
            <span className="mx-10 text-foreground">10K+ daily requests</span>
            <span className="mx-10 text-primary">●</span>
            <span className="mx-10 text-foreground">86% NL→SQL accuracy</span>
            <span className="mx-10 text-primary">●</span>
            <span className="mx-10 text-foreground">164s → 28s p95</span>
            <span className="mx-10 text-primary">●</span>
            <span className="mx-10 text-foreground">200GB / day</span>
            <span className="mx-10 text-primary">●</span>
            <span className="mx-10 text-foreground">99.8% uptime</span>
            <span className="mx-10 text-primary">●</span>
          </Marquee>
        </div>

        <Timeline />

        {/* Stack marquee */}
        <div className="py-10 border-y border-foreground/10 bg-background overflow-hidden">
          <Marquee
            duration={35}
            reverse
            className="text-3xl md:text-5xl font-display font-bold tracking-tight text-transparent text-stroke-1"
          >
            <span className="mx-10">TYPESCRIPT</span>
            <span className="mx-10 text-primary text-stroke-0">✦</span>
            <span className="mx-10">PYTHON</span>
            <span className="mx-10 text-primary text-stroke-0">✦</span>
            <span className="mx-10">LANGGRAPH</span>
            <span className="mx-10 text-primary text-stroke-0">✦</span>
            <span className="mx-10">CUBE.JS</span>
            <span className="mx-10 text-primary text-stroke-0">✦</span>
            <span className="mx-10">DBT METRICFLOW</span>
            <span className="mx-10 text-primary text-stroke-0">✦</span>
            <span className="mx-10">AWS</span>
            <span className="mx-10 text-primary text-stroke-0">✦</span>
          </Marquee>
        </div>

        <Skills />
        <Projects />
      </main>

      <Contact />
    </div>
  );
}
