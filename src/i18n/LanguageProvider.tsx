"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { flushSync } from "react-dom";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  isArabic: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("vertex-language");

    if (savedLanguage === "ar" || savedLanguage === "en") {
      setLanguageState(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    localStorage.setItem("vertex-language", language);
  }, [language]);

  const setLanguage = (newLanguage: Language) => {
    if (newLanguage === language) return;

    const updateLanguage = () => {
      flushSync(() => {
        setLanguageState(newLanguage);
      });
    };

    if (
      typeof document !== "undefined" &&
      "startViewTransition" in document
    ) {
      const startViewTransition = (
        document as Document & {
          startViewTransition?: (
            callback: () => void,
          ) => {
            ready: Promise<void>;
            finished: Promise<void>;
          };
        }
      ).startViewTransition;

      if (startViewTransition) {
        startViewTransition.call(document, updateLanguage);
        return;
      }
    }

    updateLanguage();
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        isArabic: language === "ar",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider",
    );
  }

  return context;
}