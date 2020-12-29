import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/">
          <a>Home</a>
        </Link>
        {/* | */}
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        {/* | */}
        <Link href="/resume">
          <a>Résumé</a>
        </Link>
      </nav>
    </header>
  );
}
