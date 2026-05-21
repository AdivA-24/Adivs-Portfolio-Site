import { RESUME_DATA } from "@/lib/data";
import { useSectionReveal } from "@/hooks/use-section-reveal";

const skillCategories = [
  { name: "Languages", items: RESUME_DATA.skills.languages },
  { name: "Frameworks", items: RESUME_DATA.skills.frameworks },
  { name: "Cloud & Infra", items: RESUME_DATA.skills.cloud },
  { name: "Data Stores", items: RESUME_DATA.skills.databases },
];

export default function Skills() {
  const ref = useSectionReveal<HTMLElement>();

  return (
    <section
      id="skills"
      ref={ref}
      className="py-32 bg-secondary/50 relative border-y border-foreground/5"
    >
      <div className="container mx-auto px-6">
        <p data-reveal="eyebrow" className="section-eyebrow mb-4">
          02 / Stack
        </p>
        <h2
          data-reveal="heading"
          className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-foreground"
        >
          What I build with<span className="text-primary">.</span>
        </h2>
        <div
          data-reveal="underline"
          className="h-px w-32 bg-primary mt-6 mb-16 origin-left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              data-reveal="item"
              className="bg-background p-8 group transition-colors hover:bg-primary/5"
            >
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="text-lg font-display font-bold text-foreground">
                  {category.name}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="space-y-2.5">
                {category.items.map((skill, i) => (
                  <li
                    key={i}
                    className="font-mono text-sm text-foreground/80 flex items-center gap-2.5"
                  >
                    <span className="text-primary/70 text-[10px]">▸</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
