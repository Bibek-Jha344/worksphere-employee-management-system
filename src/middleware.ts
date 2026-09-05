export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/employees/:path*",
    "/departments/:path*",
    "/designations/:path*",
    "/attendance/:path*",
    "/leaves/:path*",
    "/payroll/:path*",
    "/performance/:path*",
    "/notifications/:path*",
    "/reports/:path*",
    "/settings/:path*",
  ],
};
