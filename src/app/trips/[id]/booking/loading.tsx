export default function BookingLoading() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="h-7 w-48 animate-pulse rounded bg-slate-200" />
        <div className="mt-3 h-4 w-2/3 animate-pulse rounded bg-slate-200" />
        <div className="mt-8 space-y-5">
          <div className="h-12 w-full animate-pulse rounded-lg bg-slate-200" />
          <div className="h-12 w-full animate-pulse rounded-lg bg-slate-200" />
          <div className="h-12 w-full animate-pulse rounded-lg bg-slate-200" />
          <div className="h-12 w-full animate-pulse rounded-full bg-slate-200" />
        </div>
      </div>
    </div>
  );
}
