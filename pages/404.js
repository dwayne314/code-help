import Link from "next/link";

export default function Custom404() {
  return (
    <div className="space-y-2 font-bold text-center">
      <div>This page could not be found. </div>
      <div>
        <span>Click</span>
        <span>
          {" "}
          <Link href="/">
            <a className="font-bold text-blue-500 border-b border-blue-500 cursor-pointer dark:border-orange-300 dark:text-orange-300">
              here
            </a>
          </Link>{" "}
        </span>
        to go Home.
      </div>
    </div>
  );
}
