// load env from .env and .env.local
require('dotenv').config();
require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE;
if (!SUPABASE_URL || !SERVICE_ROLE) {
  console.error('Missing SUPABASE keys in .env.local');
  process.exit(1);
}
const supabase = createClient(SUPABASE_URL, SERVICE_ROLE, { auth: { persistSession: false } });

const dataPath = path.join(__dirname, '..', 'data', 'menu.json');
if (!fs.existsSync(dataPath)) {
  console.error('data/menu.json not found — run scripts/parse-menu-md.js first or create your JSON');
  process.exit(1);
}

async function run(){
  const raw = fs.readFileSync(dataPath, 'utf8');
  const rawItems = JSON.parse(raw).map(it => ({
    name: it.name,
    price: it.price,
    description: it.description ?? null,
    category: it.category ?? null,
  }));

  // dedupe by normalized name to avoid ON CONFLICT affecting a row multiple times
  const seen = new Map();
  for (const it of rawItems) {
    const key = (it.name || '').toString().trim().toLowerCase();
    if (!seen.has(key)) seen.set(key, it);
  }
  const items = Array.from(seen.values());

  const { data, error } = await supabase.from('menu_items').insert(items).select();
  if (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
  console.log('Seeded', Array.isArray(data) ? data.length : 1, 'rows');
  process.exit(0);
}

run();
