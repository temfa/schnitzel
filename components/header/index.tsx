"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Close from "@/svgs/close";
import Bars from "@/svgs/bars";
import Image from "next/image";

export const Header = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <div className={mobile ? `${styles.mobile} ${styles.header}` : styles.header}>
      <div className={styles.logo}>
        <Image src="/images/logo.png" width={300} height={80} alt="Logo" />
        {mobile ? <Close action={() => setMobile(false)} /> : <Bars action={() => setMobile(true)} />}
      </div>
      <div className={styles.navbar}>
        <Link href="/" onClick={() => setMobile(false)}>
          Startseite
        </Link>
        <Link href="/#about" onClick={() => setMobile(false)}>
          Über Uns
        </Link>
        <Link href="/#gallery" onClick={() => setMobile(false)}>
          Galerie
        </Link>
        <Link href="/#menu" onClick={() => setMobile(false)}>
          Speisekarte
        </Link>
        <Link href="/#contact" onClick={() => setMobile(false)}>
          Kontakt
        </Link>
      </div>
      <Link href="tel:+0551-61559" target="_blank">
        Tisch Reservieren
      </Link>
    </div>
  );
};
