import { Plane, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-auto border-t border-emerald-100 bg-slate-900 text-slate-300"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 text-lg font-extrabold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white">
              <Plane className="h-5 w-5" />
            </span>
            Travel Kuy
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Jelajahi keindahan Indonesia bersama kami. Booking mudah, harga
            terjangkau, dan perjalanan tak terlupakan.
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-semibold text-white">Hubungi Kami</p>
          <a
            href="https://wa.me/6287811165612"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 transition-colors hover:text-emerald-400"
          >
            <MessageCircle className="h-4 w-4" />
            0878-1116-5612
          </a>
          <p className="flex items-center gap-2 text-slate-400">
            <Mail className="h-4 w-4" />
            hello@travelkuy.id
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Travel Kuy. All rights reserved.
      </div>
    </footer>
  );
}
