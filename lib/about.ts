import {
  experiences,
  skills,
  type Experience,
  type SkillGroup,
} from "@/content/about/about";
import {
  certifications,
  education,
  type Certification,
  type Education,
} from "@/content/about/education";
import type { Locale } from "@/i18n/routing";

export interface LocalizedExperience {
  id: string;
  start: string;
  end: string | "present";
  role: string;
  company: string;
  description: string;
  highlights: string[];
}

export function getExperiences(locale: Locale): LocalizedExperience[] {
  return experiences
    .map((e) => {
      const c = e.content[locale] ?? e.content.es;
      return {
        id: e.id,
        start: e.start,
        end: e.end,
        role: c.role,
        company: c.company,
        description: c.description,
        highlights: c.highlights ?? [],
      };
    })
    .sort((a, b) => (a.start < b.start ? 1 : -1));
}

export interface LocalizedEducation {
  id: string;
  period: string;
  inProgress: boolean;
  degree: string;
  school: string;
}

export function getEducation(locale: Locale): LocalizedEducation[] {
  return education.map((e) => {
    const c = e.content[locale] ?? e.content.es;
    return {
      id: e.id,
      period: e.period,
      inProgress: e.inProgress ?? false,
      degree: c.degree,
      school: c.school,
    };
  });
}

export interface LocalizedCertification {
  id: string;
  year: string;
  name: string;
  issuer: string;
}

export function getCertifications(locale: Locale): LocalizedCertification[] {
  return certifications
    .map((c) => {
      const content = c.content[locale] ?? c.content.es;
      return {
        id: c.id,
        year: c.year,
        name: content.name,
        issuer: content.issuer,
      };
    })
    .sort((a, b) => (a.year < b.year ? 1 : -1));
}

export { skills };
export type { Experience, SkillGroup, Education, Certification };
