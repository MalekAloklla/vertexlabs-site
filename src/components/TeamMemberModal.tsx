"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

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

type TeamMemberModalProps = {
  member: TeamMember | null;
  onClose: () => void;
};

export default function TeamMemberModal({
  member,
  onClose,
}: TeamMemberModalProps) {
  return (
    <AnimatePresence>
      {member && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-md sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-white/[0.1] bg-[#080d16] shadow-2xl"
          >
            {/* Background Glow */}

            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

            <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-900/10 blur-[120px]" />

            {/* Close Button */}

            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/60 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="relative grid md:grid-cols-[0.85fr_1.15fr]">
              {/* =====================================================
                  IMAGE
              ===================================================== */}

              <div className="relative min-h-[420px] bg-[#060a11] md:min-h-[560px]">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-5xl text-white/[0.04]">
                      02
                    </span>
                  </div>
                )}

                {/* Image Gradient */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080d16] via-transparent to-transparent md:bg-gradient-to-r" />

                {/* Badge */}

                {member.badge && (
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-xl">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

                    <span className="text-[8px] uppercase tracking-[0.2em] text-white/60">
                      {member.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* =====================================================
                  CONTENT
              ===================================================== */}

              <div className="relative flex flex-col justify-center p-7 sm:p-10 md:p-12">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-blue-400">
                  {member.role}
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  {member.name}
                </h2>

                {/* Divider */}

                <div className="mt-6 h-px w-12 bg-blue-500" />

                {/* About */}

                <div className="mt-8">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                    About
                  </p>

                  <p className="mt-3 text-sm leading-7 text-white/45">
                    {member.description}
                  </p>
                </div>

                {/* Education */}

                <div className="mt-7">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                    Education / Background
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/45">
                    {member.education}
                  </p>
                </div>

                {/* Social Links */}

                <div className="mt-9 flex flex-wrap gap-2">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs text-white/50 transition-all hover:border-blue-500/30 hover:bg-blue-500/[0.06] hover:text-blue-400"
                    >
                      LinkedIn
                      <ArrowUpRight
                        size={13}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  )}

                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs text-white/50 transition-all hover:border-blue-500/30 hover:bg-blue-500/[0.06] hover:text-blue-400"
                    >
                      Instagram
                      <ArrowUpRight
                        size={13}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  )}

                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs text-white/50 transition-all hover:border-blue-500/30 hover:bg-blue-500/[0.06] hover:text-blue-400"
                    >
                      GitHub
                      <ArrowUpRight
                        size={13}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}