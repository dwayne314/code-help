function Header({ text, type = "h1", includesBody = true }) {
  switch (type) {
    case "h1":
      return (
        <h1 className="mb-4 text-3xl text-center sm:text-4xl dark:text-orange-300">
          {text}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`${
            includesBody ? "mb-2" : "-mb-4"
          } text-lg font-light sm:text-xl dark:text-orange-300`}
        >
          {text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mb-2 font-bold dark:text-gray-300 dark:opacity-60">
          {text}
        </h3>
      );
  }
}

const textBlock = {
  Header,
};

export default textBlock;
