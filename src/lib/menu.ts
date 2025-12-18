export type MenuItem = { name: string; desc: string; price: number; tag?: string };

export const pizzas: MenuItem[] = [
  { name: "Margherita D.O.P.", desc: "San Marzano, fior di latte, bosiljak, ulje", price: 1090, tag: "classic" },
  { name: "Diavola Fine", desc: "pikantna salama, čili, med, sir", price: 1290, tag: "spicy" },
  { name: "Tartufo Bianca", desc: "bijela baza, tartuf, pečurke, pecorino", price: 1590, tag: "premium" },
  { name: "Prosciutto & Rucola", desc: "pršuta, rukola, parmezan, limun", price: 1490 },
];

export const antipasti: MenuItem[] = [
  { name: "Bruschetta", desc: "paradajz, bosiljak, ulje", price: 590 },
  { name: "Burrata", desc: "burrata, paradajz, pesto", price: 890, tag: "premium" },
];