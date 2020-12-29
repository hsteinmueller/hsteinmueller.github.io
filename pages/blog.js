import Link from "next/link";
import React from "react";
import Layout from "../components/layout";
import styles from "../styles/Blog.module.css";
import { getAllPostIds, getPostData } from "./api/posts";

export default function Blog({ posts }) {
  return (
    <Layout title="blog" style={styles.list}>
      <ul>
        {posts.map((post) => (
          <li className={styles.li}>
            <Link
              key={post.postData.slug}
              as={`/posts/${post.postData.slug}`}
              href="/posts/[slug]"
            >
              <a>{post.postData.title}</a>
            </Link>
            <div>{new Date(post.postData.date).toLocaleDateString()}</div>
            {/* <ReactMarkdown source={post.content} /> */}
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const paths = getAllPostIds();
  const posts = paths
    .map((p) => {
      return getPostData(p.params.slug);
    })
    .sort((a, b) => {
      return new Date(b.postData.date) - new Date(a.postData.date);
    });
  return {
    props: { posts },
  };
}
