const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const docsDirectory = path.join(process.cwd(), "helpDocs");

module.exports = async () => {
  // fetch the file names for all help docs
  const fileNames = fs.readdirSync(docsDirectory);
  const allDocsData = fileNames.map((fileName) => {
    // Construct the id by removing ".md" from file name
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(docsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the help doc metadata
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort docs by creation date
  const docs = allDocsData.sort(({ createdAt: a }, { createdAt: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
  // save the metadata to the data folder
  fs.writeFileSync("data/docs.json", JSON.stringify(docs));
};
