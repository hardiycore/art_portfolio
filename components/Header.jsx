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
            <span className={styles.navLink}>Home</span>
          </Link>
        ) : (
          <span className={`${styles.navLink} ${styles.navLinkInactive}`}>
            Home
          </span>
        )}

        {router.pathname !== "/artworks" ? (
          <Link href="/artworks" passHref>
            <span className={styles.navLink}>Artworks</span>
          </Link>
        ) : (
          <span className={`${styles.navLink} ${styles.navLinkInactive}`}>
            Artworks
          </span>
        )}

        {router.pathname !== "/more" ? (
          <Link href="/more" passHref>
            <span className={styles.navLink}>More</span>
          </Link>
        ) : (
          <span className={`${styles.navLink} ${styles.navLinkInactive}`}>
            More
          </span>
        )}

      </div>
    </div>
  );
}

export default Header;
