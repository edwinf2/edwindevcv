import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Bio } from "@/components/about/Bio";
import { SkillList } from "@/components/about/SkillList";
import { Timeline } from "@/components/about/Timeline";
import { Education } from "@/components/about/Education";
import { ContactForm } from "@/components/about/ContactForm";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return buildMetadata({
    locale: locale as Locale,
    title: t("title"),
    description: t("subtitle"),
    path: "/about",
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <>
      <Bio />
      <SkillList />
      <Timeline locale={locale as Locale} />
      <Education locale={locale as Locale} />

      <section className="mx-auto w-full max-w-2xl px-4 py-12 pb-24">
        <h2 className="text-2xl font-semibold tracking-tight">
          {t("contactTitle")}
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          {t("contactSubtitle")}
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
