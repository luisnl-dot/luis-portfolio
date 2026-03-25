"use client";

import { useEffect } from "react";

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full rounded-2xl overflow-hidden"
      data-url="https://calendly.com/luisn-l/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=141414&text_color=ffffff&primary_color=39FFB0"
      style={{ minHeight: "900px" }}
    />
  );
}
