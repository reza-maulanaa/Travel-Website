import Link from "next/link";
import { Plane, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
        <Plane className="h-8 w-8" />
      </span>
      <h1 className="mt-6 text-5xl font-extrabold text-slate-900">404</h1>
      <p className="mt-3 max-w-md text-slate-600">
        Halaman yang kamu cari tidak ditemukan. Mungkin trip sudah tidak
        tersedia atau tautannya salah.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-emerald-600 px-6 text-base font-semibold text-white transition-colors hover:bg-emerald-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Kembali ke Beranda
      </Link>
    </div>
  );
}
