"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function EmployeeForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  async function submit(formData: FormData) {
    setSaving(true);
    setError("");
    const response = await fetch("/api/employees", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(formData)) });
    if (!response.ok) {
      const result = await response.json().catch(() => null);
      setError(result?.message ?? "Unable to create employee.");
      setSaving(false);
      return;
    }
    router.push("/employees");
    router.refresh();
  }

  return <form onSubmit={(event) => { event.preventDefault(); void submit(new FormData(event.currentTarget)); }} className="grid gap-5 md:grid-cols-2"><label className="text-sm font-medium text-slate-700">First name<input name="firstName" required className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5" placeholder="Alex" /></label><label className="text-sm font-medium text-slate-700">Last name<input name="lastName" required className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5" placeholder="Morgan" /></label><label className="text-sm font-medium text-slate-700">Work email<input name="email" type="email" required className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5" placeholder="alex@company.com" /></label><label className="text-sm font-medium text-slate-700">Employee code<input name="employeeCode" required className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5" placeholder="WS-001" /></label><label className="text-sm font-medium text-slate-700">Phone<input name="phone" className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5" placeholder="+1 555 000 0000" /></label><label className="text-sm font-medium text-slate-700">Join date<input name="joinDate" type="date" className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5" /></label>{error ? <p className="text-sm text-rose-600 md:col-span-2">{error}</p> : null}<button type="submit" disabled={saving} className="rounded-lg bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-50 md:col-span-2 md:w-fit">{saving ? "Creating..." : "Create employee"}</button></form>;
}