"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  t: {
    faq: {
      eyebrow: string;
      title1: string;
      title2: string;
      description: string;
      contact: string;
      bottomTitle: string;
      bottomDescription: string;
      startProject: string;
      items: readonly FAQItem[];
    };
  };
};

export default function FAQ({ t }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-t border-white/[0.06]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.035] blur-[150px]" />

      <div className="relative mx-auto w-full max-w-[1200px] px-6 py-28 lg:px-10 lg:py-36">
        {/* ================= HEADER ================= */}

        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Left side */}

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
                {t.faq.eyebrow}
              </span>
            </div>

            <h2 className="mt-7 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              {t.faq.title1}
              <br />

              <span className="text-white/30">
                {t.faq.title2}
              </span>
            </h2>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/35 sm:text-base">
              {t.faq.description}
            </p>

            {/* Contact shortcut */}

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 text-xs font-medium text-white/45 transition-colors duration-300 hover:text-white"
            >
              {t.faq.contact}

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* ================= FAQ LIST ================= */}

          <div className="border-t border-white/[0.08]">
            {t.faq.items.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={`${index}-${faq.question}`}
                  className="border-b border-white/[0.08]"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                  >
                    <div className="flex items-start gap-5">
                      <span className="pt-1 font-mono text-[10px] tracking-[0.15em] text-blue-500/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`text-base font-medium transition-colors duration-300 sm:text-lg ${
                          isOpen
                            ? "text-white"
                            : "text-white/60 group-hover:text-white"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {/* Plus */}

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-blue-500/30 bg-blue-500/10 text-blue-400"
                          : "border-white/[0.08] bg-white/[0.02] text-white/35 group-hover:border-white/[0.15] group-hover:text-white/60"
                      }`}
                    >
                      <Plus size={17} />
                    </span>
                  </button>

                  {/* Answer */}

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7 pl-[3.15rem] pr-10">
                          <p className="max-w-2xl text-sm leading-7 text-white/35 sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div className="mt-20 flex flex-col items-start justify-between gap-5 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-white/40">
              {t.faq.bottomTitle}
            </p>

            <p className="mt-1 text-xs text-white/20">
              {t.faq.bottomDescription}
            </p>
          </div>

          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.025] px-5 py-3 text-xs text-white/50 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
          >
            {t.faq.startProject}

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}