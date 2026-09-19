"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";

import { useLanguage } from "@/i18n/LanguageProvider";
import { translations } from "@/i18n/translations";

type Review = {
  id: string;
  name: string;
  role: string;
  project: string;
  quote: string;
};

const AUTO_PLAY_DURATION = 5500;

export default function CustomerReviews() {
  const { language } = useLanguage();
  const t = translations[language];

  const reviews: Review[] = t.reviews.items.map(
    (review, index) => ({
      id: String(index + 1).padStart(2, "0"),
      ...review,
    }),
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  /*
   * Reset the active review when the language changes.
   * This prevents the slider from pointing to a missing item
   * if the translated review list changes in length.
   */
  useEffect(() => {
    setActiveIndex(0);
    setProgressKey((current) => current + 1);
  }, [language]);

  const activeReview = reviews[activeIndex];

  const nextReview = () => {
    setActiveIndex(
      (current) => (current + 1) % reviews.length,
    );

    setProgressKey((current) => current + 1);
  };

  const previousReview = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + reviews.length) % reviews.length,
    );

    setProgressKey((current) => current + 1);
  };

  const goToReview = (index: number) => {
    setActiveIndex(index);
    setProgressKey((current) => current + 1);
  };

  useEffect(() => {
    if (isPaused || reviews.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % reviews.length,
      );

      setProgressKey((current) => current + 1);
    }, AUTO_PLAY_DURATION);

    return () => window.clearInterval(timer);
  }, [isPaused, reviews.length]);

  /*
   * Safety fallback in case there are no reviews.
   */
  if (!activeReview) {
    return null;
  }

  return (
    <section
      id="reviews"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#050912]"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-blue-600/[0.035] blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-blue-500/[0.025] blur-[130px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-36">
        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 border-b border-white/[0.07] pb-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/20">
                04
              </span>

              <span className="h-px w-8 bg-blue-500/70" />

              <span className="text-[10px] uppercase tracking-[0.28em] text-blue-400">
                {t.reviews.eyebrow}
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-[4.5rem]">
              {t.reviews.title1}
              <br />
              <span className="text-white/30">
                {t.reviews.title2}
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4 font-mono text-[8px] uppercase tracking-[0.18em] text-white/15">
            <span>{t.reviews.system}</span>

            <span className="h-1 w-1 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />

            <span className="text-blue-400/50">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(reviews.length).padStart(2, "0")}
            </span>
          </div>
        </motion.div>

        {/* ===================================================
            SLIDER
        =================================================== */}

        <div
          className="relative mx-auto mt-12 max-w-[1050px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#080d16]/80 backdrop-blur-xl">
            {/* Top scan line */}

            <motion.div
              key={`scan-${progressKey}`}
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-0 z-20 h-px w-1/3 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
            />

            <div className="grid min-h-[430px] lg:grid-cols-[0.72fr_1.28fr]">
              {/* =================================================
                  LEFT — PROJECT / CLIENT
              ================================================= */}

              <div className="relative flex flex-col justify-between overflow-hidden border-b border-white/[0.07] p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10">
                {/* Decorative number */}

                <div className="pointer-events-none absolute -right-5 top-4 font-mono text-[110px] font-semibold leading-none text-white/[0.018]">
                  {activeReview.id}
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                      {t.reviews.project}
                    </span>

                    <span className="font-mono text-[9px] text-blue-400/50">
                      VTX.{activeReview.id}
                    </span>
                  </div>

                  <div className="mt-8">
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-blue-400/60">
                      {t.reviews.client}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                      {activeReview.name}
                    </h3>

                    <p className="mt-2 text-xs text-white/30">
                      {activeReview.role}
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  {/* Rating */}

                  <div className="mb-5 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={12}
                        className="fill-blue-400/70 text-blue-400/70"
                      />
                    ))}
                  </div>

                  {/* Project */}

                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-blue-500/50" />

                    <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
                      {activeReview.project}
                    </span>
                  </div>
                </div>
              </div>

              {/* =================================================
                  RIGHT — QUOTE
              ================================================= */}

              <div className="relative flex flex-col justify-between p-7 sm:p-9 lg:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeReview.id}-${language}`}
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -12,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex h-full flex-col justify-between"
                  >
                    <div>
                      <Quote
                        size={32}
                        strokeWidth={1.3}
                        className="text-blue-400/40"
                      />

                      <p className="mt-8 max-w-2xl text-xl font-medium leading-9 tracking-[-0.02em] text-white/75 sm:text-2xl sm:leading-10 lg:text-[2rem] lg:leading-[1.45]">
                        “{activeReview.quote}”
                      </p>
                    </div>

                    <div className="mt-12">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/15">
                          {t.reviews.feedback}
                        </span>

                        <span className="font-mono text-[8px] text-white/15">
                          {isPaused
                            ? t.reviews.paused
                            : t.reviews.autoPlay}
                        </span>
                      </div>

                      {/* Progress */}

                      <div className="h-px w-full overflow-hidden bg-white/[0.06]">
                        {!isPaused && (
                          <motion.div
                            key={`progress-${progressKey}-${language}`}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{
                              duration:
                                AUTO_PLAY_DURATION / 1000,
                              ease: "linear",
                            }}
                            className="h-full bg-blue-500/60"
                          />
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* ===================================================
              CONTROLS
          =================================================== */}

          <div className="mt-6 flex items-center justify-between">
            {/* Dots */}

            <div className="flex items-center gap-2">
              {reviews.map((review, index) => (
                <button
                  key={review.id}
                  type="button"
                  onClick={() => goToReview(index)}
                  aria-label={`${index + 1}`}
                  className="group flex h-6 items-center"
                >
                  <span
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === activeIndex
                        ? "w-8 bg-blue-400"
                        : "w-2 bg-white/15 group-hover:bg-white/30"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Arrows */}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previousReview}
                aria-label={t.reviews.previous}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-white/35 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.06] hover:text-white"
              >
                <ArrowLeft size={16} />
              </button>

              <button
                type="button"
                onClick={nextReview}
                aria-label={t.reviews.next}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-white/35 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.06] hover:text-white"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM SYSTEM LINE
        =================================================== */}

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
          }}
          className="mt-16 flex origin-left items-center gap-4"
        >
          <span className="font-mono text-[8px] tracking-[0.2em] text-white/15">
            {t.reviews.trust}
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] via-blue-500/[0.12] to-transparent" />

          <span className="font-mono text-[8px] tracking-[0.2em] text-blue-400/30">
            {t.reviews.clientFirst}
          </span>
        </motion.div>
      </div>
    </section>
  );
}