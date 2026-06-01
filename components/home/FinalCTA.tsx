import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function FinalCTA() {
  const tAbout = useTranslations("about");
  const tHome = useTranslations("home");

  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-24 text-center">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {tAbout("contactTitle")}
      </h2>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        {tAbout("contactSubtitle")}
      </p>
      <Link
        href="/about"
        className="mt-8 inline-flex h-11 items-center rounded-full bg-zinc-900 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        {tHome("ctaContact")}
      </Link>
    </section>
  );
}
