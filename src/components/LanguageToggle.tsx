"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <div className="flex justify-center items-center gap-3">
      <button
        onClick={toggleLang}
        className="relative w-10 h-7 rounded overflow-hidden border border-white/20 hover:border-[#d6b36a] transition"
      >
        <Image
          src={lang === "sr" ? "/flags/en.svg" : "/flags/sr.png"}
          alt="language"
          fill
          className="object-cover"
        />
      </button>
    </div>
  );
}