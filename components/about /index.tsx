import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container} id="about">
      <div className={styles.left}>
        <div className={styles.leftTop}>
          <p>About Us</p>
          <div></div>
        </div>
        <div className={styles.leftBottom}>
          <h2>We Invite You to Visit Our Coffee House</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at ac eu donec ut. Sagittis vestibulum at
            quis non massa netus.
          </p>
        </div>
      </div>
      <Image src="/images/about.jpg" alt="About" width={720} height={550} />
    </div>
  );
};

export default About;
