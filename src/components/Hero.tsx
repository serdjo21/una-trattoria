"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".u-reveal",
        { y: 18, opacity: 0, filter: "blur(6px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.05, stagger: 0.12, ease: "power3.out" }
      );
      gsap.to(".u-shine", { backgroundPositionX: "200%", duration: 2.4, ease: "power2.out" });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative pt-28 pb-16">
      <div className="mx-auto max-w-6xl px-5">
        <p className="u-reveal text-xs tracking-[0.35em] uppercase text-white/60">
          Trattoria • Napoletana • Beograd
        </p>

        <h1 className="u-reveal mt-4 font-[var(--font-serif)] text-5xl md:text-7xl leading-[0.95]">
          <span className="u-shine inline-block bg-[linear-gradient(90deg,rgba(210,170,95,.2),rgba(210,170,95,.95),rgba(210,170,95,.2))] bg-[length:200%_100%] bg-clip-text text-transparent">
            Pizza una trattoria
          </span>
          <br />
          pizza koja izgleda i ukusom udara.
        </h1>

        <p className="u-reveal mt-6 max-w-2xl text-base md:text-lg text-white/70">
          Ručno tijesto, peć na visokoj temperaturi, sastojci bez glume. Luksuz nije kić — luksuz je preciznost.
        </p>

        <div className="u-reveal mt-8 flex flex-wrap gap-3">
          <Link
            href="/menu"
            className="rounded-full px-6 py-3 text-sm tracking-wide bg-[rgba(210,170,95,.18)] border border-[rgba(210,170,95,.45)] hover:bg-[rgba(210,170,95,.26)] transition"
          >
            Pogledaj meni
          </Link>
          <a
            href="#rezervacije"
            className="rounded-full px-6 py-3 text-sm tracking-wide border border-white/15 hover:border-white/35 transition"
          >
            Rezerviši sto
          </a>
        </div>

        <div className="u-reveal mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["72h", "fermentacija tijesta"],
            ["450°C", "peć (brzo, čisto)"],
            ["San Marzano", "paradajz baza"],
            ["Fior di latte", "bez šminke"],
          ].map(([a, b]) => (
            <div key={a} className="rounded-2xl p-4 border border-white/10 bg-white/5">
              <div className="text-lg text-[rgb(var(--gold))]">{a}</div>
              <div className="text-sm text-white/70">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}