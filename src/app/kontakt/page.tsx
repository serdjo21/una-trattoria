import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
gsap.registerPlugin(ScrollTrigger);

export const metadata = {
  title: "Kontakt",
  description:
    "Pizza Una Trattoria kontakt informacije. Pronađite nas na Vračaru, pozovite za rezervacije ili nas kontaktirajte putem emaila.",
  alternates: { canonical: "/kontakt" },
  openGraph: { url: "https://unatrattoria.rs/kontakt" },
};

const INFO = {
  name: "Una Trattoria",
  tagline: "Vračar • Beograd",
  phone: "+381 63 336 444",
  address: "Njegoševa 8, Vračar, Beograd",
  hours: "11:00–00:00 svakog dana",
  email: "kontakt@unatrattoria.rs",
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

function Pill({
  children,
  href,
  variant = "light",
  external,
}: {
  children: React.ReactNode;
  href: string;
  variant?: "light" | "dark";
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full border px-6 py-3 text-xs tracking-[0.25em] uppercase transition";
  const light =
    "border-white/15 bg-white/10 hover:bg-white/15";
  const dark =
    "border-white/15 bg-black/35 hover:bg-black/25";
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${variant === "light" ? light : dark}`}
    >
      {children}
    </a>
  );
}

function InfoCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/45 p-6 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.55] [background:radial-gradient(60%_40%_at_20%_20%,rgba(210,170,95,0.18),transparent_60%)]" />
      <div className="relative">
        <div className="text-xs tracking-[0.35em] uppercase text-white/55">
          {label}
        </div>
        {href ? (
          <a
            href={href}
            className="mt-2 block text-white/85 hover:text-white transition"
          >
            {value}
          </a>
        ) : (
          <div className="mt-2 text-white/80">{value}</div>
        )}
      </div>
    </div>
  );
}

export default function ContactPage() {


  

  const telHref = `tel:${INFO.phone.replace(/\s+/g, "")}`;

  const gmapsQuery = encodeURIComponent(INFO.address);
  const gmapsHref = `https://www.google.com/maps/search/?api=1&query=${gmapsQuery}`;

  const appleMapsHref = `https://maps.apple.com/?q=${gmapsQuery}`;

  return (
    <main className="bg-[rgb(var(--bg))] text-[rgb(var(--fg))]">
      {/* HERO */}
      <section className="relative min-h-[60vh] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/storefront.jpg"
            alt={`${INFO.name} — kontakt`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/90" />
        <div className="absolute inset-0 [background:radial-gradient(60%_40%_at_50%_35%,rgba(210,170,95,0.20),transparent_62%)]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="relative z-10 mx-auto max-w-6xl px-5 pt-28 pb-14">
          <div className="text-xs tracking-[0.45em] uppercase text-white/70">
            {INFO.tagline}
          </div>

          <h1 className="mt-4 font-[var(--font-serif)] text-5xl sm:text-6xl tracking-tight">
            Kontakt
          </h1>

          <br></br>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Pill href={telHref} variant="light">
              Pozovi
            </Pill>
            <Pill href={gmapsHref} variant="dark" external>
              Google Maps
            </Pill>
            <Pill href={appleMapsHref} variant="dark" external>
              Apple Maps
            </Pill>
          </div>

          <div className="mt-10 max-w-3xl">
            <Divider />
            <div className="mt-4 grid gap-3 sm:grid-cols-3 text-left text-xs text-white/65">
              <div>
                <div className="uppercase tracking-[0.25em] text-white/50">
                  Adresa
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

          <div className="mt-8">
            <Link
              href="/menu"
              className="text-xs tracking-[0.35em] uppercase text-white/60 hover:text-white transition"
            >
              ← nazad na početnu
            </Link>
          </div>
        </div>

        {/* zlatna štrafta */}
        <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d6b36a] to-transparent" />
      </section>

      {/* KONTAKT */}
      <section className="relative bg-black/85 border-b border-white/10 overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="reveal-contact flex items-end justify-between gap-6">
            <SectionTitle>
              Una Trattoria <span className="text-[#d6b36a]">info</span>
            </SectionTitle>
            <span className="text-xs tracking-[0.35em] uppercase text-white/60">
             
            </span>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="reveal-contact md:col-span-2 rounded-2xl border border-white/10 bg-black/45 p-7">
              <div className="text-white/75 leading-relaxed">
                Za rezervacije i informacije, slobodno Nas kontaktirajte putem telefona ili mejla.
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <InfoCard label="Telefon" value={INFO.phone} href={telHref} />
                <InfoCard
                  label="Email"
                  value={INFO.email}
                  href={`mailto:${INFO.email}`}
                />
              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Pill href={telHref} variant="light">
                  Pozovi odmah
                </Pill>
                <Pill href={`mailto:${INFO.email}`} variant="dark">
                  Pošalji email
                </Pill>
              </div>
            </div>

            
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d6b36a] to-transparent" />
      </section>

      {/* MAPA */}
      <section  className="relative bg-black/80 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 [background:radial-gradient(55%_45%_at_50%_20%,rgba(210,170,95,0.14),transparent_70%)]" />
        <div className="mx-auto max-w-6xl px-5 py-20 relative">
          <div className="reveal-map flex items-end justify-between gap-6">
            <SectionTitle>
              Mapa <span className="text-[#d6b36a]">lokacije</span>
            </SectionTitle>
            <span className="text-xs tracking-[0.35em] uppercase text-white/60">
            </span>
          </div>

          <div className="reveal-map mt-10 rounded-2xl border border-white/10 bg-black/45 overflow-hidden">
            {/* okvir + zlatni ring na hover */}
            <div className="group relative">
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-[#d6b36a]/0 transition-all duration-500 group-hover:ring-1 group-hover:ring-[#d6b36a]/60" />
              <div className="relative aspect-[16/9] md:aspect-[21/9]">
                <iframe
                  title={`${INFO.name} mapa`}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90557.01035775535!2d20.329724765095417!3d44.823467923624484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7b007119831d%3A0x3094d505f13051d8!2sPizza%20Una%20Trattoria%20Gourmet!5e0!3m2!1sen!2srs!4v1766493314400!5m2!1sen!2srs"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/35 via-transparent to-black/15" />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-6">
                <div>
                  <div className="text-xs tracking-[0.35em] uppercase text-white/55">
                    Adresa
                  </div>
                  <div className="mt-1 text-white/80">{INFO.address}</div>
                </div>

                <div className="flex gap-3">
                  <Pill href={gmapsHref} variant="light" external>
                    Otvori u Google
                  </Pill>
                  <Pill href={appleMapsHref} variant="dark" external>
                    Otvori u Apple
                  </Pill>
                </div>
              </div>
            </div>
          </div>

          
        </div>

        <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d6b36a] to-transparent" />
      </section>
    </main>
  );
}
