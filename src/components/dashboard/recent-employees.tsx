export function RecentEmployees() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft">
      <h3 className="text-lg font-semibold text-slate-900">Recent employees</h3>
      <div className="mt-4 space-y-3 text-sm text-slate-600">
        <div className="flex items-center justify-between">
          <span>Employee A</span>
          <span className="text-slate-400">Today</span>
        </div>
      </div>
    </div>
  );
}
