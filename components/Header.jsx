import React from "react";
import styles from "../styles/components/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  return (
    <div className={styles.header}>
      <div className={styles.headerText}>
        <p>hardiycore</p>
      </div>

      <div className={styles.headerNav}>
        {router.pathname !== "/" ? (
          <Link href="/" passHref>
            <span className={styles.navLink}>home</span>
          </Link>
        ) : (
          <span className={`${styles.navLink} ${styles.navLinkInactive}`}>
            home
          </span>
        )}

        {router.pathname !== "/trabalhos" ? (
          <Link href="/artworks" passHref>
            <span className={styles.navLink}>trabalhos</span>
          </Link>
        ) : (
          <span className={`${styles.navLink} ${styles.navLinkInactive}`}>
            trabalhos
          </span>
        )}

        {router.pathname !== "/more" ? (
          <Link href="/more" passHref>
            <span className={styles.navLink}>sobre</span>
          </Link>
        ) : (
          <span className={`${styles.navLink} ${styles.navLinkInactive}`}>
            sobre
          </span>
        )}

      </div>
    </div>
  );
}

export default Header;
