"use client";

export const Badge = ({ type }: { type: "new" | "domestic" | "signature" }) => {
  const styles = {
    new: "bg-menu-badge-new",
    domestic: "bg-menu-badge-domestic",
    signature: "bg-menu-badge-signature",
  };
  const labels = {
    new: "NEW",
    domestic: "DOMESTIC PRODUCT",
    signature: "SIGNATURE PIZZA",
  };
  return (
    <span className={`${styles[type]} text-foreground text-[9px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider inline-block ml-2`}>
      {labels[type]}
    </span>
  );
};

export interface MenuItem {
  name: string;
  description?: string;
  price: number | string;
  badges?: ("new" | "domestic" | "signature")[];
  sub?: { name: string; price: number | string; badges?: ("new" | "domestic" | "signature")[] }[];
}

export const Item = ({ item }: { item: MenuItem }) => (
  <div className="mb-3">
    <div className="flex justify-between items-baseline gap-4">
      <div className="flex items-center flex-wrap gap-y-1">
        <span className="font-bold text-menu-cream text-[13px] uppercase tracking-wide font-body">{item.name}</span>
        {item.badges?.map((b, i) => <Badge key={i} type={b} />)}
      </div>
      <span className="text-menu-gold font-display text-[14px] shrink-0">{item.price}</span>
    </div>
    {item.description && (
      <p className="text-menu-gray text-[11px] mt-0.5 leading-relaxed">{item.description}</p>
    )}
    {item.sub && item.sub.map((s, i) => (
      <div key={i} className="flex justify-between items-baseline mt-1 ml-3">
        <div className="flex items-center">
          <span className="text-menu-gray text-[11px]">• {s.name}</span>
          {s.badges?.map((b, j) => <Badge key={j} type={b} />)}
        </div>
        <span className="text-menu-gold font-display text-[12px] shrink-0">{s.price}</span>
      </div>
    ))}
  </div>
);

const SectionLabel = ({ label, sub }: { label: string; sub?: string[] }) => (
  <div className="w-[140px] shrink-0 pr-4 pt-1">
    <h2 className="font-display text-menu-gold text-[22px] font-black uppercase leading-tight tracking-wide">{label}</h2>
    {sub?.map((s, i) => (
      <span key={i} className="block text-menu-gold text-[10px] uppercase tracking-[0.2em] font-body">{s}</span>
    ))}
  </div>
);

export const Section = ({ label, sub, items }: { label: string; sub?: string[]; items: MenuItem[] }) => (
  <div className="flex mb-6 border-b border-border pb-6">
    <SectionLabel label={label} sub={sub} />
    <div className="flex-1 min-w-0">
      {items.map((item, i) => <Item key={i} item={item} />)}
    </div>
  </div>
);
