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
          <span className="text-primary text-2xl font-mono">02</span> EXPERIENCE
        </motion.h2>

        <div className="relative border-l border-primary/20 ml-4 md:ml-12 space-y-20">
          {RESUME_DATA.experience.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative pl-12 md:pl-20 group cursor-default"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-background border-2 border-primary rounded-full transition-all duration-300 group-hover:scale-[2] group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(var(--primary),0.5)] z-10" />
              
              {/* Connecting Line Glow */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/0 group-hover:bg-primary/50 transition-colors duration-500 origin-top" />

              <div className="mb-10 transition-transform duration-300 group-hover:translate-x-2">
                <h3 className="text-2xl md:text-4xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                  {job.company}
                </h3>
              </div>
              
              <div className="space-y-12">
                {job.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="relative">
                     {roleIndex > 0 && (
                        <div className="absolute -left-[53px] md:-left-[85px] top-4 w-3 h-3 border border-primary/50 rounded-full bg-background" />
                     )}
                     
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                      <h4 className="text-xl md:text-2xl text-primary/80 font-medium group-hover:text-primary transition-colors">
                        {role.title}
                      </h4>
                      <span className="font-mono text-sm text-muted-foreground mt-2 md:mt-0 bg-secondary px-3 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors whitespace-nowrap">
                        {role.period}
                      </span>
                    </div>
                    
                    {/* {role.description && (
                      <p className="text-muted-foreground mb-4 italic">
                        {role.description}
                      </p>
                    )} */}
                    
                    {role.highlights.length > 0 && (
                      <ul className="space-y-4 mt-4">
                        {role.highlights.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed text-lg transition-colors group-hover:text-foreground">
                            <span className="mt-2 w-1.5 h-1.5 bg-primary/40 rounded-full shrink-0 group-hover:bg-primary transition-colors" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
