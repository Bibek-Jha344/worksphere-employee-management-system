export type PayrollStatus = "DRAFT" | "GENERATED" | "PAID" | "CANCELLED";

export type PayrollRecord = {
  id: string;
  employeeId: string;
  payPeriod: string;
  grossSalary: number;
  netSalary: number;
  status: PayrollStatus;
};
