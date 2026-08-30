import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProjectDetails from "@/components/projects/ProjectDetails";

const validProjects = [
  "studynova-ai",
  "vertexos",
  "bourhan-teacher-ai",
  "staylik",
] as const;

type ProjectSlug = (typeof validProjects)[number];

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const projectSEO = {
  "studynova-ai": {
    title: "StudyNova AI — AI Educational Assistant",
    description:
      "StudyNova AI is an intelligent educational assistant built to help students solve questions, analyze images, summarize documents, translate content, and learn faster.",
  },

  vertexos: {
    title: "VertexOS — Business Management System",
    description:
      "VertexOS is a modern internal business management platform built to manage clients, projects, payments, maintenance, notes, analytics, and company operations.",
  },

  "bourhan-teacher-ai": {
    title: "Bourhan Teacher AI — Educational Telegram Platform",
    description:
      "Bourhan Teacher AI is an educational management platform built inside Telegram, connecting students and teachers through assignments, grades, announcements, and educational files.",
  },

  staylik: {
    title: "STAYLIK — Luxury Streetwear E-Commerce",
    description:
      "STAYLIK is a modern luxury streetwear e-commerce experience built with a bold visual identity and a fast, responsive shopping experience.",
  },
} as const;

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!(slug in projectSEO)) {
    return {};
  }

  const project = projectSEO[slug as keyof typeof projectSEO];

  return {
    title: project.title,
    description: project.description,

    alternates: {
      canonical: `/projects/${slug}`,
    },

    openGraph: {
      type: "website",
      title: `${project.title} | Vertex Labs`,
      description: project.description,
      url: `/projects/${slug}`,
      siteName: "Vertex Labs",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${project.title} | Vertex Labs`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Vertex Labs`,
      description: project.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  if (!validProjects.includes(slug as ProjectSlug)) {
    notFound();
  }

  return <ProjectDetails slug={slug as ProjectSlug} />;
}