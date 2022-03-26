export default function Tag({ id, text, onClick, isClicked = false }) {
  return (
    <span
      onClick={onClick ? onClick : () => null}
      className={`text-xs px-2 py-1 bg-orange-100 flex-shrink-0 rounded first:ml-1 first:mt-1 dark:text-black${
        isClicked
          ? " bg-orange-300 dark:bg-orange-500"
          : " bg-orange-100 dark:bg-orange-300"
      } ${onClick ? " cursor-pointer" : ""}`}
    >
      {text}
    </span>
  );
}
