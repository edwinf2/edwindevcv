import { useTranslations } from "next-intl";
import { getCertifications, getEducation } from "@/lib/about";
import type { Locale } from "@/i18n/routing";

interface EducationProps {
  locale: Locale;
}

export function Education({ locale }: EducationProps) {
  const t = useTranslations("about");
  const education = getEducation(locale);
  const certifications = getCertifications(locale);

  return (
    <section className="mx-auto grid w-full max-w-3xl gap-10 px-4 py-12 sm:grid-cols-2">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          {t("educationTitle")}
        </h2>
        <ul className="mt-6 space-y-5">
          {education.map((e) => (
            <li key={e.id}>
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                {e.period}
                {e.inProgress && (
                  <span className="ml-2 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-700 dark:text-emerald-400">
                    {t("inProgress")}
                  </span>
                )}
              </p>
              <h3 className="mt-1 text-base font-semibold tracking-tight">
                {e.degree}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {e.school}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          {t("certificationsTitle")}
        </h2>
        <ul className="mt-6 space-y-5">
          {certifications.map((c) => (
            <li key={c.id}>
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                {c.year}
              </p>
              <h3 className="mt-1 text-base font-semibold tracking-tight">
                {c.name}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {c.issuer}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
