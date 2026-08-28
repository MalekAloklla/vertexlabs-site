"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Layers3,
  Sparkles,
  ExternalLink,
} from "lucide-react";

import { useLanguage } from "@/i18n/LanguageProvider";
import { useTranslation } from "@/i18n/useTranslation";

const projects = [
  {
    number: "01",
    slug: "studynova-ai",
    translationKey: "studynova",
    icon: BrainCircuit,
    accent: "from-blue-500/20 via-blue-500/5 to-transparent",
  },
  {
    number: "02",
    slug: "vertexos",
    translationKey: "vertexos",
    icon: Layers3,
    accent: "from-indigo-500/20 via-blue-500/5 to-transparent",
  },
  {
    number: "03",
    slug: "bourhan-teacher-ai",
    translationKey: "bourhan",
    icon: Sparkles,
    accent: "from-cyan-500/20 via-blue-500/5 to-transparent",
  },
] as const;

export default function Projects() {
  const { isArabic } = useLanguage();
const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="relative border-t border-white/[0.06]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/[0.035] blur-[140px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-36">

        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />

              <span className="text-xs uppercase tracking-[0.25em] text-blue-400">
                {t.projects.eyebrow}
              </span>
            </div>

            <h2 className="mt-7 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {t.projects.title1}
              <br />
              <span className="text-white/40">
                {t.projects.title2}
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="flex items-end">
            <p className="max-w-xl text-base leading-7 text-white/40">
              {t.projects.description}
            </p>
          </div>
        </div>

        {/* =========================================================
            PROJECTS
        ========================================================= */}

        <div className="mt-16 space-y-5">
          {projects.map((project, index) => {
            const Icon = project.icon;

            const projectTranslation =
              t.projects[project.translationKey];

            return (
              <motion.article
                key={project.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#070b12] transition-all duration-500 hover:border-blue-500/25 hover:shadow-[0_0_60px_rgba(37,99,235,0.06)]"
              >

                {/* =====================================================
                    HOVER GLOW
                ===================================================== */}

                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${project.accent} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
                />

                {/* =====================================================
                    DECORATIVE GRID
                ===================================================== */}

                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.025]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "55px 55px",
                  }}
                />

                <div className="relative grid gap-10 p-7 sm:p-9 lg:grid-cols-[110px_1fr_auto] lg:items-center lg:p-10">

                  {/* =====================================================
                      NUMBER
                  ===================================================== */}

                  <div className="hidden lg:block">
                    <span className="font-mono text-sm text-blue-500/60">
                      {project.number}
                    </span>
                  </div>

                  {/* =====================================================
                      MAIN CONTENT
                  ===================================================== */}

                  <div>
                    <div className="flex items-start gap-5">

                      {/* Icon */}

                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/[0.09] bg-white/[0.035] transition-all duration-500 group-hover:border-blue-500/30 group-hover:bg-blue-500/10">
                        <Icon
                          size={23}
                          className="text-blue-400 transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      {/* Title */}

                      <div>
                        <div className="flex items-center gap-3">

                          {/* Mobile number */}

                          <span className="font-mono text-[10px] tracking-[0.2em] text-blue-400/70 lg:hidden">
                            {project.number}
                          </span>

                          {/* Category */}

                          <span
                            className={`text-[10px] font-medium uppercase tracking-[0.22em] text-white/30 ${
                              isArabic
                                ? "tracking-normal"
                                : ""
                            }`}
                          >
                            {projectTranslation.category}
                          </span>
                        </div>

                        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                          {projectTranslation.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}

                    <p className="mt-7 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
                      {projectTranslation.description}
                    </p>

                    {/* =================================================
                        TAGS
                    ================================================= */}

                    <div className="mt-7 flex flex-wrap gap-2">
                      {projectTranslation.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-white/35 transition-colors group-hover:border-white/[0.12] group-hover:text-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* =====================================================
                      VIEW PROJECT BUTTON
                  ===================================================== */}

                  <div className="lg:justify-self-end">
                    <Link
                      href={`/projects/${project.slug}`}
                      aria-label={`${t.projects.viewProject} ${projectTranslation.title}`}
                      className="group/button relative flex h-12 items-center gap-3 overflow-hidden rounded-full border border-white/[0.10] bg-white/[0.025] pl-5 pr-2 text-xs font-medium text-white/55 transition-all duration-500 hover:border-blue-400/40 hover:bg-blue-500/[0.10] hover:text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]"
                    >

                      {/* Button shine */}

                      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover/button:translate-x-full" />

                      {/* Text */}

                      <span className="relative z-10 whitespace-nowrap">
                        {t.projects.viewProject}
                      </span>

                      {/* Arrow */}

                      <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.04] transition-all duration-500 group-hover/button:border-blue-400/30 group-hover/button:bg-blue-500/15">
                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-500 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                        />
                      </span>
                    </Link>
                  </div>
                </div>

                {/* =====================================================
                    BOTTOM LINE
                ===================================================== */}

                <div
                  className={`absolute bottom-0 h-px w-0 bg-blue-500/60 transition-all duration-700 group-hover:w-24 ${
                    isArabic ? "right-10" : "left-10"
                  }`}
                />
              </motion.article>
            );
          })}
        </div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center"
        >

          {/* Text */}

<div>
  <p className="text-sm text-white/40">
    {t.projects.haveProject}
  </p>

  <p className="mt-1 text-xs text-white/20">
    {t.projects.buildTogether}
  </p>
</div>

          {/* CTA */}

          <Link
            href="#contact"
            className="group flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-white"
          >
            {t.projects.startProject}

            <ExternalLink
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}