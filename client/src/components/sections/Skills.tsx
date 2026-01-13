import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import InteractiveCard from "@/components/ui/interactive-card";

const skillCategories = [
  { name: "Languages", items: RESUME_DATA.skills.languages },
  { name: "Frameworks", items: RESUME_DATA.skills.frameworks },
  { name: "Cloud & DevOps", items: RESUME_DATA.skills.cloud },
  { name: "Databases", items: RESUME_DATA.skills.databases },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-bold mb-20 flex items-center gap-4 text-foreground"
        >
          <span className="text-primary text-2xl font-mono">02</span> SKILLS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <InteractiveCard key={idx}>
              <h3 className="text-xl font-display font-bold text-foreground mb-6 border-b border-border/50 pb-4">
                {category.name}
              </h3>
              <ul className="space-y-3">
                {category.items.map((skill, i) => (
                  <li key={i} className="font-mono text-sm text-muted-foreground flex items-center gap-2 group-hover:text-foreground transition-colors">
                    <span className="text-primary/70 text-xs group-hover:scale-125 transition-transform duration-300">●</span> {skill}
                  </li>
                ))}
              </ul>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  );
}
