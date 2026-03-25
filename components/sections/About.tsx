import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const tools = [
  "Next.js", "React", "Tailwind CSS", "Framer Motion",
  "Shopify", "Figma", "TypeScript", "Vercel",
  "Claude AI", "ChatGPT", "Photoshop", "Canva",
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <AnimatedSection className="mb-20">
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-accent" />
            <span className="font-inter text-[11px] tracking-[0.25em] uppercase text-accent">
              Über mich
            </span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — portrait */}
          <AnimatedSection>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-surface border border-white/8">
                <Image
                  src="/images/about-portrait.jpg"
                  alt="Luis Nagel"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
              </div>

              {/* Floating stat */}
              <div className="absolute -bottom-5 -right-5 bg-background border border-accent/30 px-5 py-3 rounded-xl">
                <p className="font-syne font-extrabold text-accent text-xl leading-none">3+</p>
                <p className="font-inter text-white/40 text-[10px] mt-0.5 uppercase tracking-wider">Jahre</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — text */}
          <AnimatedSection delay={0.15} className="flex flex-col gap-8 pt-4">
            <h2 className="font-syne font-extrabold leading-[0.9] tracking-tight text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Kurz zu mir<span className="text-accent">.</span>
            </h2>

            <div className="flex flex-col gap-5 font-inter text-white/55 text-base leading-relaxed">
              <p>
                21 Jahre alt. Berlin. Ausgebildeter Medientechnischer Assistent Bild & Ton —
                und seit 2021 aktiv in der Praxis, nicht in der Theorie.
              </p>
              <p>
                Ich baue Websites und Onlineshops für kleine Unternehmen, die wissen
                dass ihre aktuelle Seite Kunden kostet — aber keine Zeit haben,
                sich monatelang mit einer Agentur rumzuschlagen.
              </p>
              <p>
                Mein Modell: Ich baue die neue Website in 48h fertig vor.
                Du siehst das Ergebnis bevor du irgendetwas unterschreibst.
                Gefällt sie dir nicht — kein Problem, keine Kosten.
              </p>
              <p>
                Ich arbeite schnell, nutze moderne KI-Tools als Verstärker,
                und liefere das was Agenturen für das Dreifache nehmen würden.
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Standort", value: "Berlin / Remote" },
                { label: "Verfügbar", value: "Neue Projekte offen" },
                { label: "Ausbildung", value: "Medientechn. Assistent B&T" },
                { label: "Sprachen", value: "Deutsch · Englisch" },
              ].map((fact) => (
                <div key={fact.label} className="p-4 rounded-lg bg-surface border border-white/6">
                  <p className="font-inter text-[10px] text-white/25 uppercase tracking-widest mb-1">{fact.label}</p>
                  <p className="font-inter text-sm text-white/75 font-medium">{fact.value}</p>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div>
              <p className="font-inter text-[10px] text-white/25 uppercase tracking-widest mb-3">Tools & Plattformen</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-xs font-inter rounded-md border border-white/8 text-white/40 hover:border-accent/40 hover:text-accent transition-colors cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 flex-wrap">
              <Button href="#contact" variant="primary">Anfragen</Button>
              <Button href="https://linkedin.com/in/luisnl" target="_blank" variant="outline">LinkedIn</Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
