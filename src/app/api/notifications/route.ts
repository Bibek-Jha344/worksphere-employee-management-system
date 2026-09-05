import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { ok, unauthorized } from "@/lib/api";
import { requireSession } from "@/lib/session";
import { notificationSchema } from "@/lib/validations";

export async function GET() {
  if (!(await requireSession())) return unauthorized();
  return ok(await prisma.notification.findMany({ orderBy: { createdAt: "desc" }, take: 50 }));
}

export async function POST(request: NextRequest) {
  const session = await requireSession();
  if (!session?.user?.id) return unauthorized();
  const validation = notificationSchema.safeParse(await request.json());
  if (!validation.success) return Response.json({ success: false, message: "Invalid notification payload", details: validation.error.flatten() }, { status: 400 });
  return ok(await prisma.notification.create({ data: validation.data }), "Notification created");
}
