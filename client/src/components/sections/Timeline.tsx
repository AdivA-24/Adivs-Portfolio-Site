import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RESUME_DATA } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // Title reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      });
      tl.fromTo(
        "[data-reveal='eyebrow']",
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0
      )
        .fromTo(
          "[data-reveal='heading']",
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          0.1
        )
        .fromTo(
          "[data-reveal='underline']",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.9, ease: "circ.out", transformOrigin: "left" },
          0.25
        );

      if (reduced) return;

      // Sticky-title pattern: pin the left rail while the timeline scrolls
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${listRef.current?.offsetHeight ?? 0}`,
        pin: stickyRef.current,
        pinSpacing: false,
      });

      // Progressive reveal of each job entry
      gsap.utils.toArray<HTMLElement>("[data-job]").forEach((job) => {
        gsap.fromTo(
          job,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: job,
              start: "top 78%",
              end: "top 40%",
              toggleActions: "play none none reverse",
            },
          }
        );
        const items = job.querySelectorAll<HTMLElement>("[data-bullet]");
        if (items.length) {
          gsap.fromTo(
            items,
            { x: -12, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.05,
              ease: "power2.out",
              scrollTrigger: {
                trigger: job,
                start: "top 70%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-32 bg-background relative"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sticky left rail */}
          <div ref={stickyRef} className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 pb-8">
              <p data-reveal="eyebrow" className="section-eyebrow mb-4">
                01 / Experience
              </p>
              <h2
                data-reveal="heading"
                className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-foreground leading-[0.95]"
              >
                Where I've<br />
                shipped<span className="text-primary">.</span>
              </h2>
              <div
                data-reveal="underline"
                className="h-px w-32 bg-primary mt-6 origin-left"
              />
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mt-8">
                2022 — Present
              </p>
            </div>
          </div>

          {/* Scrolling timeline */}
          <div ref={listRef} className="lg:col-span-8 space-y-24">
            {RESUME_DATA.experience.map((job, index) => (
              <div
                key={index}
                data-job
                className="relative border-l border-foreground/10 pl-8 md:pl-12 group"
              >
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--background))]" />

                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                    {job.company}
                  </h3>
                  {"location" in job && job.location && (
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {job.location}
                    </span>
                  )}
                </div>

                <div className="space-y-10 mt-8">
                  {job.roles.map((role, roleIndex) => (
                    <div key={roleIndex}>
                      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3 gap-2">
                        <h4 className="text-lg md:text-xl text-foreground/90 font-medium">
                          {role.title}
                        </h4>
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
                          {role.period}
                        </span>
                      </div>

                      {role.highlights.length > 0 && (
                        <ul className="space-y-3 mt-4">
                          {role.highlights.map((point, i) => (
                            <li
                              key={i}
                              data-bullet
                              className="flex items-start gap-3 text-muted-foreground leading-relaxed text-[15px] md:text-base"
                            >
                              <span className="mt-[10px] w-1 h-1 bg-primary rounded-full shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
