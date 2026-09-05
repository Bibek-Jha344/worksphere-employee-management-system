export type EmployeeStatus = "ACTIVE" | "INACTIVE" | "SUSPENDED";

export type Employee = {
  id: string;
  employeeCode: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  status: EmployeeStatus;
};
