import Meta from "../components/meta";
import textBlock from "../components/textBlock";

export default function SearchGuide() {
  return (
    <>
      <Meta title="Search GUide" description="Search Guide" />
      <div>
        <textBlock.Header text="Search Guide" type="h1" />
        <p className="text-justify">
          Searching helps you find the help docs that solve the programming
          problems you are having trouble with. To make searching easier and
          faster, several search features are implemented to help you find the
          help docs that you are interested in. The Code Help search form is
          responsive so the filter options will update based on the docs
          returned from the search. For more information on help doc search
          filters, check out the Search Filters section below.
        </p>
      </div>
      <div>
        <textBlock.Header text="Search Filters" type="h2" />
        <div className="space-y-6 text-justify">
          <p>
            Help docs can be filtered by their title, section, and tags. These
            filter options can be used alone or in combination with other
            filters to make drilling into different technologies easy. Check out
            the search filter sections below for more information on filtering
            help docs.
          </p>
          <div>
            <textBlock.Header text="Title Filter" type="h3" />
            <p>
              The title filter is a text filter that allows you to filter help
              docs by their title. This filter is case insensitive and will
              return help docs that match any part of the title. The title
              filter really shines when you know part of the name of the help
              doc&apos;s title and want to quickly reach it.
            </p>
          </div>
          <div>
            <textBlock.Header text="Section Filter" type="h3" />
            <p>
              The section filter contains a list of section tags that retrieves
              all help docs in that section. The section filter is responsive so
              only sections available in the help docs returned by other filters
              will be visible. As help docs can only have one section, only one
              section may be selected at a time. Section filters are helpful
              when you want to explore a new technology, simply add the section
              you are interested in and all help docs in that section will be
              retrieved.
            </p>
          </div>
          <div>
            <textBlock.Header text="Tag Filter" type="h3" />
            <p>
              The tag filter contains a list of tags that retrieves all help
              docs that includes the list of tags chosen. Multiple tags may be
              selected at the same time. The tag filter is responsive so only
              tags available in the help docs returned by other filters will be
              visible. Tag filters are great when searching for help docs where
              you want to explore the intersection between multiple
              technologies, just select a couple of tags you are interested in
              and all help docs including all of those tags will be retrieved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
