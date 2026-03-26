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
                  Kein Risiko
                </span>
                <span className="w-6 h-px bg-accent" />
              </div>

              {/* Headline */}
              <h2
                className="font-syne font-extrabold text-white leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
              >
                Neue Website.
                <br />
                In <span className="text-accent">48 Stunden.</span>
              </h2>

              <p className="font-inter text-white/50 text-lg max-w-xl leading-relaxed">
                Schick mir deine aktuelle Website — ich schaue sie mir an
                und zeige dir in 48h wie die neue Version aussieht.
                Kostenlos. Unverbindlich. Kein Vertrag.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Button href="#contact" variant="primary" className="text-base px-10 py-4">
                  Kostenlose Website-Analyse →
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

              {/* Guarantee cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-4 border-t border-white/6">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5 text-accent" viewBox="0 0 20 20" fill="none">
                        <path d="M10 2L3 5v5c0 4.418 2.985 8.563 7 9.951C14.015 18.563 17 14.418 17 10V5L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    label: "Kein Risiko",
                    desc: "Kein Vertrag, keine Rechnung wenn du nicht willst",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-accent" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    ),
                    label: "48h Prototyp",
                    desc: "Du siehst deine neue Website bevor du entscheidest",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-accent" viewBox="0 0 20 20" fill="none">
                        <path d="M3 10l5 5L17 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    label: "Kostenlos",
                    desc: "Analyse und Prototyp sind 100% kostenlos",
                  },
                ].map((g) => (
                  <div key={g.label} className="flex items-start gap-3 p-4 rounded-xl bg-white/3 border border-white/6">
                    <div className="mt-0.5 flex-shrink-0">{g.icon}</div>
                    <div>
                      <p className="font-inter text-sm font-semibold text-white/80 mb-0.5">{g.label}</p>
                      <p className="font-inter text-xs text-white/35 leading-relaxed">{g.desc}</p>
                    </div>
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
