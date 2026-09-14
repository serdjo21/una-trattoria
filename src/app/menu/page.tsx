"use client";

import { useEffect, useState } from 'react';
import { Section, AllergenLegend } from "@/components/MenuComponents";

export default function MenuPage() {
  const [items, setItems] = useState<any[]>([]);
  useEffect(() => {
      // Use Supabase anon key to fetch menu_items directly while Prisma connection is pending
      (async () => {
        try {
          const res = await fetch('/api/supabase/menu');
          if (!res.ok) {
            const body = await res.json().catch(()=>({}));
            console.error('Server fetch error', body);
            setItems([]);
            return;
          }
          const data = await res.json();
          setItems(data || []);
        } catch (e) {
          console.error('Fetch error', e);
          setItems([]);
        }
      })();
    }, []);

  const grouped = items.reduce((acc: Record<string, any[]>, item: any) => {
    const cat = item.category || 'Menu';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {} as Record<string, any[]>);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <div className="max-w-[920px] mx-auto px-8 py-14">
        <div className="menu-container">
        <div className="text-center mb-10">
          <h1 className="font-display menu-title">
            UNA<br />TRATTORIA
          </h1>
          <p className="menu-subtitle">PIZZA, LINI, TRATTORIA, PASTA</p>
        </div>

        {Object.keys(grouped).length === 0 ? (
          <p>Loading menu...</p>
        ) : (
          Object.entries(grouped).map(([label, items]) => (
            <Section
              key={label}
              label={label.toUpperCase()}
              items={items.map((i: any) => ({
                name: i.name,
                price: i.price,
                description: `${i.description ?? ''}`,
                calories: i.calories,
                ingredients: i.ingredients,
                allergens: i.allergens,
                badges: i.badges,
                sub: i.sub,
              }))}
            />
          ))
        )}
        <div className="menu-separator" />
        <AllergenLegend />
        </div>
      </div>
    </div>
  );
}
