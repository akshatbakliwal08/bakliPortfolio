import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
// import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Weather Application",
    href: "/projects",
    tags: ["Nodejs", "Expressjs", "MapBox API"],
    image: {
      LIGHT: "/images/projects/jsontreeLight.webp",
      DARK: "/images/projects/jsontreeDark.webp",
    },
  },
  {
    index: 1,
    title: "Task Manager API",
    href: "/projects",
    tags: ["Nodejs", "MongoDB", "REST-API", "Mongoose"],
    image: {
      LIGHT: "/images/projects/manyGamesLight.webp",
      DARK: "/images/projects/manyGamesDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Weather Application",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/jsontreeLight.webp",
      "/images/projects/jsontreeDark.webp",
    ],
    description:
      "Developed a scalable application using NodeJS to gather real-time meteorological data, ensuring high accuracy and user satisfaction.",
    sourceCodeHref: "https://github.com/akshatbakliwal08/weather-website",
    liveWebsiteHref: "https://github.com/akshatbakliwal08/weather-website",
  },
  {
    name: "ask Manager API",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/kanbanLight.webp",
      "/images/projects/kanbanDark.webp",
      "/images/projects/kanbanCardLight.webp",
    ],
    description:
      "Engineered a robust REST API with MongoDB's Mongoose, NodeJS, and ExpressJS, incorporating JWT for authentication and covering critical CRUD operations, with full test coverage and minimal defects.",
    sourceCodeHref: "https://github.com/akshatbakliwal08/Task-Manager-API",
    liveWebsiteHref: "https://github.com/akshatbakliwal08/Task-Manager-API",
  },
];
