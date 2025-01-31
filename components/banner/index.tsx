import React from "react";
import styles from "./styles.module.css";
import { Header } from "../header";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <Header />
        <div className={styles.body}>
          <p>HELLO, NEW FRIEND</p>
          <h2>RESERVE YOUR TABLE</h2>
          <div>
            <button>Book a Table</button>
            <button>Open Menu</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
