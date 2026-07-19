-- Travel Kuy: Database Schema
-- Tabel `trips` sesuai interface di lib/types/index.ts

create table if not exists public.trips (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null default '',
  price numeric(12, 2) not null default 0,
  duration text not null default '',
  image_url text not null default '',
  max_slots integer not null default 0,
  available_slots integer not null default 0,
  whatsapp_number text not null default ''
);

-- Index untuk pencarian berdasarkan judul
create index if not exists trips_title_idx on public.trips (title);

-- Enable Row Level Security
alter table public.trips enable row level security;

-- Policy: Publik (anon/authenticated) boleh membaca semua trip
drop policy if exists "trips_select_public" on public.trips;
create policy "trips_select_public"
  on public.trips
  for select
  using (true);

-- Policy: Hanya user terautentikasi yang boleh insert
drop policy if exists "trips_insert_auth" on public.trips;
create policy "trips_insert_auth"
  on public.trips
  for insert
  to authenticated
  with check (true);

-- Policy: Hanya user terautentikasi yang boleh update
drop policy if exists "trips_update_auth" on public.trips;
create policy "trips_update_auth"
  on public.trips
  for update
  to authenticated
  using (true)
  with check (true);

-- Policy: Hanya user terautentikasi yang boleh delete
drop policy if exists "trips_delete_auth" on public.trips;
create policy "trips_delete_auth"
  on public.trips
  for delete
  to authenticated
  using (true);
