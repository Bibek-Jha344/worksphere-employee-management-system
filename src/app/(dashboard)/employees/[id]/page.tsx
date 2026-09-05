import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/page-header";

export const dynamic = "force-dynamic";

export default async function EmployeeDetailsPage({ params }: { params: { id: string } }) {
  const employee = await prisma.employee.findUnique({ where: { id: params.id }, include: { department: true, designation: true, manager: true } });
  if (!employee) notFound();
  return <><PageHeader title={`${employee.firstName} ${employee.lastName}`} description={`${employee.employeeCode} · ${employee.email}`} action={{ label: "Back to employees", href: "/employees" }} /><div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]"><Card title="Employment details"><dl className="grid gap-5 sm:grid-cols-2"><div><dt className="text-xs uppercase tracking-wider text-slate-400">Department</dt><dd className="mt-1 text-sm font-medium text-slate-900">{employee.department?.name ?? "Unassigned"}</dd></div><div><dt className="text-xs uppercase tracking-wider text-slate-400">Designation</dt><dd className="mt-1 text-sm font-medium text-slate-900">{employee.designation?.title ?? "Unassigned"}</dd></div><div><dt className="text-xs uppercase tracking-wider text-slate-400">Join date</dt><dd className="mt-1 text-sm font-medium text-slate-900">{employee.joinDate?.toLocaleDateString() ?? "Not provided"}</dd></div><div><dt className="text-xs uppercase tracking-wider text-slate-400">Status</dt><dd className="mt-1 text-sm font-medium text-emerald-700">{employee.status}</dd></div></dl></Card><Card title="Contact"><p className="text-sm text-slate-600">{employee.email}</p><p className="mt-2 text-sm text-slate-600">{employee.phone ?? "No phone number provided"}</p><Link href="/employees" className="mt-6 inline-block text-sm font-semibold text-cyan-700">Return to directory</Link></Card></div></>;
}
