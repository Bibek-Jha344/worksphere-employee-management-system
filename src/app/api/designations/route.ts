import { NextRequest } from "next/server";
import { designationSchema } from "@/lib/validations";
import { badRequest, ok, unauthorized } from "@/lib/api";
import { requireSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await requireSession();
  if (!session) {
    return unauthorized();
  }

  const designations = await prisma.designation.findMany({
    include: { employees: true },
    orderBy: { createdAt: "desc" },
  });

  return ok(
    designations.map((designation) => ({
      ...designation,
      employeeCount: designation.employees.length,
    })),
  );
}

export async function POST(request: NextRequest) {
  const session = await requireSession();
  if (!session) {
    return unauthorized();
  }

  const body = await request.json();
  const validation = designationSchema.safeParse(body);
  if (!validation.success) {
    return badRequest("Invalid designation payload", validation.error.flatten());
  }

  const designation = await prisma.designation.create({
    data: {
      title: validation.data.title,
      description: validation.data.description,
      departmentId: validation.data.departmentId,
    },
  });

  return ok(designation, "Designation created");
}
