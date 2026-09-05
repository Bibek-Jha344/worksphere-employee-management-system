export type AppRole = "SUPER_ADMIN" | "HR" | "MANAGER" | "EMPLOYEE";

export type AuthSession = {
  user: {
    id: string;
    email: string;
    role: AppRole;
  };
};
