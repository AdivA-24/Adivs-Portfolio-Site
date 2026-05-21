import { RESUME_DATA } from "@/lib/data";
import { useSectionReveal } from "@/hooks/use-section-reveal";

export default function Contact() {
  const ref = useSectionReveal<HTMLElement>();

  return (
    <footer
      id="contact"
      ref={ref}
      className="py-32 border-t border-foreground/10 bg-foreground text-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <p
          data-reveal="eyebrow"
          className="section-eyebrow mb-6"
          style={{ color: "hsl(var(--background) / 0.6)" }}
        >
          04 / Contact
        </p>

        <h2
          data-reveal="heading"
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.92] max-w-5xl"
        >
          Let's build<br />
          something<span className="text-primary">.</span>
        </h2>

        <div
          data-reveal="underline"
          className="h-px w-32 bg-primary mt-10 mb-16 origin-left"
        />

        <div
          data-reveal="item"
          className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end"
        >
          <div className="md:col-span-7">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-background/80 max-w-2xl">
              Currently shipping data infrastructure at PMG. Open to talking
              about new opportunities, AI-for-data, or anything you've
              been stuck on for too long.
            </p>
            <a
              href={`mailto:${RESUME_DATA.email}`}
              data-cursor="hover"
              className="inline-block mt-10 text-2xl md:text-4xl font-display font-bold text-primary hover:underline underline-offset-8 decoration-2 transition-all"
            >
              {RESUME_DATA.email} ↗
            </a>
          </div>

          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-background/50 mb-4">
              Find me elsewhere
            </p>
            <ul className="space-y-3">
              {RESUME_DATA.social
                .filter((s) => s.name !== "Email")
                .map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="hover"
                      className="group flex items-center justify-between border-b border-background/15 py-3 hover:border-primary transition-colors"
                    >
                      <span className="font-display text-xl group-hover:text-primary transition-colors">
                        {social.name}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-background/50 group-hover:text-primary transition-colors">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-background/15 mt-24 pt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-background/50">
          <p>© {new Date().getFullYear()} Adiv Ahsan</p>
          <p>Built with React · Three.js · GSAP · Lenis</p>
        </div>
      </div>
    </footer>
  );
}
