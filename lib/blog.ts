import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Locale } from "@/i18n/routing";

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  cover?: string;
  draft?: boolean;
}

export interface PostMeta extends PostFrontmatter {
  slug: string;
  locale: Locale;
  readingTime: number;
}

export interface Post extends PostMeta {
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function calcReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

async function readPostFile(
  locale: Locale,
  filename: string,
): Promise<Post | null> {
  const filePath = path.join(BLOG_DIR, locale, filename);
  const raw = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(raw);
  const front = data as PostFrontmatter;
  if (front.draft) return null;
  const slug = filename.replace(/\.mdx?$/, "");
  return {
    ...front,
    slug,
    locale,
    readingTime: calcReadingTime(content),
    content,
  };
}

export async function getAllPosts(locale: Locale): Promise<PostMeta[]> {
  const dir = path.join(BLOG_DIR, locale);
  let entries: string[] = [];
  try {
    entries = await fs.readdir(dir);
  } catch {
    return [];
  }
  const files = entries.filter((f) => /\.mdx?$/.test(f));
  const posts = await Promise.all(files.map((f) => readPostFile(locale, f)));
  return posts
    .filter((p): p is Post => p !== null)
    .map(({ content: _content, ...meta }) => meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getLatestPosts(
  locale: Locale,
  limit = 3,
): Promise<PostMeta[]> {
  const all = await getAllPosts(locale);
  return all.slice(0, limit);
}

export async function getPostBySlug(
  locale: Locale,
  slug: string,
): Promise<Post | null> {
  try {
    return await readPostFile(locale, `${slug}.mdx`);
  } catch {
    return null;
  }
}

export async function getAllSlugs(
  locale: Locale,
): Promise<{ slug: string }[]> {
  const posts = await getAllPosts(locale);
  return posts.map((p) => ({ slug: p.slug }));
}

export async function getAllTags(locale: Locale): Promise<string[]> {
  const posts = await getAllPosts(locale);
  const set = new Set<string>();
  posts.forEach((p) => p.tags?.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}
