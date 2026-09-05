type StatCardProps = {
  title: string;
  value: string;
  change?: string;
};

export function StatCard({ title, value, change }: StatCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft">
      <p className="text-sm text-slate-500">{title}</p>
      <div className="mt-3 flex items-end justify-between">
        <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
        {change ? (
          <span className="text-xs font-medium text-emerald-600">{change}</span>
        ) : null}
      </div>
    </div>
  );
}
