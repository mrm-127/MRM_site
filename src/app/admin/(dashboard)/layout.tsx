import { createClient } from "@/lib/supabase/server";
import { AdminNav } from "./AdminNav";
import { signOut } from "./actions";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-[#f7f5f0]" dir="rtl">
      <div className="border-b border-black/5 bg-[#f7f5f0]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-4">
          <div className="flex items-center gap-2 pb-4">
            <span className="text-sm font-bold text-navy">
              MRM Intelligence
            </span>
            <span className="text-xs text-muted">/ پنل مدیریت</span>
          </div>
          <div className="flex items-center gap-3 pb-4">
            <span className="text-xs text-muted">{user?.email}</span>
            <form action={signOut}>
              <button
                type="submit"
                className="rounded-lg border border-line px-3 py-1.5 text-xs text-muted transition hover:border-red-300 hover:text-red-600"
              >
                خروج
              </button>
            </form>
          </div>
        </div>
        <AdminNav />
      </div>

      <main className="mx-auto max-w-7xl px-6 py-8">{children}</main>
    </div>
  );
}
