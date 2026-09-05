import { NextRequest } from "next/server";
import { attendanceSchema } from "@/lib/validations";
import { badRequest, ok, unauthorized } from "@/lib/api";
import { requireSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await requireSession();
  if (!session) {
    return unauthorized();
  }

  const attendance = await prisma.attendance.findMany({
    include: { employee: true },
    orderBy: { date: "desc" },
  });

  return ok(attendance);
}

export async function POST(request: NextRequest) {
  const session = await requireSession();
  if (!session) {
    return unauthorized();
  }

  const body = await request.json();
  const validation = attendanceSchema.safeParse(body);
  if (!validation.success) {
    return badRequest("Invalid attendance payload", validation.error.flatten());
  }

  const date = new Date(validation.data.date);
  const attendance = await prisma.attendance.upsert({
    where: {
      employeeId_date: {
        employeeId: validation.data.employeeId,
        date,
      },
    },
    update: {
      checkIn: validation.data.checkIn ? new Date(validation.data.checkIn) : undefined,
      checkOut: validation.data.checkOut ? new Date(validation.data.checkOut) : undefined,
      status: validation.data.status,
      notes: validation.data.notes,
    },
    create: {
      employeeId: validation.data.employeeId,
      date,
      checkIn: validation.data.checkIn ? new Date(validation.data.checkIn) : undefined,
      checkOut: validation.data.checkOut ? new Date(validation.data.checkOut) : undefined,
      status: validation.data.status,
      notes: validation.data.notes,
    },
  });

  return ok(attendance, "Attendance saved");
}
