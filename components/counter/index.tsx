import React from "react";
import styles from "./styles.module.css";

const Counter = () => {
  return (
    <div className={styles.container}>
      <h2>Wir glauben daran, qualitativ hochwertiges Essen zu machen</h2>
      <div className={styles.wrapper}>
        <div className={styles.single}>
          <h2>1287+</h2>
          <p>BESUCHER TÄGLICH</p>
        </div>
        <div className={styles.single}>
          <h2>578+</h2>
          <p>LIEFERUNGEN MONATLICH</p>
        </div>
        <div className={styles.single}>
          <h2>200+</h2>
          <p>POSITIVES FEEDBACK</p>
        </div>
        <div className={styles.single}>
          <h2>2+</h2>
          <p>AUSZEICHNUNGEN UND EHREN</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
