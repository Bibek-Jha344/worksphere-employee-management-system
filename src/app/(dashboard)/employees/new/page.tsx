import { PageHeader } from "@/components/shared/page-header";
import { Card } from "@/components/ui/card";
import { EmployeeForm } from "@/components/employees/employee-form";
export default function NewEmployeePage() { return <><PageHeader title="Add employee" description="Create a profile for a new member of your organization." action={{ label: "Back to directory", href: "/employees" }} /><Card><EmployeeForm /></Card></>; }
