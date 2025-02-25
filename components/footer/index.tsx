import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>©2024 Das Schnitzelparadies, Alle Rechte vorbehalten</p>
      </div>
      <div className={styles.right}>
        <Link href="/terms">Nutzungsbedingungen</Link>
        <Link href="/privacy">Datenschutzrichtlinie</Link>
      </div>
    </div>
  );
};

export default Footer;
