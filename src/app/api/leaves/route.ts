import { NextRequest } from "next/server";
import { leaveRequestSchema } from "@/lib/validations";
import { badRequest, ok, unauthorized } from "@/lib/api";
import { requireSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await requireSession();
  if (!session) {
    return unauthorized();
  }

  const requests = await prisma.leaveRequest.findMany({
    include: { employee: true, leaveType: true },
    orderBy: { createdAt: "desc" },
  });

  return ok(requests);
}

export async function POST(request: NextRequest) {
  const session = await requireSession();
  if (!session) {
    return unauthorized();
  }

  const body = await request.json();
  const validation = leaveRequestSchema.safeParse(body);
  if (!validation.success) {
    return badRequest("Invalid leave request payload", validation.error.flatten());
  }

  const leaveRequest = await prisma.leaveRequest.create({
    data: {
      employeeId: validation.data.employeeId,
      leaveTypeId: validation.data.leaveTypeId,
      startDate: new Date(validation.data.startDate),
      endDate: new Date(validation.data.endDate),
      daysRequested: validation.data.daysRequested ?? 1,
      reason: validation.data.reason,
    },
  });

  return ok(leaveRequest, "Leave request created");
}
