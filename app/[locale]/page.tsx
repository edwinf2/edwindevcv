import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { LatestPosts } from "@/components/home/LatestPosts";
import { FinalCTA } from "@/components/home/FinalCTA";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return buildMetadata({
    locale: locale as Locale,
    description: t("heroTagline"),
    path: "",
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const typedLocale = locale as Locale;

  return (
    <>
      <Hero />
      <FeaturedProjects locale={typedLocale} />
      <LatestPosts locale={typedLocale} />
      <FinalCTA />
    </>
  );
}
