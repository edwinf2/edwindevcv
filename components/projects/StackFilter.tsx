import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface StackFilterProps {
  stacks: string[];
  active?: string;
}

const baseClass =
  "inline-flex h-8 items-center rounded-full border px-3 text-xs font-medium transition-colors";
const inactiveClass =
  "border-zinc-200 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900";
const activeClass =
  "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900";

export function StackFilter({ stacks, active }: StackFilterProps) {
  const t = useTranslations("projects");
  const isAllActive = !active;

  return (
    <ul className="flex flex-wrap gap-2">
      <li>
        <Link
          href="/projects"
          className={cn(baseClass, isAllActive ? activeClass : inactiveClass)}
        >
          {t("filterAll")}
        </Link>
      </li>
      {stacks.map((stack) => {
        const isActive = active === stack;
        return (
          <li key={stack}>
            <Link
              href={`/projects?stack=${encodeURIComponent(stack)}`}
              className={cn(baseClass, isActive ? activeClass : inactiveClass)}
            >
              {stack}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
