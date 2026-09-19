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
import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useTranslation } from "@/i18n/useTranslation";
import FAQ from "@/components/FAQ";
import TeamMemberModal from "@/components/TeamMemberModal";
import ReadyWebsites from "@/components/ReadyWebsites";

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

useEffect(() => {
  setLanguageTransition(true);

  const timer = setTimeout(() => {
    setLanguageTransition(false);
  }, 180);

  return () => clearTimeout(timer);
}, [language]);

const [languageTransition, setLanguageTransition] = useState(false);

  return (
    <main
  className={`min-h-screen overflow-x-hidden bg-[#03060b] text-white selection:bg-blue-500/30 transition-opacity duration-200 ${
    languageTransition ? "opacity-80" : "opacity-100"
  }`}
>
      
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
{ label: t.nav.websites, id: "websites" },
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
{ label: t.nav.websites, id: "websites" },
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
  className="relative mx-auto flex min-h-[calc(100vh-96px)] w-full max-w-[1400px] items-center overflow-hidden px-6 pb-20 pt-28 lg:px-10"
>
  {/* Ambient background glow */}
  <div className="pointer-events-none absolute left-[18%] top-[20%] h-[420px] w-[420px] rounded-full bg-blue-600/[0.045] blur-[130px]" />

  <div className="grid w-full items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">
    {/* =====================================================
        HERO LEFT
    ===================================================== */}

    <motion.div
      initial={{ opacity: 0, x: -35 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10"
    >
      {/* Eyebrow */}
      <div className="mb-7 flex items-center gap-3">
        <span className="h-px w-10 bg-blue-500" />

        <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-blue-400 sm:text-xs">
          {t.hero.eyebrow}
        </span>
      </div>

      {/* Main heading */}
      <h1 className="max-w-3xl text-[clamp(3.2rem,6.8vw,6.8rem)] font-semibold leading-[0.88] tracking-[-0.06em]">
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

      {/* Description */}
      <p className="mt-8 max-w-xl text-[15px] leading-7 text-white/45 sm:text-lg sm:leading-8">
        {t.hero.description}
      </p>

      {/* Actions */}
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <a
          href="#projects"
          className="group flex h-13 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-medium text-black transition-all duration-300 hover:bg-blue-500 hover:text-white"
        >
          {t.hero.explore}

          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>

        <a
          href="#contact"
          className="group flex h-13 items-center justify-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.02] px-7 text-sm text-white/75 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.06] hover:text-white"
        >
          {t.hero.start}

          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>

      {/* Availability */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-9 inline-flex items-center gap-2.5 rounded-full border border-white/[0.07] bg-white/[0.02] px-3.5 py-2 backdrop-blur-sm"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-40" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
        </span>

        <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/40">
          {t.hero.available}
        </span>
      </motion.div>

      {/* Socials */}
      <div className="mt-9 flex items-center gap-5">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
          {t.hero.follow}
        </span>

        <div className="h-px w-8 bg-white/[0.08]" />

        <a
          href="https://www.instagram.com/vertexlabs.dev/"
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold text-white/35 transition-colors duration-300 hover:text-white"
        >
          IG
        </a>

        <a
          href="https://x.com/vertexlabsdev"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-white/35 transition-colors duration-300 hover:text-white"
        >
          X
        </a>

        <a
          href="https://www.linkedin.com/company/vertex-labs-dev/"
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold text-white/35 transition-colors duration-300 hover:text-white"
        >
          in
        </a>
      </div>
    </motion.div>

    {/* =====================================================
        HERO VISUAL
    ===================================================== */}

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex min-h-[470px] items-center justify-center lg:min-h-[650px]"
    >
      {/* Main ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[300px] w-[300px] rounded-full bg-blue-600/[0.13] blur-[110px] sm:h-[380px] sm:w-[380px]"
      />

      {/* Outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[350px] w-[350px] rounded-full border border-white/[0.055] sm:h-[500px] sm:w-[500px]"
      >
        <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_20px_5px_rgba(59,130,246,0.6)]" />

        <div className="absolute bottom-[12%] left-[7%] h-1.5 w-1.5 rounded-full bg-white/40" />
      </motion.div>

      {/* Inner ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[270px] w-[270px] rounded-full border border-blue-500/[0.09] sm:h-[410px] sm:w-[410px]"
      >
        <div className="absolute bottom-8 right-3 h-1.5 w-1.5 rounded-full bg-white/60 shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
      </motion.div>

      {/* Decorative center glow */}
      <div className="absolute h-[180px] w-[180px] rounded-full bg-blue-500/[0.08] blur-[60px] sm:h-[240px] sm:w-[240px]" />

      {/* =====================================================
          LOGO
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, -12, 0],
          rotateZ: [0, 0.3, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.025,
        }}
        className="relative z-10 h-[330px] w-[330px] sm:h-[470px] sm:w-[470px]"
      >
        <div className="absolute inset-[15%] rounded-full bg-blue-500/[0.10] blur-[75px]" />

        <Image
          src="/logo/vertex-logo.png"
          alt="Vertex Labs Logo"
          fill
          priority
          sizes="(max-width: 640px) 330px, 470px"
          className="object-contain drop-shadow-[0_0_35px_rgba(59,130,246,0.18)]"
        />
      </motion.div>

      {/* =====================================================
          FLOATING TOP LABEL
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[2%] top-[12%] hidden rounded-2xl border border-white/[0.09] bg-[#080d16]/75 px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:block"
      >
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-40" />
            <span className="relative h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
          </span>

          <span className="text-xs text-white/60">
            {t.hero.building}
          </span>
        </div>
      </motion.div>

      {/* =====================================================
          FLOATING BOTTOM LABEL
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[12%] left-[1%] hidden rounded-2xl border border-white/[0.09] bg-[#080d16]/75 px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:block"
      >
        <p className="text-[10px] uppercase tracking-[0.2em] text-blue-400">
          Vertex Labs
        </p>

        <p className="mt-1 text-xs text-white/50">
          {t.hero.tagline}
        </p>
      </motion.div>

      {/* Small orbit dot */}
      <motion.div
        animate={{
          x: [0, 8, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[17%] top-[22%] hidden h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_14px_4px_rgba(59,130,246,0.35)] sm:block"
      />
    </motion.div>
  </div>

  {/* Scroll indicator */}
  <motion.a
    href="#services"
    animate={{ y: [0, 7, 0] }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/25 transition-colors hover:text-white/50 sm:flex"
  >
    {t.hero.scroll}
    <ArrowDown size={13} />
  </motion.a>
</section>

      {/* =========================================================
    SERVICES STRIP
========================================================= */}

<section className="relative overflow-hidden border-y border-white/[0.06] bg-[#050912]/80">
  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_100%]" />

  <motion.div
    animate={{ x: ["-100%", "100%"] }}
    transition={{
      duration: 9,
      repeat: Infinity,
      ease: "linear",
    }}
    className="pointer-events-none absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
  />

  <div className="relative mx-auto grid max-w-[1400px] grid-cols-2 lg:grid-cols-4">
    {services.map((service, index) => (
      <motion.div
        key={service.number}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: index * 0.08,
        }}
        className={`group relative flex items-center gap-4 px-6 py-7 lg:px-10 ${
          index !== 0 ? "border-s border-white/[0.06]" : ""
        }`}
      >
        <span className="absolute bottom-0 left-6 h-px w-0 bg-blue-400 transition-all duration-500 group-hover:w-12 lg:left-10" />

        <span className="font-mono text-[10px] tracking-[0.2em] text-blue-500/60 group-hover:text-blue-400">
          {service.number}
        </span>

        <span className="text-xs text-white/40 transition-colors duration-300 group-hover:text-white/80 sm:text-sm">
          {t.services[service.key].title}
        </span>

        <span className="ml-auto relative flex h-1.5 w-1.5">
          <span className="absolute inset-0 rounded-full bg-blue-400 opacity-0 blur-[3px] transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-blue-400" />
        </span>
      </motion.div>
    ))}
  </div>
</section>


{/* =========================================================
    SERVICES
========================================================= */}

<section
  id="services"
  className="relative mx-auto max-w-[1400px] overflow-hidden px-6 py-28 lg:px-10 lg:py-36"
>
  {/* =======================================================
      AMBIENT SYSTEM BACKGROUND
  ======================================================= */}

  <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/[0.035] blur-[140px]" />

  <div className="pointer-events-none absolute left-[-180px] bottom-10 h-[350px] w-[350px] rounded-full bg-blue-500/[0.025] blur-[120px]" />

  {/* subtle technical grid */}

  <div
    className="pointer-events-none absolute inset-0 opacity-[0.018]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
      backgroundSize: "70px 70px",
    }}
  />

  <div className="relative">
    {/* =====================================================
        TOP SYSTEM HEADER
    ===================================================== */}

    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-16 flex flex-col gap-5 border-b border-white/[0.07] pb-6 sm:flex-row sm:items-end sm:justify-between"
    >
      <div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/20">
            01
          </span>

          <span className="h-px w-8 bg-blue-500/70" />

          <span className="text-[10px] uppercase tracking-[0.28em] text-blue-400">
            {t.services.eyebrow}
          </span>
        </div>

        <div className="mt-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/20">
          <span className="text-blue-500/70">&gt;</span>

          <span>initialize_services()</span>

          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
            className="text-blue-400"
          >
            _
          </motion.span>
        </div>
      </div>

      <div className="flex items-center gap-5 font-mono text-[8px] uppercase tracking-[0.18em] text-white/15">
        <span>VERTEX ENGINE</span>

        <span className="h-1 w-1 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />

        <span className="text-blue-400/50">ONLINE</span>
      </div>
    </motion.div>

    {/* =====================================================
        INTRO
    ===================================================== */}

    <div className="grid gap-16 lg:grid-cols-[0.62fr_1.38fr]">
      {/* LEFT */}

      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative"
      >
        <h2 className="max-w-md text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-[4.2rem]">
          {t.services.title}

          <span className="block text-white/30">
            {t.services.titleMuted}
          </span>
        </h2>

        <p className="mt-7 max-w-md text-base leading-7 text-white/40">
          {t.services.description}
        </p>

        {/* system readout */}

        <div className="mt-10 max-w-sm rounded-2xl border border-white/[0.07] bg-white/[0.018] p-5 backdrop-blur-sm">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
              SYSTEM READOUT
            </span>

            <span className="font-mono text-[8px] text-blue-400/50">
              04 MODULES
            </span>
          </div>

          <div className="space-y-3 font-mono text-[9px]">
            <div className="flex items-center justify-between">
              <span className="text-white/20">CORE</span>

              <span className="text-white/45">
                VERTEX ENGINE
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-white/20">STATUS</span>

              <span className="flex items-center gap-2 text-blue-400/70">
                <span className="h-1 w-1 rounded-full bg-blue-400" />
                OPERATIONAL
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-white/20">MODE</span>

              <span className="text-white/45">
                DIGITAL
              </span>
            </div>
          </div>
        </div>

        {/* code */}

        <div className="mt-8 hidden font-mono text-[9px] leading-5 text-white/[0.12] sm:block">
          <div>
            <span className="text-blue-500/40">const</span>{" "}
            capabilities = {"{"}
          </div>

          <div className="pl-5">
            web: <span className="text-white/20">true</span>,
          </div>

          <div className="pl-5">
            ai: <span className="text-white/20">true</span>,
          </div>

          <div className="pl-5">
            mobile: <span className="text-white/20">true</span>,
          </div>

          <div className="pl-5">
            software: <span className="text-white/20">true</span>
          </div>

          <div>{"}"}</div>
        </div>
      </motion.div>


      {/* ===================================================
          RIGHT — INTERACTIVE MODULES
      =================================================== */}

      <div className="relative">
        {/* connection lines */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[calc(100%-80px)] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-blue-500/[0.12] to-transparent sm:block" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-[calc(100%-80px)] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-500/[0.12] to-transparent sm:block" />

        {/* moving pulse */}

        <motion.div
          animate={{
            x: ["-160%", "160%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent sm:block"
        />

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
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.97,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                {/* outer pulse */}

                <div className="absolute -inset-px rounded-[25px] bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 opacity-0 blur-sm transition-all duration-700 group-hover:from-blue-500/30 group-hover:via-blue-400/5 group-hover:to-transparent group-hover:opacity-100" />

                <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#080d16]/80 p-6 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-blue-400/25 group-hover:bg-[#0a101c]">
                  {/* top scan */}

                  <motion.div
                    initial={{ x: "-120%" }}
                    whileInView={{ x: "220%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.3,
                      delay: 0.25 + index * 0.12,
                      ease: "easeInOut",
                    }}
                    className="absolute left-0 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
                  />

                  {/* module number */}

                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.025] transition-all duration-500 group-hover:border-blue-400/30 group-hover:bg-blue-500/[0.08]">
                        <Icon
                          size={19}
                          className="relative z-10 text-blue-400 transition-transform duration-500 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 rounded-xl bg-blue-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                      </div>

                      <div>
                        <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/15">
                          MODULE
                        </p>

                        <p className="mt-1 font-mono text-[10px] text-blue-400/50">
                          0{index + 1}
                        </p>
                      </div>
                    </div>

                    <span className="font-mono text-[9px] text-white/10">
                      VTX.{service.number}
                    </span>
                  </div>

                  {/* title */}

                  <h3 className="mt-7 text-xl font-medium tracking-[-0.025em] text-white/90">
                    {serviceTranslation.title}
                  </h3>

                  {/* description */}

                  <p className="mt-4 text-sm leading-6 text-white/35">
                    {serviceTranslation.description}
                  </p>

                  {/* tags */}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {serviceTranslation.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.07] bg-white/[0.015] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.13em] text-white/25 transition-all duration-300 group-hover:border-blue-400/15 group-hover:text-white/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* bottom terminal */}

                  <div className="mt-6 border-t border-white/[0.06] pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inset-0 animate-ping rounded-full bg-blue-400/50" />
                          <span className="relative h-1.5 w-1.5 rounded-full bg-blue-400/70" />
                        </span>

                        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
                          READY
                        </span>
                      </div>

                      <span className="font-mono text-[8px] text-white/10">
                        {index + 1} / 04
                      </span>
                    </div>
                  </div>

                  {/* corner code */}

                  <div className="pointer-events-none absolute bottom-4 right-5 font-mono text-[7px] text-white/[0.06]">
                    {`{ module: "${service.number}" }`}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>

    {/* =====================================================
        BOTTOM TERMINAL
    ===================================================== */}

    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: 0.2,
      }}
      className="mt-20 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#070c14]/80 backdrop-blur-xl"
    >
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-white/10" />
        <span className="h-2 w-2 rounded-full bg-white/10" />
        <span className="h-2 w-2 rounded-full bg-white/10" />

        <span className="ml-3 font-mono text-[8px] uppercase tracking-[0.2em] text-white/15">
          vertex.system
        </span>
      </div>

      <div className="flex flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="font-mono text-[9px] text-white/20">
          <span className="text-blue-400/60">&gt;</span>{" "}
          all_services.initialized()
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            className="text-blue-400"
          >
            _
          </motion.span>
        </div>

        <div className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.18em]">
          <span className="text-white/15">
            SYSTEM
          </span>

          <span className="text-blue-400/60">
            ONLINE
          </span>

          <span className="h-1 w-1 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
        </div>
      </div>
    </motion.div>

    {/* =====================================================
        FINAL LINE
    ===================================================== */}

    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{
        opacity: 1,
        scaleX: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: 0.3,
      }}
      className="mt-12 flex origin-left items-center gap-4"
    >
      <span className="font-mono text-[8px] tracking-[0.2em] text-white/15">
        VERTEX / CAPABILITIES
      </span>

      <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] via-blue-500/[0.12] to-transparent" />

      <span className="font-mono text-[8px] tracking-[0.2em] text-blue-400/30">
        04 MODULES
      </span>
    </motion.div>
  </div>
</section>


<ReadyWebsites />

<Projects />

      {/* =========================================================
    ABOUT
========================================================= */}

<section
  id="about"
  className="relative mx-auto max-w-[1400px] overflow-hidden px-6 py-28 lg:px-10 lg:py-36"
>
  {/* =======================================================
      AMBIENT BACKGROUND
  ======================================================= */}

  <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-600/[0.025] blur-[130px]" />

  <div
    className="pointer-events-none absolute inset-0 opacity-[0.015]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
      backgroundSize: "80px 80px",
    }}
  />

  <div className="relative">
    {/* =====================================================
        TOP SYSTEM HEADER
    ===================================================== */}

    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-16 flex flex-col gap-5 border-b border-white/[0.07] pb-6 sm:flex-row sm:items-end sm:justify-between"
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10px] tracking-[0.2em] text-white/20">
          02
        </span>

        <span className="h-px w-8 bg-blue-500/70" />

        <span className="text-[10px] uppercase tracking-[0.28em] text-blue-400">
          {t.about.eyebrow}
        </span>
      </div>

      <div className="flex items-center gap-4 font-mono text-[8px] uppercase tracking-[0.18em] text-white/15">
        <span>VERTEX / CORE</span>

        <span className="h-1 w-1 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />

        <span className="text-blue-400/50">
          ONLINE
        </span>
      </div>
    </motion.div>


    {/* =====================================================
        MAIN CONTENT
    ===================================================== */}

    <div className="grid items-start gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
      {/* ===================================================
          LEFT — IDENTITY
      =================================================== */}

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative"
      >
        {/* command */}

        <div className="mb-7 font-mono text-[9px] uppercase tracking-[0.18em] text-white/20">
          <span className="text-blue-500/70">&gt;</span>{" "}
          who_we_are();
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            className="ml-1 text-blue-400"
          >
            _
          </motion.span>
        </div>

        <h2 className="max-w-xl text-4xl font-semibold leading-[0.92] tracking-[-0.055em] sm:text-5xl lg:text-[4.5rem]">
          {t.about.title1}

          <br />

          <span className="text-white/30">
            {t.about.title2}
          </span>

          <br />

          {t.about.title3}
        </h2>

        {/* small identity line */}

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="mt-8 h-px max-w-[260px] bg-gradient-to-r from-blue-500/50 to-transparent"
        />

        {/* terminal-style identity */}

        <div className="mt-10 max-w-md rounded-2xl border border-white/[0.07] bg-[#080d16]/70 p-5 backdrop-blur-xl">
          <div className="mb-5 flex items-center justify-between">
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
              VERTEX CORE
            </span>

            <span className="font-mono text-[8px] text-blue-400/50">
              v2.0
            </span>
          </div>

          <div className="space-y-3 font-mono text-[9px]">
            <div className="flex items-center justify-between">
              <span className="text-white/20">
                IDENTITY
              </span>

              <span className="text-white/45">
                DIGITAL INNOVATION
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-white/20">
                FOCUS
              </span>

              <span className="text-white/45">
                DIGITAL PRODUCTS
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-white/20">
                APPROACH
              </span>

              <span className="text-white/45">
                ENGINEERING
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-white/20">
                STATUS
              </span>

              <span className="flex items-center gap-2 text-blue-400/70">
                <span className="h-1 w-1 rounded-full bg-blue-400" />
                OPERATIONAL
              </span>
            </div>
          </div>
        </div>
      </motion.div>


      {/* ===================================================
          RIGHT — STORY + CORE PRINCIPLES
      =================================================== */}

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.7,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative"
      >
        {/* intro code */}

        <div className="mb-8 font-mono text-[9px] text-white/15">
          <span className="text-blue-500/60">&gt;</span>{" "}
          load_vertex_profile()
        </div>

        <p className="text-lg leading-8 text-white/50 sm:text-xl sm:leading-9">
          {t.about.description1}
        </p>

        <p className="mt-6 text-base leading-7 text-white/30">
          {t.about.description2}
        </p>

        {/* =================================================
            CORE PRINCIPLES
        ================================================= */}

        <div className="mt-12">
          <div className="mb-5 flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
              CORE PRINCIPLES
            </span>

            <span className="font-mono text-[8px] text-white/10">
              {String(t.about.features.length).padStart(2, "0")} ITEMS
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {t.about.features.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.018] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-blue-500/[0.035]"
              >
                {/* scan */}

                <motion.div
                  initial={{ x: "-120%" }}
                  whileInView={{ x: "220%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.3 + index * 0.08,
                  }}
                  className="absolute left-0 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
                />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-[8px] text-blue-400/50">
                    0{index + 1}
                  </span>

                  <Check
                    size={14}
                    className="text-blue-400/60 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <p className="mt-5 text-xs leading-5 text-white/45 transition-colors duration-300 group-hover:text-white/65">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =================================================
            BOTTOM CODE BLOCK
        ================================================= */}

        <div className="mt-10 rounded-2xl border border-white/[0.06] bg-[#070c14]/70 p-5 backdrop-blur-xl">
          <div className="flex items-center gap-2 border-b border-white/[0.06] pb-4">
            <span className="h-2 w-2 rounded-full bg-white/10" />
            <span className="h-2 w-2 rounded-full bg-white/10" />
            <span className="h-2 w-2 rounded-full bg-white/10" />

            <span className="ml-2 font-mono text-[8px] uppercase tracking-[0.18em] text-white/15">
              vertex.config
            </span>
          </div>

          <div className="mt-5 font-mono text-[9px] leading-6 text-white/20">
            <div>
              <span className="text-blue-400/50">
                const
              </span>{" "}
              vertex = {"{"}
            </div>

            <div className="pl-5">
              mission:{" "}
              <span className="text-white/30">
                "build"
              </span>
              ,
            </div>

            <div className="pl-5">
              vision:{" "}
              <span className="text-white/30">
                "innovate"
              </span>
              ,
            </div>

            <div className="pl-5">
              mindset:{" "}
              <span className="text-white/30">
                "engineering"
              </span>
            </div>

            <div>{"}"}</div>

            <div className="mt-3 text-blue-400/50">
              &gt; vertex.initialized()
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* =====================================================
        BOTTOM SYSTEM LINE
    ===================================================== */}

    <motion.div
      initial={{
        opacity: 0,
        scaleX: 0,
      }}
      whileInView={{
        opacity: 1,
        scaleX: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: 0.25,
      }}
      className="mt-20 flex origin-left items-center gap-4"
    >
      <span className="font-mono text-[8px] tracking-[0.2em] text-white/15">
        VERTEX / IDENTITY
      </span>

      <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] via-blue-500/[0.12] to-transparent" />

      <span className="font-mono text-[8px] tracking-[0.2em] text-blue-400/30">
        CORE ONLINE
      </span>
    </motion.div>
  </div>
</section>

{/* =========================================================
    TEAM
========================================================= */}

<section
  id="team"
  className="relative mx-auto max-w-[1400px] overflow-hidden px-6 py-28 lg:px-10 lg:py-36"
>
  {/* =====================================================
      AMBIENT BACKGROUND
  ===================================================== */}

  <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-600/[0.025] blur-[140px]" />

  <div
    className="pointer-events-none absolute inset-0 opacity-[0.012]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
      backgroundSize: "80px 80px",
    }}
  />

  <div className="relative">
    {/* ===================================================
        SECTION HEADER
    =================================================== */}

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col gap-8 border-b border-white/[0.07] pb-8 lg:flex-row lg:items-end lg:justify-between"
    >
      <div>
        {/* System label */}

        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono text-[9px] tracking-[0.2em] text-white/20">
            03
          </span>

          <span className="h-px w-8 bg-blue-500/70" />

          <span className="text-[10px] uppercase tracking-[0.28em] text-blue-400">
            {t.team.eyebrow}
          </span>
        </div>

        <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-[4.5rem]">
          {t.team.title1}

          <br />

          <span className="text-white/30">
            {t.team.title2}
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-base leading-7 text-white/35">
          {t.team.description}
        </p>
      </div>

      {/* System status */}

      <div className="flex shrink-0 items-center gap-5 font-mono text-[8px] uppercase tracking-[0.18em] text-white/15">
        <div className="text-right">
          <p>VERTEX / PEOPLE</p>
          <p className="mt-2 text-white/10">
            CORE TEAM
          </p>
        </div>

        <div className="h-8 w-px bg-white/[0.08]" />

        <div className="flex items-center gap-2 text-blue-400/60">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          ONLINE
        </div>
      </div>
    </motion.div>


    {/* =====================================================
        COMMAND
    ===================================================== */}

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="mt-8 font-mono text-[9px] tracking-[0.15em] text-white/15"
    >
      <span className="text-blue-500/60">&gt;</span>{" "}
      load_vertex_team()
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
        className="ml-1 text-blue-400"
      >
        _
      </motion.span>
    </motion.div>


    {/* =====================================================
        TEAM GRID
    ===================================================== */}

    <div className="mx-auto mt-10 grid max-w-[1120px] gap-5 sm:grid-cols-2 lg:grid-cols-3">

      {/* ===================================================
          MEMBER 01 — FOUNDER
      =================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        onClick={() => setSelectedMember("malek")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setSelectedMember("malek");
          }
        }}
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-blue-500/15 bg-[#080d16]/80 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_20px_70px_rgba(37,99,235,0.08)]"
      >
        {/* =================================================
            FOUNDER VISUAL
        ================================================= */}

        <div className="relative h-[300px] overflow-hidden bg-[#060b13] sm:h-[320px]">

          {/* Grid */}

          <div className="absolute inset-0 opacity-[0.035]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />
          </div>

          {/* Ambient glow */}

          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.05] blur-3xl" />

          {/* Core */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/10 border-dashed"
          />

          <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/[0.035] shadow-[0_0_80px_rgba(37,99,235,0.08)] transition-transform duration-500 group-hover:scale-105">
            <div className="absolute inset-3 rounded-full border border-white/[0.06]" />

            <div className="absolute inset-7 rounded-full border border-blue-500/[0.10]" />

            <span className="font-mono text-3xl font-medium tracking-[-0.06em] text-white/[0.12]">
              VL
            </span>
          </div>

          {/* Connection lines */}

          <div className="absolute left-8 top-1/2 h-px w-14 bg-gradient-to-r from-transparent to-blue-500/30" />

          <div className="absolute right-8 top-1/2 h-px w-14 bg-gradient-to-l from-transparent to-blue-500/30" />

          <div className="absolute left-1/2 top-8 h-14 w-px bg-gradient-to-b from-transparent to-blue-500/20" />

          <div className="absolute bottom-8 left-1/2 h-14 w-px bg-gradient-to-t from-transparent to-blue-500/20" />

          {/* Scan line */}

          <motion.div
            animate={{
              y: ["0%", "290%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
          />

          {/* Badge */}

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

          {/* View */}

          <div className="absolute bottom-4 right-4 translate-y-3 rounded-full border border-white/10 bg-black/40 px-3 py-2 font-mono text-[8px] uppercase tracking-[0.15em] text-white/60 opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            View Profile →
          </div>

          {/* Bottom gradient */}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080d16] via-transparent to-transparent" />
        </div>


        {/* =================================================
            CARD CONTENT
        ================================================= */}

        <div className="p-5">

          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-medium tracking-[-0.02em] text-white">
                {t.team.founder.name}
              </h3>

              <p className="mt-1 text-xs text-blue-400">
                {t.team.founder.role}
              </p>
            </div>

            <span className="font-mono text-[8px] text-white/15">
              VTX.01
            </span>
          </div>

          <p className="mt-4 line-clamp-2 text-xs leading-5 text-white/35">
            {t.team.founder.description}
          </p>

          <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/15">
              FOUNDER / VERTEX LABS
            </span>

            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-blue-400/60 transition-colors group-hover:text-blue-400">
              OPEN →
            </span>
          </div>
        </div>
      </motion.div>


      {/* ===================================================
          MEMBER 02 — PLACEHOLDER
      =================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.65,
          delay: 0.08,
        }}
        className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.018]"
      >
        <div className="relative h-[300px] overflow-hidden bg-[#080d16] sm:h-[320px]">

          {/* Grid */}

          <div className="absolute inset-0 opacity-[0.025]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />
          </div>

          {/* Placeholder core */}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.015]">
              <span className="font-mono text-2xl text-white/[0.05]">
                02
              </span>
            </div>
          </div>

          {/* Status */}

          <div className="absolute left-4 top-4 rounded-full border border-white/[0.07] bg-black/30 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-white/20">
            Coming Soon
          </div>

          <span className="absolute right-4 top-4 font-mono text-[9px] text-white/15">
            VTX.02
          </span>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-medium text-white/20">
            {t.team.placeholder.title}
          </h3>

          <p className="mt-1 text-xs text-white/15">
            {t.team.placeholder.role}
          </p>

          <p className="mt-4 text-xs leading-5 text-white/20">
            {t.team.placeholder.description}
          </p>

          <div className="mt-5 border-t border-white/[0.05] pt-4">
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/10">
              TEAM SLOT / 02
            </span>
          </div>
        </div>
      </motion.div>


      {/* ===================================================
          MEMBER 03 — PLACEHOLDER
      =================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.65,
          delay: 0.16,
        }}
        className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.018]"
      >
        <div className="relative h-[300px] overflow-hidden bg-[#080d16] sm:h-[320px]">

          <div className="absolute inset-0 opacity-[0.025]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.015]">
              <span className="font-mono text-2xl text-white/[0.05]">
                03
              </span>
            </div>
          </div>

          <div className="absolute left-4 top-4 rounded-full border border-white/[0.07] bg-black/30 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-white/20">
            Coming Soon
          </div>

          <span className="absolute right-4 top-4 font-mono text-[9px] text-white/15">
            VTX.03
          </span>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-medium text-white/20">
            {t.team.placeholder.title}
          </h3>

          <p className="mt-1 text-xs text-white/15">
            {t.team.placeholder.role}
          </p>

          <p className="mt-4 text-xs leading-5 text-white/20">
            {t.team.placeholder.description}
          </p>

          <div className="mt-5 border-t border-white/[0.05] pt-4">
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/10">
              TEAM SLOT / 03
            </span>
          </div>
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
          transition={{ duration: 0.3 }}
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
            ease: [0.22, 1, 0.36, 1],
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
            className="absolute right-5 top-5 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/50 backdrop-blur-xl transition-all hover:border-blue-400/20 hover:bg-blue-500/10 hover:text-white"
          >
            <X size={18} />
          </button>


          {/* =================================================
              PROFILE LAYOUT
          ================================================= */}

          <div className="grid md:grid-cols-[0.75fr_1.25fr]">

            {/* =================================================
                PROFILE VISUAL
            ================================================= */}

            <div className="relative min-h-[430px] overflow-hidden bg-[#050912] md:min-h-[650px]">

              {/* Grid */}

              <div className="absolute inset-0 opacity-[0.035]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                  }}
                />
              </div>

              {/* Glow */}

              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.05] blur-3xl" />

              {/* Rotating ring */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/10 border-dashed"
              />

              {/* Core */}

              <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/[0.035] shadow-[0_0_100px_rgba(37,99,235,0.10)]">
                <div className="absolute inset-4 rounded-full border border-white/[0.06]" />

                <div className="absolute inset-9 rounded-full border border-blue-500/[0.10]" />

                <span className="font-mono text-5xl font-medium tracking-[-0.06em] text-white/[0.11]">
                  VL
                </span>
              </div>

              {/* Technical lines */}

              <div className="absolute left-10 top-1/2 h-px w-24 bg-gradient-to-r from-transparent to-blue-500/30" />

              <div className="absolute right-10 top-1/2 h-px w-24 bg-gradient-to-l from-transparent to-blue-500/30" />

              <div className="absolute left-1/2 top-10 h-24 w-px bg-gradient-to-b from-transparent to-blue-500/20" />

              <div className="absolute bottom-10 left-1/2 h-24 w-px bg-gradient-to-t from-transparent to-blue-500/20" />

              {/* Scan */}

              <motion.div
                animate={{
                  y: ["0%", "620%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
              />

              {/* Technical labels */}

              <div className="absolute left-6 top-6 font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                VTX / PROFILE
              </div>

              <div className="absolute right-6 top-6 font-mono text-[8px] text-blue-400/40">
                01
              </div>

              <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />

                <span className="text-[9px] uppercase tracking-[0.2em] text-white/60">
                  {t.team.founder.badge}
                </span>
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080d16] via-transparent to-transparent" />
            </div>


            {/* =================================================
                PROFILE DETAILS
            ================================================= */}

            <div className="p-7 sm:p-10 lg:p-12">

              {/* Header */}

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-blue-500" />

                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-blue-400">
                  VERTEX LABS / PROFILE
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

              <div className="my-8 h-px w-full bg-white/[0.07]" />


              {/* =================================================
                  ABOUT
              ================================================= */}

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/25">
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

              <div className="mt-10">
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/25">
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

              <div className="mt-10">
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/25">
                  Education
                </p>

                <div className="mt-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                  <p className="text-sm leading-6 text-white/60">
                    {t.team.founder.education}
                  </p>
                </div>
              </div>


              {/* =================================================
                  SOCIAL / PROFILE LINKS
              ================================================= */}

              <div className="mt-10 border-t border-white/[0.07] pt-6">
                <div className="flex flex-wrap gap-3">

                  <a
                    href="https://github.com/MalekAloklla?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-white/40 transition-all hover:border-blue-400/20 hover:bg-blue-500/[0.05] hover:text-blue-400"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="https://www.linkedin.com/in/malek-aloklla-091950309/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-white/40 transition-all hover:border-blue-400/20 hover:bg-blue-500/[0.05] hover:text-blue-400"
                  >
                    LinkedIn ↗
                  </a>

                </div>
              </div>


              {/* Bottom status */}

              <div className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-5 font-mono text-[8px] uppercase tracking-[0.16em]">
                <span className="text-white/15">
                  VERTEX / FOUNDER
                </span>

                <span className="flex items-center gap-2 text-blue-400/50">
                  <span className="h-1 w-1 rounded-full bg-blue-400" />
                  PROFILE ACTIVE
                </span>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    )}
  </div>
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