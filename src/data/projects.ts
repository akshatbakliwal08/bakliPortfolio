import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Visualization of Software Metrics",
    href: "/projects",
    tags: ["Java", "JavaFX", "GitLabs"],
    image: {
      LIGHT: "/images/projects/metrics.png",
      DARK: "/images/projects/metrics.png",
    },
  },
  {
    index: 1,
    title: "Task Manager",
    href: "/projects",
    tags: ["Nodejs", "MongoDB", "REST-API", "Mongoose"],
    image: {
      LIGHT: "/images/projects/manager.png",
      DARK: "/images/projects/manager.png",
    },
  },
  {
    index: 2,
    title: "HappyFace",
    href: "/projects",
    tags: ["Reactjs", "Stripe", "Celo", "Smart Contracts"],
    image: {
      LIGHT: "/images/projects/happyFace.png",
      DARK: "/images/projects/happyFace.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Visualization of Software Metrics",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: ["/images/projects/metrics.png"],
    description:
      "Developed a JavaFX application to visualize key project metrics such as Burndown, Task Churn, and Defect Density through dynamic graphs integrated with the Taiga API.",
  },
  {
    name: "Task Manager",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: ["/images/projects/manager.png"],
    description:
      "Engineered a robust REST API with MongoDB's Mongoose, NodeJS, and ExpressJS, incorporating JWT for authentication and covering critical CRUD operations, with full test coverage and minimal defects.",
  },
  {
    name: "HappyFace",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: ["/images/projects/happyFace.png"],
    description:
      "Engineered a cross-platform React Native application on the Celo blockchain with Solidity-based smart contracts, enabling fee-free, borderless fundraising, secure project creation, transparent contribution tracking, automated payouts, and optimized state management using Web3 libraries for a scalable and decentralized crowdfunding experience.",
  },
];
