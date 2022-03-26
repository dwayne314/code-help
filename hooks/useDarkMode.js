import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext({});

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!isDarkMode);
  }

  return (
    <DarkModeContext.Provider value={{ toggleDarkMode, isDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default function useDarkMode() {
  return useContext(DarkModeContext);
}
