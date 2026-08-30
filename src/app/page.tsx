"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Code2,
  Database,
  Globe2,
  Layers3,
  Menu,
  MonitorSmartphone,
  Palette,
  Rocket,
  Send,
  Smartphone,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import Projects from "../components/Projects";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useTranslation } from "@/i18n/useTranslation";
import FAQ from "@/components/FAQ";
import TeamMemberModal from "@/components/TeamMemberModal";

const services = [
  {
    number: "01",
    icon: Globe2,
    key: "web",
  },
  {
    number: "02",
    icon: BrainCircuit,
    key: "ai",
  },
  {
    number: "03",
    icon: Smartphone,
    key: "mobile",
  },
  {
    number: "04",
    icon: Code2,
    key: "software",
  },
] as const;

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your idea, business, users, and what success actually looks like.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We turn the idea into a clear digital experience with a distinctive visual identity.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We engineer the product using modern technologies with performance and scalability in mind.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We deploy, test, refine, and make sure everything is ready for real users.",
  },
];

type TeamMember = {
  name: string;
  role: string;
  description: string;
  education: string;
  image?: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
  badge?: string;
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const { language, setLanguage } = useLanguage();
const { t } = useTranslation();

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#03060b] text-white selection:bg-blue-500/30">
      
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-350px] h-[750px] w-[750px] -translate-x-1/2 rounded-full bg-blue-600/[0.08] blur-[160px]" />

        <div className="absolute right-[-300px] top-[20%] h-[650px] w-[650px] rounded-full bg-[#123b88]/[0.08] blur-[160px]" />

        <div className="absolute bottom-[-350px] left-[-300px] h-[650px] w-[650px] rounded-full bg-blue-900/[0.08] blur-[160px]" />

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

<nav className="fixed inset-x-0 top-0 z-[100] border-b border-white/[0.06] bg-[#03060b]/80 backdrop-blur-xl">
  <div className="mx-auto flex h-24 w-full max-w-[1400px] items-center justify-between px-6 lg:px-10">

    {/* =====================================================
        LOGO
    ===================================================== */}

    <a href="#home" className="group flex items-center">
      <div className="relative h-14 w-44">
        <Image
          src="/logo/vertex-logo.png"
          alt="Vertex Labs"
          fill
          priority
          sizes="176px"
          className="object-contain object-left"
        />
      </div>
    </a>

    {/* =====================================================
        DESKTOP NAVIGATION
    ===================================================== */}

    <div className="hidden items-center gap-9 md:flex">
      {[
        { label: t.nav.home, id: "home" },
        { label: t.nav.services, id: "services" },
        { label: t.nav.projects, id: "projects" },
        { label: t.nav.about, id: "about" },
        { label: t.nav.team, id: "team" },
        { label: t.nav.contact, id: "contact" },
      ].map((item, index) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`relative text-sm transition-colors ${
            index === 0
              ? "text-white"
              : "text-white/50 hover:text-white"
          }`}
        >
          {item.label}

          {index === 0 && (
            <span className="absolute -bottom-3 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-blue-500" />
          )}
        </a>
      ))}
    </div>

    {/* =====================================================
        LANGUAGE SWITCHER
    ===================================================== */}

    <div className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.025] p-1 md:flex">
      <button
        onClick={() => setLanguage("en")}
        className={`rounded-full px-3 py-1.5 text-[10px] font-medium tracking-[0.12em] transition-all ${
          language === "en"
            ? "bg-white text-black"
            : "text-white/35 hover:text-white/70"
        }`}
      >
        EN
      </button>

      <button
        onClick={() => setLanguage("ar")}
        className={`rounded-full px-3 py-1.5 text-[10px] font-medium tracking-[0.12em] transition-all ${
          language === "ar"
            ? "bg-white text-black"
            : "text-white/35 hover:text-white/70"
        }`}
      >
        AR
      </button>
    </div>

    {/* =====================================================
        DESKTOP CTA
    ===================================================== */}

    <a
      href="#contact"
      className="group hidden items-center gap-2 rounded-full border border-white/15 bg-white/[0.025] px-5 py-3 text-sm text-white transition-all hover:border-blue-500/50 hover:bg-blue-500/10 md:flex"
    >
      Let's Work Together

      <ArrowUpRight
        size={16}
        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>

    {/* =====================================================
        MOBILE MENU BUTTON
    ===================================================== */}

    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] md:hidden"
      aria-label="Toggle menu"
    >
      {menuOpen ? <X size={20} /> : <Menu size={20} />}
    </button>

    {/* =====================================================
        MOBILE MENU
    ===================================================== */}

    {menuOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute left-4 right-4 top-20 rounded-2xl border border-white/10 bg-[#080d16]/95 p-5 shadow-2xl backdrop-blur-xl md:hidden"
      >
        <div className="flex flex-col gap-1">
          {[
            { label: t.nav.home, id: "home" },
            { label: t.nav.services, id: "services" },
            { label: t.nav.projects, id: "projects" },
            { label: t.nav.about, id: "about" },
            { label: t.nav.team, id: "team" },
            { label: t.nav.contact, id: "contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium transition hover:bg-blue-500"
        >
          Let's Work Together
          <ArrowRight size={16} />
        </a>
      </motion.div>
    )}
  </div>
</nav>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
  id="home"
  className="relative mx-auto flex min-h-[calc(100vh-96px)] w-full max-w-[1400px] items-center px-6 pb-20 pt-28 lg:px-10"
>
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Hero left */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />

              <span className="text-xs font-medium uppercase tracking-[0.28em] text-blue-400">
                {t.hero.eyebrow}
              </span>
            </div>

            <h1 className="max-w-3xl text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
              {t.hero.title1}
<br />

<span className="text-white/90">
  {t.hero.title2}
</span>
<br />

<span className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent">
  {t.hero.title3}
</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/50 sm:text-lg">
  {t.hero.description}
</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="group flex h-13 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-medium text-black transition-all hover:bg-blue-500 hover:text-white"
              >
                {t.hero.explore}

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="flex h-13 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.02] px-7 text-sm text-white/80 transition-all hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                {t.hero.start}
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-5">
              <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                {t.hero.follow}
              </span>

              <div className="h-px w-8 bg-white/10" />

              <a
                href="#"
                className="text-xs font-semibold text-white/40 transition hover:text-white"
              >
                IG
              </a>

              <a
                href="#"
                className="text-sm font-semibold text-white/40 transition hover:text-white"
              >
                X
              </a>

              <a
                href="#"
                className="text-xs font-semibold text-white/40 transition hover:text-white"
              >
                in
              </a>
            </div>
          </motion.div>

          {/* Hero visual */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="relative flex min-h-[480px] items-center justify-center lg:min-h-[650px]"
          >
            <div className="absolute h-[320px] w-[320px] rounded-full bg-blue-600/15 blur-[100px]" />

            {/* Outer rotating ring */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[390px] w-[390px] rounded-full border border-white/[0.06] sm:h-[500px] sm:w-[500px]"
            >
              <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_20px_5px_rgba(59,130,246,0.6)]" />
            </motion.div>

            {/* Inner rotating ring */}

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[300px] w-[300px] rounded-full border border-blue-500/10 sm:h-[410px] sm:w-[410px]"
            >
              <div className="absolute bottom-8 right-3 h-1.5 w-1.5 rounded-full bg-white/60" />
            </motion.div>

            {/* Logo */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 h-[360px] w-[360px] sm:h-[470px] sm:w-[470px]"
            >
              <div className="absolute inset-[15%] rounded-full bg-blue-500/10 blur-[80px]" />

              <Image
                src="/logo/vertex-logo.png"
                alt="Vertex Labs Logo"
                fill
                priority
                sizes="(max-width: 640px) 360px, 470px"
                className="object-contain drop-shadow-[0_0_35px_rgba(59,130,246,0.18)]"
              />
            </motion.div>

            {/* Floating top label */}

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[5%] top-[13%] hidden rounded-2xl border border-white/10 bg-[#080d16]/70 px-4 py-3 backdrop-blur-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />

                <span className="text-xs text-white/60">
                  {t.hero.building}
                </span>
              </div>
            </motion.div>

            {/* Floating bottom label */}

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[13%] left-[3%] hidden rounded-2xl border border-white/10 bg-[#080d16]/70 px-4 py-3 backdrop-blur-xl sm:block"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-blue-400">
                Vertex Labs
              </p>

              <p className="mt-1 text-xs text-white/50">
                {t.hero.tagline}
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.a
          href="#services"
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/30 sm:flex"
        >
          {t.hero.scroll}
          <ArrowDown size={13} />
        </motion.a>
      </section>

      {/* =========================================================
          SERVICES STRIP
      ========================================================= */}

      <section className="relative border-y border-white/[0.06] bg-[#050912]/60">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`group flex items-center gap-4 px-6 py-7 lg:px-10 ${
                index !== 0 ? "border-l border-white/[0.06]" : ""
              }`}
            >
              <span className="font-mono text-xs text-blue-500/70">
                {service.number}
              </span>

              <span className="text-xs text-white/45 transition-colors group-hover:text-white/80 sm:text-sm">
                {t.services[service.key].title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section
        id="services"
        className="relative mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-36"
      >
        <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />

              <span className="text-xs uppercase tracking-[0.25em] text-blue-400">
  {t.services.eyebrow}
</span>
            </div>

            <h2 className="mt-7 max-w-md text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
  {t.services.title}
  <span className="text-white/40">
  {t.services.titleMuted}
</span>
</h2>

            <p className="mt-6 max-w-md text-base leading-7 text-white/40">
  {t.services.description}
</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => {
  const Icon = service.icon;

  const serviceTranslation =
    service.number === "01"
      ? t.services.web
      : service.number === "02"
        ? t.services.ai
        : service.number === "03"
          ? t.services.mobile
          : t.services.software;

              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/[0.04]"
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                        <Icon
                          size={20}
                          className="text-blue-400"
                        />
                      </div>

                      <span className="font-mono text-xs text-white/20">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-8 text-xl font-medium">
  {serviceTranslation.title}
</h3>

                    <p className="mt-4 text-sm leading-6 text-white/40">
  {serviceTranslation.description}
</p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {serviceTranslation.tags.map((tag) => (
  <span
    key={tag}
    className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[10px] uppercase tracking-wider text-white/35"
  >
    {tag}
  </span>
))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Projects />

      {/* =========================================================
          ABOUT
      ========================================================= */}

      <section
        id="about"
        className="relative mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-36"
      >
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />

              <span className="text-xs uppercase tracking-[0.25em] text-blue-400">
  {t.about.eyebrow}
</span>
            </div>

            <h2 className="mt-7 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
  {t.about.title1}
  <br />
  <span className="text-white/40">{t.about.title2}</span>
  <br />
  {t.about.title3}
</h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-white/50">
  {t.about.description1}
</p>

            <p className="mt-6 text-base leading-7 text-white/35">
  {t.about.description2}
</p>

            <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {t.about.features.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4"
                >
                  <Check size={16} className="text-blue-400" />

                  <p className="mt-3 text-xs leading-5 text-white/50">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

{/* =========================================================
    TEAM
========================================================= */}

<section
  id="team"
  className="relative mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32"
>
  {/* =====================================================
      SECTION HEADER
  ===================================================== */}

  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.6 }}
    className="max-w-2xl"
  >
    <div className="flex items-center gap-3">
      <span className="h-px w-10 bg-blue-500" />

      <span className="text-xs uppercase tracking-[0.25em] text-blue-400">
        {t.team.eyebrow}
      </span>
    </div>

    <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
      {t.team.title1}
      <br />

      <span className="text-white/35">
        {t.team.title2}
      </span>
    </h2>

    <p className="mt-5 max-w-xl text-base leading-7 text-white/40">
      {t.team.description}
    </p>
  </motion.div>


  {/* =====================================================
      TEAM GRID
  ===================================================== */}

  <div className="mx-auto mt-14 grid max-w-[1120px] gap-5 sm:grid-cols-2 lg:grid-cols-3">

    {/* =====================================================
        MEMBER 01 — FOUNDER
    ===================================================== */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      onClick={() => setSelectedMember("malek")}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          setSelectedMember("malek");
        }
      }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.04]"
    >
      {/* Image */}

      <div className="relative h-[300px] sm:h-[320px] overflow-hidden bg-[#080d16]">

        <Image
          src="/team/malek.png"
          alt="Malek Anas Aloklla"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />

        {/* Gradient */}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080d16] via-transparent to-transparent" />

        {/* Founder Badge */}

        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

          <span className="text-[8px] uppercase tracking-[0.2em] text-white/60">
            {t.team.founder.badge}
          </span>
        </div>

        {/* Number */}

        <span className="absolute right-4 top-4 font-mono text-[9px] tracking-[0.2em] text-white/25">
          01
        </span>

        {/* View Profile */}

        <div className="absolute bottom-4 right-4 translate-y-3 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-[9px] text-white/60 opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View Profile
        </div>
      </div>


      {/* Card Content */}

      <div className="p-5">

        <h3 className="text-lg font-medium tracking-[-0.02em]">
          {t.team.founder.name}
        </h3>

        <p className="mt-1 text-xs text-blue-400">
          {t.team.founder.role}
        </p>

        {/* Short Bio */}

        <p className="mt-3 line-clamp-2 text-xs leading-5 text-white/40">
          {t.team.founder.description}
        </p>

        <div className="mt-5 flex items-center justify-between">

          <span className="text-[8px] uppercase tracking-[0.16em] text-white/20">
            Founder • Vertex Labs
          </span>

          <span className="text-[9px] uppercase tracking-[0.15em] text-blue-400/60 transition-colors group-hover:text-blue-400">
            View →
          </span>

        </div>
      </div>
    </motion.div>


    {/* =====================================================
        MEMBER 02 — PLACEHOLDER
    ===================================================== */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.08 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025]"
    >
      <div className="relative aspect-[4/4.25] overflow-hidden bg-[#080d16]">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-3xl text-white/[0.04]">
            02
          </span>
        </div>
      </div>

      <div className="p-5">

        <h3 className="text-lg font-medium text-white/25">
          {t.team.placeholder.title}
        </h3>

        <p className="mt-1 text-xs text-white/20">
          {t.team.placeholder.role}
        </p>

        <p className="mt-3 text-xs leading-5 text-white/20">
          {t.team.placeholder.description}
        </p>

      </div>
    </motion.div>


    {/* =====================================================
        MEMBER 03 — PLACEHOLDER
    ===================================================== */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.16 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025]"
    >
      <div className="relative aspect-[4/4.25] overflow-hidden bg-[#080d16]">

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-3xl text-white/[0.04]">
            03
          </span>
        </div>

      </div>

      <div className="p-5">

        <h3 className="text-lg font-medium text-white/25">
          {t.team.placeholder.title}
        </h3>

        <p className="mt-1 text-xs text-white/20">
          {t.team.placeholder.role}
        </p>

        <p className="mt-3 text-xs leading-5 text-white/20">
          {t.team.placeholder.description}
        </p>

      </div>
    </motion.div>

  </div>


  {/* =====================================================
      PROFILE MODAL
  ===================================================== */}

  {selectedMember === "malek" && (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={() => setSelectedMember(null)}
    >

      {/* Backdrop */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
      />


      {/* Modal */}

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/[0.1] bg-[#080d16] shadow-2xl shadow-black/60"
      >

        {/* =================================================
            CLOSE
        ================================================= */}

        <button
          onClick={() => setSelectedMember(null)}
          aria-label="Close profile"
          className="absolute right-5 top-5 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/50 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
          <X size={18} />
        </button>


        {/* =================================================
            PROFILE LAYOUT
        ================================================= */}

        <div className="grid md:grid-cols-[0.8fr_1.2fr]">


          {/* =================================================
              PROFILE IMAGE
          ================================================= */}

          <div className="relative min-h-[430px] overflow-hidden bg-[#050912] md:min-h-[650px]">

            <Image
              src="/team/malek.png"
              alt="Malek Anas Aloklla"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center"
            />

            {/* Image Glow */}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080d16] via-transparent to-transparent" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-[#080d16]/40" />


            {/* Founder Badge */}

            <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl">

              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />

              <span className="text-[9px] uppercase tracking-[0.2em] text-white/60">
                {t.team.founder.badge}
              </span>

            </div>

          </div>


          {/* =================================================
              PROFILE DETAILS
          ================================================= */}

          <div className="p-7 sm:p-10 lg:p-12">

            {/* Header */}

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-blue-500" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-blue-400">
                Vertex Labs
              </span>

            </div>


            {/* Name */}

            <h3 className="mt-6 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl lg:text-5xl">
              {t.team.founder.name}
            </h3>


            {/* Role */}

            <p className="mt-3 text-sm text-blue-400">
              {t.team.founder.role}
            </p>


            {/* Divider */}

            <div className="my-8 h-px w-full bg-white/[0.07]" />


            {/* About */}

            <div>

              <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                About
              </p>

              <p className="mt-4 text-sm leading-7 text-white/55">
                Malek Anas Aloklla is the Founder of Vertex Labs, focused on
                building modern digital products, intelligent systems,
                AI-powered solutions, and custom software.

                <br />
                <br />

                He works across the product development process — from
                transforming ideas into clear digital experiences to
                engineering, testing, and launching scalable solutions.

                <br />
                <br />

                Through Vertex Labs, his goal is to help businesses and
                individuals turn ambitious ideas into reliable, modern, and
                impactful digital products.
              </p>

            </div>


            {/* =================================================
                EXPERTISE
            ================================================= */}

            <div className="mt-9">

              <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                Expertise
              </p>

              <div className="mt-4 flex flex-wrap gap-2">

                {[
                  "Web Development",
                  "AI Solutions",
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Software Development",
                  "Automation",
                  "UI / UX",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-[10px] text-white/40 transition-colors hover:border-blue-500/20 hover:text-blue-400"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>


            {/* =================================================
                EDUCATION
            ================================================= */}

            <div className="mt-9">

              <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                Education
              </p>

              <div className="mt-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">

                <p className="text-sm leading-6 text-white/60">
                  {t.team.founder.education}
                </p>

              </div>

            </div>


            {/* =================================================
                SOCIALS
            ================================================= */}

            <div className="mt-9">

              <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                Connect
              </p>

              <div className="mt-4 flex flex-wrap gap-2">


                {/* LinkedIn */}

                <a
                  href="https://www.linkedin.com/in/malek-aloklla-091950309/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-xs text-white/45 transition-all hover:border-blue-500/30 hover:bg-blue-500/[0.05] hover:text-blue-400"
                >

                  <span className="font-semibold">
                    in
                  </span>

                  <span>
                    LinkedIn
                  </span>

                  <ArrowUpRight
                    size={13}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />

                </a>


                {/* GitHub */}

                <a
                  href="https://github.com/MalekAloklla?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-xs text-white/45 transition-all hover:border-blue-500/30 hover:bg-blue-500/[0.05] hover:text-blue-400"
                >

                  <span className="font-semibold">
                    GH
                  </span>

                  <span>
                    GitHub
                  </span>

                  <ArrowUpRight
                    size={13}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />

                </a>


                {/* Instagram */}

                <a
                  href="https://www.instagram.com/1mlo0ok_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-xs text-white/45 transition-all hover:border-blue-500/30 hover:bg-blue-500/[0.05] hover:text-blue-400"
                >

                  <span className="font-semibold">
                    IG
                  </span>

                  <span>
                    Instagram
                  </span>

                  <ArrowUpRight
                    size={13}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />

                </a>

              </div>

            </div>


            {/* =================================================
                FOOTER
            ================================================= */}

            <div className="mt-10 flex items-center justify-between border-t border-white/[0.07] pt-6">

              <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                Vertex Labs
              </span>

              <button
                onClick={() => setSelectedMember(null)}
                className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/30 transition-colors hover:text-white"
              >
                Close
                <X size={13} />
              </button>

            </div>

          </div>
        </div>
      </motion.div>
    </div>
  )}

</section>

      {/* =========================================================
    PROCESS
========================================================= */}

<section className="border-y border-white/[0.06] bg-[#050912]/60">
  <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-36">

    {/* Header */}

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl"
    >
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-blue-500" />

        <span className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
          {t.process.eyebrow}
        </span>
      </div>

      <h2 className="mt-7 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
        {t.process.title1}
        <span className="text-white/40">
          {t.process.title2}
        </span>
      </h2>
    </motion.div>

    {/* Process Steps */}

    <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          number: "01",
          ...t.process.discover,
        },
        {
          number: "02",
          ...t.process.design,
        },
        {
          number: "03",
          ...t.process.build,
        },
        {
          number: "04",
          ...t.process.launch,
        },
      ].map((step, index) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
          className="group relative bg-[#080d16] p-7 transition-colors duration-500 hover:bg-[#0a101c] sm:p-8"
        >
          {/* Number */}

          <span className="font-mono text-xs text-blue-500/70">
            {step.number}
          </span>

          {/* Title */}

          <h3 className="mt-12 text-xl font-medium transition-colors duration-300 group-hover:text-white">
            {step.title}
          </h3>

          {/* Description */}

          <p className="mt-4 text-sm leading-6 text-white/35">
            {step.description}
          </p>

          {/* Bottom line */}

          <div className="mt-8 h-px w-8 bg-blue-500/40 transition-all duration-500 group-hover:w-16" />
        </motion.div>
      ))}

    </div>
  </div>
</section>

      {/* =========================================================
    TECHNOLOGY
========================================================= */}

<section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10">
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="flex flex-col items-center text-center"
  >
    <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
      {t.technology.title}
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-3">
      {[
        { name: "Next.js", icon: MonitorSmartphone },
        { name: "TypeScript", icon: Code2 },
        { name: "AI", icon: BrainCircuit },
        { name: "Supabase", icon: Database },
        { name: "React", icon: Layers3 },
        { name: "Mobile", icon: Smartphone },
        { name: "Automation", icon: Zap },
        { name: "UI / UX", icon: Palette },
      ].map((tech) => {
        const Icon = tech.icon;

        return (
          <div
            key={tech.name}
            className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-xs text-white/40 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/[0.04] hover:text-white/70"
          >
            <Icon size={14} />
            {tech.name}
          </div>
        );
      })}
    </div>
  </motion.div>
</section>

{/* =========================================================
    CTA / CONTACT
========================================================= */}

<section
  id="contact"
  className="relative overflow-hidden border-t border-white/[0.06]"
>
  {/* Background glow */}

  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.08] blur-[140px]" />

  <div className="relative mx-auto max-w-[1100px] px-6 py-32 text-center lg:py-40">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      {/* Icon */}

      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
        <Rocket
          size={23}
          className="text-blue-400"
        />
      </div>

      {/* Eyebrow */}

      <p className="mt-8 text-xs uppercase tracking-[0.3em] text-blue-400">
        {t.contact.eyebrow}
      </p>

      {/* Heading */}

      <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
        {t.contact.title1}

        <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent">
          {t.contact.title2}
        </span>
      </h2>

      {/* Description */}

      <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/40">
        {t.contact.description}
      </p>

      {/* Main contact buttons */}

      <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
        {/* WhatsApp CTA */}

        <a
          href="https://wa.me/971552861141"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-14 items-center justify-center gap-3 rounded-full bg-white px-8 text-sm font-medium text-black transition-all duration-300 hover:bg-blue-500 hover:text-white"
        >
          {t.contact.conversation}

          <Send
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>

        {/* Email */}

        <a
          href="mailto:vertexlabs.dev@gmail.com"
          className="flex h-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.02] px-8 text-sm text-white/70 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white"
        >
          vertexlabs.dev@gmail.com
        </a>
      </div>

      {/* Response time */}

      <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-white/20">
        {t.contact.response}
      </p>

      {/* Social / contact options */}

      <div className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-3">
        {/* Instagram */}

        <a
          href="https://www.instagram.com/vertexlabs.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-3 text-xs text-white/40 transition-all duration-300 hover:border-blue-500/25 hover:bg-blue-500/[0.04] hover:text-white/80"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-[10px] font-semibold text-white/50 transition group-hover:border-blue-500/30 group-hover:text-blue-400">
            IG
          </span>

          <span>{t.contact.instagram}</span>

          <ArrowUpRight
            size={13}
            className="text-white/20 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"
          />
        </a>

        {/* X / Twitter */}

        <a
          href="https://x.com/vertexlabsdev"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-3 text-xs text-white/40 transition-all duration-300 hover:border-blue-500/25 hover:bg-blue-500/[0.04] hover:text-white/80"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-[11px] font-semibold text-white/50 transition group-hover:border-blue-500/30 group-hover:text-blue-400">
            X
          </span>

          <span>{t.contact.twitter}</span>

          <ArrowUpRight
            size={13}
            className="text-white/20 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"
          />
        </a>

        {/* WhatsApp */}

        <a
          href="https://wa.me/971552861141"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-3 text-xs text-white/40 transition-all duration-300 hover:border-blue-500/25 hover:bg-blue-500/[0.04] hover:text-white/80"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-[10px] font-semibold text-white/50 transition group-hover:border-blue-500/30 group-hover:text-blue-400">
            WA
          </span>

          <span>{t.contact.whatsapp}</span>

          <ArrowUpRight
            size={13}
            className="text-white/20 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"
          />
        </a>
      </div>
    </motion.div>
  </div>
</section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <FAQ t={t} />

{/* =========================================================
    FOOTER
========================================================= */}

<footer className="border-t border-white/[0.06]">
  <div className="mx-auto max-w-[1400px] px-6 py-12 lg:px-10">

    {/* ================= TOP ================= */}

    <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

      {/* Logo */}

      <div>
        <div className="relative h-12 w-40">
          <Image
            src="/logo/vertex-logo.png"
            alt="Vertex Labs"
            fill
            sizes="160px"
            className="object-contain object-left"
          />
        </div>

        <p className="mt-4 max-w-xs text-xs leading-5 text-white/25">
          {t.footer.description}
        </p>
      </div>

      {/* Navigation */}

      <div className="flex flex-wrap items-center gap-x-7 gap-y-4 text-xs text-white/35">

        <a
          href="#home"
          className="transition-colors hover:text-white"
        >
          {t.footer.home}
        </a>

        <a
          href="#services"
          className="transition-colors hover:text-white"
        >
          {t.footer.services}
        </a>

        <a
          href="#projects"
          className="transition-colors hover:text-white"
        >
          {t.footer.projects}
        </a>

        <a
          href="#about"
          className="transition-colors hover:text-white"
        >
          {t.footer.about}
        </a>

        <a
          href="#team"
          className="transition-colors hover:text-white"
        >
          {t.footer.team}
        </a>

        <a
          href="#contact"
          className="transition-colors hover:text-white"
        >
          {t.footer.contact}
        </a>

      </div>
    </div>

    {/* ================= DIVIDER ================= */}

    <div className="mt-10 border-t border-white/[0.06] pt-7">

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

        {/* Copyright */}

        <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
          © {new Date().getFullYear()} Vertex Labs.{" "}
          {t.footer.rights}
        </p>

        {/* Socials */}

        <div className="flex items-center gap-5">

          {/* Instagram */}

          <a
            href="https://www.instagram.com/vertexlabs.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-[0.18em] text-white/25 transition-colors hover:text-white"
          >
            Instagram
          </a>

          <span className="h-3 w-px bg-white/10" />

          {/* X */}

          <a
            href="https://x.com/vertexlabsdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-[0.18em] text-white/25 transition-colors hover:text-white"
          >
            X
          </a>

          <span className="h-3 w-px bg-white/10" />

          {/* WhatsApp */}

          <a
            href="https://wa.me/971552861141"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-[0.18em] text-white/25 transition-colors hover:text-white"
          >
            WhatsApp
          </a>

        </div>
      </div>

      {/* ================= TAGLINE ================= */}

      <div className="mt-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

        <p className="text-[10px] uppercase tracking-[0.2em] text-white/15">
          {t.footer.studio}
        </p>

        <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
          {t.footer.tagline}
        </p>

      </div>

    </div>
  </div>
</footer>
 </main>
);
}