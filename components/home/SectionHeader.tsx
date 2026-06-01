import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  link?: { href: string; label: string };
}

export function SectionHeader({ title, subtitle, link }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">{subtitle}</p>
        )}
      </div>
      {link && (
        <Link
          href={link.href}
          className="inline-flex items-center gap-1 text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
        >
          {link.label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
