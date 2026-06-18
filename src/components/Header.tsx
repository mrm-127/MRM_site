"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line/40 bg-white/90 shadow-sm shadow-navy/5 backdrop-blur-xl">
      {/* Thin teal accent line at very top */}
      <div className="h-0.5 w-full bg-gradient-to-l from-teal via-teal-bright to-teal" />

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" aria-label="خانه" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-teal-soft text-teal"
                    : "text-ink/70 hover:bg-surface hover:text-navy"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-teal/60" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-l from-teal to-teal-bright px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-teal/25 transition-all duration-200 hover:-translate-y-px hover:shadow-lg hover:shadow-teal/35"
          >
            رزرو مشاوره
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="منو"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-xl border border-line/70 bg-surface text-navy transition-colors hover:border-teal/30 hover:bg-teal-soft md:hidden"
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h10M4 17h13" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-line/60 bg-white/98 px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                    active
                      ? "bg-teal-soft text-teal"
                      : "text-ink/70 hover:bg-surface hover:text-navy"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-xl bg-gradient-to-l from-teal to-teal-bright px-4 py-3 text-center text-sm font-bold text-white shadow-md shadow-teal/20"
            >
              رزرو مشاوره
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
