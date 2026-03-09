"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { texts } from "@/i18n";

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const t = texts[lang];

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-black/25 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <Link href="/" className="tracking-[0.18em] uppercase text-sm">
          <span className="text-[rgb(var(--gold))]">UNA</span> TRATTORIA
        </Link>
        <nav className="flex items-center gap-6 text-sm text-white/80">
          <a
            className="hover:text-white transition"
            href="/menuv2.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.meni}
          </a>
          <a className="hover:text-white transition" href="/kontakt">{t.kontakt}</a>
          <a
            className="ml-2 rounded-full px-4 py-2 text-xs tracking-wide border border-[rgba(210,170,95,.35)] hover:border-[rgba(210,170,95,.75)] transition"
            href="tel:+38160000000"
          >
            {t.pozovi}
          </a>
          <button
            onClick={toggleLang}
            className="ml-4"
            title={lang === "sr" ? "Switch to English" : "Prebaci na srpski"}
          >
            {lang === "sr" ? "🇬🇧" : "🇷🇸"}
          </button>
        </nav>
      </div>
    </header>
  );
}