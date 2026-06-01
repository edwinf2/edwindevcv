import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { mdxComponents, prettyCodeOptions } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    const posts = await getAllPosts(locale);
    for (const post of posts) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getPostBySlug(locale as Locale, slug);
  if (!post) return {};
  return buildMetadata({
    locale: locale as Locale,
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    tags: post.tags,
    image: post.cover,
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = await getPostBySlug(locale as Locale, slug);
  if (!post) notFound();

  const t = await getTranslations("blog");
  const format = await getFormatter();
  const date = new Date(post.date);

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-16">
      <Link
        href="/blog"
        className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        {t("backToList")}
      </Link>

      {post.cover && (
        <div className="relative mt-6 aspect-[2/1] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
      )}

      <header className="mt-6 border-b border-zinc-200 pb-8 dark:border-zinc-800">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
          {post.description}
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500">
          <time dateTime={post.date}>
            {format.dateTime(date, { dateStyle: "long" })}
          </time>
          <span aria-hidden>·</span>
          <span>{t("minRead", { minutes: post.readingTime })}</span>
        </div>
        {post.tags && post.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
              >
                #{tag}
              </li>
            ))}
          </ul>
        )}
      </header>

      <div className="prose prose-zinc mt-8 max-w-none dark:prose-invert">
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
            },
          }}
        />
      </div>
    </article>
  );
}
