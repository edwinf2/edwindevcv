import type { Locale } from "@/i18n/routing";

export type SkillGroupKey =
  | "frontend"
  | "backend"
  | "databases"
  | "mobile"
  | "devops";

export interface SkillGroup {
  group: SkillGroupKey;
  skills: string[];
}

export const skills: SkillGroup[] = [
  {
    group: "frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Angular",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    group: "backend",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "Java",
      "Spring Boot",
      "Laravel",
      "REST APIs",
    ],
  },
  {
    group: "databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "SQL Server"],
  },
  {
    group: "mobile",
    skills: ["React Native", "Flutter", "Ionic"],
  },
  {
    group: "devops",
    skills: [
      "Conocimientos de AWS Cloud (EC2, Lambda, RDS, VPC)",
      "Conocimientos de Infrastructure as Code (Terraform y CloudFormation)",
      "Git",
      "GitHub",
      "Docker",
      "CI/CD",
      "Linux",
      "Kubernates",
      "Netlify",
      "Vercel",
      "Tomcat",
    ],
  },
];

export interface ExperienceContent {
  role: string;
  company: string;
  description: string;
  highlights?: string[];
}

export interface Experience {
  id: string;
  /** YYYY-MM */
  start: string;
  /** YYYY-MM or "present" */
  end: string | "present";
  content: Record<Locale, ExperienceContent>;
}

export const experiences: Experience[] = [
  {
    id: "devintech",
    start: "2025-01",
    end: "2026-05",
    content: {
      es: {
        role: "Desarrollador Full-Stack Senior",
        company: "DEVINTECH",
        description:
          "Clientes: Grupo Q / CrediQ y Localiza S.A. de C.V. Desarrollo full-stack de apps móviles y web para el sector automotriz, fintech y rastreo de flotas.",
        highlights: [
          "Diseñé e implementé la autenticación biométrica (huella digital) en la app móvil principal de Grupo Q, mejorando la seguridad para cientos de usuarios.",
          "Desarrollé el flujo digital completo de solicitud de cotización de vehículos, permitiendo realizar todo el proceso en línea.",
          "Construí un plugin de métricas e historial para dar seguimiento al desempeño de los vendedores de vehículos usados.",
          "Amplié CXPS, el sistema de rastreo GPS de flotas de Localiza, con nuevas funcionalidades web y móviles.",
          "Administración y despliegue de aplicaciones en servidores Linux",
          "Creación y mantenimiento de contenedores Docker para entornos de desarrollo y producción",
          "Uso de Git y GitHub para control de versiones y flujos colaborativos",
          "Participación en procesos de integración y despliegue continuo (CI/CD)",
        ],
      },
      en: {
        role: "Senior Full-Stack Developer",
        company: "DEVINTECH",
        description:
          "Clients: Grupo Q / CrediQ and Localiza S.A. de C.V. Full-stack development of mobile and web apps for the automotive, fintech and fleet-tracking sectors.",
        highlights: [
          "Designed and shipped biometric (fingerprint) authentication in Grupo Q's main mobile app, improving security for hundreds of users.",
          "Built the complete digital vehicle quote-request flow, letting users complete the whole process online.",
          "Created a metrics and history plugin to track used-car salespeople performance.",
          "Extended CXPS, Localiza's GPS fleet-tracking system, with new web and mobile features.",
          "Participated in continuous integration and deployment (CI/CD) processes",
          "Implemented and maintained Docker containers for development and production environments",
          "Managed Linux server deployments and application hosting",
        ],
      },
    },
  },
  {
    id: "league",
    start: "2024-05",
    end: "2024-12",
    content: {
      es: {
        role: "Desarrollador Full-Stack",
        company: "LEAGUE",
        description:
          "Maquila de indumentaria para universidades de EE.UU. Tecnología interna, cumplimiento fiscal y automatización de procesos.",
        highlights: [
          "Desarrollé el sistema de facturación electrónica exigido por el gobierno, asegurando el cumplimiento fiscal de la empresa.",
          "Construí una aplicación web de impresión de carnets que da servicio a 800 empleados.",
          "Entregué herramientas internas y dashboards con Node.js, React y Laravel sobre SQL Server para automatizar procesos.",
          "Despliegue y mantenimiento de aplicaciones sobre clústeres Kubernetes",
          "Monitoreo y soporte de servicios desplegados en infraestructura Linux",
        ],
      },
      en: {
        role: "Full-Stack Developer",
        company: "LEAGUE",
        description:
          "Apparel manufacturer for U.S. universities. Internal tooling, tax compliance and process automation.",
        highlights: [
          "Built the government-mandated electronic invoicing system, ensuring the company's tax compliance.",
          "Built a badge-printing web app serving 800 employees.",
          "Delivered internal tools and dashboards with Node.js, React and Laravel on SQL Server to automate processes.",
          "Monitored and supported services deployed on Linux infrastructure",
          "Implemented CI/CD pipelines for automated testing and deployment",
        ],
      },
    },
  },
  {
    id: "banco-agricola",
    start: "2023-11",
    end: "2024-03",
    content: {
      es: {
        role: "Analista Programador",
        company: "Óptimas Consultores · Banco Agrícola",
        description:
          "Migraciones críticas de base de datos para banca, con cero pérdida de datos.",
        highlights: [
          "Mejoré los tiempos de respuesta de consultas backend migrando la base de datos de Oracle 11g a 12c, en una app que da servicio a miles de usuarios bancarios.",
          "Ejecuté la migración de Oracle Forms (6i → 12.2) garantizando cero pérdida de datos.",
        ],
      },
      en: {
        role: "Analyst / Developer",
        company: "Óptimas Consultores · Banco Agrícola",
        description:
          "Critical database migrations for the banking sector, with zero data loss.",
        highlights: [
          "Improved backend query response times by migrating the database from Oracle 11g to 12c on an app serving thousands of banking users.",
          "Ran the Oracle Forms migration (6i → 12.2) guaranteeing zero data loss.",
        ],
      },
    },
  },
  {
    id: "webhelp-claro",
    start: "2021-08",
    end: "2023-04",
    content: {
      es: {
        role: "Especialista en Redes y Soporte Técnico",
        company: "WebHelp · Claro",
        description:
          "Mantuve la red del Data Center, configuración de VLANs, subredes y firewalls de infraestructura de TI (base directa de conceptos de redes en la nube como VPC, subredes y Security Groups), asegurando conectividad confiable para operaciones empresariales",
      },
      en: {
        role: "Network & IT Support Specialist",
        company: "WebHelp · Claro",
        description:
          "Maintained the Data Center network, configured VLANs, subnets and firewalls for IT infrastructure (direct foundation for cloud networking concepts like VPC, subnets and Security Groups), ensuring reliable connectivity for business operations.",
      },
    },
  },
  {
    id: "xuret",
    start: "2020-09",
    end: "2021-03",
    content: {
      es: {
        role: "Analista Programador",
        company: "Xuret",
        description:
          "Rediseñé interfaces de aplicaciones web mejorando la UX y agregué funcionalidades al software de procesos de venta con Java, Node.js, MySQL y Oracle.",
      },
      en: {
        role: "Analyst / Developer",
        company: "Xuret",
        description:
          "Redesigned web app interfaces improving UX and added features to sales-process software with Java, Node.js, MySQL and Oracle.",
      },
    },
  },
];
