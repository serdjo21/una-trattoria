"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MenuGrid from "@/components/MenuGrid";
import Footer from "@/components/Footer";
import { antipasti, pizzas } from "@/lib/menu";

gsap.registerPlugin(ScrollTrigger);

const INFO = {
  name: "Una Trattoria",
  tagline: "Napoletana • Beograd",
  phone: "+381 69 2134 843",
  address: "Njegoševa 8, Vračar, Beograd",
  hours: "08:00–23:00 (svaki dan)",
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

function GoldDivider({ tight }: { tight?: boolean }) {
  return (
    <div className={tight ? "mx-auto max-w-6xl px-5" : ""}>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d6b36a]/40 to-transparent" />
    </div>
  );
}

export default function MenuPage() {
  const topRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!topRef.current) return;

    const el = topRef.current;

    const tl = gsap.timeline();
    tl.fromTo(
      el.querySelectorAll(".m-kicker, .m-title, .m-sub, .m-actions"),
      { opacity: 0, y: 18, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
      }
    );

    if (noteRef.current) {
      gsap.fromTo(
        noteRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: noteRef.current,
            start: "top 85%",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <main className="bg-[rgb(var(--bg))] text-[rgb(var(--fg))]">
     {/* HERO */}
<section className="relative min-h-[70vh] overflow-hidden">
  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0">
    <Image
      src="/images/oven.jpg" // može i ista hero slika kao na home
      alt="Una Trattoria — Meni"
      fill
      priority
      className="object-cover"
      sizes="100vw"
    />
  </div>

  {/* OVERLAYS – ISTO KAO NA HOME */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/85" />
  <div className="absolute inset-0 [background:radial-gradient(60%_40%_at_50%_40%,rgba(210,170,95,0.20),transparent_60%)]" />
  <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

  {/* CONTENT */}
  <div className="relative z-10 mx-auto max-w-6xl px-5 pt-36 pb-20 text-center">
    <div className="text-xs tracking-[0.45em] uppercase text-white/70">
      Meni
    </div>

    <h1 className="mt-4 font-[var(--font-serif)] text-5xl sm:text-6xl md:text-7xl tracking-tight">
      Una selekcija
    </h1>

    <p className="mx-auto mt-6 max-w-2xl text-white/70 leading-relaxed">
      Cijene su realne, sastojci su ozbiljni.
      Ako tražiš količinu — ima drugih mjesta.
    </p>

    {/* INFO STRIP */}
    <div className="mt-14 mx-auto max-w-3xl">
      <div className="h-px w-full bg-white/10" />
      <div className="mt-4 grid gap-3 sm:grid-cols-3 text-left text-xs text-white/65">
        <div>
          <div className="uppercase tracking-[0.25em] text-white/50">
            Lokacija
          </div>
          <div className="mt-1">Njegoševa 8, Vračar</div>
        </div>
        <div>
          <div className="uppercase tracking-[0.25em] text-white/50">
            Telefon
          </div>
          <div className="mt-1">+381 69 2134 843</div>
        </div>
        <div>
          <div className="uppercase tracking-[0.25em] text-white/50">
            Radno vrijeme
          </div>
          <div className="mt-1">08:00–23:00</div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ANTIPASTI (dark blok kao galerija) */}
      <section className="relative border-y border-white/10 bg-black/80">
        <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d6b36a]/50 to-transparent" />
        <div className="mx-auto max-w-6xl px-5 py-24">
          <MenuGrid title="Antipasti" items={antipasti} />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d6b36a]/35 to-transparent" />
      </section>

      <div className="mx-auto max-w-6xl px-5 py-14">
        <GoldDivider tight />
      </div>

      {/* PIZZA (dark blok kao galerija) */}
      <section className="relative border-y border-white/10 bg-black/80">
        <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d6b36a]/50 to-transparent" />
        <div className="mx-auto max-w-6xl px-5 py-24">
          <MenuGrid title="Pizza" items={pizzas} />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d6b36a]/35 to-transparent" />
      </section>

      {/* NOTE / CTA */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div
          ref={noteRef}
          className="rounded-3xl border border-[#d6b36a]/25 bg-[#d6b36a]/5 p-8 sm:p-10"
        >
          <div className="text-xs tracking-[0.35em] uppercase text-[#d6b36a]/80">
            Napomena
          </div>
          <div className="mt-3 font-[var(--font-serif)] text-2xl">
            Alergeni i izmjene po dogovoru.
          </div>
          <div className="mt-4 text-sm text-white/70 leading-relaxed">
            Ne radimo cirkus od hrane — radimo precizno. Ako imaš alergije ili želiš malu izmjenu,
            samo reci prije narudžbe.
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${INFO.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-white/15 transition"
            >
              Pozovi
            </a>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/30 px-6 py-3 text-xs tracking-[0.25em] uppercase text-white/80 hover:bg-black/20 hover:text-white transition"
            >
              Nazad na početnu
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}