// Fuente única de los enlaces de navegación, compartida por el nav de escritorio
// (Navbar) y el drawer móvil (MobileNav). Las etiquetas se resuelven con la
// clave `key` contra el namespace `nav` en messages/.
export const navLinks = [
  { href: "/", key: "home" },
  { href: "/projects", key: "projects" },
  { href: "/about", key: "about" },
  { href: "/blog", key: "blog" },
] as const;

export type NavLink = (typeof navLinks)[number];

// Marca activo el enlace exacto o cualquier subruta (p. ej. /blog/[slug]).
export function isNavLinkActive(pathname: string, href: string): boolean {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);
}
