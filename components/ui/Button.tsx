"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
  target?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  target,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-inter font-medium text-sm tracking-wide transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-accent text-background font-semibold hover:bg-accent-light hover:shadow-[0_0_24px_rgba(57,255,176,0.35)]",
    outline:
      "border border-accent/60 text-accent hover:bg-accent hover:text-background hover:border-accent",
    ghost:
      "text-white/60 hover:text-white underline underline-offset-4",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
