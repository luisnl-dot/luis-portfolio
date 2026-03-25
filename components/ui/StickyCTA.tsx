"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:block"
        >
          <a
            href="#contact"
            className="flex items-center gap-3 bg-accent text-background font-inter font-semibold text-sm px-6 py-3 rounded-full shadow-2xl hover:bg-accent-light transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-background/50 animate-pulse" />
            Kostenlose Website-Analyse →
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
