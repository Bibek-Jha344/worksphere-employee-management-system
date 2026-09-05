export function TopNav() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
      <div className="text-sm text-slate-500">Home / Dashboard</div>
      <div className="flex items-center gap-3">
        <button className="rounded-md bg-slate-100 px-3 py-2 text-sm text-slate-700">
          Search
        </button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 font-semibold text-brand-700">
          WS
        </div>
      </div>
    </header>
  );
}
