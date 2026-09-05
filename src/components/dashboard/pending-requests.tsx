export function PendingRequests() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft">
      <h3 className="text-lg font-semibold text-slate-900">Pending requests</h3>
      <div className="mt-4 space-y-2 text-sm text-slate-600">
        <div className="rounded-md bg-amber-50 p-3">
          3 pending leave approvals
        </div>
        <div className="rounded-md bg-amber-50 p-3">2 payroll review items</div>
      </div>
    </div>
  );
}
