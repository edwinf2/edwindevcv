import { useTranslations } from "next-intl";
import { skills } from "@/lib/about";
import type { SkillGroupKey } from "@/content/about/about";

const groupTranslationKey: Record<SkillGroupKey, string> = {
  frontend: "skillsFrontend",
  backend: "skillsBackend",
  databases: "skillsDatabases",
  mobile: "skillsMobile",
  devops: "skillsDevops",
};

export function SkillList() {
  const t = useTranslations("about");

  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-12">
      <h2 className="text-2xl font-semibold tracking-tight">
        {t("skillsTitle")}
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ group, skills: list }) => (
          <div key={group}>
            <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
              {t(groupTranslationKey[group])}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {list.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
