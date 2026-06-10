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
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute inset-0 dot-grid" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-teal/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 py-20 md:py-28">
          <span className="inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1 text-sm font-bold text-teal-bright">
            درباره من
          </span>
          <h1 className="mt-4 text-2xl font-extrabold md:text-3xl">
            محمدرضا مومنی
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/75">
            حسابدار ارشد و مدیر مالی با بیش از ۲۸ سال تجربه — مشاور هوش مصنوعی و امور مالی.
          </p>

          {/* Quick stats */}
          <div className="mt-10 flex flex-wrap gap-6">
            {[
              { n: "۲۸+", l: "سال تجربه" },
              { n: "۳", l: "نقش مدیریتی" },
              { n: "۱", l: "سازمان تخصصی" },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <div className="text-3xl font-extrabold text-teal-bright">{s.n}</div>
                <div className="mt-0.5 text-xs text-white/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-5 py-16">
        {/* Bio */}
        <div className="rounded-2xl border border-line bg-white p-7 md:p-9">
          <div className="space-y-5 text-lg leading-9 text-ink/90">
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

        {/* Experience */}
        <h2 className="mt-14 text-2xl font-extrabold text-navy">سوابق شغلی</h2>
        <div className="mt-8 space-y-5 border-r-2 border-teal/30 pr-6">
          {experience.map((job, i) => (
            <div key={job.role} className="group relative">
              <span className="absolute -right-[1.95rem] top-1.5 size-3.5 rounded-full border-2 border-teal bg-white transition-colors group-hover:bg-teal" />
              <div className="rounded-2xl border border-line bg-white p-5 transition-all group-hover:border-teal/30 group-hover:shadow-md">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-navy">{job.role}</h3>
                    <p className="text-sm text-teal">{job.org}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-teal-soft px-3 py-1 text-xs font-bold text-teal">
                    مرحله {i + 1}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-muted">
                      <CheckIcon className="mt-1 size-4 shrink-0 text-teal" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <h2 className="mt-14 text-2xl font-extrabold text-navy">مهارت‌ها و ابزارها</h2>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-line bg-white px-4 py-2 text-sm text-ink/80 transition-colors hover:border-teal/40 hover:bg-teal-soft hover:text-teal"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Education */}
        <h2 className="mt-14 text-2xl font-extrabold text-navy">تحصیلات</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-5 transition-all hover:border-teal/30 hover:shadow-md">
            <div className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-teal-soft text-teal">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                  <path d="M12 4L2 9l10 5 10-5-10-5z" />
                  <path d="M6 11.5V16c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-4.5" />
                </svg>
              </span>
              <div>
                <h3 className="font-bold text-navy">لیسانس حسابداری</h3>
                <p className="text-sm text-muted">دانشگاه آزاد تهران</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-white p-5 transition-all hover:border-teal/30 hover:shadow-md">
            <div className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-teal-soft text-teal">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                  <rect x="3" y="3" width="7" height="9" rx="1.5" />
                  <rect x="14" y="3" width="7" height="5" rx="1.5" />
                  <rect x="14" y="12" width="7" height="9" rx="1.5" />
                  <rect x="3" y="16" width="7" height="5" rx="1.5" />
                </svg>
              </span>
              <div>
                <h3 className="font-bold text-navy">دوره‌ی QuickBooks</h3>
                <p className="text-sm text-muted">آشنایی با سیستم‌های حسابداری کانادا</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-navy px-8 py-12 text-center text-white">
          <div className="pointer-events-none absolute inset-0 dot-grid opacity-50" />
          <div className="pointer-events-none absolute -top-10 -right-10 size-52 rounded-full bg-teal/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-xl font-extrabold">بیایید با هم کار کنیم</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-white/70">
              اگر می‌خواهید مالیِ کسب‌وکارتان را با هوش مصنوعی متحول کنید، یک جلسه رزرو کنید.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-xl bg-teal px-7 py-3 font-bold text-white shadow-lg shadow-teal/30 transition-all hover:-translate-y-0.5"
            >
              رزرو مشاوره
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
