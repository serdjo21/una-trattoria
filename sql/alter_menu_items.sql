-- Run this in Supabase SQL editor to add extra columns used by the editor
alter table if exists public.menu_items
  add column if not exists calories integer,
  add column if not exists ingredients text,
  add column if not exists allergens text;

-- Optional: ensure category column exists
alter table if exists public.menu_items
  add column if not exists category text;
