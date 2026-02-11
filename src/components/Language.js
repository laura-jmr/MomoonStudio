import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function Language({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "de";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "de" ? "en" : "de"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
