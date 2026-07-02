import { getDashboardStats } from "@/lib/admin-stats";
import { StatTile } from "./StatTile";

const CHANNEL_LABELS: Record<string, string> = {
  web: "وب",
  telegram: "تلگرام",
  widget: "ویجت",
};

function fa(n: number) {
  return n.toLocaleString("fa-IR");
}

export default async function AdminDashboardPage() {
  let stats;
  let error: string | null = null;

  try {
    stats = await getDashboardStats();
  } catch {
    error =
      "اتصال به دیتابیس برقرار نشد. DATABASE_URL را در .env.local بررسی کنید.";
  }

  return (
    <div>
      <h1 className="mb-1 text-lg font-bold text-navy">داشبورد</h1>
      <p className="mb-6 text-sm text-muted">
        نمای کلی عملکرد چت‌بات در همه‌ی کانال‌ها.
      </p>

      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {stats && (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatTile
              label="لیدهای چت"
              value={fa(stats.chatLeads)}
              hint={`از ${fa(stats.totalLeads)} کل لید`}
            />
            <StatTile label="پیام‌ها" value={fa(stats.messages)} />
            <StatTile label="گفتگوها" value={fa(stats.conversations)} />
            <StatTile
              label="نرخ تبدیل به لید"
              value={`${stats.leadConversionRate.toLocaleString("fa-IR", {
                maximumFractionDigits: 1,
              })}٪`}
              hint="لید ÷ گفتگوها"
            />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatTile label="کاربران یکتا" value="—" hint="به‌زودی" muted />
            <StatTile label="پاسخ‌های بد" value="—" hint="به‌زودی" muted />
            <StatTile label="هزینه تخمینی" value="—" hint="به‌زودی" muted />
            <StatTile label="نرخ رضایت" value="—" hint="به‌زودی" muted />
          </div>

          <div className="mt-8 rounded-2xl border border-black/5 bg-white p-5 shadow-card">
            <h2 className="mb-4 text-sm font-bold text-navy">
              گفتگوها به تفکیک کانال
            </h2>

            {stats.channels.length === 0 ? (
              <p className="text-sm text-muted">هنوز گفتگویی ثبت نشده.</p>
            ) : (
              <div className="divide-y divide-line">
                {stats.channels.map((channel) => (
                  <div
                    key={channel.source}
                    className="flex items-center justify-between py-3 text-sm"
                  >
                    <span className="text-foreground">
                      {CHANNEL_LABELS[channel.source] ?? channel.source}
                    </span>
                    <span className="text-muted">
                      {fa(channel.conversations)} گفتگو · {fa(channel.messages)}{" "}
                      پیام
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
