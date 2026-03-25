import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const contactMethods = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "E-Mail",
    value: "luisn.l@icloud.com",
    href: "mailto:luisn.l@icloud.com",
    cta: "E-Mail schreiben",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 1.18 2 2 0 014 .02h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+49 176 41114317",
    href: "https://wa.me/4917641114317?text=Hey%20Luis%2C%20ich%20m%C3%B6chte%20mein%20Projekt%20mit%20dir%20besprechen.",
    cta: "WhatsApp schreiben",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/luisnl",
    href: "https://linkedin.com/in/luisnl",
    cta: "Auf LinkedIn",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-accent" />
            <span className="font-inter text-xs tracking-[0.2em] uppercase text-white/50">
              Kontakt
            </span>
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] tracking-tight text-white">
            Lass uns
            <br />
            <span className="gradient-text">reden.</span>
          </h2>
          <p className="font-inter text-white/50 text-lg mt-6 max-w-lg leading-relaxed">
            Bereit wenn du es bist. Kurze Beschreibung deines Projekts — dann schauen wir,
            ob und wie ich helfen kann.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left — contact options */}
          <div className="flex flex-col gap-4">
            {contactMethods.map((method, i) => (
              <AnimatedSection key={method.label} delay={i * 0.1}>
                <a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 p-6 rounded-2xl bg-surface border border-border hover:border-accent/50 transition-all duration-300 hover:bg-surface/80"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent-light group-hover:bg-accent/20 transition-colors">
                      {method.icon}
                    </div>
                    <div>
                      <p className="font-inter text-xs text-white/30 uppercase tracking-widest mb-0.5">
                        {method.label}
                      </p>
                      <p className="font-inter text-sm text-white/80 font-medium">
                        {method.value}
                      </p>
                    </div>
                  </div>
                  <span className="font-inter text-xs text-accent-light opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                    {method.cta} →
                  </span>
                </a>
              </AnimatedSection>
            ))}

            {/* Calendly embed placeholder */}
            <AnimatedSection delay={0.35}>
              <div className="p-6 rounded-2xl bg-surface border border-dashed border-white/15 text-center">
                <p className="font-inter text-xs text-white/30 mb-3 uppercase tracking-widest">Optionales Calendly-Embed</p>
                <p className="font-inter text-xs text-white/20 leading-relaxed">
                  Ersetze diesen Block mit deinem Calendly-Widget:<br />
                  <code className="text-white/30">{'<!-- Calendly inline widget -->'}</code>
                </p>
                <Button href="https://calendly.com" target="_blank" variant="outline" className="mt-4 text-xs">
                  Termin buchen (Calendly)
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — CTA statement */}
          <AnimatedSection delay={0.2}>
            <div className="relative p-10 rounded-2xl bg-gradient-to-br from-accent/15 to-surface border border-accent/20 overflow-hidden h-full flex flex-col justify-between gap-10 min-h-[400px]">
              {/* Glow */}
              <div
                aria-hidden
                className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[80px] pointer-events-none"
              />

              <div className="relative">
                <p className="font-syne font-bold text-3xl text-white leading-snug mb-4">
                  Lass uns Content machen,
                  <br />
                  <span className="text-accent-light">der verkauft.</span>
                </p>
                <p className="font-inter text-white/50 text-sm leading-relaxed">
                  Kein Agentur-Overhead. Keine langen Briefing-Runden.
                  Du bekommst eine direkte Linie zu einer Person, die liefert.
                </p>
              </div>

              <div className="relative flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="font-inter text-sm text-white/60">Projektanfragen offen</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
                  <span className="font-inter text-sm text-white/60">Antwort i.d.R. innerhalb 24h</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                  <span className="font-inter text-sm text-white/60">Berlin-basiert · remote möglich</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
