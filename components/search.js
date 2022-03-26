import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsXLg } from "react-icons/bs";
import useSearching from "../hooks/useSearching";
import Tag from "./tag";

export default function Search({ closeSearch }) {
  const {
    allDocs,
    allSections,
    allTags,
    filterDocs,
    getSectionsFromDocs,
    getTagsFromDocs,
  } = useSearching();

  const [visibleDocs, setVisibleDocs] = useState([]);
  const [visibleTags, setVisibleTags] = useState([]);
  const [visibleSections, setVisibleSections] = useState([]);
  const [searchResults, setSearchResults] = useState(visibleDocs);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedSections, setSelectedSections] = useState([]);

  function toggleTag(tagId) {
    if (selectedTags.indexOf(tagId) !== -1) {
      setSelectedTags(selectedTags.filter((tag) => tag !== tagId));
    } else {
      setSelectedTags([...selectedTags, tagId]);
    }
  }

  function toggleSection(sectionId) {
    if (selectedSections.indexOf(sectionId) !== -1) {
      setSelectedSections(
        selectedSections.filter((section) => section !== sectionId)
      );
    } else {
      setSelectedSections([...selectedSections, sectionId]);
    }
  }

  function submitForm(evt) {
    evt.preventDefault();
  }

  useEffect(() => {
    const filteredDocs = filterDocs({
      searchTerm,
      sectionId: selectedSections,
      tagIds: selectedTags,
    });

    const filteredSections = getSectionsFromDocs({
      docs: filteredDocs,
      includeSections: selectedSections,
    });
    const filteredTags = getTagsFromDocs({
      docs: filteredDocs,
      includeTags: selectedTags,
    });

    setVisibleTags(filteredTags);
    setVisibleSections(filteredSections);
    setSearchResults(filteredDocs);
  }, [
    searchTerm,
    selectedTags,
    selectedSections,
    filterDocs,
    getSectionsFromDocs,
    getTagsFromDocs,
  ]);

  useEffect(() => {
    setVisibleDocs(allDocs);
    setVisibleTags(allTags);
    setVisibleSections(allSections);
  }, [allDocs, allTags, allSections]);

  return (
    <div className="absolute w-full -translate-x-1/2 top-12 left-1/2 sm:px-0 h-4/5 sm:w-4/5">
      <div className="flex justify-center w-full px-4">
        <div className="relative w-full max-w-md">
          <BsXLg
            onClick={closeSearch}
            className="absolute right-0 cursor-pointer -top-6 fill-gray-400 hover:fill-black"
          />
          <form onSubmit={submitForm} className="flex flex-col space-y-4">
            <input
              placeholder="Search Docs..."
              value={searchTerm}
              onChange={(evt) => setSearchTerm(evt.target.value)}
              className="px-2 py-1 text-xl border-b-2 rounded sm:text-2xl dark:bg-secondaryDark dark:border-secondaryDark"
            ></input>
            <div>
              <div className="mb-2 font-light">Include Sections</div>
              <div className="flex flex-wrap -ml-1 space-x-1 space-y-1">
                {visibleSections.map((section) => {
                  return (
                    <Tag
                      key={`section ${section.id}`}
                      text={section.name}
                      onClick={() => toggleSection(section.id)}
                      isClicked={selectedSections.indexOf(section.id) !== -1}
                    />
                  );
                })}
              </div>
            </div>
            <div>
              <div className="mb-2 font-light">Include Tags</div>
              <div className="flex flex-wrap -ml-1 space-x-1 space-y-1">
                {visibleTags.map((tag) => {
                  return (
                    <Tag
                      key={`tag ${tag.id}`}
                      text={tag.title}
                      onClick={() => toggleTag(tag.id)}
                      isClicked={selectedTags.indexOf(tag.id) !== -1}
                    />
                  );
                })}
              </div>
            </div>
          </form>
          <div className="mt-8">
            <div className="mb-2 font-light">Found Docs</div>
            <div className="space-y-1 overflow-y-auto">
              {searchResults?.map((result) => {
                return (
                  <Link
                    href={`/docs/${result.id}`}
                    key={`search result - ${result.id}`}
                  >
                    <a className="block">
                      <div className="flex items-center h-10 px-2 bg-gray-200 rounded cursor-pointer hover:bg-gray-300 dark:bg-lightDark dark:hover:bg-secondaryDark">
                        <span className="text-sm sm:text-md">
                          {result.title}
                        </span>
                      </div>
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
