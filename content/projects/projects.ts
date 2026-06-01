import type { Locale } from "@/i18n/routing";

export interface ProjectLocaleContent {
  title: string;
  description: string;
  longDescription?: string;
}

export interface Project {
  slug: string;
  year: number;
  stack: string[];
  cover?: string;
  repo?: string;
  demo?: string;
  featured?: boolean;
  content: Record<Locale, ProjectLocaleContent>;
}

export const projects: Project[] = [
  {
    slug: "mern-apv",
    year: 2024,
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    cover: "/images/projects/mern-apv.jpg",
    demo: "https://demo-mern-apv.vercel.app/",
    featured: true,
    content: {
      es: {
        title: "Administrador de Pacientes (MERN)",
        description:
          "Aplicación full-stack MERN para que veterinarios gestionen pacientes y citas, con autenticación JWT y panel personalizado.",
      },
      en: {
        title: "Patient Manager (MERN)",
        description:
          "Full-stack MERN app for vets to manage patients and appointments, with JWT auth and a personalized dashboard.",
      },
    },
  },
  {
    slug: "cotizador-cripto",
    year: 2023,
    stack: ["React", "Custom Hooks", "Styled Components", "CoinGecko API"],
    cover: "/images/projects/cotizador-cripto.jpg",
    demo: "https://demo-app-cotizadorcripto.netlify.app/",
    featured: true,
    content: {
      es: {
        title: "Cotizador de Criptomonedas",
        description:
          "App en React que cotiza criptomonedas en tiempo real contra varias divisas usando la API de CoinGecko.",
      },
      en: {
        title: "Crypto Quote App",
        description:
          "React app that quotes cryptocurrencies in real time against multiple currencies via the CoinGecko API.",
      },
    },
  },
  {
    slug: "bienes-raices",
    year: 2023,
    stack: ["Node.js", "Express", "MySQL", "Sequelize", "Pug"],
    cover: "/images/projects/bienes-raices.jpg",
    demo: "https://demo-app-realstate.netlify.app/",
    featured: true,
    content: {
      es: {
        title: "Bienes Raíces",
        description:
          "Plataforma de bienes raíces con autenticación, publicación de propiedades, mapas y panel de administración.",
      },
      en: {
        title: "Real Estate Platform",
        description:
          "Real estate platform with authentication, property listings, maps and admin dashboard.",
      },
    },
  },
  {
    slug: "meeti",
    year: 2023,
    stack: ["Node.js", "Express", "MySQL", "Sequelize", "Pug"],
    cover: "/images/projects/app-meeti.jpg",
    demo: "https://demo-app-meeti.netlify.app/",
    content: {
      es: {
        title: "Meeti — Eventos y Reuniones",
        description:
          "App estilo Meetup para crear y descubrir grupos y eventos por categoría y ubicación.",
      },
      en: {
        title: "Meeti — Events & Meetups",
        description:
          "Meetup-style app to create and discover groups and events by category and location.",
      },
    },
  },
  {
    slug: "delivery-app",
    year: 2024,
    stack: ["React", "Tailwind CSS", "Zustand"],
    cover: "/images/projects/app-delivery.png",
    demo: "https://demo-app-delivery.netlify.app/",
    featured: true,
    content: {
      es: {
        title: "App de Delivery",
        description:
          "Cliente de delivery con catálogo, carrito, gestión de estado en Zustand y resumen de pedido en tiempo real.",
      },
      en: {
        title: "Delivery App",
        description:
          "Delivery client with catalog, cart, Zustand state management and live order summary.",
      },
    },
  },
  {
    slug: "gastos-semanal",
    year: 2023,
    stack: ["React", "useReducer", "LocalStorage"],
    cover: "/images/projects/gastos-semanal.jpg",
    demo: "https://demo-app-gastosemanal.netlify.app/",
    content: {
      es: {
        title: "Gastos Semanales",
        description:
          "Control de presupuesto semanal con categorías, filtros y persistencia en LocalStorage.",
      },
      en: {
        title: "Weekly Budget",
        description:
          "Weekly budget tracker with categories, filters and LocalStorage persistence.",
      },
    },
  },
  {
    slug: "tienda-muebles",
    year: 2023,
    stack: ["Node.js", "Express", "MongoDB", "Mongoose", "Pug"],
    cover: "/images/projects/app-tienda-muebles.jpg",
    demo: "https://demo-app-tienda-muebles.netlify.app/",
    content: {
      es: {
        title: "Tienda de Muebles",
        description:
          "E-commerce de muebles con catálogo, carrito y proceso de checkout. Vista del lado del servidor con Pug.",
      },
      en: {
        title: "Furniture Store",
        description:
          "Furniture e-commerce with catalog, cart and checkout flow. Server-rendered views with Pug.",
      },
    },
  },
  {
    slug: "carrito-compras",
    year: 2023,
    stack: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    cover: "/images/projects/carrito-compras.jpg",
    demo: "https://demo-app-carrito.netlify.app/",
    content: {
      es: {
        title: "Carrito de Compras",
        description:
          "Carrito de compras e-commerce en JavaScript vanilla, con manejo del DOM y persistencia del pedido en LocalStorage.",
      },
      en: {
        title: "Shopping Cart",
        description:
          "Vanilla JavaScript e-commerce shopping cart with DOM handling and order persistence via LocalStorage.",
      },
    },
  },
];
