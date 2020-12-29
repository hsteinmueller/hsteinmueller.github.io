import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "./footer";
import Header from "./header";

const preTitle = "hsteinmueller";

export default function Layout({ children, title, style }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title ? preTitle + " - " + title : preTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={style ? style : styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
