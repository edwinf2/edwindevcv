import { useFormatter, useTranslations } from "next-intl";
import { getExperiences } from "@/lib/about";
import type { Locale } from "@/i18n/routing";

interface TimelineProps {
  locale: Locale;
}

function parseMonth(value: string): Date {
  return new Date(`${value}-01T00:00:00Z`);
}

export function Timeline({ locale }: TimelineProps) {
  const t = useTranslations("about");
  const format = useFormatter();
  const experiences = getExperiences(locale);

  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-12">
      <h2 className="text-2xl font-semibold tracking-tight">
        {t("experienceTitle")}
      </h2>
      <ol className="mt-6 space-y-6 border-l border-zinc-200 pl-6 dark:border-zinc-800">
        {experiences.map((exp) => {
          const startLabel = format.dateTime(parseMonth(exp.start), {
            year: "numeric",
            month: "short",
          });
          const endLabel =
            exp.end === "present"
              ? t("present")
              : format.dateTime(parseMonth(exp.end), {
                  year: "numeric",
                  month: "short",
                });
          return (
            <li key={exp.id} className="relative">
              <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border border-zinc-300 bg-background dark:border-zinc-700" />
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                {startLabel} — {endLabel}
              </p>
              <h3 className="mt-1 text-lg font-semibold tracking-tight">
                {exp.role}
                <span className="ml-1 text-zinc-500">· {exp.company}</span>
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {exp.description}
              </p>
              {exp.highlights.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="relative pl-4 text-sm text-zinc-600 before:absolute before:left-0 before:text-zinc-400 before:content-['—'] dark:text-zinc-400"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
