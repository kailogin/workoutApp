import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./translations/en.json";
import de from "./translations/de.json";
import ita from "./translations/ita.json";
import { Languages } from "./utils/types";

const resources = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
  ita: {
    translation: ita,
  },
};

export type LanguagesType = "English" | "Deutsch" | "Italiano";

export const mapLanguageCodeToLanguage = (
  languageCode: Languages | undefined
): LanguagesType => {
  if (languageCode === Languages.ENG) {
    return "English";
  }

  if (languageCode === Languages.GER) {
    return "Deutsch";
  }

  if (languageCode === Languages.ITA) {
    return "Italiano";
  }

  return "English";
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    compatibilityJSON: "v3",
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
