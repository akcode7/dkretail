"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/showcase", label: "Showcase" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-outline-variant/20 bg-white/80 glass-nav">
      <div className="section-shell">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="font-headline text-sm font-extrabold uppercase tracking-[0.14em] text-primary sm:text-base md:text-2xl"
          >
            DK Retail Services
          </Link>
          <button
            type="button"
            className="inline-flex rounded-md bg-surface-container-low p-2 text-primary md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
          </button>
          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                data-active={isActive(item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        {open ? (
          <nav className="border-t border-outline-variant/20 pb-4 pt-3 md:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link px-1 py-2"
                  data-active={isActive(item.href)}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
