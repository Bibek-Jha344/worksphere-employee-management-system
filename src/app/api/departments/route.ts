import { NextRequest } from "next/server";
import { departmentSchema } from "@/lib/validations";
import { badRequest, ok, unauthorized } from "@/lib/api";
import { requireSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await requireSession();
  if (!session) {
    return unauthorized();
  }

  const departments = await prisma.department.findMany({
    include: {
      employees: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return ok(
    departments.map((department) => ({
      ...department,
      employeeCount: department.employees.length,
    })),
  );
}

export async function POST(request: NextRequest) {
  const session = await requireSession();
  if (!session) {
    return unauthorized();
  }

  const body = await request.json();
  const validation = departmentSchema.safeParse(body);
  if (!validation.success) {
    return badRequest("Invalid department payload", validation.error.flatten());
  }

  const organization = await prisma.organization.upsert({
    where: { slug: "default" },
    update: {},
    create: {
      name: "Default Organization",
      slug: "default",
      email: "admin@worksphere.local",
    },
  });

  const department = await prisma.department.create({
    data: {
      organizationId: organization.id,
      name: validation.data.name,
      description: validation.data.description,
    },
  });

  return ok(department, "Department created");
}
