import Link from "next/link";
import { BsMoonStars, BsSun } from "react-icons/bs";
import useDarkMode from "../hooks/useDarkMode";
import useMenu from "../hooks/useMenu";
import useSearching from "../hooks/useSearching";

export default function Menu() {
  const { setIsSearching } = useSearching();
  const { toggleMenu } = useMenu();

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  function updateDarkMode() {
    toggleDarkMode();
    toggleMenu();
  }

  return (
    <div className="flex flex-col items-center justify-center justify-between w-full px-4 text-2xl">
      <Link href="/section-guide">
        <a>
          <span className="flex items-center h-24 cursor-pointer hover:text-blue-500 dark:hover:text-orange-300">
            1. Section Guide
          </span>
        </a>
      </Link>
      <Link href="/tagging-rules">
        <a>
          <span className="flex items-center h-24 cursor-pointer hover:text-blue-500 dark:hover:text-orange-300">
            2. Tagging Rules
          </span>
        </a>
      </Link>
      <Link href="/style-guide">
        <a>
          <span className="flex items-center h-24 cursor-pointer hover:text-blue-500 dark:hover:text-orange-300">
            3. Style Guide
          </span>
        </a>
      </Link>
      <Link href="/search-guide">
        <a>
          <span className="flex items-center h-24 cursor-pointer hover:text-blue-500 dark:hover:text-orange-300">
            4. Search Guide
          </span>
        </a>
      </Link>
      <span
        onClick={() => setIsSearching(true)}
        className="flex items-center h-24 cursor-pointer hover:text-blue-500 dark:hover:text-orange-300"
      >
        5. Search Docs
      </span>
      <Link href="/about-us">
        <a>
          <span className="flex items-center h-24 cursor-pointer hover:text-blue-500 dark:hover:text-orange-300">
            6. About Help Docs
          </span>
        </a>
      </Link>
      <span
        onClick={updateDarkMode}
        className="flex items-center h-24 space-x-3 cursor-pointer hover:text-blue-500 dark:hover:text-orange-300"
      >
        {!isDarkMode ? (
          <>
            <span>Dark Mode</span>
            <BsMoonStars className="w-5 h-5" />
          </>
        ) : (
          <>
            <span>Light Mode</span>
            <BsSun className="w-5 h-5" />
          </>
        )}
      </span>
    </div>
  );
}
