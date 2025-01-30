import { getSelectedLanguage } from ".";
import en from "../locale/en/en.json";
import ka from "../locale/ka/ka.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const { selectedLang } = getSelectedLanguage().orDefault({
  selectedLang: "en",
});

const resources = {
  en: { translation: en },
  ka: { translation: ka },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: selectedLang,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
