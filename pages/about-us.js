import Meta from "../components/meta";
import textBlock from "../components/textBlock";

export default function AboutUs(props) {
  return (
    <>
      <Meta title="About Help Docs" description="Home Page" />
      <div>
        <textBlock.Header text="About Code Help" type="h1" />
        <p className="text-justify">
          Code Help was created as a way to quickly get information on how to
          complete common programming tasks. Code Help provides a centralized
          location for this information in the form of help docs and includes
          searching features that make getting the information you need easier
          than ever.
        </p>
      </div>
      <div>
        <textBlock.Header text="Motivation" type="h2" />
        <p className="text-justify">
          Code Help started as a response to a common problem many face when
          working on a new programming project. You get an idea about a project
          that you want to work on and suddenly you remember that you forgot how
          to set up the project, download dependencies, or even deploy the
          project. You start digging through blog posts, browser search history,
          and even personal code snippets to find the information that you need.
          Code Help eliminates this step by providing a centralized location for
          this information and a searchable interface to make finding what you
          need easy.
        </p>
      </div>
      <div>
        <textBlock.Header text="What's Coming Next?" type="h2" />
        <div className="space-y-6 text-justify">
          <p className="text-justify">
            As the number of help docs increases and as docs go out of date,
            additional complexities will be introduced that will naturally
            reduce the effectiveness of Code Help. To combat this complexity the
            following features will be introduced as needed:
          </p>
          <div>
            <textBlock.Header text="Date Filters For Search" type="h3" />
            <p>
              Adding a date filter to help doc searching will allow you to
              filter help docs by creation and updated dates to ensure that only
              docs made in these timeframes will be visible.
            </p>
          </div>
          <div>
            <textBlock.Header text="Help Doc Archiving" type="h3" />
            <p>
              Adding the ability to archive docs will allow out of date docs to
              be discontinued while still allowing you to view them if the need
              arises.
            </p>
          </div>
          <div>
            <textBlock.Header text="Fuzzy Title Search" type="h3" />
            <p>
              As the number of help docs increases, the usefulness of the help
              doc title search will also begin to decrease. Fuzzy title search
              will allow you to filter help doc titles while reducing the
              penalty for misspelling help doc titles.
            </p>
          </div>
          <div>
            <textBlock.Header text="Any Tag Filters" type="h3" />
            <p>
              Currently, tag and section filters are very restrictive. If a help
              doc does not include a selected tag, it will not be returned in
              the search results. While this benefits narrowing down search
              results and finding information quickly, it limits your ability to
              explore the help docs for a basket of technologies. Any tag
              filters will allow your search to return all help docs if any of
              the selected tags are present.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
