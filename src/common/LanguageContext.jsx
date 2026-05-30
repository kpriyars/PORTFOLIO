import { createContext } from "react";
import en from "../Languages/en";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Since we are only using English, we can directly set the texts
  const texts = en;

  return (
    <LanguageContext.Provider value={{ texts }}>
      {children}
    </LanguageContext.Provider>
  );
};