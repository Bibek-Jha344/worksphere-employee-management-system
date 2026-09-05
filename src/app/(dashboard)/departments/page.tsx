import { prisma } from "@/lib/prisma";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/page-header";

export const dynamic = "force-dynamic";

export default async function DepartmentsPage() {
  let departments: { id: string; name: string; description: string | null; _count: { employees: number; designations: number } }[] = [];
  try { departments = await prisma.department.findMany({ orderBy: { name: "asc" }, include: { _count: { select: { employees: true, designations: true } } } }); } catch { /* Show the empty state during first-run setup. */ }
  return <><PageHeader title="Departments" description="Organize your workforce around the teams that move the business forward." /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{departments.length ? departments.map((department) => <Card key={department.id}><div className="flex items-start justify-between"><div><h2 className="font-semibold text-slate-900">{department.name}</h2><p className="mt-2 text-sm leading-6 text-slate-500">{department.description ?? "No description added yet."}</p></div><span className="rounded-lg bg-cyan-50 px-2 py-1 text-xs font-bold text-cyan-700">{department._count.employees} people</span></div><div className="mt-6 flex gap-4 border-t border-slate-100 pt-4 text-xs text-slate-500"><span>{department._count.designations} designations</span><span>Active team</span></div></Card>) : <Card className="md:col-span-2 xl:col-span-3"><div className="py-14 text-center"><p className="font-medium text-slate-900">No departments yet</p><p className="mt-1 text-sm text-slate-500">Departments will appear here after your first organization setup.</p></div></Card>}</div></>;
}
