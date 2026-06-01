import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";
import type { Options as RehypePrettyCodeOptions } from "rehype-pretty-code";

const calloutStyles: Record<string, string> = {
  info: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-100",
  warn: "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-100",
  tip: "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-100",
};

export interface CalloutProps {
  children: ReactNode;
  type?: keyof typeof calloutStyles;
  title?: string;
}

export function Callout({ children, type = "info", title }: CalloutProps) {
  const styles = calloutStyles[type] ?? calloutStyles.info;
  return (
    <aside className={`my-6 rounded-xl border px-4 py-3 ${styles}`}>
      {title && <p className="mb-1 font-semibold">{title}</p>}
      <div className="text-sm leading-relaxed">{children}</div>
    </aside>
  );
}

export const mdxComponents: MDXComponents = {
  Callout,
};

export const prettyCodeOptions: RehypePrettyCodeOptions = {
  theme: {
    light: "github-light",
    dark: "github-dark-dimmed",
  },
  keepBackground: false,
  defaultLang: "plaintext",
};
