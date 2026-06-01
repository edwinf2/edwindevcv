import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface TagFilterProps {
  tags: string[];
  active?: string;
}

const baseClass =
  "inline-flex h-8 items-center rounded-full border px-3 text-xs font-medium transition-colors";
const inactiveClass =
  "border-zinc-200 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900";
const activeClass =
  "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900";

export function TagFilter({ tags, active }: TagFilterProps) {
  const t = useTranslations("blog");
  const isAllActive = !active;

  return (
    <ul className="flex flex-wrap gap-2">
      <li>
        <Link
          href="/blog"
          className={cn(baseClass, isAllActive ? activeClass : inactiveClass)}
        >
          {t("filterAll")}
        </Link>
      </li>
      {tags.map((tag) => {
        const isActive = active === tag;
        return (
          <li key={tag}>
            <Link
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className={cn(baseClass, isActive ? activeClass : inactiveClass)}
            >
              #{tag}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
