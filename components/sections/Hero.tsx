"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

function HeroUrlInput() {
  const [url, setUrl] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!url) return;
    setLoading(true);
    try {
      await fetch("https://formspree.io/f/mreogkkk", {
        method: "POST",
        body: JSON.stringify({ website: url, source: "Hero" }),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });
      setSent(true);
    } catch {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
    setLoading(false);
  }

  if (sent) {
    return (
      <div className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-accent/10 border border-accent/30 w-fit">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="font-inter text-sm text-accent">Erhalten — ich melde mich in 48h!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-0 max-w-md">
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
        placeholder="https://deine-website.de"
        className="flex-1 bg-white/5 border border-white/10 border-r-0 rounded-l-xl px-4 py-3.5 font-inter text-sm text-white placeholder-white/25 focus:outline-none focus:border-accent/50 transition-colors"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-accent text-background font-inter font-semibold text-sm px-5 py-3.5 rounded-r-xl hover:bg-accent-light transition-colors whitespace-nowrap disabled:opacity-60"
      >
        {loading ? "..." : "Analysieren →"}
      </button>
    </form>
  );
}

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
  { target: 323, suffix: "%", label: "CVR Shopify", display: "3,23%" },
  { target: 100, suffix: "%", label: "Mobile-first" },
  { target: 48, suffix: "h", label: "Ø Lieferzeit Prototyp" },
];

export default function Hero() {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 pt-24 pb-20">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(57,255,176,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
      <div aria-hidden className="absolute top-[-5%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />
      <div aria-hidden className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-accent/3 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">

          {/* Left — text block */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-10"
            >
              <span className="w-6 h-px bg-accent" />
              <span className="font-inter text-[11px] tracking-[0.25em] uppercase text-accent">
                Webdesigner & Shopify Developer · Berlin
              </span>
            </motion.div>

            <div className="mb-10" style={{ perspective: "800px" }}>
              <h1 className="font-syne font-extrabold leading-[0.88] tracking-tight text-white mb-2"
                style={{ fontSize: "clamp(4rem, 11vw, 9rem)" }}>
                {"LUIS".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40, rotateX: -60 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
              <h1 className="font-syne font-extrabold leading-[0.88] tracking-tight text-white"
                style={{ fontSize: "clamp(4rem, 11vw, 9rem)" }}>
                {"NAGEL".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40, rotateX: -60 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: 0.39 + i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span
                  className="text-accent"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.75, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: "inline-block" }}
                >.</motion.span>
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {["WEBDESIGN", "SHOPIFY", "DEVELOPMENT"].map((tag, i) => (
                <span key={tag} className="font-inter text-[11px] tracking-[0.2em] text-white/40 uppercase">
                  {tag}{i < 2 ? <span className="text-accent mx-2">·</span> : ""}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-inter text-base text-white/50 max-w-md leading-relaxed mb-12"
            >
              Veraltete Websites kosten jeden Tag Kunden.
              Ich baue die neue Version — fertig, klickbar, in 48h.
              Du siehst sie zuerst. Du entscheidest danach.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-col gap-3"
            >
              <HeroUrlInput />
              <p className="font-inter text-[11px] text-white/20">
                Kostenlos · Unverbindlich · Antwort in 48h
              </p>
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
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-inter text-[10px] text-white/60">Offen für Projekte</span>
              </div>

            </div>
          </motion.div>
        </div>

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
