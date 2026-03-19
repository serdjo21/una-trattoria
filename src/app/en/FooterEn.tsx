"use client";

import React from "react";

const INFO = {
  name: "Una Trattoria",
  tagline: "Vračar • Belgrade",
  phone: "+381 63 336 444",
  address: "Njegoševa 8, Vračar, Belgrade",
  hours: "08:00 – 23:00 Mon-Sat | 10:00 – 23:00 Sun",
};

function Divider() {
  return <div className="h-px w-full bg-white/10" />;
}

export default function FooterEn() {
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
              Italian pizzas and specialties in the heart of Belgrade. Authentic Neapolitan pizza, fresh pasta, and genuine flavors of Italy.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-xs tracking-[0.35em] uppercase text-white/60">
              Contact
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
              Opening Hours
            </div>

            <div className="text-white/70">{INFO.hours}</div>
          </div>

        </div>

        <Divider />

        <div className="pt-8 text-xs text-white/40">
          © {new Date().getFullYear()} {INFO.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}