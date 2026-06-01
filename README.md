# Edwin Figueroa — Portfolio & Blog

Portafolio personal y blog técnico de **Edwin Figueroa**, Senior Full-Stack Engineer (React · Node.js · TypeScript). Sitio bilingüe (es/en), con modo oscuro, blog en MDX, imágenes Open Graph dinámicas y formulario de contacto.

Personal portfolio and technical blog of **Edwin Figueroa**, Senior Full-Stack Engineer (React · Node.js · TypeScript). Bilingual site (es/en) with dark mode, an MDX blog, dynamic Open Graph images and a contact form.

**[Español](#español) · [English](#english)**

---

## Español

### Stack

- **Next.js 16.2** — App Router, React Server Components por defecto.
- **React 19.2** + **TypeScript** estricto (cero `any`).
- **Tailwind CSS v4** (`@import "tailwindcss"`, sin CSS Modules).
- **next-intl** — i18n con locales `es`/`en` (default `es`).
- **MDX** para el blog — `next-mdx-remote`, `gray-matter`, `rehype-pretty-code`, `shiki`, `remark-gfm`.
- **next-themes** — modo claro/oscuro.
- **Resend** + **react-hook-form** + **zod** — formulario de contacto con validación, honeypot y rate-limit.
- **lucide-react** — iconos.

### Características

- 🌐 Bilingüe es/en con selector de idioma en el header.
- 🌓 Modo oscuro sin parpadeo (hidratación segura).
- ✍️ Blog en MDX con resaltado de sintaxis dual (claro/oscuro) vía Shiki.
- 🖼️ Imágenes Open Graph generadas dinámicamente (`app/api/og`).
- 🔎 SEO: `sitemap.ts`, `robots.ts`, RSS del blog y metadatos por idioma.
- 📩 Formulario de contacto que envía correo con Resend.
- 📄 Descarga de CV bilingüe (PDF es/en).
- 🎨 Favicon e iconos PWA + Web App Manifest.

### Requisitos

- **Node.js ≥ 20.9** (se recomienda la LTS más reciente).
- **npm** (o el gestor de paquetes que prefieras).

### Puesta en marcha

```bash
# 1. Instalar dependencias
npm install

# 2. Crear el archivo de entorno a partir del ejemplo
cp .env.example .env

# 3. Completar las variables (ver tabla abajo)

# 4. Arrancar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).


### Scripts

```bash
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run start    # servir el build de producción
npm run lint     # ESLint (en Next 16 `next lint` fue removido)
```

### Estructura

```
app/
  [locale]/        layout · page · not-found · about · projects · blog/[slug] · blog/rss.xml
  actions/         server actions (contact.ts)
  api/og/          imagen Open Graph dinámica
  manifest.ts · robots.ts · sitemap.ts · globals.css
  favicon.ico · icon.png · apple-icon.png
components/         layout · home · about · projects · blog · ui
content/           about · projects · blog/{en,es}/*.mdx
i18n/              routing · request · navigation
lib/               utilidades y servicios (seo, projects, blog, mdx, site, utils, rate-limit)
messages/          en.json · es.json
public/            cv-es.pdf · cv-en.pdf · iconos · images/
```

### Despliegue

Optimizado para **[Vercel](https://vercel.com/new)**. Define las variables de entorno en el panel del proyecto y conecta el repositorio; cada push despliega automáticamente.

---

## English

### Stack

- **Next.js 16.2** — App Router, React Server Components by default.
- **React 19.2** + strict **TypeScript** (zero `any`).
- **Tailwind CSS v4** (`@import "tailwindcss"`, no CSS Modules).
- **next-intl** — i18n with `es`/`en` locales (default `es`).
- **MDX** blog — `next-mdx-remote`, `gray-matter`, `rehype-pretty-code`, `shiki`, `remark-gfm`.
- **next-themes** — light/dark mode.
- **Resend** + **react-hook-form** + **zod** — contact form with validation, honeypot and rate limiting.
- **lucide-react** — icons.

### Features

- 🌐 Bilingual es/en with a language switcher in the header.
- 🌓 Flicker-free dark mode (hydration-safe).
- ✍️ MDX blog with dual (light/dark) syntax highlighting via Shiki.
- 🖼️ Dynamically generated Open Graph images (`app/api/og`).
- 🔎 SEO: `sitemap.ts`, `robots.ts`, blog RSS feed and per-locale metadata.
- 📩 Contact form that sends email through Resend.
- 📄 Bilingual CV download (es/en PDF).
- 🎨 Favicon and PWA icons + Web App Manifest.

### Requirements

- **Node.js ≥ 20.9** (latest LTS recommended).
- **npm** (or your preferred package manager).

### Getting started

```bash
# 1. Install dependencies
npm install

# 2. Create the env file from the example
cp .env.example .env

# 3. Fill in the variables (see table below)

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

```bash
npm run dev      # development server
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint (`next lint` was removed in Next 16)
```

### Project structure

```
app/
  [locale]/        layout · page · not-found · about · projects · blog/[slug] · blog/rss.xml
  actions/         server actions (contact.ts)
  api/og/          dynamic Open Graph image
  manifest.ts · robots.ts · sitemap.ts · globals.css
  favicon.ico · icon.png · apple-icon.png
components/         layout · home · about · projects · blog · ui
content/           about · projects · blog/{en,es}/*.mdx
i18n/              routing · request · navigation
lib/               utilities and services (seo, projects, blog, mdx, site, utils, rate-limit)
messages/          en.json · es.json
public/            cv-es.pdf · cv-en.pdf · icons · images/
```

### Deployment

Optimized for **[Vercel](https://vercel.com/new)**. Set the environment variables in the project dashboard and connect the repo; every push deploys automatically.

---

© Edwin Figueroa. All rights reserved.
