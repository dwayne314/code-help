import { createContext, useContext, useState } from "react";

const MenuContext = createContext({});

export function MenuProvider({ children }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu, setMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
}

export default function useMenu() {
  return useContext(MenuContext);
}
