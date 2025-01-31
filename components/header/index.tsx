import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <h2>Das Schnitzelparadis</h2>
      </div>
      <div className={styles.navbar}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/menu">Menu</Link>
      </div>
      <button>Book a Table</button>
    </div>
  );
};
