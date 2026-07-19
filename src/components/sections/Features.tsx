import { Luggage, Compass, Wallet } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";

const features = [
  {
    icon: Luggage,
    title: "Paket Terlengkap",
    description:
      "Dari Gunung Bromo hingga Pulau Komodo, pilihannya lengkap untuk segala jenis petualangan.",
  },
  {
    icon: Compass,
    title: "Guide Berpengalaman",
    description:
      "Tim profesional dan lokal yang paham medan, menjaga perjalanan aman dan berkesan.",
  },
  {
    icon: Wallet,
    title: "Harga Terjangkau",
    description:
      "Liburan berkualitas tanpa merogoh kocek dalam. Transparan dan tanpa biaya tersembunyi.",
  },
];

export default function Features() {
  return (
    <Section className="bg-slate-50">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Mengapa Kami</Eyebrow>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Keunggulan yang bikin trip berkesan
        </h2>
      </div>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
