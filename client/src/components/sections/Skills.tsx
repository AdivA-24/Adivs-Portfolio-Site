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
    <section id="skills" className="py-32 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-bold mb-20 flex items-center gap-4"
        >
          <span className="text-primary">02.</span> SKILLS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-background border border-border p-8 hover:border-primary/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-display font-bold text-primary mb-6 border-b border-border pb-4">
                {category.name}
              </h3>
              <ul className="space-y-3">
                {category.items.map((skill, i) => (
                  <li key={i} className="font-mono text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-primary text-xs opacity-50">&gt;</span> {skill}
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
