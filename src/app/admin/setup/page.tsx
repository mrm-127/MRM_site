"use client";

import { useActionState } from "react";
import Link from "next/link";
import { createFirstAdmin } from "./actions";

export default function AdminSetupPage() {
  const [state, action, pending] = useActionState(createFirstAdmin, undefined);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f5f0] px-4">
      <div className="w-full max-w-sm rounded-2xl border border-black/5 bg-white p-8 shadow-card">
        <h1 className="mb-1 text-lg font-bold text-navy">ساخت حساب ادمین</h1>
        <p className="mb-6 text-sm text-muted">
          کد راه‌اندازی را از فایل .env.local (متغیر ADMIN_SETUP_SECRET) بردار.
        </p>

        <form action={action} className="space-y-4">
          <div>
            <label htmlFor="code" className="mb-1 block text-sm text-muted">
              کد راه‌اندازی
            </label>
            <input
              id="code"
              name="code"
              type="text"
              required
              className="w-full rounded-lg border border-line px-3 py-2 text-sm outline-none focus:border-teal"
            />
          </div>

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
              minLength={8}
              className="w-full rounded-lg border border-line px-3 py-2 text-sm outline-none focus:border-teal"
              placeholder="حداقل ۸ کاراکتر"
            />
          </div>

          <div>
            <label htmlFor="confirm" className="mb-1 block text-sm text-muted">
              تکرار رمز عبور
            </label>
            <input
              id="confirm"
              name="confirm"
              type="password"
              required
              minLength={8}
              className="w-full rounded-lg border border-line px-3 py-2 text-sm outline-none focus:border-teal"
            />
          </div>

          {state?.error && (
            <p className="text-sm text-red-600">{state.error}</p>
          )}
          {state?.info && (
            <p className="text-sm text-teal-700">{state.info}</p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-lg bg-navy py-2.5 text-sm font-medium text-white transition hover:bg-navy-soft disabled:opacity-60"
          >
            {pending ? "در حال ساخت..." : "ساخت حساب"}
          </button>
        </form>

        <Link
          href="/admin/login"
          className="mt-4 block text-center text-xs text-muted hover:text-navy"
        >
          حساب دارید؟ ورود
        </Link>
      </div>
    </div>
  );
}
