import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "../public/locales/en/translationEN.json";
import translationCS from "../public/locales/cs/translationCS.json";

const resources = {
  cs: {
    translation: translationCS,
  },
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "cs",
  keySeparator: false,
  interpolation: { escapeValue: false },
});

export default i18n;
