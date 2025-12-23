export default function CTA() {
  return (
    <section id="rezervacije" className="mx-auto max-w-6xl px-5 pb-24">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 md:p-14">
        <h2 className="font-[var(--font-serif)] text-4xl">Rezerviši stol</h2>
        <p className="mt-4 text-white/70 max-w-2xl">
          Najbolje iskustvo je svježe iz peći i za stolom. Pozovi ili piši na WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="rounded-full px-6 py-3 text-sm border border-[rgba(210,170,95,.45)] bg-[rgba(210,170,95,.18)] hover:bg-[rgba(210,170,95,.26)] transition" href="tel:+38163336444">
            +381 63 336 444
          </a>
          <a className="rounded-full px-6 py-3 text-sm border border-white/15 hover:border-white/35 transition" href="#kontakt">
            Lokacija & kontakt
          </a>
        </div>
      </div>
    </section>
  );
}