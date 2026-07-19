export default function TripsLoading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <div className="mx-auto h-9 w-64 animate-pulse rounded-full bg-slate-200" />
        <div className="mx-auto mt-4 h-4 w-96 max-w-full animate-pulse rounded-full bg-slate-200" />
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            <div className="h-48 w-full animate-pulse bg-slate-200" />
            <div className="space-y-3 p-6">
              <div className="h-5 w-3/4 animate-pulse rounded bg-slate-200" />
              <div className="h-4 w-1/3 animate-pulse rounded bg-slate-200" />
              <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
              <div className="h-6 w-1/2 animate-pulse rounded bg-slate-200" />
              <div className="h-12 w-full animate-pulse rounded-full bg-slate-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
