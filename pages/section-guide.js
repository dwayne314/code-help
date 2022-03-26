import Meta from "../components/meta";
import textBlock from "../components/textBlock";

export default function Sections() {
  return (
    <>
      <Meta title="Sections" description="Sections" />
      <div>
        <textBlock.Header text="Section Guide" type="h1" />
        <p className="text-justify">
          As each help doc has a primary purpose, a doc&apos;s section will
          refer to the primary technology required to carry out that purpose.
          Sections help keep help docs organized and enable searching by base
          technologies that allow you to target specific technologies. Check out
          the Sections Rules below for more information of how sections are
          implemented in help docs.
        </p>
      </div>
      <div className="space-y-6 text-justify">
        <textBlock.Header text="Section Rules" type="h2" includesBody={false} />
        <div>
          <textBlock.Header
            text="Every Help Doc Will Have 1 Section"
            type="h3"
          />
          <p>
            Every help doc should have a singular purpose that deals with a
            primary technology which will be indicated by its section.
          </p>
        </div>
        <div>
          <textBlock.Header
            text="A Help Doc's Section Should Be Inferable"
            type="h3"
          />
          <p>
            Because every help doc should have a single purpose, the section for
            the doc should be able to be logically determined from the
            doc&apos;s content. In cases where a help doc&apos;s section cannot
            be logically inferred, that is a strong indicator that the help
            doc&apos;s purpose is not well defined and most likely should be
            broken up into multiple docs.
          </p>
        </div>
        <div>
          <textBlock.Header
            text="A Help Doc's Section Should Be General"
            type="h3"
          />
          <p>
            Because help docs are intended to be filtered by technologies,
            overly restrictive sections would increase the difficulty of finding
            the intended documents. To facilitate searching, sections should
            refer to the base technology used where more specific details are
            delegated to tags. Check out the Tagging Rules Section for more
            information on tagging.
          </p>
        </div>
      </div>
    </>
  );
}
