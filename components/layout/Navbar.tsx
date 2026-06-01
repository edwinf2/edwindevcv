"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { MobileNav } from "./MobileNav";
import { navLinks, isNavLinkActive } from "./nav-links";
import { cn } from "@/lib/utils";

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/60 bg-background/80 backdrop-blur dark:border-zinc-800/60">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link
          href="/"
          className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          Edwin Figueroa
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = isNavLinkActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-sm transition-colors",
                    active
                      ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100"
                      : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
                  )}
                >
                  {t(link.key)}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-2">
          {/* Selector de idioma: en móvil va dentro del drawer (MobileNav). */}
          <div className="hidden md:block">
            <LocaleSwitcher />
          </div>
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
