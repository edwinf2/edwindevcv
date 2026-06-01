import type { MetadataRoute } from "next";

// Web App Manifest (Next 16 lo sirve en /manifest.webmanifest e inyecta el
// <link rel="manifest"> automáticamente). Iconos PNG en /public; el .ico y el
// icon.png/apple-icon.png los gestiona la convención de archivos de app/.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Edwin Figueroa — Senior Full-Stack Engineer",
    short_name: "Edwin Figueroa",
    description:
      "Portfolio of Edwin Figueroa, Senior Full-Stack Engineer (React · Node.js · TypeScript).",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4f7cff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
