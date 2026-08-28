import { useLanguage } from "./LanguageProvider";
import { translations } from "./translations";

export function useTranslation() {
  const { language } = useLanguage();

  return {
    t: translations[language],
    language,
  };
}