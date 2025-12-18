import React from "react";

const INFO = {
  name: "Una Trattoria",
  tagline: "Napoletana • Beograd",
  phone: "+381 69 2134 843",
  address: "Njegoševa 8, Vračar, Beograd",
  hours: "08:00–23:00 (svaki dan)",
};

function Divider() {
  return <div className="h-px w-full bg-white/10" />;
}

export default function Footer() {
  return (
    <footer className="bg-black/85">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <div className="text-xs tracking-[0.35em] uppercase text-white/60">
              {INFO.tagline}
            </div>
            <div className="font-[var(--font-serif)] text-3xl">{INFO.name}</div>
            <p className="text-white/60 text-sm leading-relaxed">
              Napoletana disciplina, sezonski sastojci i preciznost u svakom
              zalogaju.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-xs tracking-[0.35em] uppercase text-white/60">
              Kontakt
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
              Radno vrijeme
            </div>
            <div className="text-white/70">{INFO.hours}</div>
            <div className="pt-3">
              <a
                href={`tel:${INFO.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs tracking-[0.25em] uppercase hover:bg-white/10 transition"
              >
                Rezervacije
              </a>
            </div>
          </div>
        </div>

        <Divider />
        <div className="pt-8 text-xs text-white/40">
          © {new Date().getFullYear()} {INFO.name}. Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
}