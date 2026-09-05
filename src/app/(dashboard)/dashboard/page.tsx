import { prisma } from "@/lib/prisma";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/page-header";
import { StatCard } from "@/components/shared/stat-card";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  let stats = { employees: 0, departments: 0, pendingLeaves: 0, presentToday: 0 };
  let recentEmployees: { id: string; firstName: string; lastName: string; employeeCode: string; status: string }[] = [];
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const [employees, departments, pendingLeaves, presentToday, recent] = await Promise.all([
      prisma.employee.count(), prisma.department.count(), prisma.leaveRequest.count({ where: { status: "PENDING" } }),
      prisma.attendance.count({ where: { date: today, status: "PRESENT" } }),
      prisma.employee.findMany({ take: 5, orderBy: { createdAt: "desc" }, select: { id: true, firstName: true, lastName: true, employeeCode: true, status: true } }),
    ]);
    stats = { employees, departments, pendingLeaves, presentToday };
    recentEmployees = recent;
  } catch {
    // Keep first-run pages renderable before PostgreSQL is available.
  }
  return <><PageHeader title="Good morning" description="Here is what is happening across your organization today." /><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><StatCard label="Total employees" value={stats.employees} detail="Active people in your workspace" /><StatCard label="Departments" value={stats.departments} detail="Teams across the organization" accent="amber" /><StatCard label="Present today" value={stats.presentToday} detail="Attendance marked present" accent="emerald" /><StatCard label="Pending leave" value={stats.pendingLeaves} detail="Requests waiting for review" accent="rose" /></div><div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]"><Card title="Recently added employees">{recentEmployees.length ? <div className="divide-y divide-slate-100">{recentEmployees.map((employee) => <div key={employee.id} className="flex items-center justify-between py-3"><div><p className="font-medium text-slate-900">{employee.firstName} {employee.lastName}</p><p className="text-xs text-slate-500">{employee.employeeCode}</p></div><span className="text-xs font-semibold text-emerald-600">{employee.status}</span></div>)}</div> : <p className="text-sm text-slate-500">Your newest employees will appear here once they are added.</p>}</Card><Card title="Today at a glance"><div className="space-y-4 text-sm"><div className="flex justify-between"><span className="text-slate-500">Attendance coverage</span><strong className="text-slate-900">{stats.employees ? Math.round((stats.presentToday / stats.employees) * 100) : 0}%</strong></div><div className="h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-cyan-400" style={{ width: `${stats.employees ? Math.min(100, (stats.presentToday / stats.employees) * 100) : 0}%` }} /></div><p className="pt-2 text-xs leading-5 text-slate-500">Use the navigation to review attendance, approve leave, or manage employee records.</p></div></Card></div></>;
}
