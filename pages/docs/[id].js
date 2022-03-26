import Meta from "../../components/meta";
import Tag from "../../components/tag";
import { getDocFromId, getAllDocIds } from "../../lib/docs";
import { getSectionById } from "../../lib/sections";
import { getTagById } from "../../lib/tags";
import { formatDate } from "../../utils";

export default function Doc({ docData, sectionData, tagData }) {
  return (
    <>
      <Meta title="Doc" description="Doc" />
      <div>
        <h1 className="mb-4 text-3xl text-center sm:text-4xl dark:text-orange-300">
          {docData.title}
        </h1>
        <p className="text-sm font-light text-center text-gray-500">
          {docData.updatedAt
            ? `Updated by Dwayne Manlove on ${formatDate(docData.updatedAt)}`
            : `Created by Dwayne Manlove on ${formatDate(docData.createdAt)}`}
        </p>
        <div className="my-4 space-y-4">
          <div>
            <div className="mb-2 font-light">Section</div>
            <span className="px-2 py-1 text-xs bg-orange-100 rounded dark:bg-orange-300 dark:text-black">
              {sectionData.name}
            </span>
          </div>
          <div>
            <div className="mb-2 font-light">Tags</div>
            <div className="flex flex-wrap -ml-1 space-x-1 space-y-1">
              {tagData.map((tag) => (
                <Tag key={`tag ${tag.id}`} text={tag.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <article className="text-xl list-disc list-inside sm:text-2xl">
        <div
          dangerouslySetInnerHTML={{ __html: docData.contentHtml }}
          className="prose list-disc list-outside max-w-none prose-slate md:prose-lg prose-headings:font-light prose-headings:text-black prose-p:text-black prose-li:text-black prose-ul:text-black dark:prose-strong:text-orange-300 prose-a:text-orange-400 dark:prose-p:text-inherit dark:prose-li:text-inherit dark:prose-ul:text-inherit dark:prose-invert dark:prose-headings:text-orange-300 dark:prose-a:text-orange-300 marker:text-black dark:marker:text-inherit prose-p:m-0 prose-ul:m-0 prose-li:m-0 md:prose-p:m-0 md:prose-ul:m-0 md:prose-li:m-0 prose-pre:m-0 md:prose-pre:m-0 prose-h3:text-center"
        />
      </article>
    </>
  );
}

export async function getStaticProps({ params }) {
  const docData = await getDocFromId(params.id);
  const sectionData = getSectionById(docData.sectionId);
  const tagData = docData.tagIds.map((tagId) => getTagById(tagId));

  return {
    props: {
      docData,
      sectionData,
      tagData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllDocIds();
  return {
    paths,
    fallback: false,
  };
}
