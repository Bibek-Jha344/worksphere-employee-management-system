import Link from "next/link";
import { LoginForm } from "@/components/auth/login-form";

export const dynamic = "force-dynamic";

export default function LoginPage() { return <main className="flex min-h-screen items-center justify-center bg-slate-950 px-5 py-12"><div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"><div className="mb-8 flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400 font-black text-slate-950">W</span><span className="text-xl font-bold text-slate-950">WorkSphere</span></div><h1 className="text-2xl font-semibold tracking-tight text-slate-950">Welcome back</h1><p className="mt-2 text-sm text-slate-500">Sign in to manage your people operations.</p><LoginForm /><Link href="/forgot-password" className="mt-5 block text-center text-sm font-medium text-cyan-700">Forgot your password?</Link></div></main>; }
