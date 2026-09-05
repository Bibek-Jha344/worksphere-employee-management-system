export type LeaveStatus = "PENDING" | "APPROVED" | "REJECTED" | "CANCELLED";

export type LeaveRequest = {
  id: string;
  employeeId: string;
  leaveTypeId: string;
  status: LeaveStatus;
  startDate: string;
  endDate: string;
};
