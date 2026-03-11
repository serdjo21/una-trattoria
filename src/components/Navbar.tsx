"use client";

import Link from "next/link";
import Image from "next/image";
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

          <a className="hover:text-white transition" href="/kontakt">
            {t.kontakt}
          </a>

          <button
            onClick={toggleLang}
            className="ml-4 relative w-9 h-6 rounded-sm overflow-hidden border border-white/20 hover:border-[rgb(var(--gold))] transition"
            title={lang === "sr" ? "Switch to English" : "Prebaci na srpski"}
          >
            <Image
              src={lang === "sr" ? "/flags/en.svg" : "/flags/sr.png"}
              alt="language"
              fill
              className="object-cover"
            />
          </button>

        </nav>
      </div>
    </header>
  );
}