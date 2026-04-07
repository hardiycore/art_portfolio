import React from "react";
import styles from "../styles/components/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className={styles.footer}>
      <a
        href="https://github.com/alexaldearroyo"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.githubIcon}
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <span> © 2026</span>
    </div>
  );
}


export default Footer;
