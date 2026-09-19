"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Building2,
  ExternalLink,
  Layers3,
  LockKeyhole,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";

import { useLanguage } from "@/i18n/LanguageProvider";
import { useTranslation } from "@/i18n/useTranslation";

const projects = [
  {
    number: "01",
    slug: "studynova-ai",
    translationKey: "studynova",
    icon: BrainCircuit,
    image: "/projects/studynova.jpg",
    accent: "from-blue-500/25 via-blue-500/5 to-transparent",
  },
  {
    number: "02",
    slug: "vertexos",
    translationKey: "vertexos",
    icon: Layers3,
    image: "/projects/vertexos.png",
    accent: "from-indigo-500/25 via-indigo-500/5 to-transparent",
  },
  {
    number: "03",
    slug: "bourhan-teacher-ai",
    translationKey: "bourhan",
    icon: Sparkles,
    image: "/projects/bourhan.jpg",
    accent: "from-cyan-500/25 via-cyan-500/5 to-transparent",
  },
  {
    number: "04",
    slug: "staylik",
    translationKey: "staylik",
    icon: ShoppingBag,
    image: "/projects/staylik.png",
    accent: "from-amber-500/25 via-orange-500/5 to-transparent",
  },
  {
    number: "05",
    slug: "alasrar-al-thahabeya",
    translationKey: "alasrar",
    icon: Building2,
    image: "/projects/alasrar.png",
    accent: "from-slate-500/25 via-blue-500/5 to-transparent",
  },
] as const;

const telegramIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-[15px] w-[15px]"
    aria-hidden="true"
  >
    <path
      d="M21.5 3.5L18.2 20c-.25 1.17-.9 1.46-1.82.91l-5.03-3.71-2.43 2.34c-.27.27-.5.5-1.02.5l.36-5.12 9.32-8.42c.41-.36-.09-.56-.64-.2L5.42 13.07.48 11.52c-1.07-.34-1.09-1.07.22-1.58L20.02 2.5c.88-.33 1.65.2 1.48 1Z"
      fill="currentColor"
    />
  </svg>
);

export default function Projects() {
  const { isArabic } = useLanguage();
  const { t } = useTranslation();

  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showPrivateSystem, setShowPrivateSystem] = useState(false);

  const nextProject = () => {
    setDirection(1);
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const previousProject = () => {
    setDirection(-1);
    setCurrentProject(
      (prev) => (prev - 1 + projects.length) % projects.length,
    );
  };

  const project = projects[currentProject];
  const Icon = project.icon;
  const projectTranslation = t.projects[project.translationKey];

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/[0.06]"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/[0.035] blur-[150px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.018]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-36">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />

              <span className="text-xs uppercase tracking-[0.25em] text-blue-400">
                {t.projects.eyebrow}
              </span>
            </div>

            <h2 className="mt-7 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              {t.projects.title1}

              <br />

              <span className="text-white/35">
                {t.projects.title2}
              </span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-2xl text-base leading-7 text-white/40 sm:text-lg">
              {t.projects.description}
            </p>
          </div>
        </motion.div>

        {/* =========================================================
            PROJECT SHOWCASE
        ========================================================= */}

        <div className="relative mt-12 sm:mt-14">
          {/* Previous */}

          <button
            type="button"
            onClick={previousProject}
            aria-label="Previous project"
            className="absolute left-2 top-[42%] z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.10] bg-[#080d16]/90 text-white/40 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white sm:left-[-26px] sm:h-12 sm:w-12"
          >
            <ArrowLeft size={17} />
          </button>

          {/* Next */}

          <button
            type="button"
            onClick={nextProject}
            aria-label="Next project"
            className="absolute right-2 top-[42%] z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.10] bg-[#080d16]/90 text-white/40 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white sm:right-[-26px] sm:h-12 sm:w-12"
          >
            <ArrowRight size={17} />
          </button>

          <AnimatePresence
            mode="wait"
            initial={false}
            custom={direction}
          >
            <motion.article
              key={project.slug}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction > 0 ? 45 : -45,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: direction > 0 ? -45 : 45,
              }}
              transition={{
                duration: 0.42,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#070b12] shadow-2xl shadow-black/20"
            >
              {/* Accent glow */}

              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
              />

              {/* =====================================================
                  PROJECT IMAGE
              ===================================================== */}

              <div className="relative h-[210px] overflow-hidden border-b border-white/[0.07] bg-[#050912] sm:h-[300px] lg:h-[380px]">
                {/* Image */}

                <motion.div
                  initial={{ scale: 1.04 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.image}
                    alt={projectTranslation.title}
                    fill
                    priority={currentProject === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
                  />
                </motion.div>

                {/* Dark overlay */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b12] via-black/10 to-black/10" />

                {/* Blue tint */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] via-transparent to-transparent" />

                {/* Grid */}

                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.035]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "55px 55px",
                  }}
                />

                {/* Project number */}

                <div className="absolute left-5 top-5 flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-3.5 py-2 backdrop-blur-xl">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />

                  <span className="font-mono text-[9px] tracking-[0.2em] text-white/60">
                    PROJECT {project.number}
                  </span>
                </div>

                {/* Category */}

                <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/40 px-3.5 py-2 backdrop-blur-xl">
                  <span className="text-[8px] uppercase tracking-[0.2em] text-white/50">
                    {projectTranslation.category}
                  </span>
                </div>

                {/* Bottom image label */}

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.25em] text-blue-400">
                      Vertex Labs
                    </p>

                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl lg:text-3xl">
                      {projectTranslation.title}
                    </h3>
                  </div>

                  <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/50 backdrop-blur-xl sm:flex">
                    <Icon size={18} />
                  </div>
                </div>
              </div>

              {/* =====================================================
                  PROJECT INFO
              ===================================================== */}

              <div className="relative p-5 sm:p-7 lg:p-8">
                <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <div className="flex items-center gap-3">
                      <Icon
                        size={17}
                        className="text-blue-400 lg:hidden"
                      />

                      <span
                        className={`text-[10px] font-medium uppercase tracking-[0.22em] text-white/30 ${
                          isArabic ? "tracking-normal" : ""
                        }`}
                      >
                        {projectTranslation.category}
                      </span>
                    </div>

                    <p className="mt-5 max-w-3xl text-sm leading-7 text-white/40 sm:text-base">
                      {projectTranslation.description}
                    </p>

                    {/* Tags */}

                    <div className="mt-6 flex flex-wrap gap-2">
                      {projectTranslation.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[9px] uppercase tracking-[0.14em] text-white/35 transition-colors duration-300 group-hover:border-blue-500/15 group-hover:text-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* =================================================
                      ACTIONS
                  ================================================= */}

                  <div className="flex flex-wrap items-center gap-2.5 lg:justify-end">
                    {/* StudyNova */}

                    {project.slug === "studynova-ai" && (
                      <a
                        href="https://t.me/studynova_assistant_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open StudyNova AI Telegram Bot"
                        className="group/telegram relative flex h-11 items-center gap-2.5 overflow-hidden rounded-full border border-blue-500/20 bg-blue-500/[0.07] pl-4 pr-1.5 text-xs font-medium text-blue-300 transition-all duration-500 hover:border-blue-400/40 hover:bg-blue-500/[0.14] hover:text-white"
                      >
                        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover/telegram:translate-x-full" />

                        <span className="relative z-10 whitespace-nowrap">
                          Telegram Bot
                        </span>

                        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 transition-all duration-500 group-hover/telegram:border-blue-400/40 group-hover/telegram:bg-blue-500/20">
                          {telegramIcon}
                        </span>
                      </a>
                    )}

                    {/* Bourhan */}

                    {project.slug === "bourhan-teacher-ai" && (
                      <a
                        href="https://t.me/Bourhan_Bakhash_Teacher_AI_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open Bourhan Teacher AI Telegram Bot"
                        className="group/telegram relative flex h-11 items-center gap-2.5 overflow-hidden rounded-full border border-cyan-500/20 bg-cyan-500/[0.07] pl-4 pr-1.5 text-xs font-medium text-cyan-300 transition-all duration-500 hover:border-cyan-400/40 hover:bg-cyan-500/[0.14] hover:text-white"
                      >
                        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover/telegram:translate-x-full" />

                        <span className="relative z-10 whitespace-nowrap">
                          Telegram Bot
                        </span>

                        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10 transition-all duration-500 group-hover/telegram:border-cyan-400/40 group-hover/telegram:bg-cyan-500/20">
                          {telegramIcon}
                        </span>
                      </a>
                    )}

                    {/* VertexOS */}

                    {project.slug === "vertexos" && (
                      <button
                        type="button"
                        onClick={() => setShowPrivateSystem(true)}
                        aria-label="Open VertexOS System information"
                        className="group/system relative flex h-11 items-center gap-2.5 overflow-hidden rounded-full border border-indigo-500/20 bg-indigo-500/[0.07] pl-4 pr-1.5 text-xs font-medium text-indigo-300 transition-all duration-500 hover:border-indigo-400/40 hover:bg-indigo-500/[0.14] hover:text-white"
                      >
                        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover/system:translate-x-full" />

                        <span className="relative z-10 whitespace-nowrap">
                          System Web
                        </span>

                        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-indigo-400/20 bg-indigo-500/10">
                          <LockKeyhole
                            size={14}
                            className="text-indigo-300"
                          />
                        </span>
                      </button>
                    )}

                    {/* STAYLIK */}

                    {project.slug === "staylik" && (
                      <a
                        href="https://staylik-store.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open STAYLIK Store"
                        className="group/store relative flex h-11 items-center gap-2.5 overflow-hidden rounded-full border border-amber-500/20 bg-amber-500/[0.07] pl-4 pr-1.5 text-xs font-medium text-amber-300 transition-all duration-500 hover:border-amber-400/40 hover:bg-amber-500/[0.14] hover:text-white"
                      >
                        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover/store:translate-x-full" />

                        <span className="relative z-10 whitespace-nowrap">
                          Store Web
                        </span>

                        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-amber-400/20 bg-amber-500/10">
                          <ExternalLink size={14} />
                        </span>
                      </a>
                    )}

                    {/* Al Asrar */}

                    {project.slug === "alasrar-al-thahabeya" && (
                      <a
                        href="https://alasraralthahabeya.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open Al Asrar Al Thahabeya website"
                        className="group/website relative flex h-11 items-center gap-2.5 overflow-hidden rounded-full border border-blue-500/20 bg-blue-500/[0.07] pl-4 pr-1.5 text-xs font-medium text-blue-300 transition-all duration-500 hover:border-blue-400/40 hover:bg-blue-500/[0.14] hover:text-white"
                      >
                        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover/website:translate-x-full" />

                        <span className="relative z-10 whitespace-nowrap">
                          {t.projects.website}
                        </span>

                        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10">
                          <ExternalLink size={14} />
                        </span>
                      </a>
                    )}

                    {/* View Project */}

                    <Link
                      href={`/projects/${project.slug}`}
                      aria-label={`${t.projects.viewProject} ${projectTranslation.title}`}
                      className="group/button relative flex h-11 items-center gap-2.5 overflow-hidden rounded-full border border-white/[0.10] bg-white/[0.025] pl-4 pr-1.5 text-xs font-medium text-white/55 transition-all duration-500 hover:border-blue-400/40 hover:bg-blue-500/[0.10] hover:text-white"
                    >
                      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover/button:translate-x-full" />

                      <span className="relative z-10 whitespace-nowrap">
                        {t.projects.viewProject}
                      </span>

                      <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.04] transition-all duration-500 group-hover/button:border-blue-400/30 group-hover/button:bg-blue-500/15">
                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-500 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                        />
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Bottom accent */}

                <div
                  className={`absolute bottom-0 h-px w-16 bg-blue-500/50 transition-all duration-700 group-hover:w-32 ${
                    isArabic ? "right-8" : "left-8"
                  }`}
                />
              </div>
            </motion.article>
          </AnimatePresence>

          {/* =========================================================
              COUNTER
          ========================================================= */}

          <div className="mt-7 flex items-center justify-center">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.2em] text-white/25">
                <span className="text-blue-400">
                  {String(currentProject + 1).padStart(2, "0")}
                </span>

                <span className="mx-2 text-white/10">/</span>

                {String(projects.length).padStart(2, "0")}
              </span>

              <div className="h-px w-12 bg-white/[0.08]" />

              <span className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                Projects
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-sm text-white/40">
              {t.projects.haveProject}
            </p>

            <p className="mt-1 text-xs text-white/20">
              {t.projects.buildTogether}
            </p>
          </div>

          <Link
            href="#contact"
            className="group flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-white"
          >
            {t.projects.startProject}

            <ExternalLink
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>

      {/* =========================================================
          PRIVATE VERTEXOS MODAL
      ========================================================= */}

      <AnimatePresence>
        {showPrivateSystem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-6 backdrop-blur-md"
            onClick={() => setShowPrivateSystem(false)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/[0.10] bg-[#080d16] p-8 shadow-2xl shadow-black/60"
            >
              {/* Glow */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-indigo-600/10 blur-[80px]" />

              <div className="relative">
                {/* Close */}

                <button
                  type="button"
                  onClick={() => setShowPrivateSystem(false)}
                  aria-label="Close"
                  className="absolute right-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/40 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  <X size={16} />
                </button>

                {/* Icon */}

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10">
                  <LockKeyhole
                    size={24}
                    className="text-indigo-400"
                  />
                </div>

                {/* Text */}

                <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.25em] text-indigo-400">
                  VertexOS
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                  Private System
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/45">
                  This system is exclusively developed for Vertex Labs internal
                  operations and is not publicly accessible.
                </p>

                <p className="mt-4 text-xs leading-6 text-white/25">
                  Access is restricted to authorized Vertex Labs team members.
                </p>

                {/* Close */}

                <button
                  type="button"
                  onClick={() => setShowPrivateSystem(false)}
                  className="mt-7 flex h-11 w-full items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.04] text-xs font-medium text-white/60 transition-all hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}