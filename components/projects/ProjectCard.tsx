import Image from "next/image";
import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import type { LocalizedProject } from "@/lib/projects";

interface ProjectCardProps {
  project: LocalizedProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("projects");

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700">
      {project.cover && (
        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          <span className="shrink-0 text-xs text-zinc-500">{project.year}</span>
        </div>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <li
              key={s}
              className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
            >
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center gap-4 pt-6 text-sm">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              <GithubIcon className="h-4 w-4" />
              {t("viewRepo")}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              <ExternalLink className="h-4 w-4" />
              {t("viewDemo")}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
