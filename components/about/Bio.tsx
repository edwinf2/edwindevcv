import Image from "next/image";
import { useTranslations } from "next-intl";

export function Bio() {
  const t = useTranslations("about");
  return (
    <section className="mx-auto w-full max-w-3xl px-4 pt-16">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <Image
          src="/images/about/avatar.png"
          alt="Edwin Figueroa"
          width={128}
          height={128}
          priority
          className="h-28 w-28 rounded-full object-cover ring-2 ring-zinc-200 dark:ring-zinc-800 sm:h-32 sm:w-32"
        />
        <div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            {t("subtitle")}
          </p>
        </div>
      </div>
      <p className="mt-8 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        {t("bio")}
      </p>
    </section>
  );
}
