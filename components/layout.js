import { useEffect } from "react";
import useMenu from "../hooks/useMenu";
import useSearching from "../hooks/useSearching";
import useOnRouteChange from "../hooks/useOnRouteChange";
import Header from "./header";
import Menu from "./menu";
import Search from "./search";
import Sidebar from "./sidebar";
import useDarkMode from "../hooks/useDarkMode";

export default function Layout({ children }) {
  const { isSearching, setIsSearching } = useSearching();
  const { isMenuOpen, setMenuOpen } = useMenu();
  const { isDarkMode } = useDarkMode();

  function closeAllPopups() {
    setIsSearching(false);
    setMenuOpen(false);
  }

  useOnRouteChange(closeAllPopups);

  useEffect(() => {
    if (isSearching) {
      setMenuOpen(false);
    }
  }, [isSearching, setMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      setIsSearching(false);
    }
  }, [isMenuOpen, setIsSearching]);
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div
        className={`overflow-y-auto font-serif bg-white dark:bg-primaryDark dark:text-slate-200`}
      >
        <div className="sticky top-0 z-10 bg-white dark:bg-primaryDark">
          <Header />
        </div>

        <div
          className={`relative h-[calc(100vh_-_57px)] sm:h-[calc(100vh_-_57px)]${
            isSearching || isMenuOpen ? " block" : " hidden"
          }`}
        >
          {isSearching && <Search closeSearch={() => setIsSearching(false)} />}
          {isMenuOpen && <Menu />}
        </div>

        <div
          className={`flex space-x-0 sm:space-x-5 px-4 h-[calc(100vh_-_57px)] sm:h-[calc(100vh_-_57px)] max-w-7xl xl:mx-auto space-x-0 sm:space-x-5${
            isSearching || isMenuOpen ? " hidden" : ""
          }`}
        >
          <div className="flex-shrink-0 hidden overflow-y-hidden basis-52 sm:block">
            <Sidebar />
          </div>

          <div className="flex-grow flex-shrink w-1">
            <main className="pb-2">
              <div className="my-8 space-y-6 sm:pr-4">{children}</div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
