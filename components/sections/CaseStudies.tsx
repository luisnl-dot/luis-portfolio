"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StatBadge from "@/components/ui/StatBadge";

const cases = [
  {
    number: "01",
    client: "XBULL GmbH",
    category: "Outdoor & Offroad Brand · Berlin",
    headline: "Marke aufbauen. Von Grund auf.",
    description:
      "XBULL hatte keinen konsistenten Auftritt, kein Content-System, keinen messbaren Link zwischen Social und Shop. 1,5 Jahre Vollverantwortung — von der Strategie bis zum finalen Schnitt.",
    role: ["Content Strategy", "Video Production", "Creative Direction", "Shopify"],
    channels: "Instagram · TikTok · YouTube",
    stats: [
      { value: "8.000+", label: "Follower (von 2.200)" },
      { value: "150k", label: "Views / Monat" },
      { value: "3,23%", label: "CVR Shopify" },
      { value: "+113%", label: "Erreichte Konten" },
    ],
    highlight: "83,7% organische Reichweite · <300€ Adspend / Monat · Ø 1.000€+ Bestellwert",
    imageNote: "[ XBULL Case Study Visual ]",
    imagePath: "/images/xbull/cover.png",
    accent: "from-orange-500/10",
  },
  {
    number: "02",
    client: "Greek Food Olympia",
    category: "Griechisches Restaurant · Berlin",
    headline: "Von null auf 5.000+.",
    description:
      "Den Instagram-Kanal von Grund auf aufgebaut — Konzept, Feed Design, Content-Plan, Strategie. Seit 2021 in laufender Betreuung. Paid + Organic Strategie für lokale Berliner Zielgruppe.",
    role: ["Instagram Strategy", "Feed Design", "Content Production", "Paid Ads"],
    channels: "Instagram",
    stats: [
      { value: "5.359", label: "Follower (von 0)" },
      { value: "59K+", label: "Views / Monat" },
      { value: "141", label: "Neue Follower (30 Tage)" },
      { value: "4 Jahre", label: "Laufende Betreuung" },
    ],
    highlight: "Lokale Zielgruppe Berlin · Paid + Organic · Vollständiger Markenauftritt",
    imageNote: "[ GFO Case Study Visual ]",
    imagePath: "/images/gfo/cover.png",
    accent: "from-blue-500/10",
  },
  {
    number: "03",
    client: "Giuseppetti Kaffee",
    category: "Italienische Kaffee-Brand · Web",
    headline: "Premium Web. Fertig deployed.",
    description:
      "Vollständige Website für eine italienische Kaffee-Brand — dark, premium, heritage-feel. Next.js, Tailwind, Framer Motion. Live auf Vercel.",
    role: ["Next.js Development", "UI/UX Design", "Framer Motion", "Vercel Deploy"],
    channels: "Web",
    stats: [
      { value: "100%", label: "Mobile-first" },
      { value: "Next.js", label: "Tech Stack" },
      { value: "Live", label: "auf Vercel" },
      { value: "Custom", label: "Animations" },
    ],
    highlight: "giuseppetti-kaffee.vercel.app · Serif Typography · Premium Dark Aesthetic",
    imageNote: "[ Giuseppetti Screenshot ]",
    imagePath: "/images/giuseppetti/cover.png",
    accent: "from-amber-500/10",
    link: "https://giuseppetti-kaffee.vercel.app/",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-28 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-accent" />
            <span className="font-inter text-xs tracking-[0.2em] uppercase text-white/50">
              Ausgewählte Projekte
            </span>
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(2.2rem,5vw,4rem)] leading-tight text-white">
            Zahlen, die
            <br />
            <span className="gradient-text">für sich sprechen.</span>
          </h2>
        </AnimatedSection>

        {/* Case cards */}
        <div className="flex flex-col gap-8">
          {cases.map((c, i) => (
            <AnimatedSection key={c.client} delay={i * 0.08}>
              <motion.div
                className={`relative rounded-2xl border border-border bg-surface overflow-hidden group`}
                whileHover={{ borderColor: "rgba(57,255,176,0.35)" }}
                transition={{ duration: 0.2 }}
              >
                {/* Accent glow */}
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${c.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Left — text */}
                  <div className="p-8 lg:p-10 flex flex-col gap-6">
                    {/* Client + number */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-inter text-xs tracking-[0.2em] uppercase text-white/30 block mb-1">
                          {c.category}
                        </span>
                        <h3 className="font-syne font-bold text-2xl text-white">
                          {c.client}
                        </h3>
                      </div>
                      <span className="font-syne font-extrabold text-6xl text-white/5 leading-none select-none flex-shrink-0">
                        {c.number}
                      </span>
                    </div>

                    {/* Headline */}
                    <p className="font-syne font-bold text-xl text-white/80">
                      {c.headline}
                    </p>

                    {/* Description */}
                    <p className="font-inter text-sm text-white/50 leading-relaxed">
                      {c.description}
                    </p>

                    {/* Role tags */}
                    <div className="flex flex-wrap gap-2">
                      {c.role.map((r) => (
                        <span
                          key={r}
                          className="px-3 py-1 text-[11px] font-inter tracking-wide rounded-full border border-white/10 text-white/40"
                        >
                          {r}
                        </span>
                      ))}
                    </div>

                    {/* Channels */}
                    <p className="font-inter text-xs text-white/30 tracking-widest uppercase">
                      {c.channels}
                    </p>

                    {/* Link if exists */}
                    {c.link && (
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-inter text-sm text-accent-light hover:text-white transition-colors"
                      >
                        Website ansehen →
                      </a>
                    )}
                  </div>

                  {/* Right — stats + visual */}
                  <div className="border-t lg:border-t-0 lg:border-l border-border p-8 lg:p-10 flex flex-col gap-8">
                    {/* Case study image */}
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={c.imagePath}
                        alt={c.client}
                        fill
                        className="object-cover object-top"
                      />
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                      {c.stats.map((s) => (
                        <StatBadge key={s.label} value={s.value} label={s.label} />
                      ))}
                    </div>

                    {/* Highlight callout */}
                    <div className="p-4 rounded-xl bg-accent/5 border border-accent/15">
                      <p className="font-inter text-xs text-white/40 leading-relaxed">
                        {c.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
