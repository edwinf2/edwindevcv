import type { Locale } from "@/i18n/routing";

export interface EducationContent {
  degree: string;
  school: string;
}

export interface Education {
  id: string;
  /** Año o rango, p. ej. "2023" o "2025–2026". */
  period: string;
  inProgress?: boolean;
  content: Record<Locale, EducationContent>;
}

export const education: Education[] = [
  {
    id: "ai-expert",
    period: "2025–2026",
    inProgress: true,
    content: {
      es: {
        degree: "Especialización AI Expert Engineer",
        school: "En línea",
      },
      en: {
        degree: "AI Expert Engineer Specialization",
        school: "Online",
      },
    },
  },
  {
    id: "ingenieria-sistemas",
    period: "2023",
    content: {
      es: {
        degree: "Ingeniería en Sistemas Informáticos",
        school: "Universidad de El Salvador",
      },
      en: {
        degree: "Computer Systems Engineering",
        school: "University of El Salvador",
      },
    },
  },
];

export interface CertificationContent {
  name: string;
  issuer: string;
}

export interface Certification {
  id: string;
  year: string;
  content: Record<Locale, CertificationContent>;
}

export const certifications: Certification[] = [
  {
    id: "mongodb-developer",
    year: "2019",
    content: {
      es: { name: "MongoDB Developer", issuer: "MongoDB University" },
      en: { name: "MongoDB Developer", issuer: "MongoDB University" },
    },
  },
  {
    id: "neetwork-marketing",
    year: "2022",
    content: {
      es: {
        name: "Marketing Digital y Analítica Web",
        issuer: "Neetwork Business School (España)",
      },
      en: {
        name: "Digital Marketing & Web Analytics",
        issuer: "Neetwork Business School (Spain)",
      },
    },
  },
  {
    id: "neetwork-wordpress",
    year: "2020",
    content: {
      es: {
        name: "WordPress, E-commerce y Embudos de Conversión",
        issuer: "Neetwork Business School (España)",
      },
      en: {
        name: "WordPress, E-commerce & Conversion Funnels",
        issuer: "Neetwork Business School (Spain)",
      },
    },
  },
];
