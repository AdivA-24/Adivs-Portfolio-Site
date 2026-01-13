import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { RESUME_DATA } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-bold mb-20 flex items-center gap-4"
        >
          <span className="text-primary">03.</span> PROJECTS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESUME_DATA.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-secondary/10 border border-border p-8 md:p-12 hover:bg-secondary/20 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-8 h-8 text-primary" />
              </div>

              <div className="mb-8">
                <span className="text-primary font-mono text-xs uppercase tracking-widest border border-primary/20 px-3 py-1 rounded-full">
                  {project.award || "Project"}
                </span>
              </div>

              <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="font-mono text-sm text-muted-foreground/80">
                    #{t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
