"use client";

import SplitSection from "@/components/SplitSection";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import { texts } from "@/i18n";

gsap.registerPlugin(ScrollTrigger);

const INFO = {
  name: "Una Trattoria",
  tagline: "Vračar • Beograd",
  phone: "+381 63 336 444",
  address: "Njegoševa 8, Vračar, Beograd",
  hours: "08:00 – 23:00 pon-sub | ned 10:00 – 23:00",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[var(--font-serif)] text-3xl sm:text-4xl tracking-tight">
      {children}
    </h2>
  );
}

function Divider() {
  return <div className="h-px w-full bg-white/10" />;
}

function Gallery() {
  const { lang } = useLanguage();
  const t = texts[lang];

  const imgs = [
    "/images/pizza.jpg",
    "/images/caprese.jpg",
    "/images/salad.jpg",
    "/images/tiramisu.jpg",
    "/images/oven.jpg",
    "/images/storefront.jpg",
  ];

  return (
    <section className="relative border-y border-white/10 bg-black/80">
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d6b36a] to-transparent" />

      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex items-end justify-between gap-6">
          <SectionTitle>
            {t.home.galerija} <span className="text-[#d6b36a]">ambijenta</span>
          </SectionTitle>

          <span className="text-xs tracking-[0.35em] uppercase text-white/60">
            {t.home.atmosfera}
          </span>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {imgs.map((src, i) => (
            <div
              key={src}
              className="gallery-item group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-[#d6b36a]/0 transition-all duration-500 group-hover:ring-1 group-hover:ring-[#d6b36a]/60" />

              <div className="relative aspect-[4/5]">
                <Image
                  src={src}
                  alt={`Galerija ${i + 1}`}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#d6b36a] transition-all duration-500 group-hover:w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d6b36a] to-transparent" />
    </section>
  );
}

function Footer() {
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
              {t.home.footerOpis}
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-xs tracking-[0.35em] uppercase text-white/60">
              {t.kontakt}
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
              {t.home.radnoVrijemeFooter}
            </div>

            <div className="text-white/70">{INFO.hours}</div>

            <div className="pt-3">
              <a
                href={`tel:${INFO.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs tracking-[0.25em] uppercase hover:bg-white/10 transition"
              >
                {t.rezervacije}
              </a>
            </div>
          </div>
        </div>

        <Divider />

        <div className="pt-8 text-xs text-white/40">
          © {new Date().getFullYear()} {INFO.name}. {t.home.svaPrava}
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  const { lang } = useLanguage();
  const t = texts[lang];

  return (
    <main className="bg-[rgb(var(--bg))] text-[rgb(var(--fg))]">

      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden">

        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt={`${INFO.name} hero`}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/85" />

        <div className="relative z-10 mx-auto max-w-6xl px-5 pt-36 pb-16 text-center">

          <div className="text-xs tracking-[0.45em] uppercase text-white/70">
            {INFO.tagline}
          </div>

          <h1 className="mt-4 font-[var(--font-serif)] text-5xl sm:text-6xl md:text-7xl tracking-tight">
            {INFO.name}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-white/70 leading-relaxed">
            {t.home.heroOpis}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">

            <Link
              href="/menuv2.pdf"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-white/15 transition"
            >
              {t.home.pogledajMeni}
            </Link>

            <a
              href={`tel:${INFO.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/30 px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-black/20 transition"
            >
              {t.home.rezervisi}
            </a>
          </div>

          <div className="mt-14 mx-auto max-w-3xl">
            <Divider />

            <div className="mt-4 grid gap-3 sm:grid-cols-3 text-left text-xs text-white/65">
              <div>
                <div className="uppercase tracking-[0.25em] text-white/50">
                  {t.home.lokacija}
                </div>
                <div className="mt-1">{INFO.address}</div>
              </div>

              <div>
                <div className="uppercase tracking-[0.25em] text-white/50">
                  {t.home.telefon}
                </div>
                <div className="mt-1">{INFO.phone}</div>
              </div>

              <div>
                <div className="uppercase tracking-[0.25em] text-white/50">
                  {t.home.radnoVrijeme}
                </div>
                <div className="mt-1">{INFO.hours}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O NAMA */}

      <SplitSection
        title={t.home.oNamaTitle}
        text={t.home.oNamaText}
        imageSrc="/images/caprese.jpg"
      />

      <Divider />

      {/* O JELOVNIKU */}

      <SplitSection
        title={t.home.jelovnikTitle}
        text={t.home.jelovnikText}
        cta={t.home.pogledajteMeni}
        href="/menuv2.pdf"
        imageSrc="/images/pizza.jpg"
        reverse
      />

      <Divider />

      {/* DOSTAVA */}

<section className="relative bg-black/80 border-y border-white/10 overflow-hidden">

  <div className="relative mx-auto max-w-6xl px-5 py-28 text-center">

    <div className="text-xs tracking-[0.35em] uppercase text-[#d6b36a]/80">
      {t.home.dostava}
    </div>

    <h2 className="mt-4 font-[var(--font-serif)] text-4xl sm:text-5xl tracking-tight">
      {t.home.partneriDostave}
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-white/70 leading-relaxed">
      {t.home.narucite}
    </p>

    {/* ICON LINKS */}
    <div className="mt-12 flex justify-center gap-10">

      {/* WOLT */}
      <a
        href="https://wolt.com/sr/srb/belgrade/restaurant/una-trattoria-bg?srsltid=AfmBOordDjQVMapZPEu2il_zOQt4Rx3H2v0a4ArIo1YSf-E7BwcIHL2v"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-32 w-32 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur transition hover:border-[#d6b36a]/60"
      >
        <span className="absolute inset-0 rounded-full border border-[#d6b36a]/40 opacity-0 group-hover:opacity-100 transition" />
        <span className="text-lg tracking-wide group-hover:text-[#d6b36a] transition">
          Wolt
        </span>
      </a>

      {/* GLOVO */}
      <a
        href="https://glovoapp.com/sr/rs/belgrade/stores/pizza-una-trattoria-gourmet-beg"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-32 w-32 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur transition hover:border-[#d6b36a]/60"
      >
        <span className="absolute inset-0 rounded-full border border-[#d6b36a]/40 opacity-0 group-hover:opacity-100 transition" />
        <span className="text-lg tracking-wide group-hover:text-[#d6b36a] transition">
          Glovo
        </span>
      </a>

    </div>
  </div>
</section>

      <Gallery />
    </main>
  );
}