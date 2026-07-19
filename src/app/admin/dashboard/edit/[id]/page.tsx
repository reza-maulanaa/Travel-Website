import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { updateTrip } from "./actions";

export const dynamic = "force-dynamic";

const inputClass =
  "mt-1 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500";

const labelClass = "block text-sm font-medium text-slate-700";

export default async function EditTripPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: trip } = await supabase
    .from("trips")
    .select("*")
    .eq("id", id)
    .single();

  if (!trip) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <Link
        href="/admin/dashboard"
        className="text-sm text-slate-500 hover:text-emerald-700"
      >
        ← Kembali ke dashboard
      </Link>

      <h1 className="mt-2 text-3xl font-bold text-slate-900">Edit Trip</h1>
      <p className="mt-1 text-sm text-slate-500">
        Perbarui detail dan sisa slot trip ini.
      </p>

      <form
        action={updateTrip.bind(null, id)}
        className="mt-8 space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        <div>
          <label className={labelClass}>Judul Trip</label>
          <input
            name="title"
            required
            defaultValue={trip.title}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Deskripsi</label>
          <textarea
            name="description"
            rows={3}
            defaultValue={trip.description}
            className={inputClass}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Harga (IDR)</label>
            <input
              name="price"
              type="number"
              min={0}
              required
              defaultValue={trip.price}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Durasi</label>
            <input
              name="duration"
              required
              defaultValue={trip.duration}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Image URL</label>
          <input
            name="image_url"
            defaultValue={trip.image_url}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Nomor WhatsApp Admin</label>
          <input
            name="whatsapp_number"
            defaultValue={trip.whatsapp_number}
            className={inputClass}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Max Slots</label>
            <input
              name="max_slots"
              type="number"
              min={0}
              required
              defaultValue={trip.max_slots}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Available Slots</label>
            <input
              name="available_slots"
              type="number"
              min={0}
              required
              defaultValue={trip.available_slots}
              className={inputClass}
            />
            <p className="mt-1 text-xs text-slate-400">
              Ubah nilai ini (mis. 10 → 7) setelah deal via WhatsApp.
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="flex h-12 w-full items-center justify-center rounded-full bg-emerald-600 text-base font-semibold text-white transition-colors hover:bg-emerald-700"
        >
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}
