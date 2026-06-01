<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Fuente de verdad de las reglas del proyecto

> Este archivo es la **única fuente de verdad** de las reglas para todos los agentes
> (Claude Code lo hereda vía `CLAUDE.md`; Windsurf vía `.windsurf/rules/source-of-truth.md`).
> Si algo aquí contradice la documentación local de Next.js, **gana la documentación local**.

## Stack y versiones

- **Next.js 16.2.x** — App Router, React Server Components por defecto.
- **React 19.2**.
- **TypeScript estricto** (`strict: true`, cero `any`).
- **Tailwind CSS v4** (config vía `@import "tailwindcss"` en `app/globals.css`; PostCSS).
- **next-intl** para i18n (locales `es`/`en`, default `es`).
- **Resend** + **react-hook-form** + **zod** para el formulario de contacto.
- **MDX** para el blog: `next-mdx-remote`, `gray-matter`, `rehype-pretty-code`, `shiki`, `remark-gfm`.
- **next-themes** para dark mode.

## Regla crítica de versión (Next.js 16)

- **Lee `node_modules/next/dist/docs/` antes de codear** el área que vayas a tocar.
- `params` y `searchParams` en páginas son **Promises**: usa `await params`.
- El **caché es opt-in** con la directiva `"use cache"`; no asumas caché implícito.
- Componentes en `app/` son **RSC por defecto**; usa `"use client"` solo donde haya
  interactividad/estado/hooks de navegador.
- `next lint` fue **removido**; el lint se corre con ESLint directamente (`npm run lint`).
- El middleware vive en **`proxy.ts`** (renombrado en v16), no en `middleware.ts`.

## Reglas de proyecto

**Global**
- TypeScript en todos los componentes y páginas.
- `async/await` en lugar de callbacks.
- Commits semánticos: `feat`, `fix`, `chore`, etc.

**Componentes**
- Funcionales (no clases).
- Props tipadas con `interface` o `type`.
- Un componente = una responsabilidad.
- Lógica compleja fuera de la UI: en hooks (`/hooks`) o servicios/utilidades (`/lib`).

**Estructura de archivos**
- Páginas en `/app` — **solo App Router** (este proyecto NO usa `/pages`).
- Componentes reutilizables en `/components`.
- Hooks en `/hooks`.
- Utilidades en `/lib`.
- Tipos en `/types` (o colocados junto al uso si son locales).

**Estilos**
- Solo Tailwind v4. **Nada de CSS Modules ni styled-components.**
- Reutilizar utilidades; componer clases con `clsx` + `tailwind-merge` (helper `cn` en `lib/utils`).

**i18n**
- Todos los textos en `messages/{locale}.json`. **Nunca hardcodear** texto en componentes.
- Selector de idioma visible en el header.

**Tests**
- Recomendados cuando aporten valor (no obligatorios por componente; Jest + RTL aún no
  están instalados). Si se añaden: archivos en `__tests__` o con sufijo `.test.tsx`.

## Comandos

```bash
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run lint     # ESLint (next lint fue removido en v16)
```

## Estructura de carpetas

```
app/
  [locale]/        layout · page · not-found · about · projects · blog/[slug] · blog/rss.xml
  actions/         server actions (contact.ts)
  api/og/          imagen Open Graph dinámica
  robots.ts · sitemap.ts · globals.css
components/         layout · home · about · projects · blog · ui
content/           about · projects · blog/{en,es}/*.mdx   (datos y MDX)
i18n/              routing · request · navigation
lib/               utilidades y servicios (seo, projects, blog, mdx, site, utils, rate-limit)
messages/          en.json · es.json
hooks/             custom hooks (crear cuando se necesiten)
types/             tipos compartidos (crear cuando se necesiten)
public/            cv-es.pdf · cv-en.pdf · images/
```
