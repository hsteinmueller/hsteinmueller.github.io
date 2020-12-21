import React from "react";
import Link from "next/link";

import Layout from "../components/layout";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>More soon! 😎</h1>
      <h2>
        In the mean time, check out my{' '}
        <Link href="/resume">
          <a>Résumé</a>
        </Link>
        !
      </h2>
    </Layout>
  );
}
