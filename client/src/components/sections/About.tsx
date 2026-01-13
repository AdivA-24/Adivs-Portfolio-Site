import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import hikeImg from "@assets/IMG_8993_1768290565388.JPG";
import horseImg from "@assets/IMG_8050_1768290614817.PNG";

export default function About() {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-bold mb-20 flex items-center gap-4 text-foreground"
        >
          <span className="text-primary text-2xl font-mono">01</span> ABOUT
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="space-y-8">
             <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground"
            >
              When I'm not architecting scalable data pipelines or building performant web applications, you can find me exploring the world.
            </motion.p>
             <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-foreground/80"
            >
              I believe that the best engineering solutions come from a diverse set of experiences. Whether it's hiking through canyons or connecting with nature, these experiences fuel my creativity and problem-solving approach.
            </motion.p>
          </div>

          <div className="relative h-[600px] w-full hidden md:block">
             {/* Hiking Photo */}
            <motion.div
              initial={{ opacity: 0, rotate: -6, x: -50 }}
              whileInView={{ opacity: 1, rotate: -3, x: 0 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 w-80 h-96 rounded-2xl overflow-hidden border-4 border-background shadow-2xl transform origin-bottom-left"
            >
              <img 
                src={hikeImg} 
                alt="Hiking in Zion" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
               <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 backdrop-blur-sm text-white text-sm font-mono opacity-0 hover:opacity-100 transition-opacity">
                 📍 Zion National Park
               </div>
            </motion.div>

             {/* Horse Photo */}
             <motion.div
              initial={{ opacity: 0, rotate: 6, x: 50 }}
              whileInView={{ opacity: 1, rotate: 3, x: 0 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute bottom-0 right-0 w-80 h-96 rounded-2xl overflow-hidden border-4 border-background shadow-2xl transform origin-top-right z-10"
            >
              <img 
                src={horseImg} 
                alt="Horse riding" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
               <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 backdrop-blur-sm text-white text-sm font-mono opacity-0 hover:opacity-100 transition-opacity">
                 📍 Exploring new trails
               </div>
            </motion.div>
          </div>
          
           {/* Mobile Layout (Stacked) */}
          <div className="md:hidden space-y-8">
             <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                <img src={hikeImg} alt="Hiking" className="object-cover w-full h-full" />
             </div>
             <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                <img src={horseImg} alt="Horse riding" className="object-cover w-full h-full" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
