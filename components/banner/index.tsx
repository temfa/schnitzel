import React from "react";
import styles from "./styles.module.css";
import { Header } from "../header";
import Link from "next/link";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <Header />
        <div className={styles.body}>
          <p>WILLKOMMEN</p>
          <h2>RESERVIERE DEINEN TISCH</h2>
          <div>
            <Link href="tel:+0551-61559" target="_blank">
              Tisch Reservieren
            </Link>
            <Link href="/#menu">Speisekarte Öffnen</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
