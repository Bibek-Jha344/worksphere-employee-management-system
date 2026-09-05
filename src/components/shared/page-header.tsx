import Link from "next/link";
import type { Route } from "next";
import { ArrowRight, Plus } from "lucide-react";

export function PageHeader({ title, description, action }: { title: string; description: string; action?: { label: string; href: Route } }) {
  return <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-600">WorkSphere</p><h1 className="text-3xl font-semibold tracking-tight text-slate-950">{title}</h1><p className="mt-1 text-sm text-slate-500">{description}</p></div>{action ? <Link href={action.href} className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700"><Plus size={16} />{action.label}<ArrowRight size={15} /></Link> : null}</div>;
}