import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("notFound");
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">{t("title")}</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        {t("description")}
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
      >
        {t("back")}
      </Link>
    </main>
  );
}
