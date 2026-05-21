import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { RESUME_DATA } from "@/lib/data";
import Magnetic from "@/components/ui/magnetic";
import { useLenis } from "@/lib/smooth-scroll";

const NAV_ITEMS = ["Experience", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const lenis = useLenis();

  useEffect(() => {
    function onScroll(e?: { progress: number; scroll: number }) {
      const scrollY = e?.scroll ?? window.scrollY;
      const max =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      const p = e?.progress ?? scrollY / max;
      setProgress(p);
      setScrolled(scrollY > 50);
    }

    if (lenis) {
      lenis.on("scroll", onScroll);
      onScroll();
      return () => {
        lenis.off("scroll", onScroll);
      };
    }
    window.addEventListener("scroll", () => onScroll(), { passive: true });
    onScroll();
    return () =>
      window.removeEventListener("scroll", () => onScroll());
  }, [lenis]);

  function jumpTo(hash: string) {
    const id = hash.replace(/^#/, "");
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) {
      lenis.scrollTo(el, { duration: 1.2, offset: -80 });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <span className="text-2xl font-display font-bold tracking-tighter hover:text-primary transition-colors cursor-pointer text-foreground">
              ADIV<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Magnetic key={item}>
                <button
                  type="button"
                  onClick={() => jumpTo(`#${item.toLowerCase()}`)}
                  data-cursor="hover"
                  className="text-[11px] font-mono uppercase tracking-[0.22em] text-foreground/70 hover:text-primary transition-colors px-2 py-1"
                >
                  {item}
                </button>
              </Magnetic>
            ))}
            <Magnetic>
              <a
                href={RESUME_DATA.social.find((s) => s.name === "Resume")?.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="px-4 py-2 border border-foreground text-foreground font-mono text-[11px] uppercase tracking-[0.22em] hover:bg-foreground hover:text-background transition-all duration-300 rounded-full block"
              >
                Resume ↗
              </a>
            </Magnetic>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-foreground/10 p-6 md:hidden flex flex-col space-y-4 shadow-2xl"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => jumpTo(`#${item.toLowerCase()}`)}
                className="text-left text-2xl font-display font-medium text-foreground hover:text-primary"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
        style={{
          backgroundColor: "hsl(var(--primary))",
          transform: `scaleX(${progress})`,
          transition: "transform 80ms linear",
        }}
      />
    </>
  );
}
