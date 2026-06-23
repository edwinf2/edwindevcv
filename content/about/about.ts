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
      "Angular",
      "VueJs",
      "TypeScript",
      "JavaScript (ES6+)",
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
      "Conocimientos de Microsoft Azure (App Service, Functions, SQL Database, Virtual Network)",
      "Conocimientos de Infrastructure as Code (Terraform y CloudFormation)",
      "Git",
      "GitHub",
      "Docker",
      "Kubernates",
      "Azure DevOps",
      "CI/CD",
      "Linux",
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
          "Diseñé e implementé autenticación biométrica (huella digital y reconocimiento facial) en la app móvil principal de Grupo Q usando Ionic, posteriormente Flutter, integrando las APIs nativas de Android y iOS y el backend con Java/SpringBoot; reforcé la seguridad del inicio de sesión y reduje la fricción de acceso para los usuarios.",
          "Desarrollé de extremo a extremo el flujo digital de cotización y solicitud de vehículos en la app de negociaciones (frontend en Ionic y Angular, APIs REST y servicios en Java/Spring Boot), integrando reglas de negocio, validaciones y consumo de servicios internos para que el cliente completara todo el proceso en línea sin intervención manual.",
          "Construí un módulo de métricas e historial de desempeño para los vendedores de vehículos usados, con frontend en Angular y APIs en Laravel sobre base de datos relacional (PostgreSQL), generando reportes y dashboards que dieron a la gerencia visibilidad del rendimiento comercial en tiempo real.",
          "Agregué nuevas funcionalidades a CXPS, el sistema de rastreo GPS de flotas de Localiza, trabajando sobre aplicaciones web Thymeleaf conectadas a APIs REST con Java/SpringBoot, y entregué mejoras continuas en productos en producción dentro de un equipo remoto y multicliente.",
          "Desplegué y administré aplicaciones en servidores Linux (configuración de Nginx/Tomcat como reverse proxy, variables de entorno, certificados y servicios systemd), asegurando estabilidad y disponibilidad de los entornos de desarrollo y producción.",
          "Contenericé aplicaciones con Docker (Dockerfiles optimizados multi-stage y orquestación local con Docker Compose para app y base de datos), estandarizando los entornos de desarrollo y producción y eliminando inconsistencias entre máquinas del equipo.",
          "Gestioné el control de versiones con Git y GitHub aplicando flujos de ramas (feature branches y Pull Requests), revisión de código entre pares y resolución de conflictos en un equipo distribuido.",
          "Participé en pipelines de integración y despliegue continuo (CI/CD) que automatizaban build, pruebas y despliegue al hacer push al repositorio, reduciendo el trabajo manual y acelerando la entrega de nuevas versiones a producción.",
        ],
      },
      en: {
        role: "Senior Full-Stack Developer",
        company: "DEVINTECH",
        description:
          "Clients: Grupo Q / CrediQ and Localiza S.A. de C.V. Full-stack development of mobile and web apps for the automotive, fintech and fleet-tracking sectors.",
        highlights: [
          "Designed and implemented biometric authentication (fingerprint and facial recognition) in Grupo Q's main mobile app using Ionic, later Flutter, integrating native Android and iOS APIs and the backend with Java/Spring Boot; strengthened login security and reduced access friction for users.",
          "Developed end-to-end the digital vehicle quotation and request flow in the negotiations app (frontend in Ionic and Angular, REST APIs and services in Java/Spring Boot), integrating business rules, validations, and internal service consumption so the client could complete the entire process online without manual intervention.",
          "Built a metrics and performance-history module for used-car salespeople, with an Angular frontend and Laravel APIs on a relational database (PostgreSQL), generating reports and dashboards that gave management real-time visibility into commercial performance.",
          "Added new features to CXPS, Localiza's fleet GPS tracking system, working on Thymeleaf web applications connected to REST APIs with Java/Spring Boot, and delivered continuous improvements to production products within a remote, multi-client team.",
          "Deployed and managed applications on Linux servers (Nginx/Tomcat configuration as a reverse proxy, environment variables, certificates, and systemd services), ensuring stability and availability of development and production environments.",
          "Containerized applications with Docker (optimized multi-stage Dockerfiles and local orchestration with Docker Compose for app and database), standardizing development and production environments and eliminating inconsistencies between team machines.",
          "Managed version control with Git and GitHub applying branching workflows (feature branches and Pull Requests), peer code review, and conflict resolution in a distributed team.",
          "Participated in CI/CD (continuous integration and deployment) pipelines that automated build, testing, and deployment on push to the repository, reducing manual work and accelerating the delivery of new versions to production.",
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
          "Desarrollé el sistema de facturación electrónica exigido por el gobierno (frontend con ReactJs y backend en Node.js sobre SQL Server, generación y firma de documentos tributarios e integración con el servicio del Ministerio de Hacienda), asegurando el cumplimiento fiscal de la empresa y eliminando el proceso manual de facturación.",
          "Construí una aplicación web (React en el frontend y Node.js en el backend) para la generación e impresión de carnets de identificación que da servicio a 800 empleados, automatizando un proceso que antes era manual.",
          "Desarrollé herramientas internas y dashboards de métricas de negocio con Node.js, React y Laravel sobre SQL Server, integrando consultas optimizadas y visualizaciones que automatizaron reportes manuales y dieron soporte a la toma de decisiones del área financiera.",
          "Desplegué y di mantenimiento a aplicaciones sobre clústeres Kubernetes (definición de Deployments, Services y ConfigMaps en manifiestos YAML, escalado de réplicas y actualizaciones sin downtime), garantizando disponibilidad de los servicios internos.",
          "Monitoreé y di soporte a servicios desplegados en infraestructura Linux, revisando logs, uso de recursos y métricas de los contenedores para detectar y resolver incidencias antes de que afectaran a los usuarios.",
        ],
      },
      en: {
        role: "Full-Stack Developer",
        company: "LEAGUE",
        description:
          "Apparel manufacturer for U.S. universities. Internal tooling, tax compliance and process automation.",
        highlights: [
          "Developed the government-mandated electronic invoicing system (frontend with React.js and backend in Node.js on SQL Server, generation and signing of tax documents and integration with the Ministry of Finance service), ensuring the company's tax compliance and eliminating the manual invoicing process.",
          "Built a web application (React on the frontend and Node.js on the backend) for the generation and printing of ID cards serving 800 employees, automating a previously manual process.",
          "Developed internal tools and business-metrics dashboards with Node.js, React, and Laravel on SQL Server, integrating optimized queries and visualizations that automated manual reports and supported decision-making for the finance area.",
          "Deployed and maintained applications on Kubernetes clusters (defining Deployments, Services, and ConfigMaps in YAML manifests, scaling replicas, and zero-downtime updates), ensuring availability of internal services.",
          "Monitored and supported services deployed on Linux infrastructure, reviewing logs, resource usage, and container metrics to detect and resolve incidents before they affected users.",
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
          "Apoyé a la migración de la base de datos Oracle de 11g a 12c en una aplicación bancaria que da servicio a miles de usuarios, optimizando consultas PL/SQL e índices y mejorando de forma medible los tiempos de respuesta del backend, con cero interrupción del servicio.",
          "Ejecuté la migración de Oracle Forms (6i a 12.2), validando la compatibilidad de los formularios y la lógica de negocio y garantizando cero pérdida de datos durante todo el proceso.",
        ],
      },
      en: {
        role: "Analyst / Developer",
        company: "Óptimas Consultores · Banco Agrícola",
        description:
          "Critical database migrations for the banking sector, with zero data loss.",
        highlights: [
          "Supported the migration of the Oracle database from 11g to 12c in a banking application serving thousands of users, optimizing PL/SQL queries and indexes and measurably improving backend response times, with zero service interruption.",
          "Executed the migration of Oracle Forms (6i to 12.2), validating form compatibility and business logic and ensuring zero data loss throughout the process.",
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
          "Configuración de VLANs, subredes y firewalls de infraestructura de TI (base directa de conceptos de redes en la nube como VPC, subredes y Security Groups)",
        highlights: [
          "Mantuve la red del Data Center, configuración de VLANs, subredes y firewalls de infraestructura de TI (base directa de conceptos de redes en la nube como VPC, subredes y Security Groups), asegurando conectividad confiable para operaciones empresariales.",
          "Brindé soporte técnico y monitoreo de la infraestructura y los servicios de red, diagnosticando y resolviendo incidencias de conectividad para mantener la continuidad operativa de la cuenta."
        ]
      },
      en: {
        role: "Network & IT Support Specialist",
        company: "WebHelp · Claro",
        description:
          "Configuring VLANs, subnets, and IT infrastructure firewalls (directly based on cloud networking concepts such as VPCs, subnets, and Security Groups).",
        highlights: [
          "Maintained the Data Center network, configuring VLANs, subnets, and IT infrastructure firewalls (a direct foundation for cloud networking concepts such as VPC, subnets, and Security Groups), ensuring reliable connectivity for business operations.",
          "Provided technical support and monitoring of network infrastructure and services, diagnosing and resolving connectivity incidents to maintain the operational continuity of the account."
        ]
      },
    },
  },
  {
    id: "xuret",
    start: "2019-01",
    end: "2021-03",
    content: {
      es: {
        role: "Analista Programador",
        company: "Xuret",
        description:
          "Rediseñé interfaces de aplicaciones web mejorando la UX y agregué funcionalidades al software de procesos de venta con Java, Node.js, MySQL y Oracle.",
        highlights: [
          "Rediseñé las interfaces de aplicaciones web con JavaScript, HTML5 y CSS3, modernizando la experiencia de usuario (UX) y mejorando la usabilidad y el aspecto visual de los productos del cliente.",
          "Amplié el software de procesos de venta de una empresa externa, desarrollando nuevas funcionalidades en Java y Node.js con bases de datos MySQL y Oracle, e integrando la lógica de negocio con los sistemas existentes del cliente."
        ]
      },
      en: {
        role: "Analyst / Developer",
        company: "Xuret",
        description:
          "Redesigned web app interfaces improving UX and added features to sales-process software with Java, Node.js, MySQL and Oracle.",
        highlights: [
          "Redesigned web application interfaces with JavaScript, HTML5, and CSS3, modernizing the user experience (UX) and improving the usability and visual appearance of the client's products.",
          "Extended the sales-process software of an external company, developing new features in Java and Node.js with MySQL and Oracle databases, and integrating business logic with the client's existing systems."
        ]
      },
    },
  },
];
