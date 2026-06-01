"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";

// Returns false during SSR and the first hydration render, then true on the
// client — without calling setState inside an effect (hydration-safe).
const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations("common");
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  function toggle() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  const isDark = mounted && resolvedTheme === "dark";
  const Icon = isDark ? Sun : Moon;
  const label = isDark ? t("themeLight") : t("themeDark");

  return (
    <button
      type="button"
      onClick={toggle}
      title={label}
      aria-label={label}
      suppressHydrationWarning
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
    >
      <Icon className="h-4 w-4" suppressHydrationWarning />
    </button>
  );
}
