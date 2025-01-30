import { createContext, PropsWithChildren, useState } from "react";
import { getSelectedLanguage } from "../utils";

const LanguageContext = createContext<undefined>(undefined);

const LanguageProvider = ({ children }: PropsWithChildren) => {
  const selectedLang = getSelectedLanguage().orDefault({ selectedLang: "en" });
  const [lang, setLang] = useState(() => selectedLang);

  const langToggle = () => {};

  const value = {} as any;
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
