"use client";

import { motion } from "framer-motion";

const items = [
  "SOCIAL MEDIA",
  "CONTENT STRATEGY",
  "VERTICAL VIDEO",
  "CREATIVE DIRECTION",
  "WEBSITE DEVELOPMENT",
  "SHOPIFY",
  "BERLIN",
  "FORMAT ENTWICKLUNG",
  "PAID ADS",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-4 border-y border-white/6">
      <motion.div
        className="flex gap-10 whitespace-nowrap w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-syne font-extrabold text-xs tracking-[0.25em] uppercase text-white/15"
          >
            {item}
            <span className="text-accent ml-10">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
