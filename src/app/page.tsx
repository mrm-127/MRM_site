import Image from "next/image";
import Link from "next/link";
import { ServiceIcon, CheckIcon } from "@/components/Icons";
import { audience, services, site, values } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        {/* Background layers */}
        <div className="pointer-events-none absolute inset-0 dot-grid opacity-60" />
        <div className="pointer-events-none absolute inset-0">
          {/* Large teal orb top-right */}
          <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-teal/15 blur-3xl" />
          {/* Secondary orb bottom-left */}
          <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-teal/8 blur-3xl" />
          {/* Center depth layer */}
          <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy-soft/60 blur-3xl" />
        </div>

        {/* Robot image — desktop only */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden items-center lg:flex">
          <div className="relative translate-y-3 float">
            <Image
              src="/robot.jpg"
              alt=""
              width={460}
              height={460}
              className="h-[440px] w-auto object-contain"
              style={{
                maskImage: "radial-gradient(ellipse 70% 82% at 42% 50%, black 38%, rgba(0,0,0,0.4) 58%, transparent 72%)",
                WebkitMaskImage: "radial-gradient(ellipse 70% 82% at 42% 50%, black 38%, rgba(0,0,0,0.4) 58%, transparent 72%)",
                filter: "brightness(0.55) contrast(1.1)",
              }}
              priority
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pt-24 pb-0 md:pt-36 md:pb-0">
          <div className="max-w-2xl fade-in-up">
            {/* Eyebrow badge */}
            <span className="inline-flex items-center gap-2.5 rounded-full border border-teal/25 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal-bright backdrop-blur-sm">
              <span className="pulse-soft size-2 rounded-full bg-teal-bright" />
              {site.role}
            </span>

            {/* Headline */}
            <h1 className="mt-7 text-4xl font-extrabold leading-[1.15] md:text-6xl">
              هوشمندتر تصمیم بگیر.{" "}
              <span className="gradient-text">سریع‌تر رشد کن.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-9 text-white/65">
              من محمدرضا مومنی هستم؛ با ۲۸ سال تجربه‌ی مدیریت مالی، حالا کنار شما
              می‌نشینم تا با هوش مصنوعی، مالیِ کسب‌وکارتان را متحول کنیم.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-gradient-to-l from-teal to-teal-bright px-7 py-3.5 font-bold text-white shadow-lg shadow-teal/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal/40"
              >
                رزرو وقت مشاوره
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-white/15 bg-white/8 px-7 py-3.5 font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/15 hover:border-white/25"
              >
                مشاهده‌ی خدمات
              </Link>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative mt-16 border-t border-white/8 bg-white/4 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-5 py-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { n: "۲۸+", l: "سال تجربه‌ی مالی" },
                { n: "۳",   l: "حوزه‌ی تخصصی" },
                { n: "۱۰۰٪", l: "جلسات آنلاین" },
                { n: "رایگان", l: "گفت‌وگوی اولیه" },
              ].map((s) => (
                <div key={s.n} className="text-center">
                  <div className="text-2xl font-extrabold text-teal-bright">{s.n}</div>
                  <div className="mt-1 text-xs font-medium text-white/45">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading eyebrow="چرا من؟" title="ارزش‌هایی که با آن‌ها کار می‌کنم" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="group relative overflow-hidden rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:border-teal/30 hover:shadow-[0_20px_40px_-8px_rgb(14_42_71_/_0.12)]"
            >
              {/* Animated top accent */}
              <div className="absolute inset-x-0 top-0 h-0.5 origin-right scale-x-0 bg-gradient-to-l from-teal-bright to-teal transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />

              <div className="flex items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-teal-soft text-sm font-extrabold text-teal transition-all duration-300 group-hover:bg-teal group-hover:text-white group-hover:shadow-md group-hover:shadow-teal/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-navy">{v.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="relative overflow-hidden bg-surface">
        <div className="pointer-events-none absolute inset-0 dot-grid-light" />
        <div className="relative mx-auto max-w-6xl px-5 py-24">
          <SectionHeading eyebrow="خدمات" title="چطور می‌توانم کمک کنم" />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.slug}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-300 hover:border-teal/25 hover:shadow-[0_20px_40px_-8px_rgb(14_42_71_/_0.12)]"
              >
                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-0.5 origin-right scale-x-0 bg-gradient-to-l from-teal-bright to-teal transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />

                <div className="flex flex-col flex-1 p-7">
                  {/* Icon */}
                  <span className="grid size-13 place-items-center rounded-2xl bg-teal-soft text-teal shadow-sm transition-all duration-300 group-hover:bg-teal group-hover:text-white group-hover:shadow-md group-hover:shadow-teal/30">
                    <ServiceIcon name={s.icon} className="size-7" />
                  </span>

                  <h3 className="mt-6 text-xl font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{s.summary}</p>

                  <ul className="mt-6 flex-1 space-y-3">
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
                      شروع همکاری
                      <span className="transition-transform group-hover/link:-translate-x-1">←</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Audience ─── */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading eyebrow="مخاطب هدف" title="این مشاوره برای چه کسانی است" />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audience.map((a, i) => (
            <div
              key={a.title}
              className="group flex items-start gap-4 rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:border-teal/25 hover:shadow-[0_10px_30px_-8px_rgb(14_42_71_/_0.1)]"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-navy text-xs font-extrabold text-teal-bright transition-all duration-300 group-hover:bg-teal group-hover:text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="font-bold text-navy">{a.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted">{a.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="mx-auto max-w-6xl px-5 pb-6">
        <div className="relative overflow-hidden rounded-3xl bg-navy-deep px-8 py-20 text-center text-white md:px-16">
          {/* Background layers */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-24 size-80 rounded-full bg-teal/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 size-80 rounded-full bg-teal/12 blur-3xl" />
            <div className="absolute inset-0 dot-grid opacity-40" />
          </div>

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal-bright">
              <span className="pulse-soft size-1.5 rounded-full bg-teal-bright" />
              گفت‌وگوی اولیه رایگان است
            </span>
            <h2 className="mt-6 text-2xl font-extrabold md:text-4xl">
              آماده‌اید هوشمندتر تصمیم بگیرید؟
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/60 leading-8">
              یک جلسه‌ی مشاوره رزرو کنید تا با هم نقشه‌ی راه هوش مصنوعیِ مالیِ
              کسب‌وکارتان را بسازیم.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-gradient-to-l from-teal to-teal-bright px-8 py-3.5 font-bold text-white shadow-lg shadow-teal/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal/45"
              >
                درخواست مشاوره
              </Link>
              <Link
                href="/about"
                className="rounded-xl border border-white/15 bg-white/8 px-8 py-3.5 font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/15 hover:border-white/25"
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

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <span className="inline-block rounded-full border border-teal/20 bg-teal-soft px-4 py-1 text-xs font-bold tracking-widest text-teal uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-extrabold text-navy md:text-4xl">{title}</h2>
    </div>
  );
}
