import { createContext, useContext, useEffect, useState } from "react";
import { getSectionById } from "../lib/sections";
import { getTagById } from "../lib/tags";
import allDocs from "../data/docs.json";

const SearchingContext = createContext({});

export function SearchingProvider({ children }) {
  const [isSearching, setIsSearching] = useState(false);

  // A list of deduped sections present in all help docs
  const allSections = [
    ...new Set(
      allDocs.reduce((agg, doc) => {
        return [...agg, getSectionById(doc.sectionId)];
      }, [])
    ),
  ];

  // A list of deduped tags present in all help docs
  const allTags = [
    ...new Set(
      allDocs.reduce((agg, doc) => {
        const docTags = doc.tagIds.map((tagId) => getTagById(tagId));
        return [...agg, ...docTags];
      }, [])
    ),
  ];

  function filterDocs({ searchTerm, sectionId, tagIds }) {
    // Returns help docs including the specific section id
    function filterDocsBySectionId(docs) {
      return docs.filter(
        (doc) => !sectionId.length || sectionId.indexOf(doc.sectionId) !== -1
      );
    }

    // Returns help docs inluding all specified tag ids
    function filterDocsByTagIds(docs) {
      return docs.filter((doc) =>
        tagIds.every((tag) => doc.tagIds.indexOf(tag) !== -1)
      );
    }

    // Returns help docs with titles matching the searchTerm
    function filterDocsByTitle(docs) {
      return docs.filter(
        (doc) =>
          doc.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      );
    }

    return filterDocsByTitle(
      filterDocsByTagIds(filterDocsBySectionId(allDocs))
    );
  }

  // Returns all sections found in a list of help docs
  function getSectionsFromDocs({ docs, includeSections }) {
    return [
      ...new Set(
        allSections.filter(
          (section) =>
            docs.map((result) => result.sectionId).indexOf(section.id) !== -1 ||
            includeSections.indexOf(section.id) !== -1
        )
      ),
    ];
  }

  // Returns all tags found in a list of help docs
  function getTagsFromDocs({ docs, includeTags }) {
    return [
      ...new Set(
        allTags.filter(
          (tag) =>
            docs
              .reduce((agg, result) => [...agg, ...result.tagIds], [])
              .indexOf(tag.id) !== -1 || includeTags.indexOf(tag.id) !== -1
        )
      ),
    ];
  }

  return (
    <SearchingContext.Provider
      value={{
        isSearching,
        setIsSearching,
        allDocs,
        allSections,
        allTags,
        filterDocs,
        getSectionsFromDocs,
        getTagsFromDocs,
      }}
    >
      {children}
    </SearchingContext.Provider>
  );
}

export default function useSearching() {
  return useContext(SearchingContext);
}
