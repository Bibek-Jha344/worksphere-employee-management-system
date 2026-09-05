import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { ok, unauthorized } from "@/lib/api";
import { requireSession } from "@/lib/session";
import { performanceSchema } from "@/lib/validations";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await requireSession())) return unauthorized();
  return ok(await prisma.performanceReview.findMany({ include: { employee: true }, orderBy: { reviewDate: "desc" } }));
}

export async function POST(request: NextRequest) {
  if (!(await requireSession())) return unauthorized();
  const validation = performanceSchema.safeParse(await request.json());
  if (!validation.success) return Response.json({ success: false, message: "Invalid performance payload", details: validation.error.flatten() }, { status: 400 });
  return ok(await prisma.performanceReview.create({ data: { ...validation.data, reviewDate: new Date(validation.data.reviewDate) } }), "Performance review created");
}
