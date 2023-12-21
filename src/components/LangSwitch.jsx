import { useLang } from "./LangContext";

import translationsEn from "../lang/en.js";
import translationsEs from "../lang/es.js";

function LangSwitch() {
  const [lang, setLang] = useLang();

  const handleLangChange = (e) => {
    const selectedLang = e.target.value;
    setLang({
      lang: selectedLang,
      translations: getTranslations(selectedLang),
    });
  };

  const getTranslations = (selectedLang) => {
    return selectedLang === "es" ? translationsEs : translationsEn;
  };

  return (
    <select value={lang} onChange={handleLangChange}>
      <option value="es">Español</option>
      <option value="en">Inglés</option>
    </select>
  );
}

export default LangSwitch;
