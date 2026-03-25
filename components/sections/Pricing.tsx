"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-surface">

            {/* Big green glow top center */}
            <div
              aria-hidden
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 blur-[100px] pointer-events-none"
            />

            <div className="relative px-8 py-20 md:px-20 md:py-28 flex flex-col items-center text-center gap-10">

              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="w-6 h-px bg-accent" />
                <span className="font-inter text-[11px] tracking-[0.25em] uppercase text-accent">
                  Bereit?
                </span>
                <span className="w-6 h-px bg-accent" />
              </div>

              {/* Headline */}
              <h2
                className="font-syne font-extrabold text-white leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
              >
                Lass uns Content
                <br />
                machen, der{" "}
                <span className="text-accent">verkauft.</span>
              </h2>

              <p className="font-inter text-white/50 text-lg max-w-xl leading-relaxed">
                Kein Paket, kein Funnel. Schreib mir kurz was du machst —
                ich komme mit einem konkreten Vorschlag zurück.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Button href="#contact" variant="primary" className="text-base px-10 py-4">
                  Anfragen →
                </Button>
                <Button
                  href="https://wa.me/4917641114317?text=Hey%20Luis%2C%20ich%20m%C3%B6chte%20mein%20Projekt%20mit%20dir%20besprechen."
                  target="_blank"
                  variant="outline"
                  className="text-base px-10 py-4"
                >
                  WhatsApp
                </Button>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap justify-center gap-8 pt-4 border-t border-white/6 w-full">
                {[
                  { dot: "bg-green-400", text: "Projektanfragen offen" },
                  { dot: "bg-accent", text: "Antwort innerhalb 24h" },
                  { dot: "bg-white/30", text: "Berlin · Remote möglich" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${item.dot}`} />
                    <span className="font-inter text-sm text-white/40">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
