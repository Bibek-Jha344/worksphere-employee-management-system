export const appName = "WorkSphere";

export const routeGroups = {
  dashboard: [
    "dashboard",
    "employees",
    "departments",
    "designations",
    "attendance",
    "leaves",
    "payroll",
    "performance",
    "reports",
    "notifications",
    "settings",
  ],
} as const;

export const statusOptions = [
  "ACTIVE",
  "INACTIVE",
  "PENDING",
  "APPROVED",
  "REJECTED",
] as const;
