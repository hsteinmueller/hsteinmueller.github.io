import React from "react";
import Link from "next/link";

import Layout from "../components/layout";

import styles from "../styles/Home.module.css";

import { getAllPostIds, getPostData } from "./api/posts";

export default function Blog({ posts }) {
  return (
    <Layout title="blog">
      {posts.map((post) => (
        <h1 className={styles.title}>
          <Link
            key={post.postData.slug}
            as={`/posts/${post.postData.slug}`}
            href="/posts/[slug]"
          >
            <a className="hover:underline">{post.postData.title}</a>
          </Link>
        </h1>
      ))}
    </Layout>
  );
}

export function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const paths = getAllPostIds();
  const posts = paths.map((p) => {
    return getPostData(p.params.slug);
  });
  return {
    props: { posts },
  };
}
