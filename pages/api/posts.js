import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

export default (req, res) => {
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};

// this is called by getStaticPaths and gets all the filepaths for the posts
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

// this gets called by getStaticProps with the slug defined in getAllPostIds
export function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the slug and content
  return {
    postData: { slug, ...matterResult.data },
    content: matterResult.content,
  };
}
