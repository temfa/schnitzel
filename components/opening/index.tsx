import React from "react";
import styles from "./styles.module.css";

const Opening = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div>
            <p>Reservation</p>
            <div></div>
          </div>
          <h2>Working Hours</h2>
          <button>Book a Table</button>
        </div>
        <div className={styles.right}>
          <div>
            <h3>Mittwoch - Samstag</h3>
            <p>16:00 Uhr bis 22:00 Uhr</p>
          </div>
          <div>
            <h3>Sonntag</h3>
            <p>
              11:30 Uhr bis 14:00 Uhr <br /> und 16:00 Uhr bis 22:00 Uhr
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opening;
