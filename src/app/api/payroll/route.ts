import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { ok, unauthorized } from "@/lib/api";
import { requireSession } from "@/lib/session";
import { payrollSchema } from "@/lib/validations";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await requireSession())) return unauthorized();
  return ok(await prisma.payroll.findMany({ include: { employee: true }, orderBy: { createdAt: "desc" } }));
}

export async function POST(request: NextRequest) {
  if (!(await requireSession())) return unauthorized();
  const validation = payrollSchema.safeParse(await request.json());
  if (!validation.success) return Response.json({ success: false, message: "Invalid payroll payload", details: validation.error.flatten() }, { status: 400 });
  return ok(await prisma.payroll.create({ data: validation.data }), "Payroll created");
}
