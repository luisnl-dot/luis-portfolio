"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const services = [
  {
    num: "01",
    title: "Website",
    sub: "Next.js · Tailwind · Framer Motion",
    description:
      "Saubere, schnelle Websites die nicht nur gut aussehen — sondern konvertieren. Mobile-first, performance-optimiert, in Tagen nicht Wochen.",
    items: ["Design & Entwicklung", "Mobile-first & responsiv", "Performance-optimiert", "Deployment & Übergabe"],
  },
  {
    num: "02",
    title: "Onlineshop",
    sub: "Shopify · E-Commerce",
    description:
      "Shop-Design das zur Marke passt — kein generisches Template. Mit Tracking von der Produktseite bis zum Checkout.",
    items: ["Shopify Setup & Branding", "Produktseiten & Checkout", "Conversion-Optimierung", "Laufende Betreuung möglich"],
  },
  {
    num: "03",
    title: "Redesign",
    sub: "Bestehende Website · Refresh",
    description:
      "Deine Website sieht aus wie 2018? Ich modernisiere Design und Technik — ohne dass du alles neu aufbauen musst.",
    items: ["Design-Audit & Analyse", "Modernes Redesign", "Performance-Verbesserung", "Schnelle Umsetzung"],
    badge: "Beliebt",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-6 h-px bg-accent" />
            <span className="font-inter text-[11px] tracking-[0.25em] uppercase text-accent">
              Was ich mache
            </span>
          </div>
          <h2 className="font-syne font-extrabold leading-[0.9] tracking-tight text-white"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
            WEB DER<br />
            <span className="text-accent">VERKAUFT.</span>
          </h2>
        </AnimatedSection>

        {/* Service list — bold numbered rows */}
        <div className="flex flex-col">
          {services.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 0.1}>
              <motion.div
                className="group relative grid grid-cols-1 lg:grid-cols-[120px_1fr_1fr] gap-6 lg:gap-12 py-10 border-t border-white/8"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Number */}
                <div className="flex items-start gap-4 lg:block">
                  <span className="font-syne font-extrabold text-5xl leading-none text-white/8 group-hover:text-accent/20 transition-colors duration-300 select-none">
                    {s.num}
                  </span>
                  {s.badge && (
                    <span className="mt-2 text-[10px] font-inter font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border border-accent/40 text-accent">
                      {s.badge}
                    </span>
                  )}
                </div>

                {/* Title + description */}
                <div>
                  <h3 className="font-syne font-extrabold text-3xl text-white mb-1 leading-tight">
                    {s.title}
                  </h3>
                  <p className="font-inter text-[11px] tracking-widest uppercase text-accent mb-5">
                    {s.sub}
                  </p>
                  <p className="font-inter text-sm text-white/50 leading-relaxed max-w-sm">
                    {s.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 justify-center">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 font-inter text-sm text-white/60">
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-500" />
              </motion.div>
            </AnimatedSection>
          ))}

          {/* Last border */}
          <div className="border-t border-white/8" />
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.35} className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-inter text-sm text-white/30 max-w-sm">
            Website oder Shop — wir reden kurz und ich sag dir was sinnvoll ist.
          </p>
          <Button href="#contact" variant="primary">
            Projekt besprechen →
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
