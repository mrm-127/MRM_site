import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm leading-7 text-muted">
            ترکیب ۲۸ سال تجربه‌ی مدیریت مالی با ابزارهای هوش مصنوعی — برای کسب‌وکارهایی که هوشمندتر رشد می‌کنند.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold text-navy">دسترسی سریع</h3>
          <ul className="space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-teal"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold text-navy">ارتباط با من</h3>
          <ul className="space-y-3 text-sm text-muted">
            <li className="flex flex-col">
              <span className="text-xs text-muted/70">ایمیل</span>
              <a href={`mailto:${site.email}`} className="mt-0.5 font-medium text-ink/80 hover:text-teal" dir="ltr">
                {site.email}
              </a>
            </li>
            <li className="flex flex-col">
              <span className="text-xs text-muted/70">تلفن</span>
              <span dir="ltr" className="mt-0.5 text-right font-medium text-ink/80">
                {site.phone}
              </span>
            </li>
          </ul>
          <div className="mt-4 flex gap-2">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="rounded-lg border border-line bg-white px-3 py-1.5 text-xs text-muted transition-colors hover:border-teal/40 hover:bg-teal-soft hover:text-teal"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-5 text-center text-xs text-muted">
          © {new Date().getFullYear()} {site.name} — همه‌ی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}
