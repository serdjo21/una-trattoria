import { cn } from "@/lib/cn";

type MenuItem = {
  name: string;
  desc: string;
  price: number;
  tag?: string;
};

type MenuGridProps = {
  title?: string;
  items: MenuItem[];
};

export default function MenuGrid({ title, items }: MenuGridProps) {
  return (
    <section className="mx-auto max-w-6xl px-5">
      {title && (
        <div className="mb-10">
          <div className="text-xs tracking-[0.35em] uppercase text-[#d6b36a]/80">
            Selekcija
          </div>
          <h2 className="mt-3 font-[var(--font-serif)] text-4xl tracking-tight">
            {title} <span className="text-[#d6b36a]">•</span>
          </h2>
          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#d6b36a]/35 to-transparent" />
        </div>
      )}

      <ul className="space-y-6">
        {items.map((item) => (
          <li
            key={item.name}
            className="group relative rounded-2xl border border-white/10 bg-black/35 px-6 py-5 hover:border-[#d6b36a]/35 transition"
          >
            {/* zlatni “bullet” + linija */}
            <div className="pointer-events-none absolute left-0 top-1/2 h-px w-10 -translate-y-1/2 bg-gradient-to-r from-[#d6b36a]/0 via-[#d6b36a]/70 to-[#d6b36a]/0 opacity-70" />
            <div className="pointer-events-none absolute left-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#d6b36a]/70" />

            {/* naziv + cijena sa “leader dots” */}
            <div className="flex items-baseline gap-4">
              <h3 className="font-[var(--font-serif)] text-xl leading-snug">
                {item.name}
              </h3>

              <div className="flex-1 border-b border-dotted border-white/15 group-hover:border-[#d6b36a]/30 transition" />

              <div className="font-[var(--font-serif)] text-lg text-[#d6b36a] tabular-nums">
                {item.price} RSD
              </div>
            </div>

            {/* opis + tag */}
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 pl-6">
              <p className="text-sm text-white/65 leading-relaxed">
                {item.desc}
              </p>

              {item.tag && (
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#d6b36a]/75">
                  {item.tag}
                </span>
              )}
            </div>

            {/* donja zlatna štrafta na hover */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#d6b36a]/70 transition-all duration-500 group-hover:w-2/3" />
          </li>
        ))}
      </ul>
    </section>
  );
}