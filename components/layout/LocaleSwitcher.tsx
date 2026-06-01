"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

interface LocaleSwitcherProps {
  // Callback opcional al elegir idioma (p. ej. cerrar el drawer móvil antes de navegar).
  onSelect?: () => void;
}

export function LocaleSwitcher({ onSelect }: LocaleSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center rounded-full border border-zinc-200 p-0.5 dark:border-zinc-800"
    >
      {routing.locales.map((l) => {
        const active = l === locale;
        const stripped = pathname === "/" ? "" : pathname;
        const href = `/${l}${stripped}`;
        return (
          <a
            key={l}
            href={href}
            onClick={onSelect}
            aria-current={active ? "true" : undefined}
            className={cn(
              "h-7 inline-flex items-center rounded-full px-2 text-xs font-medium uppercase transition-colors",
              active
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
            )}
          >
            {l}
          </a>
        );
      })}
    </div>
  );
}
