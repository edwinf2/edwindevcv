import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  const typedLocale = locale as Locale;

  const posts = await getAllPosts(typedLocale);
  const channelTitle =
    typedLocale === "es" ? "Blog del portfolio" : "Portfolio blog";
  const channelDescription =
    typedLocale === "es"
      ? "Notas técnicas, tutoriales y reflexiones."
      : "Technical notes, tutorials, and thoughts.";

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/${typedLocale}/blog/${post.slug}`;
      const categories =
        post.tags
          ?.map((tag) => `<category>${escapeXml(tag)}</category>`)
          .join("") ?? "";
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      ${categories}
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(channelTitle)}</title>
    <link>${SITE_URL}/${typedLocale}/blog</link>
    <description>${escapeXml(channelDescription)}</description>
    <language>${typedLocale}</language>
    <atom:link href="${SITE_URL}/${typedLocale}/blog/rss.xml" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
