import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Standard section entrance choreography:
 *   - eyebrow slides up + fades
 *   - heading slides up + fades
 *   - accent underline draws left→right
 *   - body children fade + lift with 60ms stagger
 */
export function useSectionReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      });

      const eyebrow = el.querySelector<HTMLElement>("[data-reveal='eyebrow']");
      const heading = el.querySelector<HTMLElement>("[data-reveal='heading']");
      const underline = el.querySelector<HTMLElement>("[data-reveal='underline']");
      const body = el.querySelectorAll<HTMLElement>("[data-reveal='item']");

      if (eyebrow) {
        tl.fromTo(
          eyebrow,
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
          0
        );
      }
      if (heading) {
        tl.fromTo(
          heading,
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          0.1
        );
      }
      if (underline) {
        tl.fromTo(
          underline,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.9, ease: "circ.out", transformOrigin: "left" },
          0.25
        );
      }
      if (body.length) {
        tl.fromTo(
          body,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55, ease: "power2.out", stagger: 0.06 },
          0.3
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}
