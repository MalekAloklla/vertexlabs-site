"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Layers3,
  Sparkles,
  Code2,
  ExternalLink,
} from "lucide-react";

import { useLanguage } from "@/i18n/LanguageProvider";
import { useTranslation } from "@/i18n/useTranslation";

const projectData = {
  "studynova-ai": {
    number: "01",
    image: "/projects/studynova.jpg",
    icon: BrainCircuit,
  },

  vertexos: {
    number: "02",
    image: "/projects/vertexos.png",
    icon: Layers3,
  },

  "bourhan-teacher-ai": {
    number: "03",
    image: "/projects/bourhan.jpg",
    icon: Sparkles,
  },
} as const;

type ProjectSlug = keyof typeof projectData;

interface ProjectDetailsProps {
  slug: ProjectSlug;
}

export default function ProjectDetails({
  slug,
}: ProjectDetailsProps) {
  const { isArabic } = useLanguage();
  const { t } = useTranslation();

  const project = projectData[slug];

  const content = t.projectDetails[slug];

  const page = t.projectPage;

  const Icon = project.icon;

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen overflow-hidden bg-[#03060b] text-white selection:bg-blue-500/30"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-350px] h-[750px] w-[750px] -translate-x-1/2 rounded-full bg-blue-600/[0.08] blur-[160px]" />

        <div className="absolute right-[-300px] top-[20%] h-[650px] w-[650px] rounded-full bg-blue-900/[0.07] blur-[160px]" />

        <div className="absolute bottom-[-300px] left-[-300px] h-[600px] w-[600px] rounded-full bg-blue-800/[0.06] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <nav className="relative z-50 mx-auto flex h-24 w-full max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link
          href="/#projects"
          className="group flex items-center gap-3 text-sm text-white/45 transition-colors duration-300 hover:text-white"
        >
          <ArrowLeft
            size={17}
            className={`transition-transform duration-300 ${
              isArabic
                ? "group-hover:translate-x-1 rotate-180"
                : "group-hover:-translate-x-1"
            }`}
          />

          <span>{page.backToProjects}</span>
        </Link>

        <div className="flex items-center gap-3">
          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-white/20 sm:block">
            {page.vertexLabs}
          </span>

          <span className="h-1 w-1 rounded-full bg-blue-500/50" />

          <span className="font-mono text-[10px] tracking-[0.15em] text-white/25 sm:text-xs">
            {page.project.toUpperCase()} {project.number}
          </span>
        </div>
      </nav>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative mx-auto w-full max-w-[1400px] px-6 pb-20 pt-12 lg:px-10 lg:pb-28 lg:pt-16">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* LEFT */}

          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
                {content.category}
              </span>
            </div>

            <h1 className="mt-8 max-w-3xl text-5xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-7xl xl:text-[5.5rem] xl:leading-[0.95]">
              {content.title}
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
              {content.description}
            </p>

            {/* TAGS */}

            <div className="mt-8 flex max-w-xl flex-wrap gap-2">
              {t.projects[slug === "studynova-ai"
                ? "studynova"
                : slug === "vertexos"
                  ? "vertexos"
                  : "bourhan"].tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-[10px] uppercase tracking-[0.12em] text-white/40 transition-all duration-300 hover:border-blue-500/25 hover:bg-blue-500/[0.04] hover:text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}

          <div className="relative">
  <div className="pointer-events-none absolute -inset-16 rounded-full bg-blue-600/[0.07] blur-[120px]" />

  <div className="group relative mx-auto w-full max-w-[620px] overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#070b12] shadow-2xl shadow-black/40">
    <div className="relative w-full">
      <Image
        src={project.image}
        alt={`${content.title} preview`}
        width={705}
        height={431}
        priority
        sizes="(max-width: 1024px) 100vw, 620px"
        className="h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03060b]/40 via-transparent to-transparent" />

      <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/[0.08]" />

      <div
        className={`absolute bottom-5 flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2.5 backdrop-blur-xl ${
          isArabic ? "right-5" : "left-5"
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

        <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">
          {content.shortTitle}
        </span>
      </div>
    </div>
  </div>
</div>
</div>
      </section>

      {/* =========================================================
          PROJECT META
      ========================================================= */}

      <section className="border-y border-white/[0.06] bg-[#050912]/60">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-2 lg:grid-cols-4">
          <div className="border-b border-white/[0.06] px-6 py-7 sm:px-10 lg:border-b-0 lg:border-e">
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/20">
              {page.project}
            </p>

            <p className="mt-2 font-mono text-sm text-white/60">
              {project.number}
            </p>
          </div>

          <div className="border-b border-white/[0.06] px-6 py-7 sm:px-10 lg:border-b-0 lg:border-e">
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/20">
              {page.category}
            </p>

            <p className="mt-2 text-sm text-white/60">
              {content.category}
            </p>
          </div>

          <div className="px-6 py-7 sm:px-10 lg:border-e lg:border-white/[0.06]">
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/20">
              {page.technologies}
            </p>

            <p className="mt-2 text-sm text-white/60">
              {content.technologies.length}{" "}
              {page.technologiesCount}
            </p>
          </div>

          <div className="border-l border-white/[0.06] px-6 py-7 sm:px-10">
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/20">
              {page.studio}
            </p>

            <p className="mt-2 text-sm text-white/60">
              {page.vertexLabs}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}

      <section className="mx-auto w-full max-w-[1400px] px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          {/* LEFT */}

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />

              <span className="text-xs uppercase tracking-[0.25em] text-blue-400">
                {page.aboutProject}
              </span>
            </div>

            <h2 className="mt-7 max-w-md text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              {page.builtToSolve}

              <br />

              <span className="text-white/30">
                {page.realProblems}
              </span>
            </h2>
          </div>

          {/* RIGHT */}

          <div>
            <p className="max-w-3xl text-lg leading-8 text-white/50 sm:text-xl sm:leading-9">
              {content.longDescription}
            </p>

            {/* FEATURES */}

            <div className="mt-12 grid gap-3 sm:grid-cols-2">
              {content.features.map((feature) => (
                <div
                  key={feature}
                  className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/20 hover:bg-blue-500/[0.03]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
                    <Check
                      size={15}
                      className="text-blue-400"
                    />
                  </div>

                  <span className="text-sm text-white/50 transition-colors group-hover:text-white/75">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LARGE PROJECT SHOWCASE
      ========================================================= */}

      <section className="mx-auto w-full max-w-[1400px] px-6 pb-28 lg:px-10 lg:pb-36">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-[#070b12]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.06] blur-[140px]" />

          {/* Header */}

          <div className="relative flex flex-col justify-between gap-5 border-b border-white/[0.06] px-7 py-7 sm:flex-row sm:items-center sm:px-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-blue-400">
                {page.showcase}
              </p>

              <p className="mt-2 text-sm text-white/30">
                {page.closerLook} {content.shortTitle}.
              </p>
            </div>

            <span className="font-mono text-[10px] tracking-[0.15em] text-white/20">
              {project.number} / {content.category}
            </span>
          </div>

          {/* Image */}

          <div className="relative p-3 sm:p-5 lg:p-7">
  <div className="group relative mx-auto w-full max-w-[900px] overflow-hidden rounded-[1.75rem] border border-white/[0.07]">
    <div className="relative w-full">
      <Image
        src={project.image}
        alt={`${content.title} showcase`}
        width={705}
        height={431}
        sizes="(max-width: 1024px) 100vw, 900px"
        className="h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.08]" />
    </div>
  </div>
</div>
</div>
      </section>

      {/* =========================================================
          TECHNOLOGIES
      ========================================================= */}

      <section className="border-y border-white/[0.06] bg-[#050912]/60">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-24 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            {/* LEFT */}

            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-blue-500" />

                <span className="text-xs uppercase tracking-[0.25em] text-blue-400">
                  {page.technology}
                </span>
              </div>

              <h2 className="mt-7 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                {page.builtWith}

                <span className="text-white/35">
                  {" "}
                  {page.rightTools}
                </span>
              </h2>
            </div>

            {/* RIGHT */}

            <div className="grid gap-3 sm:grid-cols-2">
              {content.technologies.map((technology) => (
                <div
                  key={technology}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all duration-300 hover:border-blue-500/20 hover:bg-blue-500/[0.03]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025]">
                    <Code2
                      size={17}
                      className="text-blue-400"
                    />
                  </div>

                  <span className="text-sm text-white/50 transition-colors group-hover:text-white/75">
                    {technology}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.07] blur-[150px]" />

        <div className="relative mx-auto max-w-[1000px] px-6 py-32 text-center lg:py-40">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
            {page.vertexLabs}
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl text-5xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            {page.idea}

            <span className="text-white/30">
              {" "}
              {page.likeThis}
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/40">
            {page.ctaDescription}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            {/* START PROJECT */}

            <Link
              href="/#contact"
              className="group flex h-14 items-center justify-center gap-3 rounded-full bg-white px-8 text-sm font-medium text-black transition-all duration-300 hover:bg-blue-500 hover:text-white"
            >
              {page.startProject}

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            {/* MORE PROJECTS */}

            <Link
              href="/#projects"
              className="group flex h-14 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.02] px-8 text-sm text-white/60 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white"
            >
              {page.viewMoreProjects}

              <ExternalLink
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col justify-between gap-5 px-6 py-10 text-xs text-white/25 sm:flex-row sm:items-center lg:px-10">
          <p>
            © {new Date().getFullYear()} Vertex Labs.{" "}
            {page.allRightsReserved}
          </p>

          <Link
            href="/"
            className="transition-colors duration-300 hover:text-white"
          >
            {page.footerTagline}
          </Link>
        </div>
      </footer>
    </main>
  );
}