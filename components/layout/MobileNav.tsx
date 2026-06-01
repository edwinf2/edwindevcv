"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { navLinks, isNavLinkActive } from "./nav-links";
import { cn } from "@/lib/utils";

// false en SSR / primer render, true tras hidratar — sin setState en effect.
// Necesario para hacer el portal a document.body solo en cliente.
const emptySubscribe = () => () => {};

// Menú de navegación móvil: botón hamburguesa + drawer lateral. Visible solo
// por debajo de `md` (en `md:` y superior manda el nav horizontal del Navbar).
export function MobileNav() {
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Al abrir: foco al botón cerrar y bloqueo del scroll de fondo.
  // Al cerrar (cleanup): restaura el scroll y devuelve el foco a la hamburguesa.
  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      trigger?.focus();
    };
  }, [open]);

  // Escape cierra; Tab queda atrapado dentro del drawer (focus trap simple).
  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Escape") {
      setOpen(false);
      return;
    }
    if (e.key !== "Tab") return;
    const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    if (!focusables || focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={tc("openMenu")}
        aria-expanded={open}
        aria-controls="mobile-drawer"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 md:hidden dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
      >
        <Menu className="h-4 w-4" />
      </button>

      {/* Overlay + drawer renderizados en un portal a <body> para escapar del
          containing block del header (backdrop-filter) y quedar sobre TODO.
          `md:hidden` evita que aparezcan en escritorio. */}
      {mounted &&
        createPortal(
          <div className="md:hidden">
            {/* Overlay: cubre toda la pantalla; cierra al tocar; se desvanece. */}
            <button
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              onClick={() => setOpen(false)}
              className={cn(
                "fixed inset-0 z-[100] cursor-default bg-zinc-950/50 backdrop-blur-sm transition-opacity duration-300 motion-reduce:transition-none",
                open ? "opacity-100" : "pointer-events-none opacity-0",
              )}
            />

            {/* Drawer derecho: fondo OPACO del tema, sobre el overlay. */}
            <div
              ref={panelRef}
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label={tc("menu")}
              inert={!open}
              onKeyDown={handleKeyDown}
              className={cn(
                "fixed inset-y-0 right-0 z-[110] flex w-72 max-w-[80%] flex-col border-l border-zinc-200 bg-background p-4 shadow-xl transition-transform duration-300 motion-reduce:transition-none dark:border-zinc-800",
                open ? "translate-x-0" : "translate-x-full",
              )}
            >
              <div className="flex items-center justify-between">
            <span className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              {tc("menu")}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label={tc("closeMenu")}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <nav className="mt-4 flex flex-col">
            {navLinks.map((link) => {
              const active = isNavLinkActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex min-h-[44px] items-center rounded-lg px-3 text-base transition-colors",
                    active
                      ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100",
                  )}
                >
                  {t(link.key)}
                </Link>
              );
            })}
          </nav>

              <div className="mt-auto border-t border-zinc-200 pt-4 dark:border-zinc-800">
                <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  {tc("switchLocale")}
                </span>
                {/* Cierra el drawer de forma controlada antes de navegar. */}
                <LocaleSwitcher onSelect={() => setOpen(false)} />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
