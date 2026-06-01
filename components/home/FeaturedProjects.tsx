import { useTranslations } from "next-intl";
import { getFeaturedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeader } from "./SectionHeader";
import type { Locale } from "@/i18n/routing";

interface FeaturedProjectsProps {
  locale: Locale;
}

export function FeaturedProjects({ locale }: FeaturedProjectsProps) {
  const t = useTranslations("home");
  const projects = getFeaturedProjects(locale);
  if (projects.length === 0) return null;

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-16">
      <SectionHeader
        title={t("featuredTitle")}
        subtitle={t("featuredSubtitle")}
        link={{ href: "/projects", label: t("viewAll") }}
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
