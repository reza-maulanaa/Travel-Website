import Link from "next/link";

const features = [
  {
    icon: "🎒",
    title: "Paket Terlengkap",
    description:
      "Dari Gunung Bromo hingga Pulau Komodo, pilihannya lengkap untuk segala jenis petualangan.",
  },
  {
    icon: "🧭",
    title: "Guide Berpengalaman",
    description:
      "Tim profesional dan lokal yang paham medan, menjaga perjalanan aman dan berkesan.",
  },
  {
    icon: "💸",
    title: "Harga Terjangkau",
    description:
      "Liburan berkualitas tanpa merogoh kocek dalam. Transparan dan tanpa biaya tersembunyi.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
          <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white">
            ✈️ Travel & Tour Indonesia
          </span>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-6xl">
            Jelajahi Indonesia Bersama Travel Kuy
          </h1>
          <p className="mt-6 max-w-xl text-lg text-emerald-50">
            Temukan paket trip terbaik dengan guide berpengalaman dan harga
            terjangkau. Pesan slotmu sekarang hanya dengan beberapa klik.
          </p>
          <Link
            href="/trips"
            className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-emerald-700 shadow-lg transition-transform hover:scale-105"
          >
            Lihat Paket Trip
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Tentang Travel Kuy
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Travel Kuy adalah penyedia jasa perjalanan yang menghubungkan kamu
            dengan keindahan alam Indonesia. Kami hadir dengan misi membuat
            wisata jadi mudah, aman, dan terjangkau. Tanpa ribet, tanpa pembayaran
            online — cukup pilih trip, isi data, dan lanjutkan diskusi lewat
            WhatsApp bersama admin kami.
          </p>
        </div>
      </section>

      {/* Services / Features Section */}
      <section className="bg-emerald-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
            Mengapa Memilih Kami?
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-emerald-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
