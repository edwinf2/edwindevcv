import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

const STATIC_PATHS = ["", "/projects", "/about", "/blog"] as const;

function buildLanguages(path: string) {
  return Object.fromEntries(
    routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`]),
  );
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of STATIC_PATHS) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.7,
        alternates: { languages: buildLanguages(path) },
      });
    }

    const posts = await getAllPosts(locale);
    for (const post of posts) {
      entries.push({
        url: `${SITE_URL}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  }

  return entries;
}
