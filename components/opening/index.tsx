import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Opening = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left} data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
          <div>
            <p>Reservierung</p>
            <div></div>
          </div>
          <h2>Öffnungszeiten</h2>
          <Link href="tel:+0551-61559" target="_blank">
            Tisch reservieren
          </Link>
        </div>
        <div className={styles.right} data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
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
