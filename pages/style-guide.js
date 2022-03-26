import Meta from "../components/meta";
import textBlock from "../components/textBlock";

export default function StyleGuide() {
  return (
    <>
      <Meta title="Style Guide" description="Style Guide" />
      <div>
        <textBlock.Header text="Style Guide" type="h1" />
        <p className="text-justify">
          All help docs follow the same style and formatting guidelines to make
          scanning through docs easier. The formatting and style guidelines
          affect both the metadata and the content of a help doc. For more
          information on the formatting rules for each section check out the
          sections below.
        </p>
      </div>
      <div>
        <textBlock.Header text="Metadata" type="h2" />
        <div className="space-y-6">
          <p className="text-justify">
            Help doc metadata refers to additional data that includes important
            information about the doc. There are both required and required
            metadata fields that help docs may include that facilitate doc
            identification, searching, and organization. Check out the list of
            metadata fields below with their significance.
          </p>
          <div>
            <textBlock.Header text="Required Fields" type="h3" />
            <ul className="py-0">
              <li>Title - The unique title for a help doc.</li>
              <li>Section Id - The help doc&apos;s primary section.</li>
              <li>
                Tag Ids - A list of tags that represents a help doc&apos;s
                required technologies.
              </li>
              <li>Created At - The date that the help doc was created.</li>
            </ul>
          </div>
          <div>
            <textBlock.Header text="Optional Fields" type="h3" />
            <ul className="py-0">
              <li>Updated At - The date that the help doc was last updated.</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <textBlock.Header text="Help Doc Content" type="h2" />
        <div className="space-y-6">
          <p className="text-justify">
            The help doc content refers to the user facing help doc information.
            While help docs can vary significantly in their content, the
            following layout guidelines will be enforced for all help docs to
            maintain consistency and simplify document scanning.
          </p>
          <div>
            <textBlock.Header text="Help Doc Headers" type="h3" />
            <p>
              As the help doc title is placed in the document metadata titles
              will not be used in the document itself. This also means help docs
              do not support markdown Level 1 or 2 Headings as all doc headers
              have lower importance than the post title.
            </p>
          </div>
          <div>
            <textBlock.Header text="Help Docs Code Comments" type="h3" />
            <p>
              Comments are included sparingly in help doc code blocks as they
              tend to clutter up the code example. However, they will be allowed
              in cases where further information on the code example is required
              and not directly relevant to the help doc purpose. For help doc
              relevant code comments, the comment will be extracted into its own
              section above the code block.
            </p>
          </div>
          <div>
            <textBlock.Header text="Help Docs Notes" type="h3" />
            <p>
              Help doc notes are a catch-all for relevant help doc information
              that does not belong to a particular section. The Notes section
              should be kept brief, where large note sections will be a
              potential indicator that the help doc is too expansive and should
              be split into multiple docs.
            </p>
          </div>
          <div>
            <textBlock.Header text="Help Docs Links" type="h3" />
            <p>
              Help doc links are external links for any relevant information
              that may be helpful for understanding the content of the help doc.
              The link section may be quite extensive and can include links to
              api documentation, blog posts, stackoverflow questions, etc. All
              links will include a line that explains the content of the link
              and its relationship to the help doc.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
