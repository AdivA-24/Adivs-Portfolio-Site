import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SESSION_KEY = "adiv.intro.seen";
const APP_READY_EVENT = "app:ready";

export default function Intro() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(SESSION_KEY) !== "1";
  });

  useEffect(() => {
    if (!visible) {
      window.dispatchEvent(new Event(APP_READY_EVENT));
      return;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const total = reduced ? 200 : 1500;
    const t = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(SESSION_KEY, "1");
      window.dispatchEvent(new Event(APP_READY_EVENT));
    }, total);
    return () => window.clearTimeout(t);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.85, 0, 0.15, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ backgroundColor: "hsl(var(--foreground))" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-display font-bold text-5xl md:text-7xl tracking-tighter"
            style={{ color: "hsl(var(--background))" }}
          >
            ADIV<span style={{ color: "hsl(var(--primary))" }}>.</span>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.0, delay: 0.2, ease: "easeInOut" }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 w-40 h-px origin-left"
            style={{ backgroundColor: "hsl(var(--primary))" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
