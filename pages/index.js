import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>hsteinmueller - blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>More soon!</h1>
        <div>😎</div>

        {/* <div className={styles.Link}>
          <Link href="/blog">
            <a>Home</a>
          </Link>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <span>
          <a href="mailto:harald.steinmueller@gmail.com">
            <FaEnvelope /> &nbsp; harald.steinmueller@gmail.com
          </a>
        </span>
        <span>© 2020 Harald Steinmueller</span>
      </footer>
    </div>
  );
}
