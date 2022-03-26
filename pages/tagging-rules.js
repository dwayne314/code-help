import Meta from "../components/meta";
import textBlock from "../components/textBlock";

export default function TaggingRules() {
  return (
    <>
      <Meta title="Tagging Rules" description="Tagging Rules" />
      <div>
        <h1 className="mb-4 text-3xl text-center sm:text-4xl dark:text-orange-300">
          Tagging Rules
        </h1>
        <p className="text-justify">
          As a help doc can incorporate many different technologies, tags
          identify all of the technologies that a help doc deals with. This
          enables searching for help docs by specific technologies, although
          they might not be the primary technology used in the doc. Check out
          the tagging rules section below for more information on how tags are
          implemented in help docs.
        </p>
      </div>
      <div className="space-y-6 text-justify">
        <textBlock.Header text="Tagging Rules" type="h2" includesBody={false} />
        <div>
          <textBlock.Header
            text="Every Help Doc Will Have At Least One Tag"
            type="h3"
          />
          <p>
            Because every help doc will require the use of one or more
            technologies, every help doc will contain one or more tags to
            indicate the technologies used.
          </p>
        </div>
        <div>
          <textBlock.Header
            text="A Help Doc's Tags Should Be Extensive"
            type="h3"
          />
          <p>
            As tags are used for detailed filtering of help docs, tags should be
            representative of all required technologies used in a document. As
            there are no limits to the number of tags a help doc can have, a
            help doc&apos;s tags should be extensive in order to represent all
            technologies used in the help doc.
          </p>
        </div>
        <div>
          <textBlock.Header
            text="A Help Doc's Tags Should Be Specific"
            type="h3"
          />
          <p>
            Tags should be specific in the technologies they denote. In order
            for help docs to support filtering through different technology
            versions, help docs targeting a specific technology version will
            include a base tag for the technology as well as a tag for the
            specific version targeted.
          </p>
        </div>
      </div>
    </>
  );
}
