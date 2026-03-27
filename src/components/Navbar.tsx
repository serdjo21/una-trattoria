"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { texts } from "@/i18n";

export default function Navbar() {
  const pathname = usePathname(); // trenutna ruta
  const isEn = pathname.startsWith("/en"); // proverava da li je engleska verzija
  const t = isEn ? texts.en : texts.sr;

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-black/25 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        
        <Link href={isEn ? "/en" : "/"} className="tracking-[0.18em] uppercase text-sm">
          <span className="text-[rgb(var(--gold))]">UNA</span> TRATTORIA
        </Link>

        <nav className="flex items-center gap-6 text-sm text-white/80">

          <a
            className="hover:text-white transition"
            href={"/menu"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.meni}
          </a>

          <a className="hover:text-white transition" href={isEn ? "/en/kontakt" : "/kontakt"}>
            {t.kontakt}
          </a>

          {/* Jezik link */}
          <Link
            href={isEn ? "/" : "/en"}
            className="ml-4 relative w-9 h-6 rounded-sm overflow-hidden border border-white/20 hover:border-[rgb(var(--gold))] transition"
            title={isEn ? "Prebaci na srpski" : "Switch to English"}
          >
            <Image
              src={isEn ? "/flags/sr.png" : "/flags/en.svg"}
              alt="language"
              fill
              className="object-cover"
            />
          </Link>

        </nav>
      </div>
    </header>
  );
}