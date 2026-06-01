import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { SITE_URL } from "./site";

interface BuildMetadataInput {
  title?: string;
  description?: string;
  /** Path WITHOUT locale prefix, e.g. "/blog/hello-world" or "" for home. */
  path?: string;
  locale: Locale;
  /** Absolute URL or path relative to SITE_URL. If omitted, falls back to dynamic OG image. */
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  tags?: string[];
}

function absolute(image: string): string {
  return image.startsWith("http") ? image : `${SITE_URL}${image}`;
}

function dynamicOgUrl(title: string, description?: string): string {
  const params = new URLSearchParams({ title });
  if (description) params.set("description", description);
  return `${SITE_URL}/api/og?${params.toString()}`;
}

export function buildMetadata({
  title,
  description,
  path = "",
  locale,
  image,
  type = "website",
  publishedTime,
  tags,
}: BuildMetadataInput): Metadata {
  const url = `${SITE_URL}/${locale}${path}`;
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`]),
  );

  const ogImage = image
    ? absolute(image)
    : title
      ? dynamicOgUrl(title, description)
      : undefined;
  const images = ogImage ? [{ url: ogImage }] : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title,
      description,
      url,
      locale,
      type,
      images,
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      ...(type === "article" && tags ? { tags } : {}),
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title,
      description,
      images: images?.map((i) => i.url),
    },
  };
}
