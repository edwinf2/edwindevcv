import { getLocale, getTranslations } from "next-intl/server";
import { Mail, Rss } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export async function Footer() {
  const t = await getTranslations("footer");
  const locale = await getLocale();
  const year = new Date().getFullYear();

  const socials = [
    { href: "https://github.com/", label: "GitHub", Icon: GithubIcon },
    { href: "https://linkedin.com/", label: "LinkedIn", Icon: LinkedinIcon },
    {
      href: "mailto:edwinprogramador@gmail.com",
      label: "Email",
      Icon: Mail,
    },
    { href: `/${locale}/blog/rss.xml`, label: t("rss"), Icon: Rss },
  ];

  return (
    <footer className="mt-16 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} Edwin Figueroa. {t("rights")}
        </p>
        <ul className="flex items-center gap-2">
          {socials.map(({ href, label, Icon }) => {
            const external = href.startsWith("http");
            return (
              <li key={label}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  title={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
