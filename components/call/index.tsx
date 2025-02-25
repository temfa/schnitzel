import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Call = () => {
  return (
    <div className={styles.container} id="contact">
      <p data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
        Kontaktiere uns jetzt
      </p>
      <Link href="tel:+0551-61559" target="_blank" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
        +0551-61559
      </Link>
    </div>
  );
};

export default Call;
