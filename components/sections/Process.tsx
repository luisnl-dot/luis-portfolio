"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const steps = [
  {
    num: "01",
    title: "Ich schaue mir deine Website an.",
    body: "Ich melde mich bei dir — mit konkreten Beispielen was du verlierst. Keine Agentur-Präsentation. Direkt, in 5 Minuten.",
    tag: "Kostenlos · Unverbindlich",
  },
  {
    num: "02",
    title: "Ich baue eine fertige neue Version.",
    body: "In 48 Stunden siehst du wie deine neue Website aussieht — komplett fertig, live, klickbar. Bevor du irgendetwas entscheidest.",
    tag: "48h · Kein Vorschuss",
  },
  {
    num: "03",
    title: "Du entscheidest.",
    body: "Gefällt sie dir? Wir gehen live. Gefällt sie dir nicht? Kein Vertrag, keine Rechnung, kein Drama. Du gehst kein Risiko ein.",
    tag: "Kein Risiko · Kein Vertrag",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-6 h-px bg-accent" />
            <span className="font-inter text-[11px] tracking-[0.25em] uppercase text-accent">
              Wie es funktioniert
            </span>
          </div>
          <h2
            className="font-syne font-extrabold leading-[0.9] tracking-tight text-white"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            SIEH SIE ZUERST.<br />
            <span className="text-accent">DANN ENTSCHEID.</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.12}>
              <motion.div
                className="group relative flex flex-col gap-6 p-8 rounded-2xl bg-surface border border-border h-full"
                whileHover={{ borderColor: "rgba(57,255,176,0.35)", y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Number */}
                <span className="font-syne font-extrabold text-6xl leading-none text-white/6 group-hover:text-accent/15 transition-colors select-none">
                  {step.num}
                </span>

                {/* Content */}
                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="font-syne font-bold text-xl text-white leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-inter text-sm text-white/50 leading-relaxed">
                    {step.body}
                  </p>
                </div>

                {/* Tag */}
                <span className="self-start font-inter text-[11px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-accent/30 text-accent">
                  {step.tag}
                </span>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-accent group-hover:w-full rounded-b-2xl transition-all duration-500" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-inter text-sm text-white/30 max-w-md">
            Du hast eine veraltete Website und weißt, dass sie dir Kunden kostet?
            Dann schreib mir kurz — ich schau sie mir an.
          </p>
          <Button href="#contact" variant="primary">
            Kostenlose Analyse →
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
