"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export function LoginForm() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(formData: FormData) {
    setLoading(true);
    setError("");
    const result = await signIn("credentials", { email: formData.get("email"), password: formData.get("password"), redirect: false });
    if (result?.error) {
      setError("The email or password is incorrect.");
      setLoading(false);
      return;
    }
    window.location.assign("/dashboard");
  }

  return <form className="mt-7 space-y-4" onSubmit={(event) => { event.preventDefault(); void submit(new FormData(event.currentTarget)); }}><label className="block text-sm font-medium text-slate-700">Work email<input name="email" type="email" required className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-cyan-500" placeholder="you@company.com" /></label><label className="block text-sm font-medium text-slate-700">Password<input name="password" type="password" required className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-cyan-500" placeholder="Your password" /></label>{error ? <p className="text-sm text-rose-600">{error}</p> : null}<button disabled={loading} className="w-full rounded-lg bg-slate-950 py-3 text-sm font-semibold text-white disabled:opacity-50">{loading ? "Signing in..." : "Sign in"}</button></form>;
}