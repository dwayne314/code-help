import Link from "next/link";
import { BsMoonStars, BsSun } from "react-icons/bs";
import useDarkMode from "../hooks/useDarkMode";
import MenuBtn from "./menuBtn";
import Logo from "../public/logo.svg";

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="w-full border-b border-black dark:border-secondaryDark">
      <div className="flex items-center justify-between p-4 max-w-7xl xl:mx-auto">
        <div>
          <div className="w-32 h-5 cursor-pointer">
            <Link href="/">
              <a>
                <Logo className="stroke-current fill-black dark:fill-orange-300 dark:stroke-orange-300" />{" "}
              </a>
            </Link>
          </div>
        </div>
        <div className="hidden h-full space-x-3 sm:flex">
          <Link href="/about-us">
            <a>
              <span className="p-1 rounded cursor-pointer hover:text-blue-500 dark:hover:text-orange-300">
                About Us
              </span>
            </a>
          </Link>
          <div
            onClick={toggleDarkMode}
            className="pl-4 border-l border-gray-300 cursor-pointer hover:text-blue-500 dark:hover:text-orange-300"
          >
            {isDarkMode ? (
              <BsSun className="w-6 h-6" />
            ) : (
              <BsMoonStars className="w-6 h-6" />
            )}
          </div>
        </div>
        <span className="flex sm:hidden">
          <MenuBtn />
        </span>
      </div>
    </div>
  );
}
