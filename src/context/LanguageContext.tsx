"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "sr" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ 
  children,
  defaultLang
}: { 
  children: ReactNode;
  defaultLang?: Lang;
}) => {

  const parent = useContext(LanguageContext);

  const [lang, setLang] = useState<Lang>(
    defaultLang || parent?.lang || "sr"
  );

  const toggleLang = () =>
    setLang(prev => prev === "sr" ? "en" : "sr");

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context){
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
};