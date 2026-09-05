import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { ok, unauthorized } from "@/lib/api";
import { requireSession } from "@/lib/session";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await requireSession())) return unauthorized();
  return ok(await prisma.auditLog.findMany({ orderBy: { createdAt: "desc" }, take: 100 }));
}

export async function POST(request: NextRequest) {
  const session = await requireSession();
  if (!session?.user?.id) return unauthorized();
  const body = await request.json();
  if (!body.action || !body.entityType) return Response.json({ success: false, message: "action and entityType are required" }, { status: 400 });
  return ok(await prisma.auditLog.create({ data: { userId: session.user.id, action: body.action, entityType: body.entityType, entityId: body.entityId, details: body.details, ipAddress: body.ipAddress } }), "Audit log created");
}
