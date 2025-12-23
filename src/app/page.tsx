import SplitSection from "@/components/SplitSection";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Metadata } from "next";
import HomeClient from "./HomeClient";
gsap.registerPlugin(ScrollTrigger);

export const metadata = {
  title: "Pizza Una Trattoria",
  description:
    "Italijanske pice i specijaliteti u srcu Beograda. Originalna napoletana pizza, sveže paste i autentični ukusi Italije na Vračaru.",
  alternates: { canonical: "/" },
  openGraph: { url: "https://unatrattoria.rs/" },
};




const INFO = {
  name: "Una Trattoria",
  tagline: "Vračar • Beograd",
  phone: "+381 63 336 444",
  address: "Njegoševa 8, Vračar, Beograd",
  hours: "11:00–23:00 svakog dana",
};

const schemaObj = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Una Trattoria",
  url: "https://unatrattoria.rs",
  telephone: "+38163336444",
  priceRange: "$$",
  servesCuisine: "Italian",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Njegoševa 8",
    addressLocality: "Beograd",
    postalCode: "11000",
    addressCountry: "RS",
  },
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
  

  const imgs = [
    "/images/pizza.jpg",
    "/images/caprese.jpg",
    "/images/salad.jpg",
    "/images/tiramisu.jpg",
    "/images/oven.jpg",
    "/images/storefront.jpg",
  ];

  return (
    
    <section
      className="relative border-y border-white/10 bg-black/80"
    >
      {/* ZLATNA ŠTRAFTA TOP */}
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d6b36a] to-transparent" />

      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex items-end justify-between gap-6">
          <SectionTitle>
            Galerija <span className="text-[#d6b36a]">ambijenta</span>
          </SectionTitle>
          <span className="text-xs tracking-[0.35em] uppercase text-white/60">
            una atmosfera
          </span>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {imgs.map((src, i) => (
            <div
              key={src}
              className="gallery-item group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40"
            >
              {/* ZLATNI OKVIR NA HOVER */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-[#d6b36a]/0 transition-all duration-500 group-hover:ring-1 group-hover:ring-[#d6b36a]/60" />

              <div className="relative aspect-[4/5]">
                <Image
                  src={src}
                  alt={`Galerija ${i + 1}`}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {/* TAMNI OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-90" />

                {/* ZLATNA DONJA LINIJA */}
                <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#d6b36a] transition-all duration-500 group-hover:w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ZLATNA ŠTRAFTA BOTTOM */}
      <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d6b36a] to-transparent" />
    </section>
  );
}

function Footer() {
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

export default function Page() {
  return (
    <main className="bg-[rgb(var(--bg))] text-[rgb(var(--fg))]">
      

      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt={`${INFO.name} — hero`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/85" />
        <div className="absolute inset-0 [background:radial-gradient(60%_40%_at_50%_40%,rgba(210,170,95,0.20),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="relative z-10 mx-auto max-w-6xl px-5 pt-36 pb-16 text-center">
          <div className="text-xs tracking-[0.45em] uppercase text-white/70">
            {INFO.tagline}
          </div>

          <h1 className="mt-4 font-[var(--font-serif)] text-5xl sm:text-6xl md:text-7xl tracking-tight">
            {INFO.name}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-white/70 leading-relaxed">
            Una Trattoria donosi autentičnu italijansku kuhinju u Beograd.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-white/15 transition"
            >
              Pogledaj meni
            </Link>
            <a
              href={`tel:${INFO.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/30 px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-black/20 transition"
            >
              Rezerviši
            </a>
          </div>

          <div className="mt-14 mx-auto max-w-3xl">
            <Divider />
            <div className="mt-4 grid gap-3 sm:grid-cols-3 text-left text-xs text-white/65">
              <div>
                <div className="uppercase tracking-[0.25em] text-white/50">
                  Lokacija
                </div>
                <div className="mt-1">{INFO.address}</div>
              </div>
              <div>
                <div className="uppercase tracking-[0.25em] text-white/50">
                  Telefon
                </div>
                <div className="mt-1">{INFO.phone}</div>
              </div>
              <div>
                <div className="uppercase tracking-[0.25em] text-white/50">
                  Radno vreme
                </div>
                <div className="mt-1">{INFO.hours}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O NAMA */}
      <SplitSection
        title="O nama"
        text="Una Trattoria nastala je iz ljubavi prema italijanskoj kuhinji i jednostavnim, dobro poznatim receptima.
              Pravimo napuljsku pizzu od dugo fermentisanog testa, pečenu na visokoj temperaturi, uz pažljivo birane sastojke."
        imageSrc="/images/caprese.jpg"
      />

      <Divider />

      {/* O JELOVNIKU */}
      <SplitSection
        title="O jelovniku"
        text="Jelovnik Una Trattorie nudi raznovrstan izbor jela.
              U ponudi su napuljske pizze, paste i sendviči, uz kombinacije koje se lako biraju i pamte."
        cta="Pogledajte meni"
        href="/menu"
        imageSrc="/images/pizza.jpg"
        reverse
        
      />

      <Divider />

      <section className="relative bg-black/80 border-y border-white/10 overflow-hidden">
  {/* gold radial */}
  <div className="absolute inset-0 [background:radial-gradient(50%_40%_at_50%_40%,rgba(210,170,95,0.18),transparent_65%)]" />

  {/* content */}
  <div className="relative mx-auto max-w-6xl px-5 py-28 text-center">
    <div className="text-xs tracking-[0.35em] uppercase text-[#d6b36a]/80">
      Dostava
    </div>

    <h2 className="mt-4 font-[var(--font-serif)] text-4xl sm:text-5xl tracking-tight">
      Partneri <span className="text-[#d6b36a]">Dostave</span>
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-white/70 leading-relaxed">
      Naručite Naše specijalitete ovde.
    </p>

    {/* ICON LINKS */}
    <div className="mt-12 flex justify-center gap-10">
      {/* WOLT */}
      <a
        href="https://wolt.com/sr/srb/belgrade/restaurant/campania-pizza-gourmet-vracar?srsltid=AfmBOoqIPRMbG4gW9mfaC-a9fdPa7q5ou70I9J0ZYNHfvi1_wQG_CBMk"
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
        href="https://glovoapp.com/sr/rs/belgrade/stores/campania-pizza-gourmet-beg"
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
      {/* GALERIJA */}
      <Gallery />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }} />
    </main>
    
  );
}
