import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import allDocs from "../data/docs.json";

const docsDirectory = path.join(process.cwd(), "helpDocs");

export function getAllDocIds() {
  return allDocs.map(({ id }) => {
    return {
      params: {
        id,
      },
    };
  });
}

export async function getDocFromId(id) {
  const fullPath = path.join(docsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the help doc metadata
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
