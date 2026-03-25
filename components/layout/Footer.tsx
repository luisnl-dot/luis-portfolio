export default function Footer() {
  return (
    <footer className="border-t border-white/6 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-syne font-extrabold text-white/80 tracking-widest text-sm uppercase">
          LN<span className="text-accent">.</span>
        </span>
        <p className="font-inter text-xs text-white/20 text-center">
          © {new Date().getFullYear()} Luis Nagel · Zeuthen
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:luisn.l@icloud.com"
            className="font-inter text-xs text-white/30 hover:text-accent transition-colors"
          >
            luisn.l@icloud.com
          </a>
          <span className="text-white/10">·</span>
          <a href="/impressum" className="font-inter text-xs text-white/30 hover:text-accent transition-colors">
            Impressum
          </a>
          <span className="text-white/10">·</span>
          <a href="/datenschutz" className="font-inter text-xs text-white/30 hover:text-accent transition-colors">
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}
