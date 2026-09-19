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
    originalPrice: 3000,
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
      (prev) => (prev - 1 + websites.length) % websites.length,
    );
  };

  const website = websites[currentWebsite];
  const Icon = website.icon;

  const title = isArabic ? website.arTitle : website.enTitle;
  const category = isArabic
    ? website.arCategory
    : website.enCategory;

  const description = isArabic
    ? website.arDescription
    : website.enDescription;

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
    whatsappMessage,
  )}`;

  return (
    <section
      id="websites"
      className="relative overflow-hidden border-t border-white/[0.05] py-24 sm:py-28"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-500/[0.05] blur-[150px]" />

        <div className="absolute bottom-[-180px] right-[-160px] h-[400px] w-[400px] rounded-full bg-blue-900/[0.04] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-blue-500/70" />

            <p className="font-mono text-[9px] font-medium uppercase tracking-[0.35em] text-blue-400/80">
              {isArabic
                ? "مواقع جاهزة للبيع"
                : "READY WEBSITES FOR SALE"}
            </p>

            <span className="h-px w-8 bg-blue-500/70" />
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            {isArabic
              ? "أطلق موقعك بشكل أسرع"
              : "Launch Faster. Start Smarter."}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/35 sm:text-base">
            {isArabic
              ? "مواقع احترافية مصممة لأنشطة حقيقية، جاهزة للإطلاق والتخصيص حسب احتياجاتك."
              : "Professionally designed websites built for real businesses, ready to be launched and customized to your needs."}
          </p>
        </motion.div>

        {/* =========================================================
            SLIDER
        ========================================================= */}

        <div className="relative mx-auto mt-12 max-w-5xl sm:mt-14">
          {/* LEFT ARROW */}

          <button
            type="button"
            onClick={previousWebsite}
            aria-label="Previous website"
            className="absolute left-1 top-[37%] z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.10] bg-[#080d16]/90 text-white/40 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white sm:left-[-25px] sm:h-12 sm:w-12"
          >
            <ArrowLeft size={17} />
          </button>

          {/* RIGHT ARROW */}

          <button
            type="button"
            onClick={nextWebsite}
            aria-label="Next website"
            className="absolute right-1 top-[37%] z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.10] bg-[#080d16]/90 text-white/40 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white sm:right-[-25px] sm:h-12 sm:w-12"
          >
            <ArrowRight size={17} />
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
                duration: 0.38,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#080d16] shadow-2xl shadow-black/20"
            >
              {/* =====================================================
                  WEBSITE PREVIEW
              ===================================================== */}

              <div className="relative h-[210px] overflow-hidden border-b border-white/[0.06] bg-gradient-to-br from-[#0d1625] via-[#080d16] to-[#05080d] sm:h-[290px]">
                {website.image ? (
                  <motion.div
                    initial={{ scale: 1.035 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={website.image}
                      alt={title}
                      fill
                      sizes="(max-width: 640px) 100vw, 1024px"
                      priority={currentWebsite === 0}
                      className="object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
                    />
                  </motion.div>
                ) : (
                  <div className="absolute inset-5 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a101a] shadow-2xl sm:inset-8">
                    {/* Browser top */}

                    <div className="flex h-7 items-center gap-1.5 border-b border-white/[0.06] px-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                    </div>

                    {/* Icon */}

                    <div className="flex h-[calc(100%-1.75rem)] items-center justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                        <Icon
                          size={34}
                          strokeWidth={1.1}
                          className="text-white/10"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Overlay */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080d16] via-transparent to-transparent" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.035] via-transparent to-transparent" />

                {/* Status */}

                <div
                  className={`absolute right-4 top-4 rounded-full border px-3 py-1.5 backdrop-blur-xl sm:right-5 sm:top-5 ${
                    website.available
                      ? "border-emerald-400/20 bg-emerald-500/10"
                      : "border-blue-400/20 bg-[#07101d]/90"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {website.available && (
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
                    )}

                    <span
                      className={`font-mono text-[8px] font-medium tracking-[0.18em] ${
                        website.available
                          ? "text-emerald-400/90"
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

                {/* Bottom preview label */}

                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-blue-400/80">
                      {category}
                    </p>

                    <h3 className="mt-1.5 text-xl font-semibold tracking-[-0.035em] text-white sm:text-2xl">
                      {title}
                    </h3>
                  </div>

                  <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/40 backdrop-blur-xl sm:flex">
                    <Icon size={15} />
                  </div>
                </div>
              </div>

              {/* =====================================================
                  PRODUCT INFO
              ===================================================== */}

              <div className="p-5 sm:p-7">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div className="min-w-0">
                    <p className="max-w-2xl text-sm leading-7 text-white/35">
                      {description}
                    </p>

                    {/* Product details */}

                    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                      <div>
                        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                          {isArabic ? "النوع" : "TYPE"}
                        </span>

                        <p className="mt-1 text-[11px] text-white/45">
                          {category}
                        </p>
                      </div>

                      {website.available && website.price !== null && (
  <div>
    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
      {isArabic ? "السعر" : "PRICE"}
    </span>

    <div className="mt-1 flex items-center gap-2.5">
      {website.originalPrice && (
        <span className="text-sm text-white/25 line-through decoration-white/30">
          AED {website.originalPrice.toLocaleString()}
        </span>
      )}

      <span className="text-lg font-semibold tracking-tight text-white">
        AED {website.price.toLocaleString()}
      </span>

      {website.originalPrice && (
        <span className="rounded-full border border-emerald-400/15 bg-emerald-500/[0.07] px-2 py-1 font-mono text-[8px] font-medium tracking-[0.12em] text-emerald-400/80">
          {isArabic ? "خصم 58%" : "58% OFF"}
        </span>
      )}
    </div>
  </div>
)}
                    </div>
                  </div>

                  {/* =================================================
                      ACTIONS
                  ================================================= */}

                  {website.available && website.liveUrl ? (
                    <div className="flex shrink-0 flex-wrap gap-2.5">
                      <a
                        href={website.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/demo inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.025] px-4 text-[9px] font-medium uppercase tracking-[0.15em] text-white/55 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"
                      >
                        {isArabic ? "عرض الموقع" : "Live Demo"}

                        <ExternalLink
                          size={13}
                          className="transition-transform duration-300 group-hover/demo:-translate-y-0.5 group-hover/demo:translate-x-0.5"
                        />
                      </a>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/buy inline-flex h-11 items-center justify-center gap-2 rounded-full bg-blue-500 px-5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]"
                      >
                        {isArabic ? "شراء الآن" : "Buy Now"}

                        <ArrowRight
                          size={13}
                          className="transition-transform duration-300 group-hover/buy:translate-x-0.5"
                        />
                      </a>
                    </div>
                  ) : (
                    <div className="shrink-0">
                      <span className="inline-flex h-11 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.02] px-5 text-[9px] font-medium uppercase tracking-[0.15em] text-white/20">
                        {isArabic ? "متاح قريبًا" : "AVAILABLE SOON"}
                      </span>
                    </div>
                  )}
                </div>

                {/* Bottom accent */}

                <div
                  className={`mt-6 h-px w-12 bg-blue-500/40 transition-all duration-700 group-hover:w-24 ${
                    isArabic ? "mr-0" : "ml-0"
                  }`}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* =========================================================
              COUNTER
          ========================================================= */}

          <div className="mt-6 flex items-center justify-center">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs tracking-[0.2em] text-white/25">
                <span className="text-blue-400">
                  {String(currentWebsite + 1).padStart(2, "0")}
                </span>

                <span className="mx-2 text-white/10">/</span>

                {String(websites.length).padStart(2, "0")}
              </span>

              <span className="h-px w-8 bg-white/[0.08]" />

              <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">
                {isArabic ? "مواقع" : "WEBSITES"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}