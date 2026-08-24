import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export default function Cursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 38, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 600, damping: 38, mass: 0.4 });

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.body.classList.add("cursor-ready");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement;
      const interactive = !!el.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="hover"]'
      );
      setHovering(interactive);
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      document.body.classList.remove("cursor-ready");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [reduce, x, y]);

  if (!enabled) return null;

  const size = hovering ? 56 : pressed ? 14 : 12;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[80] mix-blend-difference"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="rounded-full border border-white/80"
        animate={{
          width: size,
          height: size,
          backgroundColor: hovering ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0)",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{ marginLeft: -size / 2, marginTop: -size / 2 }}
      />
    </motion.div>
  );
}
