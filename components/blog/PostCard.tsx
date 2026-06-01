import Image from "next/image";
import { useFormatter, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { PostMeta } from "@/lib/blog";

interface PostCardProps {
  post: PostMeta;
}

export function PostCard({ post }: PostCardProps) {
  const t = useTranslations("blog");
  const format = useFormatter();
  const date = new Date(post.date);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
    >
      {post.cover && (
        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <time dateTime={post.date}>
            {format.dateTime(date, { dateStyle: "long" })}
          </time>
          <span aria-hidden>·</span>
          <span>{t("minRead", { minutes: post.readingTime })}</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold tracking-tight transition-colors group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {post.description}
        </p>
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
      </div>
    </Link>
  );
}
