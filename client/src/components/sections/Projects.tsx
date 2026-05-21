import { ArrowUpRight } from "lucide-react";
import { RESUME_DATA } from "@/lib/data";
import { useSectionReveal } from "@/hooks/use-section-reveal";

export default function Projects() {
  const ref = useSectionReveal<HTMLElement>();

  return (
    <section
      id="projects"
      ref={ref}
      className="py-32 bg-background relative"
    >
      <div className="container mx-auto px-6">
        <p data-reveal="eyebrow" className="section-eyebrow mb-4">
          03 / Selected work
        </p>
        <h2
          data-reveal="heading"
          className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-foreground"
        >
          Things I've made<span className="text-primary">.</span>
        </h2>
        <div
          data-reveal="underline"
          className="h-px w-32 bg-primary mt-6 mb-16 origin-left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden">
          {RESUME_DATA.projects.map((project, index) => (
            <article
              key={index}
              data-reveal="item"
              data-cursor="hover"
              className="group relative bg-background p-10 md:p-12 transition-colors hover:bg-primary/5 overflow-hidden"
            >
              <div className="flex justify-between items-start mb-10">
                <span className="text-primary font-mono text-[10px] uppercase tracking-[0.25em] border border-primary/30 px-3 py-1.5 rounded-full">
                  {project.award || "Project"}
                </span>
                {"period" in project && project.period && (
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1.5">
                    {project.period}
                  </span>
                )}
              </div>

              <div className="flex items-start justify-between gap-4 mb-6">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-[1.05]">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-6 h-6 text-primary mt-2 shrink-0 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
              </div>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="font-mono text-[11px] uppercase tracking-wider text-foreground/70 border border-foreground/15 px-2.5 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
