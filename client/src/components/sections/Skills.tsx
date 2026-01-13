import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";

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
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-background/80 backdrop-blur-sm border border-border/50 p-8 hover:border-primary/30 transition-all duration-300 rounded-xl hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className="text-xl font-display font-bold text-foreground mb-6 border-b border-border/50 pb-4">
                {category.name}
              </h3>
              <ul className="space-y-3">
                {category.items.map((skill, i) => (
                  <li key={i} className="font-mono text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-primary/70 text-xs">●</span> {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
