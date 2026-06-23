# Diseño: contenido de IA para el blog

Fecha: 2026-06-23

## Contexto

El blog ya está construido (listado, página de post, RSS, filtro por tags, `lib/blog.ts`,
componentes `PostCard`/`TagFilter`). Solo tiene 2 posts de ejemplo que no son contenido real.
El objetivo no es construir el blog, sino **llenarlo con guías evergreen sobre IA** alineadas
con el perfil del autor (Senior Full-Stack React/Node, objetivo remoto-USD) y verificables.

## Alcance

- Reemplazar los 2 posts de ejemplo por **3 guías evergreen**, cada una en **es + en**
  (6 archivos MDX en `content/blog/{es,en}/`).
- Borrar `hello-world.mdx` y `nextjs-app-router.mdx` en ambos idiomas.
- No se toca plumbing (`lib/blog.ts`, componentes, rutas) ni `messages/*.json`.

## Los 3 posts

| slug | título (es) | cover | tags |
|------|-------------|-------|------|
| `integrar-llm-nextjs` | Integrar un LLM (Claude) en Next.js 16: streaming y Server Actions | `/images/blog/post-01-llm-next.jpg` | `ai`, `nextjs`, `claude` |
| `prompting-efectivo-developers` | Prompting efectivo para developers: del prompt suelto al sistema | `/images/blog/post-02-prompt-developers.jpg` | `ai`, `prompting` |
| `rag-para-devs` | RAG para devs: qué es, cuándo sí y cuándo es sobre-ingeniería | `/images/blog/post-03-rag-devs.jpg` | `ai`, `rag` |

Las 3 imágenes ya existen en `public/images/blog/`.

## Frontmatter

Esquema de `lib/blog.ts` (`PostFrontmatter`): `title`, `description`, `date`, `tags`, `cover`.
Tags como strings crudos (el filtro `TagFilter` los usa tal cual). Fechas en junio 2026,
distribuidas para orden realista (el listado ordena por fecha desc).

## Corrección técnica del post #1

El código del post de integración usa la API de Claude correctamente (verificado contra la
doc local de la skill claude-api):
- SDK oficial `@anthropic-ai/sdk`, `new Anthropic()`.
- Modelo `claude-opus-4-8`.
- `thinking: { type: "adaptive" }` (no `budget_tokens`; no `temperature`/`top_p`/`top_k`).
- Streaming con `client.messages.stream(...)` + `getReader()` en un Server Action / route handler.
- RSC por defecto; `"use client"` solo en el componente con estado.

## Tono

Técnico, directo, primera persona, sin claims inventados ni números no verificables.
Cada post enseña algo aplicable y demuestra criterio de ingeniería.
