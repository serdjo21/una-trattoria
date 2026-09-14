// Load environment variables: prefer .env.local if present
require('dotenv').config();
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE;

if (!SUPABASE_URL || !SERVICE_ROLE) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE in .env.local');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE, { auth: { persistSession: false } });

const items = [
  { name: 'Margherita', price: 890, description: 'tomato sauce, mozzarella, basil', category: 'Pizza Classics' },
  { name: 'Marinara', price: 790, description: 'tomato sauce, basil, garlic, pepper, olive oil', category: 'Pizza Classics' },
  { name: 'Bolognese', price: 990, description: 'beef ragout in tomato sauce, grana padano', category: 'Pasta' },
  { name: 'Carbonara', price: 990, description: 'bacon, eggs, grana padano', category: 'Pasta' },
  { name: 'Tiramisu', price: 650, description: 'classic tiramisu', category: 'Desserts' },
  { name: 'Una', price: 1290, description: "mixed green salad, pomegranate, green apple, walnuts, raisins, olive oil, cherry tomatoes, goat cheese", category: 'Salads' },
  { name: 'Calzone Prosciutto Cotto', price: 990, description: 'tomato sauce, mozzarella, mushrooms, prosciutto cotto', category: 'Breakfast' },
  { name: 'Fried Mozzarella Cheese', price: 890, description: 'fried mozzarella', category: 'Starters' },
];

async function run() {
  console.log('Seeding', items.length, 'items to Supabase (table: menu_items)');

  // Upsert by name to avoid duplicates
  const { data, error } = await supabase
    .from('menu_items')
    .upsert(items, { onConflict: 'name' });

  if (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }

  if (!data) {
    console.log('Seed completed: no rows returned (data is null) — check table and RLS policies');
  } else {
    console.log('Seed completed:', Array.isArray(data) ? data.length : 1, 'rows');
  }

  // Verify by selecting count
  const { data: verifyData, error: verifyError, count } = await supabase
    .from('menu_items')
    .select('*', { count: 'exact' });

  if (verifyError) {
    console.error('Verify error:', verifyError);
  } else {
    console.log('Verify: total rows in menu_items =', count ?? (Array.isArray(verifyData) ? verifyData.length : 0));
  }
  process.exit(0);
}

run();
