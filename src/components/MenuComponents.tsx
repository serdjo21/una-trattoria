"use client";

export const Badge = ({ type }: { type: string }) => {
  const key = (type || '').toLowerCase().replace(/\s+/g,'-');
  const styles: Record<string,string> = {
    'new': "bg-menu-badge-new",
    'domestic': "bg-menu-badge-domestic",
    'signature': "bg-menu-badge-signature",
  };
  const className = styles[key] ?? 'bg-menu-badge-generic';
  const labelMap: Record<string,string> = {
    new: 'NEW',
    domestic: 'DOMESTIC PRODUCT',
    signature: 'SIGNATURE PIZZA',
  };
  const label = labelMap[key] ?? String(type).toUpperCase();
  return (
    <span className={`${className} text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider inline-block ml-2`}>
      {label}
    </span>
  );
};

export interface MenuItem {
  name: string;
  description?: string;
  price: number | string;
  badges?: string[];
  sub?: { name: string; price: number | string; badges?: string[] }[];
}

export const Item = ({ item }: { item: MenuItem }) => (
  <div className="menu-item" role="article" aria-label={item.name}>
    <div className="flex justify-between items-baseline gap-4">
      <div className="flex items-center flex-wrap gap-y-1">
        <span className="font-bold text-menu-cream text-[15px] uppercase tracking-wide font-body menu-item-name">{item.name}</span>
        {item.badges?.map((b, i) => <Badge key={i} type={b} />)}
      </div>
      <span className="text-menu-gold font-display text-[16px] shrink-0 menu-price">{formatPrice(item.price)}</span>
    </div>
    {item.description && (
      <p className="text-menu-gray text-[12px] mt-0.5 leading-relaxed font-body">{item.description}</p>
    )}
    {/* intentionally only show description and price (PDF parity) */}
    {item.sub && item.sub.map((s, i) => (
      <div key={i} className="flex justify-between items-baseline mt-2 ml-3">
        <div className="flex items-center menu-sub-item">
          <span className="mr-2">•</span>
          <span>{s.name}</span>
          {s.badges?.map((b, j) => <Badge key={j} type={b} />)}
        </div>
        <span className="text-menu-gold font-display text-[13px] shrink-0">{formatPrice(s.price)}</span>
      </div>
    ))}
  </div>
);

function formatPrice(p: number | string) {
  if (p == null) return '';
  const n = typeof p === 'number' ? p : Number(p as string);
  if (!Number.isNaN(n)) {
    return `${n} RSD`;
  }
  return String(p);
}

const SectionLabel = ({ label, sub }: { label: string; sub?: string[] }) => (
  <div className="w-full md:w-[170px] shrink-0 pr-6 pt-1">
    <h2 className="font-display menu-section-title uppercase leading-tight">{label}</h2>
    {sub?.map((s, i) => (
      <span key={i} className="block text-menu-gold text-[10px] uppercase tracking-[0.2em] font-body menu-subtle">{s}</span>
    ))}
  </div>
);

export const Section = ({ label, sub, items }: { label: string; sub?: string[]; items: MenuItem[] }) => (
  <div className="flex flex-col md:flex-row mb-8 border-b border-[rgba(255,255,255,0.06)] pb-8">
    <SectionLabel label={label} sub={sub} />
    <div className="flex-1 min-w-0 pl-0 md:pl-2">
      {items.map((item, i) => <Item key={i} item={item} />)}
    </div>
  </div>
);

export const AllergenLegend = ({ text }: { text?: string }) => (
  <div className="text-[11px] text-menu-gray mt-6">
    <strong className="text-menu-cream mr-2">ALLERGENS:</strong>
    <div className="allergen-legend">
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <span className="allergen-badge">D</span>
        <span className="allergen-label">Dairy</span>
      </div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <span className="allergen-badge">G</span>
        <span className="allergen-label">Gluten</span>
      </div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <span className="allergen-badge">N</span>
        <span className="allergen-label">Nuts</span>
      </div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <span className="allergen-badge">S</span>
        <span className="allergen-label">Shellfish</span>
      </div>
    </div>
    <div className="text-menu-subtle mt-2">{text ?? 'Ask staff about allergens or special dietary needs.'}</div>
  </div>
);
