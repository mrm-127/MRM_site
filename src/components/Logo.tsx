import { site } from "@/lib/site";

/**
 * نشان برند — قطب‌نمای هوشمند در قاب سرمه‌ای.
 * 🔧 هر وقت فایل لوگوی رسمی (PNG/SVG) را داشتید، این کامپوننت را با آن جایگزین می‌کنیم.
 */
export function Logo({ withWordmark = true }: { withWordmark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="grid size-10 place-items-center rounded-xl bg-navy shadow-sm">
        <svg
          viewBox="0 0 48 48"
          className="size-7"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="24" cy="24" r="17" stroke="var(--color-teal)" strokeWidth="2" />
          <path
            d="M24 13l4.5 10.5L24 35l-4.5-11.5L24 13z"
            fill="var(--color-teal-bright)"
          />
          <circle cx="24" cy="24" r="2.4" fill="#fff" />
        </svg>
      </span>
      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-extrabold tracking-tight text-navy">
            {site.name}
          </span>
          <span className="mt-1 text-[11px] font-medium text-muted">
            {site.role}
          </span>
        </span>
      )}
    </span>
  );
}
