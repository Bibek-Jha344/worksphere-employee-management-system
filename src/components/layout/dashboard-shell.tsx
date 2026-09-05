import Link from "next/link";
import { BarChart3, Bell, CalendarDays, ClipboardCheck, FileText, LayoutDashboard, Settings, Users, WalletCards } from "lucide-react";

const navigation = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/employees", label: "Employees", icon: Users },
  { href: "/departments", label: "Departments", icon: FileText },
  { href: "/attendance", label: "Attendance", icon: ClipboardCheck },
  { href: "/leaves", label: "Leave requests", icon: CalendarDays },
  { href: "/payroll", label: "Payroll", icon: WalletCards },
  { href: "/reports", label: "Reports", icon: BarChart3 },
] as const;

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-slate-50 lg:flex"><aside className="border-b border-slate-200 bg-slate-950 text-white lg:min-h-screen lg:w-64 lg:border-b-0 lg:border-r lg:border-slate-800"><div className="flex items-center justify-between px-5 py-5 lg:block"><Link href="/dashboard" className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400 font-black text-slate-950">W</span><span className="text-lg font-semibold tracking-tight">WorkSphere</span></Link><span className="hidden text-xs text-slate-500 lg:mt-2 lg:block">People operations, simplified</span></div><nav className="flex gap-1 overflow-x-auto px-3 pb-3 lg:mt-8 lg:block lg:space-y-1 lg:px-3">{navigation.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className="flex shrink-0 items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"><Icon size={17} strokeWidth={1.8} />{label}</Link>)}</nav><div className="hidden border-t border-slate-800 px-3 pt-4 lg:mt-8 lg:block"><Link href="/settings" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400 hover:bg-slate-800 hover:text-white"><Settings size={17} strokeWidth={1.8} /> Settings</Link></div></aside><div className="min-w-0 flex-1"><header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-5 lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600">Workspace</p><p className="text-sm font-medium text-slate-700">People operations</p></div><div className="flex items-center gap-4"><button aria-label="View notifications" className="text-slate-500 hover:text-slate-900"><Bell size={19} /></button><div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">WS</div></div></header><main className="mx-auto max-w-7xl px-5 py-7 lg:px-8">{children}</main></div></div>;
}