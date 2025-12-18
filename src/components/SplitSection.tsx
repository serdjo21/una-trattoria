"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SplitSectionProps = {
  title: string;
  text: string;
  cta?: string;
  href?: string;
  imageSrc: string;
  reverse?: boolean;
  dark?: boolean;
};

export default function SplitSection({
  title,
  text,
  cta,
  href,
  imageSrc,
  reverse,
  dark = true,
}: SplitSectionProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapRef.current) return;

    const el = wrapRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });

    tl.fromTo(
      el.querySelectorAll(".u-kicker, .u-title, .u-text, .u-cta"),
      { opacity: 0, y: 18, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
      }
    ).fromTo(
      el.querySelectorAll(".u-line"),
      { scaleX: 0 },
      { scaleX: 1, duration: 0.9, ease: "power3.out", stagger: 0.08 },
      "-=0.55"
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      className={
        dark ? "relative bg-black/80 border-y border-white/10" : "relative"
      }
    >
      {/* zlatne štrafte kao u galeriji */}
      {dark && (
        <>
          <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d6b36a]/50 to-transparent" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d6b36a]/35 to-transparent" />
        </>
      )}

      <div className="mx-auto max-w-6xl px-5 py-24">
        <div
          ref={wrapRef}
          className={
            "relative grid items-center gap-10 md:grid-cols-2 " +
            (reverse ? "md:[&>div:first-child]:order-2" : "")
          }
        >
          {/* ZLATNE LINIJE UNUTAR */}
          <div className="u-line pointer-events-none absolute -top-6 left-0 right-0 h-px origin-left bg-gradient-to-r from-transparent via-[#d6b36a] to-transparent opacity-60" />
          <div className="u-line pointer-events-none absolute -bottom-6 left-0 right-0 h-px origin-left bg-gradient-to-r from-transparent via-[#d6b36a] to-transparent opacity-35" />

          {/* TEXT */}
          <div className="space-y-5">
            <div className="u-kicker text-xs tracking-[0.35em] uppercase text-[#d6b36a]/80">
              UNA TRATTORIA
            </div>

            <h2 className="u-title font-[var(--font-serif)] text-3xl sm:text-4xl tracking-tight">
              {title}
              <span className="ml-2 text-[#d6b36a]">•</span>
            </h2>

            <p className="u-text text-white/70 leading-relaxed">{text}</p>

            {cta && href && (
              <Link
                href={href}
                className="u-cta inline-flex items-center gap-3 text-xs tracking-[0.35em] uppercase text-white/75 hover:text-white transition"
              >
                <span className="border-b border-white/25 pb-2 hover:border-white/70 transition">
                  {cta}
                </span>
                <span className="inline-block h-px w-10 bg-[#d6b36a]/70" />
              </Link>
            )}
          </div>

          {/* IMAGE CARD */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            {/* zlatni corneri */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-4 top-4 h-6 w-6 border-l border-t border-[#d6b36a]/50" />
              <div className="absolute right-4 top-4 h-6 w-6 border-r border-t border-[#d6b36a]/50" />
              <div className="absolute left-4 bottom-4 h-6 w-6 border-l border-b border-[#d6b36a]/50" />
              <div className="absolute right-4 bottom-4 h-6 w-6 border-r border-b border-[#d6b36a]/50" />
            </div>

            <div className="relative aspect-[4/3]">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover transition duration-700 ease-out hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
