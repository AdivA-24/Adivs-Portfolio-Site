import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  repeat?: number;
  duration?: number;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  repeat = 4,
  duration = 20,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: reverse ? "-100%" : "0%" }}
            animate={{ x: reverse ? "0%" : "-100%" }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
            }}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "group-hover:[animation-play-state:paused]": pauseOnHover,
            })}
          >
            {children}
          </motion.div>
        ))}
    </div>
  );
}
