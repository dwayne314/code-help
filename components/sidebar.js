import Link from "next/link";
import {
  BsBookmarkCheck,
  BsInboxes,
  BsReverseLayoutTextSidebarReverse,
  BsSearch,
} from "react-icons/bs";
import useSearching from "../hooks/useSearching";

export default function Sidebar() {
  const { isSearching, setIsSearching } = useSearching();

  return (
    <div className="fixed flex-shrink-0 w-52">
      <div className="w-full mt-8">
        <button
          className="flex items-center w-full px-2 py-1 space-x-2 border-2 border-gray-200 rounded dark:bg-secondaryDark dark:border-secondaryDark"
          onClick={() => setIsSearching(!isSearching)}
        >
          <BsSearch className="h-3.5 w-3.5 fill-gray-500" />
          <span className="text-sm font-light text-gray-500">Search docs</span>
        </button>

        <div className="flex flex-col mt-4 text-sm">
          <Link href="/section-guide">
            <a>
              <div className="flex items-center py-2 cursor-pointer hover:text-blue-500 dark:hover:text-orange-300">
                <BsInboxes className="mr-2" />
                <span>Section Guide</span>
              </div>
            </a>
          </Link>
          <Link href="/tagging-rules">
            <a>
              <div className="flex items-center py-2 cursor-pointer hover:text-blue-500 dark:hover:text-orange-300">
                <BsBookmarkCheck className="mr-2" />
                <span>Tagging Rules</span>
              </div>
            </a>
          </Link>
          <Link href="/style-guide">
            <a>
              <div className="flex items-center py-2 cursor-pointer hover:text-blue-500 dark:hover:text-orange-300">
                <BsReverseLayoutTextSidebarReverse className="mr-2" />
                <span>Style Guide</span>
              </div>
            </a>
          </Link>
          <Link href="/search-guide">
            <a>
              <div className="flex items-center py-2 cursor-pointer hover:text-blue-500 dark:hover:text-orange-300">
                <BsReverseLayoutTextSidebarReverse className="mr-2" />
                <span>Search Guide</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
