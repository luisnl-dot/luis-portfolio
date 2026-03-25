"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-[9998] w-[500px] h-[500px] rounded-full hidden md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(57,255,176,0.045) 0%, transparent 65%)",
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ left: pos.x, top: pos.y }}
      transition={{ type: "spring", stiffness: 400, damping: 40, mass: 0.1 }}
    />
  );
}
