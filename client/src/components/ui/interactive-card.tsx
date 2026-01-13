import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import TiltCard from "./tilt-card";

export default function InteractiveCard({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string 
}) {
  return (
    <TiltCard className="h-full">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "group h-full relative overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm border border-border p-8 transition-colors hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5",
        className
      )}
    >
      {/* Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Rive Animation on Hover (Subtle texture) */}
      <div className="absolute right-0 top-0 w-32 h-32 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none mix-blend-multiply">
         {/* Using a simple shape animation URL for texture */}
         {/* <RiveAnimation src="https://cdn.rive.app/animations/shapes.riv" /> */}
      </div>

      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
    </TiltCard>
  );
}
