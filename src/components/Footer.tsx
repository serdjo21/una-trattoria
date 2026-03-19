"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { texts } from "@/i18n";

const INFO = {
  name: "Una Trattoria",
  tagline: "Vračar • Beograd",
  phone: "+381 63 336 444",
  address: "Njegoševa 8, Vračar, Beograd",
  hours: "08:00 – 23:00 pon-sub | 10:00 – 23:00 ned",
};

function Divider() {
  return <div className="h-px w-full bg-white/10" />;
}

export default function Footer() {
  const { lang } = useLanguage();
  const t = texts[lang];

  return (
    <footer className="bg-black/85">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          
          <div className="space-y-3">
            <div className="text-xs tracking-[0.35em] uppercase text-white/60">
              {INFO.tagline}
            </div>

            <div className="font-[var(--font-serif)] text-3xl">
              {INFO.name}
            </div>

            <p className="text-white/60 text-sm leading-relaxed">
              {t.footer.opis}
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-xs tracking-[0.35em] uppercase text-white/60">
              {t.footer.kontakt}
            </div>

            <a
              className="block text-white/80 hover:text-white transition"
              href={`tel:${INFO.phone.replace(/\s+/g, "")}`}
            >
              {INFO.phone}
            </a>

            <div className="text-white/70">{INFO.address}</div>
          </div>

          <div className="space-y-3">
            <div className="text-xs tracking-[0.35em] uppercase text-white/60">
              {t.footer.radnoVrijeme}
            </div>

            <div className="text-white/70">{INFO.hours}</div>
          </div>

        </div>

        <Divider />

        <div className="pt-8 text-xs text-white/40">
          © {new Date().getFullYear()} {INFO.name}. {t.footer.prava}
        </div>


        <div className="pt-8 text-xs text-white/40">
            <a href="/privacy-policy" target="blank" className="block text-white/80 hover:text-white transition">
               Privacy Policy
            </a>        
        </div>

      </div>
    </footer>
  );
}