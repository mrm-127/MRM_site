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
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute inset-0 dot-grid" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-teal/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
          <span className="inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1 text-sm font-bold text-teal-bright">
            خدمات
          </span>
          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
            چطور می‌توانم به رشد شما کمک کنم
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
            از طراحی نقشه‌ی راه تا آموزش تیم و پیاده‌سازی ابزارها — در هر گام کنار
            شما هستم.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="space-y-6">
          {services.map((s, i) => (
            <div
              key={s.slug}
              className="group grid gap-6 rounded-3xl border border-line bg-white p-7 transition-all hover:border-teal/30 hover:shadow-xl hover:shadow-navy/5 md:grid-cols-[auto_1fr] md:p-9"
            >
              <div className="flex items-start gap-4">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-teal-soft text-teal transition-all group-hover:bg-teal group-hover:text-white">
                  <ServiceIcon name={s.icon} className="size-7" />
                </span>
                <span className="mt-3 text-3xl font-black text-line transition-colors group-hover:text-teal/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-navy">{s.title}</h2>
                <p className="mt-2 leading-8 text-muted">{s.summary}</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-ink/80">
                      <CheckIcon className="mt-1 size-4 shrink-0 text-teal" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-line pt-4">
                  <Link href="/contact" className="text-sm font-bold text-teal transition-colors hover:text-navy">
                    شروع این سرویس ←
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-extrabold text-navy">فرآیند همکاری</h2>
          <p className="mx-auto mt-3 max-w-md text-center text-sm text-muted">
            از اولین تماس تا نتیجه‌ی واقعی — مسیر را با هم طی می‌کنیم.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
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
                className="group rounded-2xl border border-line bg-white p-7 text-center transition-all hover:border-teal/30 hover:shadow-lg"
              >
                <span className="mx-auto grid size-12 place-items-center rounded-full bg-navy text-lg font-bold text-teal-bright transition-colors group-hover:bg-teal">
                  {step.n}
                </span>
                <h3 className="mt-4 font-bold text-navy">{step.t}</h3>
                <p className="mt-2 text-sm text-muted">{step.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-teal px-8 py-3.5 font-bold text-white shadow-lg shadow-teal/30 transition-all hover:-translate-y-0.5 hover:shadow-teal/50"
          >
            شروع همکاری — رزرو مشاوره
          </Link>
        </div>
      </section>
    </>
  );
}
