import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        |
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        |
        <Link href="/resume">
          <a>Resume</a>
        </Link>
      </nav>
    </header>
  );
}
