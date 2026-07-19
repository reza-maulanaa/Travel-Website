# Travel Kuy — Website System

Aplikasi web monolith untuk bisnis travel **Travel Kuy**: Landing Page, Company Profile, dan sistem katalog booking yang mengarahkan user ke WhatsApp Admin. Dibangun dengan Next.js (App Router) + Tailwind CSS + Supabase.

## Tech Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Database & Auth:** Supabase (PostgreSQL + Auth)
- **Form:** React Hook Form
- **Icons:** lucide-react

## Setup Environment Variable Supabase

1. Buat project di [supabase.com](https://supabase.com).
2. Buka **Project Settings → API** untuk menyalin:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Buat file `.env.local` di root project:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
```

4. Jalankan skema & seed di Supabase SQL Editor (urutan: `schema.sql` lalu `seed.sql`):

```bash
# file: supabase/schema.sql  -> buat tabel + RLS policy
# file: supabase/seed.sql    -> isi 3 dummy trip
```

> Nomor WhatsApp Admin default: `6287811165612` (format internasional untuk `wa.me`).

## Cara Run Aplikasi Secara Lokal

```bash
npm install
npm run dev
```

Buka <http://localhost:3000>.

Build produksi:

```bash
npm run build
npm run start
```

## Struktur Direktori

```
src/
  app/
    page.tsx                 # Landing page (Hero, About, Features)
    trips/                   # Katalog trip publik + loading skeleton
    trips/[id]/booking/      # Form booking + redirect WhatsApp
    admin/login/             # Login admin (Supabase Auth)
    admin/dashboard/         # CRUD dashboard (terproteksi)
    admin/dashboard/create/  # Tambah trip
    admin/dashboard/edit/[id]/ # Edit trip / update slot
    not-found.tsx            # Halaman 404 custom
  components/                # Navbar, Footer
  lib/supabase/              # client.ts (browser) & server.ts (server)
  lib/types/                 # Interface Trip
  middleware.ts              # Proteksi rute /admin/*
supabase/                    # schema.sql & seed.sql
```

## Alur Kerja Sistem

1. **User melihat katalog** — `GET /trips` menampilkan semua trip dari tabel `trips` (public read via RLS).
2. **User booking** — di `/trips/[id]/booking`, user isi Nama, WhatsApp, Jumlah Peserta. Data **tidak disimpan ke DB**.
3. **Redirect ke WhatsApp** — pesan otomatis dirangkai & di-encode, lalu membuka `https://wa.me/<nomor_admin>?text=...` di tab baru.
4. **Admin update slot** — setelah deal di WhatsApp, admin login ke `/admin/dashboard`, edit trip, dan kurangi `available_slots` secara manual. Perubahan langsung tampil di katalog publik.

## Auth & Keamanan

- RLS: tabel `trips` bisa **di-read publik**, tapi **write/update/delete hanya untuk user terautentikasi**.
- Rute `/admin/*` diproteksi `middleware.ts`; user belum login di-redirect ke `/admin/login`.
- Tidak ada payment online — seluruh transaksi dilakukan di WhatsApp.
