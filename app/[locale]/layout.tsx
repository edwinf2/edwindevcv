import type { Metadata } from "next";
import { Sora, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL } from "@/lib/site";
import "../globals.css";

// Display: Sora (geométrica, para títulos). Cuerpo: Hanken Grotesk (legible).
// Mono: JetBrains Mono (código/blog). Las tres son variables → un solo peso de carga.
const fontDisplay = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const fontSans = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site" });
  const name = t("name");
  const description = t("description");
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `${SITE_URL}/${l}`]),
  );

  const ogImage = `${SITE_URL}/api/og?title=${encodeURIComponent(name)}&description=${encodeURIComponent(description)}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: name, template: `%s · ${name}` },
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages,
    },
    openGraph: {
      title: name,
      description,
      url: `${SITE_URL}/${locale}`,
      siteName: name,
      locale: locale as Locale,
      type: "website",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: name,
      description,
      images: [ogImage],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="flex min-h-full flex-col bg-background text-foreground"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <Navbar />
            <main className="flex flex-1 flex-col">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
