import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";

export default function Timeline() {
  return (
    <section id="experience" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-bold mb-20 flex items-center gap-4 text-foreground"
        >
          <span className="text-primary text-2xl font-mono">01</span> EXPERIENCE
        </motion.h2>

        <div className="relative border-l border-primary/20 ml-4 md:ml-12 space-y-20">
          {RESUME_DATA.experience.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative pl-12 md:pl-20 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-background border-2 border-primary rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-primary" />

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                  {job.company}
                </h3>
                <span className="font-mono text-sm text-muted-foreground mt-2 md:mt-0 bg-secondary px-3 py-1 rounded-full">
                  {job.period}
                </span>
              </div>
              
              <h4 className="text-xl text-primary font-medium mb-6">{job.role}</h4>
              
              <ul className="space-y-4">
                {job.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed text-lg">
                    <span className="mt-2 w-1.5 h-1.5 bg-primary/40 rounded-full shrink-0" />
                    {point}
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
