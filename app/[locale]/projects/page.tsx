import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAllProjects, getAllStacks } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { StackFilter } from "@/components/projects/StackFilter";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });
  return buildMetadata({
    locale: locale as Locale,
    title: t("title"),
    description: t("subtitle"),
    path: "/projects",
  });
}

export default async function ProjectsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ stack?: string }>;
}) {
  const { locale } = await params;
  const { stack } = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations("projects");

  const typedLocale = locale as Locale;
  const stacks = getAllStacks(typedLocale);
  const projects = getAllProjects(typedLocale).filter(
    (p) => !stack || p.stack.includes(stack),
  );

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
          {t("subtitle")}
        </p>
      </header>

      <div className="mt-8">
        <StackFilter stacks={stacks} active={stack} />
      </div>

      {projects.length === 0 ? (
        <p className="mt-12 text-zinc-500">{t("empty")}</p>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
