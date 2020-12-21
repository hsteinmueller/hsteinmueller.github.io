import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

import styles from "../styles/Home.module.css";

const preTitle = "hsteinmueller";

export default function Layout({ children, title }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title ? preTitle + " - " + title : preTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
