import { FaEnvelope } from "react-icons/fa";
import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        <a href="mailto:harald.steinmueller@gmail.com">
          <FaEnvelope /> &nbsp; harald.steinmueller@gmail.com
        </a>
      </span>
      <span>© 2020 Harald Steinmueller</span>
    </footer>
  );
}
