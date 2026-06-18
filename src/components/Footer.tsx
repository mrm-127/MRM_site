import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-navy-deep">
      {/* Teal gradient top accent */}
      <div className="h-px w-full bg-gradient-to-l from-teal/0 via-teal to-teal/0" />

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-3">
        {/* Brand column */}
        <div className="space-y-5">
          {/* Logo inverted on dark bg */}
          <span className="inline-flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-white/10 shadow-sm ring-1 ring-white/10">
              <svg viewBox="0 0 48 48" className="size-7" fill="none" aria-hidden="true">
                <circle cx="24" cy="24" r="17" stroke="var(--color-teal)" strokeWidth="2" />
                <path d="M24 13l4.5 10.5L24 35l-4.5-11.5L24 13z" fill="var(--color-teal-bright)" />
                <circle cx="24" cy="24" r="2.4" fill="#fff" />
              </svg>
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-lg font-extrabold tracking-tight text-white">{site.name}</span>
              <span className="mt-1 text-[11px] font-medium text-white/45">{site.role}</span>
            </span>
          </span>

          <p className="max-w-xs text-sm leading-7 text-white/50">
            ترکیب ۲۸ سال تجربه‌ی مدیریت مالی با ابزارهای هوش مصنوعی — برای کسب‌وکارهایی که هوشمندتر رشد می‌کنند.
          </p>

          {/* Social links */}
          <div className="flex flex-wrap gap-2">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/50 transition-all hover:border-teal/40 hover:bg-teal/10 hover:text-teal-bright"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/30">دسترسی سریع</h3>
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-teal-bright"
                >
                  <span className="size-1 rounded-full bg-teal/0 transition-colors group-hover:bg-teal-bright" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/30">ارتباط با من</h3>
          <ul className="space-y-4">
            <li>
              <span className="text-[11px] font-medium uppercase tracking-wider text-white/30">ایمیل</span>
              <a
                href={`mailto:${site.email}`}
                dir="ltr"
                className="mt-1 block text-sm font-medium text-white/65 transition-colors hover:text-teal-bright"
              >
                {site.email}
              </a>
            </li>
            <li>
              <span className="text-[11px] font-medium uppercase tracking-wider text-white/30">تلفن</span>
              <span dir="ltr" className="mt-1 block text-right text-sm font-medium text-white/65">
                {site.phone}
              </span>
            </li>
          </ul>

          {/* CTA mini */}
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-teal/15 px-4 py-2.5 text-sm font-bold text-teal-bright ring-1 ring-teal/20 transition-all hover:bg-teal/25 hover:ring-teal/40"
          >
            <span className="pulse-soft size-1.5 rounded-full bg-teal-bright" />
            رزرو مشاوره رایگان
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-5 py-5 text-center text-xs text-white/25">
          © {new Date().getFullYear()} {site.name} — همه‌ی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}
