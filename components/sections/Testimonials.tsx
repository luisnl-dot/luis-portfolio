"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    quote: "Luis hat unsere Website komplett neu gebaut — in unter 48 Stunden. Kein Vorschuss, kein Risiko. Wir haben die neue Version gesehen und sofort ja gesagt.",
    name: "XBULL",
    role: "E-Commerce · Shopify",
    initial: "X",
    result: "3,23% Conversion Rate",
  },
  {
    quote: "Innerhalb von Tagen hatten wir eine professionelle Online-Präsenz. Luis hat genau verstanden was wir brauchen — und es schneller geliefert als jede Agentur.",
    name: "Greek Food Olympia",
    role: "Restaurant · Webauftritt",
    initial: "G",
    result: "5.300+ Follower aufgebaut",
  },
  {
    quote: "Unsere alte Website hat uns Kunden gekostet. Die neue Version von Luis hat das komplett gedreht. Klares Design, schnell, und endlich auf dem Handy nutzbar.",
    name: "Giuseppetti Kaffee",
    role: "Café · Webdesign",
    initial: "G",
    result: "Mobil-first Redesign",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-6 h-px bg-accent" />
            <span className="font-inter text-[11px] tracking-[0.25em] uppercase text-accent">
              Was Kunden sagen
            </span>
          </div>
          <h2
            className="font-syne font-extrabold leading-[0.9] tracking-tight text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            ERGEBNISSE DIE<br />
            <span className="text-accent">FÜR SICH SPRECHEN.</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <motion.div
                className="group relative flex flex-col gap-5 p-8 rounded-2xl bg-surface border border-border h-full"
                whileHover={{ borderColor: "rgba(57,255,176,0.35)", y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Quote mark */}
                <span className="font-syne font-extrabold text-6xl leading-none text-accent/15 select-none -mb-2">
                  "
                </span>

                {/* Quote */}
                <p className="font-inter text-sm text-white/55 leading-relaxed flex-1">
                  {t.quote}
                </p>

                {/* Result badge */}
                <span className="self-start font-inter text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-accent/30 text-accent">
                  {t.result}
                </span>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-syne font-bold text-xs text-accent">{t.initial}</span>
                  </div>
                  <div>
                    <p className="font-inter text-xs font-semibold text-white/80">{t.name}</p>
                    <p className="font-inter text-[10px] text-white/30">{t.role}</p>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-accent group-hover:w-full rounded-b-2xl transition-all duration-500" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
