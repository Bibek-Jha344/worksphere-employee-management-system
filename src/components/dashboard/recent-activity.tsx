export function RecentActivity() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft">
      <h3 className="text-lg font-semibold text-slate-900">Recent activity</h3>
      <ul className="mt-4 space-y-3 text-sm text-slate-600">
        <li>New leave request submitted</li>
        <li>Payroll generated for the month</li>
        <li>Employee profile updated</li>
      </ul>
    </div>
  );
}
