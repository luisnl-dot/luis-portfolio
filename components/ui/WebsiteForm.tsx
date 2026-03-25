"use client";

import { useState } from "react";

export default function WebsiteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mreogkkk", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#39FFB0" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="font-syne font-bold text-xl text-white">Erhalten!</p>
        <p className="font-inter text-sm text-white/50 max-w-xs">
          Ich schaue mir deine Website an und melde mich innerhalb von 48h mit einer fertigen Demo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="font-inter text-[11px] tracking-[0.2em] uppercase text-white/30 mb-2 block">
          Deine aktuelle Website *
        </label>
        <input
          type="url"
          name="website"
          required
          placeholder="https://deine-website.de"
          className="w-full bg-background border border-border rounded-xl px-4 py-3 font-inter text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent/60 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="font-inter text-[11px] tracking-[0.2em] uppercase text-white/30 mb-2 block">
            Dein Name *
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Max Mustermann"
            className="w-full bg-background border border-border rounded-xl px-4 py-3 font-inter text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent/60 transition-colors"
          />
        </div>
        <div>
          <label className="font-inter text-[11px] tracking-[0.2em] uppercase text-white/30 mb-2 block">
            E-Mail oder Telefon *
          </label>
          <input
            type="text"
            name="contact"
            required
            placeholder="mail@firma.de"
            className="w-full bg-background border border-border rounded-xl px-4 py-3 font-inter text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent/60 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="font-inter text-[11px] tracking-[0.2em] uppercase text-white/30 mb-2 block">
          Kurze Nachricht (optional)
        </label>
        <textarea
          name="message"
          rows={3}
          placeholder="Was soll die neue Website leisten?"
          className="w-full bg-background border border-border rounded-xl px-4 py-3 font-inter text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent/60 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-accent text-background font-inter font-semibold text-sm py-3.5 rounded-xl hover:bg-accent-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
      >
        {status === "loading" ? "Wird gesendet..." : "Website einsenden — kostenlos & unverbindlich →"}
      </button>

      {status === "error" && (
        <p className="font-inter text-xs text-red-400 text-center">
          Etwas ist schiefgelaufen. Schreib mir direkt: luisn.l@icloud.com
        </p>
      )}

      <p className="font-inter text-[11px] text-white/20 text-center">
        Kein Spam. Keine Kosten. Ich melde mich persönlich innerhalb von 48h.
      </p>
    </form>
  );
}
