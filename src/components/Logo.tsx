import { site } from "@/lib/site";

export function Logo({ withWordmark = true }: { withWordmark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <svg viewBox="0 0 52 52" className="size-11" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="mrm-fill" x1="0" y1="0" x2="0.6" y2="1">
            <stop offset="0%" stopColor="#1b3e62" />
            <stop offset="100%" stopColor="#0e2a47" />
          </linearGradient>
          <linearGradient id="mrm-border" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34d3be" />
            <stop offset="100%" stopColor="#0ea898" />
          </linearGradient>
          <linearGradient id="mrm-shine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* پس‌زمینه شش‌ضلعی */}
        <polygon
          points="26,2 46.5,14 46.5,38 26,50 5.5,38 5.5,14"
          fill="url(#mrm-fill)"
        />

        {/* درخشش بالایی */}
        <polygon
          points="26,2 46.5,14 46.5,38 26,50 5.5,38 5.5,14"
          fill="url(#mrm-shine)"
        />

        {/* حاشیه فیروزه‌ای */}
        <polygon
          points="26,2 46.5,14 46.5,38 26,50 5.5,38 5.5,14"
          fill="none"
          stroke="url(#mrm-border)"
          strokeWidth="1.6"
        />

        {/* خط داخلی شش‌ضلعی — تزئینی */}
        <polygon
          points="26,8.5 40.5,17 40.5,35 26,43.5 11.5,35 11.5,17"
          fill="none"
          stroke="#16b8a6"
          strokeWidth="0.5"
          strokeOpacity="0.35"
        />

        {/* حروف MRM */}
        <text
          x="26"
          y="30.5"
          textAnchor="middle"
          fill="white"
          fontSize="12"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, Arial, sans-serif"
          letterSpacing="1.5"
        >
          MRM
        </text>

        {/* خط فیروزه‌ای زیر متن */}
        <rect x="17" y="34" width="18" height="1.2" rx="0.6" fill="#16b8a6" opacity="0.8" />

        {/* نقطه‌های راس بالا و پایین */}
        <circle cx="26" cy="2" r="1.4" fill="#34d3be" opacity="0.9" />
        <circle cx="26" cy="50" r="1.4" fill="#16b8a6" opacity="0.6" />
      </svg>

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
