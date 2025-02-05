import React from "react";
import styles from "./styles.module.css";

const Counter = () => {
  return (
    <div className={styles.container}>
      <h2>We believe in making quality food</h2>
      <div className={styles.wrapper}>
        <div className={styles.single}>
          <h2>1287+</h2>
          <p>VISITORS DAILY</p>
        </div>
        <div className={styles.single}>
          <h2>578+</h2>
          <p>DELIVERIES MONTHLY</p>
        </div>
        <div className={styles.single}>
          <h2>200+</h2>
          <p>POSITIVE FEEDBACK</p>
        </div>
        <div className={styles.single}>
          <h2>2+</h2>
          <p>AWARDS AND HONORS</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
