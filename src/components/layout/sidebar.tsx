export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-72 border-r border-slate-200 bg-slate-50 p-6 lg:block">
      <div className="text-xl font-bold text-slate-900">WorkSphere</div>
      <nav className="mt-8 space-y-2 text-sm text-slate-600">
        <div className="rounded-md bg-white px-3 py-2 font-medium text-brand-600 shadow-sm">
          Dashboard
        </div>
        <div className="rounded-md px-3 py-2">Employees</div>
        <div className="rounded-md px-3 py-2">Departments</div>
        <div className="rounded-md px-3 py-2">Attendance</div>
        <div className="rounded-md px-3 py-2">Payroll</div>
      </nav>
    </aside>
  );
}
