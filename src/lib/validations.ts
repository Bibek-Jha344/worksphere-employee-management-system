import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const employeeSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  employeeCode: z.string().min(2),
  departmentId: z.string().optional(),
  designationId: z.string().optional(),
  managerId: z.string().optional(),
  status: z.enum(["ACTIVE", "INACTIVE", "SUSPENDED"]).default("ACTIVE"),
  dateOfBirth: z.string().optional(),
  gender: z.string().optional(),
  joinDate: z.string().optional(),
});

export const departmentSchema = z.object({
  name: z.string().min(2),
  description: z.string().optional(),
});

export const designationSchema = z.object({
  title: z.string().min(2),
  departmentId: z.string().optional(),
  description: z.string().optional(),
});

export const attendanceSchema = z.object({
  employeeId: z.string().min(1),
  date: z.string().min(1),
  checkIn: z.string().optional(),
  checkOut: z.string().optional(),
  status: z.enum(["PRESENT", "ABSENT", "LATE", "HALF_DAY", "LEAVE", "HOLIDAY"]).default("PRESENT"),
  notes: z.string().optional(),
});

export const leaveRequestSchema = z.object({
  employeeId: z.string().min(1),
  leaveTypeId: z.string().min(1),
  startDate: z.string().min(1),
  endDate: z.string().min(1),
  reason: z.string().optional(),
  daysRequested: z.number().int().positive().optional(),
});

export const payrollSchema = z.object({
  employeeId: z.string().min(1),
  payPeriod: z.string().min(1),
  grossSalary: z.number().nonnegative(),
  netSalary: z.number().nonnegative(),
  status: z.enum(["DRAFT", "GENERATED", "PAID", "CANCELLED"]).default("DRAFT"),
});

export const performanceSchema = z.object({
  employeeId: z.string().min(1),
  reviewerId: z.string().optional(),
  reviewDate: z.string().min(1),
  rating: z.enum(["POOR", "BELOW_EXPECTED", "MEETS_EXPECTATIONS", "EXCEEDS_EXPECTATIONS", "OUTSTANDING"]),
  comments: z.string().optional(),
});

export const notificationSchema = z.object({
  title: z.string().min(1),
  message: z.string().min(1),
  type: z.enum(["SYSTEM", "LEAVE", "PAYROLL", "EMPLOYEE", "AUDIT"]).default("SYSTEM"),
  employeeId: z.string().optional(),
  userId: z.string().optional(),
});
