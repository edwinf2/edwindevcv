import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { PostCard } from "@/components/blog/PostCard";
import { TagFilter } from "@/components/blog/TagFilter";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return buildMetadata({
    locale: locale as Locale,
    title: t("title"),
    description: t("subtitle"),
    path: "/blog",
  });
}

export default async function BlogIndexPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ tag?: string }>;
}) {
  const { locale } = await params;
  const { tag } = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations("blog");

  const typedLocale = locale as Locale;
  const tags = await getAllTags(typedLocale);
  const all = await getAllPosts(typedLocale);
  const posts = tag ? all.filter((p) => p.tags?.includes(tag)) : all;

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
        <TagFilter tags={tags} active={tag} />
      </div>

      {posts.length === 0 ? (
        <p className="mt-12 text-zinc-500">{t("empty")}</p>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
