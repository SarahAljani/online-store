import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./Locals/en.json";
import ar from "./Locals/ar.json";

// Retrieve saved language from localStorage or set default
const savedLang = localStorage.getItem("language") || "en";

// Initialize i18next with translations
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
  },
  lng: savedLang,
  fallbackLng: "en", // Corrected from 'fallbacking' to 'fallbackLng'
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
