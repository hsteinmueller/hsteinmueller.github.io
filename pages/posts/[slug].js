import ReactMarkdown from "react-markdown";
import Layout from "../../components/layout";

import { getAllPostIds, getPostData } from "../api/posts";

export default function Post({ content, postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.date}
      <br />
      <ReactMarkdown source={content} />
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// params contains 'slug' because of [slug]
export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const { content, postData } = getPostData(params.slug);
  return {
    props: {
      postData,
      content,
    },
  };
}
