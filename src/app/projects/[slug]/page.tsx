import { notFound } from "next/navigation";

import ProjectDetails from "@/components/projects/ProjectDetails";

const validProjects = [
  "studynova-ai",
  "vertexos",
  "bourhan-teacher-ai",
] as const;

type ProjectSlug = (typeof validProjects)[number];

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
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