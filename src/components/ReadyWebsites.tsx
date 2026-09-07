"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  ExternalLink,
  Home,
  Scissors,
  ShoppingBag,
  Utensils,
} from "lucide-react";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";

const websites = [
  {
    id: "staylik",
    icon: ShoppingBag,
    image: "/projects/staylik.png",
    enCategory: "E-COMMERCE WEBSITE",
    arCategory: "موقع تجارة إلكترونية",
    enTitle: "STAYLIK",
    arTitle: "STAYLIK",
    enDescription:
      "A premium streetwear e-commerce website designed for a modern fashion brand.",
    arDescription:
      "متجر إلكتروني احترافي لعلامة أزياء Streetwear عصرية.",
    price: 1250,
    liveUrl: "https://staylik-store.vercel.app/",
    available: true,
  },
  {
    id: "restaurant",
    icon: Utensils,
    image: null,
    enCategory: "RESTAURANT WEBSITE",
    arCategory: "موقع مطعم",
    enTitle: "Modern Restaurant",
    arTitle: "مطعم عصري",
    enDescription:
      "A professionally designed website built for a modern restaurant.",
    arDescription:
      "موقع احترافي مصمم لمطعم عصري.",
    price: null,
    liveUrl: null,
    available: false,
  },
  {
    id: "real-estate",
    icon: Home,
    image: null,
    enCategory: "REAL ESTATE WEBSITE",
    arCategory: "موقع عقارات",
    enTitle: "Premium Real Estate",
    arTitle: "عقارات متميزة",
    enDescription:
      "A professionally designed website built for a modern real estate business.",
    arDescription:
      "موقع احترافي مصمم لنشاط عقاري عصري.",
    price: null,
    liveUrl: null,
    available: false,
  },
  {
    id: "business",
    icon: Building2,
    image: null,
    enCategory: "BUSINESS WEBSITE",
    arCategory: "موقع شركة",
    enTitle: "Corporate Business",
    arTitle: "شركة احترافية",
    enDescription:
      "A professionally designed website built for a modern business.",
    arDescription:
      "موقع احترافي مصمم لشركة حديثة.",
    price: null,
    liveUrl: null,
    available: false,
  },
  {
    id: "barbershop",
    icon: Scissors,
    image: null,
    enCategory: "BARBERSHOP WEBSITE",
    arCategory: "موقع صالون وحلاقة",
    enTitle: "Modern Barbershop",
    arTitle: "صالون عصري",
    enDescription:
      "A professionally designed website built for a modern barbershop.",
    arDescription:
      "موقع احترافي مصمم لصالون حلاقة عصري.",
    price: null,
    liveUrl: null,
    available: false,
  },
] as const;

const whatsappNumber = "971552861141";

export default function ReadyWebsites() {
  const { isArabic } = useLanguage();

  const [currentWebsite, setCurrentWebsite] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextWebsite = () => {
    setDirection(1);
    setCurrentWebsite((prev) => (prev + 1) % websites.length);
  };

  const previousWebsite = () => {
    setDirection(-1);
    setCurrentWebsite(
      (prev) => (prev - 1 + websites.length) % websites.length
    );
  };

  const website = websites[currentWebsite];
  const Icon = website.icon;

  const whatsappMessage = isArabic
  ? `مرحباً Vertex Labs 👋

أرغب بالاستفسار عن شراء موقع ${website.arTitle} المعروض للبيع بسعر AED ${website.price?.toLocaleString()}.

أود معرفة تفاصيل الشراء وما يشمله الموقع، بالإضافة إلى خطوات إتمام الطلب.

شكراً لكم.`
  : `Hello Vertex Labs 👋

I’m interested in purchasing the ${website.enTitle} website listed for AED ${website.price?.toLocaleString()}.

I’d like to know more about what’s included with the website, as well as the purchase process and next steps.

Thank you.`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="websites"
      className="relative overflow-hidden border-t border-white/[0.05] py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.06] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
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
            {isArabic
              ? "أطلق موقعك بشكل أسرع"
              : "Launch Faster. Start Smarter."}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
            {isArabic
              ? "مواقع احترافية مصممة لأنشطة حقيقية، جاهزة للإطلاق والتخصيص حسب احتياجاتك."
              : "Professionally designed websites built for real businesses, ready to be launched and customized to your needs."}
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative mx-auto mt-14 max-w-5xl">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={previousWebsite}
            aria-label="Previous website"
            className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.10] bg-[#080d16]/90 text-white/40 backdrop-blur-md transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white sm:left-[-28px] sm:h-[52px] sm:w-[52px]"
          >
            <ArrowLeft size={18} />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={nextWebsite}
            aria-label="Next website"
            className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.10] bg-[#080d16]/90 text-white/40 backdrop-blur-md transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white sm:right-[-28px] sm:h-[52px] sm:w-[52px]"
          >
            <ArrowRight size={18} />
          </button>

          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={website.id}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction > 0 ? 35 : -35,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: direction > 0 ? -35 : 35,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080d16]"
            >
              {/* Preview */}
              <div className="relative h-[260px] overflow-hidden border-b border-white/[0.06] bg-gradient-to-br from-[#0d1625] via-[#080d16] to-[#05080d] sm:h-[360px]">
                {website.image ? (
                  <Image
                    src={website.image}
                    alt={website.enTitle}
                    fill
                    sizes="(max-width: 640px) 100vw, 1024px"
                    className="object-cover object-top transition-transform duration-700"
                    priority={currentWebsite === 0}
                  />
                ) : (
                  <div className="absolute inset-6 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a101a] shadow-2xl sm:inset-10">
                    <div className="flex h-8 items-center gap-1.5 border-b border-white/[0.06] px-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                    </div>

                    <div className="flex h-[calc(100%-2rem)] items-center justify-center">
                      <Icon
                        size={48}
                        strokeWidth={1.1}
                        className="text-white/10"
                      />
                    </div>
                  </div>
                )}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080d16] via-transparent to-transparent" />

                {/* Status */}
                <div
                  className={`absolute right-5 top-5 rounded-full border px-3 py-1.5 backdrop-blur-md sm:right-7 sm:top-7 ${
                    website.available
                      ? "border-emerald-400/20 bg-emerald-500/10"
                      : "border-blue-400/20 bg-[#07101d]/90"
                  }`}
                >
                  <span
                    className={`font-mono text-[9px] font-medium tracking-[0.18em] ${
                      website.available
                        ? "text-emerald-400/80"
                        : "text-blue-400/80"
                    }`}
                  >
                    {website.available
                      ? isArabic
                        ? "متاح الآن"
                        : "AVAILABLE NOW"
                      : isArabic
                        ? "قريبًا"
                        : "COMING SOON"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div className="max-w-2xl">
                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/25">
                      {isArabic ? website.arCategory : website.enCategory}
                    </p>

                    <h3 className="mt-2 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                      {isArabic ? website.arTitle : website.enTitle}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/35">
                      {isArabic
                        ? website.arDescription
                        : website.enDescription}
                    </p>

                    {/* Price */}
                    {website.price !== null && (
                      <div className="mt-5">
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
                          {isArabic ? "السعر" : "PRICE"}
                        </span>

                        <div className="mt-1 text-2xl font-semibold tracking-tight text-white">
                          AED {website.price.toLocaleString()}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  {website.available && website.liveUrl ? (
                    <div className="flex shrink-0 flex-wrap gap-3">
                      <a
                        href={website.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.03] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.16em] text-white/60 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"
                      >
                        {isArabic ? "عرض الموقع" : "Live Demo"}
                        <ExternalLink size={14} />
                      </a>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
                      >
                        {isArabic ? "شراء الآن" : "Buy Now"}
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  ) : (
                    <span className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.02] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.16em] text-white/20">
                      {isArabic ? "متاح قريبًا" : "AVAILABLE SOON"}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Counter */}
          <div className="mt-6 flex items-center justify-center">
            <span className="font-mono text-xs tracking-[0.2em] text-white/30">
              <span className="text-blue-400">
                {String(currentWebsite + 1).padStart(2, "0")}
              </span>

              <span className="mx-2 text-white/15">/</span>

              {String(websites.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}