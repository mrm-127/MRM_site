"use client";

import { useState } from "react";
import { services } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

export function ConsultationForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-teal/30 bg-teal-soft/40 p-10 text-center">
        <div className="mx-auto grid size-14 place-items-center rounded-full bg-teal text-white shadow-lg shadow-teal/30">
          <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5 12.5l4.5 4.5L19 7" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-extrabold text-navy">درخواست شما ثبت شد</h3>
        <p className="mt-2 text-sm text-muted">
          به‌زودی برای هماهنگی وقت مشاوره با شما تماس می‌گیرم. سپاس از اعتمادتان.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-xl border border-teal/30 bg-white px-5 py-2 text-sm font-bold text-teal transition-colors hover:bg-teal-soft"
        >
          ارسال درخواست دیگر
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Field label="نام و نام خانوادگی" name="name" required placeholder="مثلاً علی رضایی" />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="ایمیل" name="email" type="email" required dir="ltr" placeholder="you@example.com" />
        <Field label="شماره موبایل" name="phone" type="tel" required dir="ltr" placeholder="+98 912 000 0000" />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">
          موضوع مشاوره
        </label>
        <select
          name="service"
          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
          defaultValue=""
        >
          <option value="" disabled>
            یک گزینه را انتخاب کنید…
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="other">موضوع دیگر</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">
          توضیحات <span className="text-muted/70">(اختیاری)</span>
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full resize-none rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/50 focus:border-teal focus:ring-2 focus:ring-teal/20"
          placeholder="کمی درباره‌ی نیاز و کسب‌وکارتان بنویسید…"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
          <svg viewBox="0 0 24 24" className="size-4 shrink-0 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
          <p className="text-sm text-red-600">ارسال درخواست با خطا مواجه شد. لطفاً دوباره تلاش کنید.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-xl bg-teal px-6 py-3.5 font-bold text-white shadow-md shadow-teal/20 transition-all hover:-translate-y-px hover:bg-navy hover:shadow-navy/20 disabled:opacity-60 disabled:translate-y-0"
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="size-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4" strokeDashoffset="10" />
            </svg>
            در حال ارسال…
          </span>
        ) : (
          "ارسال درخواست مشاوره"
        )}
      </button>

      <p className="text-center text-xs text-muted">
        اطلاعات شما محرمانه است — پس از ثبت، برای هماهنگی وقت با شما تماس گرفته می‌شود.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  dir,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  dir?: "ltr" | "rtl";
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-teal"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        dir={dir}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/50 focus:border-teal focus:ring-2 focus:ring-teal/20"
      />
    </div>
  );
}
