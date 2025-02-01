import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getSelectedLanguage, setSelectedLanguage } from "../utils";

const useLanguage = () => {
  const { i18n } = useTranslation();

  const storedLang = getSelectedLanguage().orDefault({
    selectedLang: "en",
  }).selectedLang;

  useEffect(() => {
    i18n.changeLanguage(storedLang);
  }, [storedLang, i18n]);

  const langToggle = () => {
    const newLanguage = i18n.language === "en" ? "ka" : "en";

    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return { lang: i18n.language, langToggle };
};

export default useLanguage;
