import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import english from "./translations/english";
import spanish from "./translations/spanish";
import romanian from "./translations/romanian";
import catalan from "./translations/catalan";


const locale = Intl.DateTimeFormat().resolvedOptions().locale;
i18n
  .use(LanguageDetector) //localizationContext
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: english,
       },
      es: {
        translations: spanish,
      },
      ro: {
        translations: romanian,
       },
      ca: {
        translations: catalan,
       },
    },

    lng: locale,
    fallbackLng: "es",
    debug: true,

    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;