import Link from "next/link";
import { ServiceIcon, CheckIcon } from "@/components/Icons";
import { audience, services, site, values } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        {/* Background layers */}
        <div className="pointer-events-none absolute inset-0 dot-grid opacity-100" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-teal/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[350px] w-[350px] -translate-x-1/4 translate-y-1/3 rounded-full bg-teal/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm text-teal-bright backdrop-blur-sm">
              <span className="pulse-soft size-2 rounded-full bg-teal-bright" />
              {site.role}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
              {site.slogan}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-9 text-white/75">
              من محمدرضا مومنی هستم؛ با ۲۸ سال تجربه‌ی مدیریت مالی، حالا کنار شما
              می‌نشینم تا با هوش مصنوعی، مالیِ کسب‌وکارتان را متحول کنیم.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-teal px-6 py-3 font-bold text-white shadow-lg shadow-teal/30 transition-all hover:-translate-y-0.5 hover:shadow-teal/50"
              >
                رزرو وقت مشاوره
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                مشاهده‌ی خدمات
              </Link>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative border-t border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-5 py-5">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { n: "۲۸+", l: "سال تجربه‌ی مالی" },
                { n: "۳", l: "حوزه‌ی تخصصی" },
                { n: "۱۰۰٪", l: "جلسات آنلاین" },
                { n: "رایگان", l: "گفت‌وگوی اولیه" },
              ].map((s) => (
                <div key={s.n} className="text-center">
                  <div className="text-2xl font-extrabold text-teal-bright">{s.n}</div>
                  <div className="mt-0.5 text-xs text-white/60">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="چرا من؟"
          title="ارزش‌هایی که با آن‌ها کار می‌کنم"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="group rounded-2xl border border-line bg-white p-6 transition-all hover:border-teal/30 hover:shadow-lg hover:shadow-navy/5"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-teal-soft text-sm font-bold text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-navy">{v.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading eyebrow="خدمات" title="چطور می‌توانم کمک کنم" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.slug}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 transition-all hover:border-teal/30 hover:shadow-xl hover:shadow-navy/5"
              >
                {/* top accent line on hover */}
                <div className="absolute inset-x-0 top-0 h-0.5 origin-right scale-x-0 bg-gradient-to-l from-teal-bright to-teal transition-transform group-hover:origin-left group-hover:scale-x-100" />

                <span className="grid size-12 place-items-center rounded-xl bg-teal-soft text-teal transition-all group-hover:bg-teal group-hover:text-white">
                  <ServiceIcon name={s.icon} className="size-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{s.summary}</p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-ink/80">
                      <CheckIcon className="mt-1 size-4 shrink-0 text-teal" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-line pt-4">
                  <Link
                    href="/contact"
                    className="text-sm font-bold text-teal transition-colors hover:text-navy"
                  >
                    شروع همکاری ←
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="مخاطب هدف"
          title="این مشاوره برای چه کسانی است"
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {audience.map((a, i) => (
            <div
              key={a.title}
              className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 transition-all hover:border-teal/30 hover:shadow-md"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-navy text-xs font-bold text-teal-bright">
                {i + 1}
              </span>
              <div>
                <h3 className="font-bold text-navy">{a.title}</h3>
                <p className="mt-1 text-sm text-muted">{a.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-4">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-16 text-center text-white md:px-16">
          {/* Background glows */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -right-20 size-72 rounded-full bg-teal/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 size-72 rounded-full bg-teal/10 blur-3xl" />
            <div className="absolute inset-0 dot-grid opacity-50" />
          </div>

          <div className="relative">
            <span className="inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1 text-sm text-teal-bright">
              گفت‌وگوی اولیه رایگان است
            </span>
            <h2 className="mt-5 text-2xl font-extrabold md:text-3xl">
              آماده‌اید هوشمندتر تصمیم بگیرید؟
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              یک جلسه‌ی مشاوره رزرو کنید تا با هم نقشه‌ی راه هوش مصنوعیِ مالیِ
              کسب‌وکارتان را بسازیم.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-teal px-7 py-3 font-bold text-white shadow-lg shadow-teal/30 transition-all hover:-translate-y-0.5 hover:shadow-teal/50"
              >
                درخواست مشاوره
              </Link>
              <Link
                href="/about"
                className="rounded-xl border border-white/20 bg-white/5 px-7 py-3 font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                بیشتر درباره من
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="text-center">
      <span className="text-sm font-bold tracking-wide text-teal">{eyebrow}</span>
      <h2 className="mt-2 text-3xl font-extrabold text-navy">{title}</h2>
    </div>
  );
}
