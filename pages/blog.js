import React from "react";
import Link from "next/link";

import Layout from "../components/layout";

import styles from "../styles/Home.module.css";

export default function Blog() {
  return (
    <Layout>
      <h1 className={styles.title}>More soon! 😎</h1>
      <div>
        <p>In the mean time, check out my</p>
        <Link href="/resume">
          <a>Resume</a>
        </Link>
      </div>
    </Layout>
  );
}
