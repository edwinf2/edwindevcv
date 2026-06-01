import { Download } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("home");
  const locale = useLocale();
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="hero-gradient pointer-events-none absolute inset-0 -z-10"
      />
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-6 px-4 py-24 sm:py-32">
        <p className="text-sm uppercase tracking-widest text-zinc-500">
          {t("heroEyebrow")}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          {t("heroName")}
        </h1>
        <p className="text-2xl text-zinc-700 dark:text-zinc-300">
          {t("heroRole")}
        </p>
        <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          {t("heroTagline")}
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="inline-flex h-11 items-center rounded-full bg-zinc-900 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            {t("ctaProjects")}
          </Link>
          <a
            href={`/cv-${locale}.pdf`}
            download={`Edwin_Figueroa_CV_${locale.toUpperCase()}.pdf`}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-zinc-200 px-5 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900"
          >
            <Download className="h-4 w-4" />
            {t("ctaCV")}
          </a>
        </div>
      </div>
    </section>
  );
}
