export const permissionDefinitions = {
  employee: {
    view: "employee:view",
    create: "employee:create",
    update: "employee:update",
    delete: "employee:delete",
  },
  department: {
    view: "department:view",
    create: "department:create",
    update: "department:update",
    delete: "department:delete",
  },
  attendance: {
    view: "attendance:view",
    create: "attendance:create",
    update: "attendance:update",
    export: "attendance:export",
  },
  leave: {
    view: "leave:view",
    create: "leave:create",
    approve: "leave:approve",
    reject: "leave:reject",
  },
  payroll: {
    view: "payroll:view",
    create: "payroll:create",
    update: "payroll:update",
    approve: "payroll:approve",
  },
} as const;

export type PermissionKey = keyof typeof permissionDefinitions;

export const roleHierarchy = {
  SUPER_ADMIN: ["HR", "MANAGER", "EMPLOYEE"],
  HR: ["MANAGER", "EMPLOYEE"],
  MANAGER: ["EMPLOYEE"],
  EMPLOYEE: [],
} as const;

export function canAccessRole(userRole: string, requiredRole: string) {
  if (userRole === requiredRole) {
    return true;
  }

  const hierarchy =
    (roleHierarchy as Record<string, readonly string[]>)[userRole] ?? [];
  return hierarchy.includes(requiredRole);
}

export function hasPermission(userRole: string, permission: string) {
  const permissionMap: Record<string, readonly string[]> = {
    SUPER_ADMIN: [
      "employee:view",
      "employee:create",
      "employee:update",
      "employee:delete",
      "department:view",
      "department:create",
      "department:update",
      "department:delete",
      "attendance:view",
      "attendance:create",
      "attendance:update",
      "attendance:export",
      "leave:view",
      "leave:create",
      "leave:approve",
      "leave:reject",
      "payroll:view",
      "payroll:create",
      "payroll:update",
      "payroll:approve",
    ],
    HR: [
      "employee:view",
      "employee:create",
      "employee:update",
      "department:view",
      "department:create",
      "department:update",
      "attendance:view",
      "attendance:create",
      "attendance:update",
      "attendance:export",
      "leave:view",
      "leave:create",
      "leave:approve",
      "leave:reject",
      "payroll:view",
      "payroll:create",
      "payroll:update",
      "payroll:approve",
    ],
    MANAGER: [
      "employee:view",
      "employee:update",
      "department:view",
      "attendance:view",
      "attendance:create",
      "leave:view",
      "leave:create",
      "leave:approve",
      "payroll:view",
    ],
    EMPLOYEE: ["employee:view", "attendance:view", "leave:view", "leave:create"],
  };

  const allowed = permissionMap[userRole] ?? [];
  return allowed.includes(permission);
}
