import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const organization = await prisma.organization.upsert({ where: { slug: "worksphere" }, update: {}, create: { name: "WorkSphere Demo", slug: "worksphere", email: "admin@worksphere.local" } });
  const permissions = ["employees.read", "employees.write", "attendance.read", "leaves.approve", "payroll.read", "reports.read"];
  for (const key of permissions) await prisma.permission.upsert({ where: { key }, update: {}, create: { key, action: key.endsWith("write") ? "CREATE" : key.includes("approve") ? "APPROVE" : "READ" } });
  const role = await prisma.role.upsert({ where: { name: "SUPER_ADMIN" }, update: {}, create: { name: "SUPER_ADMIN", description: "Full workspace access" } });
  const adminPasswordValue = process.env.SEED_ADMIN_PASSWORD;
  if (!adminPasswordValue) throw new Error("SEED_ADMIN_PASSWORD must be set before running the seed");
  const adminPassword = await hash(adminPasswordValue, 12);
  await prisma.user.upsert({ where: { email: "admin@worksphere.local" }, update: {}, create: { email: "admin@worksphere.local", passwordHash: adminPassword, firstName: "WorkSphere", lastName: "Admin", organizationId: organization.id, roleId: role.id } });
  for (const leaveType of [{ name: "Annual leave", daysAllowed: 20 }, { name: "Sick leave", daysAllowed: 10 }]) await prisma.leaveType.upsert({ where: { name: leaveType.name }, update: { daysAllowed: leaveType.daysAllowed }, create: leaveType });
  console.log("WorkSphere seed data created for admin@worksphere.local.");
}

main()
  .catch((error) => {
    console.error("Seed error:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
