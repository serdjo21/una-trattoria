"use client";

import { signOut, useSession } from 'next-auth/react';
import { useEffect, useMemo, useState } from 'react';
import { Badge } from '@/components/MenuComponents';

type Item = {
  id?: number;
  name: string;
  price?: number | null;
  description?: string | null;
  category?: string | null;
  badges?: string[] | null;
  calories?: number | null;
  ingredients?: string | null;
  allergens?: string | null;
};

const emptyForm = {
  name: '',
  price: '',
  description: '',
  category: '',
  calories: '',
  ingredients: '',
  allergens: '',
  badges: '',
};

function formatRsd(value?: number | null) {
  if (value == null || Number.isNaN(value)) return '—';
  return `${value} RSD`;
}

export default function EditMenuClient() {
  const { status } = useSession();
  const [items, setItems] = useState<Item[]>([]);
  const [form, setForm] = useState<any>(emptyForm);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function load() {
    try {
      const res = await fetch('/api/supabase/menu');
      if (!res.ok) throw new Error('Failed to load');
      const data: Item[] = await res.json();
      const sorted = [...(data || [])].sort((a, b) => (a.category ?? '').localeCompare(b.category ?? '') || (a.name ?? '').localeCompare(b.name ?? ''));
      setItems(sorted);
      const cats = Array.from(new Set((data || []).map((d) => d.category).filter(Boolean))) as string[];
      setCategories(cats.sort((a, b) => a.localeCompare(b)));
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    if (status === 'authenticated') {
      load();
    }
  }, [status]);

  const filteredItems = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return items;
    return items.filter((it) => {
      const hay = `${it.name ?? ''} ${it.category ?? ''} ${it.description ?? ''}`.toLowerCase();
      return hay.includes(q);
    });
  }, [items, search]);

  function resetForm() {
    setForm(emptyForm);
    setEditingId(null);
  }

  function populateForEdit(it: Item) {
    setEditingId(it.id ?? null);
    setForm({
      name: it.name ?? '',
      price: it.price ?? '',
      description: it.description ?? '',
      category: it.category ?? '',
      calories: it.calories ?? '',
      ingredients: it.ingredients ?? '',
      allergens: it.allergens ?? '',
      badges: Array.isArray(it.badges) ? it.badges.join(', ') : '',
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const payload: any = {
      name: String(form.name ?? '').trim(),
      price: form.price === '' || form.price == null ? null : Number(form.price),
      description: String(form.description ?? '').trim() || null,
      category: String(form.category ?? '').trim() || null,
      calories: form.calories === '' || form.calories == null ? null : Number(form.calories),
      ingredients: String(form.ingredients ?? '').trim() || null,
      allergens: String(form.allergens ?? '').trim() || null,
      badges: String(form.badges ?? '').split(',').map((s: string) => s.trim()).filter(Boolean),
    };

    if (!payload.name) {
      alert('Item name is required.');
      return;
    }

    try {
      setIsSubmitting(true);
      let res;
      if (editingId) {
        res = await fetch('/api/supabase/menu', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: editingId, ...payload }) });
      } else {
        res = await fetch('/api/supabase/menu', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      }

      if (!res || !res.ok) {
        const body = await (res ? res.json().catch(() => ({ error: 'Unknown error' })) : { error: 'No response' });
        throw new Error(body.error || 'Save failed');
      }

      resetForm();
      await load();
    } catch (err) {
      console.error('submit error', err);
      alert(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setIsSubmitting(false);
    }
  }

  async function remove(id?: number) {
    if (!id) return;
    try {
      const res = await fetch(`/api/supabase/menu?id=${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
      await load();
    } catch (err) {
      console.error('delete error', err);
      alert(err instanceof Error ? err.message : 'Delete failed');
    }
  }

  if (status === 'loading') {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[#101010] text-[#f5f0e8]">
        <p className="text-[10px] uppercase tracking-[0.32em] text-[#d1b06f]">Loading...</p>
      </div>
    );
  }

  if (status !== 'authenticated') {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#101010] text-[#f5f0e8]">
      <div className="mx-auto max-w-[1400px] px-4 py-8 md:px-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#d1b06f]">Admin</p>
            <h1 className="mt-2 font-display text-4xl font-bold tracking-[0.08em] text-[#d1b06f] md:text-5xl">Edit Menu</h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => signOut({ callbackUrl: '/login' })}
              className="rounded border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f5f0e8] transition hover:border-[#d1b06f]/60 hover:text-[#d1b06f]"
            >
              Logout
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3 text-left">
            <div className="rounded border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#bdb6a8]">Items</div>
              <div className="mt-1 text-2xl font-semibold text-white">{items.length}</div>
            </div>
            <div className="rounded border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#bdb6a8]">Categories</div>
              <div className="mt-1 text-2xl font-semibold text-white">{categories.length}</div>
            </div>
            <div className="rounded border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#bdb6a8]">RSD</div>
              <div className="mt-1 text-2xl font-semibold text-white">Live</div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[420px_minmax(0,1fr)]">
          <aside className="rounded border border-white/10 bg-[#161616] p-5 shadow-[0_12px_32px_rgba(0,0,0,0.28)]">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold uppercase tracking-[0.16em] text-[#d1b06f]">{editingId ? 'Edit item' : 'Add new item'}</h2>
              {editingId && (
                <button type="button" onClick={resetForm} className="text-xs uppercase tracking-[0.16em] text-[#d1b06f] transition hover:text-[#f9d48a]">Cancel</button>
              )}
            </div>

            <form onSubmit={submit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.22em] text-[#bdb6a8]">Name</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Margherita" className="w-full rounded border border-white/10 bg-[#0e0e0e] px-3 py-2.5 text-sm text-white outline-none transition focus:border-[#d1b06f] focus:ring-2 focus:ring-[#d1b06f]/25" required />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.22em] text-[#bdb6a8]">Price</label>
                  <input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} placeholder="890" className="w-full rounded border border-white/10 bg-[#0e0e0e] px-3 py-2.5 text-sm text-white outline-none transition focus:border-[#d1b06f] focus:ring-2 focus:ring-[#d1b06f]/25" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.22em] text-[#bdb6a8]">Calories</label>
                  <input type="number" value={form.calories} onChange={(e) => setForm({ ...form, calories: e.target.value })} placeholder="420" className="w-full rounded border border-white/10 bg-[#0e0e0e] px-3 py-2.5 text-sm text-white outline-none transition focus:border-[#d1b06f] focus:ring-2 focus:ring-[#d1b06f]/25" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.22em] text-[#bdb6a8]">Category</label>
                <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} list="edit-menu-categories" placeholder="Select or type category" className="w-full rounded border border-white/10 bg-[#0e0e0e] px-3 py-2.5 text-sm text-white outline-none transition focus:border-[#d1b06f] focus:ring-2 focus:ring-[#d1b06f]/25" />
                <datalist id="edit-menu-categories">
                  {categories.map((category) => <option key={category} value={category} />)}
                </datalist>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.22em] text-[#bdb6a8]">Badges</label>
                <input value={form.badges} onChange={(e) => setForm({ ...form, badges: e.target.value })} placeholder="new, domestic, signature" className="w-full rounded border border-white/10 bg-[#0e0e0e] px-3 py-2.5 text-sm text-white outline-none transition focus:border-[#d1b06f] focus:ring-2 focus:ring-[#d1b06f]/25" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.22em] text-[#bdb6a8]">Ingredients</label>
                <textarea value={form.ingredients} onChange={(e) => setForm({ ...form, ingredients: e.target.value })} rows={3} placeholder="Fresh basil, mozzarella, tomato sauce..." className="w-full rounded border border-white/10 bg-[#0e0e0e] px-3 py-2.5 text-sm text-white outline-none transition focus:border-[#d1b06f] focus:ring-2 focus:ring-[#d1b06f]/25" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.22em] text-[#bdb6a8]">Allergens</label>
                <input value={form.allergens} onChange={(e) => setForm({ ...form, allergens: e.target.value })} placeholder="gluten, nuts, dairy" className="w-full rounded border border-white/10 bg-[#0e0e0e] px-3 py-2.5 text-sm text-white outline-none transition focus:border-[#d1b06f] focus:ring-2 focus:ring-[#d1b06f]/25" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.22em] text-[#bdb6a8]">Description</label>
                <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={4} placeholder="Short description shown on menu" className="w-full rounded border border-white/10 bg-[#0e0e0e] px-3 py-2.5 text-sm text-white outline-none transition focus:border-[#d1b06f] focus:ring-2 focus:ring-[#d1b06f]/25" />
              </div>

              <div className="flex gap-3 pt-2">
                <button type="submit" disabled={isSubmitting} className="flex-1 rounded bg-[#d1b06f] px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#111] transition hover:bg-[#ebc77b] disabled:cursor-not-allowed disabled:opacity-60">
                  {isSubmitting ? 'Saving...' : editingId ? 'Update item' : 'Add item'}
                </button>
                {editingId && (
                  <button type="button" onClick={resetForm} className="rounded border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#f5f0e8] transition hover:border-[#d1b06f]/60 hover:text-[#d1b06f]">
                    Clear
                  </button>
                )}
              </div>
            </form>
          </aside>

          <section className="rounded border border-white/10 bg-[#161616] p-4 shadow-[0_12px_32px_rgba(0,0,0,0.22)] md:p-5">
            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#bdb6a8]">Overview</p>
                <h2 className="mt-1 text-xl font-semibold uppercase tracking-[0.12em] text-[#f5f0e8]">Menu list</h2>
              </div>

              <div className="w-full md:max-w-xs">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name or category"
                  className="w-full rounded border border-white/10 bg-[#0e0e0e] px-3 py-2.5 text-sm text-white placeholder:text-[#8a8278] outline-none transition focus:border-[#d1b06f] focus:ring-2 focus:ring-[#d1b06f]/25"
                />
              </div>
            </div>

            {filteredItems.length === 0 ? (
              <div className="rounded border border-dashed border-white/10 bg-[#0d0d0d] px-5 py-10 text-center">
                <p className="text-lg font-medium text-[#f5f0e8]">No menu items match this search.</p>
                <p className="mt-2 text-sm text-[#bdb6a8]">Try a different keyword or create a new menu item.</p>
              </div>
            ) : (
              <div className="max-h-[70vh] space-y-3 overflow-y-auto pr-1">
                {filteredItems.map((it) => (
                  <article key={it.id ?? `${it.name}-${it.category}`} className="rounded border border-white/10 bg-[#0f0f0f] p-4 transition hover:border-[#d1b06f]/40 hover:bg-[#121212]">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-display text-xl font-semibold uppercase tracking-[0.06em] text-[#f5f0e8]">{it.name}</h3>
                          {(it.badges ?? []).map((badge, idx) => (
                            <Badge key={`${it.id}-${badge}-${idx}`} type={badge} />
                          ))}
                        </div>

                        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.14em] text-[#bdb6a8]">
                          {it.category && <span>{it.category}</span>}
                          {it.calories ? <span>• {it.calories} kcal</span> : null}
                          <span>• {formatRsd(it.price)}</span>
                        </div>

                        {it.description && (
                          <p className="mt-2 text-sm leading-6 text-[#d7d0c7]">{it.description}</p>
                        )}

                        {it.ingredients && (
                          <p className="mt-2 text-xs uppercase tracking-[0.12em] text-[#bdb6a8]">Ingredients: {it.ingredients}</p>
                        )}
                        {it.allergens && (
                          <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#bdb6a8]">Allergens: {it.allergens}</p>
                        )}
                      </div>

                      <div className="flex shrink-0 flex-col gap-2 md:w-[116px]">
                        <button type="button" onClick={() => populateForEdit(it)} className="rounded border border-[#d1b06f]/70 bg-[#d1b06f] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#111] transition hover:bg-[#ebc77b]">Edit</button>
                        <button type="button" onClick={() => remove(it.id)} className="rounded border border-red-500/50 bg-red-500/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-red-200 transition hover:bg-red-500/20">Delete</button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
