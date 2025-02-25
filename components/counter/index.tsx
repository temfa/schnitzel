import React from "react";
import styles from "./styles.module.css";

const Counter = () => {
  return (
    <div className={styles.container}>
      <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
        Wir glauben daran, qualitativ hochwertiges Essen zu machen
      </h2>
      <div className={styles.wrapper}>
        <div className={styles.single} data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
          <h2>1287+</h2>
          <p>BESUCHER TÄGLICH</p>
        </div>
        <div className={styles.single} data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
          <h2>578+</h2>
          <p>LIEFERUNGEN MONATLICH</p>
        </div>
        <div className={styles.single} data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
          <h2>200+</h2>
          <p>POSITIVES FEEDBACK</p>
        </div>
        <div className={styles.single} data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
          <h2>2+</h2>
          <p>AUSZEICHNUNGEN UND EHREN</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
