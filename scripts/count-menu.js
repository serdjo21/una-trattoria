require('dotenv').config();
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE;
if (!SUPABASE_URL || !SERVICE_ROLE) {
  console.error('Missing SUPABASE keys');
  process.exit(1);
}
const supabase = createClient(SUPABASE_URL, SERVICE_ROLE, { auth: { persistSession: false } });

(async ()=>{
  const { data, error, count } = await supabase.from('menu_items').select('*', { count: 'exact' });
  if (error) { console.error('count error', error); process.exit(1); }
  console.log('menu_items rows =', count ?? (Array.isArray(data)?data.length:0));
})();
