"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signIn } from "./actions";

export default function AdminLoginPage() {
  const [state, action, pending] = useActionState(signIn, undefined);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f5f0] px-4">
      <div className="w-full max-w-sm rounded-2xl border border-black/5 bg-white p-8 shadow-card">
        <h1 className="mb-1 text-lg font-bold text-navy">ورود به پنل مدیریت</h1>
        <p className="mb-6 text-sm text-muted">
          برای دسترسی به داشبورد وارد شوید
        </p>

        <form action={action} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-muted">
              ایمیل
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-line px-3 py-2 text-sm outline-none focus:border-teal"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm text-muted">
              رمز عبور
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-lg border border-line px-3 py-2 text-sm outline-none focus:border-teal"
              placeholder="••••••••"
            />
          </div>

          {state?.error && (
            <p className="text-sm text-red-600">{state.error}</p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-lg bg-navy py-2.5 text-sm font-medium text-white transition hover:bg-navy-soft disabled:opacity-60"
          >
            {pending ? "در حال ورود..." : "ورود"}
          </button>
        </form>

        <Link
          href="/admin/setup"
          className="mt-4 block text-center text-xs text-muted hover:text-navy"
        >
          هنوز حساب ادمین ندارید؟ ساخت حساب
        </Link>
      </div>
    </div>
  );
}
