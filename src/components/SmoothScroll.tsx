import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "framer-motion";

export default function SmoothScroll() {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Anchor links: smooth scroll with navbar offset
    const handleAnchor = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 72;
      lenis.scrollTo(top, { duration: 1.2 });
    };
    document.addEventListener("click", handleAnchor);

    return () => {
      document.removeEventListener("click", handleAnchor);
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [reduce]);

  return null;
}
