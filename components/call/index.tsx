import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Call = () => {
  return (
    <div className={styles.container} id="contact">
      <p>Contact us now</p>
      <Link href="tel:+0551-61559" target="_blank">
        +0551-61559
      </Link>
    </div>
  );
};

export default Call;
