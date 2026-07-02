"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/admin", label: "داشبورد" },
  { href: "/admin/leads", label: "لیدها" },
  { href: "/admin/knowledge", label: "پایگاه دانش" },
  { href: "/admin/models", label: "مدل‌ها" },
  { href: "/admin/conversations", label: "گفتگوها" },
  { href: "/admin/feedback", label: "بازخورد" },
  { href: "/admin/persona", label: "پرسونا" },
  { href: "/admin/playground", label: "پلی‌گراند" },
  { href: "/admin/widget", label: "ویجت" },
  { href: "/admin/telegram", label: "تلگرام" },
];

export function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-6">
      {TABS.map((tab) => {
        const active =
          tab.href === "/admin"
            ? pathname === "/admin"
            : pathname.startsWith(tab.href);

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`shrink-0 border-b-2 px-3 py-3 text-sm transition ${
              active
                ? "border-teal font-medium text-navy"
                : "border-transparent text-muted hover:text-navy"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
