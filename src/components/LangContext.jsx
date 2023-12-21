import { createContext, useContext, useState } from "react";

import translationsEn from "../lang/en.js";
import translationsEs from "../lang/es.js";

const LangContext = createContext();

export const useLang = () => useContext(LangContext);

export function LangProvider({ children }) {
  const [lang, setLang] = useState({
    lang: "en", // Establece el idioma predeterminado (puedes cambiarlo según tus necesidades)
    translations: {
      en: translationsEn,
      es: translationsEs,
    },
  });

  return (
    <LangContext.Provider value={[lang, setLang]}>
      {children}
    </LangContext.Provider>
  );
}
