"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Close from "@/svgs/close";
import Bars from "@/svgs/bars";

export const Header = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <div className={mobile ? `${styles.mobile} ${styles.header}` : styles.header}>
      <div className={styles.logo}>
        <h2>Das Schnitzelparadis</h2>
        {mobile ? <Close action={() => setMobile(false)} /> : <Bars action={() => setMobile(true)} />}
      </div>
      <div className={styles.navbar}>
        <Link href="/" onClick={() => setMobile(false)}>
          Home
        </Link>
        <Link href="/#about" onClick={() => setMobile(false)}>
          About
        </Link>
        <Link href="/#contact" onClick={() => setMobile(false)}>
          Contact
        </Link>
        <Link href="/#menu" onClick={() => setMobile(false)}>
          Menu
        </Link>
      </div>
      <button>Book a Table</button>
    </div>
  );
};
