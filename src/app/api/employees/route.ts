import { NextRequest } from "next/server";
import { employeeSchema } from "@/lib/validations";
import { badRequest, ok, unauthorized } from "@/lib/api";
import { requireSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await requireSession();
  if (!session?.user.organizationId) {
    return unauthorized();
  }

  const employees = await prisma.employee.findMany({
    where: { organizationId: session.user.organizationId },
    include: {
      department: true,
      designation: true,
      manager: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return ok(employees);
}

export async function POST(request: NextRequest) {
  const session = await requireSession();
  if (!session?.user.organizationId) {
    return unauthorized();
  }

  const body = await request.json();
  const validation = employeeSchema.safeParse(body);
  if (!validation.success) {
    return badRequest("Invalid employee payload", validation.error.flatten());
  }

  const employee = await prisma.employee.create({
    data: {
      organizationId: session.user.organizationId,
      employeeCode: validation.data.employeeCode,
      firstName: validation.data.firstName,
      lastName: validation.data.lastName,
      email: validation.data.email,
      phone: validation.data.phone,
      status: validation.data.status,
      departmentId: validation.data.departmentId,
      designationId: validation.data.designationId,
      managerId: validation.data.managerId,
      joinDate: validation.data.joinDate ? new Date(validation.data.joinDate) : undefined,
      dateOfBirth: validation.data.dateOfBirth ? new Date(validation.data.dateOfBirth) : undefined,
      gender: validation.data.gender,
    },
  });

  return ok(employee, "Employee created");
}
