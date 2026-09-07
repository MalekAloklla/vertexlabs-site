"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Home,
  Scissors,
  Utensils,
} from "lucide-react";

import { useLanguage } from "@/i18n/LanguageProvider";

const websites = [
  {
    id: "restaurant",
    icon: Utensils,
    enCategory: "RESTAURANT WEBSITE",
    arCategory: "موقع مطعم",
    enTitle: "Modern Restaurant",
    arTitle: "مطعم عصري",
  },
  {
    id: "real-estate",
    icon: Home,
    enCategory: "REAL ESTATE WEBSITE",
    arCategory: "موقع عقارات",
    enTitle: "Premium Real Estate",
    arTitle: "عقارات متميزة",
  },
  {
    id: "business",
    icon: Building2,
    enCategory: "BUSINESS WEBSITE",
    arCategory: "موقع شركة",
    enTitle: "Corporate Business",
    arTitle: "شركة احترافية",
  },
  {
    id: "barbershop",
    icon: Scissors,
    enCategory: "BARBERSHOP WEBSITE",
    arCategory: "موقع صالون وحلاقة",
    enTitle: "Modern Barbershop",
    arTitle: "صالون عصري",
  },
] as const;

export default function ReadyWebsites() {
  const { isArabic } = useLanguage();

  return (
    <section
      id="websites"
      className="relative overflow-hidden border-t border-white/[0.05] py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.06] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.35em] text-blue-400/70">
            {isArabic ? "مواقع جاهزة للبيع" : "READY WEBSITES FOR SALE"}
          </p>

          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            {isArabic ? "أطلق موقعك بشكل أسرع" : "Launch Faster. Start Smarter."}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
            {isArabic
              ? "مواقع احترافية مصممة لأنشطة حقيقية، جاهزة للإطلاق والتخصيص حسب احتياجاتك."
              : "Professionally designed websites built for real businesses, ready to be launched and customized to your needs."}
          </p>
        </motion.div>

        {/* Website Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {websites.map((website, index) => {
            const Icon = website.icon;

            return (
              <motion.div
                key={website.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080d16]"
              >
                {/* Preview */}
                <div className="relative h-52 overflow-hidden border-b border-white/[0.06] bg-gradient-to-br from-[#0d1625] via-[#080d16] to-[#05080d]">
                  {/* Browser frame */}
                  <div className="absolute inset-5 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a101a] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                    <div className="flex h-7 items-center gap-1.5 border-b border-white/[0.06] px-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                    </div>

                    <div className="flex h-full items-center justify-center">
                      <Icon
                        size={38}
                        strokeWidth={1.2}
                        className="text-white/15 transition-all duration-500 group-hover:scale-110 group-hover:text-blue-400/50"
                      />
                    </div>
                  </div>

                  {/* Coming Soon */}
                  <div className="absolute right-7 top-7 rounded-full border border-blue-400/20 bg-[#07101d]/90 px-3 py-1.5 backdrop-blur-md">
                    <span className="font-mono text-[9px] font-medium tracking-[0.18em] text-blue-400/80">
                      {isArabic ? "قريبًا" : "COMING SOON"}
                    </span>
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080d16] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/25">
                    {isArabic ? website.arCategory : website.enCategory}
                  </p>

                  <h3 className="mt-2 text-lg font-medium tracking-tight text-white/85">
                    {isArabic ? website.arTitle : website.enTitle}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-white/35">
                    {isArabic
                      ? "موقع احترافي مصمم لهذا النوع من الأنشطة التجارية."
                      : "A professionally designed website built for this type of business."}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
                    <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/25">
                      {isArabic ? "متاح قريبًا" : "AVAILABLE SOON"}
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-white/20 transition-all duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-500/10 group-hover:text-blue-400">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}