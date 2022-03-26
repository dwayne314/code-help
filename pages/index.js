import Link from "next/link";
import Meta from "../components/meta";
import textBlock from "../components/textBlock";
import useSearching from "../hooks/useSearching";

export default function Home() {
  const { setIsSearching } = useSearching();
  return (
    <>
      <Meta title="Home" description="Home Page" />
      <div>
        <textBlock.Header text="Welcome To Code Help" type="h1" />
        <p className="text-justify">
          Code Help is a site that centralizes help docs that contain solutions
          for common programming problems. The focus of each help doc is to
          define a problem and provide succinct, step-by-step examples and
          explanations to resolve the issue. To ensure the usefulness of help
          docs, Code Help emphasizes the following features:
        </p>
        <ul className="text-left">
          <li>Simple searching</li>
          <li>Consistent styling</li>
          <li>Document tagging</li>
        </ul>
      </div>
      <div>
        <textBlock.Header text="Searching" type="h2" />
        <p className="text-justify">
          <span>
            As the focus of Code Help is to easily provide relavant help docs to
            readers, searching is a primary feature of Code Help and the
            component that the majority of the site serves to facilitate. Each
            help doc includes metadata that makes searching for the information
            you need easy. Check out the
          </span>
          <span onClick={() => setIsSearching(true)} className="">
            {" "}
            <span className="font-bold text-blue-500 border-b border-blue-500 cursor-pointer dark:border-orange-300 dark:text-orange-300">
              Search Bar
            </span>{" "}
          </span>
          <span>
            to get started searching for docs. For more information on the Code
            Help searching capabilities check out our
          </span>
          <span>
            {" "}
            <Link href="/search-guide">
              <a className="font-bold text-blue-500 border-b border-blue-500 cursor-pointer dark:border-orange-300 dark:text-orange-300">
                Search Guide
              </a>
            </Link>
            {". "}
          </span>
        </p>
      </div>
      <div>
        <textBlock.Header text="Styles" type="h2" />
        <p className="text-justify">
          <span>
            Help docs are intended to be an quick, easy source of information.
            To facilitate the simple retreival of information, each doc is
            formatted to make getting the information you need as simple as
            possible. For more information on help doc formatting and how
            styling facilitates easy information retreival, check out our
          </span>
          <span>
            {" "}
            <Link href="/style-guide">
              <a className="font-bold text-blue-500 border-b border-blue-500 cursor-pointer dark:border-orange-300 dark:text-orange-300">
                Style Guide
              </a>
            </Link>
            {". "}
          </span>
        </p>
      </div>
      <div>
        <textBlock.Header text="Sections" type="h2" />
        <p className="text-justify">
          <span>
            Sections are special tags that identify the primary technology of a
            help doc. Help doc sections group docs with the same primary
            technologies which facilitates researching. While a doc can include
            many different technologies, a doc&apos;s section will always
            indicate the primary technology used. Check out our
          </span>
          <span>
            {" "}
            <Link href="/section-guide">
              <a className="font-bold text-blue-500 border-b border-blue-500 cursor-pointer dark:border-orange-300 dark:text-orange-300">
                Section Guide
              </a>
            </Link>{" "}
          </span>
          <span>for more information.</span>
        </p>
      </div>
      <div>
        <textBlock.Header text="Tagging" type="h2" />
        <p className="text-justify">
          <span>
            Help docs can be quite extensive depending on the goal of the doc
            and may require many different technologies that may be relevant
            across different docs. To simplify searching through help docs, A
            doc will include a tag for every technology used. For more
            information on how documents are tagged, check out our
          </span>
          <span>
            {" "}
            <Link href="/tagging-rules">
              <a className="font-bold text-blue-500 border-b border-blue-500 cursor-pointer dark:border-orange-300 dark:text-orange-300">
                Tagging Rules
              </a>
            </Link>
            {". "}
          </span>
        </p>
      </div>
    </>
  );
}
