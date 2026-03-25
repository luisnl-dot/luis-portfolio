"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  badge?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  badge,
}: ServiceCardProps) {
  return (
    <motion.div
      className="relative flex flex-col gap-5 p-7 rounded-2xl bg-surface border border-border overflow-hidden group"
      whileHover={{ y: -4, borderColor: "rgba(124,58,237,0.5)" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {badge && (
        <span className="absolute top-5 right-5 text-[10px] font-inter font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border border-accent/40 text-accent-light">
          {badge}
        </span>
      )}

      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent-light text-xl">
        {icon}
      </div>

      <div>
        <h3 className="font-syne font-bold text-xl text-white mb-2">{title}</h3>
        <p className="font-inter text-sm text-white/60 leading-relaxed">
          {description}
        </p>
      </div>

      <ul className="flex flex-col gap-2 mt-auto">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-white/70 font-inter">
            <span className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full bg-accent/20 flex items-center justify-center">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M1 4L3.2 6.2L7 2" stroke="#9F67FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
