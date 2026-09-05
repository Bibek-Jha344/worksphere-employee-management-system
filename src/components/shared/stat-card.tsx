import { Card } from "@/components/ui/card";

export function StatCard({ label, value, detail, accent = "cyan" }: { label: string; value: string | number; detail: string; accent?: "cyan" | "amber" | "rose" | "emerald" }) {
  const colors = { cyan: "bg-cyan-400", amber: "bg-amber-400", rose: "bg-rose-400", emerald: "bg-emerald-400" };
  return <Card className="relative overflow-hidden"><span className={`absolute left-0 top-0 h-full w-1 ${colors[accent]}`} /><p className="text-sm font-medium text-slate-500">{label}</p><p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{value}</p><p className="mt-2 text-xs text-slate-500">{detail}</p></Card>;
}