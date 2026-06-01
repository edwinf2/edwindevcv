import { getTranslations } from "next-intl/server";
import { getLatestPosts } from "@/lib/blog";
import { PostCard } from "@/components/blog/PostCard";
import { SectionHeader } from "./SectionHeader";
import type { Locale } from "@/i18n/routing";

interface LatestPostsProps {
  locale: Locale;
}

export async function LatestPosts({ locale }: LatestPostsProps) {
  const t = await getTranslations("home");
  const posts = await getLatestPosts(locale);
  if (posts.length === 0) return null;

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-16">
      <SectionHeader
        title={t("latestPostsTitle")}
        subtitle={t("latestPostsSubtitle")}
        link={{ href: "/blog", label: t("viewAll") }}
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
