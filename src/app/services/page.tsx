import type { Metadata } from "next";
import Link from "next/link";
import { ServiceIcon, CheckIcon } from "@/components/Icons";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "خدمات",
  description:
    "خدمات مشاوره‌ی هوش مصنوعی و امور مالی: مشاوره‌ی استراتژی، آموزش و کارگاه، و پیاده‌سازی.",
};

export default function ServicesPage() {
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
          <span className="inline-block rounded-full border border-teal/25 bg-teal/10 px-4 py-1.5 text-sm font-bold text-teal-bright">
            خدمات
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
            چطور می‌توانم به{" "}
            <span className="gradient-text">رشد شما</span> کمک کنم
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-9 text-white/60">
            از طراحی نقشه‌ی راه تا آموزش تیم و پیاده‌سازی ابزارها — در هر گام کنار
            شما هستم.
          </p>
        </div>
      </section>

      {/* ─── Service Cards ─── */}
      <section className="mx-auto max-w-5xl px-5 py-20">
        <div className="space-y-7">
          {services.map((s, i) => (
            <div
              key={s.slug}
              className="group relative overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition-all duration-300 hover:border-teal/25 hover:shadow-[0_24px_48px_-10px_rgb(14_42_71_/_0.13)]"
            >
              {/* Animated top accent */}
              <div className="absolute inset-x-0 top-0 h-0.5 origin-right scale-x-0 bg-gradient-to-l from-teal-bright to-teal transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />

              <div className="grid gap-6 p-7 md:grid-cols-[auto_1fr] md:p-10">
                {/* Icon + Number */}
                <div className="flex items-start gap-5">
                  <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-teal-soft text-teal shadow-sm transition-all duration-300 group-hover:bg-teal group-hover:text-white group-hover:shadow-md group-hover:shadow-teal/30">
                    <ServiceIcon name={s.icon} className="size-7" />
                  </span>
                  <span className="mt-3 text-4xl font-black text-line transition-colors duration-300 group-hover:text-teal/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-2xl font-extrabold text-navy">{s.title}</h2>
                  <p className="mt-2.5 leading-8 text-muted">{s.summary}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm text-ink/80">
                        <CheckIcon className="mt-0.5 size-4 shrink-0 text-teal" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 border-t border-line pt-5">
                    <Link
                      href="/contact"
                      className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-teal transition-all hover:gap-2.5 hover:text-navy"
                    >
                      شروع این سرویس
                      <span className="transition-transform group-hover/link:-translate-x-1">←</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── Process ─── */}
        <div className="mt-24">
          <div className="text-center">
            <span className="inline-block rounded-full border border-teal/20 bg-teal-soft px-4 py-1 text-xs font-bold tracking-widest text-teal uppercase">
              فرآیند کار
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-navy">فرآیند همکاری</h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted">
              از اولین تماس تا نتیجه‌ی واقعی — مسیر را با هم طی می‌کنیم.
            </p>
          </div>

          <div className="relative mt-12 grid gap-5 md:grid-cols-3">
            {/* Connector line (desktop) */}
            <div className="pointer-events-none absolute top-10 inset-x-[16.67%] hidden h-px bg-gradient-to-l from-teal/0 via-teal/25 to-teal/0 md:block" />

            {[
              {
                n: "۱",
                t: "گفت‌وگوی اولیه",
                d: "نیاز و وضعیت فعلی کسب‌وکارتان را می‌شناسیم.",
              },
              {
                n: "۲",
                t: "ارزیابی و نقشه‌ی راه",
                d: "راهکار عملی و گام‌به‌گام طراحی می‌کنیم.",
              },
              {
                n: "۳",
                t: "اجرا و پیگیری",
                d: "تا رسیدن به نتیجه‌ی واقعی کنار شما می‌مانیم.",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="group relative rounded-2xl border border-line bg-white p-7 text-center transition-all duration-300 hover:border-teal/25 hover:shadow-[0_16px_32px_-8px_rgb(14_42_71_/_0.1)]"
              >
                <span className="mx-auto grid size-12 place-items-center rounded-full bg-navy text-lg font-extrabold text-teal-bright shadow-md shadow-navy/20 transition-all duration-300 group-hover:bg-teal group-hover:text-white group-hover:shadow-teal/30">
                  {step.n}
                </span>
                <h3 className="mt-5 font-bold text-navy">{step.t}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{step.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Bottom CTA ─── */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-l from-teal to-teal-bright px-9 py-4 font-bold text-white shadow-lg shadow-teal/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal/40"
          >
            شروع همکاری — رزرو مشاوره
          </Link>
        </div>
      </section>
    </>
  );
}
