"use client";

/**
 * Site footer with legal and utility links.
 */
export function FooterSection() {
  return (
    <footer className="border-t border-ink/6 py-8 bg-paper">
      <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-sans text-[16px] font-bold tracking-tight">
          Karo<span className="font-display italic text-accent">Pitch</span>
        </span>
        <div className="flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] text-dim font-sans font-semibold">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a key={link} href="#" className="hover:text-accent transition-colors duration-200">
              {link}
            </a>
          ))}
        </div>
        <span className="text-[12px] text-dim font-body">
          &copy; {new Date().getFullYear()} KaroStartup. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
