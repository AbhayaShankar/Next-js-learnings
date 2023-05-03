import fs from "fs";
import path from "path";
import matter from "gray-matter";

const pathDirectory = path.join(process.cwd(), "blogPosts");

const getPostsData = (fileName) => {
  const filePath = path.join(pathDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, ""); // removes the file extension

  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };

  return postData;
};

function getAllPosts() {
  const postFiles = fs.readdirSync(pathDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostsData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}
