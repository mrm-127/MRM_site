import type { Metadata } from "next";
import Link from "next/link";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "درباره من",
  description:
    "محمدرضا مومنی — حسابدار ارشد و مدیر مالی با ۲۸ سال تجربه، اکنون مشاور هوش مصنوعی و امور مالی.",
};

const experience = [
  {
    role: "مدیر مالی",
    org: "سازمان صنایع ملی ایران",
    points: [
      "مدیریت مالی چندین شرکت تولیدی",
      "نظارت بر تهیه‌ی گزارش‌های مالی و ترازنامه",
      "کنترل جریان نقدی و بودجه‌بندی",
      "مشاوره‌ی مالی به مدیریت ارشد",
    ],
  },
  {
    role: "رئیس حسابداری",
    org: "سازمان صنایع ملی ایران",
    points: [
      "مدیریت تیم حسابداری",
      "نظارت بر عملیات حسابداری شرکت‌های تابعه",
      "بهینه‌سازی سیستم‌های مالی",
    ],
  },
  {
    role: "کارشناس حسابداری",
    org: "سازمان صنایع ملی ایران",
    points: [
      "انجام امور حسابداری عمومی",
      "تهیه‌ی گزارش‌های مالی دوره‌ای",
    ],
  },
];

const skills = [
  "راهکاران",
  "رایورز",
  "SAP",
  "هلو",
  "سپیدار",
  "QuickBooks",
  "Excel پیشرفته",
  "گزارش‌گیری مالی",
  "کنترل داخلی",
  "استانداردهای حسابداری کانادا",
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="pointer-events-none absolute inset-0 dot-grid opacity-60" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 -right-28 h-[450px] w-[450px] rounded-full bg-teal/15 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-teal/8 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-5 py-24 md:py-32">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
            {/* Avatar initials */}
            <div className="shrink-0">
              <div className="relative">
                <div className="grid size-24 place-items-center rounded-3xl bg-gradient-to-br from-teal to-teal-bright text-3xl font-extrabold text-white shadow-xl shadow-teal/30 md:size-28">
                  م.م
                </div>
                <span className="absolute -bottom-2 -left-2 flex size-7 items-center justify-center rounded-full border-2 border-navy-deep bg-teal text-[10px] font-bold text-white">
                  ✓
                </span>
              </div>
            </div>

            <div>
              <span className="inline-block rounded-full border border-teal/25 bg-teal/10 px-4 py-1.5 text-sm font-bold text-teal-bright">
                درباره من
              </span>
              <h1 className="mt-4 text-2xl font-extrabold md:text-4xl">
                محمدرضا مومنی
              </h1>
              <p className="mt-3 max-w-xl text-lg leading-8 text-white/60">
                حسابدار ارشد و مدیر مالی با بیش از ۲۸ سال تجربه — مشاور هوش مصنوعی و امور مالی.
              </p>

              {/* Quick stats */}
              <div className="mt-8 flex flex-wrap gap-6">
                {[
                  { n: "۲۸+", l: "سال تجربه" },
                  { n: "۳",   l: "نقش مدیریتی" },
                  { n: "۱",   l: "سازمان تخصصی" },
                ].map((s) => (
                  <div key={s.n} className="flex flex-col">
                    <span className="text-3xl font-extrabold text-teal-bright">{s.n}</span>
                    <span className="mt-0.5 text-xs font-medium text-white/45">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-5 py-20">
        {/* ─── Bio ─── */}
        <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-8 shadow-sm md:p-10">
          {/* Subtle teal accent corner */}
          <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-[80px] bg-teal-soft/50" />
          <div className="relative space-y-5 text-lg leading-9 text-ink/85">
            <p>
              من محمدرضا مومنی هستم؛ حسابدار ارشد و مدیر مالی با بیش از ۲۸ سال
              تجربه در سازمان صنایع ملی ایران. در این سال‌ها مسیر کارشناسی تا
              مدیریت مالیِ چندین شرکت تولیدی را طی کرده‌ام و کارم تهیه‌ی گزارش‌های
              مالی، کنترل هزینه و بهینه‌سازی فرآیندهای مالی بوده است.
            </p>
            <p>
              امروز همان تجربه‌ی عمیق مالی را با ابزارهای هوش مصنوعی ترکیب می‌کنم تا
              به کسب‌وکارها کمک کنم{" "}
              <strong className="text-navy">
                هوشمندتر تصمیم بگیرند و سریع‌تر رشد کنند
              </strong>
              . باور من ساده است: هیچ ابزار هوش مصنوعی بدون درکِ واقعیِ مالی ارزش
              ندارد — و من هر دو زبان را می‌دانم.
            </p>
          </div>
        </div>

        {/* ─── Experience ─── */}
        <h2 className="mt-16 text-2xl font-extrabold text-navy">سوابق شغلی</h2>
        <div className="mt-8 space-y-5 border-r-2 border-teal/25 pr-6">
          {experience.map((job, i) => (
            <div key={job.role} className="group relative">
              {/* Timeline dot */}
              <span className="absolute -right-[1.95rem] top-5 size-3.5 rounded-full border-2 border-teal bg-white transition-all duration-300 group-hover:scale-125 group-hover:bg-teal" />

              <div className="rounded-2xl border border-line bg-white p-6 transition-all duration-300 group-hover:border-teal/25 group-hover:shadow-[0_12px_28px_-8px_rgb(14_42_71_/_0.1)]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-navy">{job.role}</h3>
                    <p className="mt-0.5 text-sm font-medium text-teal">{job.org}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-teal-soft px-3 py-1 text-xs font-bold text-teal">
                    مرحله {i + 1}
                  </span>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-muted">
                      <CheckIcon className="mt-0.5 size-4 shrink-0 text-teal" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* ─── Skills ─── */}
        <h2 className="mt-16 text-2xl font-extrabold text-navy">مهارت‌ها و ابزارها</h2>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink/75 transition-all duration-200 hover:border-teal/35 hover:bg-teal-soft hover:text-teal"
            >
              {s}
            </span>
          ))}
        </div>

        {/* ─── Education ─── */}
        <h2 className="mt-16 text-2xl font-extrabold text-navy">تحصیلات</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="group rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:border-teal/25 hover:shadow-[0_12px_28px_-8px_rgb(14_42_71_/_0.1)]">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-teal-soft text-teal transition-all duration-300 group-hover:bg-teal group-hover:text-white">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                  <path d="M12 4L2 9l10 5 10-5-10-5z" />
                  <path d="M6 11.5V16c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-4.5" />
                </svg>
              </span>
              <div>
                <h3 className="font-bold text-navy">لیسانس حسابداری</h3>
                <p className="mt-0.5 text-sm text-muted">دانشگاه آزاد تهران</p>
              </div>
            </div>
          </div>
          <div className="group rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:border-teal/25 hover:shadow-[0_12px_28px_-8px_rgb(14_42_71_/_0.1)]">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-teal-soft text-teal transition-all duration-300 group-hover:bg-teal group-hover:text-white">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                  <rect x="3" y="3" width="7" height="9" rx="1.5" />
                  <rect x="14" y="3" width="7" height="5" rx="1.5" />
                  <rect x="14" y="12" width="7" height="9" rx="1.5" />
                  <rect x="3" y="16" width="7" height="5" rx="1.5" />
                </svg>
              </span>
              <div>
                <h3 className="font-bold text-navy">دوره‌ی QuickBooks</h3>
                <p className="mt-0.5 text-sm text-muted">آشنایی با سیستم‌های حسابداری کانادا</p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── CTA ─── */}
        <div className="relative mt-20 overflow-hidden rounded-3xl bg-navy-deep px-8 py-16 text-center text-white">
          <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
          <div className="pointer-events-none absolute -top-16 -right-16 size-64 rounded-full bg-teal/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 size-64 rounded-full bg-teal/12 blur-3xl" />
          <div className="relative">
            <h2 className="text-2xl font-extrabold">بیایید با هم کار کنیم</h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/55">
              اگر می‌خواهید مالیِ کسب‌وکارتان را با هوش مصنوعی متحول کنید، یک جلسه رزرو کنید.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-l from-teal to-teal-bright px-8 py-3.5 font-bold text-white shadow-lg shadow-teal/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal/40"
            >
              رزرو مشاوره
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
