import { prisma } from "@/lib/prisma";
import { ok, unauthorized } from "@/lib/api";
import { requireSession } from "@/lib/session";

export async function GET() {
  if (!(await requireSession())) return unauthorized();
  const [employees, departments, activeEmployees] = await Promise.all([prisma.employee.count(), prisma.department.count(), prisma.employee.count({ where: { status: "ACTIVE" } })]);
  return ok({ employees, departments, activeEmployees });
}

export async function POST() {
  if (!(await requireSession())) return unauthorized();
  return Response.json({ success: false, message: "Use GET with report filters to generate a report" }, { status: 405 });
}
