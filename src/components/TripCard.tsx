import Link from "next/link";
import type { Trip } from "@/lib/types";

function formatPrice(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function TripCard({ trip }: { trip: Trip }) {
  const soldOut = trip.available_slots <= 0;

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={trip.image_url}
          alt={trip.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-emerald-700 shadow-sm backdrop-blur">
          {formatPrice(trip.price)}
        </span>
        {soldOut && (
          <span className="absolute right-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
            SOLD OUT
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h2 className="text-xl font-bold text-slate-900">{trip.title}</h2>
        <p className="mt-1 text-sm text-slate-500">{trip.duration}</p>

        <p className="mt-3 line-clamp-2 text-sm text-slate-600">
          {trip.description}
        </p>

        <p className="mt-4 text-sm font-medium text-slate-600">
          {soldOut ? (
            <span className="font-semibold text-red-600">Sold Out</span>
          ) : (
            <span className="font-semibold text-emerald-700">
              Sisa Slot: {trip.available_slots}
            </span>
          )}
        </p>

        <div className="mt-auto pt-6">
          {soldOut ? (
            <button
              type="button"
              disabled
              className="flex h-12 w-full cursor-not-allowed items-center justify-center rounded-full bg-slate-200 text-base font-semibold text-slate-400"
            >
              Sold Out
            </button>
          ) : (
            <Link
              href={`/trips/${trip.id}/booking`}
              className="flex h-12 w-full items-center justify-center rounded-full bg-emerald-600 text-base font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Booking Sekarang
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
