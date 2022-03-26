import useMenu from "../hooks/useMenu";

export default function MenuBtn() {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <div
      onClick={toggleMenu}
      className="relative inline-flex flex-col justify-around w-5 h-5 my-auto cursor-pointer"
    >
      <div
        className={`w-full h-0.5 bg-black dark:bg-white duration-300 rounded${
          isMenuOpen ? " rotate-45 translate-y-[6.8px]" : ""
        }`}
      ></div>
      <div
        className={`w-full h-0.5 bg-black dark:bg-white duration-300 rounded${
          isMenuOpen ? " opacity-0" : ""
        }`}
      ></div>
      <div
        className={`w-full h-0.5 bg-black dark:bg-white duration-300 rounded${
          isMenuOpen ? " -rotate-45 -translate-y-[6.8px]" : ""
        }`}
      ></div>
    </div>
  );
}
