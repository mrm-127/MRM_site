import type { Metadata } from "next";
import { ConsultationForm } from "@/components/ConsultationForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "تماس و رزرو مشاوره",
  description:
    "برای رزرو وقت مشاوره‌ی هوش مصنوعی و امور مالی، درخواست خود را ثبت کنید.",
};

const steps = [
  { n: "۱", t: "فرم را پر کنید", d: "چند دقیقه وقت می‌برد." },
  { n: "۲", t: "هماهنگی زمان", d: "ظرف ۲۴ ساعت تماس می‌گیرم." },
  { n: "۳", t: "جلسه‌ی آنلاین", d: "مشاوره به‌صورت ویدیویی برگزار می‌شود." },
];

export default function ContactPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="pointer-events-none absolute inset-0 dot-grid opacity-60" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-teal/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-teal/8 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/10 px-4 py-1.5 text-sm font-bold text-teal-bright">
            <span className="pulse-soft size-1.5 rounded-full bg-teal-bright" />
            تماس و رزرو
          </span>
          <h1 className="mt-5 text-4xl font-extrabold md:text-5xl">
            رزرو وقت <span className="gradient-text">مشاوره</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-9 text-white/60">
            فرم زیر را پر کنید؛ برای هماهنگی زمان و هزینه‌ی جلسه با شما تماس
            می‌گیرم.
          </p>

          {/* Mini process steps */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-8">
            {steps.map((s) => (
              <div key={s.n} className="flex items-center gap-2.5">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-teal text-xs font-extrabold text-white shadow-md shadow-teal/30">
                  {s.n}
                </span>
                <span className="text-sm font-medium text-white/70">{s.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Form + Sidebar ─── */}
      <section className="mx-auto max-w-5xl px-5 py-20">
        <div className="grid gap-7 md:grid-cols-[1fr_300px]">

          {/* Form card */}
          <div className="rounded-3xl border border-line bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-xl font-extrabold text-navy">ثبت درخواست مشاوره</h2>
            <p className="mt-1.5 text-sm text-muted">
              اطلاعات زیر را وارد کنید تا در اسرع وقت با شما تماس بگیرم.
            </p>
            <div className="mt-7">
              <ConsultationForm />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">

            {/* Contact info */}
            <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <h3 className="font-bold text-navy">ارتباط مستقیم</h3>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-teal-soft text-teal">
                    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M2 8l10 6 10-6" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-muted/70">ایمیل</p>
                    <a href={`mailto:${site.email}`} dir="ltr" className="mt-0.5 text-sm font-medium text-navy transition-colors hover:text-teal">
                      {site.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-teal-soft text-teal">
                    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.07 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-muted/70">تلفن</p>
                    <span dir="ltr" className="mt-0.5 block text-right text-sm font-medium text-navy">
                      {site.phone}
                    </span>
                  </div>
                </li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-medium text-muted transition-all hover:border-teal/35 hover:bg-teal-soft hover:text-teal"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* How it works */}
            <div className="rounded-2xl border border-teal/20 bg-gradient-to-br from-teal-soft/60 to-teal-soft/20 p-6">
              <h3 className="font-bold text-navy">جلسه چطور برگزار می‌شود؟</h3>
              <ul className="mt-5 space-y-4">
                {steps.map((s) => (
                  <li key={s.n} className="flex gap-3 text-sm">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-teal text-xs font-extrabold text-white shadow-sm shadow-teal/30">
                      {s.n}
                    </span>
                    <div className="leading-6">
                      <span className="font-semibold text-navy">{s.t}</span>
                      <span className="text-muted"> — {s.d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust note */}
            <div className="rounded-2xl border border-line bg-white p-5 text-center shadow-sm">
              <div className="mx-auto grid size-11 place-items-center rounded-full bg-teal-soft text-teal">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <p className="mt-3 text-xs leading-6 text-muted">
                اطلاعات شما محرمانه است و فقط برای هماهنگی مشاوره استفاده می‌شود.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
