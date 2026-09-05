export function PayrollSummary() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft">
      <h3 className="text-lg font-semibold text-slate-900">Payroll summary</h3>
      <div className="mt-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Total payroll</span>
          <span className="font-medium text-slate-900">$0</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Paid</span>
          <span className="font-medium text-slate-900">$0</span>
        </div>
      </div>
    </div>
  );
}
