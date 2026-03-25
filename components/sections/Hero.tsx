"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

function useCountUp(target: number, duration = 1800, startOnView = true) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(!startOnView);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { count, trigger: () => setStarted(true) };
}

const stats = [
  { target: 3, suffix: "+", label: "Jahre Erfahrung" },
  { target: 8000, suffix: "+", label: "Follower aufgebaut", display: "8.000+" },
  { target: 323, suffix: "%", label: "CVR Shopify", display: "3,23%" },
  { target: 150, suffix: "k", label: "Views / Monat" },
];

export default function Hero() {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 pt-24 pb-20">
      {/* Subtle background glow */}
      <div
        aria-hidden
        className="absolute top-[-5%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px] pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">

          {/* Left — text block */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-10"
            >
              <span className="w-6 h-px bg-accent" />
              <span className="font-inter text-[11px] tracking-[0.25em] uppercase text-accent">
                Social Media Creative · Berlin
              </span>
            </motion.div>

            {/* Big name headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-syne font-extrabold leading-[0.88] tracking-tight text-white mb-2"
                style={{ fontSize: "clamp(4rem, 11vw, 9rem)" }}>
                LUIS
              </h1>
              <h1 className="font-syne font-extrabold leading-[0.88] tracking-tight text-white mb-10"
                style={{ fontSize: "clamp(4rem, 11vw, 9rem)" }}>
                NAGEL<span className="text-accent">.</span>
              </h1>
            </motion.div>

            {/* Tag line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {["CONTENT", "STRATEGY", "PRODUCTION"].map((tag, i) => (
                <span key={tag} className="font-inter text-[11px] tracking-[0.2em] text-white/40 uppercase">
                  {tag}{i < 2 ? <span className="text-accent mx-2">·</span> : ""}
                </span>
              ))}
            </motion.div>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-inter text-base text-white/50 max-w-md leading-relaxed mb-12"
            >
              Ich baue Content-Systeme, die Marken messbar wachsen lassen —
              von der ersten Idee bis zum messbaren Ergebnis.
              Eine Person. Kein Overhead. Echte Resultate.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="#contact" variant="primary">
                Jetzt anfragen →
              </Button>
              <Button href="#case-studies" variant="outline">
                Projekte ansehen
              </Button>
            </motion.div>
          </div>

          {/* Right — portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="relative w-[280px] xl:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-surface">
              <Image
                src="/images/hero-portrait.jpg"
                alt="Luis Nagel"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Green accent bar bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
            </div>
          </motion.div>
        </div>

        {/* Bottom stats — count-up on enter */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-24 pt-8 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {stats.map((s, i) => (
            <StatItem key={s.label} stat={s} delay={1 + i * 0.07} trigger={isInView} />
          ))}
        </motion.div>
      </div>

      {/* Scroll line */}
      <motion.div
        className="absolute bottom-8 left-8 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-accent/60 to-transparent"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
        <span className="font-inter text-[9px] tracking-[0.25em] text-white/20 uppercase rotate-90 translate-x-5">Scroll</span>
      </motion.div>
    </section>
  );
}

function StatItem({
  stat,
  delay,
  trigger,
}: {
  stat: { target: number; suffix: string; label: string; display?: string };
  delay: number;
  trigger: boolean;
}) {
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (trigger && !started) setStarted(true);
  }, [trigger, started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1600;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * stat.target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, stat.target]);

  const display = stat.display
    ? started
      ? stat.display
      : "0"
    : `${count.toLocaleString("de-DE")}${stat.suffix}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <p className="font-syne font-extrabold text-2xl text-white leading-none mb-1">
        {display}
      </p>
      <p className="font-inter text-[10px] uppercase tracking-widest text-white/30">
        {stat.label}
      </p>
    </motion.div>
  );
}
