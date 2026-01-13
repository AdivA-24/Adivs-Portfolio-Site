import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { RESUME_DATA } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-bold mb-20 flex items-center gap-4 text-foreground"
        >
          <span className="text-primary text-2xl font-mono">04</span> PROJECTS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESUME_DATA.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group h-full relative bg-secondary/40 border border-transparent hover:border-primary/20 p-8 md:p-12 transition-all duration-500 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Blob Background Effect */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-primary font-mono text-xs uppercase tracking-widest border border-primary/20 px-3 py-1 rounded-full bg-background/50">
                    {project.award || "Project"}
                  </span>
                  <ArrowUpRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500" />
                </div>

                <h3 className="text-3xl font-display font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="font-mono text-sm text-foreground/70 bg-background/50 px-2 py-1 rounded">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
