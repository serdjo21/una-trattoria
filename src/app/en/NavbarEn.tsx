"use client";

import Link from "next/link";
import Image from "next/image";

export default function NavbarEn() {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-black/25 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        
        {/* Logo vodi na root */}
        <Link href="/" className="tracking-[0.18em] uppercase text-sm">
          <span className="text-[rgb(var(--gold))]">UNA</span> TRATTORIA
        </Link>

        <nav className="flex items-center gap-6 text-sm text-white/80">

          {/* Menu link */}
          <a
            className="hover:text-white transition"
            href="/menuv2.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Menu
          </a>

          {/* Contact link */}
          <a className="hover:text-white transition" href="/kontakt">
            Contact
          </a>

          {/* English flag (static, samo za prikaz) */}
          <div className="ml-4 w-9 h-6 relative">
            <Image
              src="/flags/en.svg"
              alt="English"
              fill
              className="object-cover"
            />
          </div>

        </nav>
      </div>
    </header>
  );
}