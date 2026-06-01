import { projects, type Project } from "@/content/projects/projects";
import type { Locale } from "@/i18n/routing";

export interface LocalizedProject {
  slug: string;
  year: number;
  stack: string[];
  cover?: string;
  repo?: string;
  demo?: string;
  featured: boolean;
  title: string;
  description: string;
  longDescription?: string;
}

function localize(project: Project, locale: Locale): LocalizedProject {
  const content = project.content[locale] ?? project.content.es;
  return {
    slug: project.slug,
    year: project.year,
    stack: project.stack,
    cover: project.cover,
    repo: project.repo,
    demo: project.demo,
    featured: project.featured ?? false,
    title: content.title,
    description: content.description,
    longDescription: content.longDescription,
  };
}

export function getAllProjects(locale: Locale): LocalizedProject[] {
  return projects
    .map((p) => localize(p, locale))
    .sort((a, b) => b.year - a.year);
}

export function getFeaturedProjects(
  locale: Locale,
  limit = 3,
): LocalizedProject[] {
  return getAllProjects(locale)
    .filter((p) => p.featured)
    .slice(0, limit);
}

export function getProjectBySlug(
  locale: Locale,
  slug: string,
): LocalizedProject | undefined {
  const project = projects.find((p) => p.slug === slug);
  return project ? localize(project, locale) : undefined;
}

export function getAllStacks(locale: Locale): string[] {
  const set = new Set<string>();
  for (const p of getAllProjects(locale)) {
    p.stack.forEach((s) => set.add(s));
  }
  return Array.from(set).sort();
}
